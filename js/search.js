// Search — placeholder for future client-side search (fuse.js / lunr.js)
(function() {
  const input = document.getElementById('search-input');
  if (!input) return;

  input.addEventListener('input', function() {
    const q = this.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.course-card');
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = (!q || text.includes(q)) ? '' : 'none';
    });
  });
})();
