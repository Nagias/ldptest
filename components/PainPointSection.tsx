import { Activity, ArrowDownRight, BriefcaseBusiness, UsersRound } from "lucide-react";
import { painPointSection } from "@/data/hyperwork-b2b-data";
import { Button } from "./Button";

const iconMap = {
  activity: Activity,
  briefcase: BriefcaseBusiness,
  users: UsersRound
};

function HighlightedText({
  text,
  highlights
}: {
  text: string;
  highlights: string[];
}) {
  const escaped = highlights.map((item) => item.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "gi");

  return (
    <>
      {text.split(pattern).map((part, index) => {
        const isHighlighted = highlights.some(
          (highlight) => highlight.toLowerCase() === part.toLowerCase()
        );

        if (!part) return null;

        return isHighlighted ? (
          <strong key={`${part}-${index}`} className="font-bold text-brand-orange">
            {part}
          </strong>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        );
      })}
    </>
  );
}

export function PainPointSection() {
  return (
    <section className="bg-brand-soft py-20 md:py-28">
      <div className="container-page">
        <div className="fade-up mx-auto max-w-4xl text-center">
          <h2 className="mx-auto max-w-5xl text-balance text-4xl font-bold tracking-tight text-brand-text md:text-6xl">
            Không gian văn phòng truyền thống
            <br className="hidden md:block" /> đang làm giảm sức cạnh tranh.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-brand-muted md:text-lg">
            Một văn phòng chỉ “đủ dùng” không còn đủ để giữ chân nhân sự, nâng hiệu suất và xây dựng thương hiệu tuyển dụng.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {painPointSection.items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <article
                key={item.title}
                className="fade-up group overflow-hidden rounded-[28px] border border-brand-border bg-white shadow-[0_1px_0_rgba(17,17,17,0.02)] transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative bg-brand-text p-7 text-white">
                  <div className="absolute right-5 top-5 text-[88px] font-bold leading-none text-white/[0.06]">
                    0{index + 1}
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowDownRight className="h-6 w-6 text-brand-orange" />
                  </div>
                  <p className="mt-8 text-5xl font-bold tracking-tight">{item.metric}</p>
                  <p className="mt-2 text-sm font-semibold text-white/65">{item.metricLabel}</p>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold tracking-tight text-brand-text">{item.title}</h3>

                  <p className="mt-5 text-sm leading-8 text-brand-muted">
                    <HighlightedText text={item.body} highlights={item.highlightSegments} />
                  </p>

                  <div className="mt-6 h-2 overflow-hidden rounded-full bg-brand-soft">
                    <div
                      className="h-full rounded-full bg-brand-orange transition-all duration-500 group-hover:bg-brand-blue"
                      style={{ width: `${index === 0 ? 72 : index === 1 ? 58 : 66}%` }}
                    />
                  </div>
                </div>
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
