import { Check } from "lucide-react";
import { solutionsSection } from "@/data/hyperwork-b2b-data";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

export function SolutionsSection() {
  return (
    <section id="solutions" className="scroll-mt-24 bg-brand-soft py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow={solutionsSection.eyebrow}
          heading={solutionsSection.heading}
          subheading={solutionsSection.subheading}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {solutionsSection.items.map((item) => (
            <article
              key={item.title}
              className="fade-up flex flex-col rounded-[24px] border border-brand-border bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <h3 className="text-2xl font-bold tracking-tight text-brand-text">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-brand-muted">{item.body}</p>
              <ul className="mt-7 grid gap-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm font-medium text-brand-text">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="#contact" showArrow>
            {solutionsSection.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
