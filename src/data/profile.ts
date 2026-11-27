export type Lang = 'zh' | 'en';

export interface BiText {
  zh: string;
  en: string;
}

export const PROFILE = {
  name: { zh: '肖玉丰', en: 'Simon Xiao' },
  nickname: { zh: 'Simon · 质量扫地僧', en: 'Simon · Quality AI Architect' },
  location: { zh: '广东 · 东莞', en: 'Dongguan, China' },
  email: '45019296@qq.com',
  headline: {
    zh: '制造业质量 × AI 数字化转型',
    en: 'Manufacturing Quality × AI Architecture',
  },
  slogan: {
    zh: '扫的不是地，是质量管理中看不见的盲区。',
    en: 'Sweeping away the invisible blind spots in quality management.',
  },
  subline: {
    zh: '23 年制造现场实战 · CAQ 六西格玛黑带 · 从“人治救火”走向“AI 系统治”',
    en: '23 Years on Shop Floors · CAQ Six Sigma Black Belt · From Firefighting to AI-Driven Quality Systems',
  },
  metrics: [
    { value: '23 年', label: { zh: '制造质量一线', en: 'Shop-Floor Years' } },
    { value: '101.5 万+', label: { zh: '深度思考播放', en: 'Series Views' } },
    { value: '200 线体', label: { zh: '跨基地中台落地', en: 'Lines Unified' } },
    { value: '10+ 工具', label: { zh: '自研 AI 质量工具', en: 'AI Quality Tools' } },
  ],
};

export const CAREER_COMPACT = [
  {
    period: '2025 – 至今',
    role: { zh: '数字化转型负责人', en: 'Head of Digital Transformation' },
    scope: { zh: '大型算力与通信设备制造集团', en: 'Computing & Telecom Hardware Group' },
    impact: { zh: '3 基地 200 线体质量中台 · 闭环率 0%→75%', en: '3-site 200-line platform · Closure 0%→75%' },
  },
  {
    period: '2018 – 2025',
    role: { zh: '资深 PQE 工程师', en: 'Senior PQE' },
    scope: { zh: '头部通信供应链制造集团', en: 'Tier-1 Telecom Supply Chain' },
    impact: { zh: 'NPI 导入 · 供应链质量 · 制程异常闭环', en: 'NPI Launch · Supplier Quality · Loop Closure' },
  },
  {
    period: '2008 – 2018',
    role: { zh: '品质主管（含欧洲驻厂 1 年）', en: 'Quality Supervisor (1-Yr EU Assignment)' },
    scope: { zh: '跨国消费电子制造企业', en: 'Global Consumer Electronics OEM' },
    impact: { zh: '驻欧洲工厂 1 年 · 国际供方评分 75→90', en: '1-yr Europe on-site · Supplier score 75→90' },
  },
  {
    period: '2003 – 2008',
    role: { zh: '品质工程师', en: 'Quality Engineer' },
    scope: { zh: '全球精密制造龙头企业', en: 'Global Precision Manufacturing Leader' },
    impact: { zh: '精密模具与消费电子一线品质基石', en: 'Precision tooling & IPQC foundation' },
  },
];

export const CREDENTIALS_SHORT = [
  { year: '2026', name: { zh: 'CAQ 六西格玛黑带', en: 'CAQ Six Sigma Black Belt' } },
  { year: '2026', name: { zh: 'NVIDIA Isaac 机器人开发', en: 'NVIDIA Isaac Developer' } },
  { year: '2024', name: { zh: 'ISO / QC080000 / RBA 内审员', en: 'ISO / QC080000 / RBA Auditor' } },
];

export interface VisualShowcaseItem {
  id: string;
  url: string;
  tag: BiText;
  title: BiText;
  caption: BiText;
  featured?: boolean;
}

