import { CheckCircle2 } from "lucide-react";
import { pricingSection } from "@/data/hyperwork-b2b-data";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

function FeatureList({ features, featured }: { features: string[]; featured?: boolean }) {
  return (
    <ul className="mt-8 grid gap-3">
      {features.map((feature) => (
        <li
          key={feature}
          className={[
            "flex gap-3 text-sm leading-6",
            featured ? "text-white/80" : "text-brand-text"
          ].join(" ")}
        >
          <CheckCircle2
            className={[
              "mt-0.5 h-5 w-5 shrink-0",
              featured ? "text-brand-blue" : "text-brand-blue"
            ].join(" ")}
          />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-brand-soft py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow={pricingSection.eyebrow}
          heading={pricingSection.heading}
          subheading={pricingSection.subheading}
        />

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {pricingSection.tiers.map((tier) => (
            <article
              key={tier.title}
              className={[
                "fade-up relative flex flex-col rounded-[28px] border p-7 transition-all duration-200 hover:-translate-y-1",
                tier.featured
                  ? "border-brand-dark bg-brand-dark text-white shadow-soft"
                  : "border-brand-border bg-white text-brand-text hover:shadow-card"
              ].join(" ")}
            >
              {tier.badge ? (
                <span className="mb-5 w-fit rounded-full bg-brand-blue px-3 py-1.5 text-xs font-bold text-white">
                  {tier.badge}
                </span>
              ) : (
                <span className="mb-5 w-fit rounded-full bg-brand-soft px-3 py-1.5 text-xs font-bold text-brand-blue">
                  B2B TIER
                </span>
              )}

              <h3 className="text-sm font-bold uppercase tracking-[0.24em]">{tier.title}</h3>
              <div
                className={[
                  "mt-5 rounded-2xl px-4 py-3 text-sm font-bold",
                  tier.featured ? "bg-white/10 text-white" : "bg-brand-blue/10 text-brand-blue"
                ].join(" ")}
              >
                {tier.fit}
              </div>
              <p className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">{tier.price}</p>
              <p className={["mt-3 text-sm font-semibold", tier.featured ? "text-white/75" : "text-brand-muted"].join(" ")}>
                {tier.subtitle}
              </p>
              <p className={["mt-5 min-h-[52px] text-sm leading-7", tier.featured ? "text-white/70" : "text-brand-muted"].join(" ")}>
                {tier.description}
              </p>

              <FeatureList features={tier.features} featured={tier.featured} />

              <Button
                href="#contact"
                variant={tier.featured ? "blue" : "secondary"}
                className="mt-8 w-full"
              >
                {tier.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
