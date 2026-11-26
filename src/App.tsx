/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { serviceBySlug, site } from "./data/site";
import { generatePageJsonLd } from "./data/structuredData";
import { AboutPage } from "./pages/AboutPage";
import { CategoryPage } from "./pages/CategoryPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ProcessPage } from "./pages/ProcessPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { ServicesIndexPage } from "./pages/ServicesIndexPage";

interface RouteMeta {
  title: string;
  description: string;
}

function getRouteMeta(pathname: string): RouteMeta {
  if (pathname === "/") {
    return {
      title: "Andre Preer | Kitchen Backsplashes, Tile, Stonework & Home Improvements — Springfield, IL",
      description:
        "Exceptional residential craftsmanship inside and out in Springfield and Central Illinois. Kitchen backsplashes, bathroom tile, custom stonework, interior upgrades, and outdoor living.",
    };
  }
  if (pathname === "/kitchens") {
    return {
      title: "Kitchen Backsplash Installation & Kitchen Remodels in Springfield, IL | Andre Preer",
      description:
        "Winter kitchen upgrades in Springfield and Central Illinois: handmade tile backsplashes, natural stone backsplashes, cabinets, countertops, and islands.",
    };
  }
  if (pathname === "/bathrooms") {
    return {
      title: "Bathroom & Shower Tile Improvements in Springfield, IL | Andre Preer",
      description:
        "Bathroom shower tile, river stone mosaics, vanity backsplashes, and natural stone finish upgrades in Springfield and Central Illinois.",
    };
  }
  if (pathname === "/tile-stonework") {
    return {
      title: "Custom Tile & Stonework in Springfield, IL | Andre Preer",
      description:
        "Architectural tile installation, natural stone backsplashes, limestone walls, and specialty pebble or waterfall stonework across Central Illinois.",
    };
  }
  if (pathname === "/interior-improvements") {
    return {
      title: "Interior Home Improvements & Stone Hearths in Springfield, IL | Andre Preer",
      description:
        "Interior stone fireplace surrounds, hard-surface flooring, trim carpentry, and coordinated interior–exterior improvements in Springfield, IL.",
    };
  }
  if (pathname === "/outdoor-landscaping") {
    return {
      title: "Patios, Limestone Walls & Landscaping in Springfield, IL | Andre Preer",
      description:
        "Custom stone patios, walkways, limestone retaining walls, fire pits, and layered Midwest planting across Springfield and Central Illinois.",
    };
  }
  if (pathname === "/services") {
    return {
      title: "All Residential Services | Andre Preer — Springfield, IL",
      description:
        "Browse all five residential service categories: kitchens & backsplashes, bathrooms, tile & stonework, interior improvements, and outdoor living.",
    };
  }
  if (pathname.startsWith("/services/")) {
    const slug = pathname.replace("/services/", "").replace(/\/$/, "");
    const srv = serviceBySlug(slug);
    if (srv) {
      return { title: srv.seoTitle, description: srv.seoDescription };
    }
  }
  if (pathname === "/projects") {
    return {
      title: "Projects & Design Inspiration Gallery | Andre Preer — Springfield, IL",
      description:
        "Explore kitchen backsplash, bathroom tile, custom stonework, interior, and outdoor living design inspiration in Springfield and Central Illinois.",
    };
  }
  if (pathname === "/process") {
    return {
      title: "How a Project Works | Andre Preer — Springfield, IL",
      description:
        "From initial phone call and on-site walkthrough to clear written scope and clean installation across Springfield and Central Illinois.",
    };
  }
  if (pathname === "/about") {
    return {
      title: `About ${site.person} | Residential Craftsmanship — Springfield, IL`,
      description:
        "Learn how Andre M. Preer II approaches kitchen, bathroom, stonework, interior, and exterior residential improvements across Central Illinois.",
    };
  }
  if (pathname === "/contact") {
    return {
      title: "Request an Estimate | Andre Preer — Springfield, IL",
      description:
        "Call 309-431-1805 or request a residential project estimate for kitchen backsplashes, bathroom tile, stonework, interior upgrades, or outdoor living.",
    };
  }
  return {
    title: "Andre Preer | Springfield, IL",
    description: site.supportingStatement,
  };
}

export default function App() {
  const [locationUrl, setLocationUrl] = useState(
    () => `${window.location.pathname}${window.location.search}`,
  );

  const navigate = (path: string) => {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    if (normalized === locationUrl) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.history.pushState({}, "", normalized);
    setLocationUrl(normalized);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  useEffect(() => {
    const onPopState = () => {
      setLocationUrl(`${window.location.pathname}${window.location.search}`);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const [rawPath, rawSearch = ""] = locationUrl.split("?");
  const pathname = rawPath.length > 1 ? rawPath.replace(/\/+$/, "") : rawPath;
  const searchParams = new URLSearchParams(rawSearch);

  useEffect(() => {
    const meta = getRouteMeta(pathname);
    document.title = meta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const canonicalHref = `${window.location.origin}${pathname === "/" ? "/" : pathname}`;
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonicalHref);

    const schemaScript = document.getElementById("structured-data");
    if (schemaScript) {
      schemaScript.textContent = JSON.stringify(
        generatePageJsonLd(pathname, window.location.origin),
      );
    }
  }, [pathname]);

  const renderPage = () => {
    if (pathname === "/" || pathname === "") {
      return <HomePage onNavigate={navigate} />;
    }
    if (pathname === "/kitchens") {
      return <CategoryPage categoryId="kitchens" onNavigate={navigate} />;
    }
    if (pathname === "/bathrooms") {
      return <CategoryPage categoryId="bathrooms" onNavigate={navigate} />;
    }
    if (pathname === "/tile-stonework") {
      return <CategoryPage categoryId="tile-stonework" onNavigate={navigate} />;
    }
    if (pathname === "/interior-improvements") {
      return <CategoryPage categoryId="interior" onNavigate={navigate} />;
    }
    if (pathname === "/outdoor-landscaping") {
      return <CategoryPage categoryId="outdoor" onNavigate={navigate} />;
    }
    if (pathname === "/services") {
      return <ServicesIndexPage onNavigate={navigate} />;
    }
    if (pathname.startsWith("/services/")) {
      const slug = pathname.replace("/services/", "");
      return <ServiceDetailPage slug={slug} onNavigate={navigate} />;
    }
    if (pathname === "/projects" || pathname === "/portfolio") {
      return <ProjectsPage onNavigate={navigate} />;
    }
    if (pathname === "/process") {
      return <ProcessPage onNavigate={navigate} />;
    }
    if (pathname === "/about") {
      return <AboutPage onNavigate={navigate} />;
    }
    if (pathname === "/contact") {
      return <ContactPage defaultProjectType={searchParams.get("type") || undefined} />;
    }
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-[#F8F6F2] text-[#1A1B19]">
      <Header currentPath={pathname} onNavigate={navigate} />
      <main id="main" className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
