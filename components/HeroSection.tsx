import Image from "next/image";
import { CheckCircle2, Play } from "lucide-react";
import { hero } from "@/data/hyperwork-b2b-data";
import { Button } from "./Button";

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-white pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <p className="fade-up mb-5 text-xs font-bold uppercase tracking-[0.32em] text-brand-blue">
            {hero.eyebrow}
          </p>
          <h1 className="fade-up fade-up-delay-1 max-w-4xl text-balance text-5xl font-bold tracking-tight text-brand-text md:text-7xl">
            {hero.heading}
          </h1>
          <p className="fade-up fade-up-delay-2 mt-6 max-w-2xl text-lg leading-8 text-brand-muted md:text-xl">
            {hero.subheading}
          </p>

          <div className="fade-up fade-up-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" showArrow>
              {hero.primaryCta}
            </Button>
            <Button href="#projects" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>

          <div className="fade-up fade-up-delay-3 mt-8 grid gap-3 sm:grid-cols-3">
            {hero.trustPoints.map((point) => (
              <div key={point} className="flex items-start gap-2 text-sm font-medium text-brand-text">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up fade-up-delay-2 relative">
          <div className="relative overflow-hidden rounded-[28px] border border-brand-border bg-brand-soft shadow-soft">
            <Image
              src={hero.image}
              alt="Không gian bàn ghế văn phòng hiện đại"
              width={820}
              height={760}
              priority
              className="h-[430px] w-full object-cover md:h-[560px]"
            />
          </div>

          <div className="absolute -bottom-8 left-5 right-5 rounded-[24px] border border-white/70 bg-white/90 p-3 shadow-soft backdrop-blur md:-left-10 md:right-auto md:w-[330px]">
            <div className="relative overflow-hidden rounded-[18px] bg-brand-soft">
              <Image
                src={hero.videoPoster}
                alt="Video preview demo không gian làm việc"
                width={620}
                height={360}
                className="h-[180px] w-full object-cover"
              />
              <button
                className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-brand-orange shadow-card transition-transform hover:scale-105"
                type="button"
                aria-label="Play demo video"
              >
                <Play className="ml-1 h-5 w-5 fill-current" />
              </button>
            </div>
            <p className="px-2 pt-3 text-sm font-semibold text-brand-text">{hero.videoCaption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
