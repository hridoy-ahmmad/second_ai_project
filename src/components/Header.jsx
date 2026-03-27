import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

function Header({ theme, onThemeToggle, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    onNavigate(href);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/55">
      <div className="mx-auto w-[min(1180px,calc(100%-1rem))] px-1 py-4 md:w-[min(1180px,calc(100%-2rem))] md:px-0">
        <div className="flex items-center justify-between gap-4">
          <div className="grid  place-items-center rounded-2xl font-extrabold text-cyan-300 text-2xl  lg:ml-15">
            Hridoy Ahmmad
          </div>
          <div className="hidden items-center gap-4 lg:flex">
            <nav className="flex flex-wrap gap-5 text-sm font-medium text-slate-600 dark:text-slate-300 xl:gap-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  className="transition hover:text-slate-950 dark:hover:text-white"
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              className="inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-300 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-sky-500"
              type="button"
              onClick={onThemeToggle}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              className="inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-sky-300 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-sky-500"
              type="button"
              onClick={onThemeToggle}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>

            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-300/80 bg-white/80 text-slate-800 transition hover:border-sky-300 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-sky-500"
              type="button"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              <span className="flex flex-col gap-1.5">
                <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-4 rounded-[1.5rem] border border-slate-200/80 bg-white/90 p-4 shadow-lg dark:border-slate-800 dark:bg-slate-950/90 lg:hidden">
            <nav className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  className="rounded-2xl px-4 py-3 text-left transition hover:bg-slate-100 dark:hover:bg-slate-900"
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
