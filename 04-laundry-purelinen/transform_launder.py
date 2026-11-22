import re

target_dir = r"C:\Users\lenovo\.gemini\antigravity\scratch\EvEvDigital-Project\templates-siap-pakai\04-laundry-launder"
html_path = f"{target_dir}\\index.html"

with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Update <head>
# Add theme-toggle.css before </head>
if "theme-toggle.css" not in html:
    html = html.replace('</head>', '    <!-- EvEvDigital Dual Theme Engine -->\n    <link rel="stylesheet" href="assets/css/theme-toggle.css">\n</head>')

# Update title
html = re.sub(r'<title>.*?</title>', '<title>PureLinen Laundry Atelier | Laundry Kiloan & Satuan Higienis</title>', html, flags=re.IGNORECASE)

# 2. Header Top Bar
old_top_notice = r'<p class="header-notice text-theme">.*?</p>'
new_top_notice = '<p class="header-notice text-theme"><i class="fas fa-sparkles me-2"></i> ✨ Promo Klien Baru: Diskon 20% Cuci Kiloan Pertama!</p>'
html = re.sub(old_top_notice, new_top_notice, html)

# Header Phone & Hours
html = re.sub(r'Phone:<a href="tel:[^"]*">[^<]*</a>', 'WA: <a href="https://wa.me/62895323418658" class="wa-link" data-config="telepon">0895-3234-18658</a>', html)
html = re.sub(r'<span>Monday to Saturday\([^)]*\)</span>', '<span class="live-status-badge is-open" data-config="jamBukaText">Buka Setiap Hari: 07:00 - 21:00 WIB</span>', html)

# 3. Main Navigation Menu: Convert to Single Page Scroll Navigation
old_nav_regex = r'<nav class="main-menu d-none d-lg-inline-block">.*?</nav>'
new_nav = """<nav class="main-menu d-none d-lg-inline-block">
                                <ul>
                                    <li><a href="#hero">Beranda</a></li>
                                    <li><a href="#about-sec">Tentang</a></li>
                                    <li><a href="#service-sec">Layanan</a></li>
                                    <li><a href="#why-sec">Keunggulan</a></li>
                                    <li><a href="#process-sec">Alur Cuci</a></li>
                                    <li><a href="#price-sec">Paket Harga</a></li>
                                    <li><a href="#faq-sec">FAQ</a></li>
                                    <li><a href="#contact-sec">Kontak</a></li>
                                </ul>
                            </nav>"""
html = re.sub(old_nav_regex, new_nav, html, flags=re.DOTALL)

# Also update Mobile Navigation Menu
old_mobile_nav_regex = r'<div class="th-mobile-menu">.*?</div>'
new_mobile_nav = """<div class="th-mobile-menu">
                <ul>
                    <li><a href="#hero">Beranda</a></li>
                    <li><a href="#about-sec">Tentang</a></li>
                    <li><a href="#service-sec">Layanan</a></li>
                    <li><a href="#why-sec">Keunggulan</a></li>
                    <li><a href="#process-sec">Alur Cuci</a></li>
                    <li><a href="#price-sec">Paket Harga</a></li>
                    <li><a href="#faq-sec">FAQ</a></li>
                    <li><a href="#contact-sec">Pesan WhatsApp</a></li>
                </ul>
            </div>"""
html = re.sub(old_mobile_nav_regex, new_mobile_nav, html, flags=re.DOTALL)

# 4. Insert Theme Toggle Button in Header Button Area (Desktop)
old_header_btn_regex = r'<div class="header-button">.*?<a href="contact\.html" class="th-btn style4 th-radius">Schedule A Pickup</a>\s*</div>'
new_header_btn = """<div class="header-button d-flex align-items-center">
                                <!-- Theme Toggle Button (Dark/Light Switcher) -->
                                <button id="theme-toggle" class="theme-toggle-btn" aria-label="Ganti Tema Dark / Light" title="Ganti Tema"></button>
                                <a href="https://wa.me/62895323418658" class="th-btn style4 th-radius btn-wa-booking" target="_blank"><i class="fab fa-whatsapp me-2"></i> Order WhatsApp</a>
                            </div>"""
html = re.sub(old_header_btn_regex, new_header_btn, html, flags=re.DOTALL)

# Insert Theme Toggle in Mobile Header next to hamburger toggle
old_mobile_toggle = r'<button type="button" class="th-menu-toggle d-block d-lg-none"><i class="far fa-bars"></i></button>'
new_mobile_toggle = """<div class="d-flex align-items-center d-lg-none">
                                <button class="theme-toggle-btn me-2" aria-label="Ganti Tema"></button>
                                <button type="button" class="th-menu-toggle"><i class="far fa-bars"></i></button>
                            </div>"""
html = html.replace(old_mobile_toggle, new_mobile_toggle)

