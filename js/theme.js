(function() {
  const KEY = 'edu-site-theme';
  function apply(saved) {
    if (saved === 'light' || (!saved && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }
  apply(localStorage.getItem(KEY));

  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const isLight = document.documentElement.classList.toggle('light');
      localStorage.setItem(KEY, isLight ? 'light' : 'dark');
    });
  }
})();
