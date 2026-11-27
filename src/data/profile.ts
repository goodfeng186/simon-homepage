export type Lang = 'zh' | 'en';

export interface BiText {
  zh: string;
  en: string;
}

export const PROFILE = {
  name: { zh: '肖玉丰', en: 'Simon Xiao' },
  fullName: { zh: '肖玉丰 (Yufeng Xiao)', en: 'Yufeng (Simon) Xiao' },
  nickname: { zh: '丰哥 · Simon · 质量扫地僧', en: 'Simon · Master Sweeper of Quality' },
  location: { zh: '中国 · 广东东莞', en: 'Dongguan, Guangdong, China' },
  email: '45019296@qq.com',
  role: {
    zh: '质量数字化转型专家 · 阳天电子数字化转型负责人',
    en: 'Quality Digital Transformation Lead · Yangtian Electronics (AVIC)',
  },
  slogan: {
    zh: '扫的不是地，是质量管理中看不见的盲区。',
    en: 'Sweeping away the invisible blind spots in quality management.',
  },
  bio: {
    zh: '23 年扎根制造现场，从精密模具、消费电子到通信设备，历经富士康、忆声亚忆（曾驻飞利浦匈牙利工厂一年）、立讯华荣（华为供应链 PQE），2025 年起任东莞阳天电子（中航工业旗下）数字化转型负责人。致力于把“零缺陷”转化为可执行、可量化、可 IT 化的系统方案，让质量管理从“人治”走向“系统治”。',
    en: '23 years on manufacturing shop floors across precision tooling, consumer electronics, and telecom hardware—from Foxconn and Yeon Technology (including 1 year on-site at Philips Hungary) to Luxshare Huarong (Huawei PQE). Since March 2025, leading digital transformation at Dongguan Yangtian Electronics (AVIC), turning "Zero Defects" into executable, AI-driven quality systems.',
  },
  metrics: [
    { value: '23+', label: { zh: '年制造质量实战', en: 'Years in Quality' }, sub: { zh: '2003 – 2026', en: '2003 – 2026' } },
    { value: '101.5万+', label: { zh: '深度思考合集播放', en: 'Series Views' }, sub: { zh: '106 集专栏', en: '106 Episodes' } },
    { value: '3基地·200线', label: { zh: '统一质量中台落地', en: 'Unified Platform' }, sub: { zh: '回复率 5%→95%', en: 'Response 5%→95%' } },
    { value: 'CAQ BB', label: { zh: '中国质量协会六西格玛黑带', en: 'Six Sigma Black Belt' }, sub: { zh: '2026.07 认证', en: 'Certified Jul 2026' } },
  ],
};

