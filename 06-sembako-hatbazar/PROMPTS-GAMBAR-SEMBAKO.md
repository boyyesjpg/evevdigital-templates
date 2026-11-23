# PANDUAN PROMPT BATCH CHATGPT / DALL-E 3: ASET GAMBAR SEMBAKO INDONESIA
**Proyek:** Template Website UMKM `evevsembako` (`06-sembako-hatbazar`)  
**Metode:** **Sistem Batch Grid Sheet (1 Prompt = 4 s/d 9 Gambar Sekaligus)**  
**Tool Pemotong Otomatis:** `python crop_batch.py` (sudah tersedia di folder ini)

---

## ALUR KERJA CEPAT 3 LANGKAH (HEMAT WAKTU & TOKEN)

```text
[1. Copy Prompt Batch] ──> [2. Generate di ChatGPT/DALL-E] ──> [3. Simpan & Jalankan crop_batch.py]
   (Pilih Batch 1 - 4)        (Hasil 1 lembar grid produk)         (Otomatis terpotong & masuk web)
```

1. **Salin salah satu Prompt Batch** di bawah ke ChatGPT (model GPT-4o / DALL-E 3) atau Midjourney.
2. ChatGPT akan menghasilkan **1 gambar lembar grid yang berisi 4 sampai 9 produk sekaligus** dengan background putih bersih dan pencahayaan studio yang konsisten.
3. Simpan gambar dari ChatGPT tersebut ke folder `06-sembako-hatbazar/` dengan nama:
   - **`batch-1.png`** (untuk Batch 1)
   - **`batch-2.png`** (untuk Batch 2)
   - **`batch-3.png`** (untuk Batch 3)
   - **`batch-4.png`** (untuk Batch 4)
4. Jalankan perintah di terminal:
   ```bash
   python crop_batch.py
   ```
   *Skrip Python akan otomatis memotong setiap kotak produk, me-resize ke 600x600 px WebP berkualitas tinggi, dan langsung menyimpannya ke folder `assets/images/evevsembako/` sesuai nama file yang digunakan website!*

---

## 1. DAFTAR PROMPT BATCH SIAP SALIN (BATCH 1 - BATCH 5)

### BATCH 1: 9 Produk Sembako Pokok & Dapur Utama (Grid 3x3)
*Menghasilkan 9 produk pokok dalam 1 gambar lembar (3 baris x 3 kolom). Cukup 1 kali kirim prompt ke ChatGPT.*

```text
A professional commercial product photography grid sheet, neatly arranged in a 3x3 grid (3 rows and 3 columns) on a seamless pure white studio background. Each cell displays one distinct Indonesian grocery staple, centered with balanced spacing and soft natural drop shadows:

- Row 1, Col 1: A premium 5kg transparent plastic sack of long-grain white rice with green and gold Indonesian label "Beras Setra Ramos Super 5kg".
- Row 1, Col 2: A standing 2-liter refill pouch of crystal-clear golden palm cooking oil with yellow label "Minyak Goreng Sawit 2L".
- Row 1, Col 3: A molded pulp egg carton tray containing fresh brown farm chicken eggs (telur ayam ras segar).
- Row 2, Col 1: A 1kg clear sealed pillow-pack bag of sparkling white refined cane sugar with green badge "Gula Pasir Kristal 1kg".
- Row 2, Col 2: A 1kg paper sack pack of premium wheat flour with iconic blue branding "Tepung Terigu Serbaguna 1kg".
- Row 2, Col 3: A factory-sealed brown cardboard carton box of instant noodles labeled "Indomie Goreng 40 Pcs".
- Row 3, Col 1: A standing 550ml dark-green refill pouch of thick Indonesian sweet soy sauce with gold label "Kecap Manis Kedelai Hitam 550ml".
- Row 3, Col 2: A bright yellow and blue 200g foil pack of multi-purpose margarine "Margarin Serbaguna 200g".
- Row 3, Col 3: A clean 250g cyan and white sealed pouch of iodized fine kitchen salt "Garam Dapur Beryodium 250g".

Even studio softbox illumination across all 9 items, identical camera angle, ultra-sharp 8k commercial packshot quality, knolling product layout, no overlapping items. --ar 1:1
```

