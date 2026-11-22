/* ==========================================================================
   ⚙️ PENGATURAN INFORMASI KLIEN (EDIT BAGIAN INI SAJA UNTUK KLIEN BARU)
   Cukup ubah data di bawah ini, seluruh teks, kontak, harga, dan link WhatsApp 
   di website akan otomatis menyesuaikan dalam 1 menit tanpa menyentuh kode HTML!
   ========================================================================== */

const PROFIL_USAHA = {
  // Informasi Utama
  nama: "evevlaundry",
  tagline: "Laundry Kiloan Express & Satuan Premium — 1 Mesin 1 Pelanggan",
  deskripsi: "Pusat laundry kiloan & satuan profesional modern. Menggunakan air terfiltrasi 3 tahap, deterjen konsentrat ramah serat, dan setrika uap boiler bertekanan anti gosong.",
  
  // Preferensi Tema Awal ("dark" atau "light", pengunjung tetap bisa switch sendiri)
  temaDefault: "light",

  // Kontak & WhatsApp
  whatsapp: "62895323418658",
  telepon: "0895-3234-18658",
  email: "evevdigital@gmail.com",
  pesanWABooking: "Halo evevlaundry, saya ingin pesan antar-jemput cucian saya...",

  // Lokasi & Jam Operasional
  alamat: "Jl. Otista Raya No. 88, Jatinegara, Jakarta Timur",
  jamBukaText: "Setiap Hari: 07:00 - 21:00 WIB",
  jamBukaHour: 7,   // Buka jam 07:00
  jamTutupHour: 21, // Tutup jam 21:00
  areaLayanan: "Gratis Antar-Jemput Radius 5 KM",
  linkMaps: "https://maps.google.com/?q=Jatinegara+Jakarta+Timur",

  // Daftar Layanan Utama & Harga
  layanan: [
    {
      nama: "Cuci Lipat Wangi Higienis",
      harga: "Rp 7.000",
      satuan: "/ kg",
      estimasi: "2 Hari Selesai",
      badge: "Paling Hemat",
      deskripsi: "Pencucian higienis 1 mesin khusus untuk 1 pelanggan dengan deterjen ramah serat dan parfum tahan 7 hari.",
      fitur: ["1 Mesin 1 Pelanggan", "Deterjen Hipoalergenik", "Parfum Tahan 7 Hari", "Kemasan Segel Tebal"]
    },
    {
      nama: "Cuci Komplit Setrika Uap Boiler",
      harga: "Rp 9.000",
      satuan: "/ kg",
      estimasi: "2 Hari Selesai",
      badge: "Paling Laris",
      deskripsi: "Perawatan pakaian komplit dicuci bersih dan disetrika uap boiler bertekanan tinggi tanpa bekas kilap dan anti gosong.",
      fitur: ["Setrika Uap Boiler Anti Gosong", "Hanger Khusus Kemeja", "Garansi Cuci Ulang Bebas Noda", "Anti Bekas Kilap"]
    },
    {
      nama: "Super Express Same-Day 6 Jam",
      harga: "Rp 15.000",
      satuan: "/ kg",
      estimasi: "6 Jam Jadi",
      badge: "Super Kilat",
      deskripsi: "Solusi darurat cucian menumpuk. Armada kurir jemput dalam 20 menit, prioritas mesin utama, rapi siap pakai.",
      fitur: ["Prioritas Mesin Utama", "Kurir Jemput Cepat", "Dryer Suhu Terkendali", "Kemasan Siap Lemari"]
    },
    {
      nama: "Bedcover & Selimut Tebal",
      harga: "Rp 25.000",
      satuan: "/ pcs",
      estimasi: "2 Hari Selesai",
      badge: "Bersih Wangi",
      deskripsi: "Pencucian mesin ekstra kapasitas besar untuk bedcover tebal, membasmi tungau, debu, dan bau apek hingga serat terdalam.",
      fitur: ["Mesin Ekstra Kapasitas", "Bebas Tungau & Bakteri", "Kemasan Vacuum Tebal", "Wangi Segar Lembut"]
    }
  ],

  // 3 Keunggulan Utama
  keunggulan: [
    {
      judul: "1 Mesin 1 Pelanggan",
      deskripsi: "Pakaian Anda tidak pernah dicampur dengan cucian pelanggan lain sekecil apapun demi kebersihan dan higienitas mutlak."
    },
    {
      judul: "Air Filtrasi 3 Tahap",
      deskripsi: "Air difilter khusus membuang partikel karat dan zat kapur, menjaga serat pakaian putih tidak cepat menguning."
    },
    {
      judul: "Timbangan Digital Transparan",
      deskripsi: "Kurir menimbang langsung di depan mata Anda dengan timbangan digital akurat tanpa pembulatan sepihak."
    }
  ]
};

