/**
 * EvEvDigital Auto-Hydration & WhatsApp Engine
 * Sektor 08: Penjahit & Konveksi (evevtayler)
 */

const PROFIL_USAHA = {
  nama: "evevtayler",
  tagline: "Jasa Jahit Busana, Vermak Express & Konveksi Seragam Terpercaya",
  whatsapp: "62895323418658",
  telepon: "0895-3234-18658",
  email: "kontak@evevdigital.com",
  alamat: "Jl. Otista Raya No. 88, Jatinegara, Jakarta Timur",
  jamOperasional: "Buka Setiap Hari: 08:00 - 21:00 WIB",
  areaLayanan: "Melayani jahit busana kustom, vermak pakaian kilat & konveksi seragam seluruh Indonesia",
  copyright: "© 2026 evevtayler. Hak Cipta Dilindungi.",
  powered: "EvEvDigital",
  layanan: [
    { nama: "Vermak Kilat & Potong Celana", harga: "Mulai Rp 15.000", pengerjaan: "15 - 30 Menit" },
    { nama: "Kecilkan Pinggang / Paha", harga: "Mulai Rp 25.000", pengerjaan: "Bisa Ditunggu" },
    { nama: "Ganti Resleting YKK Original", harga: "Mulai Rp 20.000", pengerjaan: "30 Menit" },
    { nama: "Jahit Jas Pria & Blazer Bespoke", harga: "Mulai Rp 350.000", pengerjaan: "5 - 7 Hari" },
    { nama: "Jahit Kebaya Modern & Gaun Pesta", harga: "Mulai Rp 250.000", pengerjaan: "3 - 5 Hari" },
    { nama: "Konveksi Seragam Kerja & Komunitas", harga: "Mulai Rp 75.000 / pcs", pengerjaan: "Sesuai Qty" }
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

  // 2. Intercept forms to route directly to WhatsApp with active UX feedback
  document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var searchInput = form.querySelector('input[type="search"], input[name="search-input"]');
      if (searchInput && searchInput.value.trim() !== '') {
        var query = searchInput.value.trim();
        var waMsg = "Halo evevtayler, saya ingin menanyakan layanan/busana: *" + query + "*. Apakah tersedia?";
        var searchPopup = document.querySelector('.search-popup');
        if (searchPopup) {
          searchPopup.classList.remove('popup-visible');
        }
        window.open("https://wa.me/" + PROFIL_USAHA.whatsapp + "?text=" + encodeURIComponent(waMsg), '_blank');
        return;
      }
      var inputs = form.querySelectorAll('input, textarea, select');
      var pesan = "Halo evevtayler, saya ingin konsultasi/order jahit & vermak pakaian:\n";
      inputs.forEach(function (input) {
        var name = input.name || input.placeholder || 'Item';
        var val = input.value;
        if (val && input.type !== 'submit' && input.type !== 'button') {
          pesan += "- " + name + ": " + val + "\n";
        }
      });
      var waUrl = "https://wa.me/" + PROFIL_USAHA.whatsapp + "?text=" + encodeURIComponent(pesan);
      window.open(waUrl, '_blank');
    });
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
  
  // Auto-hydration complete
});
