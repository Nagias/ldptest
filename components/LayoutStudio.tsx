"use client";

import { useState } from "react";
import { ArrowUpRight, Boxes, DoorOpen, LayoutGrid, MonitorCog, UsersRound, X } from "lucide-react";
import { b2bAddonsSection } from "@/data/hyperwork-b2b-data";
import { AssetImage } from "./AssetImage";

const layoutIcons = [LayoutGrid, UsersRound, DoorOpen, MonitorCog];

type LayoutItem = (typeof b2bAddonsSection.layoutSamples.items)[number];

export function LayoutStudio() {
  const [selected, setSelected] = useState<LayoutItem | null>(null);
  const [previewIndex, setPreviewIndex] = useState(0);

  function openLayout(item: LayoutItem) {
    setSelected(item);
    setPreviewIndex(0);
  }

  const activeDemo = selected?.demos?.[previewIndex] ?? selected?.demos?.[0];

  return (
    <>
      <div className="mt-16 rounded-[30px] border border-brand-border bg-brand-soft p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="fade-up lg:sticky lg:top-28">
            <span className="inline-flex rounded-full bg-brand-blue/10 px-3 py-1.5 text-xs font-bold text-brand-blue">
              {b2bAddonsSection.layoutSamples.eyebrow}
            </span>
            <h3 className="mt-5 max-w-xl text-4xl font-bold tracking-tight text-brand-text md:text-5xl">
              {b2bAddonsSection.layoutSamples.heading}
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-7 text-brand-muted">
              {b2bAddonsSection.layoutSamples.subheading}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-brand-border bg-white p-5">
                <p className="text-3xl font-bold text-brand-text">4</p>
                <p className="mt-1 text-xs font-semibold text-brand-muted">không gian mẫu</p>
              </div>
              <div className="rounded-2xl border border-brand-border bg-white p-5">
                <p className="text-3xl font-bold text-brand-text">16</p>
                <p className="mt-1 text-xs font-semibold text-brand-muted">demo layout</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {b2bAddonsSection.layoutSamples.items.map((item, index) => {
              const Icon = layoutIcons[index] ?? Boxes;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => openLayout(item)}
                  className="fade-up group overflow-hidden rounded-[24px] border border-brand-border bg-white text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="relative h-48 overflow-hidden bg-brand-soft">
                    <AssetImage
                      src={item.image}
                      alt={`${item.title} layout thumbnail`}
                      width={560}
                      height={360}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
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
                    <h4 className="text-xl font-bold tracking-tight text-brand-text">{item.title}</h4>
                    <p className="mt-3 line-clamp-2 text-sm leading-7 text-brand-muted">{item.body}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {selected ? (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-brand-text/70 p-4 backdrop-blur-sm">
          <div className="max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-soft">
            <div className="flex items-center justify-between gap-4 border-b border-brand-border px-5 py-4 md:px-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                  {selected.tag}
                </p>
                <h3 className="mt-1 text-xl font-bold text-brand-text md:text-2xl">
                  {selected.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="grid h-11 w-11 place-items-center rounded-full border border-brand-border text-brand-text transition hover:border-brand-text"
                aria-label="Đóng popup layout"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid max-h-[calc(92vh-77px)] gap-0 overflow-y-auto lg:grid-cols-[1.35fr_0.65fr]">
              <div className="bg-brand-soft p-4 md:p-7">
                {activeDemo ? (
                  <AssetImage
                    src={activeDemo.image}
                    alt={activeDemo.caption}
                    width={1100}
                    height={720}
                    className="h-[320px] w-full rounded-[22px] border border-brand-border bg-white object-cover md:h-[560px]"
                  />
                ) : null}
              </div>

              <aside className="p-5 md:p-7">
                <p className="text-sm leading-7 text-brand-muted">{selected.body}</p>
                <div className="mt-6 grid gap-3">
                  {selected.demos.map((demo, index) => (
                    <button
                      key={demo.caption}
                      type="button"
                      onClick={() => setPreviewIndex(index)}
                      className={[
                        "grid grid-cols-[96px_1fr] items-center gap-3 rounded-2xl border p-2 text-left transition",
                        previewIndex === index
                          ? "border-brand-blue bg-brand-blue/5"
                          : "border-brand-border hover:border-brand-text"
                      ].join(" ")}
                    >
                      <AssetImage
                        src={demo.image}
                        alt={demo.caption}
                        width={220}
                        height={140}
                        className="h-16 w-24 rounded-xl bg-brand-soft object-cover"
                      />
                      <span className="text-sm font-bold text-brand-text">{demo.caption}</span>
                    </button>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
