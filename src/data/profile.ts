export type Lang = 'zh' | 'en';

export interface BiText {
  zh: string;
  en: string;
}

export const PROFILE = {
  name: { zh: '肖玉丰', en: 'Simon Xiao' },
  creatorBrand: { zh: '质量扫地僧', en: 'Master Sweeper of Quality' },
  location: { zh: '广东 · 东莞', en: 'Dongguan, China' },
  email: '45019296@qq.com',
  headline: {
    zh: '制造业质量数字化转型 · 可进化质量平台架构',
    en: 'Quality Digital Transformation · Evolvable Quality Platform',
  },
  slogan: {
    zh: '扫的不是地，是质量管理中看不见的盲区。',
    en: 'Sweeping away the invisible blind spots in quality management.',
  },
  subline: {
    zh: '肖玉丰（Simon / 丰哥）· 23 年制造现场实战 · CAQ 六西格玛黑带 · 致力于让质量管理从“人治救火”走向“系统治与预防级”',
    en: 'Simon Xiao · 23 Years on Shop Floors · CAQ Six Sigma Black Belt · Moving Quality from Firefighting to Prevention Systems',
  },
};

export const CORE_PHILOSOPHY = [
  {
    code: '01',
    title: { zh: '质量信仰建立', en: 'Quality Belief System' },
    desc: {
      zh: '不满足于事后救火与纸面体系。问题要追到根因，根因要固化进系统，改进必须闭环，让“零缺陷”成为可执行、可验证的日常信仰。',
      en: 'Beyond firefighting and paper compliance. Trace issues to root causes, encode them into systems, and enforce closed-loop verification.',
    },
  },
  {
    code: '02',
    title: { zh: '质量数字化', en: 'Quality Digitalization' },
    desc: {
      zh: '不是把纸面表单简单搬到线上，而是打通制度文件、现场对象、原始证据与人员授权的强关联，消除“文件与执行两张皮”。',
      en: 'Not mere form digitization—binding active SOP versions, shop-floor objects, raw evidence, and human sign-off into one traceable chain.',
    },
  },
  {
    code: '03',
    title: { zh: '可进化平台', en: 'Evolvable Platform' },
    desc: {
      zh: '让机器承担感知、计算与执行的速度，让人保留理解、判断、授权与责任的深度；让每一次异常处理都沉淀为可复用的组织记忆。',
      en: 'Machines carry speed; humans keep judgment and accountability. Every resolved exception becomes reusable organizational memory.',
    },
  },
];

// 能力演进路径（不直接罗列公司名，聚焦角色与能力跃迁）
export const EVOLUTION_PATH = [
  {
    stage: 'Stage 01 · 2003–2008',
    role: { zh: '精密制造一线品质基石', en: 'Shop-Floor Quality Foundation' },
    focus: { zh: '检验级 → 现场控制', en: 'Inspection → Process Control' },
    insight: {
      zh: '扎根精密模具与消费电子产线，建立对制程变异、统计抽样与现场异常排查的肌肉记忆。',
      en: 'Built shop-floor intuition in precision tooling, statistical sampling, and defect root-cause analysis.',
    },
  },
  {
    stage: 'Stage 02 · 2008–2018',
    role: { zh: '跨国体系与欧洲驻厂历练', en: 'Global Standards & EU On-Site' },
    focus: { zh: '经验级 → 体系化治理', en: 'Experience → System Governance' },
    insight: {
      zh: '十年品质管理与欧洲工厂一年驻厂实战，打通欧美客户审核标准，推动国际供方评分从 75 分跃升至 90 分。',
      en: '10 years leading quality ops including 1-year EU plant assignment, lifting international supplier scores from 75 to 90.',
    },
  },
  {
    stage: 'Stage 03 · 2018–2025',
    role: { zh: '通信供应链 PQE 全链路管控', en: 'Telecom Supply Chain PQE' },
    focus: { zh: '体系级 → NPI 预防', en: 'System → NPI Prevention' },
    insight: {
      zh: '主导 12 款通信总装新品量产导入（QCP/SIP 无损传递），打通供应商来料、制程与客户端闭环。',
      en: 'Led 12 telecom hardware NPI launches with zero-loss QCP/SIP transfer across suppliers, lines, and customers.',
    },
  },
  {
    stage: 'Stage 04 · 2025–至今',
    role: { zh: '质量数字化转型与 AI 架构', en: 'Digital Transformation & AI' },
    focus: { zh: '预防级 → 可进化平台', en: 'Prevention → Evolvable Platform' },
    insight: {
      zh: '构建跨基地统一质量数据中台与 AI 审计/8D 工具链，将质量经验固化为可自动运行的数字化逻辑。',
      en: 'Architected unified multi-site quality platforms and LLM audit/8D tools, turning expertise into living system logic.',
    },
  },
];

