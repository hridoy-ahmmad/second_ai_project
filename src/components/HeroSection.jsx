function HeroSection({ displayText }) {
  return (
    <section id="home" className="scroll-mt-28 grid min-h-[78vh] gap-8 rounded-[2rem] border border-white/60 bg-white/70 p-5 shadow-[0_24px_80px_rgba(148,163,184,0.16)] backdrop-blur-xl md:gap-10 md:p-7 lg:grid-cols-[0.95fr_1.05fr] lg:p-8 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_24px_80px_rgba(2,6,23,0.35)]">
      <div className="flex justify-center lg:justify-start">
        <div className="relative aspect-[1/1.08] w-full max-w-[360px] md:max-w-[420px]">
          <div className="absolute inset-[10%_8%] rounded-[2rem] bg-gradient-to-br from-emerald-400/80 via-teal-500/35 to-sky-400/30 blur-3xl" />
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.45),rgba(255,255,255,0.92)),radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_42%)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.35),rgba(15,23,42,0.92)),radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_42%)]">
            <span className="absolute left-4 top-4 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-100">
              Available for work
            </span>
            <div className="grid h-full place-items-center">
              <div className="grid aspect-square w-[clamp(12rem,32vw,18rem)] place-items-center rounded-full border-[8px] border-white/35 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.25),transparent_25%),linear-gradient(140deg,#14532d,#0f766e_45%,#0369a1_100%)] font-['Sora'] text-5xl font-bold text-white shadow-2xl shadow-slate-400/25 dark:border-white/10 dark:shadow-slate-950/40 md:text-6xl lg:text-7xl">
                MR
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-300">
          Modern Portfolio
        </p>
        <h1 className="max-w-[13ch] font-['Sora'] text-4xl font-semibold leading-[1.02] text-slate-950 sm:text-5xl md:max-w-none md:text-6xl lg:max-w-[11ch] lg:text-7xl dark:text-slate-50">
          Hi, I&apos;m <span className="text-sky-600 dark:text-sky-300">Mahin Rahman</span>
        </h1>
        <div className="mt-4 min-h-8 text-lg font-medium text-slate-800 sm:text-xl md:text-2xl dark:text-slate-100">
          <span>{displayText}</span>
          <span className="ml-1 inline-block h-[1.1em] w-[0.12em] animate-pulse bg-sky-500 align-[-0.16em] dark:bg-sky-300" />
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
          I build polished, high-performing web experiences with a strong focus on clean UI,
          responsive layouts, and meaningful user journeys.
        </p>

        <div className="mt-7 flex flex-wrap gap-3 md:gap-4">
          <a
            className="inline-flex min-w-40 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-sky-200/50 transition hover:-translate-y-0.5 dark:shadow-sky-950/35"
            href="#contact"
          >
            Contact Me
          </a>
          <a
            className="inline-flex min-w-40 items-center justify-center rounded-full border border-slate-300/80 bg-white/75 px-5 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-sky-300 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-sky-500"
            href="/"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {[
            ["15+", "Projects shipped"],
            ["120 Days", "Consistency challenge"],
            ["Full Stack", "Frontend to backend"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-slate-200/80 bg-white/55 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <strong className="block font-['Sora'] text-lg font-semibold text-slate-900 dark:text-slate-50">
                {value}
              </strong>
              <span className="text-sm text-slate-600 dark:text-slate-300">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
