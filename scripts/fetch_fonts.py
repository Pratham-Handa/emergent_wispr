import os
import re
import urllib.request
from pathlib import Path

SPECS = [
    ("https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap", "Oswald"),
    ("https://fonts.googleapis.com/css2?family=Khand:wght@500;600;700&display=swap", "Khand"),
    ("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap", "Outfit"),
    ("https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;600;700&display=swap", "Mukta"),
    ("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap", "JetBrainsMono"),
]
UA = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
}
OUT = str(Path(__file__).resolve().parents[1] / "frontend" / "public" / "fonts")
os.makedirs(OUT, exist_ok=True)

css_all = []
i = 0
for url, fam in SPECS:
    req = urllib.request.Request(url, headers=UA)
    css = urllib.request.urlopen(req, timeout=30).read().decode()
    blocks = re.findall(r"/\*\s*([\w-]+)\s*\*/\s*(@font-face\s*\{[^}]+\})", css)
    for subset, block in blocks:
        if subset not in ("latin", "latin-ext", "devanagari"):
            continue
        m = re.search(r"url\((https://[^)]+)\)", block)
        src = m.group(1)
        i += 1
        fname = f"{fam}-{i}.woff2"
        urllib.request.urlretrieve(src, os.path.join(OUT, fname))
        css_all.append(block.replace(src, f"/fonts/{fname}"))

with open(os.path.join(OUT, "fonts.css"), "w") as f:
    f.write("\n".join(css_all))
print("faces:", len(css_all))
