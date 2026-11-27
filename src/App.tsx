import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  Cpu,
  Globe,
  Mail,
  MapPin,
  Maximize2,
  Moon,
  Sun,
  Users,
  X,
} from 'lucide-react';
import {
  AvicLogo,
  DouyinIcon,
  FoxconnLogo,
  LuxshareLogo,
  PhilipsLogo,
  WeChatChannelsIcon,
  XiaohongshuIcon,
} from './components/BrandLogos';
import { TeamResearchPage } from './components/TeamResearchPage';
import {
  CAREER_COMPACT,
  CREATOR_PLATFORMS,
  CREDENTIALS_SHORT,
  LIVE_SYSTEMS,
  Lang,
  PHOTO_WALL,
  PROFILE,
  VISUAL_SHOWCASES,
  VisualShowcaseItem,
} from './data/profile';

export default function App() {
  const [lang, setLang] = useState<Lang>('zh');
  const [dark, setDark] = useState(true);
  const [route, setRoute] = useState<'home' | 'team'>(() =>
    window.location.hash === '#/team' ? 'team' : 'home'
  );
  const [activeStageId, setActiveStageId] = useState<string>(VISUAL_SHOWCASES[0].id);
  const [modalDemo, setModalDemo] = useState<VisualShowcaseItem | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(window.location.hash === '#/team' ? 'team' : 'home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (target: 'home' | 'team') => {
    window.location.hash = target === 'team' ? '#/team' : '#/';
    setRoute(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = (obj: { zh: string; en: string }) => obj[lang];
  const activeStage =
    VISUAL_SHOWCASES.find((v) => v.id === activeStageId) || VISUAL_SHOWCASES[0];

  const renderPlatformIcon = (id: 'douyin' | 'xhs' | 'wechat') => {
    if (id === 'douyin') return <DouyinIcon className="w-8 h-8 shrink-0" />;
    if (id === 'xhs') return <XiaohongshuIcon className="w-8 h-8 shrink-0" />;
    return <WeChatChannelsIcon className="w-8 h-8 shrink-0" />;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#060911] dark:text-slate-100 transition-colors duration-300">
      {/* Minimal Single-Row Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-[#060911]/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-3 font-semibold tracking-tight cursor-pointer"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500 text-slate-950 font-mono text-xs font-bold">
              SX
            </span>
            <span className="text-sm sm:text-base">{t(PROFILE.name)}</span>
          </button>

          {route === 'home' && (
            <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400">
              <a href="#footprint" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                {lang === 'zh' ? '履历版图' : 'Footprint'}
              </a>
              <a href="#stage" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                {lang === 'zh' ? '交互舞台' : 'Showcase'}
              </a>
              <a href="#ecosystem" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                {lang === 'zh' ? '系统与内容' : 'Systems'}
              </a>
              <a href="#gallery" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                {lang === 'zh' ? '现场纪实' : 'Gallery'}
              </a>
            </nav>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate(route === 'team' ? 'home' : 'team')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20 transition-colors cursor-pointer"
            >
              <Users className="w-3.5 h-3.5" />
              {route === 'team'
                ? lang === 'zh'
                  ? '返回主页'
                  : 'Home'
                : lang === 'zh'
                ? 'QMS 研究团队'
                : 'QMS Lab'}
            </button>
            <button
              onClick={() => setLang((prev) => (prev === 'zh' ? 'en' : 'zh'))}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === 'zh' ? 'EN' : '中文'}
            </button>
            <button
              onClick={() => setDark((prev) => !prev)}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {route === 'team' ? (
        <TeamResearchPage lang={lang} onBack={() => navigate('home')} />
      ) : (
        <main>
          {/* 01 · FULL-BLEED EDITORIAL HERO (满版图像压字骨架) */}
          <section className="relative min-h-[76vh] flex items-end bg-slate-950 text-white overflow-hidden">
            <img
              src="./photos/whiteboard-thinking.jpg"
              alt="System Thinking"
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060911] via-[#060911]/70 to-[#060911]/35" />

            <div className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-8 py-16 sm:py-24 space-y-10">
              <div className="max-w-3xl space-y-5">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">
                  {t(PROFILE.headline)} · {t(PROFILE.location)}
                </p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]">
                  {t(PROFILE.name)}
                  <span className="block text-2xl sm:text-4xl font-normal text-slate-200 mt-4 leading-snug">
                    “{t(PROFILE.slogan)}”
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                  {t(PROFILE.subline)}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-8 pt-6 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#stage"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold transition-all"
                  >
                    {lang === 'zh' ? '浏览交互作品' : 'Explore Works'}
                    <ArrowDown className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.aitqm.cn"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium backdrop-blur-md transition-all"
                  >
                    aitqm.cn
                    <ArrowUpRight className="w-4 h-4 text-amber-400" />
                  </a>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition-colors px-2"
                  >
                    <Mail className="w-4 h-4 text-cyan-400" />
                    {PROFILE.email}
                  </a>
                </div>

                {/* Inline Telemetry (No boxes, pure typography) */}
                <div className="flex flex-wrap gap-8 sm:gap-10">
                  {PROFILE.metrics.slice(0, 3).map((m, i) => (
                    <div key={i}>
                      <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
                        {m.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{t(m.label)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 02 · INDUSTRY FOOTPRINT & TRACK RECORD (空间留白分隔，零多余边框) */}
          <section id="footprint" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28 space-y-16">
            {/* Group Logos Strip */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
                  {lang === 'zh' ? '23 年产业历练与服务版图' : '23-YEAR INDUSTRY FOOTPRINT'}
                </span>
                <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
                  {CREDENTIALS_SHORT.map((c, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      {t(c.name)}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-4 items-center text-slate-800 dark:text-slate-100">
                <AvicLogo className="h-9 w-auto opacity-85 hover:opacity-100 transition-opacity" />
                <LuxshareLogo className="h-9 w-auto opacity-85 hover:opacity-100 transition-opacity" />
                <PhilipsLogo className="h-9 w-auto opacity-85 hover:opacity-100 transition-opacity" />
                <FoxconnLogo className="h-9 w-auto opacity-85 hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Clean 4-column editorial timeline (top hairline only, no nested boxes) */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
              {CAREER_COMPACT.map((item, idx) => (
                <div
                  key={idx}
                  className="pt-5 border-t border-slate-200 dark:border-white/10 space-y-2"
                >
                  <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                    {item.period}
                  </div>
                  <h3 className="text-base font-semibold">{t(item.role)}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t(item.scope)}</p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 pt-1 leading-relaxed">
                    {t(item.impact)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 03 · UNIFIED INTERACTIVE STAGE (单一巨幅舞台，替代 6 个零散小窗) */}
          <section
            id="stage"
            className="bg-slate-100/70 dark:bg-white/[0.02] border-y border-slate-200/70 dark:border-white/5 py-20 sm:py-28"
          >
            <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 mb-2">
                    INTERACTIVE STAGE
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    {lang === 'zh' ? '数字质量可视化作品舞台' : 'Interactive Visual Stage'}
                  </h2>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {lang === 'zh'
                    ? '切换下方标签，在主画布直接交互体验 3D 与 AI 原型'
                    : 'Select a project below to interact directly on the main canvas'}
                </p>
              </div>

              {/* Clean Pill Selector */}
              <div className="flex flex-wrap gap-2">
                {VISUAL_SHOWCASES.map((item) => {
                  const isActive = item.id === activeStage.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveStageId(item.id)}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        isActive
                          ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 shadow-md'
                          : 'bg-white/80 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-white/10'
                      }`}
                    >
                      {t(item.title)}
                    </button>
                  );
                })}
              </div>

              {/* Single Commanding 16:9 Stage */}
              <div className="rounded-3xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-white/10 shadow-2xl">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950">
                  <iframe
                    key={activeStage.id}
                    src={activeStage.url}
                    title={t(activeStage.title)}
                    className="w-full h-full border-0"
                  />
                </div>
                <div className="px-6 py-4 bg-white dark:bg-[#0b101b] flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 dark:border-white/10">
                  <div>
                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                      {t(activeStage.tag)}
                    </span>
                    <div className="font-semibold text-base mt-0.5">{t(activeStage.title)}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {t(activeStage.caption)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setModalDemo(activeStage)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 dark:bg-white/10 hover:bg-cyan-600 dark:hover:bg-cyan-500 text-white dark:hover:text-slate-950 text-xs font-medium transition-colors cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      {lang === 'zh' ? '全屏弹窗' : 'Fullscreen'}
                    </button>
                    <a
                      href={activeStage.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 dark:border-white/15 hover:border-cyan-500 text-xs font-medium transition-colors"
                    >
                      {lang === 'zh' ? '新窗口打开' : 'New Tab'}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 04 · SYSTEMS & CREATOR MATRIX (空间并置，干净列表) */}
          <section id="ecosystem" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left: Live Systems */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 mb-2">
                    LIVE SYSTEMS
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {lang === 'zh' ? '可直达的在线系统与工程' : 'Live Systems & Engineering'}
                  </h2>
                </div>

                <div className="divide-y divide-slate-200 dark:divide-white/10">
                  {LIVE_SYSTEMS.map((sys) => (
                    <a
                      key={sys.id}
                      href={sys.url}
                      target="_blank"
                      rel="noreferrer"
                      className="py-5 flex items-center justify-between gap-4 group"
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="text-base sm:text-lg font-semibold group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                            {t(sys.title)}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">
                            {typeof sys.tag === 'string' ? sys.tag : t(sys.tag)}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                          {t(sys.desc)}
                        </p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right: 「质量扫地僧」 */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber-500 mb-2">
                    CONTENT MATRIX
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    「质量扫地僧」
                  </h2>
                </div>

                <div className="divide-y divide-slate-200 dark:divide-white/10">
                  {CREATOR_PLATFORMS.map((p) => (
                    <div key={p.id} className="py-4 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5 min-w-0">
                        {renderPlatformIcon(p.id)}
                        <div className="min-w-0">
                          <div className="text-sm font-semibold">{p.name}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                            {p.sub}
                          </div>
                        </div>
                      </div>
                      <div className="text-lg font-bold font-mono text-amber-500 shrink-0">
                        {p.stat}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 05 · EDITORIAL PHOTO WALL (无厚重边框的杂志大图墙) */}
          <section id="gallery" className="max-w-6xl mx-auto px-5 sm:px-8 pb-20 sm:pb-28 space-y-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 mb-2">
                  FIELDWORK & MOMENTS
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {lang === 'zh' ? '一线调研与技术研讨' : 'Fieldwork & Workshops'}
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-4">
              {PHOTO_WALL.map((photo, idx) => {
                const spanClass =
                  idx === 0
                    ? 'md:col-span-6 md:row-span-2 aspect-[4/3] md:aspect-auto'
                    : idx < 3
                    ? 'md:col-span-3 aspect-[4/3]'
                    : 'md:col-span-3 aspect-[4/3]';
                return (
                  <figure
                    key={idx}
                    className={`group relative overflow-hidden rounded-2xl bg-slate-900 ${spanClass}`}
                  >
                    <img
                      src={photo.src}
                      alt={t(photo.caption)}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                    <figcaption className="absolute bottom-3 left-3.5 right-3.5 text-xs text-white/95 font-medium">
                      {t(photo.caption)}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </section>

          {/* 06 · QMS RESEARCH LAB PORTAL (底部独立入口) */}
          <section className="bg-slate-950 text-white border-t border-white/10">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Cpu className="w-4 h-4" />
                  <span>QMS-OS RESEARCH LAB · 7-MEMBER TRANS-PACIFIC TEAM</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
                  {lang === 'zh'
                    ? '进入 QMS-OS 研究团队与报告中心'
                    : 'Enter QMS-OS Research Team & Reports'}
                </h2>
                <p className="text-sm text-slate-400">
                  {lang === 'zh'
                    ? '独立研究空间：查看跨太平洋 7 人研发团队分工、QMS-OS 研究报告与 AI 范式论文。'
                    : 'Dedicated portal for the 7-member team, QMS-OS reports, and AI paradigm papers.'}
                </p>
              </div>
              <button
                onClick={() => navigate('team')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all cursor-pointer shrink-0"
              >
                {lang === 'zh' ? '进入研究团队专属页' : 'Open Research Portal'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-white/5 py-8 bg-white/50 dark:bg-[#060911]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-cyan-500" />
            <span>© 2026 {t(PROFILE.name)} · {t(PROFILE.location)}</span>
          </div>
          <div>
            {lang === 'zh'
              ? '纯静态本地化构建 · 零海外 CDN 依赖'
              : 'Static self-hosted build · Zero overseas CDN dependencies'}
          </div>
        </div>
      </footer>

      {/* Fullscreen Modal */}
      {modalDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-3 sm:p-6">
          <div className="w-full max-w-6xl h-[88vh] rounded-2xl overflow-hidden border border-white/15 bg-slate-950 flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-slate-900 text-slate-100">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 shrink-0">
                  {t(modalDemo.tag)}
                </span>
                <span className="font-medium text-sm truncate">{t(modalDemo.title)}</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={modalDemo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-200"
                >
                  {lang === 'zh' ? '新窗口' : 'New Tab'}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setModalDemo(null)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <iframe src={modalDemo.url} title={t(modalDemo.title)} className="w-full flex-1 bg-white" />
          </div>
        </div>
      )}
    </div>
  );
}
