import { categories, site } from "../data/site";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="border-t border-[#2E302C] bg-[#1A1B19] text-[#EAE6DF]">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a
              href="/"
              onClick={(e) => handleNav(e, "/")}
              className="font-display text-2xl font-semibold tracking-tight text-[#F8F6F2]"
            >
              {site.name}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-[#B8B2A7]">
              {site.tagline} Residential kitchens, backsplashes, bathroom tile, custom stonework,
              interior upgrades, and outdoor living across {site.area}.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold tracking-wider text-[#B8B2A7] uppercase">
              Service Categories
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={cat.route}
                    onClick={(e) => handleNav(e, cat.route)}
                    className="text-[#EAE6DF] transition-colors hover:text-white hover:underline"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold tracking-wider text-[#B8B2A7] uppercase">
              Practice
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleNav(e, "/services")}
                  className="text-[#EAE6DF] transition-colors hover:text-white hover:underline"
                >
                  All Services
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  onClick={(e) => handleNav(e, "/projects")}
                  className="text-[#EAE6DF] transition-colors hover:text-white hover:underline"
                >
                  Project & Inspiration Gallery
                </a>
              </li>
              <li>
                <a
                  href="/process"
                  onClick={(e) => handleNav(e, "/process")}
                  className="text-[#EAE6DF] transition-colors hover:text-white hover:underline"
                >
                  How a Project Works
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleNav(e, "/about")}
                  className="text-[#EAE6DF] transition-colors hover:text-white hover:underline"
                >
                  About {site.person}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleNav(e, "/contact")}
                  className="text-[#EAE6DF] transition-colors hover:text-white hover:underline"
                >
                  Request an Estimate
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold tracking-wider text-[#B8B2A7] uppercase">
              Direct Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="font-semibold text-white tabular-nums transition-colors hover:text-[#D9B68C]"
                >
                  {site.phoneDisplay}
                </a>
                <span className="ml-2 text-xs text-[#B8B2A7]">Primary</span>
              </li>
              <li>
                <a
                  href={`tel:${site.altPhoneTel}`}
                  className="text-[#EAE6DF] tabular-nums transition-colors hover:text-white"
                >
                  {site.altPhoneDisplay}
                </a>
                <span className="ml-2 text-xs text-[#B8B2A7]">Alternate</span>
              </li>
              <li className="pt-1 text-xs text-[#B8B2A7]">
                Serving {site.area}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#2E302C] pt-6 text-xs text-[#9D978C] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.person}. All rights reserved.</p>
          <p>
            Editorial inspiration imagery is labeled transparently; authentic client project photos
            are added as completed work is documented.
          </p>
        </div>
      </div>
    </footer>
  );
}
