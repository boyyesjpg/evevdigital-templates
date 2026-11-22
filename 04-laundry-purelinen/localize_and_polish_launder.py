import re

html_path = r"C:\Users\lenovo\.gemini\antigravity\scratch\EvEvDigital-Project\templates-siap-pakai\04-laundry-launder\index.html"
with open(html_path, "r", encoding="utf-8") as f:
    c = f.read()

# 1. Update Services Section
old_srv_header = r'<span class="sub-title">Our Best Services</span>\s*<h2 class="sec-title">Our Best Laundry Services For You!</h2>'
new_srv_header = '<span class="sub-title" data-config="tagline">Layanan Unggulan Kami</span>\n                <h2 class="sec-title">Solusi Perawatan Pakaian Bersih, Rapi & Higienis</h2>'
c = re.sub(old_srv_header, new_srv_header, c)

# 2. Update Why Choose Us Section
# Ensure id="why-sec" is present on the why choose us container
c = c.replace('class="wcu-area-1 space"', 'class="wcu-area-1 space" id="why-sec"')
c = c.replace('data-bg-src="assets/img/bg/why_bg_1.png"', 'id="why-sec" data-bg-src="assets/img/bg/why_bg_1.png"')

old_why_header = r'<span class="sub-title style1">Why Choose Us</span>\s*<h2 class="sec-title">We Take Pride in Perfecting Your Clothes Laundry</h2>\s*<p class="sec-text">.*?</p>'
new_why_header = """<span class="sub-title style1">Mengapa Memilih Kami?</span>
                            <h2 class="sec-title">Standar Higienitas Tertinggi & Garansi Bebas Campur</h2>
                            <p class="sec-text">Kami memahami pakaian Anda adalah aset berharga. Setiap helai pakaian dicuci dalam 1 mesin khusus tanpa pernah dicampur dengan pakaian orang lain. Diproses menggunakan air filtrasi 3 tahap dan setrika uap boiler profesional agar pakaian Anda tetap awet dan harum tahan lama.</p>"""
c = re.sub(old_why_header, new_why_header, c, flags=re.DOTALL)

# Update Why Checklist
old_checklist = r'<div class="checklist list-two-column why-checklist">.*?</div>\s*</div>'
new_checklist = """<div class="checklist list-two-column why-checklist">
                            <ul>
                                <li><span class="check-img"><img src="assets/img/icon/check.svg" alt=""></span> 1 Mesin 1 Pelanggan (Higienis)</li>
                                <li><span class="check-img"><img src="assets/img/icon/check.svg" alt=""></span> Air Filtrasi 3 Tahap Bebas Karat</li>
                                <li><span class="check-img"><img src="assets/img/icon/check.svg" alt=""></span> Setrika Uap Boiler Anti Gosong</li>
                                <li><span class="check-img"><img src="assets/img/icon/check.svg" alt=""></span> Timbangan Digital Transparan di Depan Anda</li>
                            </ul>
                        </div>"""
c = re.sub(old_checklist, new_checklist, c, flags=re.DOTALL)

# Update Why CTA button
c = re.sub(r'<a href="contact\.html" class="th-btn style3">Make An Appointment</a>', '<a href="https://wa.me/62895323418658" class="th-btn style3 btn-wa-booking" target="_blank"><i class="fab fa-whatsapp me-2"></i> Konsultasi via WhatsApp</a>', c)

# 3. Update Work Process Section
old_proc_header = r'<span class="sub-title">Work Process</span>\s*<h2 class="sec-title">How We Work It!</h2>'
new_proc_header = '<span class="sub-title">Alur Pemesanan Mudah</span>\n                <h2 class="sec-title">4 Langkah Praktis Cucian Bersih Wangi</h2>'
c = re.sub(old_proc_header, new_proc_header, c)

# Update Process Step Cards
old_step1 = r'<h3 class="box-title">Schedule Your Service</h3>\s*</div>\s*<p class="box-text">.*?</p>'
new_step1 = '<h3 class="box-title">Pesan via WhatsApp</h3>\n                                </div>\n                                <p class="box-text">Hubungi kami dan kirim share location alamat penjemputan cucian Anda melalui WhatsApp.</p>'
c = re.sub(old_step1, new_step1, c)

old_step2 = r'<h3 class="box-title">Expert Cleaning Process</h3>\s*</div>\s*<p class="box-text">.*?</p>'
new_step2 = '<h3 class="box-title">Kurir Jemput & Timbang</h3>\n                                </div>\n                                <p class="box-text">Kurir kami menjemput dan menimbang cucian langsung di depan Anda dengan timbangan digital.</p>'
c = re.sub(old_step2, new_step2, c)

