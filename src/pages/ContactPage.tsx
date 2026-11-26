import { MapPin, MessageSquare, Phone } from "lucide-react";
import { EstimateForm } from "../components/EstimateForm";
import { site } from "../data/site";

interface ContactPageProps {
  defaultProjectType?: string;
}

export function ContactPage({ defaultProjectType }: ContactPageProps) {
  return (
    <div>
      <section className="border-b border-[#E2DDD4] bg-[#F8F6F2]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-12 lg:px-10 lg:py-16">
          <p className="text-xs font-semibold tracking-wider text-[#9A6B3B] uppercase">
            Request an Estimate · {site.area}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-[#1A1B19] sm:text-5xl">
            Call or text Andre about your project.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#57534C]">
            Whether you are planning a winter kitchen backsplash, tile flooring, shower tilework,
            custom stonework, or an upcoming patio and landscape project, reach out to schedule a
            site walkthrough.
          </p>
        </div>
      </section>

      <section className="bg-[#EFECE6]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 sm:py-14 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-4">
              <div className="rounded-xl border border-[#D4CEC3] bg-white p-6">
                <h2 className="font-display text-2xl font-semibold text-[#1A1B19]">
                  Direct Contact
                </h2>
                <div className="mt-5 space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#1F3A2E]" aria-hidden="true" />
                    <div>
                      <span className="block text-xs font-semibold text-[#57534C] uppercase">
                        Primary Phone
                      </span>
                      <a
                        href={`tel:${site.phoneTel}`}
                        className="mt-0.5 block font-display text-2xl font-semibold text-[#1A1B19] tabular-nums hover:text-[#1F3A2E]"
                      >
                        {site.phoneDisplay}
                      </a>
                      <span className="mt-2 block text-xs text-[#57534C]">
                        Alternate line:{" "}
                        <a
                          href={`tel:${site.altPhoneTel}`}
                          className="font-medium text-[#1A1B19] tabular-nums hover:underline"
                        >
                          {site.altPhoneDisplay}
                        </a>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-[#EFECE6] pt-4">
                    <MessageSquare
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#1F3A2E]"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="block text-xs font-semibold text-[#57534C] uppercase">
                        Text Message
                      </span>
                      <a
                        href={`sms:${site.phoneTel}`}
                        className="mt-0.5 block font-medium text-[#1A1B19] tabular-nums hover:underline"
                      >
                        Text {site.phoneDisplay}
                      </a>
                      <p className="mt-1 text-xs text-[#57534C]">
                        Send photos of your kitchen wall, floor, or stone area directly by text.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-[#EFECE6] pt-4">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1F3A2E]" aria-hidden="true" />
                    <div>
                      <span className="block text-xs font-semibold text-[#57534C] uppercase">
                        Service Area
                      </span>
                      <p className="mt-0.5 text-[#1A1B19]">{site.area}</p>
                      <p className="mt-1 text-xs leading-relaxed text-[#57534C]">
                        Based in Springfield. Include your town when calling or texting so Andre can
                        confirm travel timing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#D4CEC3] bg-white p-6 text-sm leading-relaxed text-[#57534C]">
                <h3 className="font-display text-xl font-semibold text-[#1A1B19]">
                  Helpful Details to Share
                </h3>
                <ul className="mt-3 space-y-2 text-xs">
                  <li>· Which room or outdoor area you want tiled or built</li>
                  <li>· Rough dimensions or photos of the current space</li>
                  <li>· Materials you have in mind (ceramic, porcelain, natural stone, limestone)</li>
                  <li>· Your preferred timeframe (winter indoor or spring outdoor)</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-8">
              <EstimateForm defaultProjectType={defaultProjectType} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