export const CAREER_TIMELINE = [
  {
    period: { zh: '2025.03 – 至今', en: 'Mar 2025 – Present' },
    company: { zh: '东莞阳天电子科技有限公司（中航工业旗下）', en: 'Dongguan Yangtian Electronics (AVIC)' },
    title: { zh: '数字化转型负责人', en: 'Head of Digital Transformation' },
    tag: { zh: '当前任职', en: 'Current' },
    highlights: {
      zh: [
        '主导覆盖东莞、惠州、桂林三地 24 个车间、200 条线体的统一质量数据库与五模块闭环架构（录入→分析→验证→闭环→智能），月均处理记录 8,700+ 条，问题回复率从 5% 提升至 95%，闭环率从 0% 提升至 75%。',
        '推动“2+8+4”核心流程 IT 化防呆与 T+1 日清日结机制，同类问题复发率下降 45%。',
        '基于大模型自主研发体系文件与 SIP 智能评审工具（累计评审 200+ 份），8D 报告撰写从 2 小时压缩至 15 分钟。',
      ],
      en: [
        'Architected a unified quality data platform across 3 sites, 24 workshops, and 200 lines—raising issue response rate from 5% to 95% and closure rate from 0% to 75%.',
        'Implemented "2+8+4" core process poka-yoke and T+1 daily closure mechanisms, cutting repeat defects by 45%.',
        'Built LLM-powered SOP/SIP review & 8D automation tools (200+ docs reviewed), cutting 8D drafting time from 2 hours to 15 minutes.',
      ],
    },
  },
  {
    period: { zh: '2018.12 – 2025.01', en: 'Dec 2018 – Jan 2025' },
    company: { zh: '立讯集团－东莞华荣通信技术有限公司', en: 'Luxshare Group – Dongguan Huarong (Huawei Supply Chain)' },
    title: { zh: 'PQE 工程师（华为供应链）', en: 'Product Quality Engineer (Huawei Supply Chain)' },
    tag: { zh: '通信硬件', en: 'Telecom' },
    highlights: {
      zh: [
        '负责华为供应链通信设备产品线全生命周期质量管控，涵盖 NPI 新产品导入、供应商质量审核、制程异常闭环与客户端问题根因改善。',
      ],
      en: [
        'Managed end-to-end product quality for Huawei supply chain telecom hardware—covering NPI launch, supplier quality governance, process excursion closure, and customer escalations.',
      ],
    },
  },
  {
    period: { zh: '2008.07 – 2018.09', en: 'Jul 2008 – Sep 2018' },
    company: { zh: '忆声集团－深圳亚忆电子', en: 'Action Electronics – Shenzhen Yayi' },
    title: { zh: '品质主管（2016 年驻飞利浦匈牙利工厂一年）', en: 'Quality Supervisor (Philips Hungary, 2016)' },
    tag: { zh: '海外驻厂', en: 'EU On-site' },
    highlights: {
      zh: [
        '十年体系与现场深耕，2016 年外派驻飞利浦匈牙利工厂一年，负责跨国客户标准对接与供应商质量提升，推动国际供应商质量评分从 75 分提升至 90 分。',
      ],
      en: [
        'Led factory quality operations for 10 years, including a full-year 2016 assignment at Philips Hungary—aligning European standards and lifting international supplier scores from 75 to 90.',
      ],
    },
  },
  {
    period: { zh: '2003.02 – 2008.07', en: 'Feb 2003 – Jul 2008' },
    company: { zh: '富士康科技集团', en: 'Foxconn Technology Group' },
    title: { zh: '品质工程师', en: 'Quality Engineer' },
    tag: { zh: '一线基石', en: 'Foundation' },
    highlights: {
      zh: [
        '从精密模具与消费电子制造一线起步，建立扎实的制程检验、现场异常排查与量化统计分析功底。',
      ],
      en: [
        'Started on precision tooling and consumer electronics lines, building foundational expertise in IPQC, troubleshooting, and statistical quality control.',
      ],
    },
  },
];

export const CREDENTIALS = [
  { year: '2026.07', title: { zh: '中国质量协会（CAQ）六西格玛黑带证书', en: 'CAQ Six Sigma Black Belt' } },
  { year: '2026.03', title: { zh: 'NVIDIA Isaac 机器人开发证书', en: 'NVIDIA Isaac Robotics Developer' } },
  { year: '2024', title: { zh: 'ISO 9001 / 14001 / 45001 / QC080000 / RBA 8.0 内审员', en: 'ISO 9001/14001/45001, QC080000 & RBA 8.0 Auditor' } },
  { year: '2005', title: { zh: '全国质量专业技术人员职业资格', en: 'National Quality Professional Qualification' } },
];

export interface LiveSystemItem {
  id: string;
  badge: BiText;
  title: BiText;
  subtitle: BiText;
  desc: BiText;
  primaryUrl: string;
  primaryLabel: BiText;
  secondaryUrl?: string;
  secondaryLabel?: BiText;
  status: { zh: string; en: string; active: boolean };
  stack: string[];
}

