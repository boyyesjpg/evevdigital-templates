/**
 * EvEvDigital Dual Theme Toggle Script
 */
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('evev_theme') || 'light';

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateToggleIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      let theme = document.documentElement.getAttribute('data-theme');
      let newTheme = theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('evev_theme', newTheme);
      updateToggleIcon(newTheme);
    });
  }

  function updateToggleIcon(theme) {
    if (!toggleBtn) return;
    const icon = toggleBtn.querySelector('i');
    if (icon) {
      if (theme === 'dark') {
        icon.className = 'fas fa-sun';
        toggleBtn.title = 'Ganti ke Mode Terang';
      } else {
        icon.className = 'fas fa-moon';
        toggleBtn.title = 'Ganti ke Mode Gelap';
      }
    }
  }
});
