import SectionHeading from "./SectionHeading";

const accentClasses = {
  forest: "from-emerald-700 via-teal-600 to-emerald-950",
  violet: "from-indigo-900 via-violet-700 to-indigo-950",
  sunset: "from-orange-900 via-orange-600 to-amber-700",
};

function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="scroll-mt-28 mt-6 rounded-[2rem] border border-white/60 bg-white/70 p-5 shadow-[0_24px_80px_rgba(148,163,184,0.16)] backdrop-blur-xl md:p-7 lg:p-8 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_24px_80px_rgba(2,6,23,0.35)]">
      <SectionHeading
        eyebrow="Featured Work"
        title="Selected projects with clean structure and product thinking"
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            className="overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white/60 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-sky-500"
            key={project.name}
          >
            <div className={`flex min-h-52 flex-col justify-end gap-2 bg-gradient-to-br p-5 text-slate-50 ${accentClasses[project.accent]}`}>
              <span className="text-sm text-white/80">Project Preview</span>
              <strong className="font-['Sora'] text-2xl font-semibold">{project.name}</strong>
            </div>
            <div className="space-y-4 p-5">
              <div>
                <h3 className="font-['Sora'] text-xl font-semibold text-slate-900 dark:text-slate-50">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    className="rounded-full bg-slate-200/70 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-1 text-sm font-medium text-sky-700 dark:text-sky-300">
                <a href={project.live}>Live Demo</a>
                <a href={project.github}>GitHub Repo</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
