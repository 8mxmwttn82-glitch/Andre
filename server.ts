import "dotenv/config";
import express from "express";
import type { Request, Response } from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer as createViteServer } from "vite";
import {
  budgets,
  budgetLabel,
  contactMethods,
  contactMethodLabel,
  projectTypes,
  projectTypeLabel,
} from "./src/data/contactOptions.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 3000);
const isProduction = process.env.NODE_ENV === "production";

interface AttachmentPayload {
  filename: string;
  type: string;
  base64: string;
}

interface ValidatedLead {
  name: string;
  phone: string;
  email: string;
  location: string;
  projectType: string;
  description: string;
  budget: string;
  contactMethod: string;
  attachments: AttachmentPayload[];
}

const projectSet = new Set<string>(projectTypes.map((item) => item.value));
const budgetSet = new Set<string>(budgets.map((item) => item.value));
const methodSet = new Set<string>(contactMethods.map((item) => item.value));
const allowedMimeTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/avif"]);

function cleanLine(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]/g, "").replace(/\s+/g, " ").trim().slice(0, max);
}

function cleanText(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/\r\n/g, "\n")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, max);
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      default:
        return "&#39;";
    }
  });
}

function parseMailbox(value: string): { email: string; name: string } | null {
  const trimmed = value.replace(/[\r\n]/g, "").trim();
  const wrapped = trimmed.match(/^(.*)<([^<>]+)>$/);
  const email = (wrapped ? wrapped[2] : trimmed).trim();
  const name = wrapped ? wrapped[1].replace(/["']/g, "").trim() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  return { email, name };
}

function resolveProvider(): "resend" | "mock" | "unconfigured" {
  const choice = (process.env.MAIL_PROVIDER || "auto").trim().toLowerCase();
  const resendReady = Boolean(
    process.env.RESEND_API_KEY &&
      process.env.CONTACT_TO &&
      process.env.CONTACT_FROM &&
      parseMailbox(process.env.CONTACT_FROM) &&
      parseMailbox(process.env.CONTACT_TO),
  );
  if (choice === "mock") {
    return process.env.ALLOW_MOCK_EMAIL === "true" ? "mock" : "unconfigured";
  }
  if (choice === "resend") {
    return resendReady ? "resend" : "unconfigured";
  }
  return resendReady ? "resend" : "unconfigured";
}

function sanitizeFilename(name: string, mime: string): string {
  const ext =
    mime === "image/png"
      ? "png"
      : mime === "image/webp"
        ? "webp"
        : mime === "image/avif"
          ? "avif"
          : "jpg";
  const base = name.split(/[/\\]/).pop() || "photo";
  const stem = base
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return `${stem || "photo"}.${ext}`;
}

function validateContactBody(body: Record<string, unknown>):
  | { ok: true; value: ValidatedLead }
  | { ok: false; code: "spam" | "validation"; fields: Record<string, string> } {
  const honeypot = typeof body.website === "string" ? body.website : "";
  if (honeypot.trim() !== "") {
    return { ok: false, code: "spam", fields: {} };
  }

  const fields: Record<string, string> = {};
  const name = cleanLine(body.name, 80);
  const phone = cleanLine(body.phone, 30);
  const email = cleanLine(body.email, 120).toLowerCase();
  const location = cleanLine(body.location, 80);
  const projectType = cleanLine(body.projectType, 80);
  const description = cleanText(body.description, 4000);
  const budget = cleanLine(body.budget, 40);
  const contactMethod = cleanLine(body.contactMethod, 20);

  if (name.length < 2 || !/[\p{L}]/u.test(name)) {
    fields.name = "Enter your name.";
  }

  const digits = phone.replace(/\D/g, "");
  const national = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  if (national.length !== 10) {
    fields.phone = "Enter a 10-digit phone number Andre can call.";
  }

  if (email && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.includes(",") || email.includes(";"))) {
    fields.email = "Enter a valid email address, or leave it blank.";
  }

  if (location.length < 2) {
    fields.location = "Enter the Springfield or Central Illinois town for the project.";
  }

  if (!projectSet.has(projectType)) {
    fields.projectType = "Choose a project category.";
  }

  if (description.length < 20) {
    fields.description = "Describe your project in at least a sentence or two (20+ characters).";
  }

  if (budget && !budgetSet.has(budget)) {
    fields.budget = "Choose a budget range, or leave it unselected.";
  }

  if (!methodSet.has(contactMethod)) {
    fields.contactMethod = "Choose how you would like Andre to reach you.";
  }

  const rawAttachments = Array.isArray(body.attachments) ? body.attachments : [];
  if (rawAttachments.length > 3) {
    fields.attachments = "Attach up to 3 photos.";
  }

  const attachments: AttachmentPayload[] = [];
  for (const item of rawAttachments.slice(0, 3)) {
    if (!item || typeof item !== "object") continue;
    const record = item as Record<string, unknown>;
    const mime = typeof record.type === "string" ? record.type : "";
    const base64 = typeof record.base64 === "string" ? record.base64 : "";
    const filename = typeof record.filename === "string" ? record.filename : "photo.jpg";
    if (!allowedMimeTypes.has(mime)) {
      fields.attachments = "Photos must be JPEG, PNG, WebP, or AVIF images.";
      break;
    }
    const approxBytes = Math.floor((base64.length * 3) / 4);
    if (approxBytes > 3.5 * 1024 * 1024) {
      fields.attachments = "Each attached photo must be under 3 MB.";
      break;
    }
    if (base64.length > 0) {
      attachments.push({
        filename: sanitizeFilename(filename, mime),
        type: mime,
        base64,
      });
    }
  }

  if (Object.keys(fields).length > 0) {
    return { ok: false, code: "validation", fields };
  }

  return {
    ok: true,
    value: {
      name,
      phone,
      email,
      location,
      projectType,
      description,
      budget,
      contactMethod,
      attachments,
    },
  };
}

function buildEmail(lead: ValidatedLead) {
  const type = projectTypeLabel(lead.projectType);
  const budget = lead.budget ? budgetLabel(lead.budget) : "Not specified";
  const method = contactMethodLabel(lead.contactMethod);
  const sent = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    dateStyle: "full",
    timeStyle: "short",
  });

  const subject = `Estimate request — ${lead.name} (${lead.location})`.replace(/[\r\n]+/g, " ").slice(0, 180);
  const photoLine =
    lead.attachments.length === 0
      ? "No photos attached."
      : `${lead.attachments.length} photo${lead.attachments.length === 1 ? "" : "s"} attached: ${lead.attachments
          .map((a) => a.filename)
          .join(", ")}`;

  const text = [
    "New project estimate request — Andre Preer",
    "",
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    ...(lead.email ? [`Email: ${lead.email}`] : []),
    `Location: ${lead.location}`,
    `Project type: ${type}`,
    `Budget range: ${budget}`,
    `Preferred contact: ${method}`,
    photoLine,
    "",
    "Project description:",
    lead.description,
    "",
    `Sent: ${sent} (Central Time)`,
  ].join("\n");

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ...(lead.email ? ([["Email", lead.email]] as [string, string][]) : []),
    ["Location", lead.location],
    ["Project type", type],
    ["Budget range", budget],
    ["Preferred contact", method],
    ["Photos", photoLine],
  ];

  const html = `<!doctype html><html><body style="font-family:Georgia,serif;color:#1A1B19;line-height:1.5">
    <p style="letter-spacing:.12em;text-transform:uppercase;font-family:Arial,sans-serif;font-size:12px;color:#1F3A2E">Andre Preer · Residential Craftsmanship</p>
    <h1 style="font-weight:600;font-size:24px">New Estimate Request</h1>
    <table style="border-collapse:collapse">${rows
      .map(
        ([label, value]) =>
          `<tr><th style="text-align:left;padding:6px 16px 6px 0;vertical-align:top;font-family:Arial,sans-serif;font-size:13px;color:#57534C">${escapeHtml(
            label,
          )}</th><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`,
      )
      .join("")}</table>
    <h2 style="font-size:18px;font-weight:600;margin-top:20px">Project Description</h2>
    <p style="white-space:pre-wrap">${escapeHtml(lead.description)}</p>
    <p style="font-family:Arial,sans-serif;font-size:13px;color:#57534C">Sent ${escapeHtml(sent)} (Central Time).</p>
  </body></html>`;

  return { subject, text, html };
}

