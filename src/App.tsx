import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Award,
  Briefcase,
  Cpu,
  ExternalLink,
  Globe,
  Layers,
  Mail,
  MapPin,
  Maximize2,
  Moon,
  Play,
  Server,
  Sparkles,
  Sun,
  Users,
  Wrench,
  X,
} from 'lucide-react';
import { TeamResearchPage } from './components/TeamResearchPage';
import {
  CAREER_TIMELINE,
  CREATOR_ECOSYSTEM,
  CREDENTIALS,
  DemoItem,
  INTERACTIVE_DEMOS,
  LIVE_SYSTEMS,
  Lang,
  PROFILE,
} from './data/profile';

export default function App() {
  const [lang, setLang] = useState<Lang>('zh');
  const [dark, setDark] = useState(true);
  const [route, setRoute] = useState<'home' | 'team'>(() =>
    window.location.hash === '#/team' ? 'team' : 'home'
  );
  const [demoFilter, setDemoFilter] = useState<'all' | '3d' | 'ai' | 'rules'>('all');
  const [activeDemo, setActiveDemo] = useState<DemoItem | null>(null);

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

  const filteredDemos =
    demoFilter === 'all'
      ? INTERACTIVE_DEMOS
      : INTERACTIVE_DEMOS.filter((d) => d.category === demoFilter);

  const navItems = [
    { href: '#about', label: { zh: '履历', en: 'Experience' } },
    { href: '#systems', label: { zh: '在线系统', en: 'Systems' } },
    { href: '#demos', label: { zh: '交互原型', en: 'Demos' } },
    { href: '#creator', label: { zh: '质量扫地僧', en: 'Creator' } },
    { href: '#research-portal', label: { zh: 'QMS 研究团队', en: 'QMS Lab' } },
  ];

  return (
    <div className="min-h-screen bg-grid-pattern relative overflow-x-clip">
      {/* Ambient Radial Glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-24 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl dark:bg-cyan-500/12" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-amber-500/10 blur-3xl dark:bg-amber-500/8" />
      </div>

      {/* Top Navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-[#070b14]/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-2.5 font-semibold tracking-tight cursor-pointer"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-mono text-xs shadow-sm">
              SX
            </span>
            <span className="text-sm sm:text-base">
              {t(PROFILE.name)}
              <span className="hidden sm:inline text-slate-400 dark:text-slate-500 font-normal ml-2">
                / {lang === 'zh' ? '质量扫地僧' : 'Simon Xiao'}
              </span>
            </span>
          </button>

          {route === 'home' && (
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {t(item.label)}
                </a>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate(route === 'team' ? 'home' : 'team')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/25 hover:bg-cyan-500/20 transition-colors cursor-pointer"
            >
              <Users className="w-3.5 h-3.5" />
              {route === 'team'
                ? lang === 'zh'
                  ? '个人主页'
                  : 'Home'
                : lang === 'zh'
                ? 'QMS 研究中心'
                : 'QMS Lab'}
            </button>
            <button
              onClick={() => setLang((prev) => (prev === 'zh' ? 'en' : 'zh'))}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700/80 bg-slate-100/80 dark:bg-slate-900/80 hover:border-cyan-500/50 transition-colors cursor-pointer"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              {lang === 'zh' ? 'EN' : '中文'}
            </button>
            <button
              onClick={() => setDark((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-lg border border-slate-200 dark:border-slate-700/80 bg-slate-100/80 dark:bg-slate-900/80 hover:border-cyan-500/50 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {dark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </header>

      {route === 'team' ? (
        <TeamResearchPage lang={lang} onBack={() => navigate('home')} />
      ) : (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-24">
          {/* Hero Section */}
          <section className="relative pt-2 sm:pt-4">
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Main Card */}
              <div className="lg:col-span-7 rounded-3xl p-6 sm:p-9 border border-slate-200/90 dark:border-slate-800/90 bg-white/85 dark:bg-slate-900/65 backdrop-blur-md shadow-xl shadow-slate-900/5 dark:shadow-black/30 flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/25">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t(PROFILE.nickname)}</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
                    <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-cyan-700 dark:from-white dark:via-slate-100 dark:to-cyan-300 bg-clip-text text-transparent">
                      {t(PROFILE.fullName)}
                    </span>
                    <span className="block mt-2.5 text-lg sm:text-xl font-semibold text-cyan-600 dark:text-cyan-400">
                      {t(PROFILE.role)}
                    </span>
                  </h1>

                  <blockquote className="border-l-2 border-amber-500 pl-4 py-1 text-base sm:text-lg font-medium text-slate-800 dark:text-slate-100">
                    “{t(PROFILE.slogan)}”
                  </blockquote>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    {t(PROFILE.bio)}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="#systems"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-sm font-medium shadow-lg shadow-cyan-500/25 transition-all"
                    >
                      <Server className="w-4 h-4" />
                      {lang === 'zh' ? '进入在线系统' : 'Open Live Systems'}
                    </a>
                    <a
                      href="#demos"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/90 hover:border-cyan-500/60 text-sm font-medium transition-all"
                    >
                      <Play className="w-4 h-4 text-amber-500" />
                      {lang === 'zh' ? '交互原型展厅' : 'Interactive Demos'}
                    </a>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/90 hover:border-cyan-500/60 text-sm font-medium transition-all"
                    >
                      <Mail className="w-4 h-4 text-cyan-500" />
                      {PROFILE.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{t(PROFILE.location)}</span>
                  </div>
                </div>
              </div>

              {/* Right Telemetry Bento Panel */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="rounded-3xl p-5 border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 relative overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      QUALITY TELEMETRY · 2026
                    </span>
                    <span>DONGGUAN · CN</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {PROFILE.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="rounded-2xl p-3.5 bg-slate-800/70 border border-slate-700/70"
                      >
                        <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">
                          {m.value}
                        </div>
                        <div className="text-xs text-slate-200 mt-1">{t(m.label)}</div>
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                          {t(m.sub)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Portal Card to QMS Research Lab */}
                <button
                  onClick={() => navigate('team')}
                  className="text-left rounded-3xl p-5 border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-cyan-500/5 dark:from-amber-500/15 dark:to-slate-900/80 hover:border-amber-400/60 transition-all group cursor-pointer flex-1 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-amber-600 dark:text-amber-400">
                      QMS-OS RESEARCH LAB
                    </span>
                    <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="mt-2">
                    <div className="font-semibold text-base">
                      {lang === 'zh'
                        ? 'QMS-OS 研究团队与报告中心'
                        : 'QMS-OS Team & Research Center'}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {lang === 'zh'
                        ? '查看跨太平洋 7 人研发团队分工、QMS-OS 研究报告与 AI 范式论文展开 →'
                        : 'Explore the 7-member team, QMS-OS reports, and AI paradigm papers →'}
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </section>

          {/* Live Systems Launcher (#4) */}
          <section id="systems" className="scroll-mt-20 space-y-6">
            <div>
              <div className="flex items-center gap-2.5">
                <Server className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <h2 className="text-2xl font-bold">
                  {lang === 'zh' ? '在线系统与工程平台' : 'Live Systems & Engineering Platforms'}
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {lang === 'zh'
                  ? '区分「可直接打开的在线系统」与「全栈业务系统（如 355 IQC-DCC）」，支持一键跳转或切换至演示原型。'
                  : 'Direct links to live online tools alongside full-stack systems (such as 355 IQC-DCC) and interactive prototypes.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {LIVE_SYSTEMS.map((sys) => (
                <div
                  key={sys.id}
                  className="rounded-3xl p-6 border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 hover:border-cyan-500/50 transition-all flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                        {t(sys.badge)}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            sys.status.active ? 'bg-emerald-500' : 'bg-amber-500'
                          }`}
                        />
                        {lang === 'zh' ? sys.status.zh : sys.status.en}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">{t(sys.title)}</h3>
                      <div className="text-xs text-cyan-600 dark:text-cyan-400 mt-0.5">
                        {t(sys.subtitle)}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {t(sys.desc)}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {sys.stack.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href={sys.primaryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-500 text-white text-xs font-medium transition-colors"
                    >
                      {t(sys.primaryLabel)}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    {sys.secondaryUrl && sys.secondaryLabel && (
                      <a
                        href={sys.secondaryUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500/60 text-xs font-medium transition-colors"
                      >
                        {t(sys.secondaryLabel)}
                        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Demos Gallery with Filter Pills */}
          <section id="demos" className="scroll-mt-20 space-y-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2.5">
                  <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <h2 className="text-2xl font-bold">
                    {lang === 'zh' ? '交互式原型展厅' : 'Interactive Prototypes'}
                  </h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {lang === 'zh'
                    ? '3D 数字孪生、检验地图与规则引擎均已本地化打包，国内零延迟交互。'
                    : '3D digital twins, inspection maps, and rule engines bundled locally.'}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                {(
                  [
                    { id: 'all', label: { zh: '全部', en: 'All' } },
                    { id: '3d', label: { zh: '3D 可视化', en: '3D Visual' } },
                    { id: 'ai', label: { zh: 'AI 智能体', en: 'AI & Agent' } },
                    { id: 'rules', label: { zh: '防呆与规则', en: 'Poka-Yoke' } },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setDemoFilter(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      demoFilter === tab.id
                        ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    {t(tab.label)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredDemos.map((demo) => (
                <div
                  key={demo.id}
                  className="group rounded-3xl p-5 border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/65 hover:border-cyan-500/60 hover:-translate-y-0.5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                        {t(demo.tag)}
                      </span>
                      <a
                        href={demo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-cyan-500 transition-colors"
                        title={lang === 'zh' ? '新窗口打开' : 'Open in new tab'}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <h3 className="text-base font-semibold mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {t(demo.title)}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {t(demo.desc)}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-wrap gap-1.5">
                      {demo.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        >
                          {t(h)}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setActiveDemo(demo)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-900 dark:bg-cyan-500/15 hover:bg-cyan-600 dark:hover:bg-cyan-500 text-white dark:text-cyan-300 dark:hover:text-white text-xs font-medium border border-transparent dark:border-cyan-500/30 transition-all cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      {lang === 'zh' ? '在线交互预览' : 'Launch Preview'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Career & Credentials */}
          <section id="about" className="scroll-mt-20 space-y-8">
            <div className="flex items-center gap-2.5">
              <Briefcase className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <h2 className="text-2xl font-bold">
                {lang === 'zh' ? '23 年制造业质量履历' : '23-Year Manufacturing Track Record'}
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-5">
                {CAREER_TIMELINE.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 hover:border-cyan-500/70 transition-colors"
                  >
                    <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-cyan-500 ring-4 ring-slate-50 dark:ring-[#070b14]" />
                    <div className="rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/65">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
                          {t(item.period)}
                        </span>
                        <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                          {t(item.title)}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2">
                        {t(item.company)}
                      </h3>
                      <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300 list-disc list-inside">
                        {item.highlights[lang].map((hl, hIdx) => (
                          <li key={hIdx} className="leading-relaxed">
                            {hl}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-4 space-y-4">
                <div className="rounded-3xl p-6 border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/65 sticky top-24">
                  <div className="flex items-center gap-2 mb-4 font-semibold">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>{lang === 'zh' ? '专业资质认证' : 'Certifications'}</span>
                  </div>
                  <div className="space-y-3.5">
                    {CREDENTIALS.map((cred, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 pb-3.5 border-b last:border-b-0 last:pb-0 border-slate-100 dark:border-slate-800/80"
                      >
                        <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5">
                          {cred.year}
                        </span>
                        <span className="text-sm text-slate-700 dark:text-slate-200">
                          {t(cred.title)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Creator Ecosystem */}
          <section id="creator" className="scroll-mt-20 space-y-6">
            <div className="flex items-center gap-2.5">
              <Wrench className="w-5 h-5 text-amber-500" />
              <h2 className="text-2xl font-bold">
                {lang === 'zh' ? '「质量扫地僧」内容矩阵与 10 大工具' : 'Creator Matrix & 10 Tools'}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {CREATOR_ECOSYSTEM.platforms.map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl p-5 border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/65"
                >
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {t(p.name)}
                  </div>
                  <div className="text-3xl font-bold font-mono text-amber-500 mt-1">
                    {p.stat}
                  </div>
                  <div className="text-xs font-medium text-slate-700 dark:text-slate-200 mt-0.5">
                    {t(p.statLabel)}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                    {t(p.detail)}
                  </p>
                  <div className="text-[11px] font-mono text-slate-400 mt-2">
                    {typeof p.handle === 'string' ? p.handle : t(p.handle)}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl p-6 border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/65 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {CREATOR_ECOSYSTEM.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <a
                href="https://www.aitqm.cn"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold transition-colors shrink-0"
              >
                {lang === 'zh' ? '前往 aitqm.cn 使用全部工具' : 'Use All Tools on aitqm.cn'}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>

          {/* QMS Research Team Portal at the very bottom (#3) */}
          <section id="research-portal" className="scroll-mt-20">
            <div className="rounded-3xl p-7 sm:p-10 border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
              <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300">
                    <Cpu className="w-4 h-4" />
                    <span>QMS-OS RESEARCH LAB · 7-MEMBER TRANS-PACIFIC TEAM</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    {lang === 'zh'
                      ? '进入 QMS-OS 研究团队与报告中心'
                      : 'Enter QMS-OS Research Team & Reports'}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                    {lang === 'zh'
                      ? '汇聚东莞制造一线质量专家与硅谷、温哥华、UC Berkeley AI 架构团队。点击进入独立研究空间，完整阅读《QMS-OS 未来制造业质量管理形态研究报告》、《中国制造业 AI 管理范式讨论》论文要点及调研纪实。'
                      : 'Bringing together shop-floor quality experts and AI architects across Silicon Valley, Vancouver, and UC Berkeley. Enter the dedicated portal for full research reports, working papers, and fieldwork.'}
                  </p>
                </div>
                <div className="lg:col-span-4 flex lg:justify-end">
                  <button
                    onClick={() => navigate('team')}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
                  >
                    {lang === 'zh' ? '进入研究团队专属页' : 'Open Research Portal'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © 2026 {t(PROFILE.name)} · {lang === 'zh' ? '质量扫地僧' : 'Master Sweeper of Quality'}
          </div>
          <div>
            {lang === 'zh'
              ? '纯静态本地化构建 · 零海外 CDN 依赖 · 支持 GitHub Actions 自动部署'
              : 'Static self-hosted build · Zero overseas CDN dependencies'}
          </div>
        </div>
      </footer>

      {/* Interactive Demo Modal */}
      {activeDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-6">
          <div className="w-full max-w-6xl h-[88vh] rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900 text-slate-100">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 shrink-0">
                  {t(activeDemo.tag)}
                </span>
                <span className="font-medium text-sm truncate">
                  {t(activeDemo.title)}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={activeDemo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-200"
                >
                  {lang === 'zh' ? '新窗口全屏' : 'New Tab'}
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
            <iframe
              src={activeDemo.url}
              title={t(activeDemo.title)}
              className="w-full flex-1 bg-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}
