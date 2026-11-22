/* ==========================================================================
   🌓 EvEvDigital Theme Switcher Logic (Dark & Light Mode for Cuci Steam)
   ========================================================================== */

(function () {
  const STORAGE_KEY = 'evev_theme_cucisteam';
  
  const SUN_ICON = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  `;

  const MOON_ICON = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  `;

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    if (window.PROFIL_USAHA && window.PROFIL_USAHA.temaDefault) {
      return window.PROFIL_USAHA.temaDefault;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light'; // Clean fresh car wash looks great in crisp Light mode by default
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      if (theme === 'dark') {
        btn.innerHTML = SUN_ICON;
        btn.setAttribute('title', 'Beralih ke Mode Terang (Light Mode)');
        btn.setAttribute('aria-label', 'Beralih ke Mode Terang');
      } else {
        btn.innerHTML = MOON_ICON;
        btn.setAttribute('title', 'Beralih ke Mode Gelap (Dark Mode)');
        btn.setAttribute('aria-label', 'Beralih ke Mode Gelap');
      }
    });
  }

  window.toggleTheme = function () {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  };

  // Immediate execution before render
  const initialTheme = getPreferredTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(getPreferredTheme());

    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        window.toggleTheme();
      });
    });
  });
})();