old_step3 = r'<h3 class="box-title">Packaging and Delivery</h3>\s*</div>\s*<p class="box-text">.*?</p>'
new_step3 = '<h3 class="box-title">Cuci Higienis & Antar</h3>\n                                </div>\n                                <p class="box-text">Pakaian dicuci 1 mesin tersendiri, disetrika uap boiler, lalu diantar kembali rapi harum ke rumah Anda.</p>'
c = re.sub(old_step3, new_step3, c)

# 4. Update FAQ Section
c = c.replace('class="faq-area-1 space"', 'class="faq-area-1 space" id="faq-sec"')
old_faq_header = r'<span class="sub-title style1">FAQ</span>\s*<h2 class="sec-title">Frequently Asked Have Any Questions</h2>'
new_faq_header = '<span class="sub-title style1">Pertanyaan Umum</span>\n                            <h2 class="sec-title">Hal yang Sering Ditanyakan Pelanggan</h2>'
c = re.sub(old_faq_header, new_faq_header, c)

# Update FAQ questions
old_faq1 = r'<button class="accordion-button "[^>]*>What Services Do You Offer\?</button>\s*</div>\s*<div id="collapse-1"[^>]*>\s*<div class="accordion-body">\s*<p class="faq-text">.*?</p>'
new_faq1 = '<button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">Apakah pakaian saya akan dicampur dengan cucian orang lain?</button></div><div id="collapse-1" class="accordion-collapse collapse show" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion"><div class="accordion-body"><p class="faq-text">Sama sekali tidak. Prinsip utama kami adalah 1 mesin khusus untuk 1 nota pelanggan demi menjaga higienitas mutlak dan mencegah risiko pakaian tertukar atau kelunturan.</p>'
c = re.sub(old_faq1, new_faq1, c)

old_faq2 = r'<button class="accordion-button collapsed"[^>]*>Do You Have Certified Technicians\?</button>\s*</div>\s*<div id="collapse-2"[^>]*>\s*<div class="accordion-body">\s*<p class="faq-text">.*?</p>'
new_faq2 = '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">Berapa minimal berat untuk layanan antar-jemput gratis?</button></div><div id="collapse-2" class="accordion-collapse collapse" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion"><div class="accordion-body"><p class="faq-text">Layanan antar-jemput gratis berlaku untuk pemesanan minimal 5 kg dalam radius 5 km dari outlet kami. Di bawah 5 kg hanya dikenakan ongkos kirim flat Rp 10.000 saja.</p>'
c = re.sub(old_faq2, new_faq2, c)

old_faq3 = r'<button class="accordion-button collapsed"[^>]*>What Is Included In Full-Service Pool Cleaning\?</button>\s*</div>\s*<div id="collapse-3"[^>]*>\s*<div class="accordion-body">\s*<p class="faq-text">.*?</p>'
new_faq3 = '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">Berapa lama estimasi cuci express selesai?</button></div><div id="collapse-3" class="accordion-collapse collapse" aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion"><div class="accordion-body"><p class="faq-text">Layanan Super Express same-day selesai dalam 6 jam sejak pakaian dijemput oleh kurir kami, bergaransi tepat waktu 100%.</p>'
c = re.sub(old_faq3, new_faq3, c)

