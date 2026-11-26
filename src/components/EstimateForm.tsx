import { AlertCircle, Check, CheckCircle2, Copy, MessageSquare, Paperclip, Phone, X } from "lucide-react";
import { useState } from "react";
import { budgets, contactMethods, projectTypes, projectTypeLabel } from "../data/contactOptions";
import { site } from "../data/site";

interface EstimateFormProps {
  defaultProjectType?: string;
}

interface AttachedFile {
  filename: string;
  type: string;
  size: number;
  base64: string;
}

export function EstimateForm({ defaultProjectType = "backsplash-installation" }: EstimateFormProps) {
  const validDefault = projectTypes.some((p) => p.value === defaultProjectType)
    ? defaultProjectType
    : "backsplash-installation";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [projectType, setProjectType] = useState(validDefault);
  const [budget, setBudget] = useState("");
  const [contactMethod, setContactMethod] = useState("phone");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [attachments, setAttachments] = useState<AttachedFile[]>([]);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "success"; mock: boolean }
    | { kind: "unconfigured"; message: string }
    | { kind: "error"; message: string }
  >({ kind: "idle" });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = Array.from(e.target.files || []);
    if (fileList.length === 0) return;

    const allowed = new Set(["image/jpeg", "image/png", "image/webp", "image/avif"]);
    const next: AttachedFile[] = [...attachments];
    for (const file of fileList) {
      if (next.length >= 3) break;
      if (!allowed.has(file.type)) {
        setFieldErrors((prev) => ({
          ...prev,
          attachments: "Please select JPEG, PNG, WebP, or AVIF images only.",
        }));
        continue;
      }
      if (file.size > 3 * 1024 * 1024) {
        setFieldErrors((prev) => ({
          ...prev,
          attachments: `${file.name} is larger than 3 MB. Please choose a smaller photo.`,
        }));
        continue;
      }

      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = typeof reader.result === "string" ? reader.result : "";
          const stripped = result.includes(",") ? result.split(",")[1] : result;
          resolve(stripped);
        };
        reader.readAsDataURL(file);
      });

      next.push({
        filename: file.name,
        type: file.type,
        size: file.size,
        base64,
      });
    }
    setAttachments(next);
    e.target.value = "";
  };

  const removeAttachment = (idx: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== idx));
  };

  const formatSummaryText = () =>
    [
      `Estimate Request for Andre Preer`,
      `Name: ${name || "Not provided"}`,
      `Phone: ${phone || "Not provided"}`,
      `Location: ${location || "Springfield area"}`,
      `Project: ${projectTypeLabel(projectType)}`,
      `Budget: ${budget || "Prefer to discuss"}`,
      `Preferred contact: ${contactMethod}`,
      "",
      description,
    ].join("\n");

  const buildSmsHref = () => {
    const body = encodeURIComponent(formatSummaryText());
    return `sms:${site.phoneTel}?&body=${body}`;
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(formatSummaryText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Ignore clipboard failures on restricted contexts
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFieldErrors({});
    setStatus({ kind: "idle" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          location,
          projectType,
          budget,
          contactMethod,
          description,
          website,
          attachments: attachments.map((file) => ({
            filename: file.filename,
            type: file.type,
            base64: file.base64,
          })),
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        mock?: boolean;
        code?: string;
        error?: string;
        fields?: Record<string, string>;
      };

      if (response.ok && data.ok) {
        setStatus({ kind: "success", mock: Boolean(data.mock) });
        return;
      }

      if (data.fields && Object.keys(data.fields).length > 0) {
        setFieldErrors(data.fields);
      }

      if (response.status === 503 || data.code === "unconfigured") {
        setStatus({
          kind: "unconfigured",
          message:
            data.error ||
            "Automated form relay is paused while email is turned off. Please call or text your pre-filled summary directly to 309-431-1805.",
        });
        return;
      }

      setStatus({
        kind: "error",
        message: data.error || "Please review the fields below and try again.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: `Network error checking your request. Please call or text ${site.phoneDisplay}.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (status.kind === "success") {
    return (
      <div className="rounded-xl border border-[#C6D5CA] bg-white p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#1F3A2E]" aria-hidden="true" />
          <div>
            <h3 className="font-display text-2xl font-semibold text-[#1A1B19]">
              {status.mock ? "Test Mode — Request Validated" : "Estimate Request Sent"}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#57534C]">
              {status.mock
                ? "Mock mode is enabled on this environment, so your message was validated without sending."
                : `Thank you, ${name}. Andre has received your ${projectTypeLabel(projectType).toLowerCase()} inquiry and will follow up by ${contactMethod}.`}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  setStatus({ kind: "idle" });
                  setName("");
                  setPhone("");
                  setLocation("");
                  setDescription("");
                  setAttachments([]);
                }}
                className="rounded-md border border-[#E2DDD4] px-4 py-2 text-xs font-semibold text-[#1A1B19] hover:bg-[#EFECE6]"
              >
                Send Another Inquiry
              </button>
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex items-center gap-2 rounded-md bg-[#1F3A2E] px-4 py-2 text-xs font-semibold text-white hover:bg-[#162B22]"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-[#E2DDD4] bg-white p-5 sm:p-8"
    >
      <div className="border-b border-[#EFECE6] pb-5">
        <h2 className="font-display text-2xl font-semibold text-[#1A1B19] sm:text-3xl">
          Request a Project Estimate
        </h2>
        <p className="mt-1.5 text-sm text-[#57534C]">
          Prepare your project details below to send directly by text or review before calling{" "}
          <a href={`tel:${site.phoneTel}`} className="font-semibold text-[#1A1B19] tabular-nums">
            {site.phoneDisplay}
          </a>
          .
        </p>
      </div>

      {/* Honeypot field hidden from screen readers and users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {status.kind === "unconfigured" && (
        <div
          role="status"
          className="mt-6 rounded-lg border border-[#D4B896] bg-[#FAF6F0] p-4 text-sm text-[#1A1B19]"
        >
          <div className="flex items-start gap-2.5">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#9A6B3B]" aria-hidden="true" />
            <div>
              <p className="font-semibold">Call or Text Your Prepared Request</p>
              <p className="mt-1 text-[#57534C]">{status.message}</p>
              <div className="mt-3 flex flex-col sm:flex-row sm:flex-wrap gap-2.5">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-md bg-[#1F3A2E] px-4 py-2 text-xs font-semibold text-white tabular-nums"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  Call {site.phoneDisplay}
                </a>
                <a
                  href={buildSmsHref()}
                  className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-md border border-[#D4CEC3] bg-white px-4 py-2 text-xs font-semibold text-[#1A1B19]"
                >
                  <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                  Open Pre-Filled Text Message
                </a>
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-md border border-[#D4CEC3] bg-white px-4 py-2 text-xs font-semibold text-[#1A1B19]"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#1F3A2E]" aria-hidden="true" />
                      Copied Summary
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      Copy Summary
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {status.kind === "error" && (
        <div
          role="alert"
          className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-900"
        >
          <div className="flex items-start gap-2.5">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-700" aria-hidden="true" />
            <p>{status.message}</p>
          </div>
        </div>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className="block text-xs font-semibold text-[#1A1B19]">
            Full Name *
          </label>
          <input
            id="lead-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="mt-1.5 w-full rounded-md border border-[#D4CEC3] bg-[#F8F6F2]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#1A1B19] placeholder:text-[#8E887E] focus:border-[#1F3A2E] focus:bg-white focus:outline-none"
          />
          {fieldErrors.name && (
            <p className="mt-1 text-xs text-red-700">{fieldErrors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="lead-phone" className="block text-xs font-semibold text-[#1A1B19]">
            Phone Number *
          </label>
          <input
            id="lead-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(217) 555-0199"
            className="mt-1.5 w-full rounded-md border border-[#D4CEC3] bg-[#F8F6F2]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#1A1B19] tabular-nums placeholder:text-[#8E887E] focus:border-[#1F3A2E] focus:bg-white focus:outline-none"
          />
          {fieldErrors.phone && (
            <p className="mt-1 text-xs text-red-700">{fieldErrors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="lead-location" className="block text-xs font-semibold text-[#1A1B19]">
            City or Town *
          </label>
          <input
            id="lead-location"
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Springfield, Chatham, Jacksonville..."
            className="mt-1.5 w-full rounded-md border border-[#D4CEC3] bg-[#F8F6F2]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#1A1B19] placeholder:text-[#8E887E] focus:border-[#1F3A2E] focus:bg-white focus:outline-none"
          />
          {fieldErrors.location && (
            <p className="mt-1 text-xs text-red-700">{fieldErrors.location}</p>
          )}
        </div>

        <div>
          <label htmlFor="lead-budget" className="block text-xs font-semibold text-[#1A1B19]">
            Approximate Budget (Optional)
          </label>
          <select
            id="lead-budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="mt-1.5 w-full rounded-md border border-[#D4CEC3] bg-[#F8F6F2]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#1A1B19] focus:border-[#1F3A2E] focus:bg-white focus:outline-none"
          >
            <option value="">Optional — select if helpful</option>
            {budgets.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="lead-project-type" className="block text-xs font-semibold text-[#1A1B19]">
            Project Type *
          </label>
          <select
            id="lead-project-type"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="mt-1.5 w-full rounded-md border border-[#D4CEC3] bg-[#F8F6F2]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#1A1B19] focus:border-[#1F3A2E] focus:bg-white focus:outline-none"
          >
            {projectTypes.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {fieldErrors.projectType && (
            <p className="mt-1 text-xs text-red-700">{fieldErrors.projectType}</p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <span className="block text-xs font-semibold text-[#1A1B19]">Preferred Contact Method *</span>
        <div className="mt-2 flex flex-wrap gap-3">
          {contactMethods.map((method) => (
            <label
              key={method.value}
              className={`inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-md border px-3.5 py-2 text-xs font-medium transition-colors ${
                contactMethod === method.value
                  ? "border-[#1F3A2E] bg-[#1F3A2E] text-white"
                  : "border-[#D4CEC3] bg-[#F8F6F2]/50 text-[#1A1B19] hover:bg-[#EFECE6]"
              }`}
            >
              <input
                type="radio"
                name="contactMethod"
                value={method.value}
                checked={contactMethod === method.value}
                onChange={(e) => setContactMethod(e.target.value)}
                className="sr-only"
              />
              {method.label}
            </label>
          ))}
        </div>
        {fieldErrors.contactMethod && (
          <p className="mt-1 text-xs text-red-700">{fieldErrors.contactMethod}</p>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor="lead-description" className="block text-xs font-semibold text-[#1A1B19]">
          Project Description *
        </label>
        <textarea
          id="lead-description"
          rows={4}
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Tell Andre about your backsplash, tile floor, shower tile, or stone project, rough size, materials in mind, and ideal timing..."
          className="mt-1.5 w-full rounded-md border border-[#D4CEC3] bg-[#F8F6F2]/50 px-3.5 py-2.5 text-base sm:text-sm text-[#1A1B19] placeholder:text-[#8E887E] focus:border-[#1F3A2E] focus:bg-white focus:outline-none"
        />
        {fieldErrors.description && (
          <p className="mt-1 text-xs text-red-700">{fieldErrors.description}</p>
        )}
      </div>

      <div className="mt-5">
        <label className="block text-xs font-semibold text-[#1A1B19]">
          Attach Space Photos (Optional · Up to 3 images, 3 MB max each)
        </label>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <label className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-md border border-[#D4CEC3] bg-[#F8F6F2] px-3.5 py-2 text-xs font-medium text-[#1A1B19] transition-colors hover:bg-[#EFECE6]">
            <Paperclip className="h-3.5 w-3.5 text-[#57534C]" aria-hidden="true" />
            Choose Photos
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/avif"
              multiple
              disabled={attachments.length >= 3}
              onChange={handleFileChange}
              className="sr-only"
            />
          </label>
          {attachments.map((file, idx) => (
            <span
              key={`${file.filename}-${idx}`}
              className="inline-flex items-center gap-1.5 border border-[#E2DDD4] bg-white px-2.5 py-1 text-xs text-[#1A1B19]"
            >
              <span className="max-w-[140px] truncate">{file.filename}</span>
              <button
                type="button"
                onClick={() => removeAttachment(idx)}
                aria-label={`Remove ${file.filename}`}
                className="text-[#57534C] hover:text-red-700"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
          ))}
        </div>
        {fieldErrors.attachments && (
          <p className="mt-1 text-xs text-red-700">{fieldErrors.attachments}</p>
        )}
      </div>

      <div className="mt-7 flex flex-col gap-3 border-t border-[#EFECE6] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[#57534C]">
          Call or text directly:{" "}
          <a href={`tel:${site.phoneTel}`} className="font-semibold text-[#1A1B19] tabular-nums">
            {site.phoneDisplay}
          </a>
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center rounded-md bg-[#1F3A2E] px-6 py-3 text-sm font-semibold text-[#F8F6F2] transition-colors hover:bg-[#162B22] disabled:opacity-60 whitespace-nowrap shrink-0"
        >
          {submitting ? "Preparing Request..." : "Prepare & Send Request"}
        </button>
      </div>
    </form>
  );
}
