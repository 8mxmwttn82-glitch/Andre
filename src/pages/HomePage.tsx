import { ArrowRight, Phone } from "lucide-react";
import { useState } from "react";
import { CtaBand } from "../components/CtaBand";
import { EditorialImage } from "../components/EditorialImage";
import { EstimateForm } from "../components/EstimateForm";
import { DEFAULT_SEASON, seasons, type SeasonKey } from "../data/season";
import {
  categories,
  craftsmanshipPillars,
  editorialGallery,
  processSteps,
  serviceBySlug,
  services,
  site,
} from "../data/site";

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [activeSeason, setActiveSeason] = useState<SeasonKey>(DEFAULT_SEASON);
  const season = seasons[activeSeason];

  const featuredServices = season.featuredSlugs
    .map((slug) => serviceBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const orderedCategories = season.primaryCategories
    .map((id) => categories.find((cat) => cat.id === id))
    .filter((cat): cat is NonNullable<typeof cat> => Boolean(cat));

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <div>
      {/* 1. Split Architectural Hero */}
      <section className="border-b border-[#E2DDD4] bg-[#F8F6F2]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8 sm:py-12 lg:px-10 lg:py-16">
          <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-between lg:col-span-6 lg:py-4">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#9A6B3B] uppercase">
                  {site.area} · Tile, Stone & Residential Craft
                </p>
                <h1 className="mt-3 sm:mt-4 font-display text-[36px] sm:text-5xl lg:text-[58px] font-semibold leading-[1.06] tracking-tight text-[#1A1B19]">
                  {site.tagline}
                </h1>
                <p className="mt-4 sm:mt-5 max-w-xl text-[15px] sm:text-[17px] leading-relaxed text-[#57534C]">
                  {site.supportingStatement}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 pt-2">
                <a
                  href="/contact?type=backsplash-installation"
                  onClick={(e) => handleNav(e, "/contact?type=backsplash-installation")}
                  className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center rounded-md bg-[#1F3A2E] px-6 py-3 text-sm font-semibold text-[#F8F6F2] transition-colors hover:bg-[#162B22] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F3A2E]"
                >
                  Request an Estimate
                </a>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-[#D4CEC3] bg-white px-5 py-3 text-sm font-semibold text-[#1A1B19] tabular-nums transition-colors hover:border-[#1A1B19] whitespace-nowrap shrink-0"
                >
                  <Phone className="h-4 w-4 text-[#1F3A2E]" aria-hidden="true" />
                  Call {site.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="group lg:col-span-6">
              <EditorialImage
                src="/src/assets/images/midwest_backsplash_showcase_1795693566752.jpg"
                alt="Midwest craftsman kitchen winter backsplash inspiration featuring vertical-stacked sage-cream ceramic tile, white oak cabinetry, and oak trees outside."
                aspectClass="aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[340px]"
                sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 92vw, 620px"
                objectPositionClass="object-center"
                className="rounded-xl border border-[#E2DDD4]"
                priority
                label="Editorial Inspiration · Winter Kitchen Backsplash & Natural Oak"
              />
            </div>
          </div>

          {/* Full-Width Scope Strip Directly Below Split Hero */}
          <div className="mt-8 sm:mt-10 grid gap-px overflow-hidden rounded-xl border border-[#E2DDD4] bg-[#E2DDD4] sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Kitchen Backsplashes",
                note: "Ceramic, stone & decorative tile",
                href: "/kitchens",
              },
              {
                num: "02",
                title: "Tile Flooring & Stone",
                note: "Porcelain, stone & interior masonry",
                href: "/tile-stonework",
              },
              {
                num: "03",
                title: "Bathroom & Shower Tile",
                note: "Tile & stone surfaces (no plumbing)",
                href: "/bathrooms",
              },
              {
                num: "04",
                title: "Patios & Landscaping",
                note: "Limestone walls, fire & grounds",
                href: "/outdoor-landscaping",
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="group flex items-start justify-between gap-4 bg-white p-5 transition-colors hover:bg-[#FAF8F4]"
              >
                <div>
                  <span className="text-xs font-semibold text-[#9A6B3B] tabular-nums">
                    {item.num}
                  </span>
                  <h2 className="mt-1 font-display text-xl font-semibold text-[#1A1B19] group-hover:text-[#1F3A2E]">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs text-[#57534C]">{item.note}</p>
                </div>
                <ArrowRight
                  className="mt-1 h-4 w-4 shrink-0 text-[#8E887E] transition-transform group-hover:translate-x-0.5 group-hover:text-[#1F3A2E]"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Seasonal Strategy Spotlight (Default: Winter Kitchens & Interiors) */}
      <section className="bg-[#1A1B19] text-[#F8F6F2]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-16 lg:px-10 lg:py-20">
          <div className="flex flex-col gap-6 border-b border-[#2E302C] pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-[#D9B68C] uppercase">
                {season.seasonKicker}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
                {season.seasonHeadline}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#C9C3B8]">{season.seasonBody}</p>
            </div>

            {/* Interactive Seasonal Focus Switcher */}
            <div className="flex flex-col gap-2 shrink-0">
              <span className="text-[11px] font-medium tracking-wider text-[#9D978C] uppercase">
                Seasonal Focus Preview
              </span>
              <div
                role="group"
                aria-label="Preview seasonal service priorities"
                className="grid grid-cols-3 sm:inline-flex rounded-lg border border-[#343631] bg-[#232522] p-1"
              >
                {(["winter", "spring-summer", "fall"] as SeasonKey[]).map((key) => {
                  const active = activeSeason === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveSeason(key)}
                      className={`min-h-[36px] rounded-md px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                        active
                          ? "bg-[#F8F6F2] text-[#1A1B19]"
                          : "text-[#B8B2A7] hover:text-white"
                      }`}
                    >
                      {seasons[key].label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Asymmetric Featured Seasonal Services */}
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            {featuredServices[0] && (
              <a
                href={`/services/${featuredServices[0].slug}`}
                onClick={(e) => handleNav(e, `/services/${featuredServices[0].slug}`)}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#2E302C] bg-[#222420] transition-colors hover:border-[#4A4E46] lg:col-span-6"
              >
                <EditorialImage
                  src={featuredServices[0].image}
                  alt={featuredServices[0].imageAlt}
                  aspectClass="aspect-[16/10]"
                  sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 92vw, 580px"
                  label="Editorial Design Inspiration"
                />
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <p className="text-xs font-medium text-[#D9B68C]">
                      01 · Featured {season.label} Priority
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white group-hover:text-[#D9B68C]">
                      {featuredServices[0].name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#C9C3B8]">
                      {featuredServices[0].summary}
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#F8F6F2]">
                    Explore Service Scope
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </a>
            )}

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-6">
              {featuredServices.slice(1, 4).map((service, idx) => (
                <a
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={(e) => handleNav(e, `/services/${service.slug}`)}
                  className={`group flex flex-col justify-between rounded-xl border border-[#2E302C] bg-[#222420] p-6 transition-colors hover:border-[#4A4E46] ${
                    idx === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div>
                    <p className="text-xs font-medium text-[#9D978C] tabular-nums">
                      0{idx + 2} · {categories.find((c) => c.id === service.category)?.shortName}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white group-hover:text-[#D9B68C]">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#C9C3B8]">{service.summary}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#F8F6F2]">
                    View Details
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-xl border border-[#2E302C] bg-[#222420] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="font-display text-xl font-semibold text-white">
                {season.secondaryHeadline}
              </h3>
              <p className="mt-1 text-sm text-[#B8B2A7]">{season.secondaryBody}</p>
            </div>
            <a
              href={season.ctaHref}
              onClick={(e) => handleNav(e, season.ctaHref)}
              className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#F8F6F2] px-5 py-2.5 text-xs font-semibold text-[#1A1B19] transition-colors hover:bg-[#E7E2D8] whitespace-nowrap shrink-0"
            >
              {season.ctaLabel}
            </a>
          </div>
        </div>
      </section>

      {/* 3. Full Five-Category Service Architecture */}
      <section className="border-b border-[#E2DDD4] bg-[#F8F6F2]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-16 lg:px-10 lg:py-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-[#9A6B3B] uppercase">
                Complete Capabilities
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#1A1B19] sm:text-4xl">
                Five core disciplines across the home and property.
              </h2>
            </div>
            <a
              href="/services"
              onClick={(e) => handleNav(e, "/services")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F3A2E] hover:underline whitespace-nowrap shrink-0"
            >
              Browse All Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-12 divide-y divide-[#E2DDD4] border-y border-[#E2DDD4]">
            {orderedCategories.map((category, index) => {
              const catServices = services.filter((s) => s.category === category.id);
              return (
                <div
                  key={category.id}
                  className="grid gap-8 py-10 lg:grid-cols-12 lg:items-center"
                >
                  <div className="lg:col-span-5">
                    <a
                      href={category.route}
                      onClick={(e) => handleNav(e, category.route)}
                      className="group block overflow-hidden rounded-xl border border-[#E2DDD4]"
                    >
                      <EditorialImage
                        src={category.heroImage}
                        alt={category.heroAlt}
                        aspectClass="aspect-[16/10] md:aspect-[4/3]"
                        sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 92vw, 500px"
                        label="Editorial Inspiration"
                      />
                    </a>
                  </div>

                  <div className="lg:col-span-7 lg:pl-6">
                    <p className="text-xs font-medium text-[#57534C] tabular-nums">
                      0{index + 1} · {category.kicker}
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-semibold text-[#1A1B19]">
                      <a
                        href={category.route}
                        onClick={(e) => handleNav(e, category.route)}
                        className="hover:text-[#1F3A2E]"
                      >
                        {category.name}
                      </a>
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#57534C]">
                      {category.description}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#1A1B19]">
                      {catServices.map((srv, sIdx) => (
                        <span key={srv.slug} className="inline-flex items-center gap-3">
                          <a
                            href={`/services/${srv.slug}`}
                            onClick={(e) => handleNav(e, `/services/${srv.slug}`)}
                            className="font-medium underline decoration-[#D4CEC3] underline-offset-4 transition-colors hover:text-[#1F3A2E] hover:decoration-[#1F3A2E]"
                          >
                            {srv.name}
                          </a>
                          {sIdx < catServices.length - 1 && (
                            <span className="text-[#B8B2A7]" aria-hidden="true">
                              ·
                            </span>
                          )}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <a
                        href={category.route}
                        onClick={(e) => handleNav(e, category.route)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F3A2E] hover:underline"
                      >
                        Explore {category.name}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Craftsmanship Pillars & Process Proof */}
      <section className="border-b border-[#E2DDD4] bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-16 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-wider text-[#9A6B3B] uppercase">
                How We Work
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#1A1B19] sm:text-4xl">
                Consistent accountability from the first walk to the last joint.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#57534C]">
                Homeowners call Andre when they want a single knowledgeable craftsman who pays
                attention to how tile, natural stone, cabinetry, and outdoor structures actually
                meet.
              </p>

              <div className="mt-8 overflow-hidden rounded-xl border border-[#E2DDD4]">
                <EditorialImage
                  src="/src/assets/images/midwest_stonework_detail_1795693265019.jpg"
                  alt="Close-up architectural study showing split-face Indiana limestone masonry meeting a honed sill and herringbone ceramic floor tile."
                  aspectClass="aspect-[16/10] sm:aspect-[4/3]"
                  sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 92vw, 500px"
                  label="Material Craft Study · Indiana Limestone & Herringbone Tile"
                />
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-6">
              <div className="grid gap-8 sm:grid-cols-2">
                {craftsmanshipPillars.map((pillar) => (
                  <div key={pillar.number} className="border-t border-[#E2DDD4] pt-5">
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

              <div className="mt-12 rounded-xl border border-[#E2DDD4] bg-[#F8F6F2] p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-[#57534C] uppercase">
                      Project Workflow
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-[#1A1B19]">
                      Five straightforward steps
                    </h3>
                  </div>
                  <a
                    href="/process"
                    onClick={(e) => handleNav(e, "/process")}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#1F3A2E] hover:underline whitespace-nowrap shrink-0"
                  >
                    Full Process Page
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>

                <ol className="mt-6 grid gap-4 sm:grid-cols-5">
                  {processSteps.map((step) => (
                    <li key={step.number} className="border-t border-[#D4CEC3] pt-3">
                      <span className="text-xs font-semibold text-[#9A6B3B] tabular-nums">
                        {step.number}
                      </span>
                      <p className="mt-1 text-sm font-semibold text-[#1A1B19]">{step.title}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Visual Inspiration & Portfolio Framework Preview */}
      <section className="border-b border-[#E2DDD4] bg-[#F8F6F2]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-16 lg:px-10 lg:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-[#9A6B3B] uppercase">
                Visual Studies & Portfolio
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#1A1B19] sm:text-4xl">
                Material inspiration inside and outside the home.
              </h2>
              <p className="mt-2 text-sm text-[#57534C]">
                Images below represent editorial design inspiration across Andre’s service
                categories—never mislabeled as completed jobs. Ask during your consultation to view
                completed local work in person.
              </p>
            </div>
            <a
              href="/projects"
              onClick={(e) => handleNav(e, "/projects")}
              className="inline-flex min-h-[42px] w-full sm:w-auto items-center justify-center gap-1.5 rounded-md border border-[#D4CEC3] bg-white px-4 py-2 text-xs font-semibold text-[#1A1B19] hover:border-[#1A1B19] whitespace-nowrap shrink-0"
            >
              Open Full Gallery
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-3">
            {[editorialGallery[2], editorialGallery[7], editorialGallery[15]].map((item) => (
              <a
                key={item.id}
                href="/projects"
                onClick={(e) => handleNav(e, "/projects")}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#E2DDD4] bg-white"
              >
                <EditorialImage
                  src={item.image}
                  alt={item.alt}
                  aspectClass="aspect-[16/10] md:aspect-[4/3]"
                  sizes="(max-width: 767px) calc(100vw - 32px), 400px"
                  label={item.status}
                />
                <div className="p-5">
                  <p className="text-xs text-[#57534C]">
                    {item.category} · {item.materials.slice(0, 2).join(" / ")}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-semibold text-[#1A1B19] group-hover:text-[#1F3A2E]">
                    {item.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Direct Lead Capture Section */}
      <section className="bg-[#EFECE6]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-16 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-wider text-[#9A6B3B] uppercase">
                {site.area}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#1A1B19] sm:text-4xl">
                Ready to discuss a winter backsplash, bathroom tile, or upcoming project?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#57534C]">
                Based in Springfield and serving homeowners across Central Illinois. Share what
                town your home is in and which space you are looking to improve.
              </p>

              <div className="mt-8 space-y-4 border-t border-[#D4CEC3] pt-6 text-sm">
                <div>
                  <span className="block text-xs font-semibold text-[#57534C] uppercase">
                    Direct Telephone
                  </span>
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="mt-1 inline-block font-display text-2xl font-semibold text-[#1A1B19] tabular-nums hover:text-[#1F3A2E]"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#57534C] uppercase">
                    Text or Alternate Line
                  </span>
                  <a
                    href={`tel:${site.altPhoneTel}`}
                    className="mt-1 inline-block font-medium text-[#1A1B19] tabular-nums hover:underline"
                  >
                    {site.altPhoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EstimateForm defaultProjectType="backsplash-installation" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        kicker="Winter Scheduling Open"
        heading="Plan your kitchen backsplash or interior tile project now."
        body="Call 309-431-1805 or request a site walkthrough anywhere in Springfield and Central Illinois."
        ctaLabel="Explore Kitchens & Backsplashes"
        onNavigate={() => onNavigate("/kitchens")}
        preselectProjectType="backsplash-installation"
      />
    </div>
  );
}