export const CREDENTIALS_SHORT = [
  { year: '2026', name: { zh: 'CAQ 六西格玛黑带', en: 'CAQ Six Sigma Black Belt' } },
  { year: '2026', name: { zh: 'NVIDIA Isaac 机器人开发', en: 'NVIDIA Isaac Developer' } },
  { year: '2024', name: { zh: 'ISO / QC080000 / RBA 内审员', en: 'ISO / QC080000 / RBA Auditor' } },
];

export const KEY_CONTRIBUTIONS = [
  {
    metric: '5% → 95%',
    metricSub: { zh: '回复率跃升 · 闭环率 0%→75%', en: 'Response 5%→95% · Closure 0%→75%' },
    title: { zh: '三地质量数据中台与“2+8+4”防呆架构', en: 'Multi-Site Data Platform & "2+8+4" Poka-Yoke' },
    desc: {
      zh: '主导 55 页《全程零缺陷》白皮书与 61 项字段规范，搭建“录入→分析→验证→闭环→智能”五模块架构，覆盖 3 基地 24 车间 200 线体，月均处理 8,763 条记录，同类问题复发率下降 45%。',
      en: 'Authored a 55-page Zero-Defect blueprint and 61-field standard across 3 sites, 24 workshops, and 200 lines (8,763 records/mo), cutting repeat defects by 45%.',
    },
  },
  {
    metric: '200+ 份',
    metricSub: { zh: '审核效率 ↑70% · 漏检率 ↓40%', en: 'Audit Speed +70% · Escapes -40%' },
    title: { zh: 'AI 体系文件与 SIP 三层智能审计模型', en: '3-Layer AI SOP & SIP Audit Engine' },
    desc: {
      zh: '独立研发“文法层 → ISO 合规层（RACI）→ 防呆层”三层审计系统，人工审核工作量减少 80%，因文件描述模糊导致的质量问题减少 65%。',
      en: 'Built an LLM-powered Grammar → ISO (RACI) → Poka-Yoke audit system, reducing manual review effort by 80% and ambiguity-driven defects by 65%.',
    },
  },
  {
    metric: '120m → 15m',
    metricSub: { zh: '8D 耗时压缩 87.5% · 周期缩短 60%', en: '8D Time -87.5% · Cycle -60%' },
    title: { zh: '8D / 5M1E 自动化与国际质量协同', en: '8D/5M1E Automation & Global Alignment' },
    desc: {
      zh: '自研 8D 自动生成器与 5M1E/5Why 联动工具；国际项目方面曾驻欧洲工厂 1 年并赴中东解决现场异议（解决率 100%），推动国际供方评分 75→90 分。',
      en: 'Built 8D/5M1E automation tools; led 1-year EU on-site alignment and 100% Middle East issue resolution, lifting supplier scores from 75 to 90.',
    },
  },
];

export interface VisualShowcaseItem {
  id: string;
  url: string;
  tag: BiText;
  title: BiText;
  whatInside: BiText;
  architecture: BiText;
  scenarios: BiText;
  breakthrough: BiText;
}

