(function() {
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.nav-item');
  if (!sections.length || !navLinks.length) return;

  const navMap = {};
  navLinks.forEach(a => {
    const id = a.getAttribute('href')?.replace('#', '');
    if (id) navMap[id] = a;
  });

  const obs = new IntersectionObserver(entries => {
    let best = null, bestRatio = 0;
    entries.forEach(e => {
      if (e.intersectionRatio > bestRatio) { best = e.target.id; bestRatio = e.intersectionRatio; }
    });
    navLinks.forEach(a => a.classList.remove('active'));
    if (best && navMap[best]) navMap[best].classList.add('active');
  }, { threshold: [0, 0.25, 0.5, 0.75, 1] });

  sections.forEach(s => obs.observe(s));
})();
