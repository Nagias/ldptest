type SectionHeadingProps = {
  eyebrow: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "center",
  invert = false,
  className = ""
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "fade-up max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      ].join(" ")}
    >
      <p
        className={[
          "mb-4 text-xs font-bold uppercase tracking-[0.28em]",
          invert ? "text-brand-blue" : "text-brand-blue"
        ].join(" ")}
      >
        {eyebrow}
      </p>
      <h2
        className={[
          "text-balance text-3xl font-bold tracking-tight md:text-5xl",
          invert ? "text-white" : "text-brand-text"
        ].join(" ")}
      >
        {heading}
      </h2>
      {subheading ? (
        <p
          className={[
            "mt-5 text-base leading-8 md:text-lg",
            invert ? "text-white/70" : "text-brand-muted"
          ].join(" ")}
        >
          {subheading}
        </p>
      ) : null}
    </div>
  );
}
