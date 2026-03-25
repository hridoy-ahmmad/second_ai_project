import SectionHeading from "./SectionHeading";

function SkillsSection({ techGroups }) {
  return (
    <section id="skills" className="scroll-mt-28 mt-6 rounded-[2rem] border border-white/60 bg-white/70 p-5 shadow-[0_24px_80px_rgba(148,163,184,0.16)] backdrop-blur-xl md:p-7 lg:p-8 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_24px_80px_rgba(2,6,23,0.35)]">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools I use to turn ideas into reliable products"
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {techGroups.map((group) => (
          <article
            className="rounded-[1.5rem] border border-slate-200/80 bg-white/60 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
            key={group.title}
          >
            <h3 className="mb-4 font-['Sora'] text-xl font-semibold text-slate-900 dark:text-slate-50">
              {group.title}
            </h3>
            <div className="grid gap-3">
              {group.items.map((item) => (
                <div
                  className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/90 px-4 py-4 transition hover:-translate-y-0.5 hover:border-sky-300 dark:border-white/10 dark:bg-slate-950/70 dark:hover:border-sky-500"
                  key={item.name}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400/20 to-sky-400/25 text-sm font-bold text-slate-800 dark:text-slate-100">
                    {item.icon}
                  </span>
                  <span className="min-w-0 font-medium text-slate-800 dark:text-slate-100">{item.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
