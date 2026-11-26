import { ArrowRight } from "lucide-react";
import { CtaBand } from "../components/CtaBand";
import { EditorialImage } from "../components/EditorialImage";
import { categories, services } from "../data/site";

interface ServicesIndexPageProps {
  onNavigate: (path: string) => void;
}

export function ServicesIndexPage({ onNavigate }: ServicesIndexPageProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <div>
      <section className="border-b border-[#E2DDD4] bg-[#F8F6F2]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-12 lg:px-10 lg:py-16">
          <p className="text-xs font-semibold tracking-wider text-[#9A6B3B] uppercase">
            Full Service Directory
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-[#1A1B19] sm:text-5xl">
            Residential improvements inside and outside the home.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#57534C]">
            Organized across five practical disciplines—from winter-ready kitchen backsplashes,
            bathrooms, and interior stonework to warm-weather patios, limestone walls, and
            landscapes.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex min-h-[40px] items-center rounded-md border border-[#D4CEC3] bg-white px-4 py-2 text-xs font-semibold text-[#1A1B19] transition-colors hover:border-[#1F3A2E] hover:text-[#1F3A2E]"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F2]">
        <div className="mx-auto max-w-[1280px] divide-y divide-[#E2DDD4] px-4 sm:px-6 lg:px-10">
          {categories.map((category, idx) => {
            const items = services.filter((s) => s.category === category.id);
            return (
              <div key={category.id} id={category.id} className="py-12 sm:py-14 scroll-mt-20">
                <div className="grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <span className="text-xs font-semibold text-[#9A6B3B] tabular-nums">
                      0{idx + 1} · {category.kicker}
                    </span>
                    <h2 className="mt-2 font-display text-3xl font-semibold text-[#1A1B19]">
                      <a
                        href={category.route}
                        onClick={(e) => handleNav(e, category.route)}
                        className="hover:text-[#1F3A2E]"
                      >
                        {category.name}
                      </a>
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#57534C]">
                      {category.description}
                    </p>
                    <div className="mt-5 overflow-hidden rounded-lg border border-[#E2DDD4]">
                      <EditorialImage
                        src={category.heroImage}
                        alt={category.heroAlt}
                        aspectClass="aspect-[16/10] sm:aspect-[4/3]"
                        sizes="(max-width: 1023px) 100vw, 400px"
                        label="Editorial Inspiration"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
                    {items.map((srv) => (
                      <a
                        key={srv.slug}
                        href={`/services/${srv.slug}`}
                        onClick={(e) => handleNav(e, `/services/${srv.slug}`)}
                        className="group flex flex-col justify-between rounded-xl border border-[#E2DDD4] bg-white p-6 transition-colors hover:border-[#1F3A2E]"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 text-xs text-[#57534C]">
                            <span>{category.shortName}</span>
                            {srv.winterPriority && (
                              <span className="font-semibold text-[#1F3A2E]">Winter Focus</span>
                            )}
                          </div>
                          <h3 className="mt-2 font-display text-2xl font-semibold text-[#1A1B19] group-hover:text-[#1F3A2E]">
                            {srv.name}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#57534C]">
                            {srv.summary}
                          </p>
                        </div>
                        <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-[#1F3A2E]">
                          Service Details
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand
        heading="Not sure which category fits your project?"
        body="Tell Andre what you want to improve. Many projects span two areas—such as pairing a kitchen backsplash with new counters, or connecting an interior doorway to a new patio."
        onNavigate={onNavigate}
      />
    </div>
  );
}
