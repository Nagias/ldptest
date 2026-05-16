"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { leadFormSection } from "@/data/hyperwork-b2b-data";
import { Button } from "./Button";

type Errors = Record<string, string>;

const requiredFields = [
  "name",
  "company",
  "phone",
  "email",
  "companySize",
  "need",
  "city",
  "budget"
];

function FieldError({ message }: { message?: string }) {
  return message ? <p className="mt-2 text-xs font-medium text-brand-orange">{message}</p> : null;
}

function inputClasses(hasError?: boolean) {
  return [
    "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-brand-text outline-none transition focus:ring-4 focus:ring-brand-blue/10",
    hasError ? "border-brand-orange" : "border-brand-border focus:border-brand-blue"
  ].join(" ");
}

export function LeadFormSection() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors: Errors = {};

    requiredFields.forEach((field) => {
      if (!String(formData.get(field) ?? "").trim()) {
        nextErrors[field] = "Vui lòng nhập thông tin này.";
      }
    });

    const email = String(formData.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Email công việc chưa hợp lệ.";
    }

    const phone = String(formData.get("phone") ?? "");
    if (phone && phone.replace(/\D/g, "").length < 9) {
      nextErrors.phone = "Số điện thoại chưa hợp lệ.";
    }

    if (formData.get("consent") !== "on") {
      nextErrors.consent = "Bạn cần đồng ý để HyperWork liên hệ tư vấn.";
    }

    setErrors(nextErrors);
    setSubmitted(false);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      form.reset();
    }, 650);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-brand-dark py-20 md:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="fade-up">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-brand-blue">
            {leadFormSection.eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-5xl">
            {leadFormSection.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
            {leadFormSection.description}
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {leadFormSection.trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-3 text-sm font-semibold text-white">
                <CheckCircle2 className="h-5 w-5 text-brand-blue" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="fade-up rounded-[28px] border border-white/10 bg-white p-5 shadow-soft md:p-8"
        >
          {submitted ? (
            <div className="mb-6 rounded-2xl border border-brand-blue/20 bg-brand-blue/10 p-4 text-sm font-semibold text-brand-blue">
              Cảm ơn bạn. HyperWork đã ghi nhận thông tin và sẽ liên hệ trong vòng 24 giờ.
            </div>
          ) : null}

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-brand-text">Họ và tên</span>
              <input name="name" className={inputClasses(Boolean(errors.name))} />
              <FieldError message={errors.name} />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-brand-text">Công ty</span>
              <input name="company" className={inputClasses(Boolean(errors.company))} />
              <FieldError message={errors.company} />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-brand-text">Chức vụ</span>
              <input name="role" className={inputClasses()} />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-brand-text">Số điện thoại</span>
              <input name="phone" className={inputClasses(Boolean(errors.phone))} inputMode="tel" />
              <FieldError message={errors.phone} />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-brand-text">Email công việc</span>
              <input name="email" className={inputClasses(Boolean(errors.email))} type="email" />
              <FieldError message={errors.email} />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-brand-text">Quy mô doanh nghiệp</span>
              <select name="companySize" className={inputClasses(Boolean(errors.companySize))} defaultValue="">
                <option value="" disabled>
                  Chọn quy mô
                </option>
                {leadFormSection.companySizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <FieldError message={errors.companySize} />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-brand-text">Nhu cầu</span>
              <select name="need" className={inputClasses(Boolean(errors.need))} defaultValue="">
                <option value="" disabled>
                  Chọn nhu cầu
                </option>
                {leadFormSection.needs.map((need) => (
                  <option key={need} value={need}>
                    {need}
                  </option>
                ))}
              </select>
              <FieldError message={errors.need} />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-brand-text">Thành phố</span>
              <input name="city" className={inputClasses(Boolean(errors.city))} />
              <FieldError message={errors.city} />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-brand-text">Ngân sách dự kiến</span>
              <select name="budget" className={inputClasses(Boolean(errors.budget))} defaultValue="">
                <option value="" disabled>
                  Chọn ngân sách
                </option>
                {leadFormSection.budgets.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
              <FieldError message={errors.budget} />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-brand-text">Nội dung cần tư vấn</span>
              <textarea
                name="message"
                rows={4}
                className={[inputClasses(), "resize-none"].join(" ")}
                placeholder="Chia sẻ thêm về mặt bằng, số lượng nhân sự hoặc thời gian triển khai mong muốn."
              />
            </label>
          </div>

          <label className="mt-5 flex items-start gap-3">
            <input
              name="consent"
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-brand-border text-brand-orange focus:ring-brand-orange"
            />
            <span className="text-sm leading-6 text-brand-muted">
              Tôi đồng ý để HyperWork liên hệ tư vấn theo thông tin đã cung cấp.
            </span>
          </label>
          <FieldError message={errors.consent} />

          <Button type="submit" className="mt-7 w-full" showArrow disabled={loading}>
            {loading ? "Đang gửi..." : "Nhận tư vấn miễn phí"}
          </Button>
        </form>
      </div>
    </section>
  );
}
