import SectionHeading from "./SectionHeading";

function TimelineSection({ timeline }) {
  return (
    <section id="timeline" className="scroll-mt-28 mt-6 rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-[0_24px_80px_rgba(148,163,184,0.16)] backdrop-blur-xl md:p-8 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_24px_80px_rgba(2,6,23,0.35)]">
      <SectionHeading
        eyebrow="Journey"
        title="A steady timeline of learning, building, and improving"
      />

      <div className="relative grid gap-4 before:absolute before:bottom-1 before:left-4 before:top-1 before:w-px before:bg-gradient-to-b before:from-emerald-400 before:to-sky-300/20">
        {timeline.map((item) => (
          <article className="relative grid grid-cols-[2rem_1fr] gap-4" key={item.title}>
            <div className="relative z-10 mt-2 h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(74,222,128,0.16)]" />
            <div className="rounded-[1.35rem] border border-slate-200/80 bg-white/60 p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">
                {item.year}
              </span>
              <h3 className="font-['Sora'] text-xl font-semibold text-slate-900 dark:text-slate-50">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TimelineSection;
