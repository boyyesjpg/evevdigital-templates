"""
Skrip Otomatis Pemotong Gambar Batch Sembako untuk evevsembako (06-sembako-hatbazar)
Cara Pakai:
1. Simpan gambar hasil generasi ChatGPT/Midjourney di folder 06-sembako-hatbazar/ dengan nama:
   - batch-1.png (atau .jpg/.webp) -> 9 Produk Sembako Utama (Grid 3x3)
   - batch-2.png (atau .jpg/.webp) -> 9 Bumbu & Minuman (Grid 3x3)
   - batch-3.png (atau .jpg/.webp) -> 6 Produk Grosir (Grid 3x2)
   - batch-4.png (atau .jpg/.webp) -> 4 Paket Bingkisan (Grid 2x2)
2. Jalankan perintah:
   python crop_batch.py
3. Skrip akan memotong setiap sel secara otomatis, mengubah ukurannya ke 600x600 px WebP berkualitas tinggi,
   dan langsung menempatkannya di folder assets/images/evevsembako/ sesuai nama yang dipakai website!
"""

import os
import sys
from PIL import Image

OUT_DIR = os.path.join("assets", "images", "evevsembako")
os.makedirs(OUT_DIR, exist_ok=True)

BATCH_CONFIG = {
    "batch-1": {
        "grid": (3, 3), # 3 baris x 3 kolom = 9 produk
        "filenames": [
            "product_beras_premium.webp",   # Baris 1, Kolom 1
            "product_minyak_goreng.webp",   # Baris 1, Kolom 2
            "product_telur_ayam.webp",      # Baris 1, Kolom 3
            "product_gula_pasir.webp",      # Baris 2, Kolom 1
            "product_tepung_terigu.webp",   # Baris 2, Kolom 2
            "product_mie_indomie.webp",     # Baris 2, Kolom 3
            "product_kecap_bango.webp",     # Baris 3, Kolom 1
            "product_margarin_blueband.webp", # Baris 3, Kolom 2
            "product_garam_dapur.webp"      # Baris 3, Kolom 3
        ]
    },
    "batch-2": {
        "grid": (3, 3), # 3 baris x 3 kolom = 9 produk
        "filenames": [
            "product_kopi_kapal_api.webp",    # Baris 1, Kolom 1
            "product_teh_sariwangi.webp",     # Baris 1, Kolom 2
            "product_susu_kental_manis.webp", # Baris 1, Kolom 3
            "product_sarden_abc.webp",        # Baris 2, Kolom 1
            "product_saus_sambal.webp",       # Baris 2, Kolom 2
            "product_bumbu_dapur.webp",       # Baris 2, Kolom 3 (Bawang Brebes)
            "product_cabai_segar.webp",       # Baris 3, Kolom 1
            "product_sabun_sunlight.webp",    # Baris 3, Kolom 2
            "product_deterjen_rinso.webp"     # Baris 3, Kolom 3
        ]
    },
    "batch-3": {
        "grid": (2, 3), # 2 baris x 3 kolom = 6 produk grosir
        "filenames": [
            "product_grosir_karung_beras.webp", # Baris 1, Kolom 1
            "product_grosir_dus_minyak.webp",   # Baris 1, Kolom 2
            "product_grosir_krat_telur.webp",   # Baris 1, Kolom 3
            "product_grosir_karung_gula.webp",  # Baris 2, Kolom 1
            "product_grosir_dus_mie.webp",      # Baris 2, Kolom 2
            "product_grosir_kopi_renceng.webp"  # Baris 2, Kolom 3
        ]
    },
    "batch-4": {
        "grid": (2, 2), # 2 baris x 2 kolom = 4 paket bingkisan
        "filenames": [
            "product_paket_berkah.webp",    # Baris 1, Kolom 1
            "product_paket_sejahtera.webp", # Baris 1, Kolom 2
            "product_paket_ramadhan.webp",  # Baris 2, Kolom 1
            "product_paket_mingguan.webp"   # Baris 2, Kolom 2
        ]
    }
}

def find_image_file(base_name):
    for ext in [".png", ".jpg", ".jpeg", ".webp"]:
        candidate = base_name + ext
        if os.path.exists(candidate):
            return candidate
    return None

def process_batch():
    processed_count = 0
    found_any = False

    for batch_id, cfg in BATCH_CONFIG.items():
        file_path = find_image_file(batch_id)
        if not file_path:
            continue

        found_any = True
        print(f"\n[+] Memproses {file_path}...")
        img = Image.open(file_path).convert("RGB")
        width, height = img.size

        rows, cols = cfg["grid"]
        cell_w = width / cols
        cell_h = height / rows

        filenames = cfg["filenames"]
        idx = 0

        for r in range(rows):
            for c in range(cols):
                if idx >= len(filenames):
                    break

                target_filename = filenames[idx]
                idx += 1

                left = int(c * cell_w)
                top = int(r * cell_h)
                right = int((c + 1) * cell_w)
                bottom = int((r + 1) * cell_h)

                # Crop cell
                crop_box = (left, top, right, bottom)
                cropped = img.crop(crop_box)

                # Resize to standard product dimensions 600x600 px
                resized = cropped.resize((600, 600), Image.Resampling.LANCZOS)

                out_path = os.path.join(OUT_DIR, target_filename)
                resized.save(out_path, "WEBP", quality=90)
                print(f"    -> Tersimpan: {out_path}")
                processed_count += 1

    if not found_any:
        print("[!] Belum ditemukan file batch di folder ini.")
        print("    Silakan simpan gambar dari ChatGPT dengan nama:")
        print("    - batch-1.png (9 Sembako Utama, Grid 3x3)")
        print("    - batch-2.png (9 Bumbu & Minuman, Grid 3x3)")
        print("    - batch-3.png (6 Grosir & Kulakan, Grid 3x2)")
        print("    - batch-4.png (4 Paket Bingkisan, Grid 2x2)")
        print("    lalu jalankan ulang: python crop_batch.py")
    else:
        print(f"\n[V] Selesai! Berhasil memotong dan mengonversi {processed_count} gambar produk ke {OUT_DIR}/.")

if __name__ == "__main__":
    process_batch()