export const VISUAL_SHOWCASES: VisualShowcaseItem[] = [
  {
    id: 'aidc-3d',
    url: './demos/aidc-3d-cockpit.html',
    tag: { zh: '01 · 3D 数字孪生驾驶舱', en: '01 · 3D Digital Twin Cockpit' },
    title: { zh: 'AIDC 集装箱总装数字孪生大屏', en: 'AIDC Container Assembly 3D Cockpit' },
    whatInside: {
      zh: '包含总装车间 3D 空间工位模型、各工位实时良率/节拍状态，以及“不良/异常实时反馈上报”交互入口。',
      en: '3D assembly station models, real-time yield/takt status per station, and live defect/exception reporting.',
    },
    architecture: {
      zh: '采用“Three.js 空间数字孪生 + 实时质量事件流”架构，将孤立的表格异常转化为绑定物理工位的空间态势感知。',
      en: 'Three.js spatial digital twin + real-time quality event stream, binding tabular issues to physical workstations.',
    },
    scenarios: {
      zh: '适用于大型总装车间现场大屏监控、T+1 跨部门早会巡检调度与管理层全局态势决策。',
      en: 'Designed for assembly shop-floor command screens, T+1 daily tier meetings, and management oversight.',
    },
    breakthrough: {
      zh: '打破传统 BI 只有折线图和数字的局限，一眼定位异常发生的物理工位与空间分布规律。',
      en: 'Replaces flat BI charts with immediate spatial awareness of where defects occur on the line.',
    },
  },
  {
    id: 'sip-3d',
    url: './demos/sip-3d-map.html',
    tag: { zh: '02 · 3D 质量检验地图（去敏重构版）', en: '02 · 3D Inspection Map' },
    title: { zh: '机柜结构件 3D 质量检验地图', en: 'Cabinet Structure 3D Inspection Map' },
    whatInside: {
      zh: '包含关键部位编号索引、3D 机柜交互检视模型、每个点位的检验重点/控制标准、功能风险说明及实物参考照片。',
      en: 'Indexed critical checkpoints, interactive 3D cabinet model, tolerance/control specs, risk impact, and photo refs.',
    },
    architecture: {
      zh: '纯前端零外部依赖架构，并已完成客户图号与内部敏感参数去敏处理，以“空间点位”组织检验知识。',
      en: 'Zero-dependency frontend with sanitized part IDs/params, organizing inspection knowledge by 3D spatial anchors.',
    },
    scenarios: {
      zh: '适用于 IQC 来料检验、IPQC 巡检及新员工上岗培训，检验员点击 3D 部位即可查看“查什么、怎么查、漏了有什么风险”。',
      en: 'Built for IQC incoming checks, IPQC patrols, and rapid operator onboarding.',
    },
    breakthrough: {
      zh: '核心突破在于彻底颠覆传统二维纸面 SIP：把容易看漏的文字条款直接锚定到 3D 实物部位，大幅降低一线漏检率。',
      en: 'Breakthrough over static 2D paper SIPs: anchors abstract clauses onto 3D geometry to slash inspection escapes.',
    },
  },
  {
    id: 'iqc-arch',
    url: './demos/iqc-agent-architecture.html',
    tag: { zh: '03 · 智能体全景架构', en: '03 · Agentic Panorama' },
    title: { zh: 'IQC 来料质量智能体全景图', en: 'IQC Quality Agentic Control Tower' },
    whatInside: {
      zh: '完整呈现 IQC 控制塔的数据输入层、多智能体决策层、角色工作台与后端异常闭环链路。',
      en: 'Full map of data ingestion, multi-agent decision layer, role workbenches, and downstream closure loops.',
    },
    architecture: {
      zh: '采用“人机协同闭环”架构：AI 承担图纸解析、风险抽样、派工与历史案例匹配；人保留最终审批与例外授权。',
      en: 'Human-in-the-loop architecture: AI handles parsing, risk sampling, and case matching; humans retain sign-off.',
    },
    scenarios: {
      zh: '适用于多品种小批量来料检验场景，解决检验员经验依赖重、历史不良案例难复用、派工不均的问题。',
      en: 'Ideal for high-mix incoming inspection where historical defect knowledge is hard to reuse.',
    },
    breakthrough: {
      zh: '把静态来料检验升级为会“主动提醒历史踩坑”的智能控制塔。',
      en: 'Upgrades passive incoming checks into an active control tower that surfaces historical pitfalls.',
    },
  },
  {
    id: 'sip-gen',
    url: './demos/sip-generator.html',
    tag: { zh: '04 · SIP 生成与展示逻辑', en: '04 · AI SIP Generator' },
    title: { zh: 'SIP 检验计划智能生成工具', en: 'AI SIP Inspection Plan Generator' },
    whatInside: {
      zh: '包含检验指导书/PDF 拖拽解析区、DeepSeek 大模型提取引擎、结构化检验项目输出与审核修订界面。',
      en: 'Drag-and-drop spec/PDF parser, DeepSeek extraction engine, structured SIP output, and review UI.',
    },
    architecture: {
      zh: '生成逻辑：输入图纸/指导书 → 提取关键尺寸与外观要求 → 结合 SAB 分级防呆逻辑标注风险等级 → 生成可审核草稿。',
      en: 'Logic: Spec PDF → Extract dimensions/cosmetics → Apply SAB risk-tiering → Output reviewable SIP draft.',
    },
    scenarios: {
      zh: '适用于 PQE/SQE 编制新项目检验计划，将数小时的文档摘录与排版工作压缩至分钟级。',
      en: 'Built for PQE/SQE teams drafting new product SIPs in minutes instead of hours.',
    },
    breakthrough: {
      zh: '严格遵循“AI 出草稿、人做批准”的展示逻辑，识别不清或冲突项自动高亮待人工核对，绝不盲目放行。',
      en: 'Enforces "AI drafts, human approves"—highlighting ambiguities for mandatory engineer verification.',
    },
  },
  {
    id: 'sab-demo',
    url: './demos/sab-poka-yoke.html',
    tag: { zh: '05 · 355 系统闭环逻辑', en: '05 · 355 SAB Framework' },
    title: { zh: '“355”框架 SAB 分级防呆系统', en: '"355" SAB Tiered Poka-Yoke' },
    whatInside: {
      zh: '包含“355”系统运行闭环、NPI 五个端到端流程（G0–G7 状态主线）、S/A/B 风险分级统一口径与项目复杂分流。',
      en: '355 closed-loop logic, 5 end-to-end NPI flows (G0–G7), S/A/B risk definitions, and complexity routing.',
    },
    architecture: {
      zh: '采用“S/A/B 分级防呆 + G0–G7 门禁控制”架构，不同风险等级匹配差异化审核深度与防呆手段。',
      en: 'S/A/B risk-tiered poka-yoke + G0–G7 stage gates, matching rigor to risk level.',
    },
    scenarios: {
      zh: '适用于新产品导入（NPI）跨部门评审与工厂 355 协同系统的业务规则对齐。',
      en: 'Aligns cross-functional NPI reviews and factory 355 system business rules.',
    },
    breakthrough: {
      zh: '把隐性的“老师傅防呆经验”拆解成 G0–G7 节点上可执行、可检查的硬性规则。',
      en: 'Converts tacit veteran poka-yoke experience into enforceable G0–G7 stage-gate rules.',
    },
  },
  {
    id: 'qsa-rules',
    url: './demos/qsa-dynamic-rules.html',
    tag: { zh: '06 · 动态体系规则', en: '06 · Dynamic QSA Rules' },
    title: { zh: 'QSA 规则流程梳理与动态化攻坚', en: 'QSA Dynamic Rule Engine' },
    whatInside: {
      zh: '包含 QSA 升级运作思维导图、PDCA 持续精进闭环、升级路线图以及“智能体五能力 × 升级路径”矩阵。',
      en: 'QSA mind-map, PDCA continuous improvement loop, roadmap, and 5-capability agent matrix.',
    },
    architecture: {
      zh: '将静态 ISO/QSA 审核条款拆解为动态规则节点，通过 PDCA 闭环持续校准规则有效性。',
      en: 'Breaks static audit clauses into dynamic rule nodes calibrated through PDCA loops.',
    },
    scenarios: {
      zh: '适用于制造企业质量体系升级、内审条款数字化改造与体系工程师培训。',
      en: 'Built for QMS modernization, digital internal audits, and quality system training.',
    },
    breakthrough: {
      zh: '让质量体系审核不再是“迎审突击补资料”，而是融入日常运行的动态规则引擎。',
      en: 'Transforms audits from last-minute paperwork into a living, daily rule engine.',
    },
  },
  {
    id: 'qms-neural',
    url: './systems/355-demo/neural-creator/index.html',
    tag: { zh: '07 · 水母神经全景 · AI 文件评审', en: '07 · QMS Neural Panorama & AI Audit' },
    title: { zh: '体系神经网络全景（水母与光 · AI 文件评审）', en: 'QMS Neural OS (Jellyfish & AI Doc Audit)' },
    whatInside: {
      zh: '包含开场「水母与光」神经中枢动画、体系程序/图谱/作业规范/8D 改善库等 150+ 份脱敏受控文件知识图谱、连接度分析、审厂证明卡与 AI 审厂助手。',
      en: 'Opening glowing jellyfish & light neural hub, 150+ sanitized SOP knowledge graph nodes, connectivity trace, Audit Card export, and AI Audit Copilot.',
    },
    architecture: {
      zh: '以“生物神经中枢 + 发光脉冲连线”建模质量体系文件间的引用、被引用与双向协同关系，完全纯静态本地演示运行。',
      en: 'Models cross-references and bidirectional SOP links as glowing neural filaments around a central living hub in pure static mode.',
    },
    scenarios: {
      zh: '适用于企业受控体系文件评审、二方/三方客户审厂迎检证明、质量体系知识图谱直观展示。',
      en: 'Built for controlled document review, customer/ISO audit readiness checks, and visual QMS knowledge exploration.',
    },
    breakthrough: {
      zh: '告别静态目录列表，用“水母与光”将枯燥的 ISO/QMS 程序文件转化为可点击追溯的动态神经网络与 AI 文件评审台。',
      en: 'Turns static ISO document folders into an interactive glowing neural network with instant AI audit readiness insight.',
    },
  },
];