export const LIVE_SYSTEMS: LiveSystemItem[] = [
  {
    id: 'aitqm',
    badge: { zh: '在线工具平台', en: 'Live SaaS' },
    title: { zh: '品质道场 AI 工具箱 (aitqm.cn)', en: 'AITQM Quality Toolbox' },
    subtitle: { zh: '10 个生产级质量 AI 工具集合', en: '10 Production Quality AI Tools' },
    desc: {
      zh: '面向一线质量人的在线工具平台，内置 8D 闭环助手、QCC 成果报告、SPC 过程能力分析、体系文件评审及螺钉/标签/SMT/钣金/冲压专项对策库。',
      en: 'Online toolkit for quality engineers featuring 8D Closure Assistant, QCC Reports, SPC Analysis, SOP Review, and SMT/Sheet-Metal/Stamping defect advisors.',
    },
    primaryUrl: 'https://www.aitqm.cn',
    primaryLabel: { zh: '直接进入系统', en: 'Launch System' },
    status: { zh: '在线运行中', en: 'Live Online', active: true },
    stack: ['8D 闭环', 'SPC', 'QCC', '体系评审'],
  },
  {
    id: 'wps-qms',
    badge: { zh: '轻量系统测试版', en: 'Live Sandbox' },
    title: { zh: 'WPS 质量管理系统 V1.6', en: 'WPS Quality System V1.6' },
    subtitle: { zh: '脱敏可操作质量数据闭环原型', en: 'Sanitized Quality Data Loop Sandbox' },
    desc: {
      zh: '低门槛、免部署即可上手体验的轻量化质量数据闭环系统（已脱敏），可直接体验录入、跟踪与闭环统计流程。',
      en: 'Zero-setup, hands-on quality data closure sandbox built on WPS (sanitized), ready for immediate workflow testing.',
    },
    primaryUrl: 'https://www.kdocs.cn/l/cp0oiLGVMuTA',
    primaryLabel: { zh: '打开测试系统', en: 'Open Sandbox' },
    status: { zh: '公开测试中', en: 'Public Sandbox', active: true },
    stack: ['WPS 多维表', '脱敏测试', '闭环看板'],
  },
  {
    id: 'sys-355',
    badge: { zh: '全栈业务系统', en: 'Full-Stack System' },
    title: { zh: '355 IQC-DCC 质量协同系统', en: '355 IQC-DCC Quality System' },
    subtitle: { zh: 'Node + PostgreSQL + AI 8D 完整工程', en: 'Node + PostgreSQL + AI 8D Engineering' },
    desc: {
      zh: '并非单一演示页，而是包含统一账号权限、IQC/SIP/文控基线、SCAR↔8D 闭环关联与 76 张工单基线的全栈系统。支持本地/内网独立部署后直接从此处跳转打开。',
      en: 'A full-stack system (beyond a single demo page) integrating unified auth, IQC/SIP/DCC baselines, and SCAR↔8D closure. Configurable to launch your deployed instance directly.',
    },
    // 如果后续将 355 系统部署到公网/内网域名，只需把这里改为实际系统 URL（例如 https://355.aitqm.cn）
    primaryUrl: 'https://github.com/goodfeng186/355-IQC-DCC',
    primaryLabel: { zh: '查看系统源码仓库', en: 'Open System Repo' },
    secondaryUrl: './demos/sab-poka-yoke.html',
    secondaryLabel: { zh: '打开 355 SAB 演示页', en: 'Open SAB Demo' },
    status: { zh: '独立后端服务', en: 'Backend Service', active: false },
    stack: ['PostgreSQL', 'AI 8D', 'SCAR 闭环', '355 框架'],
  },
  {
    id: 'sys-iqc',
    badge: { zh: '控制塔系统', en: 'Control Tower' },
    title: { zh: 'IQC 智能检验控制塔平台', en: 'IQC Intelligent Control Tower' },
    subtitle: { zh: '来料检验 · 抽样派工 · 异常闭环', en: 'Incoming Inspection · Dispatch · Closure' },
    desc: {
      zh: '贯通图纸解析→SIP 审批→批次抽样→智能派工→异常反馈的 IQC 控制塔系统。配合多智能体全景架构图与二期开发说明书协同演进。',
      en: 'End-to-end IQC platform connecting drawing parsing, approved SIPs, risk-based sampling, AI dispatch, and defect feedback loops.',
    },
    primaryUrl: './demos/iqc-agent-architecture.html',
    primaryLabel: { zh: '打开智能体全景图', en: 'Open Architecture' },
    secondaryUrl: './demos/sip-generator.html',
    secondaryLabel: { zh: '试用 SIP 生成器', en: 'Try SIP Generator' },
    status: { zh: '含本地前端原型', en: 'Frontend Prototype', active: true },
    stack: ['SIP 生成', '风险抽样', '智能派工'],
  },
];

