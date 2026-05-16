"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Download, LockKeyhole } from "lucide-react";
import { b2bAddonsSection } from "@/data/hyperwork-b2b-data";
import { AssetImage } from "./AssetImage";

export function ComboCarousel() {
  const combos = b2bAddonsSection.comboReferences.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  function goToPrevious() {
    setActiveIndex((current) => (current === 0 ? combos.length - 1 : current - 1));
  }

  function goToNext() {
    setActiveIndex((current) => (current === combos.length - 1 ? 0 : current + 1));
  }

  return (
    <div className="fade-up mt-8">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-brand-muted">
          Chuyển từng combo để xem cấu hình tham khảo
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goToPrevious}
            className="grid h-11 w-11 place-items-center rounded-full border border-brand-border bg-brand-text text-white transition hover:bg-brand-blue"
            aria-label="Combo trước"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <div className="flex min-w-16 items-center justify-center gap-2" aria-label="Combo hiện tại">
            {combos.map((combo, index) => (
              <button
                key={combo.figure}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={[
                  "h-2 rounded-full transition-all duration-200",
                  activeIndex === index ? "w-7 bg-brand-blue" : "w-2 bg-brand-border hover:bg-brand-muted/40"
                ].join(" ")}
                aria-label={`Xem combo ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goToNext}
            className="grid h-11 w-11 place-items-center rounded-full border border-brand-border bg-brand-text text-white transition hover:bg-brand-blue"
            aria-label="Combo tiếp theo"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[28px] border border-brand-border bg-white shadow-soft">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
        {combos.map((combo) => (
          <article
            key={combo.title}
            className="relative grid min-w-full bg-white lg:grid-cols-[1.16fr_0.84fr]"
          >
            <span className="pointer-events-none absolute -right-4 -top-12 z-10 text-[170px] font-bold leading-none text-brand-text/[0.04]">
              {combo.figure}
            </span>
            <div className="relative overflow-hidden bg-brand-soft">
              <AssetImage
                src={combo.image}
                alt={`${combo.title} figure ${combo.figure}`}
                width={900}
                height={680}
                className="h-[340px] w-full object-cover transition duration-500 hover:scale-[1.03] md:h-[500px]"
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

      <div className="relative mt-6 overflow-hidden rounded-[28px] border border-brand-border bg-brand-soft p-6 md:p-8">
        <div className="absolute inset-0 opacity-40 blur-sm">
          <div className="grid h-full grid-cols-3 gap-4 p-6">
            <div className="rounded-3xl bg-white" />
            <div className="rounded-3xl bg-white" />
            <div className="rounded-3xl bg-white" />
          </div>
        </div>
        <div className="relative grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-brand-blue">
              <LockKeyhole className="h-3.5 w-3.5" />
              Tài liệu tải xuống
            </span>
            <h4 className="mt-5 text-3xl font-bold tracking-tight text-brand-text">
              Bảng combo chi tiết + checklist setup văn phòng
            </h4>
            <p className="mt-3 text-sm leading-7 text-brand-muted">
              Nhận file tham khảo gồm danh sách combo, checklist khảo sát mặt bằng và gợi ý chọn cấu hình theo quy mô team.
            </p>
          </div>

          <form
            className="rounded-3xl bg-white p-4 shadow-card"
            onSubmit={(event) => {
              event.preventDefault();
              if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                setEmailSubmitted(true);
              }
            }}
          >
            {emailSubmitted ? (
              <div className="rounded-2xl bg-brand-blue/10 p-4 text-sm font-semibold text-brand-blue">
                Đã ghi nhận email. HyperWork sẽ gửi checklist và combo chi tiết tới bạn.
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  required
                  placeholder="Email công việc"
                  className="rounded-2xl border border-brand-border px-4 py-3 text-sm outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-text px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-blue"
                >
                  <Download className="h-4 w-4" />
                  Tải checklist
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