---

### BATCH 2: 9 Bumbu Dapur, Minuman & Kebersihan Rumah Tangga (Grid 3x3)
*Menghasilkan 9 produk pelengkap dapur & harian dalam 1 gambar lembar (3 baris x 3 kolom).*

```text
A professional commercial product photography grid sheet arranged in a 3x3 grid (3 rows and 3 columns) on an immaculate pure white studio background. High-detail studio photography of Indonesian household and kitchen goods, separated with clean gutters and soft ground shadows:

- Row 1, Col 1: A 165g deep-red and glossy black ground coffee foil pack labeled "Kopi Bubuk Hitam Mantap 165g" with a few roasted coffee beans.
- Row 1, Col 2: A rectangular teal-green cardboard box of Indonesian black tea bags labeled "Teh Celup Asli Isi 30 Kantong".
- Row 1, Col 3: A classic 370g metal tin can of sweetened condensed milk with blue and white label "Susu Kental Manis 370g".
- Row 2, Col 1: A tall 425g glossy red tin can of sardines in rich tomato sauce with pull-tab lid labeled "Sarden Ikan Saus Tomat 425g".
- Row 2, Col 2: A 335ml clear glass bottle with bright red extra-hot chili sauce and yellow cap labeled "Saus Sambal Ekstra Pedas 335ml".
- Row 2, Col 3: A small rustic woven bamboo basket filled with 1kg of fresh purple-red Indonesian shallots (bawang merah Brebes) and plump white garlic bulbs.
- Row 3, Col 1: A shallow bamboo tray with 500g of fresh glossy Indonesian red curly chilies and spicy bird's eye chilies with green stems.
- Row 3, Col 2: A 650ml vibrant lime-green stand-up refill pouch of dishwashing liquid with sliced lime graphic "Sabun Cuci Piring Jeruk Nipis 650ml".
- Row 3, Col 3: A 770g fragrant laundry powder detergent bag with bright floral green-pink packaging "Deterjen Bubuk Anti Noda 770g".

Consistent studio lighting, neutral pure white background, identical scale, ultra-photorealistic 8k commercial quality. --ar 1:1
```

---

### BATCH 3: 6 Produk Grosir & Kulakan Partai Warung (Grid 3x2)
*Menghasilkan 6 item grosir/partai besar (2 baris x 3 kolom) untuk halaman Template 2 (Grosir).*

```text
A commercial wholesale warehouse product photography sheet arranged in a clean 2x3 grid (2 rows and 3 columns) on a clean industrial studio white background. Each cell shows bulk wholesale grocery stock for Indonesian warung kelontong:

- Row 1, Col 1: A stack of three heavy 25kg woven polypropylene sacks of rice labeled "Beras Ramos Super 25 KG Grosir" with industrial stitched tops.
- Row 1, Col 2: A sealed corrugated brown master carton of cooking oil labeled "Minyak Goreng Karton Pabrik Isi 6 Pouch x 2L" with factory tape.
- Row 1, Col 3: A sturdy wooden crate containing 15kg of clean brown farm chicken eggs (krat telur 15kg untuk kulakan toko).
- Row 2, Col 1: A 50kg heavy woven white sugar sack (karung zak gula pasir pabrik 50kg) standing upright with refinery print.
- Row 2, Col 2: Two stacked cardboard delivery cartons of instant fried noodles with official shipping marks "Dus Karton 40 Bungkus Mie Goreng".
- Row 2, Col 3: A retail hanging display strip / cardboard box containing 10 hanging strips (100 sachets) of instant coffee "Kopi Sachet Renceng 10 Renceng".

Bright studio warehouse lighting, clean commercial presentation, crisp focus on packaging textures and labels, high resolution. --ar 3:2
```

---

### BATCH 4: 4 Paket Sembako & Parsel Bingkisan (Grid 2x2)
*Menghasilkan 4 paket sembako komplit (2 baris x 2 kolom) untuk halaman Template 3 (Delivery & Paket).*

