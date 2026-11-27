import { Lang } from '../data/profile';

interface ImpactChartsProps {
  lang: Lang;
}

const BEFORE_AFTER = [
  {
    label: { zh: '质量问题回复率', en: 'Issue Response Rate' },
    before: 5,
    after: 95,
    beforeText: '5%',
    afterText: '95%',
    delta: '+19×',
  },
  {
    label: { zh: '质量问题闭环率', en: 'Issue Closure Rate' },
    before: 0,
    after: 75,
    beforeText: '0%',
    afterText: '75%',
    delta: '0→75%',
  },
  {
    label: { zh: '国际供方 SRCS 评分', en: 'Global Supplier SRCS' },
    before: 75,
    after: 90,
    beforeText: '75',
    afterText: '90',
    delta: '+15 pts',
  },
  {
    label: { zh: '8D 报告撰写效率', en: '8D Drafting Speed' },
    before: 12.5,
    after: 100,
    beforeText: '120 min',
    afterText: '15 min',
    delta: '-87.5%',
  },
  {
    label: { zh: '文件审核自动化率', en: 'SOP Audit Automation' },
    before: 20,
    after: 90,
    beforeText: '人工 100%',
    afterText: '人工仅 20%',
    delta: '-80% 工作量',
  },
];

const RADAR_AXES = [
  { label: { zh: '零缺陷架构', en: 'Zero-Defect Arch' }, score: 96 },
  { label: { zh: 'AI 工具研发', en: 'AI Tooling' }, score: 92 },
  { label: { zh: '跨基地中台', en: 'Data Platform' }, score: 94 },
  { label: { zh: '全链条制造', en: 'Shop-Floor Ops' }, score: 95 },
  { label: { zh: '国际与跨文化', en: 'Global Audit' }, score: 90 },
  { label: { zh: '六西格玛统计', en: 'Six Sigma BB' }, score: 93 },
];

export function ImpactCharts({ lang }: ImpactChartsProps) {
  const t = (obj: { zh: string; en: string }) => obj[lang];

  // Radar math (center 160,150, radius 95)
  const cx = 160;
  const cy = 150;
  const maxR = 92;
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
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      {/* Left: Before -> After Quantified Impact Chart */}
      <div className="lg:col-span-7 space-y-6">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>{lang === 'zh' ? '关键指标转型前后对比' : 'BEFORE VS. AFTER TRANSFORMATION'}</span>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-slate-400/60" />
              {lang === 'zh' ? '转型前' : 'Before'}
            </span>
            <span className="inline-flex items-center gap-1.5 text-cyan-500">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              {lang === 'zh' ? '转型后' : 'After'}
            </span>
          </div>
        </div>

        <div className="space-y-5">
          {BEFORE_AFTER.map((row, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-800 dark:text-slate-100">
                  {t(row.label)}
                </span>
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-slate-400">{row.beforeText}</span>
                  <span className="text-slate-500">→</span>
                  <span className="font-bold text-cyan-600 dark:text-cyan-400">
                    {row.afterText}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px]">
                    {row.delta}
                  </span>
                </div>
              </div>

              <div className="relative h-2.5 rounded-full bg-slate-200/80 dark:bg-white/10 overflow-hidden">
                {/* After bar */}
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-700"
                  style={{ width: `${row.after}%` }}
                />
                {/* Before marker */}
                {row.before > 0 && (
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-slate-500/45 dark:bg-slate-300/35 border-r-2 border-white/80"
                    style={{ width: `${row.before}%` }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: 6-Axis Capability Radar Chart */}
      <div className="lg:col-span-5 flex flex-col items-center">
        <div className="text-xs font-mono text-slate-400 mb-2">
          {lang === 'zh' ? '“四栖”复合能力矩阵' : '6-AXIS CAPABILITY RADAR'}
        </div>
        <svg viewBox="0 0 320 300" className="w-full max-w-[320px] overflow-visible">
          {/* Concentric Hexagons */}
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

          {/* Axis Lines */}
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

          {/* Data Polygon */}
          <polygon
            points={radarPolygon}
            fill="rgba(6, 182, 212, 0.22)"
            stroke="#06b6d4"
            strokeWidth="2.2"
          />

          {/* Data Dots & Labels */}
          {RADAR_AXES.map((axis, i) => {
            const dot = getPoint(i, axis.score / 100);
            const lbl = getPoint(i, 1.24);
            return (
              <g key={i}>
                <circle cx={dot.x} cy={dot.y} r="4" fill="#22d3ee" />
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
  );
}
