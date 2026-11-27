/* 演示包本地身份：不请求任何接口。file:// 跳过登录门；http(s) 无令牌则回 login.html */
(function (global) {
  var DEMO_TOKEN = 'demo-static-token';
  var DEMO_USER = {
    username: 'demo',
    full_name: '[姓名]',
    role: 'quality_engineer',
    company_code: 'DEMO',
    company_name: '[公司]',
    employee_no: 'E0001'
  };

  function isFileProtocol() {
    return location.protocol === 'file:';
  }

  function requireDemoAuth() {
    if (isFileProtocol()) return true;
    var tok = localStorage.getItem('iqc_token');
    if (!tok) {
      location.href = 'login.html';
      return false;
    }
    return true;
  }

  function currentUser() {
    try {
      var u = JSON.parse(localStorage.getItem('qms_user') || '{}');
      if (u && (u.username || u.full_name)) return u;
    } catch (e) { /* 用演示身份 */ }
    return DEMO_USER;
  }

  function logout() {
    localStorage.removeItem('iqc_token');
    localStorage.removeItem('qms_user');
    location.href = 'login.html';
  }

  function writeSession(user) {
    localStorage.setItem('iqc_token', DEMO_TOKEN);
    localStorage.setItem('qms_user', JSON.stringify(user || DEMO_USER));
  }

  global.DemoAuth = {
    isFileProtocol: isFileProtocol,
    requireDemoAuth: requireDemoAuth,
    currentUser: currentUser,
    logout: logout,
    writeSession: writeSession,
    DEMO_TOKEN: DEMO_TOKEN,
    DEMO_USER: DEMO_USER
  };
})(window);
