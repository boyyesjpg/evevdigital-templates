/* ==========================================================================
   ⚙️ PENGATURAN INFORMASI FOTOCOPY, KERTAS & ATK (EVEVDIGITAL ENGINE)
   ========================================================================== */

const PROFIL_USAHA = {
  nama: "evevprint",
  tagline: "Pusat Fotocopy Kilat, Jilid Skripsi, Kertas & Toko Alat Tulis Kantor (ATK)",
  deskripsi: "Pusat layanan fotocopy cepat, cetak dokumen hitam-putih & laser warna, jilid skripsi hardcover emas, laminating, grosir kertas HVS rim, serta toko perlengkapan alat tulis kantor & sekolah terlengkap di Jakarta Timur.",
  
  temaDefault: "light",

  whatsapp: "62895323418658",
  telepon: "0895-3234-18658",
  email: "@evevdigital.com",
  pesanWABooking: "Halo evevprint, saya ingin order fotocopy / cetak dokumen / jilid skripsi / beli ATK...",

  alamat: "Jl. Otista Raya No. 88, Jatinegara, Jakarta Timur",
  jamBukaText: "Buka Setiap Hari: 07:00 - 22:00 WIB",
  jamBukaHour: 7,
  jamTutupHour: 22,
  areaLayanan: "Layanan Langsung di Toko & Pengiriman Dokumen/ATK Instan (Gosend / GrabExpress / Kurir Toko)",
  linkMaps: "https://maps.google.com/?q=Jl.+Otista+Raya+No.+88+Jatinegara+Jakarta+Timur",

  layanan: [
    {
      nama: "Fotocopy & Print Laser Dokumen",
      harga: "Mulai Rp 300 / lbr",
      durasi: "Langsung Jadi",
      deskripsi: "Fotocopy hitam putih & warna bolak-balik kertas HVS 70gr, 80gr. Mesin digital laser high-speed hasil pekat bebas garis.",
      badge: "Layanan Kilat"
    },
    {
      nama: "Jilid Skripsi Hardcover Emboss Emas",
      harga: "Mulai Rp 35.000 / buku",
      durasi: "2 - 4 Jam",
      deskripsi: "Standar baku skripsi & tesis universitas, karton tebal linen/glossy dengan tulisan foil emas timbul elegan dan pita pembatas.",
      badge: "Spesialis Mahasiswa"
    },
    {
      nama: "Grosir & Eceran Kertas HVS Rim",
      harga: "Mulai Rp 45.000 / rim",
      durasi: "Ready Stock",
      deskripsi: "Kertas HVS PaperOne & Sinar Dunia ukuran A4, F4 (Folio), dan A3 ketebalan 70gr, 75gr, 80gr siap kirim kardusan maupun eceran.",
      badge: "Grosir Hemat"
    },
    {
      nama: "Perlengkapan Alat Tulis Kantor & Sekolah",
      harga: "Mulai Rp 2.500",
      durasi: "Ready Stock",
      deskripsi: "Pulpen gel, pensil mekanik, spidol whiteboard, stabilo, buku tulis, kalkulator, gunting, stapler, dan correction tape lengkap.",
      badge: "Koleksi Lengkap"
    },
    {
      nama: "Map Snelhecter, Ordner & Arsip Dokumen",
      harga: "Mulai Rp 3.000",
      durasi: "Ready Stock",
      deskripsi: "Stopmap kertas folio, map zipper pocket, map raport/ijazah busa kancing, dan ordner box arsip kantor warna-warni.",
      badge: "Kerapian Kantor"
    },
    {
      nama: "Laminating Panas & Cetak Pas Foto Studio",
      harga: "Mulai Rp 5.000",
      durasi: "10 Menit Jadi",
      deskripsi: "Laminating anti-air ijazah, KTP, piagam, menu restoran, serta cetak pas foto studio kilat ukuran 2x3, 3x4, 4x6 untuk ijazah/kerja.",
      badge: "Cepat & Rapi"
    }
  ],

  daftarHarga: [
    {
      kategori: "Fotocopy & Print",
      item: "Fotocopy HVS 70gr Hitam Putih (A4 / F4)",
      harga: "Rp 300 / lbr"
    },
    {
      kategori: "Fotocopy & Print",
      item: "Print Laser Dokumen Warna Tajam (A4 / F4)",
      harga: "Rp 1.500 / lbr"
    },
    {
      kategori: "Jilid & Finishing",
      item: "Jilid Lakban Mika Bening Dokumen Tugas",
      harga: "Rp 5.000 / buku"
    },
    {
      kategori: "Jilid & Finishing",
      item: "Jilid Spiral Kawat / Plastik Dokumen Modul",
      harga: "Rp 15.000 / buku"
    },
    {
      kategori: "Jilid & Finishing",
      item: "Jilid Hardcover Skripsi Emboss Foil Emas",
      harga: "Rp 35.000 / buku"
    },
    {
      kategori: "Kertas & ATK",
      item: "Kertas HVS A4 70gr (1 Rim / 500 lbr)",
      harga: "Rp 45.000 / rim"
    },
    {
      kategori: "Kertas & ATK",
      item: "Kertas HVS F4 75gr (1 Rim / 500 lbr)",
      harga: "Rp 50.000 / rim"
    },
    {
      kategori: "Laminating & Foto",
      item: "Laminating Panas Mika Tebal Anti-Air (A4 / F4)",
      harga: "Rp 5.000 / lbr"
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
  if (p.nama && p.tagline && document.title.includes("Printop")) {
    document.title = `${p.nama} - ${p.tagline}`;
  }

  // Update WhatsApp links
  document.querySelectorAll('a[href*="wa.me"], a.wa-link, .btn-wa-booking, .floating-wa-btn').forEach((a) => {
    const currentHref = a.getAttribute("href") || "";
    if (currentHref.startsWith("#") && currentHref.length > 1) return;

    a.href = makeWaUrl();
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
  });

  // Intercept Order & Contact Form
  const orderForms = document.querySelectorAll("form.order-form, form.contact-form, form.form-submit:not(.tw-mt-6), .get-started-form form");
  orderForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nama = form.querySelector('input[name="name"], input#name, input[placeholder*="Name"], input[placeholder*="Nama"]')?.value || "Pelanggan";
      const telp = form.querySelector('input[name="phone"], input#phone, input[type="tel"], input[placeholder*="Phone"], input[placeholder*="WhatsApp"]')?.value || "-";
      const orderType = form.querySelector('select[name="orderType"], select#orderType, select')?.value || "Fotocopy / Cetak Dokumen";
      const jumlah = form.querySelector('input[name="qty"], input#qty, input[placeholder*="Jumlah"], input[placeholder*="Qty"]')?.value || "1";
      const deadline = form.querySelector('input[name="date"], input#date, input[type="date"]')?.value || "Hari ini";
      const catatan = form.querySelector('textarea[name="message"], textarea#message, textarea')?.value || "-";

      let waMessage = `*ORDER FOTOCOPY & ATK - EVEVPRINT*\n\n`;
      waMessage += `Halo ${p.nama}, saya ingin pesan:\n\n`;
      waMessage += `👤 *Nama:* ${nama}\n`;
      waMessage += `📱 *No HP:* ${telp}\n`;
      waMessage += `🖨️ *Layanan / Produk:* ${orderType}\n`;
      waMessage += `📦 *Jumlah:* ${jumlah}\n`;
      waMessage += `📅 *Target Pengambilan:* ${deadline}\n`;
      if (catatan && catatan !== "-") {
        waMessage += `📝 *Keterangan Dokumen / ATK:* ${catatan}\n`;
      }
      waMessage += `\nMohon rincian biaya & konfirmasi antrean. Terima kasih!`;

      window.open(makeWaUrl(waMessage), "_blank");
    });
  });

  // Intercept Newsletter Form with User Feedback
  const newsletterForms = document.querySelectorAll("form.tw-mt-6");
  newsletterForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput ? emailInput.value : "";
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = "<span>✓ Terdaftar!</span>";
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
        }, 3000);
      }
      alert(`Terima kasih! Email (${email || "Anda"}) berhasil didaftarkan untuk info promo & diskon cetak ${p.nama}.`);
      if (emailInput) emailInput.value = "";
    });
  });

  // Intercept Search Form
  const searchForms = document.querySelectorAll("form.max-w-810-px, form.max-w-330-px");
  searchForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const searchInput = form.querySelector('input[type="text"], input[type="search"]');
      const query = searchInput ? searchInput.value.trim() : "";
      if (query) {
        const waMsg = `Halo ${p.nama}, saya ingin menanyakan ketersediaan produk/layanan: "${query}". Apakah tersedia?`;
        window.open(makeWaUrl(waMsg), "_blank");
      } else {
        const prodSec = document.getElementById("produk");
        if (prodSec) {
          prodSec.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Auto-hydration complete
});
