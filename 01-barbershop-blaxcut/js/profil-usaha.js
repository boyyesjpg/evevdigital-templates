/* ==========================================================================
   ⚙️ PENGATURAN INFORMASI KLIEN (BARBERSHOP PRO)
   Cukup ganti nilai di dalam objek ini, seluruh website langsung terupdate!
   ========================================================================== */

const PROFIL_USAHA = {
  nama: "evevbarber",
  tagline: "Potongan Rambut Presisi & Ritual Grooming Pria Sejati",
  deskripsi: "Barbershop premium untuk pria yang mengutamakan kerapian dan kenyamanan. Layanan pangkas rambut presisi, hot towel shave dengan silet steril, hair styling pomade premium, dan cuci rambut relaksasi.",
  
  temaDefault: "dark",

  whatsapp: "62895323418658",
  telepon: "0895-3234-18658",
  email: "evevdigital@gmail.com",
  pesanWABooking: "Halo evevbarber, saya ingin booking antrean potong rambut...",

  alamat: "Jl. Otista Raya No. 88, Jatinegara, Jakarta Timur",
  jamBukaText: "Setiap Hari: 10:00 - 21:00 WIB",
  jamBukaHour: 10,
  jamTutupHour: 21,
  areaLayanan: "Layanan di Tempat (Lounge Eksklusif) & Reservasi VIP Online",
  linkMaps: "https://maps.google.com/?q=Jl.+Otista+Raya+No.+88+Jatinegara+Jakarta+Timur",

  layanan: [
    {
      nama: "Gentleman Signature Haircut",
      harga: "Rp 70.000",
      durasi: "45 Menit",
      deskripsi: "Konsultasi bentuk wajah, pangkas rambut presisi, cuci rambut dingin/hangat, pijat kepala relaksasi, dan styling pomade.",
      badge: "Paling Favorit"
    },
    {
      nama: "Hot Towel Shave & Beard Trim",
      harga: "Rp 45.000",
      durasi: "30 Menit",
      deskripsi: "Handuk hangat aromaterapi, cukur silet steril 1x pakai, beard oil penutrisi, dan aftershave balm segar anti iritasi.",
      badge: "Relaksasi Pria"
    },
    {
      nama: "The Royalty Full Grooming Package",
      harga: "Rp 120.000",
      durasi: "75 Menit",
      deskripsi: "Paket komplit: Signature Haircut + Hot Towel Shave + Face Scrub angkat komedo + Pijat bahu & tengkuk + Free Kopi/Softdrink.",
      badge: "Paket Sultan"
    },
    {
      nama: "Hair Color / Bleaching & Ash Tone",
      harga: "Rp 150.000",
      durasi: "90 Menit",
      deskripsi: "Pewarnaan rambut cowok profesional (Ash Grey, Blonde, Espresso) menggunakan cat impor ramah kulit kepala.",
      badge: "Makeover Keren"
    }
  ],

  keunggulan: [
    {
      judul: "Silet Steril 1 Kali Pakai",
      deskripsi: "Kebersihan dan kesehatan kulit Anda adalah prioritas utama. Silet selalu diganti baru di depan mata Anda."
    },
    {
      judul: "Barber Senior Bersertifikat",
      deskripsi: "Setiap barber kami memahami proporsi bentuk kepala dan jenis rambut untuk memberikan potongan paling pas."
    },
    {
      judul: "Lounge Nyaman & Free Coffee",
      deskripsi: "Ruang tunggu ber-AC dingin, sofa kulit empuk, Wi-Fi kencang, dan seduhan kopi segar gratis selama menunggu."
    }
  ]
};

window.PROFIL_USAHA = PROFIL_USAHA;

/* ==========================================================================
   🚀 ENGINE HIDRASI OTOMATIS
   ========================================================================== */
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
  if (p.nama && p.tagline) {
    document.title = `${p.nama} | ${p.tagline}`;
  }

  // Update WhatsApp links
  document.querySelectorAll('a[href*="wa.me"], a.wa-link, .btn-wa-booking, a[href*="book.html"]').forEach((a) => {
    const currentHref = a.getAttribute("href") || "";
    if (currentHref.startsWith("#") && currentHref.length > 1) return;

    a.href = makeWaUrl();
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
  });

  // Intercept Booking Form
  const bookingForms = document.querySelectorAll("form#form_sb, form.form-border, form[name='contactForm']");
  bookingForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nama = form.querySelector('input[name="name"], input#name')?.value || "Pelanggan";
      const telp = form.querySelector('input[name="phone"], input#phone')?.value || "-";
      const service = form.querySelector('select[name="service"], select#service')?.value || "Signature Haircut";
      const date = form.querySelector('input[name="date"], input#date')?.value || "Hari ini";
      const time = form.querySelector('input[name="time"], select[name="time"]')?.value || "14:00";

      let waMessage = `*BOOKING ANTREAN BARBERSHOP*\n\n`;
      waMessage += `Halo ${p.nama}, saya ingin reservasi kursi pangkas rambut:\n\n`;
      waMessage += `👤 *Nama:* ${nama}\n`;
      waMessage += `📱 *No HP:* ${telp}\n`;
      waMessage += `💈 *Layanan:* ${service}\n`;
      waMessage += `📅 *Tanggal:* ${date}\n`;
      waMessage += `⏰ *Jam:* ${time} WIB\n\n`;
      waMessage += `Mohon konfirmasi ketersediaan slot kursi. Terima kasih!`;

      window.open(makeWaUrl(waMessage), "_blank");
    });
  });

  console.log(`[EvEvDigital Engine] Auto-hydration complete for ${p.nama}!`);
});
