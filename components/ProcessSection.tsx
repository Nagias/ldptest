import { processSection } from "@/data/hyperwork-b2b-data";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow={processSection.eyebrow}
          heading={processSection.heading}
          subheading={processSection.subheading}
        />

        <div className="relative mt-16 rounded-[30px] border border-brand-border bg-white p-6 shadow-soft md:p-10">
          <div className="absolute left-10 top-[64px] h-[calc(100%-96px)] w-1 rounded-full bg-brand-border lg:left-0 lg:right-0 lg:top-[86px] lg:mx-auto lg:h-1 lg:w-[calc(100%-140px)]" />

          <div className="relative grid gap-8 lg:grid-cols-5">
            {processSection.steps.map((step) => (
              <article key={step.number} className="fade-up relative pl-20 lg:pl-0 lg:pt-20">
                <div className="absolute left-0 top-0 z-10 grid h-16 w-16 place-items-center rounded-full border-8 border-white bg-brand-blue text-lg font-bold text-white shadow-soft lg:left-1/2 lg:-translate-x-1/2">
                  {step.number}
                </div>
                <div className="rounded-[24px] border border-brand-border bg-brand-soft p-6 lg:min-h-[220px]">
                  <h3 className="text-2xl font-bold tracking-tight text-brand-text">{step.title}</h3>
                  <p className="mt-4 text-base leading-8 text-brand-muted">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