// Expose globally
window.PROFIL_USAHA = PROFIL_USAHA;

/* ==========================================================================
   🚀 ENGINE HIDRASI OTOMATIS KE ELEMEN WEBSITE
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function () {
  const p = window.PROFIL_USAHA;
  if (!p) return;

  // 1. Helper generator WhatsApp URL
  function makeWaUrl(customText) {
    const text = customText || p.pesanWABooking;
    const cleanNum = String(p.whatsapp).replace(/\D/g, "");
    return `https://wa.me/${cleanNum}?text=${encodeURIComponent(text)}`;
  }

  // 2. Hidrasi teks data-config
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

  // 3. Update Title & Meta
  if (p.nama && p.tagline) {
    document.title = `${p.nama} | ${p.tagline}`;
  }

  // 4. Update Header Kontak & Link WhatsApp
  document.querySelectorAll('a[href*="wa.me"], a.wa-link, .btn-wa-booking, a[href*="contact.html"], a[href*="kontak"]').forEach((a) => {
    // Keep internal section anchors intact
    const currentHref = a.getAttribute("href") || "";
    if (currentHref.startsWith("#") && currentHref.length > 1) return;

    // Direct to WA
    a.href = makeWaUrl();
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
  });

  // 5. Update Status Jam Buka Live (Buka / Tutup)
  const statusBadge = document.querySelector(".live-status-badge");
  if (statusBadge) {
    const now = new Date();
    const currentHour = now.getHours();
    const isOpen = currentHour >= p.jamBukaHour && currentHour < p.jamTutupHour;
    if (isOpen) {
      statusBadge.innerHTML = `<span class="badge-dot green"></span> Buka Sekarang (${p.jamBukaText})`;
      statusBadge.classList.add("is-open");
      statusBadge.classList.remove("is-closed");
    } else {
      statusBadge.innerHTML = `<span class="badge-dot red"></span> Tutup Sekarang (Buka 07:00 WIB)`;
      statusBadge.classList.add("is-closed");
      statusBadge.classList.remove("is-open");
    }
  }

  // 6. Intercept Booking Form -> Redirect langsung ke WhatsApp
  const bookingForm = document.querySelector("form.appointment-form, form#appointment-form, .appointment-form form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      const nama = bookingForm.querySelector('input[name="name"], input[placeholder*="Name"], input[placeholder*="Nama"]')?.value || "Pelanggan";
      const telp = bookingForm.querySelector('input[name="number"], input[name="phone"], input[placeholder*="Phone"], input[placeholder*="Nomor"]')?.value || "-";
      const service = bookingForm.querySelector('select[name="service"], select')?.value || "Layanan Cuci";
      const date = bookingForm.querySelector('input[name="date"], input[type="date"]')?.value || "Hari ini";
      const pesan = bookingForm.querySelector('textarea[name="message"], textarea')?.value || "";

      let waMessage = `*PESANAN ANJEM LAUNDRY*\n\n`;
      waMessage += `Halo ${p.nama}, saya ingin booking layanan laundry:\n\n`;
      waMessage += `👤 *Nama:* ${nama}\n`;
      waMessage += `📱 *No HP:* ${telp}\n`;
      waMessage += `🧺 *Layanan:* ${service}\n`;
      waMessage += `📅 *Rencana Waktu:* ${date}\n`;
      if (pesan) {
        waMessage += `📝 *Catatan / Alamat:* ${pesan}\n`;
      }
      waMessage += `\nMohon konfirmasi ketersediaan kurir jemput. Terima kasih!`;

      window.open(makeWaUrl(waMessage), "_blank");
    });
  }

  // Hydration complete
});
