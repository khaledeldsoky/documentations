(function(){
  var DEFAULTS = {
    VCENTER_IP: '<VCENTER_IP>',
    VCENTER_USER: '<VCENTER_USER>',
    VCENTER_PASSWORD: '<VCENTER_PASSWORD>',
    DATACENTER: '<DATACENTER>',
    CLUSTER: '<CLUSTER>',
    DATASTORE: '<DATASTORE>',
    NETWORK: '<NETWORK>',
    VM_FOLDER: '<VM_FOLDER>',
    CENTOS_ISO: '<CENTOS_ISO>',
    GATEWAY: '<GATEWAY>',
    SUBNET_MASK: '<SUBNET_MASK>',
    DNS1: '<DNS1>',
    DNS2: '<DNS2>',
    DOMAIN: '<DOMAIN>',
    CLUSTER_NAME: '<CLUSTER_NAME>',
    BASE_DOMAIN: '<BASE_DOMAIN>',
    NFS_HAPROXY_IP: '<NFS_HAPROXY_IP>',
    API_IP: '<API_IP>',
    APPS_IP: '<APPS_IP>',
    BOOTSTRAP_IP: '<BOOTSTRAP_IP>',
    MASTER_0_IP: '<MASTER_0_IP>',
    MASTER_1_IP: '<MASTER_1_IP>',
    MASTER_2_IP: '<MASTER_2_IP>',
    WORKER_0_IP: '<WORKER_0_IP>',
    WORKER_1_IP: '<WORKER_1_IP>',
    WSL_IP: '<WSL_IP>',
    NFS_HAPROXY_USER: '<NFS_HAPROXY_USER>',
    SSH_KEY_PATH: '<SSH_KEY_PATH>',
    OCP_ADMIN_PASS: '<OCP_ADMIN_PASS>',
    PULL_SECRET: '<PULL_SECRET>',
    OCP4_DIR: '<OCP4_DIR>',
    NFS_EXPORT: '<NFS_EXPORT>',
    SSH_KEY: '<SSH_KEY>'
  };

  var STORAGE_KEY = 'ocp4_variables';

  function loadVars() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        var parsed = JSON.parse(saved);
        for (var k in DEFAULTS) {
          if (parsed[k] === undefined) parsed[k] = DEFAULTS[k];
        }
        return parsed;
      }
    } catch(e) {}
    return JSON.parse(JSON.stringify(DEFAULTS));
  }

  function saveVars(vars) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(vars));
    } catch(e) {}
  }

  function applyVars(vars) {
    var spans = document.querySelectorAll('[data-var]');
    for (var i = 0; i < spans.length; i++) {
      var el = spans[i];
      var key = el.getAttribute('data-var');
      if (vars[key] !== undefined) {
        el.textContent = vars[key];
      }
    }
  }

  function initTable(vars) {
    var section = document.getElementById('variables');
    if (!section) return;
    var table = section.querySelector('table.info-table');
    if (!table) return;
    var rows = table.querySelectorAll('tbody tr');
    for (var i = 0; i < rows.length; i++) {
      var cells = rows[i].querySelectorAll('td');
      if (cells.length < 2) continue;
      var codeIdx = cells.length === 3 ? 1 : 0;
      var valIdx  = cells.length === 3 ? 2 : 1;
      var varName = cells[codeIdx].textContent.trim();
      if (!vars[varName]) continue;
      var valCell = cells[valIdx];
      var input = document.createElement('input');
      input.type = 'text';
      input.className = 'var-input';
      input.setAttribute('data-var', varName);
      input.value = vars[varName];
      input.addEventListener('input', (function(name){
        return function(){
          vars[name] = this.value;
          saveVars(vars);
          applyVars(vars);
        };
      })(varName));
      valCell.textContent = '';
      valCell.appendChild(input);
    }
  }

  function init() {
    var vars = loadVars();
    applyVars(vars);
    initTable(vars);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
