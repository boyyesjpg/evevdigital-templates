html_path = r"C:\Users\lenovo\.gemini\antigravity\scratch\EvEvDigital-Project\templates-siap-pakai\04-laundry-launder\index.html"
txt = open(html_path, encoding="utf-8").read()

checks = {
    "Theme toggle CSS": "theme-toggle.css" in txt,
    "Theme toggle JS": "theme-toggle.js" in txt,
    "Profil usaha JS": "profil-usaha.js" in txt,
    "Theme toggle button": "theme-toggle" in txt,
    "Footer branding": "Ditenagai oleh" in txt and "EvEvDigital" in txt,
    "Price in Rupiah": "Rp" in txt and "7.000" in txt and "9.000" in txt,
    "WhatsApp links": "wa.me/62895323418658" in txt,
    "Indonesian Sections": "Alur Pemesanan" in txt and "Paket Kiloan & Satuan" in txt,
}

all_ok = True
for label, passed in checks.items():
    status = "PASS" if passed else "FAIL"
    print(f"{label}: {status}")
    if not passed:
        all_ok = False

if all_ok:
    print("\nALL VERIFICATION GATES PASSED 100%!")
