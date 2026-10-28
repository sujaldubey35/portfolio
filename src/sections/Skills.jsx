import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="skills-section border-t border-white/5 py-20 bg-ink-2/30"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="skills-heading mb-12">
          <p className="data-label">Telemetry · Tooling</p>
          <h2
            id="skills-title"
            className="mt-3 font-display text-3xl sm:text-4xl text-paper"
          >
            Core tooling &amp; infrastructure.
          </h2>
          <div className="rule-teal mt-4 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <div
              key={category.category}
              className="p-5 rounded border border-white/5 bg-ink-2/60"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-teal font-medium pb-2 border-b border-white/5">
                {category.category}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-white/[0.03] border border-white/10 text-paper-dim hover:text-teal hover:border-teal/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}