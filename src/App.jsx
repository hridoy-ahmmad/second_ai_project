import { useEffect, useState } from "react";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import TimelineSection from "./components/TimelineSection";
import { projects, roles, socials, techGroups, timeline } from "./data";

function App() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme || "dark";
  });
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  const [showPointerGlow, setShowPointerGlow] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");

    return () => {
      document.documentElement.classList.remove("scroll-smooth");
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 45 : 95;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1100);
        return;
      }

      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      const nextText = isDeleting
        ? currentRole.slice(0, displayText.length - 1)
        : currentRole.slice(0, displayText.length + 1);

      setDisplayText(nextText);
    }, typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    const updatePointerCapability = () => {
      setShowPointerGlow(mediaQuery.matches);
    };

    const handlePointerMove = (event) => {
      setPointerPosition({ x: event.clientX, y: event.clientY });
    };

    updatePointerCapability();

    if (mediaQuery.matches) {
      window.addEventListener("pointermove", handlePointerMove);
    }

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePointerCapability);
    } else {
      mediaQuery.addListener(updatePointerCapability);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);

      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", updatePointerCapability);
      } else {
        mediaQuery.removeListener(updatePointerCapability);
      }
    };
  }, []);

  const handleThemeToggle = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const handleNavigate = (href) => {
    const section = document.querySelector(href);

    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.16),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(14,165,233,0.14),transparent_20%),linear-gradient(180deg,#f8fafc_0%,#eef6ff_48%,#fdfdfd_100%)] font-['Outfit'] text-slate-800 transition-colors selection:bg-sky-300 selection:text-slate-950 dark:bg-[radial-gradient(circle_at_top_left,rgba(22,163,74,0.18),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(56,189,248,0.18),transparent_20%),linear-gradient(180deg,#08111f_0%,#0f172a_45%,#111827_100%)] dark:text-slate-200">
      {showPointerGlow && (
        <div
          className="pointer-events-none fixed left-0 top-0 z-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.18)_0%,rgba(56,189,248,0.12)_38%,rgba(255,255,255,0)_72%)] opacity-90 blur-3xl transition-transform duration-150 ease-out dark:bg-[radial-gradient(circle,rgba(16,185,129,0.22)_0%,rgba(14,165,233,0.18)_38%,rgba(15,23,42,0)_72%)]"
          style={{
            transform: `translate3d(${pointerPosition.x - 144}px, ${pointerPosition.y - 144}px, 0)`,
          }}
        />
      )}

      <div className="pointer-events-none fixed left-[-4rem] top-8 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none fixed bottom-48 right-[-5rem] h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />

      <Header theme={theme} onThemeToggle={handleThemeToggle} onNavigate={handleNavigate} />

      <main className="relative z-10 mx-auto w-[min(1180px,calc(100%-1rem))] py-4 pb-16 md:w-[min(1180px,calc(100%-1.5rem))] md:py-6 lg:w-[min(1180px,calc(100%-2rem))] lg:py-8">
        <HeroSection displayText={displayText} />
        <SkillsSection techGroups={techGroups} />
        <ProjectsSection projects={projects} />
        <TimelineSection timeline={timeline} />
        <ContactSection socials={socials} />
      </main>

      <Footer socials={socials} onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
