import { trendsSection } from "@/data/hyperwork-b2b-data";
import { AssetImage } from "./AssetImage";
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
              className="fade-up group overflow-hidden rounded-[24px] border border-brand-border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative h-56 overflow-hidden bg-brand-soft">
                <AssetImage
                  src={item.image}
                  alt={`${item.title} office trend`}
                  width={760}
                  height={460}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-brand-blue shadow-card backdrop-blur">
                  0{index + 1}
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold tracking-tight text-brand-text">{item.title}</h3>
                <p className="mt-4 min-h-[112px] text-sm leading-7 text-brand-muted">{item.body}</p>
                <span className="mt-6 inline-flex rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1.5 text-xs font-bold text-brand-blue">
                  {item.outcome}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
