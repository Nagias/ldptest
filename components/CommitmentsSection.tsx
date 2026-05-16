import { commitmentsSection } from "@/data/hyperwork-b2b-data";
import { SectionHeading } from "./SectionHeading";

export function CommitmentsSection() {
  return (
    <section id="commitments" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow={commitmentsSection.eyebrow}
          heading={commitmentsSection.heading}
          subheading={commitmentsSection.subheading}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {commitmentsSection.items.map((item) => (
            <article
              key={item.number}
              className="fade-up rounded-[24px] border border-brand-border bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="inline-flex rounded-full bg-brand-blue/10 px-3 py-1.5 text-xs font-bold text-brand-blue">
                {item.number}
              </span>
              <h3 className="mt-7 text-xl font-bold tracking-tight text-brand-text">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-brand-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
