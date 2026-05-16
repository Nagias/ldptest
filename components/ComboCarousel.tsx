"use client";

import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { b2bAddonsSection } from "@/data/hyperwork-b2b-data";
import { AssetImage } from "./AssetImage";

export function ComboCarousel() {
  const combos = b2bAddonsSection.comboReferences.items;

  return (
    <div className="fade-up mt-8">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-brand-muted">
          Kéo ngang để xem các cấu hình tham khảo
        </p>
        <div className="hidden gap-2 md:flex">
          <a
            href="#combo-1"
            className="grid h-10 w-10 place-items-center rounded-full border border-brand-border bg-white text-brand-text transition hover:border-brand-text"
            aria-label="Combo trước"
          >
            <ArrowLeft className="h-4 w-4" />
          </a>
          <a
            href="#combo-3"
            className="grid h-10 w-10 place-items-center rounded-full border border-brand-border bg-white text-brand-text transition hover:border-brand-text"
            aria-label="Combo tiếp theo"
          >
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
        {combos.map((combo) => (
          <article
            id={`combo-${combo.figure}`}
            key={combo.title}
            className="grid min-w-[88%] snap-center overflow-hidden rounded-[28px] border border-brand-border bg-white shadow-[0_1px_0_rgba(17,17,17,0.02)] md:min-w-[760px] lg:min-w-[920px] lg:grid-cols-[1.08fr_0.92fr]"
          >
            <div className="relative overflow-hidden bg-brand-soft">
              <AssetImage
                src={combo.image}
                alt={`${combo.title} figure ${combo.figure}`}
                width={900}
                height={680}
                className="h-[310px] w-full object-cover transition duration-500 hover:scale-[1.03] md:h-[430px]"
              />
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-brand-text shadow-card backdrop-blur">
                FIGURE {combo.figure}
              </span>
            </div>

            <div className="flex flex-col justify-center bg-brand-soft/70 p-7 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
                {combo.label}
              </p>
              <h4 className="mt-5 text-3xl font-bold tracking-tight text-brand-text">
                {combo.title}
              </h4>
              <p className="mt-4 max-w-xl text-sm leading-7 text-brand-muted">
                {combo.description}
              </p>
              <ul className="mt-6 grid gap-3">
                {combo.products.slice(0, 5).map((product) => (
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
  );
}
