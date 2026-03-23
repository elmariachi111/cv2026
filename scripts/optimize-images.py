#!/usr/bin/env python3
"""
optimize-images.py – Normalize and resize CV activity photos.

What it does:
  1. Corrects EXIF orientation
  2. Center-crops to a target aspect ratio (default 4:3)
  3. Resizes to a fixed output size (default 1200 × 900)
  4. Normalises luminosity: applies per-image gamma so every image
     reaches a common mean L* value (target_L, default 118)
  5. Writes optimised JPEGs to <assets>/optimized/

Usage:
  python3 scripts/optimize-images.py [options]

Options:
  --input    DIR   Source folder   (default: assets)
  --output   DIR   Output folder   (default: assets/optimized)
  --width    PX    Output width    (default: 800)
  --height   PX    Output height   (default: 600)
  --target-l INT   Target mean L*  (default: 118)  0–255
  --quality  INT   JPEG quality    (default: 45)   1–95
  --dry-run        Analyse only, don't write files
"""

import argparse
import math
import os
import sys
from pathlib import Path

from PIL import Image, ImageOps

# ── helpers ─────────────────────────────────────────────────────────────────

def mean_luminance(img_rgb: Image.Image) -> float:
    """Return mean L* (0–255) of the image in LAB space."""
    lab = img_rgb.convert("LAB")
    pixels = list(lab.getdata(0))          # L channel only
    return sum(pixels) / len(pixels)


def apply_gamma(img_rgb: Image.Image, gamma: float) -> Image.Image:
    """Apply a power-law (gamma) curve to the whole image."""
    lut = [min(255, int(round(255 * (v / 255) ** gamma))) for v in range(256)]
    lut_bytes = bytes(lut * 3)             # same LUT for R, G, B
    return img_rgb.point(lut_bytes)


def find_gamma(img_rgb: Image.Image, target_l: float,
               lo: float = 0.25, hi: float = 4.0, tol: float = 0.5) -> tuple:
    """
    Binary-search for the gamma that makes mean_luminance(img^γ) == target_l.
    Returns (gamma, achieved_l).
    """
    for _ in range(30):                    # 30 iterations → < 0.001 precision
        mid = (lo + hi) / 2
        test_l = mean_luminance(apply_gamma(img_rgb, mid))
        if abs(test_l - target_l) < tol:
            return mid, test_l
        # higher gamma → darker → smaller test_l
        if test_l > target_l:
            lo = mid                       # need to darken more → increase gamma
        else:
            hi = mid                       # need to brighten → decrease gamma
    return mid, test_l


def center_crop(img: Image.Image, target_w: int, target_h: int) -> Image.Image:
    """
    Crop the image to exactly target_w × target_h from the center.
    If the image is smaller in either dimension it is first scaled up
    just enough to fill.
    """
    src_w, src_h = img.size
    scale = max(target_w / src_w, target_h / src_h)
    if scale > 1.0:
        new_w = math.ceil(src_w * scale)
        new_h = math.ceil(src_h * scale)
        img = img.resize((new_w, new_h), Image.LANCZOS)
        src_w, src_h = img.size

    left = (src_w - target_w) // 2
    top  = (src_h - target_h) // 2
    return img.crop((left, top, left + target_w, top + target_h))


# ── main ─────────────────────────────────────────────────────────────────────

def process(args):
    input_dir  = Path(args.input)
    output_dir = Path(args.output)
    target_w   = args.width
    target_h   = args.height
    target_l   = args.target_l
    quality    = args.quality
    dry_run    = args.dry_run

    jpgs = sorted(input_dir.glob("*.jpg")) + sorted(input_dir.glob("*.JPG")) + \
           sorted(input_dir.glob("*.jpeg"))

    if not jpgs:
        print(f"No JPEG files found in {input_dir}")
        sys.exit(1)

    if not dry_run:
        output_dir.mkdir(parents=True, exist_ok=True)

    print(f"{'FILE':<40}  {'ORIG SIZE':>12}  {'ORIG L':>8}  {'GAMMA':>7}  {'OUT L':>7}")
    print("-" * 80)

    for path in jpgs:
        img = Image.open(path)
        img = ImageOps.exif_transpose(img)          # honour EXIF rotation
        img = img.convert("RGB")

        # ── measure luminance on the CROPPED region (what will actually show) ──
        orig_l = mean_luminance(img)
        cropped = center_crop(img, target_w, target_h)
        crop_l  = mean_luminance(cropped)

        # ── binary-search for the exact gamma on the cropped image ──────────
        if abs(crop_l - target_l) < 1:
            gamma, out_l = 1.0, crop_l             # already on target
        else:
            gamma, out_l = find_gamma(cropped, target_l)

        if not dry_run:
            result = apply_gamma(cropped, gamma)
            out_path = output_dir / path.name
            result.save(out_path, "JPEG", quality=quality, optimize=True)
        else:
            out_l = target_l  # estimated

        print(f"{path.name:<40}  {Image.open(path).size[0]}x{Image.open(path).size[1]:>5}  "
              f"{orig_l:>8.1f}  {gamma:>7.3f}  {out_l:>7.1f}")

    if not dry_run:
        print(f"\n✓  {len(jpgs)} images written to {output_dir}")
        print(f"   Size: {target_w}×{target_h} px  |  Target L*: {target_l}  |  JPEG quality: {quality}")


def main():
    p = argparse.ArgumentParser(description=__doc__,
                                formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--input",    default="assets",           help="Source folder")
    p.add_argument("--output",   default="assets/optimized", help="Output folder")
    p.add_argument("--width",    type=int, default=800,      help="Output width (px)")
    p.add_argument("--height",   type=int, default=600,      help="Output height (px)")
    p.add_argument("--target-l", type=int, default=118,      help="Target mean L* (0–255)")
    p.add_argument("--quality",  type=int, default=45,       help="JPEG quality (1–95)")
    p.add_argument("--dry-run",  action="store_true",        help="Analyse only, don't write")
    args = p.parse_args()
    process(args)


if __name__ == "__main__":
    main()
