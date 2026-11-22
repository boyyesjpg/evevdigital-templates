import shutil, os

src = r"C:\Users\lenovo\.gemini\antigravity\scratch\EvEvDigital-Project\templates-siap-pakai\04-laundry-launder"
dst = r"C:\Users\lenovo\Downloads\template\04-laundry-purelinen"

if os.path.exists(dst):
    shutil.rmtree(dst)

shutil.copytree(src, dst)
print("Successfully copied template to Downloads/template/04-laundry-purelinen!")
print("Destination files:", len(os.listdir(dst)))
