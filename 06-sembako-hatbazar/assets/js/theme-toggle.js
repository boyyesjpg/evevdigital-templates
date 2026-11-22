/**
 * EvEvDigital Dual Theme Toggle Engine (Dark / Light Mode)
 * Sektor 06: Warung Sembako & Minimarket
 */

(function () {
  'use strict';

  var THEME_KEY = 'evevdigital_theme_preference';

  function getPreferredTheme() {
    var stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (document.body) {
      document.body.setAttribute('data-theme', theme);
    }
    localStorage.setItem(THEME_KEY, theme);
    updateButtons(theme);
  }

  function updateButtons(theme) {
    var buttons = document.querySelectorAll('#theme-toggle, .theme-toggle-btn');
    buttons.forEach(function (btn) {
      if (theme === 'dark') {
        btn.innerHTML = '<i class="fas fa-sun"></i>';
        btn.setAttribute('title', 'Ganti ke Mode Terang (Light Mode)');
        btn.setAttribute('aria-label', 'Ganti ke Mode Terang');
      } else {
        btn.innerHTML = '<i class="fas fa-moon"></i>';
        btn.setAttribute('title', 'Ganti ke Mode Gelap (Dark Mode)');
        btn.setAttribute('aria-label', 'Ganti ke Mode Gelap');
      }
    });
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  }

  // Init theme before DOM fully loads to prevent flash of wrong theme
  var initTheme = getPreferredTheme();
  document.documentElement.setAttribute('data-theme', initTheme);

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
