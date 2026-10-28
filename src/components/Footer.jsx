import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="site-footer border-t border-white/5 py-12 bg-ink">
      <div className="site-footer-inner mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-paper-dim">
        <p>
          © 2026 {personal.name} · {personal.title}
        </p>

        <a
          href="#hero"
          className="text-paper-dim hover:text-teal transition-colors inline-flex items-center gap-1 group"
        >
          <span>Back to top</span>
          <span
            aria-hidden="true"
            className="transition-transform group-hover:-translate-y-0.5"
          >
            ↑
          </span>
        </a>
      </div>
    </footer>
  );
}