export const LIVE_SYSTEMS = [
  {
    id: 'aitqm',
    badge: { zh: '社会与行业开放贡献', en: 'Open to Industry' },
    title: { zh: '品质道场 AI 落地工具箱 (aitqm.cn)', en: 'AITQM Quality AI Toolbox' },
    url: 'https://www.aitqm.cn',
    screenshots: [
      { src: './photos/sys-aitqm.jpg', label: { zh: '品质道场工具集实景（10 项质量工具）', en: 'AITQM Toolbox Live Screen' } },
    ],
    desc: {
      zh: '不仅服务于自身工厂转型，更面向全行业质量人开放：内置 8D 闭环助手、QCC 成果报告、SPC 过程能力分析、体系文件评审及螺钉/标签/SMT/钣金/冲压等 10 个实用工具，帮助一线质量人把专业方法落地。',
      en: 'Built not just for internal factory transformation, but to empower quality engineers industry-wide: 10 practical AI tools including 8D Closure, QCC, SPC, SOP Review, and SMT/Sheet-Metal defect advisors.',
    },
    actionLabel: { zh: '进入 aitqm.cn 工具箱', en: 'Open aitqm.cn' },
  },
  {
    id: 'wps',
    badge: { zh: '工厂落地系统 · 脱敏测试版', en: 'Factory System · Sandbox' },
    title: { zh: 'WPS 质量管理系统 V1.6', en: 'WPS Quality System V1.6' },
    url: 'https://www.kdocs.cn/l/cp0oiLGVMuTA',
    screenshots: [
      { src: './photos/sys-wps.jpg', label: { zh: 'A 厂区质量日报看板（WPS 多维表实时闭环）', en: 'WPS Quality Daily Dashboard' } },
    ],
    desc: {
      zh: '源于工厂实际落地的轻量化质量数据闭环系统（脱敏测试版）。展示如何用低门槛工具跑通“问题录入→责任指派→原因分析→验证闭环”全链路，供同行直接上手体验与借鉴。',
      en: 'Sanitized sandbox of our factory-deployed quality closure system. Demonstrates low-barrier end-to-end issue capture, assignment, root-cause analysis, and verification.',
    },
    actionLabel: { zh: '打开 WPS 测试系统', en: 'Open WPS Sandbox' },
  },
  {
    id: 'sys-355',
    badge: { zh: '工厂落地系统 · 全网页可交互版', en: 'Factory System · Live Web Demo' },
    title: { zh: '355 智能体协同系统（全网页演示版）', en: '355 Agentic Quality System (Live Web)' },
    url: './systems/355-demo/index.html',
    screenshots: [
      { src: './photos/sys-355-1.jpg', label: { zh: '体系神经网络全景与作业规范关联', en: 'QMS Neural Panorama & SOP Links' } },
      { src: './photos/sys-355-2.jpg', label: { zh: '355 NPI 智能体协同中枢', en: '355 NPI Agent Hub' } },
      { src: './photos/sys-355-3.jpg', label: { zh: 'IQC 智能体全景控制塔', en: 'IQC Agentic Control Tower' } },
    ],
    desc: {
      zh: '可直接打开交互的 355 纯静态多页系统（涵盖登录门禁、总览看板、水母神经全景/AI 文件评审、体系 AI 问答、IQC 控制塔、SIP 工作台、检验执行与知识中心）。登录提示：公司编码填 DEMO，工号与密码填 demo（或任意非空字符）即可进入体验。',
      en: 'Interactive multi-page 355 web system (Login, Dashboard, QMS Neural Panorama/AI Doc Audit, QMS AI Q&A, IQC Control Tower, SIP Workbench, Inspection & Knowledge Center). Demo login: Company DEMO, ID/Password demo.',
    },
    actionLabel: { zh: '直接打开 355 系统', en: 'Launch 355 System' },
  },
];