# 5. Update Pricing Section
old_price_block_regex = r'<section class="space" id="price-sec">.*?</section>'
new_price_block = """<section class="space" id="price-sec">
        <div class="container">
            <div class="title-area text-center">
                <span class="sub-title">Paket Kiloan & Satuan</span>
                <h2 class="sec-title">Daftar Harga Laundry Transparan & Jujur</h2>
            </div>
            <div class="row gy-4 justify-content-center">

                <!-- Paket 1: Cuci Lipat -->
                <div class="col-xl-4 col-md-6">
                    <div class="price-card">
                        <h3 class="box-title">Cuci Lipat Wangi</h3>
                        <div class="price-card_content">
                            <h4 class="price-card_price"><span class="currency">Rp</span> 7.000 <span style="font-size:16px; font-weight:normal; color:var(--body-color);">/ kg</span></h4>
                            <p class="price-card_text">ESTIMASI 2 HARI SELESAI</p>
                            <div class="available-list">
                                <ul>
                                    <li>1 Mesin 1 Pelanggan (Bebas Campur)</li>
                                    <li>Deterjen Konsentrat Ramah Serat</li>
                                    <li>Parfum Lembut Tahan 7 Hari</li>
                                    <li>Kemasan Plastik Segel Tebal</li>
                                    <li class="unavailable">Setrika Uap Boiler</li>
                                    <li class="unavailable">Hanger Kemeja Formal</li>
                                </ul>
                            </div>
                            <a href="https://wa.me/62895323418658?text=Halo%20PureLinen%20Laundry,%20saya%20mau%20order%20paket%20Cuci%20Lipat%20Wangi..." class="th-btn style3 btn-wa-booking" target="_blank"><i class="fab fa-whatsapp me-2"></i> Order Paket Ini</a>
                        </div>
                    </div>
                </div>

                <!-- Paket 2: Cuci Komplit (Featured / Best Seller) -->
                <div class="col-xl-4 col-md-6">
                    <div class="price-card active">
                        <div class="badge bg-primary text-white position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill" style="background:#0284C7 !important; font-size:12px;">PALING LARIS</div>
                        <h3 class="box-title">Cuci Komplit Setrika Uap</h3>
                        <div class="price-card_content">
                            <h4 class="price-card_price"><span class="currency">Rp</span> 9.000 <span style="font-size:16px; font-weight:normal; color:var(--body-color);">/ kg</span></h4>
                            <p class="price-card_text">ESTIMASI 2 HARI SELESAI</p>
                            <div class="available-list">
                                <ul>
                                    <li>1 Mesin 1 Pelanggan (Bebas Campur)</li>
                                    <li>Setrika Uap Boiler Anti Gosong</li>
                                    <li>Bebas Bekas Mengkilap pada Pakaian</li>
                                    <li>Gratis Hanger Khusus Kemeja</li>
                                    <li>Garansi Cuci Ulang Jika Ada Noda</li>
                                    <li>Deterjen Hipoalergenik</li>
                                </ul>
                            </div>
                            <a href="https://wa.me/62895323418658?text=Halo%20PureLinen%20Laundry,%20saya%20mau%20order%20paket%20Cuci%20Komplit%20Setrika%20Uap..." class="th-btn style4 btn-wa-booking" target="_blank"><i class="fab fa-whatsapp me-2"></i> Order Paket Paling Laris</a>
                        </div>
                    </div>
                </div>

                <!-- Paket 3: Super Express -->
                <div class="col-xl-4 col-md-6">
                    <div class="price-card">
                        <div class="badge bg-warning text-dark position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill" style="font-size:12px;">KILAT DARURAT</div>
                        <h3 class="box-title">Super Express 6 Jam</h3>
                        <div class="price-card_content">
                            <h4 class="price-card_price"><span class="currency">Rp</span> 15.000 <span style="font-size:16px; font-weight:normal; color:var(--body-color);">/ kg</span></h4>
                            <p class="price-card_text">SAME-DAY SELESAI 6 JAM</p>
                            <div class="available-list">
                                <ul>
                                    <li>Prioritas Utama Mesin Cuci & Dryer</li>
                                    <li>Kurir Jemput Cepat 20 Menit</li>
                                    <li>Setrika Uap Boiler Rapi Siap Lemari</li>
                                    <li>Wangi Ekstra Tahan Lama</li>
                                    <li>Garansi Tepat Waktu 100%</li>
                                    <li>1 Mesin 1 Pelanggan</li>
                                </ul>
                            </div>
                            <a href="https://wa.me/62895323418658?text=Halo%20PureLinen%20Laundry,%20saya%20mau%20order%20paket%20Super%20Express%206%20Jam..." class="th-btn style3 btn-wa-booking" target="_blank"><i class="fab fa-whatsapp me-2"></i> Order Express Kilat</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>"""
c = re.sub(old_price_block_regex, new_price_block, c, flags=re.DOTALL)

# 6. Update Appointment Form (Contact Area)
c = c.replace('class="testi-area"', 'class="testi-area" id="contact-sec"')
old_form_title = r'<h3 class="sec-title text-center">Book An Appointment</h3>'
new_form_title = '<h3 class="sec-title text-center"><i class="fab fa-whatsapp me-2" style="color:#0284C7;"></i> Jadwalkan Antar-Jemput via WA</h3>'
c = re.sub(old_form_title, new_form_title, c)

# Replace form action and inputs
c = c.replace('placeholder="Your Name"', 'placeholder="Nama Lengkap Anda" required')
c = c.replace('placeholder="Email Address"', 'placeholder="Nomor WhatsApp (cth: 0812xxxx)" type="tel" name="phone" required')
c = c.replace('placeholder="Your Message"', 'placeholder="Alamat Penjemputan / Catatan Khusus..."')
c = c.replace('<button class="th-btn btn-fw">Appointment Now</button>', '<button type="submit" class="th-btn btn-fw style4"><i class="fab fa-whatsapp me-2"></i> Kirim Pesanan ke WhatsApp</button>')

with open(html_path, "w", encoding="utf-8") as f:
    f.write(c)

print("Localization and polish completed successfully!")
