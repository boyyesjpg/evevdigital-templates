/**
 * EvEvDigital Auto-Hydration & WhatsApp Engine
 * Sektor 07: Toko Frozen Food & Makanan Beku (evevfrozen)
 */

const PROFIL_USAHA = {
  nama: "evevfrozen",
  tagline: "Toko Frozen Food & Distributor Makanan Beku Halal Terpercaya",
  whatsapp: "62895323418658",
  telepon: "0895-3234-18658",
  email: "kontak@evevdigital.com",
  alamat: "Jl. Otista Raya No. 88, Jatinegara, Jakarta Timur",
  jamOperasional: "Buka Setiap Hari: 07:00 - 21:00 WIB",
  areaLayanan: "Melayani belanja langsung di toko & pesan antar instan / sameday ber-cooler box",
  copyright: "© 2026 evevfrozen. Hak Cipta Dilindungi.",
  powered: "EvEvDigital",
  layanan: [
    { nama: "Aneka Nugget, Sosis & Camilan", harga: "Mulai Rp 18.000", kemasan: "Pack 500g / 1kg" },
    { nama: "Daging Sapi Slice Shabu / Yakiniku", harga: "Mulai Rp 45.000", kemasan: "Tray 500g" },
    { nama: "Dimsum Siomay & Hakau Halal", harga: "Mulai Rp 32.000", kemasan: "Pack isi 10/20" },
    { nama: "Frozen Seafood Udang & Salmon", harga: "Mulai Rp 38.000", kemasan: "Vakum Pack" },
    { nama: "Bakso Sapi Urat & Tahu Bakso", harga: "Mulai Rp 28.000", kemasan: "Pack isi 25/50" },
    { nama: "Paket Grosir Reseller & Horeka", harga: "Mulai Rp 500.000", kemasan: "Karton / Dus" }
  ]
};

document.addEventListener('DOMContentLoaded', function () {
  // 1. Auto-Hydrate elements with data-config
  document.querySelectorAll('[data-config]').forEach(function (el) {
    var key = el.getAttribute('data-config');
    if (PROFIL_USAHA[key]) {
      el.textContent = PROFIL_USAHA[key];
    }
  });

  // 2. Intercept forms to route directly to WhatsApp
  document.querySelectorAll('form').forEach(function (form) {
    if (form.classList.contains('wa-form') || form.id === 'wa-order-form' || form.action.indexOf('search') === -1) {
      form.addEventListener('submit', function (e) {
        var action = form.getAttribute('action') || '';
        if (action.indexOf('.php') !== -1 || action.indexOf('#') !== -1 || action === '' || form.classList.contains('wa-order-form')) {
          e.preventDefault();
          var inputs = form.querySelectorAll('input, textarea, select');
          var pesan = "Halo evevfrozen, saya ingin memesan produk frozen food:\n";
          inputs.forEach(function (input) {
            var name = input.name || input.placeholder || 'Item';
            var val = input.value;
            if (val && input.type !== 'submit' && input.type !== 'button') {
              pesan += "- " + name + ": " + val + "\n";
            }
          });
          var waUrl = "https://wa.me/" + PROFIL_USAHA.whatsapp + "?text=" + encodeURIComponent(pesan);
          window.open(waUrl, '_blank');
        }
      });
    }
  });

  // 3. Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        var targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
  
  console.log('[EvEvDigital Engine] Auto-hydration complete for evevfrozen!');
});