// 去掉所有粉丝数/关注数/播放量，保留纯粹内容定位与直达链接位
export const CREATOR_PLATFORMS = [
  {
    id: 'douyin' as const,
    name: { zh: '抖音 · 质量扫地僧', en: 'Douyin · Master Sweeper' },
    focus: { zh: '8D 实战 · 质量管理深度思考 · 质量信仰建立', en: '8D Playbooks · Deep Quality Thinking' },
    url: 'https://www.douyin.com/user/self/search/%E8%B4%A8%E9%87%8F%E6%89%AB%E5%9C%B0%E5%83%A7?aid=e733899d-d386-4678-90c1-97b85c659989&type=general',
    hint: { zh: '抖音号: 91812220249', en: 'Douyin ID: 91812220249' },
  },
  {
    id: 'xhs' as const,
    name: { zh: '小红书 · 质量扫地僧', en: 'Xiaohongshu · Master Sweeper' },
    focus: { zh: '一线防呆方法论 · AI 质量工具拆解', en: 'Poka-Yoke Methods · AI Tool Breakdowns' },
    url: 'https://www.xiaohongshu.com/search_result?keyword=49990416353',
    hint: { zh: '小红书号: 49990416353', en: 'RED ID: 49990416353' },
  },
  {
    id: 'wechat' as const,
    name: { zh: '微信视频号 · 质量扫地僧', en: 'WeChat Channels · Master Sweeper' },
    focus: { zh: '20 年质量修行：渡己，渡人，渡产品', en: '20 Years of Quality Craft & Mindset' },
    url: '',
    hint: { zh: '微信视频号搜索「质量扫地僧」', en: 'Search "质量扫地僧" in WeChat' },
  },
];

