import subprocess
import os
import sys

OUTPUT_DIR = "/home/schu/workspace/ai-world/tmp/backbone-rehealing/public/media"
os.makedirs(OUTPUT_DIR, exist_ok=True)

IMAGES = [
    {
        "filename": "full_side_plank.webp",
        "prompt": "Full side plank exercise demonstration, Level 2 progression, adult male fitness athlete with straight legs, top foot placed in front of bottom foot in staggered stance, elbow directly under shoulder, perfectly straight spine from heels to head, glowing green line showing neutral spine, dark clinical gym studio background, 3D medical anatomy render, photorealistic, 8k resolution"
    },
    {
        "filename": "single_leg_bridge.webp",
        "prompt": "Single leg glute bridge exercise demonstration, Level 2 progression, adult male lying supine on mat, one leg bent driving heel into floor while other leg is held extended straight, hips elevated forming straight diagonal line from knees to chest, glowing green highlighting gluteus maximus, spine perfectly straight without hyperextension, 3D clinical medical illustration, dark studio, 8k"
    },
    {
        "filename": "suitcase_carry.webp",
        "prompt": "Suitcase carry exercise demonstration, Level 3 progression, Stuart McGill spinal training, adult male athletic posture walking with heavy dumbbell in one hand only, spine completely vertical and upright resisting side bending, abdominal muscles highlighted with glowing green brace, dark modern medical biomechanics studio, photorealistic 3D, 8k"
    },
    {
        "filename": "goblet_box_squat.webp",
        "prompt": "Goblet box squat exercise demonstration, Level 3 progression, athletic adult male holding dumbbell vertically against chest with both hands, sitting back onto wooden box with pure hip hinge, upright vertical spine without lumbar flexion, knees tracking over toes, medical biomechanics glowing lines, dark studio, photorealistic 3D render, 8k"
    },
    {
        "filename": "fast_walking.webp",
        "prompt": "Biomechanics of therapeutic fast walking for lumbar disc herniation rehabilitation, adult male brisk walking outdoors on smooth park track, tall upright spine posture, natural relaxed arm swing, rhythmic fluid movement, glowing blue and green lumbar disc L4-L5 showing fluid rehydration and gentle decompression, medical sports science illustration, cinematic daylight, 8k"
    }
]

def generate_image(item):
    out_path = os.path.join(OUTPUT_DIR, item["filename"])
    if os.path.exists(out_path) and os.path.getsize(out_path) > 10000:
        print(f"Skipping {item['filename']}, already exists ({os.path.getsize(out_path)} bytes)")
        return True

    print(f"\n--- Generating {item['filename']} ---")
    cmd = [
        "python3",
        "/home/schu/workspace/ai-world/muse2api/muse_cli.py",
        "image",
        "--prompt", item["prompt"],
        "--size", "16:9",
        "--output", out_path
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode == 0 and os.path.exists(out_path):
        print(f"✓ Generated {item['filename']} successfully ({os.path.getsize(out_path)} bytes)")
        return True
    else:
        print(f"✗ Failed generating {item['filename']}: {res.stderr}")
        return False

for img in IMAGES:
    generate_image(img)

print("\nAll progression images generated.")
