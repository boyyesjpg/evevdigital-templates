/**
 * EvEvDigital Auto-Hydration & WhatsApp Engine
 * Sektor 06: Warung Sembako & Minimarket Modern (evevsembako)
 */

const PROFIL_USAHA = {
  nama: "evevsembako",
  tagline: "Grosir & Eceran Sembako Murah, Lengkap & Siap Antar ke Rumah",
  deskripsi: "Pusat belanja kebutuhan pokok keluarga terlengkap: beras premium, minyak goreng, telur ayam segar, gula pasir, mie instan, tepung terigu, gas elpiji 3kg, galon air, dan kebutuhan harian rumah tangga dengan harga grosir hemat di Jakarta Timur.",
  whatsapp: "62895323418658",
  telepon: "0895-3234-18658",
  email: "evevdigital@gmail.com",
  alamat: "Jl. Otista Raya No. 88, Jatinegara, Jakarta Timur",
  jamOperasional: "Buka Setiap Hari: 06:00 - 22:00 WIB",
  areaDelivery: "Layanan Antar Bebas Ongkir radius 3 km (Min. belanja Rp 50.000)",
  kategori: [
    { nama: "Beras Premium & Ramos", deskripsi: "Beras Pandan Wangi, Setra Ramos, Rojolele, Beras Merah (5kg, 10kg, 25kg & literan)" },
    { nama: "Minyak Goreng & Margarin", deskripsi: "Minyak Bimoli, Tropical, Filma, Sania, Minyakita 1L & 2L pouch" },
    { nama: "Telur Ayam & Protein Segar", deskripsi: "Telur Ayam Ras Fresh Peternak Grade A, Telur Bebek, Telur Puyuh" },
    { nama: "Gula Pasir & Tepung Terigu", deskripsi: "Gulaku, Rose Brand, Segitiga Biru, Cakra Kembar, Tapioka, Maizena" },
    { nama: "Mie Instan & Bumbu Dapur", deskripsi: "Indomie aneka rasa, kecap manis Bango, saus sambal, santan Kara, bumbu racik" },
    { nama: "Gas LPG & Galon Air", deskripsi: "Gas Elpiji 3kg Melon, Bright Gas 5.5kg/12kg, Aqua Galon, Le Minerale" }
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
          var pesan = "*ORDER BELANJA SEMBAKO - EVEVSEMBAKO*\n\n";
          pesan += "Halo evevsembako, saya ingin pesan kebutuhan belanja:\n";
          inputs.forEach(function (input) {
            var name = input.name || input.placeholder || 'Item';
            var val = input.value;
            if (val && input.type !== 'submit' && input.type !== 'button') {
              pesan += "- " + name + ": " + val + "\n";
            }
          });
          pesan += "\nMohon konfirmasi ketersediaan stok & total belanja. Terima kasih!";
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

  console.log(`[EvEvDigital Engine] Auto-hydration complete for ${PROFIL_USAHA.nama}!`);
});
