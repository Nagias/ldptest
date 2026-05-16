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

        <div className="relative mt-16">
          <div className="absolute left-5 top-0 h-full w-px bg-brand-border lg:left-0 lg:top-6 lg:h-px lg:w-full" />
          <div className="relative grid gap-8 lg:grid-cols-5">
            {processSection.steps.map((step) => (
              <article key={step.number} className="fade-up relative pl-16 lg:pl-0 lg:pt-16">
                <div className="absolute left-0 top-0 z-10 grid h-10 w-10 place-items-center rounded-full border-4 border-white bg-brand-blue text-xs font-bold text-white shadow-card lg:top-1">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-brand-text">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
