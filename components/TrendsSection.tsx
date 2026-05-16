import { trendsSection } from "@/data/hyperwork-b2b-data";
import { SectionHeading } from "./SectionHeading";

export function TrendsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow={trendsSection.eyebrow}
          heading={trendsSection.heading}
          subheading={trendsSection.subheading}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {trendsSection.items.map((item, index) => (
            <article
              key={item.title}
              className="fade-up rounded-[24px] border border-brand-border bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand-blue">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-brand-text">{item.title}</h3>
              <p className="mt-4 min-h-[112px] text-sm leading-7 text-brand-muted">{item.body}</p>
              <span className="mt-6 inline-flex rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1.5 text-xs font-bold text-brand-blue">
                {item.outcome}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
