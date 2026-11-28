import { ArrowRight } from 'lucide-react';
import { Lang } from '../data/profile';

interface ImpactChartsProps {
  lang: Lang;
}

const COMPARISONS = [
  {
    label: { zh: '质量问题回复率', en: 'Issue Response Rate' },
    beforePct: 5,
    afterPct: 95,
    beforeVal: '5%',
    afterVal: '95%',
    badge: '+19×',
  },
  {
    label: { zh: '质量问题闭环率', en: 'Issue Closure Rate' },
    beforePct: 2, // minimal visible sliver for 0%
    afterPct: 75,
    beforeVal: '0%',
    afterVal: '75%',
    badge: '0 → 75%',
  },
  {
    label: { zh: '国际供方 SRCS 评分', en: 'Global Supplier SRCS' },
    beforePct: 75,
    afterPct: 90,
    beforeVal: '75 分',
    afterVal: '90 分',
    badge: '+15 pts',
  },
  {
    label: { zh: '8D 报告撰写耗时', en: '8D Drafting Time' },
    beforePct: 100,
    afterPct: 12.5,
    beforeVal: '120 分钟',
    afterVal: '15 分钟',
    badge: '耗时 -87.5%',
  },
  {
    label: { zh: '文件人工审核工作量', en: 'Manual SOP Audit Load' },
    beforePct: 100,
    afterPct: 20,
    beforeVal: '100%',
    afterVal: '20%',
    badge: '减负 80%',
  },
];

const RADAR_AXES = [
  { label: { zh: '零缺陷架构', en: 'Zero-Defect' }, score: 96 },
  { label: { zh: 'AI 工具研发', en: 'AI Tooling' }, score: 92 },
  { label: { zh: '跨基地中台', en: 'Data Platform' }, score: 94 },
  { label: { zh: '全链条制造', en: 'Shop-Floor' }, score: 95 },
  { label: { zh: '国际与跨文化', en: 'Global Audit' }, score: 90 },
  { label: { zh: '六西格玛统计', en: 'Six Sigma BB' }, score: 93 },
];

const FIVE_LOOP = [
  { zh: '01 录入', en: '01 Capture' },
  { zh: '02 分析', en: '02 Analyze' },
  { zh: '03 验证', en: '03 Verify' },
  { zh: '04 闭环', en: '04 Close' },
  { zh: '05 智能进化', en: '05 Evolve' },
];