export interface DemoItem {
  id: string;
  category: '3d' | 'ai' | 'rules';
  url: string;
  tag: BiText;
  title: BiText;
  desc: BiText;
  highlights: BiText[];
}

export const INTERACTIVE_DEMOS: DemoItem[] = [
  {
    id: 'aidc-3d',
    category: '3d',
    url: './demos/aidc-3d-cockpit.html',
    tag: { zh: '3D 数字孪生', en: '3D Digital Twin' },
    title: { zh: 'AIDC 集装箱总装数字孪生驾驶舱', en: 'AIDC Container Assembly 3D Cockpit' },
    desc: {
      zh: '基于 Three.js 构建的 3 号厂房总装车间 3D 可视化大屏，实时映射工位状态、质量告警与产线节拍。',
      en: 'Interactive Three.js 3D factory cockpit mapping assembly stations, quality alerts, and line takt in real time.',
    },
    highlights: [
      { zh: '3D 空间交互', en: '3D Spatial View' },
      { zh: '本地化零外链', en: '100% Local Assets' },
    ],
  },
  {
    id: 'sip-3d',
    category: '3d',
    url: './demos/sip-3d-map.html',
    tag: { zh: '3D 检验地图', en: '3D Inspection Map' },
    title: { zh: '机柜结构件 3D 质量检验地图', en: 'Cabinet Structure 3D Inspection Map' },
    desc: {
      zh: '将传统纸面 SIP 检验标准重构为 3D 结构件点位地图，一线检验员可直观定位关键尺寸与防漏检要求。',
      en: 'Reimagines static paper SIPs into an interactive 3D part map so inspectors can pinpoint critical dimensions.',
    },
    highlights: [
      { zh: '防漏检可视化', en: 'Visual Poka-Yoke' },
      { zh: '纯原生零依赖', en: 'Zero External Deps' },
    ],
  },
  {
    id: 'iqc-arch',
    category: 'ai',
    url: './demos/iqc-agent-architecture.html',
    tag: { zh: '智能体架构', en: 'Agentic Architecture' },
    title: { zh: 'IQC 来料质量智能体全景图', en: 'IQC Quality Agentic Panorama' },
    desc: {
      zh: '展示来料检验控制塔的感知、推理、决策与闭环执行全景，连接供应商数据与车间防线。',
      en: 'Architectural panorama of the IQC Control Tower—connecting incoming inspection, AI reasoning, and supplier closure.',
    },
    highlights: [
      { zh: '多智能体协同', en: 'Multi-Agent Flow' },
      { zh: '矢量全景图', en: 'Interactive SVG' },
    ],
  },
  {
    id: 'sip-gen',
    category: 'ai',
    url: './demos/sip-generator.html',
    tag: { zh: 'AI 工具原型', en: 'AI Tool Prototype' },
    title: { zh: 'SIP 检验计划智能生成工具', en: 'AI SIP Inspection Plan Generator' },
    desc: {
      zh: '支持工程图纸 PDF 与 Excel 物料清单解析，结合大模型自动生成结构化 SIP 检验标准与抽样方案。',
      en: 'Parses engineering PDFs and Excel BOMs to automatically draft structured SIP inspection plans with AI.',
    },
    highlights: [
      { zh: 'PDF/Excel 解析', en: 'PDF & Excel Parser' },
      { zh: 'DeepSeek 兼容', en: 'DeepSeek Ready' },
    ],
  },
  {
    id: 'sab-demo',
    category: 'rules',
    url: './demos/sab-poka-yoke.html',
    tag: { zh: 'NPI 防呆框架', en: 'NPI Poka-Yoke' },
    title: { zh: '“355”框架 SAB 分级防呆演示', en: '"355" SAB Tiered Poka-Yoke Demo' },
    desc: {
      zh: '围绕新产品导入（NPI）核心专项，建立 S/A/B 三级风险防呆节点与动态执行追踪。',
      en: 'Demonstrates S/A/B tiered risk poka-yoke gates and execution tracking under the "355" NPI framework.',
    },
    highlights: [
      { zh: 'S/A/B 分级', en: 'S/A/B Risk Tiers' },
      { zh: 'NPI 闭环节点', en: 'NPI Gate Control' },
    ],
  },
  {
    id: 'qsa-rules',
    category: 'rules',
    url: './demos/qsa-dynamic-rules.html',
    tag: { zh: '动态体系规则', en: 'Dynamic QSA' },
    title: { zh: 'QSA 规则流程梳理与动态化攻坚', en: 'QSA Dynamic Rule Engine' },
    desc: {
      zh: '将静态质量体系审核条款拆解为可动态配置、可追踪执行状态的数字化规则流。',
      en: 'Transforms static Quality System Audit clauses into dynamic, traceable digital workflow rules.',
    },
    highlights: [
      { zh: '流程动态化', en: 'Dynamic Rules' },
      { zh: '审核可追溯', en: 'Audit Traceability' },
    ],
  },
];

