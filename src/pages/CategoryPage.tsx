import { ArrowRight, Check, Info, Phone } from "lucide-react";
import { CtaBand } from "../components/CtaBand";
import { EditorialImage } from "../components/EditorialImage";
import { type CategoryId, categoryById, services, site } from "../data/site";

interface CategoryPageProps {
  categoryId: CategoryId;
  onNavigate: (path: string) => void;
}

export function CategoryPage({ categoryId, onNavigate }: CategoryPageProps) {
  const category = categoryById(categoryId);
  const categoryServices = services.filter((s) => s.category === categoryId);

  const defaultLeadMap: Record<CategoryId, string> = {
    kitchens: "backsplash-installation",
    bathrooms: "bathroom-tile-shower",
    "tile-stonework": "tile-stonework-interior",
    interior: "interior-improvements",
    outdoor: "patios-hardscaping-outdoor-living",
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <div>
      {/* Category Hero */}
      <section className="border-b border-[#E2DDD4] bg-[#F8F6F2]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8 sm:py-12 lg:px-10 lg:py-16">
          <nav aria-label="Breadcrumb" className="text-xs text-[#57534C]">
            <a
              href="/"
              onClick={(e) => handleNav(e, "/")}
              className="hover:text-[#1A1B19] hover:underline"
            >
              Home
            </a>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <a
              href="/services"
              onClick={(e) => handleNav(e, "/services")}
              className="hover:text-[#1A1B19] hover:underline"
            >
              Services
            </a>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="font-medium text-[#1A1B19]">{category.name}</span>
          </nav>

          <div className="mt-6 grid items-stretch gap-8 lg:gap-10 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#9A6B3B] uppercase">
                  {category.kicker}
                </p>
                <h1 className="mt-3 font-display text-[34px] sm:text-5xl font-semibold leading-[1.08] tracking-tight text-[#1A1B19]">
                  {category.headline}
                </h1>
                <p className="mt-4 sm:mt-5 text-[15px] sm:text-base leading-relaxed text-[#57534C]">
                  {category.description}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
                <a
                  href={`/contact?type=${defaultLeadMap[categoryId]}`}
                  onClick={(e) => handleNav(e, `/contact?type=${defaultLeadMap[categoryId]}`)}
                  className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center rounded-md bg-[#1F3A2E] px-6 py-3 text-sm font-semibold text-[#F8F6F2] transition-colors hover:bg-[#162B22] whitespace-nowrap shrink-0"
                >
                  Request a {category.shortName} Estimate
                </a>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-[#D4CEC3] bg-white px-5 py-3 text-sm font-semibold text-[#1A1B19] tabular-nums hover:border-[#1A1B19] whitespace-nowrap shrink-0"
                >
                  <Phone className="h-4 w-4 text-[#1F3A2E]" aria-hidden="true" />
                  Call {site.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <EditorialImage
                src={category.heroImage}
                alt={category.heroAlt}
                aspectClass="aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[320px]"
                sizes="(max-width: 1023px) 100vw, 600px"
                className="rounded-xl border border-[#E2DDD4]"
                priority
                label={`Editorial Inspiration · ${category.name}`}
              />
            </div>
          </div>

          {/* Transparent Scope Confirmation Notice */}
          <div className="mt-8 flex items-start gap-3 rounded-lg border border-[#E2DDD4] bg-white px-4 sm:px-5 py-4 text-sm text-[#57534C]">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#9A6B3B]" aria-hidden="true" />
            <p>{category.scopeNote}</p>
          </div>
        </div>
      </section>

      {/* Special Winter Backsplash Feature Section on Kitchens Landing Page */}
      {categoryId === "kitchens" && (
        <section className="border-b border-[#2E302C] bg-[#1A1B19] text-[#F8F6F2]">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-14 lg:px-10 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <p className="text-xs font-semibold tracking-wider text-[#D9B68C] uppercase">
                  Winter Feature · Kitchen Backsplashes
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">
                  Why a new backsplash transforms a kitchen in just a few winter days.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#C9C3B8] sm:text-base">
                  You do not have to wait for spring—or commit to a three-month tear-out—to
                  dramatically improve your kitchen. Updating a dated wall or short laminate strip
                  with handmade ceramic, decorative mosaic, or natural stone elevates the light,
                  cleanability, and architectural character of the entire room.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-[#EAE6DF]">
                  {[
                    "Precision alignment with range hoods, upper cabinets, and window casings",
                    "Flush outlet and switch-plate integration without proud gaps",
                    "Works seamlessly with existing sound countertops or paired with a counter upgrade",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D9B68C]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6">
                <EditorialImage
                  src="/src/assets/images/midwest_backsplash_showcase_1795693566752.jpg"
                  alt="Winter Midwest craftsman kitchen backsplash with vertical-stacked ceramic tile, quartz counters, and natural oak drawers."
                  aspectClass="aspect-[4/3]"
                  sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 92vw, 560px"
                  className="rounded-xl border border-[#2E302C]"
                  label="Editorial Design Inspiration · Winter Backsplash & Quartz"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Individual Services List in Category */}
      <section className="bg-[#F8F6F2]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-16 lg:px-10 lg:py-20">
          <h2 className="font-display text-3xl font-semibold text-[#1A1B19]">
            Services in {category.name}
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {categoryServices.map((srv, idx) => (
              <article
                key={srv.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#E2DDD4] bg-white"
              >
                <div>
                  <a
                    href={`/services/${srv.slug}`}
                    onClick={(e) => handleNav(e, `/services/${srv.slug}`)}
                    className="block"
                  >
                    <EditorialImage
                      src={srv.image}
                      alt={srv.imageAlt}
                      aspectClass="aspect-[16/10]"
                      sizes="(max-width: 767px) calc(100vw - 32px), 560px"
                      label="Editorial Inspiration"
                    />
                  </a>
                  <div className="p-6 sm:p-8 sm:pb-0 pb-0">
                    <div className="flex items-center justify-between gap-4 text-xs text-[#57534C]">
                      <span className="font-semibold text-[#9A6B3B] tabular-nums">
                        0{idx + 1} · {category.shortName}
                      </span>
                      {srv.winterPriority && (
                        <span className="font-medium text-[#1F3A2E]">Winter Priority</span>
                      )}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-[#1A1B19]">
                      <a
                        href={`/services/${srv.slug}`}
                        onClick={(e) => handleNav(e, `/services/${srv.slug}`)}
                        className="hover:text-[#1F3A2E]"
                      >
                        {srv.name}
                      </a>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#57534C]">{srv.summary}</p>
                    <p className="mt-4 text-sm leading-relaxed text-[#1A1B19]">{srv.approach}</p>

                    <ul className="mt-5 space-y-2 border-t border-[#EFECE6] pt-4 text-xs text-[#57534C]">
                      {srv.typicalScopes.map((scope) => (
                        <li key={scope} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#9A6B3B]" />
                          <span>{scope}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#EFECE6] px-6 py-4 sm:px-8 sm:py-5">
                  <a
                    href={`/services/${srv.slug}`}
                    onClick={(e) => handleNav(e, `/services/${srv.slug}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F3A2E] hover:underline"
                  >
                    Full Service Guide
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={`/contact?type=${encodeURIComponent(srv.slug)}`}
                    onClick={(e) => handleNav(e, `/contact?type=${encodeURIComponent(srv.slug)}`)}
                    className="text-xs font-semibold text-[#1A1B19] hover:text-[#1F3A2E] hover:underline"
                  >
                    Request Estimate
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading={`Discuss your ${category.shortName.toLowerCase()} project with Andre.`}
        body="Serving Springfield and surrounding Central Illinois towns. Share your project goals and schedule a walkthrough."
        onNavigate={onNavigate}
        preselectProjectType={defaultLeadMap[categoryId]}
      />
    </div>
  );
}
