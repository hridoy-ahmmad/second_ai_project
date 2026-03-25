import SectionHeading from "./SectionHeading";

function ContactSection({ socials }) {
  return (
    <section id="contact" className="scroll-mt-28 mt-6 rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-[0_24px_80px_rgba(148,163,184,0.16)] backdrop-blur-xl md:p-8 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_24px_80px_rgba(2,6,23,0.35)]">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something thoughtful and useful together"
      />

      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <form className="grid gap-4">
          {[
            ["Name", "text", "Your name"],
            ["Email", "email", "your@email.com"],
            ["Subject", "text", "Project discussion"],
          ].map(([label, type, placeholder]) => (
            <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200" key={label}>
              {label}
              <input
                className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-slate-950/75 dark:text-slate-50 dark:focus:border-sky-500"
                type={type}
                placeholder={placeholder}
              />
            </label>
          ))}

          <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            Message
            <textarea
              className="min-h-36 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-slate-950/75 dark:text-slate-50 dark:focus:border-sky-500"
              rows="5"
              placeholder="Tell me about your idea..."
            />
          </label>

          <button
            className="inline-flex min-w-40 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-sky-200/50 transition hover:-translate-y-0.5 dark:shadow-sky-950/35"
            type="submit"
          >
            Send Message
          </button>
        </form>

        <aside className="flex flex-col justify-between gap-6 rounded-[1.5rem] border border-slate-200/80 bg-white/60 p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
            Whether you need a portfolio, dashboard, or complete MERN app, I care about interfaces that feel calm,
            modern, and easy to use.
          </p>
          <div className="flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                className="rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-200 dark:hover:border-sky-500"
                key={social.name}
                href={social.href}
              >
                {social.name}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default ContactSection;
