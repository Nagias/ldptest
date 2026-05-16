"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/hyperwork-b2b-data";
import { Button } from "./Button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/80 bg-white/90 backdrop-blur-xl">
      <nav className="container-page flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="HyperWork home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-text text-sm font-bold text-white">
            H
          </span>
          <span className="text-lg font-bold tracking-tight text-brand-text">HyperWork</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-muted transition-colors hover:text-brand-text"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary">
            Nhận tư vấn
          </Button>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-brand-border text-brand-text lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-brand-border bg-white lg:hidden">
          <div className="container-page grid gap-2 py-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-3 text-sm font-semibold text-brand-text hover:bg-brand-soft"
              >
                {item.label}
              </a>
            ))}
            <Button href="#contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Nhận tư vấn
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
