import { useState, useEffect } from "react";

const chapters = [
  { id: "hero", label: "01 · Index" },
  { id: "about", label: "02 · About" },
  { id: "experience", label: "03 · Experience" },
  { id: "work", label: "04 · Projects" },
  { id: "education", label: "05 · Research" },
  { id: "contact", label: "06 · Contact" },
];

export default function ChapterRail() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(chapters[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Chapters"
      className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-40 select-none pointer-events-auto"
    >
      {chapters.map((chapter) => {
        const isActive = activeId === chapter.id;
        return (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className={`chapter-item group ${isActive ? "chapter-active" : ""}`}
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`chapter-dot ${
                isActive
                  ? "!bg-teal !shadow-[0_0_8px_rgba(20,184,166,0.8)] scale-125"
                  : "group-hover:bg-slate-400"
              }`}
            />
            <span
              className={`chapter-label ${
                isActive ? "!text-teal font-medium" : "group-hover:text-paper"
              }`}
            >
              {chapter.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
