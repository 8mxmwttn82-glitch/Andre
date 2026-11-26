import { Phone } from "lucide-react";
import { site } from "../data/site";

interface CtaBandProps {
  kicker?: string;
  heading: string;
  body: string;
  ctaLabel?: string;
  onNavigate: (path: string) => void;
  preselectProjectType?: string;
}

export function CtaBand({
  kicker = "Start a Conversation",
  heading,
  body,
  ctaLabel = "Request an Estimate",
  onNavigate,
  preselectProjectType,
}: CtaBandProps) {
  const target = preselectProjectType
    ? `/contact?type=${encodeURIComponent(preselectProjectType)}`
    : "/contact";

  return (
    <section className="border-t border-[#E2DDD4] bg-[#EFECE6]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 sm:px-6 py-12 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#9A6B3B] uppercase">{kicker}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#1A1B19] sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#57534C]">{body}</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 shrink-0">
          <a
            href={target}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(target);
            }}
            className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center rounded-md bg-[#1F3A2E] px-6 py-3 text-sm font-semibold text-[#F8F6F2] transition-colors hover:bg-[#162B22] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F3A2E]"
          >
            {ctaLabel}
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-[#D4CEC3] bg-white px-5 py-3 text-sm font-semibold text-[#1A1B19] tabular-nums transition-colors hover:border-[#1A1B19] whitespace-nowrap shrink-0"
          >
            <Phone className="h-4 w-4 text-[#1F3A2E]" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
