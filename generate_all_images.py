#!/usr/bin/env python3
import json
import os
import sys
import time
import urllib.request
import urllib.parse
import urllib.error

API_BASE = "http://127.0.0.1:18610"
API_KEY = "m2a_655789ca4f4f770bb1442428cc8c62b8"
OUTPUT_DIR = "/home/schu/workspace/ai-world/tmp/backbone-rehealing/public/media"

TASKS = [
    {
        "filename": "donut_model.webp",
        "prompt": "Medical anatomical comparison infographic of human lumbar spine intervertebral disc and a jelly donut. Showing vertebrae, fibrous ring annulus fibrosus, and jelly-like nucleus pulposus squeezing out under forward flexion compression pinching a spinal nerve root. High detail 3D render, medical textbook style, clean studio background."
    },
    {
        "filename": "abdominal_bracing.webp",
        "prompt": "Physical therapy instructional illustration of Abdominal Bracing technique. An athletic person standing and testing core rigidity by poking fingertips into obliques just above the pelvic crest. 3D anatomical overlay showing transverse abdominis forming a solid 360-degree muscular corset brace around the lumbar spine. Clean medical gym setting."
    },
    {
        "filename": "hip_hinge.webp",
        "prompt": "Physical therapy biomechanics diagram of the Hip Hinge wall tap drill. An individual standing 15 cm from a wall, pushing hips back to gently touch the butt to the wall with neutral flat straight spine, hands on hip crease, slight knee bend, green highlights on hamstrings and glutes stretching safely."
    },
    {
        "filename": "scapular_retraction.webp",
        "prompt": "Physical therapy biomechanics diagram of Scapular Retraction: rear back view of torso showing both shoulder blades pulling back and down towards each other, holding a pencil between shoulder blades. Upper back rhomboids and lower traps highlighted in glowing green, perfect posture."
    },
    {
        "filename": "mcgill_curlup.webp",
        "prompt": "Clinical physical therapy demonstration of McGill Curl-Up exercise for back rehab: person lying supine flat on a mat with pelvis and hips completely flat on the ground. One knee bent 90 degrees with foot flat, one leg extended straight. Both hands placed flat under the lumbar lordosis curve arch. Head and shoulders lifted gently only 3 to 5 centimeters off the mat with straight neck looking upward. Clear side profile view, medical studio."
    },
    {
        "filename": "side_plank.webp",
        "prompt": "Physical therapy demonstration of Modified Knees-Bent Side Plank (McGill Side Bridge level 1): person lying on side on a mat, knees bent at 90 degrees behind them, forearm propped perpendicular under shoulder, lifting hips up to create a straight diagonal line from knees through hips to chest. Oblique core and gluteus medius highlighted in glowing green."
    },
    {
        "filename": "bird_dog.webp",
        "prompt": "Physical therapy demonstration of Bird-Dog core stability exercise: person in quadruped position on hands and knees with flat neutral tabletop back, balancing an imaginary glass of water. Right arm reaching straight forward, left leg kicking straight back with heel pushed out, spine perfectly rigid and parallel to mat, medical gym lighting."
    },
    {
        "filename": "chest_supported_row.webp",
        "prompt": "Biomechanics fitness illustration of Chest-Supported Dumbbell Row: person lying chest-supported on a 35 degree incline bench, neutral spine fully supported with no lumbar strain, holding two light dumbbells, pulling elbows back toward ribs and squeezing shoulder blades together. Glowing green highlights on lats and rhomboids."
    },
    {
        "filename": "glute_bridge.webp",
        "prompt": "Physical therapy demonstration of Glute Bridge for lumbar spine safety: person lying on back on a mat, knees bent with feet flat on floor hip-width apart. Hips lifted by squeezing glutes into a moderate straight slope from shoulders to knees, flat neutral lumbar spine avoiding hyperextension. Posterior pelvic tilt, glute muscles highlighted."
    },
    {
        "filename": "log_roll.webp",
        "prompt": "Physical therapy 3-step sequence diagram of Log Roll bed mobility technique: 1 person lying in bed bending both knees, 2 rolling entire body as one solid unit like a log onto their side without spinal twisting, 3 swinging legs off edge of bed while pushing up with arms with a straight spine."
    },
    {
        "filename": "golfers_lift.webp",
        "prompt": "Physical therapy demonstration of Golfer's Lift technique for safe bending: person leaning forward with flat straight spine to pick up a dropped object from floor, supporting weight on one grounded leg with slight knee bend, while kicking the other leg straight behind horizontally as a counterweight balance."
    },
    {
        "filename": "hip_flexor_stretch.webp",
        "prompt": "Physical therapy illustration of Half-Kneeling Hip Flexor Stretch for sedentary desk workers: person in a half-kneeling lunge on an exercise mat, back knee down, tall upright torso, glutes engaged with posterior pelvic tilt to safely stretch the anterior psoas and hip flexor without arching lower back."
    },
    {
        "filename": "emergency_decompression.webp",
        "prompt": "Emergency acute lumbar decompression illustration: Prone Lying technique. Person lying completely flat on stomach face-down on a comfortable exercise mat, head resting comfortably on folded arms, spine completely unloaded in gentle neutral extension, deep diaphragmatic abdominal breathing, calming clinical setting."
    }
]

def generate_image(prompt, out_path):
    url = f"{API_BASE}/v1/images/generations"
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": "muse-image",
        "prompt": prompt,
        "size": "16:9",
        "response_format": "url"
    }
    req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers=headers, method="POST")
    with urllib.request.urlopen(req, timeout=180) as resp:
        res = json.loads(resp.read().decode("utf-8"))
        data = res.get("data", [])
        if not data:
            raise Exception("No image data returned")
        img_url = data[0].get("url")
        print(f"  Got URL: {img_url}")
        urllib.request.urlretrieve(img_url, out_path)
        print(f"  Saved -> {out_path}")

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"Starting generation for {len(TASKS)} images...")
    for idx, item in enumerate(TASKS, 1):
        target_path = os.path.join(OUTPUT_DIR, item["filename"])
        if os.path.exists(target_path) and os.path.getsize(target_path) > 1000:
            print(f"[{idx}/{len(TASKS)}] Skipping {item['filename']} (already exists)")
            continue
        print(f"[{idx}/{len(TASKS)}] Generating {item['filename']}...")
        try:
            generate_image(item["prompt"], target_path)
            time.sleep(1)
        except Exception as e:
            print(f"  FAILED {item['filename']}: {e}")

if __name__ == "__main__":
    main()
