(function() {
  var btn = document.getElementById('lang-toggle');
  if (!btn) return;

  btn.addEventListener('click', function() {
    var p = location.pathname;
    var enIdx = p.indexOf('/en/');
    var arIdx = p.indexOf('/ar/');
    if (arIdx !== -1) {
      location.href = p.slice(0, arIdx) + '/en/' + p.slice(arIdx + 4);
    } else if (enIdx !== -1) {
      location.href = p.slice(0, enIdx) + '/ar/' + p.slice(enIdx + 4);
    }
  });
})();
