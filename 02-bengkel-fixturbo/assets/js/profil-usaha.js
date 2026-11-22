/* ==========================================================================
   ⚙️ PENGATURAN INFORMASI BENGKEL & OTOMOTIF (EVEVDIGITAL ENGINE)
   Cukup ganti nilai di dalam objek ini, seluruh website langsung terupdate!
   ========================================================================== */

const PROFIL_USAHA = {
  nama: "evevbengkel",
  tagline: "Servis Cepat 15 Menit, Oli Bergaransi & Tune-Up Injeksi Terpercaya",
  deskripsi: "Bengkel motor modern dengan teknisi tersertifikasi, peralatan digital diagnostik canggih, oli 100% original bergaransi, dan gratis pengecekan 24 titik kendaraan tanpa antre lama.",
  
  temaDefault: "dark",

  whatsapp: "62895323418658",
  telepon: "0895-3234-18658",
  email: "evevdigital@gmail.com",
  pesanWABooking: "Halo evevbengkel, saya ingin booking antrean servis kendaraan...",

  alamat: "Jl. Otista Raya No. 88, Jatinegara, Jakarta Timur (Seberang SPBU)",
  jamBukaText: "Setiap Hari: 08:00 - 20:00 WIB",
  jamBukaHour: 8,
  jamTutupHour: 20,
  areaLayanan: "Servis di Bengkel (Ruang Tunggu AC & Free Coffee) & Home Service Darurat",
  linkMaps: "https://maps.google.com/?q=Otista+Jatinegara+Jakarta+Timur",

  layanan: [
    {
      nama: "Ganti Oli Express & Cek 10 Titik",
      harga: "Mulai Rp 55.000",
      durasi: "15 Menit",
      deskripsi: "Ganti oli mesin & gardan (Shell, Motul, Enduro, Yamalube) bebas antre + gratis cek tekanan ban, rantai, dan kelistrikan lampu.",
      badge: "Layanan Cepat"
    },
    {
      nama: "Tune Up Injeksi & Reset ECU OBD2",
      harga: "Rp 95.000",
      durasi: "35 Menit",
      deskripsi: "Pembersihan throttle body, infus injektor cairan khusus, kalibrasi sensor TPS, dan reset riwayat error dengan scanner OBD2.",
      badge: "Paling Laris"
    },
    {
      nama: "Paket Servis CVT Anti Gredeg",
      harga: "Rp 75.000",
      durasi: "40 Menit",
      deskripsi: "Bongkar total bak CVT, pembersihan debu sisa kampas, amplas mangkok kopling, dan pelumasan pulley dengan gemuk high-temperature.",
      badge: "Spesialis Matic"
    },
    {
      nama: "Pembersihan Karbon / Gurah Ruang Bakar",
      harga: "Rp 120.000",
      durasi: "30 Menit",
      deskripsi: "Penyuntikan cairan carbon cleaner ke ruang bakar untuk merontokkan kerak deposit piston, memulihkan kompresi, dan menghemat BBM.",
      badge: "Performa Maksimal"
    },
    {
      nama: "Servis Rem & Flushing Minyak Rem",
      harga: "Rp 50.000",
      durasi: "25 Menit",
      deskripsi: "Pembersihan kaliper dari debu jalanan, pelumasan pin caliper, cek ketebalan kampas rem, dan kuras minyak rem DOT 3/DOT 4.",
      badge: "Keamanan Utama"
    },
    {
      nama: "Overhaul Suspensi Depan & Ganti Seal",
      harga: "Rp 150.000",
      durasi: "60 Menit",
      deskripsi: "Kuras oli shock depan, penggantian seal oli & debu orisinil, takaran oli presisi untuk redaman empuk dan stabil saat menikung.",
      badge: "Kenyamanan"
    }
  ],

  daftarHarga: [
    {
      kategori: "Paket Quick Service",
      item: "Ganti Oli Mesin + Jasa + Free Cek",
      harga: "Rp 55.000 - Rp 95.000"
    },
    {
      kategori: "Paket Tune Up",
      item: "Tune Up Injeksi + Infus Injektor + Reset Scanner",
      harga: "Rp 95.000"
    },
    {
      kategori: "Paket CVT",
      item: "Servis CVT Lengkap + Hi-Temp Grease",
      harga: "Rp 75.000"
    },
    {
      kategori: "Paket Komplit",
      item: "Servis Lengkap 24 Titik + Oli + Busi Baru",
      harga: "Rp 185.000"
    }
  ]
};

