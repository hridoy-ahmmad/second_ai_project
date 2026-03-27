function Footer({ socials, onNavigate }) {
  const year = new Date().getFullYear();
  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#timeline" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="  mt-6 pb-8">
      <div className="overflow-hidden  border border-white/60 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(14,165,233,0.14),rgba(255,255,255,0.78))] p-6 shadow-[0_24px_80px_rgba(148,163,184,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(16,185,129,0.18),rgba(14,165,233,0.12),rgba(15,23,42,0.82))] dark:shadow-[0_24px_80px_rgba(2,6,23,0.35)] md:p-8">
        <div className="container mx-auto w-[min(1180px,calc(100%-1rem))] md:w-[min(1180px,calc(100%-1.5rem))] lg:w-[min(1180px,calc(100%-2rem))">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-300">
                Footer
              </p>
              <h2 className="mt-3 max-w-xl font-['Sora'] text-3xl font-semibold text-slate-950 dark:text-slate-50">
                Let&apos;s turn thoughtful ideas into polished digital experiences.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                Open for freelance work, collaborations, and product-focused frontend or MERN projects.
              </p>
            </div>

          </div>

          <div className="mt-8 grid gap-5 border-t border-slate-200/70 pt-6 dark:border-white/10 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-400 text-sm font-extrabold tracking-[0.2em] text-slate-950 shadow-lg shadow-sky-200/40 dark:shadow-sky-950/30">
                MR
              </div>
              <div>
                <p className="font-['Sora'] text-lg font-semibold text-slate-950 dark:text-slate-50">Mahin Rahman</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">MERN Stack Developer</p>
              </div>
            </div>

            <nav className="flex flex-wrap gap-3 text-sm font-medium text-slate-600 dark:text-slate-300 md:justify-center">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  className="rounded-full border border-transparent px-3 py-2 transition hover:border-slate-200 hover:bg-white/60 hover:text-slate-950 dark:hover:border-white/10 dark:hover:bg-white/5 dark:hover:text-white"
                  type="button"
                  onClick={() => onNavigate(link.href)}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex flex-wrap gap-3 md:justify-end">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 dark:border-white/10 dark:bg-slate-950/65 dark:text-slate-200 dark:hover:border-sky-500"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2 border-t border-slate-200/70 pt-5 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>&copy; {year} Mahin Rahman. Crafted with React and Tailwind CSS.</p>
            <p>Focused on clean UI, responsive experiences, and calm product design.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
