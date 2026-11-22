html_path = r"C:\Users\lenovo\.gemini\antigravity\scratch\EvEvDigital-Project\templates-siap-pakai\04-laundry-launder\index.html"
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

pos = html.find("Frequently Asked")
print("Found at", pos)
print(html[pos-300:pos+2000])