export const CREATOR_ECOSYSTEM = {
  brand: { zh: '质量扫地僧', en: 'Master Sweeper of Quality' },
  platforms: [
    {
      name: { zh: '抖音 Douyin', en: 'Douyin' },
      handle: 'ID: 91812220249',
      stat: '8,894',
      statLabel: { zh: '粉丝 · 1.9万获赞', en: 'Followers · 19K Likes' },
      detail: {
        zh: '合集《质量管理深度思考》106 集 · 累计约 101.5 万播放',
        en: 'Series "Deep Thinking on Quality": 106 episodes · ~1.015M views',
      },
    },
    {
      name: { zh: '小红书 Xiaohongshu', en: 'Xiaohongshu' },
      handle: 'ID: 49990416353',
      stat: '1,283',
      statLabel: { zh: '粉丝 · 2,810 赞藏', en: 'Followers · 2.8K Saves' },
      detail: {
        zh: '一线质量实战方法论与数字化工具拆解图文',
        en: 'Shop-floor quality playbooks & AI tool breakdowns',
      },
    },
    {
      name: { zh: '微信视频号 Channels', en: 'WeChat Channels' },
      handle: { zh: '20年质量修行，渡己，渡人，渡产品', en: '20 Years of Quality Craft' },
      stat: '821',
      statLabel: { zh: '关注 · 65 个原创', en: 'Followers · 65 Originals' },
      detail: {
        zh: '3 分钟讲透一个能落地的质量管理方法',
        en: '3-minute actionable quality management insights',
      },
    },
  ],
  tools: [
    '8D 闭环助手',
    'QCC 成果报告',
    'SPC 过程能力分析',
    '体系文件评审',
    'SMT 不良生成器',
    '螺钉问题对策库',
    '标签不良对策',
    '钣金焊接 ALL',
    '钣金喷涂小工具',
    '冲压工具',
  ],
};

