import Image from "next/image";
import { Boxes, Check, DoorOpen, LayoutGrid, MonitorCog, UsersRound } from "lucide-react";
import { b2bAddonsSection, commitmentsSection } from "@/data/hyperwork-b2b-data";
import { SectionHeading } from "./SectionHeading";

const layoutIcons = [LayoutGrid, UsersRound, DoorOpen, MonitorCog];

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

        <div className="mt-16 rounded-[28px] border border-brand-border bg-brand-soft p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="fade-up">
              <span className="inline-flex rounded-full bg-brand-blue/10 px-3 py-1.5 text-xs font-bold text-brand-blue">
                {b2bAddonsSection.layoutSamples.eyebrow}
              </span>
              <h3 className="mt-5 max-w-xl text-3xl font-bold tracking-tight text-brand-text md:text-4xl">
                {b2bAddonsSection.layoutSamples.heading}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-brand-muted">
                {b2bAddonsSection.layoutSamples.subheading}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {b2bAddonsSection.layoutSamples.items.map((item, index) => {
                const Icon = layoutIcons[index] ?? Boxes;

                return (
                  <article
                    key={item.title}
                    className="fade-up rounded-[22px] border border-brand-border bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
                  >
                    <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-bold tracking-tight text-brand-text">{item.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-brand-muted">{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="fade-up max-w-3xl">
            <span className="inline-flex rounded-full bg-brand-blue/10 px-3 py-1.5 text-xs font-bold text-brand-blue">
              {b2bAddonsSection.comboReferences.eyebrow}
            </span>
            <h3 className="mt-5 text-3xl font-bold tracking-tight text-brand-text md:text-4xl">
              {b2bAddonsSection.comboReferences.heading}
            </h3>
            <p className="mt-4 text-sm leading-7 text-brand-muted md:text-base">
              {b2bAddonsSection.comboReferences.subheading}
            </p>
          </div>

          <div className="mt-8 grid gap-6">
            {b2bAddonsSection.comboReferences.items.map((combo, index) => (
              <article
                key={combo.title}
                className="fade-up grid overflow-hidden rounded-[28px] border border-brand-border bg-white shadow-[0_1px_0_rgba(17,17,17,0.02)] lg:grid-cols-2"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <Image
                    src={combo.image}
                    alt={`${combo.title} figure ${combo.figure}`}
                    width={900}
                    height={680}
                    className="h-full min-h-[300px] w-full bg-brand-soft object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center bg-brand-soft/70 p-7 md:p-12">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-text">
                    {combo.label}
                  </p>
                  <h4 className="mt-6 text-3xl font-bold tracking-tight text-brand-text">
                    {combo.title}
                  </h4>
                  <p className="mt-5 max-w-xl text-base leading-8 text-brand-text/80">
                    {combo.description}
                  </p>
                  <ul className="mt-6 grid gap-3">
                    {combo.products.map((product) => (
                      <li key={product} className="flex gap-3 text-sm font-medium text-brand-text">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex w-fit rounded-full bg-brand-text px-8 py-4 text-sm font-bold text-white">
                    {combo.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
