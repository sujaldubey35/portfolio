import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="experience-section border-t border-white/5 bg-ink-2/30"
    >
      <div className="experience-layout mx-auto max-w-6xl px-6 py-24">
        {/* Section Heading */}
        <div className="experience-heading mb-16">
          <p className="data-label">Experience · 03</p>
          <h2
            id="experience-title"
            className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl leading-tight text-paper"
          >
            From interfaces to infrastructure.
          </h2>
          <div className="rule-teal mt-6 max-w-xs" />
        </div>

        {/* Roles List */}
        <div className="experience-roles max-w-4xl">
          <ol className="role-list space-y-14" role="list">
            {experiences.map((exp, index) => (
              <li
                key={exp.company + exp.role + index}
                className="career-role group"
                aria-labelledby={`role-${index}`}
              >
                {/* Role Header */}
                <div className="role-heading flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/5 pb-3">
                  <div>
                    <h3
                      id={`role-${index}`}
                      className="font-display text-2xl sm:text-3xl text-paper group-hover:text-teal transition-colors"
                    >
                      {exp.company}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5">
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-teal font-medium">
                        {exp.role}
                      </p>
                      <span className="text-white/20 text-xs hidden sm:inline">|</span>
                      <span className="font-mono text-[11px] text-paper-dim">
                        {exp.type} · {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="font-mono text-xs tracking-wider text-paper-dim whitespace-nowrap mt-1 sm:mt-0">
                    {exp.period}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="role-impact mt-5 space-y-2.5 text-paper-dim leading-relaxed text-sm sm:text-base" role="list">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-teal font-mono select-none text-xs mt-1">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          {/* Education Line at Bottom */}
          <div className="career-education mt-16 pt-8 border-t border-white/5 font-mono text-xs sm:text-sm text-paper-dim flex flex-wrap items-center gap-2">
            <span className="text-teal font-semibold">
              Master of Computer Applications (MCA)
            </span>
            <span className="text-white/20">·</span>
            <span>Galgotias University</span>
            <span className="text-white/20">·</span>
            <span className="text-paper">Completed</span>
          </div>
        </div>
      </div>
    </section>
  );
}