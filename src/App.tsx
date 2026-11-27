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
  Play,
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
import { ImpactCharts } from './components/ImpactCharts';
import { TeamResearchPage } from './components/TeamResearchPage';
import {
  CORE_PHILOSOPHY,
  CREATOR_PLATFORMS,
  CREDENTIALS_SHORT,
  EVOLUTION_PATH,
  KEY_CONTRIBUTIONS,
  LIVE_SYSTEMS,
  Lang,
  PROFILE,
  VISUAL_SHOWCASES,
  VisualShowcaseItem,
} from './data/profile';

export type ThemeMode = 'black' | 'blue' | 'orange' | 'light';

const THEMES: { id: ThemeMode; label: { zh: string; en: string }; swatch: string }[] = [
  { id: 'black', label: { zh: '科技黑', en: 'Tech Black' }, swatch: '#06b6d4' },
  { id: 'blue', label: { zh: '科技蓝', en: 'Tech Blue' }, swatch: '#3b82f6' },
  { id: 'orange', label: { zh: '工业橙', en: 'Safety Orange' }, swatch: '#f97316' },
  { id: 'light', label: { zh: '极简白', en: 'Light' }, swatch: '#e2e8f0' },
];

export default function App() {
  const [lang, setLang] = useState<Lang>('zh');
  const [theme, setTheme] = useState<ThemeMode>('black');
  const [route, setRoute] = useState<'home' | 'team'>(() =>
    window.location.hash === '#/team' ? 'team' : 'home'
  );
  const [activeStageId, setActiveStageId] = useState<string>(VISUAL_SHOWCASES[0].id);
  const [modalDemo, setModalDemo] = useState<VisualShowcaseItem | null>(null);
  const [copiedWechat, setCopiedWechat] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'light') root.classList.remove('dark');
    else root.classList.add('dark');
  }, [theme]);

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

  const openDemoById = (id: string) => {
    const found = VISUAL_SHOWCASES.find((v) => v.id === id);
    if (found) setModalDemo(found);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-black/65 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-3 font-semibold tracking-tight cursor-pointer"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500 text-slate-950 font-mono text-xs font-bold">
              SX
            </span>
            <span className="text-sm sm:text-base">{t(PROFILE.name)}</span>
            <span className="hidden sm:inline text-xs font-normal text-slate-400">
              · {t(PROFILE.creatorBrand)}
            </span>
          </button>

          {route === 'home' && (
            <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400">
              <a href="#philosophy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                {lang === 'zh' ? '核心理念' : 'Philosophy'}
              </a>
              <a href="#impact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                {lang === 'zh' ? '量化成效' : 'Impact'}
              </a>
              <a href="#stage" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                {lang === 'zh' ? '作品逻辑' : 'Showcase'}
              </a>
              <a href="#ecosystem" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                {lang === 'zh' ? '系统与扫地僧' : 'Systems'}
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
            <div className="flex items-center gap-1 p-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5">
              {THEMES.map((th) => (
                <button
                  key={th.id}
                  onClick={() => setTheme(th.id)}
                  title={t(th.label)}
                  className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                    theme === th.id
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full border border-black/20 dark:border-white/20"
                    style={{ backgroundColor: th.swatch }}
                  />
                  <span className="hidden lg:inline">{t(th.label)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {route === 'team' ? (
        <TeamResearchPage lang={lang} onBack={() => navigate('home')} />
      ) : (
        <main>
          {/* 01 · HERO: 智能扫地机主视觉 + 「质量扫地僧」品牌与核心思想 */}
          <section className="relative min-h-[78vh] flex items-end bg-slate-950 text-white overflow-hidden">
            <img
              src="./photos/hero-sweeper.jpg"
              alt="质量扫地僧 · 智能扫地机"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060911] via-[#060911]/80 to-[#060911]/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060911] via-transparent to-[#060911]/30" />

            <div className="relative z-10 max-w-6xl mx-auto w-full px-5 sm:px-8 py-16 sm:py-24 space-y-10">
              <div className="max-w-4xl space-y-5">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">
                  {t(PROFILE.headline)} · {t(PROFILE.location)}
                </p>

                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1]">
                    {t(PROFILE.name)}
                    <span className="text-slate-400 font-normal text-2xl sm:text-4xl ml-3">
                      / {t(PROFILE.creatorBrand)}
                    </span>
                  </h1>
                  <p className="text-xl sm:text-3xl font-medium text-amber-400 leading-snug">
                    「{t(PROFILE.creatorBrand)}」：“{t(PROFILE.slogan)}”
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                  {t(PROFILE.subline)}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                <a
                  href="#stage"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full theme-accent-bg text-sm font-semibold transition-all hover:opacity-90"
                >
                  {lang === 'zh' ? '查看系统逻辑与作品' : 'Explore Works & Logic'}
                  <ArrowDown className="w-4 h-4" />
                </a>
                <a
                  href="https://www.aitqm.cn"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium backdrop-blur-md transition-all"
                >
                  aitqm.cn {lang === 'zh' ? 'AI 工具箱' : 'AI Toolbox'}
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
            </div>
          </section>

          {/* 02 · CORE PHILOSOPHY + EVOLUTION PATH (思想理念 + 能力跃迁，不直接罗列公司名) */}
          <section id="philosophy" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28 space-y-20">
            {/* Three Core Ideas */}
            <div className="space-y-8">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 mb-2">
                  CORE PHILOSOPHY
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
                  {lang === 'zh' ? '质量信仰 · 质量数字化 · 可进化平台' : 'Belief · Digitalization · Evolvable Platform'}
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {CORE_PHILOSOPHY.map((item) => (
                  <div
                    key={item.code}
                    className="pt-5 border-t border-slate-200 dark:border-white/10 space-y-3"
                  >
                    <div className="text-xs font-mono text-amber-500">{item.code}</div>
                    <h3 className="text-lg font-bold">{t(item.title)}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {t(item.desc)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Footprint Logos + 4-Stage Capability Evolution */}
            <div className="space-y-10 pt-10 border-t border-slate-200 dark:border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
                  {lang === 'zh' ? '23 年产业历练与能力跃迁路径' : '23-YEAR CAPABILITY EVOLUTION'}
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

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-2 items-center text-slate-800 dark:text-slate-100">
                <AvicLogo className="h-9 w-auto opacity-85 hover:opacity-100 transition-opacity" />
                <LuxshareLogo className="h-9 w-auto opacity-85 hover:opacity-100 transition-opacity" />
                <PhilipsLogo className="h-9 w-auto opacity-85 hover:opacity-100 transition-opacity" />
                <FoxconnLogo className="h-9 w-auto opacity-85 hover:opacity-100 transition-opacity" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-2">
                {EVOLUTION_PATH.map((item, idx) => (
                  <div
                    key={idx}
                    className="pt-5 border-t border-slate-200 dark:border-white/10 space-y-2"
                  >
                    <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                      {item.stage}
                    </div>
                    <h3 className="text-base font-semibold">{t(item.role)}</h3>
                    <div className="text-xs font-mono text-amber-600 dark:text-amber-400">
                      {t(item.focus)}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 pt-1 leading-relaxed">
                      {t(item.insight)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 03 · QUANTIFIED IMPACT & CHARTS */}
          <section
            id="impact"
            className="bg-slate-100/70 dark:bg-white/[0.02] border-y border-slate-200/70 dark:border-white/5 py-20 sm:py-28"
          >
            <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-14">
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                  QUANTIFIED IMPACT
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  {lang === 'zh' ? '核心贡献与改善前后量化对比' : 'Core Contributions & Quantified Impact'}
                </h2>
              </div>

              <ImpactCharts lang={lang} />

              <div className="grid md:grid-cols-3 gap-8 pt-6 border-t border-slate-200 dark:border-white/10">
                {KEY_CONTRIBUTIONS.map((item, idx) => (
                  <div key={idx} className="space-y-2.5">
                    <div className="text-2xl font-bold font-mono text-cyan-600 dark:text-cyan-400">
                      {item.metric}
                    </div>
                    <div className="text-xs font-mono text-amber-600 dark:text-amber-400">
                      {t(item.metricSub)}
                    </div>
                    <h3 className="text-base font-semibold pt-1">{t(item.title)}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {t(item.desc)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 04 · UNIFIED INTERACTIVE STAGE WITH FULL LOGIC EXPLANATION */}
          <section id="stage" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 mb-2">
                  ARCHITECTURE & INTERACTIVE STAGE
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  {lang === 'zh' ? '数字质量作品与设计逻辑' : 'Visual Works & Design Logic'}
                </h2>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {lang === 'zh'
                  ? '切换下方作品，查看其「包含内容、架构思想、适用场景与突破性」并直接交互'
                  : 'Select a work to inspect its contents, architecture, use cases, and breakthrough'}
              </p>
            </div>

            {/* Pill Selector */}
            <div className="flex flex-wrap gap-2">
              {VISUAL_SHOWCASES.map((item) => {
                const isActive = item.id === activeStage.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveStageId(item.id)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'theme-accent-bg shadow-md'
                        : 'bg-slate-200/70 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                    }`}
                  >
                    {t(item.title)}
                  </button>
                );
              })}
            </div>

            {/* Stage Canvas + 4-Dimension Logic Panel */}
            <div className="rounded-3xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-white/10 shadow-2xl">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950">
                <iframe
                  key={activeStage.id}
                  src={activeStage.url}
                  title={t(activeStage.title)}
                  className="w-full h-full border-0"
                />
              </div>

              <div className="p-6 sm:p-8 bg-white dark:bg-[#0b101b] border-t border-slate-200 dark:border-white/10 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                      {t(activeStage.tag)}
                    </span>
                    <h3 className="text-xl font-bold mt-0.5">{t(activeStage.title)}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setModalDemo(activeStage)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 dark:bg-white/10 hover:bg-cyan-600 dark:hover:bg-cyan-500 text-white dark:hover:text-slate-950 text-xs font-medium transition-colors cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      {lang === 'zh' ? '全屏交互' : 'Fullscreen'}
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

                {/* 4-Dimension Logic Explanation */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-slate-200/80 dark:border-white/10">
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono text-slate-400">
                      {lang === 'zh' ? '01 包含内容' : '01 CONTENTS'}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t(activeStage.whatInside)}
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                      {lang === 'zh' ? '02 架构思想' : '02 ARCHITECTURE'}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t(activeStage.architecture)}
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono text-slate-400">
                      {lang === 'zh' ? '03 适用场景' : '03 SCENARIOS'}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t(activeStage.scenarios)}
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono text-amber-600 dark:text-amber-400">
                      {lang === 'zh' ? '04 突破性与展示逻辑' : '04 BREAKTHROUGH'}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {t(activeStage.breakthrough)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 05 · LIVE SYSTEMS &「质量扫地僧」(无粉丝数 + 突出社会贡献 + 系统预览) */}
          <section
            id="ecosystem"
            className="bg-slate-100/70 dark:bg-white/[0.02] border-t border-slate-200/70 dark:border-white/5 py-20 sm:py-28"
          >
            <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left: Live Systems with Social Contribution & Visual Preview */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 mb-2">
                    FACTORY SYSTEMS & INDUSTRY CONTRIBUTION
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {lang === 'zh' ? '可直达系统：工厂落地与社会贡献' : 'Live Systems: Factory & Community'}
                  </h2>
                </div>

                <div className="divide-y divide-slate-200 dark:divide-white/10">
                  {LIVE_SYSTEMS.map((sys) => (
                    <div key={sys.id} className="py-6 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="space-y-1">
                          <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400">
                            {t(sys.badge)}
                          </span>
                          <h3 className="text-lg font-bold">{t(sys.title)}</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openDemoById(sys.previewDemoId)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/80 dark:bg-white/10 hover:bg-cyan-500 hover:text-slate-950 text-xs font-medium transition-colors cursor-pointer"
                          >
                            <Play className="w-3 h-3" />
                            {lang === 'zh' ? '系统画面预览' : 'Preview'}
                          </button>
                          <a
                            href={sys.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-slate-900 dark:bg-cyan-500 text-white dark:text-slate-950 text-xs font-semibold hover:opacity-90 transition-opacity"
                          >
                            {t(sys.actionLabel)}
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {t(sys.desc)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right:「质量扫地僧」内容矩阵 (去粉丝数，提供直达入口与链接位) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber-500 mb-2">
                    QUALITY BELIEF & KNOWLEDGE SHARING
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    「质量扫地僧」
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {lang === 'zh'
                      ? '围绕 8D 实战、质量管理深度思考与质量信仰建立，把专业翻译成大白话，帮助更多制造一线质量人系统化改善。'
                      : 'Sharing practical 8D, deep quality thinking, and quality mindset to help frontline engineers improve.'}
                  </p>
                </div>

                <div className="divide-y divide-slate-200 dark:divide-white/10">
                  {CREATOR_PLATFORMS.map((p) => (
                    <div key={p.id} className="py-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5 min-w-0">
                        {renderPlatformIcon(p.id)}
                        <div className="min-w-0 space-y-0.5">
                          <div className="text-sm font-semibold">{t(p.name)}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-300">
                            {t(p.focus)}
                          </div>
                          <div className="text-[11px] font-mono text-slate-400">
                            {t(p.hint)}
                          </div>
                        </div>
                      </div>
                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-300 dark:border-white/15 hover:border-cyan-500 text-xs font-medium shrink-0"
                        >
                          {lang === 'zh' ? '直达' : 'Visit'}
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <button
                          onClick={() => {
                            navigator.clipboard?.writeText('质量扫地僧');
                            setCopiedWechat(true);
                            setTimeout(() => setCopiedWechat(false), 2000);
                          }}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-300 dark:border-white/15 hover:border-amber-500 text-xs font-medium shrink-0 cursor-pointer"
                        >
                          {copiedWechat
                            ? lang === 'zh'
                              ? '已复制名称'
                              : 'Copied'
                            : lang === 'zh'
                            ? '复制搜视频号'
                            : 'Copy Name'}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 06 · QMS RESEARCH LAB PORTAL */}
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
                    ? '独立研究空间：查看跨太平洋 7 人研发团队分工、QMS-OS 研究报告、AI 范式论文及一线调研纪实。'
                    : 'Dedicated portal for the 7-member team, QMS-OS reports, AI paradigm papers, and fieldwork.'}
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