export const VISUAL_SHOWCASES: VisualShowcaseItem[] = [
  {
    id: 'aidc-3d',
    url: './demos/aidc-3d-cockpit.html',
    tag: { zh: '3D 数字孪生驾驶舱', en: '3D Digital Twin' },
    title: { zh: 'AIDC 集装箱总装数字孪生大屏', en: 'AIDC Assembly 3D Digital Twin Cockpit' },
    caption: { zh: 'Three.js 实时空间映射 · 工位状态与质量告警一屏总览', en: 'Real-time Three.js spatial mapping for assembly stations & alerts' },
    featured: true,
  },
  {
    id: 'sip-3d',
    url: './demos/sip-3d-map.html',
    tag: { zh: '3D 检验地图', en: '3D Inspection Map' },
    title: { zh: '机柜结构件 3D 质量检验地图', en: 'Cabinet Structure 3D Inspection Map' },
    caption: { zh: '把纸面标准变成 3D 可视点位，一线防漏检一目了然', en: 'Turns static SIPs into interactive 3D inspection checkpoints' },
    featured: true,
  },
  {
    id: 'iqc-arch',
    url: './demos/iqc-agent-architecture.html',
    tag: { zh: '智能体全景架构', en: 'Agentic Architecture' },
    title: { zh: 'IQC 来料质量智能体控制塔', en: 'IQC Quality Agentic Control Tower' },
    caption: { zh: '来料感知、AI 推理、风险抽样与闭环执行全景', en: 'Incoming inspection, AI reasoning, and closed-loop execution' },
  },
  {
    id: 'sip-gen',
    url: './demos/sip-generator.html',
    tag: { zh: 'AI 工具', en: 'AI Tool' },
    title: { zh: 'SIP 检验计划智能生成工具', en: 'AI SIP Plan Generator' },
    caption: { zh: '图纸 PDF / BOM 自动解析生成结构化检验计划', en: 'Parses PDFs & BOMs into structured SIPs' },
  },
  {
    id: 'sab-demo',
    url: './demos/sab-poka-yoke.html',
    tag: { zh: '防呆框架', en: 'Poka-Yoke' },
    title: { zh: '“355”框架 SAB 分级防呆系统', en: '"355" SAB Tiered Poka-Yoke' },
    caption: { zh: 'NPI 核心专项 S/A/B 风险分级与防呆节点演示', en: 'NPI S/A/B tiered risk gates and execution tracking' },
  },
  {
    id: 'qsa-rules',
    url: './demos/qsa-dynamic-rules.html',
    tag: { zh: '动态规则', en: 'Dynamic Rules' },
    title: { zh: 'QSA 规则动态化与流程引擎', en: 'QSA Dynamic Rule Engine' },
    caption: { zh: '将静态审核条款转化为可追踪的数字化规则流', en: 'Transforms static audit clauses into traceable digital flows' },
  },
];

export const LIVE_SYSTEMS = [
  {
    id: 'aitqm',
    title: { zh: '品质道场 AI 工具箱', en: 'AITQM Quality Toolbox' },
    url: 'https://www.aitqm.cn',
    tag: 'aitqm.cn · 10 Tools',
    desc: { zh: '8D 闭环、QCC、SPC、体系评审、SMT/钣金/冲压专项工具', en: '8D, QCC, SPC, SOP Review, SMT & Sheet-Metal Tools' },
  },
  {
    id: 'wps',
    title: { zh: 'WPS 质量管理系统 V1.6', en: 'WPS Quality System V1.6' },
    url: 'https://www.kdocs.cn/l/cp0oiLGVMuTA',
    tag: { zh: '脱敏测试版 · 直接打开', en: 'Sanitized Sandbox' },
    desc: { zh: '免部署直接体验的轻量化质量数据闭环原型', en: 'Zero-setup lightweight quality closure prototype' },
  },
  {
    id: 'sys-355',
    title: { zh: '355 IQC-DCC 协同系统', en: '355 IQC-DCC System' },
    url: 'https://github.com/goodfeng186/355-IQC-DCC',
    tag: 'Node + PostgreSQL + AI 8D',
    desc: { zh: '全栈业务系统源码仓库（支持独立部署后直连）', en: 'Full-stack system repository (deployable instance)' },
  },
];

export const CREATOR_PLATFORMS = [
  { id: 'douyin' as const, name: '抖音 Douyin', stat: '8,894 粉', sub: '《质量管理深度思考》101.5 万播放' },
  { id: 'xhs' as const, name: '小红书', stat: '1,283 粉', sub: '2,810 赞藏 · 实战方法拆解' },
  { id: 'wechat' as const, name: '微信视频号', stat: '821 关注', sub: '65 个原创 · 3 分钟落地干货' },
];

