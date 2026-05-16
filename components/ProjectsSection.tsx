import { ArrowUpRight } from "lucide-react";
import { projectsSection } from "@/data/hyperwork-b2b-data";
import { AssetImage } from "./AssetImage";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 bg-brand-soft py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={projectsSection.eyebrow}
            heading={projectsSection.heading}
            subheading={projectsSection.subheading}
            align="left"
            className="mx-0"
          />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-blueDark"
          >
            {projectsSection.link}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projectsSection.items.map((project) => (
            <article
              key={project.name}
              className="fade-up overflow-hidden rounded-[24px] border border-brand-border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <AssetImage
                src={project.image}
                alt={`${project.name} workspace project`}
                width={760}
                height={460}
                className="h-56 w-full border-b border-brand-border bg-brand-soft object-cover"
              />
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-muted">
                  {project.kicker}
                </p>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-brand-text">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-brand-muted">{project.description}</p>
                  </div>
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-text">
                    {project.year}
                  </span>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-brand-border pt-5">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.22em] text-brand-muted">
                      {project.productLabel}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-brand-text">
                      {project.productValue}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.22em] text-brand-muted">
                      {project.scaleLabel}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-brand-text">
                      {project.scaleValue}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
