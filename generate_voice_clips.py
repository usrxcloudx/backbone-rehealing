import os
import asyncio
import edge_tts

OUTPUT_DIR = "/home/schu/workspace/ai-world/tmp/backbone-rehealing/public/audio/voice"
os.makedirs(OUTPUT_DIR, exist_ok=True)

VOICE_CLIPS = [
    ("count_1.mp3", "Một"),
    ("count_2.mp3", "Hai"),
    ("count_3.mp3", "Ba"),
    ("count_4.mp3", "Bốn"),
    ("count_5.mp3", "Năm"),
    ("count_6.mp3", "Sáu"),
    ("count_7.mp3", "Bảy"),
    ("count_8.mp3", "Tám"),
    ("start_hold.mp3", "Bắt đầu giữ!"),
    ("rest_3s.mp3", "Hạ xuống nghỉ ba giây."),
    ("prepare.mp3", "Chuẩn bị!"),
    ("next_rep.mp3", "Tiếp tục giữ!"),
    ("set_rest_45s.mp3", "Hết hiệp! Nghỉ sâu bốn mươi lăm giây."),
    ("remaining_15s.mp3", "Còn mười lăm giây."),
    ("remaining_5s.mp3", "Còn năm giây."),
    ("set_1.mp3", "Bắt đầu hiệp một."),
    ("set_2.mp3", "Bắt đầu hiệp hai."),
    ("set_3.mp3", "Bắt đầu hiệp ba."),
    ("rest_start_45s.mp3", "Bắt đầu nghỉ bốn mươi lăm giây."),
    ("rest_start_60s.mp3", "Bắt đầu nghỉ sáu mươi giây."),
    ("rest_start_90s.mp3", "Bắt đầu nghỉ chín mươi giây."),
    ("rest_start_120s.mp3", "Bắt đầu nghỉ hai phút."),
    ("remaining_30s.mp3", "Còn ba mươi giây."),
    ("remaining_10s.mp3", "Còn mười giây."),
    ("rest_finished.mp3", "Hết giờ nghỉ, sẵn sàng tập tiếp!"),
    ("workout_complete.mp3", "Xuất sắc! Bạn đã hoàn thành toàn bộ bài tập!"),
    ("pause.mp3", "Tạm dừng bài tập."),
    ("resume.mp3", "Tiếp tục bài tập.")
]

async def generate_clip(filename, text):
    path = os.path.join(OUTPUT_DIR, filename)
    if os.path.exists(path) and os.path.getsize(path) > 1000:
        print(f"Skipping {filename}, already exists")
        return
    print(f"Generating {filename}: '{text}'...")
    # rate +10% for crisp countdown
    communicate = edge_tts.Communicate(text, voice="vi-VN-HoaiMyNeural", rate="+10%")
    await communicate.save(path)
    print(f"✓ Saved {filename} ({os.path.getsize(path)} bytes)")

async def main():
    for filename, text in VOICE_CLIPS:
        await generate_clip(filename, text)
        await asyncio.sleep(0.1)
    print("\nAll 28 voice clips generated successfully!")

if __name__ == "__main__":
    asyncio.run(main())
