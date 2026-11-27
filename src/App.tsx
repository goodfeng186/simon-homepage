import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Award,
  Camera,
  Cpu,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  Maximize2,
  Moon,
  Server,
  Sparkles,
  Sun,
  Users,
  Wrench,
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
  const [activeDemo, setActiveDemo] = useState<VisualShowcaseItem | null>(null);

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
  const featuredVisuals = VISUAL_SHOWCASES.filter((v) => v.featured);
  const secondaryVisuals = VISUAL_SHOWCASES.filter((v) => !v.featured);

  const renderPlatformIcon = (id: 'douyin' | 'xhs' | 'wechat') => {
    if (id === 'douyin') return <DouyinIcon className="w-9 h-9 shrink-0" />;
    if (id === 'xhs') return <XiaohongshuIcon className="w-9 h-9 shrink-0" />;
    return <WeChatChannelsIcon className="w-9 h-9 shrink-0" />;
  };

  return (
    <div className="min-h-screen bg-grid-pattern relative overflow-x-clip">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 left-1/4 h-[32rem] w-[32rem] rounded-full bg-cyan-500/15 blur-3xl dark:bg-cyan-500/12" />
        <div className="absolute bottom-0 right-1/5 h-[26rem] w-[26rem] rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      {/* Minimal Floating Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 dark:border-slate-800/70 bg-white/75 dark:bg-[#070b14]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-3 font-semibold tracking-tight cursor-pointer"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-mono text-xs shadow-md shadow-cyan-500/20">
              SX
            </span>
            <span className="text-base">{t(PROFILE.name)}</span>
            <span className="hidden sm:inline text-xs font-normal text-slate-400">
              / {t(PROFILE.nickname)}
            </span>
          </button>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => navigate(route === 'team' ? 'home' : 'team')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/25 hover:bg-cyan-500/20 transition-colors cursor-pointer"
            >
              <Users className="w-3.5 h-3.5" />
              {route === 'team'
                ? lang === 'zh'
                  ? '返回主页'
                  : 'Home'
                : lang === 'zh'
                ? 'QMS 研究中心'
                : 'QMS Lab'}
            </button>
            <button
              onClick={() => setLang((prev) => (prev === 'zh' ? 'en' : 'zh'))}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 hover:border-cyan-500/50 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-500" />
              {lang === 'zh' ? 'EN' : '中文'}
            </button>
            <button
              onClick={() => setDark((prev) => !prev)}
              className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 hover:border-cyan-500/50 cursor-pointer"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          </div>
        </div>
      </header>

      {route === 'team' ? (
        <TeamResearchPage lang={lang} onBack={() => navigate('home')} />
      ) : (
        <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-20 sm:space-y-24">
          {/* 1. HERO: 大格局、大视觉、少字直击重点 */}
          <section className="relative rounded-[2rem] overflow-hidden border border-slate-200/80 dark:border-slate-800/90 bg-slate-950 text-white shadow-2xl">
            <img
              src="./photos/whiteboard-thinking.jpg"
              alt="System Thinking"
              className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/55" />

            <div className="relative z-10 p-8 sm:p-14 lg:p-16 grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t(PROFILE.headline)}</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1]">
                  {t(PROFILE.name)}
                  <span className="block text-2xl sm:text-3xl font-medium text-cyan-400 mt-3">
                    “{t(PROFILE.slogan)}”
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
                  {t(PROFILE.subline)}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#visual-showcase"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold transition-all shadow-lg shadow-cyan-500/25"
                  >
                    {lang === 'zh' ? '看实时可视化作品' : 'View Live Visuals'}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.aitqm.cn"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-sm font-medium border border-white/15 transition-all"
                  >
                    <Wrench className="w-4 h-4 text-amber-400" />
                    aitqm.cn
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/5 hover:bg-white/15 text-slate-200 text-sm border border-white/10 transition-all"
                  >
                    <Mail className="w-4 h-4 text-cyan-400" />
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              {/* 4 Key Numbers */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-3">
                {PROFILE.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-4 bg-white/5 backdrop-blur-md border border-white/10"
                  >
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-300 mt-1">{t(m.label)}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 1.5 ENTERPRISE GROUP LOGOS STRIP */}
          <section className="rounded-3xl px-6 py-5 border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/55 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 shrink-0">
                {lang === 'zh' ? '23 年产业历练与服务版图' : '23-YEAR INDUSTRY FOOTPRINT'}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 items-center text-slate-800 dark:text-slate-100">
                <AvicLogo className="h-9 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                <LuxshareLogo className="h-9 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                <PhilipsLogo className="h-9 w-auto opacity-90 hover:opacity-100 transition-opacity" />
                <FoxconnLogo className="h-9 w-auto opacity-90 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </section>

          {/* 2. VISUAL SHOWCASE: 直接把 3D 驾驶舱 / 3D 检验地图效果嵌在页面里展示 */}
          <section id="visual-showcase" className="scroll-mt-20 space-y-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-1">
                  LIVE INTERACTIVE VISUALS
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
                  {lang === 'zh' ? '系统与 3D 可视化实景展示' : 'Live 3D & System Showcases'}
                </h2>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'zh' ? '下方画面可直接鼠标拖拽交互，或点击全屏打开' : 'Interact directly below or open fullscreen'}
              </span>
            </div>

            {/* 2 Featured Large Live Embedded Viewports */}
            <div className="grid lg:grid-cols-2 gap-6">
              {featuredVisuals.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg flex flex-col"
                >
                  <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                    <iframe
                      src={item.url}
                      title={t(item.title)}
                      loading="lazy"
                      className="w-full h-full border-0"
                    />
                    <button
                      onClick={() => setActiveDemo(item)}
                      className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 hover:bg-cyan-500 text-white hover:text-slate-950 text-xs font-medium backdrop-blur-md border border-white/15 transition-all cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      {lang === 'zh' ? '全屏' : 'Fullscreen'}
                    </button>
                  </div>
                  <div className="p-5 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                        {t(item.tag)}
                      </span>
                      <h3 className="text-lg font-bold mt-0.5">{t(item.title)}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {t(item.caption)}
                      </p>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 text-slate-500 hover:text-cyan-500 transition-colors shrink-0"
                      title={lang === 'zh' ? '新窗口打开' : 'Open in new tab'}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* 4 Secondary Live Cards with Embedded Preview Thumbnail */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {secondaryVisuals.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveDemo(item)}
                  className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-cyan-500/60 transition-all cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden pointer-events-none">
                    <iframe
                      src={item.url}
                      title={t(item.title)}
                      loading="lazy"
                      className="w-[200%] h-[200%] origin-top-left scale-50 border-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2.5 text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/90 text-slate-950 font-semibold">
                      {t(item.tag)}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <h3 className="text-sm font-bold group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {t(item.title)}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {t(item.caption)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. LIVE SYSTEMS & CREATOR WITH PLATFORM ICONS */}
          <section className="grid lg:grid-cols-12 gap-6 items-stretch">
            {/* Systems */}
            <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/65 space-y-5">
              <div className="flex items-center gap-2.5">
                <Server className="w-5 h-5 text-cyan-500" />
                <h2 className="text-xl font-bold">
                  {lang === 'zh' ? '在线运行系统与工程' : 'Live Systems'}
                </h2>
              </div>
              <div className="space-y-3">
                {LIVE_SYSTEMS.map((sys) => (
                  <a
                    key={sys.id}
                    href={sys.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 hover:border-cyan-500/60 transition-all group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm sm:text-base group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                          {t(sys.title)}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                          {typeof sys.tag === 'string' ? sys.tag : t(sys.tag)}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {t(sys.desc)}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Creator Matrix with Brand Icons */}
            <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 border border-amber-500/25 bg-gradient-to-br from-amber-500/10 via-white to-white dark:from-amber-500/10 dark:via-slate-900/80 dark:to-slate-900/80 flex flex-col justify-between space-y-5">
              <div>
                <div className="text-xs font-mono text-amber-600 dark:text-amber-400">
                  「质量扫地僧」
                </div>
                <h2 className="text-xl font-bold mt-1">
                  {lang === 'zh' ? '全网内容矩阵' : 'Creator Footprint'}
                </h2>
              </div>

              <div className="space-y-3">
                {CREATOR_PLATFORMS.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/85 dark:bg-slate-950/65 border border-slate-200/70 dark:border-slate-800"
                  >
                    <div className="flex items-center gap-3 min-w-0">
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
          </section>

          {/* 4. BENTO PHOTO WALL + COMPACT TIMELINE */}
          <section className="space-y-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-1">
                  FIELDWORK & TRACK RECORD
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  {lang === 'zh' ? '一线调研纪实与履历精要' : 'Fieldwork Gallery & Track Record'}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {CREDENTIALS_SHORT.map((c, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20"
                  >
                    <Award className="w-3.5 h-3.5" />
                    {t(c.name)}
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Photo Wall (7 photos: 1 large hero photo + 6 grid photos) */}
            <div className="grid md:grid-cols-4 gap-4">
              {PHOTO_WALL.map((photo, idx) => (
                <figure
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 ${
                    idx === 0 ? 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={t(photo.caption)}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <figcaption className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{t(photo.caption)}</span>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* 4-column horizontal cards (desensitized minimal text) */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CAREER_COMPACT.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/65 space-y-2"
                >
                  <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                    {item.period}
                  </div>
                  <div className="font-bold text-base">{t(item.role)}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{t(item.scope)}</div>
                  <div className="text-xs font-medium text-slate-700 dark:text-slate-200 pt-2 border-t border-slate-100 dark:border-slate-800">
                    {t(item.impact)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. BOTTOM PORTAL: QMS 研究团队专属入口 */}
          <section className="scroll-mt-20">
            <div className="rounded-[2rem] p-8 sm:p-12 border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2.5 max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300">
                    <Cpu className="w-4 h-4" />
                    <span>QMS-OS RESEARCH LAB · 7-MEMBER TEAM</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    {lang === 'zh'
                      ? '进入 QMS-OS 研究团队与报告中心'
                      : 'Enter QMS-OS Research Team & Reports'}
                  </h2>
                  <p className="text-sm text-slate-300">
                    {lang === 'zh'
                      ? '独立研究空间：查看跨太平洋 7 人研发团队分工、QMS-OS 研究报告与 AI 范式论文。'
                      : 'Dedicated portal for the 7-member team, QMS-OS reports, and AI paradigm papers.'}
                  </p>
                </div>
                <button
                  onClick={() => navigate('team')}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all cursor-pointer shrink-0"
                >
                  {lang === 'zh' ? '进入研究团队专属页' : 'Open Research Portal'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
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

      {/* Fullscreen Interactive Modal */}
      {activeDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-6">
          <div className="w-full max-w-6xl h-[88vh] rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900 text-slate-100">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 shrink-0">
                  {t(activeDemo.tag)}
                </span>
                <span className="font-medium text-sm truncate">{t(activeDemo.title)}</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={activeDemo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-200"
                >
                  {lang === 'zh' ? '新窗口' : 'New Tab'}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActiveDemo(null)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <iframe src={activeDemo.url} title={t(activeDemo.title)} className="w-full flex-1 bg-white" />
          </div>
        </div>
      )}
    </div>
  );
}