// Autohidrasi DOM
document.addEventListener("DOMContentLoaded", function () {
  const p = window.PROFIL_USAHA;
  if (!p) return;

  function makeWaUrl(customText) {
    const text = customText || p.pesanWABooking;
    const cleanNum = String(p.whatsapp).replace(/\D/g, "");
    return `https://wa.me/${cleanNum}?text=${encodeURIComponent(text)}`;
  }

  // Hidrasi data-config
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    if (p[key] !== undefined) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.value = p[key];
      } else {
        el.textContent = p[key];
      }
    }
  });

  // Update Title jika belum ada
  if (p.nama && p.tagline && document.title.includes("Fixturbo")) {
    document.title = `${p.nama} | ${p.tagline}`;
  }

  // Update WhatsApp links
  document.querySelectorAll('a[href*="wa.me"], a.wa-link, .btn-wa-booking, .floating-wa-btn').forEach((a) => {
    const currentHref = a.getAttribute("href") || "";
    if (currentHref.startsWith("#") && currentHref.length > 1) return;

    a.href = makeWaUrl();
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
  });

  // Intercept Booking Form
  const bookingForms = document.querySelectorAll("form.appointment-form, form#appointment-form, form[action*='mail.php'], form.booking-form");
  bookingForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nama = form.querySelector('input[name="name"], input#name, input[placeholder*="Name"], input[placeholder*="Nama"]')?.value || "Pelanggan";
      const telp = form.querySelector('input[name="phone"], input#phone, input[type="tel"], input[placeholder*="Phone"], input[placeholder*="WhatsApp"]')?.value || "-";
      const kendaraan = form.querySelector('input[name="vehicle"], input#vehicle, select[name="vehicle"], input[placeholder*="Kendaraan"], input[placeholder*="Vehicle"]')?.value || "Motor / Mobil";
      const plat = form.querySelector('input[name="plat"], input#plat, input[placeholder*="Plat"]')?.value || "-";
      const service = form.querySelector('select[name="service"], select#service, select')?.value || "Servis Berkala";
      const date = form.querySelector('input[name="date"], input#date, input[type="date"]')?.value || "Hari ini";
      const time = form.querySelector('input[name="time"], select[name="time"], input[type="time"]')?.value || "10:00";
      const catatan = form.querySelector('textarea[name="message"], textarea#message, textarea')?.value || "-";

      let waMessage = `*BOOKING ANTREAN BENGKEL*\n\n`;
      waMessage += `Halo ${p.nama}, saya ingin reservasi servis kendaraan:\n\n`;
      waMessage += `👤 *Nama:* ${nama}\n`;
      waMessage += `📱 *No HP:* ${telp}\n`;
      waMessage += `🛵 *Kendaraan:* ${kendaraan} (Plat: ${plat})\n`;
      waMessage += `🔧 *Layanan:* ${service}\n`;
      waMessage += `📅 *Tanggal:* ${date}\n`;
      waMessage += `⏰ *Jam:* ${time} WIB\n`;
      if (catatan && catatan !== "-") {
        waMessage += `📝 *Keluhan/Catatan:* ${catatan}\n`;
      }
      waMessage += `\nMohon konfirmasi ketersediaan slot pit servis. Terima kasih!`;

      window.open(makeWaUrl(waMessage), "_blank");
    });
  });

  console.log(`[EvEvDigital Engine] Auto-hydration complete for ${p.nama}!`);
});