export function ImpactCharts({ lang }: ImpactChartsProps) {
  const t = (obj: { zh: string; en: string }) => obj[lang];

  const cx = 160;
  const cy = 150;
  const maxR = 90;
  const angleStep = (Math.PI * 2) / RADAR_AXES.length;

  const getPoint = (idx: number, ratio: number) => {
    const angle = -Math.PI / 2 + idx * angleStep;
    return {
      x: cx + Math.cos(angle) * maxR * ratio,
      y: cy + Math.sin(angle) * maxR * ratio,
    };
  };

  const radarPolygon = RADAR_AXES.map((a, i) => {
    const p = getPoint(i, a.score / 100);
    return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  }).join(' ');

  return (
    <div className="space-y-12">
      {/* Five-Module Evolvable Loop Diagram */}
      <div className="space-y-3">
        <div className="text-xs font-mono text-slate-400 leading-relaxed">
          {lang === 'zh'
            ? '可进化质量平台核心架构：五模块闭环（月均 8,763 条记录 · 同类复发率 ↓45%）'
            : 'EVOLVABLE PLATFORM ARCHITECTURE: 5-MODULE CLOSED LOOP'}
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3">
          {FIVE_LOOP.map((step, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 sm:gap-3 ${
                i === FIVE_LOOP.length - 1 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <div
                className={`w-full sm:w-auto text-center px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold ${
                  i === 4
                    ? 'theme-accent-bg'
                    : 'bg-slate-200/80 dark:bg-white/10 text-slate-800 dark:text-slate-100'
                }`}
              >
                {t(step)}
              </div>
              {i < FIVE_LOOP.length - 1 && (
                <ArrowRight className="hidden sm:block w-4 h-4 text-slate-400 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Clear Side-by-Side Before vs After Bars + Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: Dual-Track Before vs After Comparison */}
        <div className="lg:col-span-7 min-w-0 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-slate-400">
            <span>{lang === 'zh' ? '改善前 vs 改善后清晰对比' : 'CLEAR BEFORE VS. AFTER COMPARISON'}</span>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-sm bg-slate-400/70" />
                {lang === 'zh' ? '改善前' : 'Before'}
              </span>
              <span className="inline-flex items-center gap-1.5 text-cyan-500 font-semibold">
                <span className="h-2.5 w-2.5 rounded-sm bg-cyan-500" />
                {lang === 'zh' ? '改善后' : 'After'}
              </span>
            </div>
          </div>

          <div className="space-y-5">
            {COMPARISONS.map((row, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold">{t(row.label)}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold shrink-0">
                    {row.badge}
                  </span>
                </div>

                {/* Before Track */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="w-11 sm:w-12 text-[11px] font-mono text-slate-400 shrink-0">
                    {lang === 'zh' ? '改善前' : 'Before'}
                  </span>
                  <div className="flex-1 h-3 rounded-full bg-slate-200/70 dark:bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-slate-400/80 dark:bg-slate-500"
                      style={{ width: `${row.beforePct}%` }}
                    />
                  </div>
                  <span className="w-14 sm:w-16 text-right text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
                    {row.beforeVal}
                  </span>
                </div>

                {/* After Track */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="w-11 sm:w-12 text-[11px] font-mono theme-accent-text shrink-0">
                    {lang === 'zh' ? '改善后' : 'After'}
                  </span>
                  <div className="flex-1 h-3 rounded-full bg-slate-200/70 dark:bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${row.afterPct}%`,
                        background: 'linear-gradient(90deg, var(--accent), var(--accent-bright))',
                      }}
                    />
                  </div>
                  <span className="w-14 sm:w-16 text-right text-xs font-mono font-bold theme-accent-text shrink-0">
                    {row.afterVal}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 6-Axis Capability Radar */}
        <div className="lg:col-span-5 min-w-0 flex flex-col items-center pt-2 lg:pt-0">
          <div className="text-xs font-mono text-slate-400 mb-2">
            {lang === 'zh' ? '“四栖”复合能力矩阵' : '6-AXIS CAPABILITY RADAR'}
          </div>
          <svg viewBox="-16 -4 352 308" className="w-full max-w-[330px] overflow-visible">
            {[0.33, 0.66, 1].map((r, rIdx) => {
              const pts = RADAR_AXES.map((_, i) => {
                const p = getPoint(i, r);
                return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
              }).join(' ');
              return (
                <polygon
                  key={rIdx}
                  points={pts}
                  fill="none"
                  className="stroke-slate-300/70 dark:stroke-white/10"
                  strokeWidth="1"
                />
              );
            })}
            {RADAR_AXES.map((_, i) => {
              const p = getPoint(i, 1);
              return (
                <line
                  key={i}
                  x1={cx}
                  y1={cy}
                  x2={p.x}
                  y2={p.y}
                  className="stroke-slate-300/60 dark:stroke-white/10"
                  strokeWidth="1"
                />
              );
            })}
            <polygon
              points={radarPolygon}
              fill="var(--accent-soft)"
              stroke="var(--accent-bright)"
              strokeWidth="2.2"
            />
            {RADAR_AXES.map((axis, i) => {
              const dot = getPoint(i, axis.score / 100);
              const lbl = getPoint(i, 1.24);
              return (
                <g key={i}>
                  <circle cx={dot.x} cy={dot.y} r="4" fill="var(--accent-bright)" />
                  <text
                    x={lbl.x}
                    y={lbl.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-slate-700 dark:fill-slate-200 text-[11px] font-medium"
                  >
                    {t(axis.label)}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}
