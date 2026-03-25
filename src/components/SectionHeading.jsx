function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-6 md:mb-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="max-w-3xl font-['Sora'] text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl md:text-[2.15rem] lg:text-4xl dark:text-slate-50">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeading;