export const PHOTO_WALL = [
  {
    src: './photos/whiteboard-thinking.jpg',
    caption: { zh: '白板系统化推演 · QMS-OS 底层逻辑', en: 'Whiteboard System Architecture' },
  },
  {
    src: './photos/paul-session.jpg',
    caption: { zh: 'AI 架构师吴嘉亮技术分享现场', en: 'Technical Deep-Dive with AI Architect Paul Wu' },
  },
  {
    src: './photos/paul-session-2.jpg',
    caption: { zh: '智能体系统架构研讨', en: 'Multi-Agent Architecture Workshop' },
  },
  {
    src: './photos/indoor-workshop.jpg',
    caption: { zh: '产线数字化方案深度对焦', en: 'Shop-Floor Digitalization Alignment' },
  },
  {
    src: './photos/office-team.jpg',
    caption: { zh: '东莞 · 深圳一线调研研讨', en: 'Dongguan & Shenzhen Fieldwork' },
  },
  {
    src: './photos/team-thumbsup.jpg',
    caption: { zh: '阶段性里程碑团队合影', en: 'Milestone Team Photo' },
  },
  {
    src: './photos/team-dinner.jpg',
    caption: { zh: '跨地域核心团队交流合影', en: 'Cross-Regional Team Gathering' },
  },
];

export const TEAM_MEMBERS = [
  {
    name: { zh: '肖玉丰（Simon / 丰哥）', en: 'Simon Xiao' },
    role: { zh: '质量管理专家 · 数智转型负责人', en: 'Quality Expert · Digital Transformation' },
    location: { zh: '广东东莞', en: 'Dongguan' },
    bio: { zh: '23 年制造业质量实战，CAQ 六西格玛黑带，「质量扫地僧」主理人。', en: '23 yrs in manufacturing quality, CAQ Black Belt.' },
  },
  {
    name: { zh: '赵伟', en: 'Wei Zhao' },
    role: { zh: 'CEO · 负责业务', en: 'CEO · Business' },
    location: { zh: '中国', en: 'China' },
    bio: { zh: '统筹商业化战略、客户拓展与产业生态合作。', en: 'Leads business strategy & enterprise partnerships.' },
  },
  {
    name: { zh: 'Alex J.', en: 'Alex J.' },
    role: { zh: 'CTO · 系统总架构', en: 'CTO · Chief Architect' },
    location: { zh: '温哥华 / 硅谷', en: 'Vancouver / SF Bay' },
    bio: { zh: '中大校友，十余年挚友；SaaS、智能体 AI 与工业自动化创业背景。', en: 'SYSU alumnus; SaaS, Agentic AI & industrial automation leader.' },
  },
  {
    name: { zh: '吴嘉亮（Paul Jialiang Wu）', en: 'Paul Jialiang Wu, Ph.D.' },
    role: { zh: 'AI 架构师', en: 'AI Architect' },
    location: { zh: '硅谷', en: 'Silicon Valley' },
    bio: { zh: '中大数学系，佐治亚理工博士，前耶鲁计算免疫学研究员，主导多智能体架构。', en: 'SYSU Math, Georgia Tech Ph.D., ex-Yale researcher; multi-agent architect.' },
    link: 'https://agentic-portfolio-lovat.vercel.app/',
  },
  {
    name: { zh: '刘伟', en: 'Wei Liu' },
    role: { zh: '质量管理专家', en: 'Quality Expert' },
    location: { zh: '广东', en: 'Guangdong' },
    bio: { zh: '深耕头部供应链与制程质量工程，负责业务规则验证。', en: 'Supply chain & process quality engineering veteran.' },
  },
  {
    name: { zh: '李沅晋', en: 'Yuanjin Li' },
    role: { zh: 'AI 研发成员', en: 'AI Engineering' },
    location: { zh: 'UC Berkeley', en: 'UC Berkeley' },
    bio: { zh: '加州大学伯克利分校在读，协助推进智能体原型研发。', en: 'UC Berkeley student collaborating on AI agent prototypes.' },
  },
  {
    name: { zh: '许琳', en: 'Lin Xu' },
    role: { zh: '运营与协作支持', en: 'Operations' },
    location: { zh: '中国', en: 'China' },
    bio: { zh: '负责团队日常线上协作与内容运营支持。', en: 'Supports online operations & coordination.' },
  },
];

