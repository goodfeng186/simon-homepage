import { ArrowLeft, BookOpen, Camera, ExternalLink, MapPin, Quote, Users } from 'lucide-react';
import { useState } from 'react';
import { Lang, PHOTO_WALL, RESEARCH_REPORTS, TEAM_MEMBERS } from '../data/profile';

interface TeamResearchPageProps {
  lang: Lang;
  onBack: () => void;
}

export function TeamResearchPage({ lang, onBack }: TeamResearchPageProps) {
  const [activeReportId, setActiveReportId] = useState(RESEARCH_REPORTS[0].id);
  const t = (obj: { zh: string; en: string }) => obj[lang];
  const activeReport =
    RESEARCH_REPORTS.find((r) => r.id === activeReportId) || RESEARCH_REPORTS[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16">
      {/* Back & Hero */}
      <div className="space-y-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-cyan-500/60 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-cyan-500" />
          {lang === 'zh' ? '返回个人主页' : 'Back to Homepage'}
        </button>

        <div className="rounded-3xl p-8 sm:p-12 border border-cyan-500/25 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 text-white relative overflow-hidden">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-3 max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              QMS-OS Research Lab · Dongguan × Silicon Valley × Vancouver
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              {lang === 'zh' ? 'QMS-OS 研究团队与报告中心' : 'QMS-OS Team & Research'}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {lang === 'zh'
                ? '制造质量专家 × 跨太平洋 AI 架构团队，探索情境化、人机协同的下一代质量操作系统。'
                : 'Manufacturing quality veterans × trans-Pacific AI architects building the next-gen quality operating system.'}
            </p>
          </div>
        </div>
      </div>

      {/* Research Reports */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-5 h-5 text-cyan-500" />
          <h2 className="text-2xl font-bold">
            {lang === 'zh' ? '研究报告与论文展开' : 'Research Reports & Papers'}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {RESEARCH_REPORTS.map((rep) => {
            const isActive = rep.id === activeReport.id;
            return (
              <button
                key={rep.id}
                onClick={() => setActiveReportId(rep.id)}
                className={`text-left rounded-2xl p-4 border transition-all cursor-pointer ${
                  isActive
                    ? 'border-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/15'
                    : 'border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-600 dark:text-cyan-400 mb-1">
                  <span>{t(rep.tag)}</span>
                  <span>{rep.date}</span>
                </div>
                <div className="font-semibold text-sm">{t(rep.title)}</div>
              </button>
            );
          })}
        </div>

        <article className="rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/75 space-y-6">
          <div className="space-y-1 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="text-xs font-mono text-amber-500">
              {t(activeReport.tag)} · {activeReport.date}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">{t(activeReport.title)}</h3>
          </div>

          <blockquote className="flex items-start gap-3 rounded-2xl p-4 bg-amber-500/10 border border-amber-500/25 text-amber-800 dark:text-amber-200">
            <Quote className="w-5 h-5 shrink-0 mt-0.5 text-amber-500" />
            <p className="text-sm sm:text-base font-medium leading-relaxed">
              {t(activeReport.coreQuote)}
            </p>
          </blockquote>

          <div className="grid md:grid-cols-2 gap-6">
            {activeReport.sections.map((sec, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-3"
              >
                <h4 className="font-semibold text-base text-cyan-700 dark:text-cyan-300">
                  {t(sec.heading)}
                </h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                  {sec.points.map((pt, pIdx) => (
                    <li key={pIdx}>{t(pt)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Team */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <Users className="w-5 h-5 text-cyan-500" />
          <h2 className="text-2xl font-bold">
            {lang === 'zh' ? '核心研究团队' : 'Core Team'}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEAM_MEMBERS.map((m, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/65 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-base">{t(m.name)}</h3>
                    <div className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mt-0.5">
                      {t(m.role)}
                    </div>
                  </div>
                  {m.link && (
                    <a
                      href={m.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-cyan-500"
                    >
                      Portfolio <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {t(m.bio)}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <MapPin className="w-3 h-3" />
                <span>{t(m.location)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photos */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <Camera className="w-5 h-5 text-amber-500" />
          <h2 className="text-2xl font-bold">
            {lang === 'zh' ? '调研与研讨纪实' : 'Fieldwork Gallery'}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {PHOTO_WALL.map((photo, idx) => (
            <figure
              key={idx}
              className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={photo.src}
                  alt={t(photo.caption)}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="px-5 py-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {t(photo.caption)}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