export const TEAM_MEMBERS = [
  {
    name: { zh: '肖玉丰（Simon / 丰哥）', en: 'Simon Xiao (Yufeng)' },
    role: { zh: '质量管理专家 · 阳天数智转型负责人', en: 'Quality Expert · Head of Digital Transformation' },
    location: { zh: '广东东莞', en: 'Dongguan' },
    bio: {
      zh: '23 年制造业质量实战，CAQ 六西格玛黑带，「质量扫地僧」主理人，负责行业场景定义、质量体系规则建模与产线落地。',
      en: '23 years in manufacturing quality, CAQ Six Sigma Black Belt, creator of "Master Sweeper of Quality"; leads domain modeling and shop-floor rollout.',
    },
  },
  {
    name: { zh: '赵伟', en: 'Wei Zhao' },
    role: { zh: 'CEO · 负责业务', en: 'CEO · Business & Strategy' },
    location: { zh: '中国', en: 'China' },
    bio: {
      zh: '统筹商业化战略、客户拓展与产业生态合作，推动 QMS-OS 从标杆工厂向产业链复制。',
      en: 'Leads business strategy, enterprise partnerships, and commercialization across manufacturing ecosystems.',
    },
  },
  {
    name: { zh: 'Alex J.', en: 'Alex J.' },
    role: { zh: 'CTO · 系统总架构', en: 'CTO · Chief Architect' },
    location: { zh: '温哥华 / 旧金山湾区', en: 'Vancouver / SF Bay Area' },
    bio: {
      zh: '中山大学校友，与肖玉丰相识十余年；具备 SaaS 工程、智能体 AI 与工业自动化创业经历，主导平台工程架构。',
      en: 'SYSU alumnus; seasoned SaaS & Agentic AI engineering leader with industrial automation startup background.',
    },
  },
  {
    name: { zh: '吴嘉亮（Paul Jialiang Wu）', en: 'Paul Jialiang Wu, Ph.D.' },
    role: { zh: 'AI 架构师', en: 'AI Architect' },
    location: { zh: '硅谷', en: 'Silicon Valley' },
    bio: {
      zh: '中山大学数学系，佐治亚理工博士，前耶鲁计算免疫学研究员，现居硅谷，主导多智能体协同与复杂系统架构。',
      en: 'SYSU Math, Georgia Tech Ph.D., former Yale Computational Immunology Fellow; leads multi-agent AI architecture.',
    },
    link: 'https://agentic-portfolio-lovat.vercel.app/',
  },
  {
    name: { zh: '刘伟', en: 'Wei Liu' },
    role: { zh: '质量管理专家', en: 'Quality Management Expert' },
    location: { zh: '广东', en: 'Guangdong' },
    bio: {
      zh: '此前供职于立讯精密，深耕供应链质量管控与制程工程实践，负责业务规则验证。',
      en: 'Formerly at Luxshare Precision, specializing in supply chain and process quality engineering.',
    },
  },
  {
    name: { zh: '李沅晋', en: 'Yuanjin Li' },
    role: { zh: 'AI 研发成员', en: 'AI Engineering' },
    location: { zh: 'UC Berkeley', en: 'UC Berkeley' },
    bio: {
      zh: '现就读加州大学伯克利分校，协助 Paul 推进 AI 智能体原型研发与技术验证。',
      en: 'UC Berkeley student collaborating with Paul on AI agent prototypes and technical validation.',
    },
  },
  {
    name: { zh: '许琳', en: 'Lin Xu' },
    role: { zh: '团队协作与线上运营', en: 'Operations & Coordination' },
    location: { zh: '中国', en: 'China' },
    bio: {
      zh: '负责团队日常线上协作、资料整理与内容/工具运营支持。',
      en: 'Supports online operations, documentation workflows, and content coordination.',
    },
  },
];

export interface ResearchReport {
  id: string;
  tag: BiText;
  date: string;
  title: BiText;
  subtitle: BiText;
  coreQuote: BiText;
  sections: {
    heading: BiText;
    points: BiText[];
  }[];
}

