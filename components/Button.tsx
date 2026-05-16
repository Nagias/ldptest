import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "blue" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href">;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-orange text-white shadow-[0_16px_36px_rgba(252,86,50,0.26)] hover:bg-brand-orangeHover hover:shadow-[0_18px_42px_rgba(252,86,50,0.32)]",
  secondary:
    "border border-brand-border bg-white text-brand-text hover:border-brand-text hover:bg-brand-soft",
  blue:
    "bg-brand-blue text-white shadow-[0_16px_36px_rgba(11,109,255,0.22)] hover:bg-brand-blueDark",
  ghost: "text-brand-text hover:bg-brand-soft"
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  showArrow = false,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-brand-orange/20 disabled:cursor-not-allowed disabled:opacity-60",
    variantClasses[variant],
    className
  ].join(" ");

  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <ArrowRight aria-hidden="true" className="h-4 w-4" /> : null}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
