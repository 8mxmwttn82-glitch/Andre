import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const navLinks = [
  { href: "/kitchens", label: "Kitchens" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#E2DDD4] bg-[#F8F6F2]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 sm:h-16 max-w-[1280px] items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 lg:px-10">
        {/* Zone 1: Single text element brand wordmark */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, "/")}
          className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#1A1B19] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F3A2E]"
        >
          Andre Preer
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => {
            const active =
              currentPath === item.href ||
              (item.href === "/services" &&
                (currentPath.startsWith("/services") ||
                  currentPath === "/bathrooms" ||
                  currentPath === "/tile-stonework" ||
                  currentPath === "/interior-improvements" ||
                  currentPath === "/outdoor-landscaping"));
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`relative py-1 text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F3A2E] ${
                  active
                    ? "text-[#1A1B19] after:absolute after:inset-x-0 after:bottom-0 after:h-[1.5px] after:bg-[#1F3A2E]"
                    : "text-[#57534C] hover:text-[#1A1B19]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary CTA + mobile menu toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="/contact"
            onClick={(e) => handleLinkClick(e, "/contact")}
            className="inline-flex min-h-[38px] items-center justify-center rounded-md bg-[#1F3A2E] px-3.5 sm:px-4 py-2 text-xs font-semibold tracking-wide text-[#F8F6F2] transition-colors hover:bg-[#162B22] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F3A2E]"
          >
            <span className="sm:hidden">Estimate</span>
            <span className="hidden sm:inline">Request Estimate</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#E2DDD4] bg-white text-[#1A1B19] md:hidden focus-visible:outline-2 focus-visible:outline-[#1F3A2E]"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="border-t border-[#E2DDD4] bg-[#F8F6F2] px-6 py-5 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/kitchens", label: "Kitchens & Backsplashes" },
              { href: "/bathrooms", label: "Bathrooms" },
              { href: "/tile-stonework", label: "Tile & Stonework" },
              { href: "/interior-improvements", label: "Interior Improvements" },
              { href: "/outdoor-landscaping", label: "Outdoor & Landscaping" },
              { href: "/projects", label: "Projects" },
              { href: "/about", label: "About" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="py-1.5 text-base font-medium text-[#1A1B19] hover:text-[#1F3A2E]"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2.5 border-t border-[#E2DDD4] pt-4">
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, "/contact")}
                className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#1F3A2E] px-5 py-2.5 text-sm font-semibold text-[#F8F6F2]"
              >
                Request an Estimate
              </a>
              <a
                href="tel:+13094311805"
                className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-[#E2DDD4] bg-white px-5 py-2.5 text-sm font-medium text-[#1A1B19] tabular-nums"
              >
                Call 309-431-1805
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