async function startServer() {
  const app = express();
  app.disable("x-powered-by");
  app.use(express.json({ limit: "15mb" }));
  app.use(express.urlencoded({ extended: true, limit: "15mb" }));

  app.get("/api/form-config", (_req: Request, res: Response) => {
    const provider = resolveProvider();
    res.setHeader("Cache-Control", "no-store");
    res.json({
      providerConfigured: provider !== "unconfigured",
      mode: provider,
    });
  });

  app.post("/api/contact", async (req: Request, res: Response) => {
    res.setHeader("Cache-Control", "no-store");
    const validated = validateContactBody((req.body || {}) as Record<string, unknown>);
    if (!validated.ok) {
      res.status(400).json({
        ok: false,
        code: validated.code,
        error:
          validated.code === "spam"
            ? "Submission rejected."
            : "Please check the highlighted fields below.",
        fields: validated.fields,
      });
      return;
    }

    const provider = resolveProvider();
    if (provider === "unconfigured") {
      res.status(503).json({
        ok: false,
        code: "unconfigured",
        error:
          "Email delivery is turned off for now. Please call or text your prepared project summary directly to 309-431-1805.",
      });
      return;
    }

    if (provider === "mock") {
      res.status(200).json({
        ok: true,
        mock: true,
        attachmentCount: validated.value.attachments.length,
      });
      return;
    }

    const from = parseMailbox(process.env.CONTACT_FROM || "");
    const to = parseMailbox(process.env.CONTACT_TO || "");
    if (!from || !to || !process.env.RESEND_API_KEY) {
      res.status(503).json({
        ok: false,
        code: "unconfigured",
        error:
          "Automated form email delivery is not configured on this server yet. Please call Andre directly at 309-431-1805.",
      });
      return;
    }

    try {
      const emailPayload = buildEmail(validated.value);
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: from.name ? `${from.name} <${from.email}>` : from.email,
          to: [to.email],
          ...(validated.value.email ? { reply_to: validated.value.email } : {}),
          subject: emailPayload.subject,
          html: emailPayload.html,
          text: emailPayload.text,
          attachments: validated.value.attachments.map((file) => ({
            filename: file.filename,
            content: file.base64,
            content_type: file.type,
          })),
        }),
      });

      if (!response.ok) {
        res.status(502).json({
          ok: false,
          code: "delivery_failed",
          error:
            "Could not deliver your request automatically right now. Please call or text 309-431-1805 directly.",
        });
        return;
      }

      res.status(200).json({
        ok: true,
        mock: false,
        attachmentCount: validated.value.attachments.length,
      });
    } catch {
      res.status(502).json({
        ok: false,
        code: "delivery_failed",
        error:
          "Unable to reach the automated delivery service. Please call or text 309-431-1805 directly.",
      });
    }
  });

  app.get("/robots.txt", (req: Request, res: Response) => {
    const baseUrl =
      process.env.APP_URL && process.env.APP_URL !== "MY_APP_URL"
        ? process.env.APP_URL.replace(/\/$/, "")
        : `${req.protocol}://${req.get("host")}`;
    res.type("text/plain").send(`User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`);
  });

  app.get("/sitemap.xml", (req: Request, res: Response) => {
    const baseUrl =
      process.env.APP_URL && process.env.APP_URL !== "MY_APP_URL"
        ? process.env.APP_URL.replace(/\/$/, "")
        : `${req.protocol}://${req.get("host")}`;
    const routes = [
      "/",
      "/kitchens",
      "/bathrooms",
      "/tile-stonework",
      "/interior-improvements",
      "/outdoor-landscaping",
      "/services",
      "/projects",
      "/process",
      "/about",
      "/contact",
      "/services/backsplash-installation",
      "/services/decorative-stone-backsplashes",
      "/services/cabinets",
      "/services/countertops",
      "/services/kitchen-islands-layout",
      "/services/full-kitchen-remodels",
      "/services/lighting-finishing",
      "/services/bathroom-shower-tile",
      "/services/bathroom-vanity-stone",
      "/services/tile-flooring",
      "/services/custom-tile-stonework",
      "/services/specialty-stone-water",
      "/services/interior-stone-hearths",
      "/services/interior-trim-finishing",
      "/services/interior-exterior",
      "/services/limestone-walls-stonework",
      "/services/patios-hardscaping-outdoor-living",
      "/services/landscape-design-installation",
      "/services/fire-features",
    ];
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
      .map((route) => `  <url><loc>${baseUrl}${route}</loc><changefreq>weekly</changefreq></url>`)
      .join("\n")}\n</urlset>`;
    res.type("application/xml").send(xml);
  });

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, "dist");
    app.use(express.static(distDir, { maxAge: "7d" }));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Andre Preer website server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
