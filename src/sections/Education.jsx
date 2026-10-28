import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const { education, publications, certifications, languages } = portfolioData;

  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="education-section border-t border-white/5 py-24 bg-ink-2/20"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="education-heading mb-16">
          <p className="data-label">Research &amp; Academics · 05</p>
          <h2
            id="education-title"
            className="mt-3 font-display text-4xl sm:text-5xl leading-tight text-paper"
          >
            Published research &amp; qualifications.
          </h2>
          <div className="rule-teal mt-6 max-w-xs" />
        </div>

        {/* Featured IJSREM Research Paper */}
        {publications && publications.length > 0 && (
          <div className="mb-16">
            {publications.map((pub) => (
              <div
                key={pub.title}
                className="hud-frame rounded-lg border border-white/10 bg-ink-2/80 p-6 sm:p-8 overflow-hidden shadow-2xl"
              >
                <div className="preview-toolbar !-mx-6 sm:!-mx-8 !-mt-6 sm:!-mt-8 mb-6 !px-6 sm:!px-8 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span />
                    <span />
                    <span />
                  </div>
                  <p className="text-[11px] font-mono text-teal">
                    IJSREM Peer-Reviewed Publication · Impact Factor: {pub.impactFactor}
                  </p>
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/5 pb-4 mb-4">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-teal">
                    Scholarly Paper · {pub.volume}
                  </p>
                  <p className="font-mono text-xs text-paper-dim">
                    ISSN: {pub.issn}
                  </p>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-paper leading-snug">
                  {pub.title}
                </h3>

                <p className="mt-2 font-mono text-xs sm:text-sm text-teal-light">
                  {pub.journal}
                </p>

                <p className="mt-2 font-mono text-xs text-paper-dim">
                  Authors: {pub.authors} · Mentor: {pub.mentor}
                </p>

                <p className="mt-4 text-paper-dim text-sm sm:text-base leading-relaxed font-light">
                  {pub.description}
                </p>

                {/* Direct Action Links */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-4 font-mono text-xs tracking-wider">
                  <a
                    href={pub.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-teal/70 px-3.5 py-1.5 text-teal hover:bg-teal hover:text-ink transition font-medium inline-flex items-center gap-1.5"
                  >
                    <span>Read on IJSREM ↗</span>
                  </a>

                  <a
                    href={pub.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper-dim hover:text-paper px-3.5 py-1.5 border border-white/10 hover:border-white/30 transition inline-flex items-center gap-1.5"
                  >
                    <span>Download Paper (PDF) ↗</span>
                  </a>

                  <a
                    href={pub.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper-dim hover:text-paper px-3.5 py-1.5 border border-white/10 hover:border-white/30 transition inline-flex items-center gap-1.5"
                  >
                    <span>Publication Certificate (PDF) ↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Degrees and Education Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
          {/* Degrees */}
          <div className="lg:col-span-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-teal mb-6">
              Degree Qualifications
            </h3>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/5 pb-4"
                >
                  <div>
                    <h4 className="font-display text-xl text-paper">
                      {edu.degree}
                    </h4>
                    <p className="font-mono text-xs text-paper-dim mt-0.5">
                      {edu.institution}
                    </p>
                    {edu.highlight && (
                      <p className="text-xs text-paper-faint mt-1">
                        {edu.highlight}
                      </p>
                    )}
                  </div>

                  <div className="font-mono text-xs text-right whitespace-nowrap">
                    <span className="text-teal font-medium">{edu.status}</span>
                    <span className="text-white/20 mx-2">·</span>
                    <span className="text-paper-dim">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Certifications & Languages */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-teal mb-4">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded border border-white/5 bg-ink-2/40"
                  >
                    <h4 className="font-display text-base text-paper">
                      {cert.title}
                    </h4>
                    <p className="font-mono text-xs text-teal mt-0.5">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-paper-dim mt-1.5 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-teal mb-3">
                Languages
              </h3>
              <div className="flex flex-wrap gap-3 font-mono text-xs">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="px-3 py-1 border border-white/10 rounded bg-ink-2 text-paper-dim"
                  >
                    {lang.name} · <span className="text-teal">{lang.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
