"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqSection } from "@/data/hyperwork-b2b-data";
import { SectionHeading } from "./SectionHeading";

function FAQItem({
  question,
  answer,
  open,
  onToggle
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-[20px] border border-brand-border bg-white">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-base font-bold text-brand-text"
        onClick={onToggle}
      >
        <span>{question}</span>
        <ChevronDown
          className={[
            "h-5 w-5 shrink-0 text-brand-blue transition-transform duration-200",
            open ? "rotate-180" : ""
          ].join(" ")}
        />
      </button>
      <div
        className={[
          "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        ].join(" ")}
      >
        <div className="min-h-0">
          <p className="px-5 pb-5 text-sm leading-7 text-brand-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-brand-soft py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow={faqSection.eyebrow}
          heading={faqSection.heading}
          subheading={faqSection.subheading}
        />

        <div className="mx-auto mt-12 grid max-w-3xl gap-3">
          {faqSection.items.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
