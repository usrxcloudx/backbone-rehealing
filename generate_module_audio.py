import os
import asyncio
import edge_tts

OUTPUT_DIR = "/home/schu/workspace/ai-world/tmp/backbone-rehealing/public/audio/narrations"
os.makedirs(OUTPUT_DIR, exist_ok=True)

NARRATIONS = [
    (
        "mod1_overview.mp3",
        "Chào bạn. Đây là Module một: Kiến thức vỡ lòng về cột sống. "
        "Hãy tưởng tượng đĩa đệm L bốn, L năm của bạn như một chiếc bánh donut kẹp nhân kem dẻo ở giữa. "
        "Lớp vỏ bánh bên ngoài là vòng xơ dai, còn nhân kem bên trong là nhân nhầy mọng nước. "
        "Khi bạn uốn cong lưng để cúi hoặc nhấc vật, mép trước hai đốt sống sẽ kẹp nghiến lại như hai hàm răng, "
        "khiến nhân kem bên trong bị đẩy phụt mạnh ra phía sau và chèn ép trực tiếp vào rễ dây thần kinh tọa, "
        "gây ra cơn đau buốt và tê rát xuống mông và chân. "
        "Ngược lại, khi bạn giữ cột sống bất động ở trạng thái trung tính, áp lực sẽ phân bổ đều ba trăm sáu mươi độ. "
        "Mục tiêu phục hồi của chúng ta không phải để lưng uốn dẻo, mà là xây dựng một chiếc đai nẹp bằng cơ bắp vững chắc quanh thắt lưng."
    ),
    (
        "mod2_overview.mp3",
        "Chào bạn. Đây là Thư viện bài tập ba cấp độ phục hồi chức năng cột sống thắt lưng. "
        "Lộ trình được chia làm ba giai đoạn: "
        "Cấp độ một từ tuần không đến tuần sáu, tập trung dập tắt đau cấp và kích hoạt đai cơ bụng với cánh tay đòn ngắn, bao gồm năm bài tập McGill Curl up, Side plank quỳ gối, Bird dog cơ bản, Kéo tạ tỳ ngực và Cầu mông hai chân. "
        "Cấp độ hai từ tuần sáu đến tuần mười hai, tăng đòn bẩy bằng cách duỗi thẳng chân trong bài Full side plank và thách thức chống xoay động với Bird dog vẽ hình vuông. "
        "Cấp độ ba sau mười hai tuần, xây dựng sức mạnh chức năng đời thực với bài Xách tạ một bên Suitcase carry và Goblet box squat. "
        "Nguyên tắc cốt lõi: Giữ thắt lưng bất động tuyệt đối trong mọi chuyển động."
    ),
    (
        "mod3_overview.mp3",
        "Chào bạn. Đây là Module ba: Giám sát an toàn và quy tắc đèn giao thông. "
        "Khi tập luyện phục hồi, bạn phải theo dõi phản ứng cơ thể theo ba màu: "
        "Đèn Xanh: Cảm giác mỏi cơ hoặc căng tức nhẹ, hoàn toàn an toàn để tiếp tục. "
        "Đèn Vàng: Đau ê ẩm tăng dần hoặc kéo dài quá hai mươi tư giờ, cảnh báo bạn phải hạ bớt cường độ tập. "
        "Đèn Đỏ: Đau buốt đột ngột hoặc tê lan dọc xuống chân, bạn phải dừng tập ngay lập tức và bấm nút S O S nằm sấp giảm áp. "
        "Đặc biệt ghi nhớ: Trong sáu mươi phút đầu tiên sau khi thức dậy, đĩa đệm ngậm nước căng phồng tối đa, tuyệt đối không được cúi gập lưng uốn cong để tránh rách bao xơ."
    ),
    (
        "mod4_overview.mp3",
        "Chào bạn. Đây là Module bốn: Cẩm nang sinh hoạt công thái học cho kỹ sư công nghệ thông tin. "
        "Để bảo vệ đĩa đệm suốt mười hai tiếng mỗi ngày, bạn cần nắm vững bốn thói quen sống còn: "
        "Thứ nhất, kỹ thuật lăn khúc gỗ Log Roll khi thức dậy: Xoay toàn bộ thân người cùng lúc sang một bên, tuyệt đối không gập vặn thắt lưng. "
        "Thứ hai, đứng lên ngồi xuống bằng bản lề hông Hip Hinge: Mông đẩy ra sau như đẩy đóng cánh cửa tủ, thắt lưng giữ thẳng tắp. "
        "Thứ ba, nhặt đồ rơi dưới sàn bằng tư thế Golfer lift: Đưa một chân ra sau đối trọng để giữ sống lưng bất động. "
        "Và thứ tư, cài đặt đồng hồ Pomodoro: Cứ bốn mươi lăm phút ngồi code, hãy đứng dậy ba phút để giải phóng cơ thắt lưng chậu."
    ),
    (
        "mod5_overview.mp3",
        "Chào bạn. Đây là Module năm: Bộ đếm thời gian chuyên dụng cho tập luyện phục hồi. "
        "Được thiết kế riêng để bạn đặt điện thoại dưới sàn tập: Màn hình số tương phản cao, âm thanh dịu tai không giật mình, và đặc biệt có Huấn luyện viên giọng đọc Tiếng Việt đồng hành. "
        "Giao thức Kim tự tháp McGill năm ba một: Hiệp một giữ tám giây nghỉ ba giây lặp lại năm nhịp, sau đó nghỉ sâu bốn mươi lăm giây, rồi đến hiệp hai ba nhịp và hiệp ba một nhịp. "
        "Giọng đọc sẽ đếm từng giây, hô khẩu lệnh giữ, nhắc hạ xuống nghỉ ba giây và báo hiệp mới, giúp bạn tập trung toàn bộ tâm trí vào hơi thở."
    ),
    (
        "mod6_overview.mp3",
        "Chào bạn. Đây là Module sáu: Chiến lược giảm cân từ bảy mươi hai phẩy ba ki lô gam xuống sáu mươi mốt phẩy năm ki lô gam. "
        "Mỗi một ki lô gam mỡ thừa giảm đi sẽ giảm bớt bốn ki lô gam phản lực giáng lên đốt sống L bốn L năm khi bạn bước đi. "
        "Mục tiêu là cắt giảm mười phẩy tám ki lô gam bằng công thức kiềng ba chân: "
        "Thứ nhất: Thâm hụt năm trăm calo mỗi ngày, nạp một nghìn năm trăm năm mươi calo với một trăm hai mươi gam đạm nuôi cơ nẹp bụng. "
        "Thứ hai: Uống đủ hai phẩy bảy mươi lăm lít nước để bù ẩm cho nhân nhầy đĩa đệm. "
        "Và thứ ba: Đi bộ nhanh tám nghìn bước mỗi ngày, chia làm ba cữ sau các bữa ăn. Đi bộ kích hoạt hiện tượng thẩm thấu thủy tĩnh, hoạt động như một máy bơm dịch dinh dưỡng nuôi đĩa đệm mà không tạo áp lực chấn động như chạy bộ."
    ),
    (
        "sos_overview.mp3",
        "Chào bạn. Đây là quy trình cấp cứu giảm áp đĩa đệm khẩn cấp. "
        "Nếu bạn vừa bị đau nhói buốt thắt lưng hoặc tê giật dọc xuống chân, hãy dừng mọi động tác ngay lập tức! "
        "Từ từ nằm sấp xuống sàn hoặc đệm phẳng, đặt trán tựa lên mu hai bàn tay, hai chân duỗi thẳng thả lỏng hoàn toàn. "
        "Tập trung vào hơi thở bụng: Hít vào sâu bốn giây bằng mũi, phình bụng ấn nhẹ xuống sàn. Sau đó thở ra chậm sáu giây bằng miệng, thả lỏng toàn bộ cơ lưng dưới. "
        "Duy trì tư thế này trong năm phút để trọng lực đưa nhân nhầy đĩa đệm trượt trở về vị trí trung tâm, giải phóng chèn ép dây thần kinh tọa."
    )
]

async def generate_narration(filename, text):
    path = os.path.join(OUTPUT_DIR, filename)
    if os.path.exists(path) and os.path.getsize(path) > 1000:
        print(f"Skipping {filename}, already exists")
        return
    print(f"Generating {filename}...")
    communicate = edge_tts.Communicate(text, voice="vi-VN-HoaiMyNeural", rate="+3%")
    await communicate.save(path)
    print(f"✓ Saved {filename} ({os.path.getsize(path)} bytes)")

async def main():
    for filename, text in NARRATIONS:
        await generate_narration(filename, text)
        await asyncio.sleep(0.1)
    print("\nAll 7 module studio narrations generated successfully!")

if __name__ == "__main__":
    asyncio.run(main())
