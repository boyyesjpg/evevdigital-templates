import re

html_path = r"C:\Users\lenovo\.gemini\antigravity\scratch\EvEvDigital-Project\templates-siap-pakai\04-laundry-launder\index.html"
with open(html_path, "r", encoding="utf-8") as f:
    c = f.read()

# Extract hero
hero_match = re.search(r'<!--={10,}\s*Hero Area\s*={10,}-->(.*?)<!--={10,}', c, re.DOTALL | re.IGNORECASE)
if hero_match:
    print("Hero snippet:", hero_match.group(1)[:400])

# Extract all section titles
subtitles = re.findall(r'<span class="sub-title[^"]*">(.*?)</span>', c)
titles = re.findall(r'<h[1-4] class="sec-title[^"]*">(.*?)</h[1-4]>', c)
print("\nSubtitles:", subtitles)
print("Sec Titles:", [re.sub(r'<[^>]+>', '', t).strip() for t in titles])

# Check header buttons
header_m = re.search(r'<header.*?</header>', c, re.DOTALL)
if header_m:
    btns = re.findall(r'<a[^>]*class=["\'][^"\']*th-btn[^"\']*["\'][^>]*>(.*?)</a>', header_m.group(0))
    print("\nHeader buttons:", [re.sub(r'<[^>]+>', '', b).strip() for b in btns])

# Check footer bottom
footer_bottom = re.search(r'<div class="copyright-wrap.*?</div\s*>\s*</div\s*>', c, re.DOTALL)
if footer_bottom:
    print("\nFooter bottom:", footer_bottom.group(0)[:300])