```text
A commercial product photography grid sheet arranged in a 2x2 grid (2 rows and 2 columns) on a seamless warm off-white studio background. Each cell shows an artfully bundled Indonesian essential grocery package:

- Top-Left (Row 1, Col 1): "Paket Sembako Berkah" - A clean grocery bundle containing 1 bag of 5kg white rice, 1 pouch of 2L cooking oil, 1kg sugar, 1 box of tea, and 5 packs of instant noodles in front of a green eco-tote bag.
- Top-Right (Row 1, Col 2): "Paket Sejahtera Bulanan" - A large monthly family grocery bundle featuring 10kg rice sack, two 2L cooking oil pouches, 1kg egg tray, 2kg sugar, coffee, and sweet soy sauce with an order invoice clipboard.
- Bottom-Left (Row 2, Col 1): "Parsel Hari Raya Ramadhan" - A luxury festive Eid grocery hamper inside an elegant handcrafted woven wicker basket tied with a rich emerald-green and gold satin ribbon bow, filled with premium sembako and festive biscuits.
- Bottom-Right (Row 2, Col 2): "Paket Dapur Mingguan" - A fresh weekly cooking bundle with 2L cooking oil, 1kg eggs, shallots, garlic, chilies, seasonings, and salt on a clean kitchen wooden board.

Soft warm studio lighting, festive yet clean commercial arrangement, photorealistic 8k, sharp depth of field. --ar 1:1
```

---

### BATCH 5: 3 Hero Banner Widescreen 16:9 (Sequence Prompt)
*Salin prompt ini ke ChatGPT untuk menghasilkan 3 banner hero sekaligus secara berurutan.*

```text
Generate 3 distinct commercial widescreen hero banners (aspect ratio 16:9) sequentially for an Indonesian grocery business website, each with cinematic lighting and 8k photorealistic quality:

Banner 1 (Template 1 - Toko Modern):
Cinematic wide shot (16:9) of a modern, brightly lit Indonesian neighborhood grocery store (warung sembako kekinian). Organized wooden and metal shelves stocked with sacks of rice, cooking oils, eggs, spices, and Indonesian household goods. A friendly Indonesian female shopkeeper in a clean green apron smiling warmly at the checkout counter. Bright, warm, inviting atmosphere.

Banner 2 (Template 2 - Gudang Grosir):
Wide commercial photograph (16:9) of an organized Indonesian grocery wholesale depot (gudang grosir sembako & kulakan). High industrial steel racks stacked neatly with master cartons of instant noodles, sacks of rice on wooden pallets, and cooking oil boxes. A friendly Indonesian worker guiding a hand pallet truck. Bright professional warehouse lighting.

Banner 3 (Template 3 - Layanan Antar Rumah):
Cinematic commercial photo (16:9) of a grocery home delivery service in suburban Indonesia. A polite delivery courier wearing a neat green polo shirt with "evevsembako" logo, handing an insulated delivery box of fresh groceries to a happy Indonesian homemaker on a sunny house terrace. Warm natural afternoon light.
```

---

## 2. PANDUAN RUNNING SKRIP PEMOTONG OTOMATIS (`crop_batch.py`)

Setelah Anda men-download gambar dari ChatGPT:
1. Pindahkan gambar hasil download ke folder `06-sembako-hatbazar/`.
2. Ubah namanya menjadi `batch-1.png`, `batch-2.png`, `batch-3.png`, atau `batch-4.png`.
3. Buka terminal PowerShell / Command Prompt di folder `06-sembako-hatbazar/` dan ketik:
   ```bash
   python crop_batch.py
   ```
4. Output otomatis:
   - File otomatis terpotong simetris sesuai koordinat grid.
   - File otomatis di-resize ke resolusi standar **600x600 px**.
   - File otomatis dikompresi ke format **WebP modern** tanpa mengurangi ketajaman.
   - File otomatis ditempatkan di `assets/images/evevsembako/` dengan nama yang sesuai kode HTML website (`product_gula_pasir.webp`, `product_tepung_terigu.webp`, dll.).
   - Website langsung otomatis menampilkan gambar baru tanpa perlu Anda menyunting kode HTML lagi!