export const RESEARCH_REPORTS: ResearchReport[] = [
  {
    id: 'qms-os',
    tag: { zh: '研究报告 v1.0', en: 'Research Report v1.0' },
    date: '2026-11-12',
    title: { zh: 'QMS-OS：未来制造业质量管理形态研究报告', en: 'QMS-OS: Future Manufacturing Quality Management' },
    subtitle: {
      zh: '从数字 AI 到物理 AI：情境化管理、人机协同与质量治理体系重构',
      en: 'From Digital AI to Physical AI: Contextual Management & Human-Machine Governance',
    },
    coreQuote: {
      zh: '“让机器承担感知、计算与执行的速度，让人保留理解、判断、授权与责任的深度。”',
      en: '"Let machines carry the speed of sensing, computation, and execution; let humans keep the depth of understanding, judgment, authorization, and accountability."',
    },
    sections: [
      {
        heading: { zh: '一、当前制造业必须正视的三个现实问题', en: '1. Three Structural Realities in Manufacturing' },
        points: [
          {
            zh: '系统分散：质量信息散落在 QMS、ERP、MES、设备、OA、Excel 与即时通讯中，管理人员往往需要反复导表与人工拼凑才能回答“现在到底发生了什么”。',
            en: 'Fragmented systems: Quality facts sit across QMS, ERP, MES, Excel, and chat tools, forcing managers to manually stitch together status.',
          },
          {
            zh: '文件与现场“两张皮”：制度和检验规范规定了应该怎么做，但记录存在不代表执行符合当时有效版本。必须建立规则版本、业务对象、原始证据与授权之间的强关联。',
            en: 'Policy-execution gap: Having SOPs and logs does not prove execution matched the active revision. Systems must link rule versions, objects, evidence, and sign-off.',
          },
          {
            zh: '方法与工具未形成一体化运行：企业已积累 SAB、防呆、8D、FMEA、SIP 等资产，应让 AI 理解这些方法的判断逻辑并嵌入运行，而非简单替代。',
            en: 'Siloed methodologies: Proven methods (SAB, poka-yoke, 8D, FMEA, SIP) should be encoded so AI operates within them rather than replacing them with generic chat.',
          },
        ],
      },
      {
        heading: { zh: '二、QMS-OS 的“五个不是”核心主张', en: '2. Five Core Boundaries of QMS-OS' },
        points: [
          {
            zh: '不是推倒重来：保留并连接企业已有系统与防呆实践，重点解决跨系统协同与执行闭环。',
            en: 'Not a rip-and-replace: Connects existing systems and poka-yoke practices to close cross-system gaps.',
          },
          {
            zh: '不是文件电子化：把文件要求与实际执行事件绑定，验证版本、对象、证据与授权的一致性。',
            en: 'Not mere digitization of paper: Binds active spec versions directly to shop-floor execution events and evidence.',
          },
          {
            zh: '不是 AI 外挂与无人化：从业务情境出发组织人机协同；AI 负责识别、关联与提示缺口，人保留复核、例外判断、授权与责任。',
            en: 'Not an AI bolt-on or lights-out dogma: AI handles sensing and evidence linking; humans retain final judgment, authorization, and accountability.',
          },
        ],
      },
    ],
  },
  {
    id: 'ai-paradigm',
    tag: { zh: '论文初稿', en: 'Working Paper' },
    date: '2026-11',
    title: { zh: '中国制造业 AI 管理范式变化的长期讨论', en: 'Long-Term AI Management Paradigm Shift in Chinese Manufacturing' },
    subtitle: {
      zh: '以群聊异常处理为观察窗口：伴随式质量管理与有选择的组织记忆',
      en: 'Through the Lens of Shop-Floor Exception Chats: Ambient Quality & Selective Memory',
    },
    coreQuote: {
      zh: '如果 AI 只是缩短填表时间，只是工具改善；只有当日常协作持续沉淀为可靠记忆并改变风险识别时机，才构成范式变化。',
      en: 'Cutting form-filling time is merely a tool upgrade; a true paradigm shift happens when daily collaboration turns into reliable organizational memory.',
    },
    sections: [
      {
        heading: { zh: '一、产业、企业与岗位的三层张力', en: '1. Tension Across Industry, Enterprise, and Role' },
        points: [
          {
            zh: '2025 年中国制造业增加值达 34.7 万亿元（连续 16 年全球第一），但宏观规模不能直接证明单个工厂的过程稳定性；现场往往依赖少数骨干的高成本补救。',
            en: 'Macro industrial scale (34.7T RMB in 2025) does not guarantee process stability at the plant level, where delivery often relies on heroic firefighting by key engineers.',
          },
          {
            zh: '提出「伴随式质量管理」与「有选择的组织记忆」两个工作概念：探讨自然协作如何转化为可追溯、可修正、可再次调用的知识。',
            en: 'Introduces "Ambient Quality Management" and "Selective Organizational Memory" to study how natural chat collaboration becomes reusable engineering knowledge.',
          },
        ],
      },
      {
        heading: { zh: '二、扩展的质量成本核算视角', en: '2. Expanded Cost of Quality Accounting' },
        points: [
          {
            zh: '在传统 PAF（预防、鉴定、失效）成本之外，显式纳入“跨部门协调成本”与“增量 AI 成本”，防止把一线加班筛选和反复沟通隐藏在看似提升的合格率背后。',
            en: 'Extends traditional PAF (Prevention, Appraisal, Failure) accounting with Coordination Cost and Incremental AI Cost so hidden firefighting labor is not masked.',
          },
        ],
      },
    ],
  },
  {
    id: 'iqc-tower',
    tag: { zh: '工程方案 v1.0', en: 'Engineering Spec v1.0' },
    date: '2026-09-25',
    title: { zh: 'IQC 控制塔第二期建设方案', en: 'IQC Control Tower Phase II Architecture' },
    subtitle: {
      zh: '贯通图纸解析、版本化 SIP、智能派工与后端不良反馈的完整业务主线',
      en: 'End-to-End Flow: Drawing Parsing, Versioned SIP, AI Dispatch & Defect Feedback',
    },
    coreQuote: {
      zh: 'AI 只生成草稿和建议，不能自行批准；待人工复核事项未完成时，不得绕过提交条件。',
      en: 'AI drafts and recommends, never self-approves; human verification gates cannot be bypassed.',
    },
    sections: [
      {
        heading: { zh: '一、端到端业务主线', en: '1. End-to-End Operational Flow' },
        points: [
          {
            zh: '图纸／规范 → SIP 草稿 → 人工审核与修改 → 批准并导出一致的 PDF/Excel → 批次检验项目 → 历史案例提醒 → 检验结果 → 后端不良反馈 → 改善验证 → 受控知识更新。',
            en: 'Drawings/Specs → AI SIP Draft → Human Review & Approval → Consistent PDF/Excel → Batch Inspection → Historical Case Alerts → Result & Downstream Feedback → Controlled Knowledge Update.',
          },
        ],
      },
      {
        heading: { zh: '二、七层控制塔架构', en: '2. Seven-Layer Control Tower Structure' },
        points: [
          {
            zh: '覆盖全局总览、数据输入、智能体决策（案例匹配/风险/抽样/派工）、角色工作台（管理/QE/SQE/班组长/检验员）、业务闭环、知识与规则库、现有 QMS 集成七大层级。',
            en: 'Spans Global Overview, Data Ingestion, Agentic Decisions, Role Workbenches, Closed-Loop Execution, Knowledge & Rules, and QMS Integration.',
          },
        ],
      },
    ],
  },
];

export const FIELDWORK_PHOTOS = [
  {
    src: './photos/whiteboard-thinking.jpg',
    caption: { zh: '系统化思考白板推演：梳理 QMS-OS 底层逻辑', en: 'Whiteboard system thinking: mapping QMS-OS core logic' },
  },
  {
    src: './photos/paul-session.jpg',
    caption: { zh: '2026.11.16 AI 架构师吴嘉亮（Paul）现场技术讲解', en: 'Nov 16, 2026: Technical deep-dive with AI Architect Paul Wu' },
  },
  {
    src: './photos/office-team.jpg',
    caption: { zh: '东莞 / 深圳调研与项目研讨现场', en: 'Dongguan & Shenzhen fieldwork & workshop' },
  },
  {
    src: './photos/team-dinner.jpg',
    caption: { zh: '跨地团队线下交流合影', en: 'Cross-regional team gathering' },
  },
];