export const PHOTO_WALL = [
  { src: './photos/whiteboard-thinking.jpg', caption: { zh: '白板系统化推演 · QMS-OS 底层逻辑', en: 'Whiteboard System Architecture' } },
  { src: './photos/paul-session.jpg', caption: { zh: 'AI 架构师吴嘉亮技术分享现场', en: 'Technical Deep-Dive with AI Architect Paul Wu' } },
  { src: './photos/paul-session-2.jpg', caption: { zh: '智能体系统架构研讨', en: 'Multi-Agent Architecture Workshop' } },
  { src: './photos/indoor-workshop.jpg', caption: { zh: '产线数字化方案深度对焦', en: 'Shop-Floor Digitalization Alignment' } },
  { src: './photos/office-team.jpg', caption: { zh: '东莞 · 深圳一线调研研讨', en: 'Dongguan & Shenzhen Fieldwork' } },
  { src: './photos/team-thumbsup.jpg', caption: { zh: '阶段性里程碑团队合影', en: 'Milestone Team Photo' } },
  { src: './photos/team-dinner.jpg', caption: { zh: '跨地域核心团队交流合影', en: 'Cross-Regional Team Gathering' } },
];

export const TEAM_MEMBERS = [
  {
    name: { zh: '肖玉丰（Simon / 丰哥）', en: 'Simon Xiao' },
    role: { zh: '质量管理专家 · 数字化转型负责人', en: 'Quality Expert · Digital Transformation' },
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