export const RESEARCH_REPORTS = [
  {
    id: 'qms-os',
    tag: { zh: '研究报告 v1.0', en: 'Report v1.0' },
    date: '2026-11-12',
    title: { zh: 'QMS-OS：未来制造业质量管理形态研究报告', en: 'QMS-OS: Future Manufacturing Quality Management' },
    coreQuote: {
      zh: '“让机器承担感知、计算与执行的速度，让人保留理解、判断、授权与责任的深度。”',
      en: '"Let machines carry speed; let humans keep understanding, judgment, and accountability."',
    },
    sections: [
      {
        heading: { zh: '一、三个现实问题', en: '1. Three Structural Realities' },
        points: [
          { zh: '系统分散：质量事实散落在 QMS、ERP、MES、Excel 与群聊中，跨系统追溯困难。', en: 'Fragmented systems across QMS, ERP, MES, Excel, and chats.' },
          { zh: '文件与现场“两张皮”：记录存在不代表执行符合有效版本，需绑定规则、对象与证据链。', en: 'Policy-execution gap: logs must bind to active rule versions and evidence.' },
          { zh: '方法未一体化：将 SAB、防呆、8D、FMEA、SIP 的判断逻辑嵌入 AI 运行，而非简单替代。', en: 'Encode proven methods (SAB, 8D, FMEA, SIP) directly into AI workflows.' },
        ],
      },
      {
        heading: { zh: '二、“五个不是”主张', en: '2. Five Core Boundaries' },
        points: [
          { zh: '不是推倒重来：连接已有系统与防呆实践，解决跨系统闭环。', en: 'Not rip-and-replace: connects existing systems and poka-yoke.' },
          { zh: '不是文件电子化：验证规则版本、现场对象、原始证据与授权的一致性。', en: 'Not mere paper digitization: enforces rule-to-evidence consistency.' },
          { zh: '不是 AI 外挂与无人化：AI 负责感知与关联，人保留复核、例外判断与最终责任。', en: 'Not an AI bolt-on: humans retain final judgment and accountability.' },
        ],
      },
    ],
  },
  {
    id: 'ai-paradigm',
    tag: { zh: '论文初稿', en: 'Working Paper' },
    date: '2026-11',
    title: { zh: '中国制造业 AI 管理范式变化的长期讨论', en: 'AI Management Paradigm Shift in Manufacturing' },
    coreQuote: {
      zh: '提出「伴随式质量管理」与「有选择的组织记忆」：让日常群聊协作沉淀为可复用的组织知识。',
      en: '"Ambient Quality Management" & "Selective Organizational Memory": turning daily collaboration into reusable knowledge.',
    },
    sections: [
      {
        heading: { zh: '一、三层张力与核心概念', en: '1. Core Concepts' },
        points: [
          { zh: '宏观产业规模不等于单个工厂过程稳定；现场往往依赖少数骨干的高成本救火。', en: 'Macro scale does not guarantee plant-level process stability.' },
          { zh: '伴随式质量管理：在不增加一线额外填表负担的前提下，捕获并结构化异常处置过程。', en: 'Captures exception handling naturally without extra paperwork.' },
        ],
      },
      {
        heading: { zh: '二、扩展质量成本视角', en: '2. Expanded Cost of Quality' },
        points: [
          { zh: '在传统 PAF（预防/鉴定/失效）之外，显式核算“跨部门协调成本”与“增量 AI 成本”。', en: 'Explicitly accounts for Coordination Cost & Incremental AI Cost beyond PAF.' },
        ],
      },
    ],
  },
  {
    id: 'iqc-tower',
    tag: { zh: '工程方案 v1.0', en: 'Engineering Spec' },
    date: '2026-09',
    title: { zh: 'IQC 控制塔第二期建设方案', en: 'IQC Control Tower Phase II' },
    coreQuote: {
      zh: 'AI 只生成草稿和建议，不能自行批准；待人工复核事项未完成时，不得绕过提交条件。',
      en: 'AI drafts and recommends, never self-approves; human gates cannot be bypassed.',
    },
    sections: [
      {
        heading: { zh: '一、端到端主线', en: '1. End-to-End Flow' },
        points: [
          { zh: '图纸/规范 → SIP 草稿 → 人工批准 → 批次抽样与派工 → 历史案例提醒 → 异常闭环与知识更新。', en: 'Specs → AI SIP Draft → Human Sign-off → Sampling & Dispatch → Closure.' },
        ],
      },
      {
        heading: { zh: '二、七层控制塔架构', en: '2. Seven-Layer Architecture' },
        points: [
          { zh: '全局总览、数据输入、智能体决策、角色工作台、业务闭环、知识规则库与系统集成。', en: 'Overview, Ingestion, Agent Decisions, Role Workbenches, Closure, Knowledge, Integration.' },
        ],
      },
    ],
  },
];
