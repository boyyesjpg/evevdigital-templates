import re

html_path = r"C:\Users\lenovo\.gemini\antigravity\scratch\EvEvDigital-Project\templates-siap-pakai\04-laundry-launder\index.html"
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

appt_m = re.search(r'(<section[^>]*id="contact-sec".*?</section>)', html, re.DOTALL)
if appt_m:
    print("=== APPOINTMENT SECTION ===")
    print(appt_m.group(1)[:1200])

why_m = re.search(r'(<div[^>]*id="why-sec".*?</div>\s*</div>\s*</div>)', html, re.DOTALL)
if why_m:
    print("\n=== WHY CHOOSE US ===")
    print(why_m.group(1)[:1200])
