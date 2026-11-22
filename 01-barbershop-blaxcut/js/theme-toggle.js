/**
 * EvEvDigital Dual Theme Toggle Engine for Blaxcut Barbershop
 */

(function () {
  'use strict';

  var THEME_KEY = 'evevdigital_blaxcut_theme';

  function getPreferredTheme() {
    var stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return 'dark'; // Barbershop default dark
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      document.body.classList.remove('dark-scheme');
      document.body.classList.add('light-scheme');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.body.classList.remove('light-scheme');
      document.body.classList.add('dark-scheme');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    localStorage.setItem(THEME_KEY, theme);
    updateButtons(theme);
  }

  function updateButtons(theme) {
    var buttons = document.querySelectorAll('#theme-toggle, .theme-toggle-btn');
    buttons.forEach(function (btn) {
      if (theme === 'light') {
        btn.innerHTML = '<i class="fa fa-moon-o"></i>';
        btn.setAttribute('title', 'Ganti ke Mode Gelap (Dark Mode)');
        btn.setAttribute('aria-label', 'Ganti ke Mode Gelap');
      } else {
        btn.innerHTML = '<i class="fa fa-sun-o"></i>';
        btn.setAttribute('title', 'Ganti ke Mode Terang (Light Mode)');
        btn.setAttribute('aria-label', 'Ganti ke Mode Terang');
      }
    });
  }

  function toggleTheme() {
    var isLight = document.body.classList.contains('light-scheme');
    var next = isLight ? 'dark' : 'light';
    applyTheme(next);
  }

  var initTheme = getPreferredTheme();

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(initTheme);

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('#theme-toggle, .theme-toggle-btn');
      if (btn) {
        e.preventDefault();
        toggleTheme();
      }
    });
  });
})();
