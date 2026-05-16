import { CheckCircle2 } from "lucide-react";
import { processSection } from "@/data/hyperwork-b2b-data";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

const processHighlights = [
  { value: "24h", label: "phản hồi" },
  { value: "2 ngày", label: "có báo giá" },
  { value: "5-10 ngày", label: "lắp đặt" },
  { value: "0", label: "phát sinh" }
];

const deliverables = [
  "Brief nhu cầu",
  "Layout sơ bộ",
  "Báo giá trọn gói",
  "Biên bản lắp đặt",
  "Lịch bảo trì"
];

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow={processSection.eyebrow}
          heading={processSection.heading}
          subheading={processSection.subheading}
        />

        <div className="fade-up mt-12 overflow-hidden rounded-[30px] border border-brand-border bg-brand-text text-white shadow-soft">
          <div className="grid border-b border-white/10 md:grid-cols-4">
            {processHighlights.map((item) => (
              <div key={item.label} className="border-white/10 p-6 md:border-r last:md:border-r-0">
                <p className="text-4xl font-bold tracking-tight">{item.value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/55">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-blue">
                Operations Timeline
              </p>
              <h3 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                Từ khảo sát đến nghiệm thu, mọi đầu việc đều có deliverable.
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/65">
                Mục tiêu của quy trình là giúp doanh nghiệp biết chính xác ai phụ trách, mốc nào hoàn tất và kết quả nhận được ở từng bước.
              </p>
              <Button href="#contact" className="mt-8" showArrow>
                Bắt đầu quy trình khảo sát
              </Button>
            </div>

            <div className="grid">
              {processSection.steps.map((step, index) => (
                <article
                  key={step.number}
                  className="group grid gap-5 border-b border-white/10 p-6 last:border-b-0 md:grid-cols-[108px_1fr_190px] md:items-center md:p-7"
                >
                  <div>
                    <p className="text-5xl font-bold tracking-tight text-white/18 transition group-hover:text-brand-blue">
                      {step.number}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold tracking-tight text-white">{step.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-white/62">{step.body}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue" />
                      <span>{deliverables[index]}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
