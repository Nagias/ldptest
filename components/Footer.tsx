import { footer, navItems } from "@/data/hyperwork-b2b-data";
import { Button } from "./Button";

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container-page">
        <div className="grid gap-10 border-b border-brand-border pb-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-3" aria-label="HyperWork home">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-text text-sm font-bold text-white">
                H
              </span>
              <span className="text-lg font-bold tracking-tight text-brand-text">HyperWork</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-brand-muted">{footer.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-text">
              Điều hướng nhanh
            </h3>
            <div className="mt-5 grid gap-3">
              {navItems.slice(0, 6).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-brand-muted transition-colors hover:text-brand-text"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-text">
              Thông tin liên hệ
            </h3>
            <div className="mt-5 grid gap-3 text-sm text-brand-muted">
              <p>Hotline: {footer.contact.hotline}</p>
              <p>Email: {footer.contact.email}</p>
              <p>Địa chỉ: {footer.contact.address}</p>
            </div>
            <Button href="#contact" className="mt-6" variant="primary">
              Nhận tư vấn
            </Button>
          </div>
        </div>
        <p className="pt-7 text-sm text-brand-muted">{footer.copyright}</p>
      </div>
    </footer>
  );
}
