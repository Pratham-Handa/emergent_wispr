import sys
import numpy as np
from PIL import Image

SRC = sys.argv[1]
OUT = sys.argv[2]

img = Image.open(SRC).convert("RGB")
a = np.asarray(img).astype(int)
light = (a.min(axis=2) > 185)

h, w = light.shape
bg = np.zeros_like(light)
bg[0, :] = light[0, :]
bg[-1, :] = light[-1, :]
bg[:, 0] = light[:, 0]
bg[:, -1] = light[:, -1]

while True:
    growth = (
        np.roll(bg, 1, 0)
        | np.roll(bg, -1, 0)
        | np.roll(bg, 1, 1)
        | np.roll(bg, -1, 1)
    ) & light & ~bg
    if not growth.any():
        break
    bg |= growth

alpha = np.where(bg, 0, 255).astype(np.uint8)
rgba = np.dstack([np.asarray(img), alpha])
out = Image.fromarray(rgba, "RGBA")
out.save(OUT)
print("saved", OUT, "bg pixels:", int(bg.sum()))
