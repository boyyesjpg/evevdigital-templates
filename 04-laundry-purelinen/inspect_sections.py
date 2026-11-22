import re

html_path = r"C:\Users\lenovo\.gemini\antigravity\scratch\EvEvDigital-Project\templates-siap-pakai\04-laundry-launder\index.html"
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# Pricing section inspect
price_m = re.search(r'(<section[^>]*id="price-sec".*?</section>)', html, re.DOTALL)
if price_m:
    print("=== PRICE SECTION ===")
    print(price_m.group(1)[:1200])

# Services section inspect
srv_m = re.search(r'(<section[^>]*id="service-sec".*?</section>)', html, re.DOTALL)
if srv_m:
    print("=== SERVICE SECTION ===")
    print(srv_m.group(1)[:1200])
