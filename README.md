# SpineRehab Pro - Phục Hồi Thoát Vị Đĩa Đệm Thắt Lưng L4-L5

Hệ thống ứng dụng Web / PWA hỗ trợ phục hồi chức năng cột sống thắt lưng, xây dựng "chiếc đai nẹp bằng cơ bắp" (inner core muscular brace) và theo dõi lộ trình giảm mỡ (72.3 kg -> 61.5 kg) thiết kế riêng cho Kỹ sư IT 39 tuổi mới bắt đầu.

Ứng dụng được xây dựng theo nguyên lý cơ sinh học thể thao và nghiên cứu lâm sàng của Giáo sư Stuart McGill (Đại học Waterloo).

---

## 🌟 Triết lý thiết kế (Core Philosophy)
1. **Zero Jargon:** Không sử dụng thuật ngữ mơ hồ mà chuyển đổi 100% sang các ẩn dụ vật lý trực quan (Gồng bụng như chuẩn bị ho, Kẹp bút chì giữa hai bả vai, Bản lề hông đẩy cửa bằng mông).
2. **Sensory Feedback First (Bản đồ cảm giác):** Mỗi bài tập đều chỉ rõ vùng cơ đích phải mỏi (xanh) và vị trí tuyệt đối không được đau (đỏ).
3. **Medical Safety Guardrails:** Bảo vệ đĩa đệm tuyệt đối — không uốn cong lưng dưới tải trọng, không xoay vặn trục cột sống, luôn để lại 2 rep dự phòng (RIR = 2).

---

## 🛠️ Các phân hệ chính (6 Modules)
- **Module 1: Spine 101 - Kiến thức vỡ lòng:**
  - Mô hình Bánh Donut Nhân Thạch tương tác (So sánh gập lưng nguy hiểm vs nẹp trung tính an toàn).
  - 3 Kỹ năng sống còn: Abdominal Bracing, Hip Hinge, Khóa xương bả vai kèm nút tự kiểm tra (Self-Check).
- **Module 2: Thư viện bài tập trị liệu:**
  - McGill Curl-up, Modified Side Plank quỳ gối, Bird-Dog, Chest-Supported Row, Glute Bridge.
  - Cấu trúc chuẩn: Chuẩn bị, Thực hiện, Nhịp thở, Bản đồ cảm giác, Video kỹ thuật chuẩn.
- **Module 3: Giám sát an toàn chủ động:**
  - Cơ chế Đèn Giao Thông Cảm Giác (Xanh: Tiếp tục, Vàng: Giảm 30% tải & nghỉ 2p, Đỏ: Khóa buổi tập).
  - Khóa Cột Sống Buổi Sáng (Morning Spine Lock) trước 8:00 sáng.
  - Quy tắc RIR = 2 (Repetitions In Reserve).
  - Lưu lịch sử cơn đau offline trên LocalStorage.
- **Module 4: Sinh hoạt hàng ngày cho dân IT (ADL):**
  - Kỹ thuật rời giường Log Roll.
  - Kỹ thuật cúi nhặt đồ Golfer's Lift.
  - Bộ đếm Pomodoro công thái học 45 phút code / 3 phút đứng dậy giãn cơ gập hông (Half-Kneeling Stretch) & uống nước.
- **Module 5: Bộ đếm thời gian chuyên dụng:**
  - Kim Tự Tháp McGill 5-3-1 (Giữ 8s / Nghỉ 3s / Nghỉ hiệp 45s).
  - Đồng hồ nghỉ kháng lực 45s, 60s, 90s, 120s.
  - Âm thanh Web Audio API thanh nhẹ, không gây giật mình.
- **Module 6: Dinh dưỡng & Cân nặng:**
  - Mục tiêu: 1550 kcal/ngày, 115-125g đạm, 2.75L nước.
  - Nhật ký uống nước bấm nhanh (+250ml) và bình nước trực quan.
  - Biểu đồ lộ trình giảm tải trọng cột sống: 72.3 kg -> 61.5 kg (-10.8 kg).

---

## 🚀 Cài đặt & Phát triển cục bộ
```bash
# Cài đặt dependencies
npm install

# Khởi chạy dev server
npm run dev

# Build production
npm run build
```

---

## 🌐 Triển khai Cloudflare Pages
- **Domain:** [https://backbone-rehealing.aixfactory.io.vn](https://backbone-rehealing.aixfactory.io.vn)
- **Framework:** React + Vite + Tailwind CSS + Lucide Icons + Web Audio API.
