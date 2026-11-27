/* 页面内演示数据与本地动作。不访问网络，不写入服务器。 */
(function (global) {
  function clone(v) { return JSON.parse(JSON.stringify(v)); }
  function ok(data) { return Promise.resolve(clone(data)); }
  function fail(msg) { return Promise.reject(new Error(msg || '演示操作失败')); }
  function parseQuery(path) {
    var i = path.indexOf('?');
    var q = {};
    if (i < 0) return { path: path, q: q };
    path.slice(i + 1).split('&').forEach(function (pair) {
      if (!pair) return;
      var kv = pair.split('=');
      q[decodeURIComponent(kv[0])] = decodeURIComponent((kv[1] || '').replace(/\+/g, ' '));
    });
    return { path: path.slice(0, i), q: q };
  }

  var TASKS = [
    { id: 1, task_no: 'IQCT-DEMO-001', material_code: '93122427', material_name: '绝缘PC膜 安装板底部绝缘膜', po_no: 'PO-202610-001', priority: 'HIGH', stage: 'INSPECTING', received_qty: 5000, supplier_id: 1, supplier_name: '供应商甲', deadline: '2026-11-30' },
    { id: 2, task_no: 'IQCT-DEMO-002', material_code: 'DKBA8.136.9475', material_name: '左把手支架', po_no: 'PO-202610-002', priority: 'NORMAL', stage: 'RECEIVED', received_qty: 800, supplier_id: 2, supplier_name: '供应商乙', deadline: '2026-12-05' },
    { id: 3, task_no: 'IQCT-DEMO-003', material_code: '21022480-001', material_name: '前壳装饰件', po_no: 'PO-202610-003', priority: 'HIGH', stage: 'SAMPLING', received_qty: 1200, supplier_id: 1, supplier_name: '供应商甲', deadline: '2026-12-02' },
    { id: 4, task_no: 'IQCT-DEMO-004', material_code: '21100087', material_name: '弹簧挡圈', po_no: 'PO-202610-004', priority: 'LOW', stage: 'REVIEW', received_qty: 20000, supplier_id: 3, supplier_name: '供应商丙', deadline: '2026-12-12' },
    { id: 5, task_no: 'IQCT-DEMO-005', material_code: '93122427', material_name: '绝缘PC膜 安装板底部绝缘膜', po_no: 'PO-202610-005', priority: 'NORMAL', stage: 'RECEIVED', received_qty: 3000, supplier_id: 2, supplier_name: '供应商乙', deadline: '2026-12-08' }
  ];
  var nextTaskId = 6;

  var SUPPLIERS = [
    { id: 1, name: '供应商甲' },
    { id: 2, name: '供应商乙' },
    { id: 3, name: '供应商丙' }
  ];

  var CASES = [
    { id: 1, material_code: '93122427', supplier_id: 1, defect_type: '边缘毛刺', defect_level: 'MA', symptom: '冲切边缘有毛刺，装机后刮伤塑胶外壳', root_cause: '冲切模具刃口磨损', source: 'INSPECTION', tier: 1 },
    { id: 2, material_code: 'DKBA8.136.9475', supplier_id: 2, defect_type: '尺寸超差', defect_level: 'CR', symptom: '安装孔距超上差', root_cause: '夹具定位偏移', source: 'NCR', tier: 2 }
  ];
  var nextCaseId = 3;

  var PROJECTS = {
    '93122427': { id: 11, material_code: '93122427', status: 'ACTIVE', project_items: [
      { item_no: 1, check_item: '外形尺寸 L', source_content: '50.50 ±0.30', method: '卡尺', tool: '数显卡尺', check_frequency: '抽检', sample_size: 5, standard_value: '50.50', tolerance: '±0.30' },
      { item_no: 2, check_item: '外形尺寸 W', source_content: '30.00 ±0.20', method: '卡尺', tool: '数显卡尺', check_frequency: '抽检', sample_size: 5, standard_value: '30.00', tolerance: '±0.20' },
      { item_no: 3, check_item: '外观', source_content: '无毛刺、无破损、无油污', method: '目视', tool: '目视', check_frequency: '抽检', sample_size: 13 },
      { item_no: 4, check_item: '材质报告复核', source_content: '对照材质证明', method: '复核', tool: '复核供应商材质报告', check_frequency: '每批', sample_size: 1 }
    ], cases: [CASES[0]] },
    'DKBA8.136.9475': { id: 12, material_code: 'DKBA8.136.9475', status: 'ACTIVE', project_items: [
      { item_no: 1, check_item: '孔径', source_content: '8.00 ±0.10', method: '塞规', tool: '塞规', check_frequency: '抽检', sample_size: 5, standard_value: '8.00', tolerance: '±0.10' },
      { item_no: 2, check_item: '孔距', source_content: '42.00 ±0.15', method: '卡尺', tool: '数显卡尺', check_frequency: '抽检', sample_size: 5, standard_value: '42.00', tolerance: '±0.15' },
      { item_no: 3, check_item: '外观', source_content: '无变形、无划伤', method: '目视', tool: '目视', check_frequency: '抽检', sample_size: 13 }
    ], cases: [CASES[1]] },
    '21022480-001': { id: 13, material_code: '21022480-001', status: 'ACTIVE', project_items: [
      { item_no: 1, check_item: '色差', source_content: '与色板一致', method: '目视', tool: '目视+色板', check_frequency: '抽检', sample_size: 8 },
      { item_no: 2, check_item: '配合间隙', source_content: '0.20 ±0.10', method: '塞尺', tool: '塞尺', check_frequency: '抽检', sample_size: 5, standard_value: '0.20', tolerance: '±0.10' }
    ], cases: [] },
    '21100087': { id: 14, material_code: '21100087', status: 'ACTIVE', project_items: [
      { item_no: 1, check_item: '线径', source_content: '1.20 ±0.05', method: '千分尺', tool: '外径千分尺', check_frequency: '抽检', sample_size: 5, standard_value: '1.20', tolerance: '±0.05' },
      { item_no: 2, check_item: '开口尺寸', source_content: '按图', method: '卡尺', tool: '数显卡尺', check_frequency: '抽检', sample_size: 5, standard_value: '12.00', tolerance: '±0.20' }
    ], cases: [] }
  };

  function adviceFor(taskId) {
    var t = TASKS.filter(function (x) { return x.id === Number(taskId); })[0] || TASKS[0];
    var high = (t.priority || '') === 'HIGH';
    return [
      { id: Number(taskId) * 10 + 1, task_id: t.id, advice_no: 'ADV-' + t.task_no + '-R', stage: 'risk', status: 'DRAFT', payload: { score: high ? 82 : 36, level: high ? 'HIGH' : 'LOW', factors: [
        { key: 'ncr_count', reason: high ? '近三个月同类物料有 NCR 记录' : '近三个月无 NCR', score_part: high ? 30 : 4 },
        { key: 'supplier_rating', reason: '供应商绩效为演示分级', score_part: high ? 22 : 8 },
        { key: 'complaint_count', reason: high ? '有历史客诉参考' : '无客诉', score_part: high ? 18 : 2 }
      ] } },
      { id: Number(taskId) * 10 + 2, task_id: t.id, advice_no: 'ADV-' + t.task_no + '-S', stage: 'sampling', status: high ? 'DRAFT' : 'APPROVED', payload: { scheme: high ? 'TIGHTENED' : 'NORMAL', sample_qty: high ? 50 : 32, accept_qty: 0, reject_qty: 1, next_scheme_state: '保持', full_inspection: false, calibration_status: 'ok' } },
      { id: Number(taskId) * 10 + 3, task_id: t.id, advice_no: 'ADV-' + t.task_no + '-D', stage: 'dispatch', status: 'APPROVED', payload: { suggestions: [
        { name: '检验员甲', score: 0.86, reasons: ['技能匹配', '负载较低'] },
        { name: '检验员乙', score: 0.71, reasons: ['有同类物料经验'] }
      ] } }
    ];
  }
  var ADVICE = {};
  TASKS.forEach(function (t) { ADVICE[t.id] = adviceFor(t.id); });

  function orchestrate(taskId, stage) {
    var list = ADVICE[Number(taskId)] || adviceFor(taskId);
    var hit = list.filter(function (a) { return a.stage === stage; })[0];
    if (hit) return { payload: hit.payload, stage: stage };
    return { payload: {}, stage: stage };
  }

  function sipRecord(id, status, name, drawing, file) {
    return {
      sip_id: id,
      status: status,
      created_at: '2026-10-18 09:30',
      source_file: file,
      sip_name: name,
      drawing_no: drawing,
      sip: {
        header: {
          sip_name: name,
          drawing_no: drawing,
          drawing_version: 'A',
          sip_version: 'V1.0',
          file_no: '[程序编号]',
          material: '示例材质',
          finish: '本色',
          mass: '12 g',
          scale: '1:1',
          company: '[公司]',
          ai_warning: '本页为演示草稿，尺寸与公差来自内置示例行，未解析上传文件。'
        },
        groups: [
          { step: '尺寸检验', items: [
            { project: '外形尺寸 L', content: '50.50 ±0.30 mm', method: '测量', tool: '数显卡尺', freq: '抽检', sample: '5' },
            { project: '外形尺寸 W', content: '30.00 ±0.20 mm', method: '测量', tool: '数显卡尺', freq: '抽检', sample: '5' }
          ] },
          { step: '外观检验', items: [
            { project: '外观', content: '无毛刺、无破损、无油污', method: '目视', tool: '目视', freq: '抽检', sample: '13' }
          ] }
        ]
      }
    };
  }
  var SIPS = [
    sipRecord('SIP-DEMO-001', 'DRAFT', '绝缘PC膜 检验指导书', '93122427', '示例图纸A.pdf'),
    sipRecord('SIP-DEMO-002', 'APPROVED', '左把手支架 检验指导书', 'DKBA8.136.9475', '示例图纸B.pdf')
  ];
  var sipSeq = 3;

  var KNOWLEDGE = [
    { id: 1, type: 'procedure', title: '进料检验控制程序（演示）', doc_code: '[程序编号]', rev: 'A', department: '[部门]', status: 'ACTIVE', created_by: '[姓名]', summary: '演示用进料检验程序摘要。', tags: 'IQC,程序', url: 'iqc-check.html' },
    { id: 2, type: 'sip', title: '绝缘PC膜 检验指导书', doc_code: 'SIP-DEMO-002', rev: 'V1.0', department: '[部门]', status: 'ACTIVE', created_by: '[姓名]', summary: '已批准的演示 SIP。', tags: 'SIP,尺寸', url: 'iqc-sip-workbench.html' },
    { id: 3, type: 'case', title: '边缘毛刺不良案例', doc_code: 'CASE-DEMO-001', rev: '1', department: '[部门]', status: 'ACTIVE', created_by: '[姓名]', summary: '冲切毛刺导致外壳刮伤。', tags: '案例,毛刺', url: '' },
    { id: 4, type: 'manual', title: '检验员现场核对操作说明', doc_code: 'MAN-DEMO-001', rev: 'A', department: '[部门]', status: 'ACTIVE', created_by: '[姓名]', summary: '如何在演示包中走完核对路径。', tags: '说明', url: 'iqc-check.html' },
    { id: 5, type: 'attribution', title: '孔距超差归因示例', doc_code: 'ATT-DEMO-001', rev: '1', department: '[部门]', status: 'ACTIVE', created_by: '[姓名]', summary: '夹具定位偏移导致孔距超上差。', tags: '归因', url: '' },
    { id: 6, type: 'case8d', title: '前壳装饰件色差 8D 示例', doc_code: '8D-DEMO-001', rev: '1', department: '[部门]', status: 'ACTIVE', created_by: '[姓名]', summary: '演示 8D 结构，不含真实客户信息。', tags: '8D,色差', url: '' }
  ];
  var nextKid = 7;

  function knowledgeStats() {
    var by = {};
    KNOWLEDGE.forEach(function (it) {
      if (it.status === 'ACTIVE') by[it.type] = (by[it.type] || 0) + 1;
    });
    return {
      by_type: by,
      labels: { procedure: '体系程序', sip: '检验指导书 SIP', case8d: '8D 报告', case: '不良案例', attribution: '归因分析', manual: '系统操作说明' },
      total: KNOWLEDGE.filter(function (x) { return x.status === 'ACTIVE'; }).length
    };
  }

  var USERS = [
    { id: 1, username: 'demo', full_name: '[姓名]', role: 'company_admin', employee_no: 'E0001', is_active: true, last_login_at: '2026-11-27T09:00:00' },
    { id: 2, username: 'qm01', full_name: '[姓名]', role: 'quality_manager', employee_no: 'E0002', is_active: true, last_login_at: '2026-11-26T16:20:00' },
    { id: 3, username: 'qe01', full_name: '[姓名]', role: 'quality_engineer', employee_no: 'E0003', is_active: true, last_login_at: '2026-11-27T08:10:00' },
    { id: 4, username: 'insp01', full_name: '[姓名]', role: 'inspector', employee_no: 'E0004', is_active: true, last_login_at: '2026-11-27T08:40:00' },
    { id: 5, username: 'view01', full_name: '[姓名]', role: 'readonly', employee_no: 'E0005', is_active: false, last_login_at: null }
  ];
  var nextUid = 6;

  var LOGS = [
    { occurred_at: '2026-11-27T09:00:00', user_name: '[姓名]', action_type: 'auth.login', entity_type: 'session', entity_id: 1, changes: { after: { result: '演示登录' } } },
    { occurred_at: '2026-11-27T09:05:00', user_name: '[姓名]', action_type: 'iqc.task_create', entity_type: 'task', entity_id: 1, changes: { after: { task_no: 'IQCT-DEMO-001' } } },
    { occurred_at: '2026-11-26T16:40:00', user_name: '[姓名]', action_type: 'iqc.advice_approve', entity_type: 'advice', entity_id: 13, changes: { after: { status: 'APPROVED' } } },
    { occurred_at: '2026-11-26T15:12:00', user_name: '[姓名]', action_type: 'iqc.task_transition', entity_type: 'task', entity_id: 3, changes: { before: { stage: 'RECEIVED' }, after: { stage: 'SAMPLING' } } },
    { occurred_at: '2026-11-25T11:08:00', user_name: '[姓名]', action_type: 'iqc.dispatch_confirm', entity_type: 'task', entity_id: 1, changes: { after: { assignee: '检验员甲' } } },
    { occurred_at: '2026-11-25T10:22:00', user_name: '[姓名]', action_type: 'iqc.case_create', entity_type: 'case', entity_id: 1, changes: { after: { defect_type: '边缘毛刺' } } }
  ];

  var CHAT_SEQ = 1;

  function listTasks(q) {
    var items = TASKS.slice();
    if (q.stage) items = items.filter(function (t) { return t.stage === q.stage; });
    var size = parseInt(q.page_size || q.size || '50', 10) || 50;
    return { total: items.length, items: items.slice(0, size) };
  }

  function get(path) {
    var parsed = parseQuery(path);
    var p = parsed.path;
    var q = parsed.q;
    if (p === '/iqc-agent/tasks') return ok(listTasks(q));
    if (p === '/material/suppliers') return ok({ items: SUPPLIERS, total: SUPPLIERS.length });
    if (p === '/auth/me') return ok(global.DemoAuth ? global.DemoAuth.currentUser() : { username: 'demo', full_name: '[姓名]', company_name: '[公司]', company_code: 'DEMO' });
    if (p.indexOf('/ai/iqc/advice') === 0) {
      var tid = Number(q.task_id || 0);
      return ok({ items: ADVICE[tid] || adviceFor(tid) });
    }
    var mProjList = p.match(/^\/iqc-agent\/projects$/);
    if (mProjList) {
      var code = q.material_code || '';
      var items = [];
      Object.keys(PROJECTS).forEach(function (k) {
        if (!code || k === code) items.push({ id: PROJECTS[k].id, material_code: k, status: PROJECTS[k].status });
      });
      if (q.status) items = items.filter(function (x) { return x.status === q.status; });
      return ok({ items: items, total: items.length });
    }
    var mProj = p.match(/^\/iqc-agent\/projects\/(\d+)/);
    if (mProj) {
      var pid = Number(mProj[1]);
      var found = null;
      Object.keys(PROJECTS).forEach(function (k) { if (PROJECTS[k].id === pid) found = PROJECTS[k]; });
      return found ? ok(found) : fail('未找到检验项目');
    }
    if (p === '/iqc-agent/sip/list') {
      return ok({ items: SIPS.map(function (s) {
        return { sip_id: s.sip_id, sip_name: s.sip_name, drawing_no: s.drawing_no, created_at: s.created_at, source_file: s.source_file, status: s.status };
      }) });
    }
    var mSip = p.match(/^\/iqc-agent\/sip\/([^/]+)$/);
    if (mSip) {
      var s = SIPS.filter(function (x) { return x.sip_id === mSip[1]; })[0];
      return s ? ok(s) : fail('未找到 SIP');
    }
    if (p === '/knowledge/stats') return ok(knowledgeStats());
    if (p === '/knowledge') {
      var items = KNOWLEDGE.filter(function (it) { return !q.status || it.status === q.status; });
      if (q.type) items = items.filter(function (it) { return it.type === q.type; });
      if (q.keyword) {
        var kw = q.keyword.toLowerCase();
        items = items.filter(function (it) {
          return (it.title + it.doc_code + (it.summary || '') + (it.tags || '')).toLowerCase().indexOf(kw) >= 0;
        });
      }
      return ok({ items: items, total: items.length });
    }
    var mK = p.match(/^\/knowledge\/(\d+)$/);
    if (mK) {
      var kitem = KNOWLEDGE.filter(function (it) { return it.id === Number(mK[1]); })[0];
      return kitem ? ok(kitem) : fail('未找到条目');
    }
    if (p === '/admin/users') return ok(USERS);
    if (p.indexOf('/audit-logs') === 0) {
      var logs = LOGS.slice();
      if (q.action_type) logs = logs.filter(function (r) { return r.action_type === q.action_type; });
      if (q.start_date) logs = logs.filter(function (r) { return r.occurred_at.slice(0, 10) >= q.start_date; });
      if (q.end_date) logs = logs.filter(function (r) { return r.occurred_at.slice(0, 10) <= q.end_date; });
      var page = parseInt(q.page || '1', 10) || 1;
      var size = parseInt(q.size || '20', 10) || 20;
      var total = logs.length;
      var slice = logs.slice((page - 1) * size, page * size);
      return ok({ items: slice, total: total });
    }
    return fail('演示包未覆盖该路径');
  }

  function post(path, body) {
    body = body || {};
    var parsed = parseQuery(path);
    var p = parsed.path;
    if (p === '/ai/iqc/orchestrate') return ok(orchestrate(body.task_id, body.stage));
    var mAdv = p.match(/^\/iqc-agent\/advice\/(\d+)\/(approve|reject)$/);
    if (mAdv) {
      var aid = Number(mAdv[1]);
      Object.keys(ADVICE).forEach(function (tid) {
        ADVICE[tid].forEach(function (a) {
          if (a.id === aid) a.status = mAdv[2] === 'approve' ? 'APPROVED' : 'REJECTED';
        });
      });
      return ok({ ok: true, id: aid, status: mAdv[2] === 'approve' ? 'APPROVED' : 'REJECTED' });
    }
    if (p === '/iqc-agent/tasks') {
      var task = {
        id: nextTaskId++,
        task_no: 'IQCT-DEMO-' + String(100 + nextTaskId).slice(-3),
        material_code: body.material_code,
        material_name: body.material_name || '演示物料',
        po_no: body.po_no || 'PO-DEMO',
        priority: body.priority || 'NORMAL',
        stage: 'RECEIVED',
        received_qty: Number(body.received_qty || body.qty || 1),
        supplier_id: body.supplier_id || null,
        supplier_name: body.supplier_name || '',
        deadline: body.deadline || ''
      };
      TASKS.unshift(task);
      ADVICE[task.id] = adviceFor(task.id);
      return ok(task);
    }
    if (p === '/iqc-agent/cases') {
      var c = {
        id: nextCaseId++,
        material_code: body.material_code,
        supplier_id: body.supplier_id || null,
        supplier_name: body.supplier_name || '',
        defect_type: body.defect_type || body.type || '',
        defect_level: body.defect_level || body.level || 'MA',
        symptom: body.symptom || '',
        root_cause: body.root_cause || body.root || '',
        source: body.source || 'MANUAL',
        tier: 1
      };
      CASES.unshift(c);
      return ok(c);
    }
    if (p === '/iqc-agent/sip/generate') {
      var nid = 'SIP-DEMO-' + String(100 + sipSeq).slice(-3);
      sipSeq += 1;
      var rec = sipRecord(nid, 'DRAFT', '演示生成检验指导书', '[图号]', '内置示例（未解析上传文件）');
      SIPS.unshift(rec);
      return ok(rec);
    }
    var mSipAp = p.match(/^\/iqc-agent\/sip\/([^/]+)\/approve$/);
    if (mSipAp) {
      SIPS.forEach(function (s) { if (s.sip_id === mSipAp[1]) s.status = 'APPROVED'; });
      return ok({ ok: true, sip_id: mSipAp[1], status: 'APPROVED' });
    }
    var mSipSave = p.match(/^\/iqc-agent\/sip\/([^/]+)$/);
    if (mSipSave) {
      SIPS.forEach(function (s) {
        if (s.sip_id === mSipSave[1] && body.sip) {
          s.sip = body.sip;
          if (body.sip.header) {
            s.sip_name = body.sip.header.sip_name || s.sip_name;
            s.drawing_no = body.sip.header.drawing_no || s.drawing_no;
          }
        }
        if (s.sip_id === mSipSave[1] && body.header) {
          s.sip.header = Object.assign({}, s.sip.header, body.header);
          s.sip_name = s.sip.header.sip_name || s.sip_name;
          s.drawing_no = s.sip.header.drawing_no || s.drawing_no;
          if (body.groups) s.sip.groups = body.groups;
        }
      });
      return ok({ ok: true });
    }
    if (p === '/knowledge') {
      var item = {
        id: nextKid++,
        type: body.type || 'manual',
        title: body.title,
        doc_code: body.doc_code || body.code || ('KB-DEMO-' + nextKid),
        rev: body.rev || 'A',
        department: body.department || '[部门]',
        status: 'ACTIVE',
        created_by: '[姓名]',
        summary: body.summary || '',
        tags: body.tags || body.tag || '',
        url: body.url || ''
      };
      KNOWLEDGE.unshift(item);
      return ok(item);
    }
    if (p === '/knowledge/material-resolve') {
      var hit = null;
      Object.keys(PROJECTS).forEach(function (k) {
        if (k === body.material_code || k === body.code) hit = PROJECTS[k];
      });
      return ok({ ok: true, found: !!hit, material_code: body.material_code || body.code, message: hit ? '已匹配到演示物料与 SIP' : '演示包中未收录该编码，可改用内置示例编码' });
    }
    if (p === '/admin/users') {
      var u = {
        id: nextUid++,
        username: body.username,
        full_name: body.full_name,
        role: body.role || 'inspector',
        employee_no: body.employee_no || '',
        is_active: true,
        last_login_at: null
      };
      USERS.push(u);
      return ok(u);
    }
    if (p === '/ai/iqc/parse') {
      return ok({ project_id: 11, material_code: body.material_code, version: body.version || 'A', parsed: true, message: '已使用内置示例行，未解析上传内容' });
    }
    var mApprove = p.match(/^\/iqc-agent\/projects\/(\d+)\/approve$/);
    if (mApprove) return ok({ ok: true, project_id: Number(mApprove[1]), status: 'ACTIVE' });
    if (p === '/ai/async-chat/requests') {
      var rid = 'CHAT-DEMO-' + (CHAT_SEQ++);
      return ok({ request_id: rid, status: 'DONE', answer: '这是演示包的示例答复，不连接模型服务。问题已在本地记录：' + (body.question || '') });
    }
    var mChat = p.match(/^\/ai\/async-chat\/requests\/(.+)$/);
    if (mChat) {
      return ok({ request_id: mChat[1], status: 'DONE', answer: '这是演示包的示例答复，不连接模型服务。' });
    }
    return fail('演示包未覆盖该提交路径');
  }

  function put(path, body) {
    body = body || {};
    var mReset = path.match(/^\/admin\/users\/(\d+)\/reset-password$/);
    if (mReset) return ok({ ok: true, id: Number(mReset[1]), message: '演示数据，不写入服务器' });
    var mDeact = path.match(/^\/admin\/users\/(\d+)\/deactivate$/);
    if (mDeact) {
      USERS.forEach(function (u) { if (u.id === Number(mDeact[1])) u.is_active = false; });
      return ok({ ok: true });
    }
    return post(path, body);
  }

  global.DemoAPI = {
    get: get,
    post: post,
    put: put,
    excelNotice: '演示包使用内置示例行，不解析上传文件'
  };
})(window);
