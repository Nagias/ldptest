import { Activity, BriefcaseBusiness, UsersRound } from "lucide-react";
import { painPointSection } from "@/data/hyperwork-b2b-data";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

const iconMap = {
  activity: Activity,
  briefcase: BriefcaseBusiness,
  users: UsersRound
};

export function PainPointSection() {
  return (
    <section className="bg-brand-soft py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow={painPointSection.eyebrow}
          heading={painPointSection.heading}
          subheading={painPointSection.subheading}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {painPointSection.items.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <article
                key={item.title}
                className="fade-up flex min-h-[360px] flex-col rounded-[24px] border border-brand-border bg-white p-7 shadow-[0_1px_0_rgba(17,17,17,0.02)] transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-brand-text">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-muted">{item.body}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="#contact" showArrow>
            {painPointSection.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
