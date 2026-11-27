import { ArrowLeft, BookOpen, Camera, ExternalLink, MapPin, Quote, Users } from 'lucide-react';
import { useState } from 'react';
import { FIELDWORK_PHOTOS, Lang, RESEARCH_REPORTS, TEAM_MEMBERS } from '../data/profile';

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
      {/* Back & Header */}
      <div className="space-y-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-cyan-500/60 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-cyan-500" />
          {lang === 'zh' ? '返回肖玉丰个人主页' : 'Back to Simon’s Homepage'}
        </button>

        <div className="rounded-3xl p-6 sm:p-10 border border-cyan-500/25 bg-gradient-to-br from-cyan-500/10 via-slate-900/5 to-amber-500/10 dark:from-cyan-500/15 dark:via-slate-900/80 dark:to-amber-500/10">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-3">
            QMS-OS Research Lab · Dongguan × Silicon Valley × Vancouver
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">
            {lang === 'zh'
              ? 'QMS-OS 研究团队与报告中心'
              : 'QMS-OS Research Team & Reports'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {lang === 'zh'
              ? '由 20 余年制造质量一线专家与硅谷 / 温哥华 / 伯克利 AI 架构团队联合发起，探索从“表单式 QMS”向“情境化、人机协同 QMS-OS”的演进路径。本页展示核心团队分工、脱敏后的研究报告全文要点与调研纪实。'
              : 'Co-founded by 20+ year manufacturing quality veterans and AI architects across Silicon Valley, Vancouver, and UC Berkeley—exploring the evolution from form-based QMS to contextual, human-AI collaborative QMS-OS.'}
          </p>
        </div>
      </div>

      {/* Expanded Research Reports Reader */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-5 h-5 text-cyan-500" />
          <h2 className="text-2xl font-bold">
            {lang === 'zh' ? '核心研究报告与论文展开' : 'Research Reports & Working Papers'}
          </h2>
        </div>

        {/* Tabs */}
        <div className="grid md:grid-cols-3 gap-3">
          {RESEARCH_REPORTS.map((rep) => {
            const isActive = rep.id === activeReport.id;
            return (
              <button
                key={rep.id}
                onClick={() => setActiveReportId(rep.id)}
                className={`text-left rounded-2xl p-4 border transition-all cursor-pointer ${
                  isActive
                    ? 'border-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/15 shadow-lg shadow-cyan-500/10'
                    : 'border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-600 dark:text-cyan-400 mb-1.5">
                  <span>{t(rep.tag)}</span>
                  <span>{rep.date}</span>
                </div>
                <div className="font-semibold text-sm leading-snug">{t(rep.title)}</div>
              </button>
            );
          })}
        </div>

        {/* Active Report Detail */}
        <article className="rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/75 space-y-6">
          <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-5">
            <div className="text-xs font-mono text-amber-600 dark:text-amber-400">
              {t(activeReport.tag)} · {activeReport.date}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">{t(activeReport.title)}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {t(activeReport.subtitle)}
            </p>
          </div>

          <blockquote className="flex items-start gap-3 rounded-2xl p-4 sm:p-5 bg-amber-500/10 border border-amber-500/25 text-amber-800 dark:text-amber-200">
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
                <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                  {sec.points.map((pt, pIdx) => (
                    <li key={pIdx}>{t(pt)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Full Team Directory */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <Users className="w-5 h-5 text-cyan-500" />
          <h2 className="text-2xl font-bold">
            {lang === 'zh' ? '跨太平洋核心团队分工' : 'Trans-Pacific Core Team'}
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
                      className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-cyan-500 transition-colors"
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

      {/* Fieldwork Gallery */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <Camera className="w-5 h-5 text-amber-500" />
          <h2 className="text-2xl font-bold">
            {lang === 'zh' ? '东莞 · 深圳调研与研讨纪实' : 'Dongguan & Shenzhen Fieldwork'}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {FIELDWORK_PHOTOS.map((photo, idx) => (
            <figure
              key={idx}
              className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={photo.src}
                  alt={t(photo.caption)}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {t(photo.caption)}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
