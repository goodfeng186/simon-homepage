/* 体系 AI 演示数据与匹配函数：加载时不读写 DOM，可供 node require。 */
(function (root) {
  var FALLBACK = "演示包仅内置示例问答，请点上方预设问题";

  var FILES = [
    { id: "DEMO-QP-001", cat: "体系程序", title: "文件控制程序", dept: "[部门]",
      points: "规定文件的编制、评审、批准、分发、升版与作废。现场只保留现行有效版本，作废文件须标识后收回或隔离。" },
    { id: "DEMO-QP-002", cat: "体系程序", title: "不合格品控制程序", dept: "[部门]",
      points: "规定不合格品的标识、隔离、评审与处置权限。处置完成前不得流入下工序或出货。" },
    { id: "DEMO-WI-001", cat: "作业规范", title: "来料检验作业规范", dept: "[部门]",
      points: "规定来料检验的抽样、判定、记录与不合格上报路径。检验结果须可追溯到批次与样本。" },
    { id: "DEMO-WI-002", cat: "作业规范", title: "现场检验作业规范", dept: "[部门]",
      points: "规定现场抽检频次、记录填写和异常升级条件。发现异常应立即标识并通知责任岗位。" },
    { id: "DEMO-8D-001", cat: "8D 案例", title: "某部件不良 8D 案例", dept: "[部门]",
      points: "演示一次部件尺寸超差的 8D 闭环：临时遏制、根因分层、永久措施与效果确认。" },
    { id: "DEMO-8D-002", cat: "8D 案例", title: "某批次隔离 8D 案例", dept: "[部门]",
      points: "演示一批次来料混料后的隔离范围、追溯边界、纠正措施与再发防止。" },
    { id: "DEMO-ST-001", cat: "标准与总表", title: "质量记录一览表", dept: "[部门]",
      points: "汇总质量记录的名称、保存期限与责任岗位，便于审核时按表取证。" },
    { id: "DEMO-ST-002", cat: "标准与总表", title: "检验标准一览表", dept: "[部门]",
      points: "汇总常用检验标准与对应作业规范编号，仅作演示索引，不连接外部标准库。" }
  ];

  var QA = [
    { q: "文件控制程序里，受控文件如何升版和分发？",
      a: "升版须完成评审与批准，再用新版本替换作废版本，并按分发范围更新持有人。现场只保留现行有效版本，作废文件应标识后收回或隔离。本页为演示问答，不写入服务器。" },
    { q: "来料检验发现不合格时，如何隔离和判定？",
      a: "先对不合格批次做标识和隔离，避免继续上线。再按来料检验作业规范完成复判，并记录样本、批号与判定结论，随后按不合格品控制程序提交评审。" },
    { q: "不合格品可以什么方式处置？",
      a: "常见处置包括返工、返修、让步接收、降级或报废，须由授权人员评审后执行。处置完成并记录之前，物料不得流入下工序或出货。" },
    { q: "8D 报告怎样才算闭环？",
      a: "至少完成临时遏制、根因确认、永久措施落地，以及效果验证与再发防止。措施应回写到相关作业规范或控制计划，并关闭验证记录。" },
    { q: "质量记录一览表用来做什么？",
      a: "它用来对照记录名称、保存期限和责任岗位，审核或日常追溯时可按表取证。一览表本身不代替原始记录，只提供索引。" },
    { q: "作业规范修订后，现场应先做什么？",
      a: "先确认新版本已批准并分发到岗位，收回旧版，再完成必要的培训或交底，然后按新规范执行并留下记录。" }
  ];

  function answer(q) {
    var s = String(q == null ? "" : q).trim();
    if (!s) return FALLBACK;
    var i, item, score, best = null, bestScore = 0;
    for (i = 0; i < QA.length; i++) {
      if (QA[i].q === s) return QA[i].a;
    }
    for (i = 0; i < QA.length; i++) {
      item = QA[i];
      score = 0;
      if (item.q.indexOf(s) !== -1 || s.indexOf(item.q) !== -1) score += 8;
      if (s.indexOf("文件控制") !== -1 && item.q.indexOf("文件控制") !== -1) score += 4;
      if (s.indexOf("来料检验") !== -1 && item.q.indexOf("来料检验") !== -1) score += 4;
      if (s.indexOf("不合格") !== -1 && item.q.indexOf("不合格") !== -1) score += 4;
      if (s.indexOf("8D") !== -1 && item.q.indexOf("8D") !== -1) score += 4;
      if (s.indexOf("质量记录") !== -1 && item.q.indexOf("质量记录") !== -1) score += 4;
      if (s.indexOf("作业规范") !== -1 && item.q.indexOf("作业规范") !== -1) score += 3;
      if (score > bestScore) { bestScore = score; best = item; }
    }
    return bestScore >= 3 ? best.a : FALLBACK;
  }

  var api = { QA: QA, answer: answer, FILES: FILES, FALLBACK: FALLBACK };

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  if (typeof window !== "undefined") {
    window.DemoSystemAI = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
