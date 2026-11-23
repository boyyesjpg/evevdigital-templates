/**
 * EvEvDigital Auto-Hydration & WhatsApp Engine
 * Sektor 09: Depot Air Minum Isi Ulang & Galon Delivery (evevdepot)
 */

const PROFIL_USAHA = {
  nama: "evevdepot",
  tagline: "Depot Air Minum Isi Ulang Higienis & Pesan Antar Galon Cepat",
  whatsapp: "62895323418658",
  telepon: "0895-3234-18658",
  email: "kontak@evevdigital.com",
  alamat: "Jl. Otista Raya No. 88, Jatinegara, Jakarta Timur",
  jamOperasional: "Buka Setiap Hari: 06:30 - 21:30 WIB",
  areaLayanan: "Melayani pesan antar galon air ke rumah tangga, perumahan, ruko, dan perkantoran",
  copyright: "© 2026 evevdepot. Hak Cipta Dilindungi.",
  powered: "EvEvDigital",
  layanan: [
    { nama: "Air Galon RO (Reverse Osmosis)", harga: "Rp 8.000", kemasan: "Galon 19 Liter" },
    { nama: "Air Galon Mineral Alami Segar", harga: "Rp 6.000", kemasan: "Galon 19 Liter" },
    { nama: "Air Galon Terapi Alkali pH 8.5+", harga: "Rp 12.000", kemasan: "Galon 19 Liter" },
    { nama: "Paket Langganan Galon Kantor", harga: "Mulai Rp 150.000 / bln", kemasan: "Free Dispenser" },
    { nama: "Pembersihan & Cuci Galon Ozon", harga: "Gratis Setiap Isi Ulang", kemasan: "Sterilisasi UV" },
    { nama: "Paket Kupon Hemat (Beli 10 Gratis 1)", harga: "Rp 70.000", kemasan: "11 Kupon Galon" }
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

  // 2. Intercept forms to route directly to WhatsApp (exclude search & #contact-form handled by validate)
  document.querySelectorAll('form').forEach(function (form) {
    if (form.classList.contains('search-form') || form.querySelector('input[type="search"]')) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var searchInput = form.querySelector('input[type="search"]');
        var query = searchInput ? searchInput.value.trim() : '';
        var targetSection = document.getElementById('produk') || document.getElementById('layanan');
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        var info = form.querySelector('.search-feedback');
        if (!info) {
          info = document.createElement('div');
          info.className = 'search-feedback text-success';
          info.style.fontSize = '12px';
          info.style.marginTop = '6px';
          form.appendChild(info);
        }
        info.textContent = query ? 'Menampilkan hasil untuk: "' + query + '"' : 'Menampilkan daftar produk & layanan...';
        setTimeout(function () { if (info && info.parentNode) info.parentNode.removeChild(info); }, 3500);
      });
    } else if (form.id !== 'contact-form' && (form.classList.contains('wa-form') || form.id === 'wa-order-form' || form.action.indexOf('search') === -1)) {
      form.addEventListener('submit', function (e) {
        var action = form.getAttribute('action') || '';
        if (action.indexOf('.php') !== -1 || action.indexOf('#') !== -1 || action === '' || form.classList.contains('wa-order-form')) {
          e.preventDefault();
          var inputs = form.querySelectorAll('input, textarea, select');
          var pesan = "Halo evevdepot, saya ingin memesan/isi ulang air galon:\n";
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
  
  // auto-hydration complete
});
