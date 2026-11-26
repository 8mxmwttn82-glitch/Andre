import { CtaBand } from "../components/CtaBand";
import { processSteps, site } from "../data/site";

interface ProcessPageProps {
  onNavigate: (path: string) => void;
}

export function ProcessPage({ onNavigate }: ProcessPageProps) {
  return (
    <div>
      <section className="border-b border-[#E2DDD4] bg-[#F8F6F2]">
        <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-10 lg:py-16">
          <p className="text-xs font-semibold tracking-wider text-[#9A6B3B] uppercase">
            How Projects Proceed
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-[#1A1B19] sm:text-5xl">
            Walk the space first, agree on a clear scope, then build it cleanly.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#57534C]">
            Whether the job is a three-day winter kitchen backsplash, a bathroom tile upgrade, or a
            multi-week outdoor stone terrace in {site.area}, every project follows the same five
            steps.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1000px] divide-y divide-[#E2DDD4] px-6 py-12 lg:px-10 lg:py-16">
          {processSteps.map((step) => (
            <div key={step.number} className="grid gap-4 py-8 sm:grid-cols-12 sm:items-baseline">
              <div className="sm:col-span-3">
                <span className="font-display text-3xl font-semibold text-[#9A6B3B] tabular-nums">
                  {step.number}
                </span>
              </div>
              <div className="sm:col-span-9">
                <h2 className="font-display text-2xl font-semibold text-[#1A1B19] sm:text-3xl">
                  {step.title}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-[#57534C]">{step.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        heading="Ready for Step 01?"
        body="Tell Andre what town your home is in and which room or outdoor space you would like to walk."
        onNavigate={onNavigate}
      />
    </div>
  );
}
