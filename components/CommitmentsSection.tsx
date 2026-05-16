import { ArrowUpRight, Boxes, DoorOpen, LayoutGrid, MonitorCog, UsersRound } from "lucide-react";
import { b2bAddonsSection, commitmentsSection } from "@/data/hyperwork-b2b-data";
import { AssetImage } from "./AssetImage";
import { ComboCarousel } from "./ComboCarousel";
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
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
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
              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-brand-border bg-white p-4">
                  <p className="text-2xl font-bold text-brand-text">4</p>
                  <p className="mt-1 text-xs font-semibold text-brand-muted">không gian mẫu</p>
                </div>
                <div className="rounded-2xl border border-brand-border bg-white p-4">
                  <p className="text-2xl font-bold text-brand-text">3D</p>
                  <p className="mt-1 text-xs font-semibold text-brand-muted">trước khi lắp đặt</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {b2bAddonsSection.layoutSamples.items.map((item, index) => {
                const Icon = layoutIcons[index] ?? Boxes;

                return (
                  <article
                    key={item.title}
                    className="fade-up group overflow-hidden rounded-[22px] border border-brand-border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
                  >
                    <div className="relative h-44 overflow-hidden bg-brand-soft">
                      <AssetImage
                        src={item.image}
                        alt={`${item.title} layout thumbnail`}
                        width={560}
                        height={360}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-blue shadow-card backdrop-blur">
                        {item.tag}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                          <Icon className="h-5 w-5" />
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-brand-muted transition group-hover:text-brand-blue" />
                      </div>
                      <h4 className="text-lg font-bold tracking-tight text-brand-text">
                        {item.title}
                      </h4>
                      <p className="mt-3 line-clamp-2 text-sm leading-7 text-brand-muted">
                        {item.body}
                      </p>
                    </div>
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

          <ComboCarousel />
        </div>
      </div>
    </section>
  );
}
