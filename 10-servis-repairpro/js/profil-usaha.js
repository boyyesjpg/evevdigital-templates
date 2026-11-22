/**
 * EvEvDigital Auto-Hydration & WhatsApp Engine
 * Sektor 10: Konter Pulsa, Aksesoris & Servis HP/Gadget (evevservis)
 */

const PROFIL_USAHA = {
  nama: "evevservis",
  tagline: "Pusat Servis HP Kilat Bergaransi, Aksesoris Terlengkap & Agen Pulsa/PPOB Murah",
  whatsapp: "62895323418658",
  telepon: "0895-3234-18658",
  email: "kontak@evevdigital.com",
  alamat: "Jl. Fatmawati Raya No. 45, Cilandak, Jakarta Selatan",
  jamOperasional: "Buka Setiap Hari: 09:00 - 21:00 WIB",
  areaLayanan: "Melayani servis HP langsung tunggu di toko, antar-jemput kurir se-Jabodetabek, dan transaksi pulsa/kuota 24 jam",
  copyright: "© 2026 evevservis. Hak Cipta Dilindungi.",
  powered: "EvEvDigital",
  layanan: [
    { nama: "Ganti Layar LCD AMOLED / Incell", harga: "Mulai Rp 250.000", pengerjaan: "30 - 45 Menit", garansi: "Garansi 90 Hari" },
    { nama: "Ganti Baterai Health 100% Original", harga: "Mulai Rp 150.000", pengerjaan: "20 Menit", garansi: "Garansi 90 Hari" },
    { nama: "Servis Mesin Mati Total & IC Charging", harga: "Mulai Rp 180.000", pengerjaan: "1 - 2 Hari", garansi: "Garansi 60 Hari" },
    { nama: "Pulsa Reguler, Data Kuota & PPOB", harga: "Harga Agen Termurah", pengerjaan: "Instan 5 Detik", garansi: "Semua Operator" },
    { nama: "Pasang Anti-Gores Hydrogel Cutting", harga: "Rp 35.000 - Rp 50.000", pengerjaan: "5 Menit Presisi", garansi: "Bebas Gelembung" },
    { nama: "Aksesoris TWS, Charger GaN & Case", harga: "Mulai Rp 25.000", pengerjaan: "Ready Stock", garansi: "Produk Berkualitas" }
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
          var pesan = "Halo evevservis, saya ingin konsultasi servis HP / beli aksesoris / isi pulsa:\n";
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
  
  console.log('[EvEvDigital Engine] Auto-hydration complete for evevservis!');
});
