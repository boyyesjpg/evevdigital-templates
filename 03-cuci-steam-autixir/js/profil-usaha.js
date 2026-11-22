/* ==========================================================================
   ⚙️ PENGATURAN INFORMASI CUCI STEAM & DETAILING (EVEVDIGITAL ENGINE)
   Cukup ganti nilai di dalam objek ini, seluruh website langsung terupdate!
   ========================================================================== */

const PROFIL_USAHA = {
  nama: "evevsteam",
  tagline: "Cuci Steam Hidrolik & Detailing Mobil-Motor Bebas Baret",
  deskripsi: "Pusat cuci steam hidrolik mobil dan motor dengan shampoo salju pH balance, semprotan bertekanan tinggi 150 bar, vacuum interior mendalam, poles kaca, nano ceramic coating, dan teknisi terlatih.",
  
  temaDefault: "light",

  whatsapp: "62895323418658",
  telepon: "0895-3234-18658",
  email: "evevdigital@gmail.com",
  pesanWABooking: "Halo evevsteam, saya ingin booking antrean cuci steam / detailing...",

  alamat: "Jl. Otista Raya No. 88, Jatinegara, Jakarta Timur",
  jamBukaText: "Setiap Hari: 07:30 - 21:00 WIB",
  jamBukaHour: 7,
  jamTutupHour: 21,
  areaLayanan: "Layanan di Tempat (Pit Hidrolik H-Track) & Antar-Jemput Kendaraan",
  linkMaps: "https://maps.google.com/?q=Jatinegara+Jakarta+Timur",

  layanan: [
    {
      nama: "Cuci Steam Hidrolik Mobil Komplit",
      harga: "Mulai Rp 50.000",
      durasi: "35 Menit",
      deskripsi: "Angkat hidrolik H-Track, semprot kolong lumpur/pasir bertekanan 150 bar, snow wash pH netral, vacuum interior & bagasi, semir ban silikon mengkilap, dan parfum kabin segar.",
      badge: "Paling Favorit"
    },
    {
      nama: "Cuci Steam Motor Express & Semir Ban",
      harga: "Mulai Rp 18.000",
      durasi: "15 Menit",
      deskripsi: "Cuci steam motor bebek, matic, hingga moge sport. Membersihkan sela-sela mesin dari oli dan debu, lap microfiber anti swirl, dan semir ban basah tahan 5 hari.",
      badge: "Cepat & Bersih"
    },
    {
      nama: "Paket Snow Wash + Jamur Kaca + Waxing",
      harga: "Rp 120.000",
      durasi: "60 Menit",
      deskripsi: "Cuci hidrolik komplit ditambah pembersihan jamur kaca depan/samping agar pandangan malam terang + aplikasi spray wax carnauba untuk kilau basah (wet look).",
      badge: "Paket Perawatan"
    },
    {
      nama: "Interior Deep Cleaning & Cuci Jok",
      harga: "Rp 350.000",
      durasi: "120 Menit",
      deskripsi: "Ekstraksi basah jok mobil, pembersihan plafon berdebu, karpet dasar, sela dashboard, dan fogging disinfektan pembunuh bakteri serta bau apek.",
      badge: "Higienis Total"
    },
    {
      nama: "Engine Bay Detailing (Ruang Mesin)",
      harga: "Rp 150.000",
      durasi: "45 Menit",
      deskripsi: "Pembersihan aman ruang mesin mobil dari kerak oli menggunakan degreaser water-based khusus tanpa merusak sensor kelistrikan, diakhiri dressing plastik mesin.",
      badge: "Ruang Mesin Kinclong"
    },
    {
      nama: "Nano Ceramic Coating 9H / Detailing",
      harga: "Mulai Rp 1.500.000",
      durasi: "1-2 Hari",
      deskripsi: "Paint correction 3 tahap menghilangkan baret halus (swirl mark), dilanjutkan pelapisan nano ceramic coating 9H dengan efek daun talas (hydrophobic) bergaransi resmi.",
      badge: "Proteksi Sultan"
    }
  ],

  daftarHarga: [
    {
      kategori: "Cuci Motor",
      item: "Motor Bebek / Matic Kecil (Beat, Mio, Scoopy)",
      harga: "Rp 18.000"
    },
    {
      kategori: "Cuci Motor",
      item: "Motor Matic Besar / Sport (NMAX, PCX, CBR, Ninja)",
      harga: "Rp 28.000"
    },
    {
      kategori: "Cuci Mobil Hidrolik",
      item: "Mobil City Car / Small (Brio, Agya, Yaris, Raize)",
      harga: "Rp 50.000"
    },
    {
      kategori: "Cuci Mobil Hidrolik",
      item: "Mobil Medium / MPV (Avanza, Xpander, Ertiga)",
      harga: "Rp 55.000"
    },
    {
      kategori: "Cuci Mobil Hidrolik",
      item: "Mobil Besar / SUV (Innova, Fortuner, Pajero)",
      harga: "Rp 65.000"
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

  // Update Title
  if (p.nama && p.tagline && document.title.includes("Autixir")) {
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
  const bookingForms = document.querySelectorAll("form.appointment-form, form#appointment-form, form.ltn__car-dealer-form, form[action*='mail.php'], .ltn__appointment-inner form");
  bookingForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nama = form.querySelector('input[name="name"], input[name="ltn__name"], input#name, input[placeholder*="Name"], input[placeholder*="Nama"]')?.value || "Pelanggan";
      const telp = form.querySelector('input[name="phone"], input[name="ltn__phone"], input#phone, input[type="tel"], input[placeholder*="Phone"], input[placeholder*="WhatsApp"]')?.value || "-";
      const kendaraan = form.querySelector('input[name="vehicle"], input#vehicle, select[name="vehicle"], input[placeholder*="Kendaraan"], input[placeholder*="Vehicle"]')?.value || "Mobil / Motor";
      const plat = form.querySelector('input[name="plat"], input#plat, input[placeholder*="Plat"]')?.value || "-";
      const service = form.querySelector('select[name="service"], select#service, select')?.value || "Cuci Steam Hidrolik";
      const date = form.querySelector('input[name="date"], input#date, input[type="date"]')?.value || "Hari ini";
      const time = form.querySelector('input[name="time"], select[name="time"], input[type="time"]')?.value || "10:00";
      const catatan = form.querySelector('textarea[name="message"], textarea#message, textarea')?.value || "-";

      let waMessage = `*BOOKING CUCI STEAM & DETAILING*\n\n`;
      waMessage += `Halo ${p.nama}, saya ingin reservasi cuci kendaraan:\n\n`;
      waMessage += `👤 *Nama:* ${nama}\n`;
      waMessage += `📱 *No HP:* ${telp}\n`;
      waMessage += `🚗 *Kendaraan:* ${kendaraan} (Plat: ${plat})\n`;
      waMessage += `🚿 *Paket Layanan:* ${service}\n`;
      waMessage += `📅 *Tanggal:* ${date}\n`;
      waMessage += `⏰ *Jam:* ${time} WIB\n`;
      if (catatan && catatan !== "-") {
        waMessage += `📝 *Catatan Khusus:* ${catatan}\n`;
      }
      waMessage += `\nMohon konfirmasi ketersediaan antrean hidrolik. Terima kasih!`;

      window.open(makeWaUrl(waMessage), "_blank");
    });
  });

  console.log(`[EvEvDigital Engine] Auto-hydration complete for ${p.nama}!`);
});