# 5. Hero Section
html = re.sub(
    r'<span class="sub-title">\s*Best Laundry\s*</span>',
    '<span class="sub-title" data-config="tagline">Pusat Laundry Kiloan & Satuan Higienis</span>',
    html
)
html = re.sub(
    r'<h1 class="hero-title">.*?</h1>',
    '<h1 class="hero-title">Pakaian Bersih Wangi, <span class="text-theme">1 Mesin 1 Nota</span> Tanpa Dicampur</h1>',
    html,
    count=1,
    flags=re.DOTALL
)
html = re.sub(
    r'<p class="hero-text">.*?</p>',
    '<p class="hero-text" data-config="deskripsi">Air terfiltrasi 3 tahap, deterjen ramah serat, dan setrika uap boiler bertekanan anti gosong. Dapatkan pakaian rapi, wangi tahan 7 hari, dan dijemput langsung ke rumah Anda.</p>',
    html,
    count=1,
    flags=re.DOTALL
)

# Hero CTA Buttons
old_hero_btn = r'<div class="btn-group justify-content-center justify-content-lg-start">.*?</div>'
new_hero_btn = """<div class="btn-group justify-content-center justify-content-lg-start gap-3 flex-wrap">
                                            <a href="https://wa.me/62895323418658" class="th-btn style4 th-radius btn-wa-booking" target="_blank"><i class="fab fa-whatsapp me-2"></i> Pesan Antar-Jemput WA</a>
                                            <a href="#price-sec" class="th-btn style2 th-radius"><i class="fas fa-tags me-2"></i> Lihat Paket Harga</a>
                                        </div>"""
html = re.sub(old_hero_btn, new_hero_btn, html, count=1, flags=re.DOTALL)

# Add section IDs for smooth navigation
# About Section ID
html = re.sub(r'<div class="overflow-hidden space"\s*id="about-sec">', '<div class="overflow-hidden space" id="about-sec">', html)
if 'id="about-sec"' not in html:
    html = html.replace('class="overflow-hidden space"', 'class="overflow-hidden space" id="about-sec"', 1)

# Service Section ID
if 'id="service-sec"' not in html:
    html = html.replace('class="service-sec', 'id="service-sec" class="service-sec', 1)
    if 'id="service-sec"' not in html:
        html = re.sub(r'(<!--={10,}\s*Service Area\s*={10,}-->\s*<section[^>]*)(>)', r'\1 id="service-sec"\2', html)

# Why Choose Us Section ID
if 'id="why-sec"' not in html:
    html = re.sub(r'(<!--={10,}\s*Why Choose Us\s*={10,}-->\s*<div[^>]*)(>)', r'\1 id="why-sec"\2', html)

# Work Process Section ID
if 'id="process-sec"' not in html:
    html = re.sub(r'(<!--={10,}\s*Process Area\s*={10,}-->\s*<section[^>]*)(>)', r'\1 id="process-sec"\2', html)

# Price Section ID
if 'id="price-sec"' not in html:
    html = re.sub(r'(<!--={10,}\s*Price Area\s*={10,}-->\s*<section[^>]*)(>)', r'\1 id="price-sec"\2', html)

# FAQ Section ID
if 'id="faq-sec"' not in html:
    html = re.sub(r'(<!--={10,}\s*Faq Area\s*={10,}-->\s*<div[^>]*)(>)', r'\1 id="faq-sec"\2', html)

# Contact Section ID
if 'id="contact-sec"' not in html:
    html = re.sub(r'(<!--={10,}\s*Appointment Area\s*={10,}-->\s*<section[^>]*)(>)', r'\1 id="contact-sec"\2', html)

# 6. Update Copyright & Official EvEvDigital Footer
old_copyright_regex = r'<div class="copyright-wrap">.*?</div>\s*</div>\s*</div>'
new_copyright = """<div class="copyright-wrap py-3">
            <div class="container">
                <div class="row gy-2 align-items-center justify-content-between">
                    <div class="col-md-7 text-center text-md-start">
                        <p class="copyright-text mb-0">Copyright © 2026 <strong data-config="nama">PureLinen Laundry Atelier</strong>. Hak Cipta Dilindungi.</p>
                    </div>
                    <div class="col-md-5 text-center text-md-end">
                        <span class="footer-maker">Ditenagai oleh <b style="color: #0284C7;">EvEvDigital</b></span>
                    </div>
                </div>
            </div>
        </div>"""
html = re.sub(old_copyright_regex, new_copyright, html, flags=re.DOTALL)

# 7. Add scripts before </body>
scripts_inject = """
    <!-- ==============================================================
         EvEvDigital Dual Theme Engine & Auto-Hydration System
         ============================================================== -->
    <script src="assets/js/theme-toggle.js"></script>
    <script src="assets/js/profil-usaha.js"></script>
</body>"""

if "profil-usaha.js" not in html:
    html = html.replace("</body>", scripts_inject)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)

print("Transformation of index.html completed successfully!")
