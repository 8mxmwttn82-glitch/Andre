import { CtaBand } from "../components/CtaBand";
import { EditorialImage } from "../components/EditorialImage";
import { craftsmanshipPillars, site } from "../data/site";

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <div>
      <section className="border-b border-[#E2DDD4] bg-[#F8F6F2]">
        <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-10 lg:py-16">
          <p className="text-xs font-semibold tracking-wider text-[#9A6B3B] uppercase">
            About the Practice
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-[#1A1B19] sm:text-5xl">
            {site.person} — Residential Craftsmanship Across {site.area}.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#57534C]">
            {site.supportingStatement}
          </p>
        </div>
      </section>

      <section className="border-b border-[#E2DDD4] bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-[#E2DDD4]">
                <EditorialImage
                  src="/src/assets/images/interior_improvement_space_1795691088141.jpg"
                  alt="Editorial inspiration of refined residential interior masonry, millwork, and oak flooring."
                  aspectClass="aspect-[4/3]"
                  label="Editorial Design Inspiration · Residential Interior Craft"
                />
              </div>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-[#57534C] lg:col-span-7">
              <h2 className="font-display text-3xl font-semibold text-[#1A1B19]">
                One craftsman accountable for both the plan and the finish.
              </h2>
              <p>
                Many homeowners find themselves coordinating separate contractors for a kitchen
                backsplash, a bathroom tile update, interior stonework, and outdoor limestone
                patios—only to discover that no one is looking at how the materials, lines, and
                seasonal timing connect.
              </p>
              <p>
                Andre approaches residential work as a continuous surface craft. Inside the home,
                that means kitchen backsplashes, porcelain and stone tile flooring, decorative tile,
                shower and bathroom tilework (tile and stone surfaces only, not plumbing), cabinetry
                and countertop updates, and natural stone fireplace hearths. Outside, it means
                limestone walls, stone patios, fire gathering spaces, specialty cobble or water
                stone details, and layered Midwest landscapes.
              </p>
              <p>
                Every project begins with an unhurried walk through the actual rooms or grounds. You
                get direct answers on layout, material durability, and exact scope boundaries before
                any work starts.
              </p>

              <div className="flex flex-wrap gap-4 border-t border-[#E2DDD4] pt-6 text-sm font-semibold text-[#1F3A2E]">
                <a href="/kitchens" onClick={(e) => handleNav(e, "/kitchens")} className="hover:underline">
                  Kitchens & Backsplashes
                </a>
                <span className="text-[#B8B2A7]" aria-hidden="true">·</span>
                <a href="/bathrooms" onClick={(e) => handleNav(e, "/bathrooms")} className="hover:underline">
                  Bathrooms
                </a>
                <span className="text-[#B8B2A7]" aria-hidden="true">·</span>
                <a href="/tile-stonework" onClick={(e) => handleNav(e, "/tile-stonework")} className="hover:underline">
                  Tile & Stonework
                </a>
                <span className="text-[#B8B2A7]" aria-hidden="true">·</span>
                <a href="/outdoor-landscaping" onClick={(e) => handleNav(e, "/outdoor-landscaping")} className="hover:underline">
                  Outdoor & Landscaping
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 border-t border-[#E2DDD4] pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {craftsmanshipPillars.map((pillar) => (
              <div key={pillar.number}>
                <span className="text-xs font-semibold text-[#9A6B3B] tabular-nums">
                  {pillar.number}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-[#1A1B19]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#57534C]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Talk directly with Andre about your home."
        body="Call 309-431-1805 or submit your project details to schedule an on-site consultation in Springfield or Central Illinois."
        onNavigate={onNavigate}
      />
    </div>
  );
}
