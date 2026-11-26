import { ArrowRight, Check, Info, Phone } from "lucide-react";
import { CtaBand } from "../components/CtaBand";
import { EditorialImage } from "../components/EditorialImage";
import { categoryById, serviceBySlug, site } from "../data/site";

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export function ServiceDetailPage({ slug, onNavigate }: ServiceDetailPageProps) {
  const service = serviceBySlug(slug);

  if (!service) {
    return (
      <section className="mx-auto max-w-[960px] px-6 py-24 text-center">
        <h1 className="font-display text-4xl font-semibold text-[#1A1B19]">Service not found</h1>
        <p className="mt-3 text-base text-[#57534C]">
          Browse all residential services or return to the homepage.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/services"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("/services");
            }}
            className="rounded-md bg-[#1F3A2E] px-5 py-2.5 text-sm font-semibold text-white"
          >
            View All Services
          </a>
        </div>
      </section>
    );
  }

  const category = categoryById(service.category);
  const relatedServices = service.related
    .map((rel) => serviceBySlug(rel))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <div>
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
              href={category.route}
              onClick={(e) => handleNav(e, category.route)}
              className="hover:text-[#1A1B19] hover:underline"
            >
              {category.name}
            </a>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="font-medium text-[#1A1B19]">{service.name}</span>
          </nav>

          <div className="mt-6 grid items-stretch gap-8 lg:gap-10 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#9A6B3B] uppercase">
                  {category.name} · {site.area}
                </p>
                <h1 className="mt-3 font-display text-[34px] sm:text-5xl font-semibold leading-[1.08] tracking-tight text-[#1A1B19]">
                  {service.h1}
                </h1>
                <p className="mt-4 sm:mt-5 text-[15px] sm:text-base leading-relaxed text-[#57534C]">{service.summary}</p>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
                <a
                  href={`/contact?type=${encodeURIComponent(service.slug)}`}
                  onClick={(e) =>
                    handleNav(e, `/contact?type=${encodeURIComponent(service.slug)}`)
                  }
                  className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center rounded-md bg-[#1F3A2E] px-6 py-3 text-sm font-semibold text-[#F8F6F2] transition-colors hover:bg-[#162B22] whitespace-nowrap shrink-0"
                >
                  Request an Estimate
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
                src={service.image}
                alt={service.imageAlt}
                aspectClass="aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[320px]"
                sizes="(max-width: 1023px) 100vw, 600px"
                className="rounded-xl border border-[#E2DDD4]"
                priority
                label="Editorial Design Inspiration"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E2DDD4] bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-7">
              <div>
                <h2 className="font-display text-2xl font-semibold text-[#1A1B19] sm:text-3xl">
                  Common Problems Solved
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#57534C]">{service.problem}</p>
              </div>

              <div className="border-t border-[#E2DDD4] pt-8">
                <h2 className="font-display text-2xl font-semibold text-[#1A1B19] sm:text-3xl">
                  Andre’s Craftsmanship Approach
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#57534C]">
                  {service.approach}
                </p>
              </div>

              {service.requiresScopeConfirmation && (
                <div className="flex items-start gap-3 rounded-lg border border-[#E2DDD4] bg-[#F8F6F2] p-4 text-sm text-[#57534C]">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#9A6B3B]" aria-hidden="true" />
                  <p>
                    During your on-site walkthrough, Andre confirms exact installation details and
                    any specialized trade boundaries clearly in writing before work begins.
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-8 lg:col-span-5">
              <div className="rounded-xl border border-[#E2DDD4] bg-[#F8F6F2] p-6 sm:p-8">
                <h3 className="font-display text-2xl font-semibold text-[#1A1B19]">
                  What Matters in Execution
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-[#1A1B19]">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#1F3A2E]"
                        aria-hidden="true"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 border-t border-[#D4CEC3] pt-6 font-display text-xl font-semibold text-[#1A1B19]">
                  Typical Project Scopes
                </h3>
                <ul className="mt-3 space-y-2.5 text-sm text-[#57534C]">
                  {service.typicalScopes.map((scope) => (
                    <li key={scope} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#9A6B3B]" />
                      <span>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {relatedServices.length > 0 && (
            <div className="mt-16 border-t border-[#E2DDD4] pt-12">
              <h2 className="font-display text-2xl font-semibold text-[#1A1B19]">
                Related Services Often Paired Together
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {relatedServices.map((rel) => (
                  <a
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    onClick={(e) => handleNav(e, `/services/${rel.slug}`)}
                    className="group flex flex-col justify-between rounded-xl border border-[#E2DDD4] bg-[#F8F6F2] p-5 transition-colors hover:border-[#1F3A2E] hover:bg-white"
                  >
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#1A1B19] group-hover:text-[#1F3A2E]">
                        {rel.name}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-[#57534C]">{rel.summary}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#1F3A2E]">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBand
        heading={`Plan your ${service.name.toLowerCase()} project.`}
        body="Call 309-431-1805 or send your home’s town and room details to schedule a walkthrough."
        onNavigate={onNavigate}
        preselectProjectType={service.slug}
      />
    </div>
  );
}
