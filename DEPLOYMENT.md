# Catatan Teknis & Kredensial Deployment EvEvDigital

Dokumen ini mencatat seluruh parameter akun, konfigurasi CLI, dan histori deployment agar tidak perlu mencari-cari lagi saat ingin melakukan pemeliharaan, migrasi, atau rilis ulang.

---

## 1. Akun & Kredensial

* **Email Google / Akun Utama:** `dikisusantosak@gmail.com`
* **GitHub Account:**
  * Username: `boyyesjpg`
  * Repositori: `evevdigital-templates`
  * URL Git: `https://github.com/boyyesjpg/evevdigital-templates.git`
  * Branch Utama: `main`
  * Status Auth CLI: `gh auth status` -> Logged in as `boyyesjpg`
* **Vercel Account:**
  * User/Team Scope: `dikisusantosak-5447`
  * Project ID / Name: `template`
  * Status CLI: `vercel whoami` -> `dikisusantosak-5447`
* **Domain Produksi Vercel:**
  * URL Produksi Utama: `https://template-silk-six.vercel.app`
  * URL Deployment Internal: `https://template-jt6hn9ptl-dikisusantosak-5447.vercel.app`

---

## 2. Kredensial Bisnis EvEvDigital

* **Nomor WhatsApp Resmi:** `+62 895-3234-18658` (Format internasional: `62895323418658`)
* **Email Resmi:** `evevdigital@gmail.com`
* **Format Pesan WhatsApp:**
  * Template Barbershop: `Halo EvEvBarber, saya ingin booking jadwal potong rambut...`
  * Template Bengkel: `Halo EvEvBengkel, saya ingin reservasi servis motor...`
  * Template Cuci Steam: `Halo EvEvSteam, saya ingin booking cuci mobil/motor...`
  * Template Laundry: `Halo EvEvLaundry, saya ingin order laundry express...`
  * Template Percetakan: `Halo EvEvPrint, saya ingin konsultasi cetak dan pesan kemasan/banner...`
  * Template Sembako: `Halo EvEvSembako, saya mau pesan sembako untuk antar ke rumah...`
  * Template Frozen Food: `Halo EvEvFrozen, saya ingin order aneka frozen food/daging...`
  * Template Penjahit: `Halo EvEvTayler, saya ingin konsultasi jahit jas/baju/seragam...`
  * Template Depot Air: `Halo EvEvDepot, saya ingin pesan antar galon air RO...`
  * Template Servis HP: `Halo EvEvElektronik, saya ingin konsultasi perbaikan HP/Laptop...`

---

## 3. Perintah CLI Siap Pakai

### Memeriksa Status Autentikasi
```powershell
gh auth status
vercel whoami
```

### Melakukan Push ke GitHub
```powershell
cd "C:\Users\lenovo\Downloads\template"
git add .
git commit -m "docs: perbarui catatan"
git push origin main
```

### Melakukan Deploy Ulang ke Vercel
```powershell
cd "C:\Users\lenovo\Downloads\template"
vercel --prod --yes
```

### Memeriksa Log Deployment Terakhir di Vercel
```powershell
vercel inspect template-silk-six.vercel.app
```
