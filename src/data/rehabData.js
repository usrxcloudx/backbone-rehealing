// Dữ liệu y khoa & phục hồi chức năng chuẩn xác cho SpineRehab Pro

export const SPINE_101 = {
  donutModel: {
    title: "Mô hình 'Bánh Donut Nhân Thạch' Cột Sống",
    metaphor: "Cột sống giống như một chuỗi bánh donut kẹp nhân kem dẻo ở giữa",
    description: "Đĩa đệm bao gồm lớp vỏ xơ dai bao bọc bên ngoài (Annulus Fibrosus) và nhân nhầy mọng nước như thạch kem ở bên trong (Nucleus Pulposus).",
    dangerousMechanism: {
      action: "Uốn cong lưng dưới để cúi hoặc nhấc vật",
      consequence: "Mép trước hai đốt sống bị ép nghiến lại, nhân thạch bên trong bị đẩy phụt ra mép sau, chèn ép trực tiếp vào rễ dây thần kinh tọa gây đau buốt, tê giật xuống mông và chân."
    },
    safeMechanism: {
      action: "Giữ cột sống thắt lưng bất động ở trạng thái trung tính",
      consequence: "Áp lực được phân bổ đều 360 độ trên toàn bộ bề mặt đĩa đệm. 'Chiếc đai nẹp bằng cơ bắp' bảo vệ tuyệt đối rễ thần kinh."
    },
    goldenRule: "Mục tiêu tập luyện KHÔNG PHẢI để lưng uốn dẻo, mà là xây dựng 'chiếc đai nẹp bằng cơ bắp' xung quanh thắt lưng để cột sống luôn bất động ở trạng thái an toàn."
  },
  foundationSkills: [
    {
      id: "bracing",
      title: "Kỹ năng 1: Abdominal Bracing (Gồng cứng thành bụng)",
      sub: "Tạo chiếc đai nẹp cơ bắp 360° bảo vệ cột sống",
      physicalMetaphor: "Gồng bụng như chuẩn bị có ai đó đấm vào bụng, hoặc như đang khựng lại khi ho nhẹ",
      image: "/media/abdominal_bracing.webp",
      videoId: "J_2ImNPjxtc",
      videoTitle: "Kỹ thuật Abdominal Bracing chuẩn y khoa",
      steps: [
        "Đứng hoặc nằm ngửa, thả lỏng toàn bộ cơ thể.",
        "Đặt 2 đầu ngón tay vào hai bên hông (cách mào xương chậu 2 cm về phía rốn).",
        "Ho nhẹ một cái 'Hắt!'. Bạn sẽ thấy vùng thịt sâu dưới ngón tay tự động nảy bật ra và căng cứng lại.",
        "Chủ động duy trì độ cứng đó của thành bụng, trong khi lồng ngực vẫn hít thở đều đặn và nói chuyện bình thường."
      ],
      selfCheck: {
        correct: "Dùng ngón tay ấn mạnh vào thành bụng thấy cứng chắc như quả bóng da bơm căng. Thành bụng hơi nở rộng ra 360 độ.",
        wrong: "Hóp bụng thụt sâu vào trong hướng về phía sống lưng (Abdominal Hollowing) — Đây là SAI LẦM làm mất đi sự ổn định của cột sống."
      },
      targetSensory: "Căng cứng toàn bộ cơ ngang bụng (Transverse Abdominis) và cơ liên sườn như đang đeo thắt lưng nẹp chặt."
    },
    {
      id: "hip-hinge",
      title: "Kỹ năng 2: Hip Hinge (Bản lề hông)",
      sub: "Cách gập người không dùng một milimet thắt lưng nào",
      physicalMetaphor: "Tưởng tượng hai tay bận bưng đồ và dùng mông để đẩy đóng cánh cửa tủ phía sau",
      image: "/media/hip_hinge.webp",
      videoId: "wP3xku9QDf0",
      videoTitle: "Bài tập Chạm Mông Vào Tường (Wall Hip Hinge Drill)",
      steps: [
        "Đứng cách tường khoảng 15 cm, hai chân mở rộng bằng vai, mũi chân hơi mở nhẹ.",
        "Đặt hai cạnh bàn tay vào nếp gấp bẹn (ranh giới giữa đùi và hông).",
        "Đẩy hông và mông lùi thẳng ra sau cho đến khi mông chạm nhẹ vào tường.",
        "Đầu gối chỉ hơi chùng tự nhiên 15-20 độ (không khuỵu gối thành squat), cột sống giữ thẳng tắp như mặt bàn."
      ],
      selfCheck: {
        correct: "Cảm giác căng tức, giãn rõ ở vùng mông và gân kheo (mặt sau đùi). Cột sống thắt lưng hoàn toàn bất động và thư giãn.",
        wrong: "Lưng cong tròn ra phía sau, hoặc đầu gối chùng quá nhiều đẩy về phía trước như ngồi xổm."
      },
      targetSensory: "Cơ mông và đùi sau chịu tải 100%. Vùng thắt lưng hoàn toàn không có cảm giác chịu lực."
    },
    {
      id: "scapular-retraction",
      title: "Kỹ năng 3: Khóa xương bả vai (Scapular Retraction)",
      sub: "Kẹp bút chì sau lưng để giải tỏa áp lực đĩa đệm",
      physicalMetaphor: "Tưởng tượng có một chiếc bút chì nằm dọc giữa hai xương bả vai và bạn kẹp chặt nó lại",
      image: "/media/scapular_retraction.webp",
      videoId: "ro2vfHfD0DQ",
      videoTitle: "Khóa bả vai và bảo vệ lưng trên",
      steps: [
        "Ngồi thẳng hoặc đứng thẳng, hai tay buông tự nhiên.",
        "Kéo nhẹ hai vai ra sau và hơi ấn xuống dưới (hướng về phía túi quần sau).",
        "Ép chặt hai xương bả vai lại với nhau như đang kẹp chặt chiếc bút chì ở giữa sống lưng.",
        "Giữ lồng ngực mở rộng, không ưỡn cong thắt lưng ra phía trước."
      ],
      selfCheck: {
        correct: "Cảm nhận rõ hai khối cơ giữa hai bả vai (cơ trám và cơ thang dưới) siết chặt lại. Cổ thoải mái không bị rụt vai.",
        wrong: "Nhún vai lên sát mang tai (gây căng cơ cổ) hoặc ưỡn ngực đẩy cong vùng thắt lưng."
      },
      targetSensory: "Căng cơ lưng trên và giữa hai bả vai. Cột sống cổ và thắt lưng giữ nguyên độ cong sinh lý."
    }
  ]
};

export const LEVELS_CONFIG = {
  level1: {
    id: "level1",
    levelNumber: 1,
    name: "Cấp độ 1: Nền Tảng & Ổn Định",
    timeline: "Tuần 0 - 6 (Khởi đầu bắt buộc)",
    badge: "Người mới & Đang có triệu chứng",
    color: "emerald",
    summary: "Dập tắt cơn đau cấp, bảo vệ đĩa đệm L4-L5 tuyệt đối, kích hoạt đai cơ bụng 360° với cánh tay đòn ngắn nhất.",
    criteriaToAdvance: "Thực hiện liên tục 3-4 tuần hoàn toàn KHÔNG đau thắt lưng; giữ Side Plank quỳ gối vững vàng > 30 giây mỗi bên."
  },
  level2: {
    id: "level2",
    levelNumber: 2,
    name: "Cấp độ 2: Tăng Đòn Bẩy & Chống Xoay",
    timeline: "Tuần 6 - 12 (Sau khi hết đau cấp)",
    badge: "Tăng tải có kiểm soát",
    color: "blue",
    summary: "Duỗi thẳng chân kéo dài cánh tay đòn, thách thức cơ liên sườn và cơ vuông thắt lưng, tập phản xạ chống xoay khi chuyển động.",
    criteriaToAdvance: "Giữ Full Side Plank duỗi thẳng chân > 45 giây mỗi bên không sụp hông; giữ Bird-Dog vẽ hình vuông không chao đảo lưng."
  },
  level3: {
    id: "level3",
    levelNumber: 3,
    name: "Cấp độ 3: Sức Mạnh Chức Năng Đời Thực",
    timeline: "Sau 12 tuần (Cột sống bền vững)",
    badge: "Phòng ngừa tái phát vĩnh viễn",
    color: "amber",
    summary: "Chuyển hóa sức mạnh nẹp cột sống vào các hoạt động thực tế: xách đồ nặng một bên (chống vẹo cột sống), ngồi xổm an toàn.",
    criteriaToAdvance: "Cân nặng đạt ngưỡng 61 - 63 kg, hoàn toàn không còn đau lưng hay tê bì chân khi đi bộ và bưng bê đồ vật."
  }
};

export const EXERCISES = [
  // ==========================================
  // LEVEL 1: NỀN TẢNG (5 BÀI CỐT LÕI)
  // ==========================================
  {
    id: "mcgill-curlup",
    levelId: "level1",
    name: "McGill Curl-up",
    vietnameseName: "Gập bụng bảo vệ đĩa đệm",
    level: "Cấp độ 1 - Bắt buộc",
    prescription: "Kim tự tháp McGill: 5 nhịp -> 3 nhịp -> 1 nhịp (Mỗi nhịp giữ 8s, nghỉ 3s). Hết hiệp nghỉ 45s.",
    timerType: "pyramid",
    image: "/media/mcgill_curlup.webp",
    videoId: "vLpHJ1Cxj6k",
    videoTitle: "Dr. Stuart McGill - Hướng dẫn chi tiết McGill Curl-up",
    description: "Bài tập kích hoạt cơ thẳng bụng mà không gây bất kỳ chuyển động uốn cong nào ở cột sống thắt lưng, loại bỏ 100% áp lực gây thoát vị.",
    setup: [
      "Nằm ngửa trên thảm tập phẳng.",
      "Co một chân (đầu gối gập 90 độ, bàn chân đặt phẳng trên sàn). Chân còn lại duỗi thẳng thư giãn hoàn toàn trên sàn.",
      "Luồn hai bàn tay úp xuống dưới hõm thắt lưng (khoảng trống tự nhiên giữa cột sống thắt lưng và mặt sàn) để làm chiếc 'cảm biến áp lực'."
    ],
    execution: [
      "Gồng cứng thành bụng (như Kỹ năng 1 Abdominal Bracing).",
      "Nâng đầu, cổ và vai lên khỏi mặt sàn CHỈ TỪ 3 ĐẾN 5 CM (như một khối cứng thống nhất).",
      "Mắt nhìn thẳng chéo lên trần nhà. Giữ khoảng cách giữa cằm và ngực không đổi (như kẹp một quả cam dưới cằm).",
      "Giữ nguyên áp lực vừa phải của hõm lưng tỳ lên mu bàn tay — tuyệt đối không để lưng đè bẹp dí bàn tay xuống sàn."
    ],
    breathing: "Giữ tư thế trong 8 giây trong khi vẫn hít thở nông đều đặn bằng lồng ngực. Hạ xuống nghỉ 3 giây. Đổi chân co sau mỗi hiệp.",
    sensoryMap: {
      correct: [
        "Nóng rát, mỏi sâu ở thành bụng trên và giữa bụng.",
        "Hõm thắt lưng giữ nguyên vòm cong tự nhiên trên tay.",
        "Cơ cổ thoải mái, không phải gồng cơ nâng đầu."
      ],
      wrong: [
        "Mỏi cổ hoặc đau buốt cổ (do gập cằm vào ngực hoặc ngửa cổ ra sau).",
        "Đau nhói thắt lưng hoặc tay bị lưng đè bẹp xuống sàn (do uốn cong cột sống).",
        "Nâng người lên quá cao như bài gập bụng truyền thống (Sit-up)."
      ]
    }
  },
  {
    id: "side-plank-knees",
    levelId: "level1",
    name: "Kneeling Side Plank",
    vietnameseName: "Plank nghiêng biến thể quỳ gối",
    level: "Cấp độ 1 - Bắt buộc",
    prescription: "Kim tự tháp McGill: 5 nhịp -> 3 nhịp -> 1 nhịp mỗi bên (Mỗi nhịp giữ 8s, nghỉ 3s).",
    timerType: "pyramid",
    image: "/media/side_plank.webp",
    videoId: "K3I1cfAahjQ",
    videoTitle: "Side Plank on Knees - An toàn tuyệt đối cho người đau lưng",
    description: "Kích hoạt cơ vuông thắt lưng (Quadratus Lumborum) và cơ liên sườn — cơ nẹp bên sườn tối quan trọng để giữ ổn định cột sống.",
    setup: [
      "Nằm nghiêng một bên trên thảm.",
      "Gập cả hai đầu gối ra sau một góc 90 độ.",
      "Chống cẳng tay vuông góc xuống sàn, khuỷu tay nằm ngay thẳng dưới khớp vai."
    ],
    execution: [
      "Gồng chặt thành bụng và siết cơ mông.",
      "Nâng hông lên khỏi sàn sao cho từ đầu gối, qua hông đến ngực tạo thành một đường dốc thẳng tắp.",
      "Đẩy nhẹ xương chậu về phía trước để thân người không bị gập ở khớp háng.",
      "Tay còn lại có thể đặt trên hông hoặc ôm trước ngực."
    ],
    breathing: "Giữ 8 giây mỗi nhịp, hít thở nhịp nhàng. Hạ hông xuống nghỉ 3 giây.",
    sensoryMap: {
      correct: [
        "Căng mỏi dữ dội ở vùng sườn eo phía dưới (sát mặt sàn).",
        "Căng cơ mông của bên chân dưới.",
        "Khớp vai vững chãi, không bị sụp vai."
      ],
      wrong: [
        "Đau nhói ở khớp vai (do khuỷu tay đặt quá xa hoặc vai bị rụt).",
        "Đau thắt lưng hoặc võng lưng (do không đẩy hông về phía trước).",
        "Thân người bị xoay úp về phía trước."
      ]
    }
  },
  {
    id: "bird-dog-standard",
    levelId: "level1",
    name: "Standard Bird-Dog",
    vietnameseName: "Chim - Chó thăng bằng chống xoay",
    level: "Cấp độ 1 - Bắt buộc",
    prescription: "Kim tự tháp McGill: 5 nhịp -> 3 nhịp -> 1 nhịp mỗi bên (Giữ 8s, nghỉ 3s).",
    timerType: "pyramid",
    image: "/media/bird_dog.webp",
    videoId: "omBMXz-6RaM",
    videoTitle: "Kỹ thuật Bird-Dog chuẩn Stuart McGill: Chống xoay cột sống",
    description: "Rèn luyện khả năng chống xoay (Anti-rotation) và kích hoạt nhóm cơ nhiều chân (Multifidus) bảo vệ đĩa đệm lưng.",
    setup: [
      "Vào tư thế bò 4 điểm trên thảm: hai bàn tay chống thẳng ngay dưới khớp vai, hai đầu gối mở rộng bằng hông ngay dưới khớp hông.",
      "Lưng giữ phẳng lì tự nhiên như chiếc bàn, đầu thẳng nhìn xuống thảm."
    ],
    execution: [
      "Gồng chặt bụng (Abdominal Bracing) như thể đang đặt một cốc nước đầy trên thắt lưng mà không làm tràn giọt nào.",
      "Đạp gót chân phải thẳng ra phía sau (tưởng tượng đang đạp mạnh vào tường phía sau).",
      "Đồng thời vươn tay trái thẳng ra phía trước (như đang với tay bắt tay ai đó).",
      "Tuyệt đối KHÔNG đá chân hay giơ tay quá cao làm võng thắt lưng. Chỉ nâng đến ngang thân người."
    ],
    breathing: "Giữ cố định 8 giây, thở đều, thu tay chân về chạm nhẹ sàn nghỉ 3 giây rồi đổi bên.",
    sensoryMap: {
      correct: [
        "Căng cứng cơ mông của chân đạp ra sau.",
        "Mỏi cơ lưng trên và cơ vai của tay vươn trước.",
        "Cơ bụng gồng giữ lưng phẳng lì, hông cân bằng không chao đảo."
      ],
      wrong: [
        "Lưng bị võng xuống hình cánh cung (do đá chân quá cao).",
        "Hông bị nghiêng lệch, lắc lư sang một bên (làm mất thăng bằng).",
        "Cổ ngửa lên nhìn phía trước gây căng mỏi gáy."
      ]
    }
  },
  {
    id: "chest-supported-row",
    levelId: "level1",
    name: "Chest-Supported Dumbbell Row (Light)",
    vietnameseName: "Kéo tạ đơn tỳ ngực trên ghế nghiêng",
    level: "Cấp độ 1 - Nền tảng lưng trên",
    prescription: "3 hiệp x 10-12 cái. Mức tạ: 2 - 4 kg mỗi bên (Quy tắc RIR=2). Nghỉ 60-90s giữa hiệp.",
    timerType: "standard",
    image: "/media/chest_supported_row.webp",
    videoId: "ro2vfHfD0DQ",
    videoTitle: "Chest Supported Row: Bảo vệ thắt lưng 100% khi tập lưng",
    description: "Tập lưng xô và bả vai an toàn tuyệt đối vì toàn bộ trọng lượng thân trên được ghế dốc đỡ trọn, cột sống thắt lưng được giải phóng 100% tải trọng.",
    setup: [
      "Chỉnh ghế tập nghiêng một góc 30 đến 45 độ.",
      "Nằm úp sấp, tỳ toàn bộ ngực và bụng trên vào đệm ghế. Hai chân đặt vững chắc trên sàn.",
      "Hai tay cầm hai tạ đơn nhẹ (2-4 kg mỗi bên), cánh tay duỗi thẳng tự nhiên xuống sàn."
    ],
    execution: [
      "Thở ra, dùng cơ lưng kéo hai cùi chỏ ra sau hướng về phía hông.",
      "Siết chặt hai xương bả vai lại với nhau ở điểm cao nhất (như kẹp chặt chiếc bút chì).",
      "Giữ siết trong 1 giây ở đỉnh chuyển động.",
      "Hít vào, từ từ hạ tạ có kiểm soát trong 2 giây trở về vị trí ban đầu."
    ],
    breathing: "Kéo lên thở ra dứt khoát -> Giữ 1s siết bả vai -> Hạ xuống hít vào sâu 2 giây.",
    sensoryMap: {
      correct: [
        "Mỏi và căng cơ xô hai bên dưới nách.",
        "Mỏi vùng cơ lưng trên ở giữa hai xương bả vai.",
        "Cột sống thắt lưng hoàn toàn nhẹ nhõm, không gánh bất kỳ lực nén nào."
      ],
      wrong: [
        "Nhấc ngực rời khỏi đệm ghế hoặc ưỡn cong thắt lưng để lấy đà.",
        "Gồng mỏi cổ và cơ cầu vai trên (do co giật khuỷu tay lên quá cao gần tai).",
        "Thả tạ rơi tự do không có sự kiểm soát của cơ bắp."
      ]
    }
  },
  {
    id: "glute-bridge",
    levelId: "level1",
    name: "Double-Leg Glute Bridge",
    vietnameseName: "Cầu mông 2 chân - Đánh thức cơ mông",
    level: "Cấp độ 1 - Bắt buộc",
    prescription: "3 hiệp x 10 nhịp (Giữ siết 2-3s ở đỉnh mỗi nhịp). Nghỉ 60s giữa hiệp.",
    timerType: "standard",
    image: "/media/glute_bridge.webp",
    videoId: "1GjanYq70KY",
    videoTitle: "Glute Bridge: Cách tập để cơ mông làm việc mà KHÔNG đau thắt lưng",
    description: "Đánh thức cơ mông lớn (Gluteus Maximus) bị 'ngủ quên' do ngồi máy tính 8-10 tiếng mỗi ngày, giúp san sẻ gánh nặng cho cột sống thắt lưng.",
    setup: [
      "Nằm ngửa trên thảm, co hai đầu gối, hai bàn chân đặt phẳng trên sàn cách mông khoảng 1 gang tay (chân mở rộng bằng hông).",
      "Hai tay duỗi dọc hai bên sườn, lòng bàn tay úp xuống sàn.",
      "Thực hiện cuộn nhẹ xương chậu (Posterior Pelvic Tilt) để thắt lưng chạm nhẹ xuống thảm trước khi đẩy."
    ],
    execution: [
      "Ấn mạnh hai gót chân xuống sàn nhà.",
      "Bóp chặt hai bên cơ mông lại với nhau và đẩy hông thẳng lên trên trần nhà.",
      "DỪNG LẠI NGAY khi ngực, bụng và đầu gối tạo thành một đường dốc thẳng. TUYỆT ĐỐI không đẩy ưỡn quá cao làm võng thắt lưng.",
      "Siết chặt mông giữ 2 giây ở đỉnh rồi hạ xuống từ từ chạm nhẹ thảm."
    ],
    breathing: "Đẩy lên thở ra -> Giữ siết mông 2 giây -> Hạ xuống hít vào đều đặn.",
    sensoryMap: {
      correct: [
        "Hai khối cơ mông cứng ngắc như hai viên đá.",
        "Cảm nhận cơ mặt sau đùi (gân kheo) tham gia trợ lực nhẹ.",
        "Vùng thắt lưng hoàn toàn phẳng và êm ái, không có cảm giác bị nén."
      ],
      wrong: [
        "Đau nhói, mỏi thắt lưng (99% do đẩy hông quá cao làm cong uốn cột sống).",
        "Chỉ thấy mỏi mặt trước đùi (do đặt chân quá sát mông).",
        "Bị chuột rút bắp chân (do nhấc ngón chân quá đà hoặc đặt chân quá xa)."
      ]
    }
  },

  // ==========================================
  // LEVEL 2: TĂNG ĐÒN BẨY & CHỐNG XOAY ĐỘNG (4 BÀI)
  // ==========================================
  {
    id: "full-side-plank",
    levelId: "level2",
    name: "Full Side Plank (Staggered)",
    vietnameseName: "Plank nghiêng duỗi thẳng chân (Chân so le)",
    level: "Cấp độ 2 - Tăng đòn bẩy",
    prescription: "Kim tự tháp McGill: 5 nhịp -> 3 nhịp -> 1 nhịp mỗi bên (Giữ 8-10s mỗi nhịp, nghỉ 3s).",
    timerType: "pyramid",
    image: "/media/full_side_plank.webp",
    videoId: "dK29cM2uY6s",
    videoTitle: "McGill Full Side Bridge: Tăng đòn bẩy khi đĩa đệm đã phục hồi",
    description: "Kéo dài cánh tay đòn từ đầu gối xuống tận gót chân, tăng gấp đôi tải trọng lên cơ vuông thắt lưng và cơ mông nhỡ mà vẫn giữ cột sống thẳng tắp.",
    setup: [
      "Nằm nghiêng, duỗi thẳng cả hai chân.",
      "Đặt chân trên ra phía trước chân dưới (tư thế so le Staggered Stance) để tăng diện tích đế tựa và bảo vệ xương chậu.",
      "Chống cùi chỏ vuông góc ngay dưới vai, bàn tay úp trên sàn."
    ],
    execution: [
      "Gồng cứng thành bụng 360 độ.",
      "Nâng hông lên khỏi sàn sao cho từ gót chân, hông đến vai tạo thành một đường thẳng tắp.",
      "Giữ đầu thẳng với cột sống, không ngửa đầu hay gục cổ.",
      "Chủ động khóa cứng xương chậu, không để hông bị xoay đổ về trước hay ngửa ra sau."
    ],
    breathing: "Giữ 8-10 giây mỗi nhịp, duy trì nhịp thở ngực nông, hạ hông xuống nghỉ 3 giây.",
    sensoryMap: {
      correct: [
        "Cơ vuông thắt lưng và cơ liên sườn phía dưới gồng xiết rất mạnh.",
        "Cơ mông nhỡ chân trên và chân dưới cùng kích hoạt.",
        "Khớp vai ổn định, cột sống không bị võng xuống sàn."
      ],
      wrong: [
        "Hông bị xệ xuống gần sàn làm cột sống bị bẻ cong sang một bên.",
        "Xoay vặn thân trên úp sấp xuống mặt đất.",
        "Đau nhói thắt lưng (dấu hiệu cơ bên sườn chưa đủ khỏe -> Hãy quay lại Cấp độ 1 quỳ gối)."
      ]
    }
  },
  {
    id: "bird-dog-square",
    levelId: "level2",
    name: "Bird-Dog Square Pattern",
    vietnameseName: "Bird-Dog vẽ hình vuông trên không",
    level: "Cấp độ 2 - Chống xoay động",
    prescription: "3 hiệp x 4-6 chu kỳ vẽ hình vuông mỗi bên. Nghỉ 45s giữa hiệp.",
    timerType: "standard",
    image: "/media/bird_dog.webp",
    videoId: "4UiT1sPqHqE",
    videoTitle: "Dynamic Bird-Dog Squares: Thử thách cơ chống xoay sâu",
    description: "Khi tay và chân di chuyển vẽ hình vuông nhỏ trên không trung, quán tính dao động sẽ thử thách hệ thần kinh và cơ nhiều chân (Multifidus) phải liên tục phản xạ giữ phẳng thắt lưng.",
    setup: [
      "Vào tư thế bò 4 điểm vững chắc.",
      "Gồng chặt thành bụng, vươn tay trái ra trước và đạp chân phải ra sau ngang tầm thân người."
    ],
    execution: [
      "Giữ nguyên thân người bất động như gắn đinh xuống sàn.",
      "Dùng nắm tay trái và gót chân phải cùng vẽ một hình vuông nhỏ (kích thước khoảng 15x15 cm) trên không trung.",
      "Vẽ chậm rãi có kiểm soát: lên -> sang phải -> xuống -> sang trái.",
      "Đổi chiều vẽ và lặp lại 4-6 lần trước khi đổi bên."
    ],
    breathing: "Hít thở đều đặn theo từng cạnh hình vuông, không nín thở.",
    sensoryMap: {
      correct: [
        "Cơ bụng sâu và cơ dựng sống gồng liên tục để dập tắt dao động lắc lư.",
        "Thắt lưng vẫn phẳng lì, không lệch một milimet.",
        "Cơ mông bóp chặt giữ chân thẳng."
      ],
      wrong: [
        "Lưng uốn lượn chao đảo theo chuyển động của tay chân.",
        "Hông lắc lư sang hai bên.",
        "Vẽ quá nhanh làm mất kiểm soát cơ sinh học."
      ]
    }
  },
  {
    id: "single-leg-bridge",
    levelId: "level2",
    name: "Single-Leg Glute Bridge",
    vietnameseName: "Cầu mông 1 chân (Đơn phương kích hoạt)",
    level: "Cấp độ 2 - Sức mạnh mông",
    prescription: "3 hiệp x 8-10 cái mỗi bên (Dừng lại khi còn làm được 2 cái - RIR=2). Nghỉ 60s.",
    timerType: "standard",
    image: "/media/single_leg_bridge.webp",
    videoId: "_9k3nS5pX7Q",
    videoTitle: "Single Leg Glute Bridge: Khóa xương chậu và chống lệch hông",
    description: "Loại bỏ hoàn toàn sự bù trừ giữa hai chân, buộc cơ mông lớn và cơ mông nhỡ từng bên phải chịu tải 100%, bảo vệ xương chậu không bị xoắn vẹo khi bước đi.",
    setup: [
      "Nằm ngửa, một chân co gối đạp phẳng trên sàn, chân kia duỗi thẳng nâng chéo lên 45 độ hoặc co gối ôm nhẹ trước ngực.",
      "Gồng chặt bụng (Abdominal Bracing) để khóa chặt cột sống thắt lưng."
    ],
    execution: [
      "Dồn toàn bộ lực nhấn mạnh gót chân trụ xuống sàn.",
      "Siết bóp cơ mông chân trụ đẩy hông lên cho đến khi tạo thành một đường thẳng từ vai đến đầu gối chân trụ.",
      "Giữ xương chậu thăng bằng nằm ngang — tuyệt đối KHÔNG để bên hông chân giơ bị rơi xệ xuống.",
      "Giữ 1.5 giây ở đỉnh rồi hạ xuống từ từ chạm thảm."
    ],
    breathing: "Đẩy lên thở ra -> Giữ siết 1.5s -> Hạ xuống hít vào đều đặn.",
    sensoryMap: {
      correct: [
        "Cơ mông của chân trụ căng cứng và nóng bừng.",
        "Cơ đùi sau tham gia hỗ trợ đẩy.",
        "Hai gai chậu luôn nằm ngang bằng nhau song song với mặt trần."
      ],
      wrong: [
        "Xương chậu bị nghiêng lệch, một bên hông bị tụt xuống sàn.",
        "Đau nhói thắt lưng do ưỡn lưng để bù đắp cơ mông yếu (Nếu gặp: quay về bài Cấp độ 1 hai chân)."
      ]
    }
  },
  {
    id: "incline-row-medium",
    levelId: "level2",
    name: "Incline Row (Medium Load)",
    vietnameseName: "Kéo tạ tỳ ngực tăng tải (6 - 8 kg)",
    level: "Cấp độ 2 - Xây dựng cơ lưng xô",
    prescription: "3 hiệp x 8-10 cái. Mức tạ: 6 - 8 kg mỗi bên. Dừng 2s ở đỉnh. Nghỉ 90s.",
    timerType: "standard",
    image: "/media/chest_supported_row.webp",
    videoId: "ro2vfHfD0DQ",
    videoTitle: "Incline Row Progressive Load: Tăng độ dày cơ lưng bảo vệ cột sống",
    description: "Tăng tải trọng tạ đơn khi khớp bả vai đã làm quen, xây dựng 'áo giáp' cơ xô và cơ lưng trên để kéo mở lồng ngực, chống gù lưng IT.",
    setup: [
      "Ghế nghiêng 35-45 độ, ngực tỳ vững chãi lên đệm ghế.",
      "Cầm tạ đơn 6-8 kg mỗi bên, cổ giữ trung tính."
    ],
    execution: [
      "Thở ra, kéo mạnh mẽ hai cùi chỏ ra sau theo hình vòng cung về phía hông.",
      "Kẹp chặt hai xương bả vai ở điểm cao nhất và DỪNG BẤT ĐỘNG 2 GIÂY.",
      "Hạ tạ chậm rãi trong 3 giây để kích hoạt xơ cơ chịu tải lệch tâm (Eccentric Loading)."
    ],
    breathing: "Kéo thở ra -> Dừng 2s giữ hơi thở -> Hạ chậm 3s hít sâu.",
    sensoryMap: {
      correct: [
        "Mỏi sâu và căng cơ lưng giữa, cơ xô hai bên.",
        "Thắt lưng hoàn toàn được ghế nâng đỡ, không có áp lực nén dọc trục."
      ],
      wrong: [
        "Lấy đà nhấc ngực khỏi ghế.",
        "Gồng vai co giật lên gần tai."
      ]
    }
  },

  // ==========================================
  // LEVEL 3: SỨC MẠNH CHỨC NĂNG ĐỜI THỰC (3 BÀI)
  // ==========================================
  {
    id: "suitcase-carry",
    levelId: "level3",
    name: "McGill Suitcase Carry",
    vietnameseName: "Xách tạ 1 bên đi bộ (Chống nghiêng cột sống)",
    level: "Cấp độ 3 - Sức mạnh thực tế",
    prescription: "3 hiệp x 30 giây đi bộ mỗi bên tay. Mức tạ: 8 - 12 kg. Nghỉ 60s giữa các hiệp.",
    timerType: "standard",
    image: "/media/suitcase_carry.webp",
    videoId: "F-h8Fk5g-bY",
    videoTitle: "Squat University: Bài tập xách tạ 1 bên chống vẹo cột sống số 1 của Dr. McGill",
    description: "Bài tập nẹp cột sống đỉnh cao nhất theo nghiên cứu của Dr. Stuart McGill. Tạ nặng một bên tạo ra mô-men lực muốn bẻ cong cột sống sang bên; cơ vuông thắt lưng và cơ liên sườn đối diện buộc phải gồng xiết 100% công suất để giữ người thẳng đứng như cây tùng.",
    setup: [
      "Đứng thẳng người, tay phải cầm một quả tạ đơn hoặc ấm tạ (Kettlebell) nặng 8-12 kg bên sườn.",
      "Tay trái có thể nắm hờ hoặc dang nhẹ để giữ thăng bằng.",
      "Hai mắt nhìn thẳng, vai cân bằng hai bên nằm ngang bằng nhau."
    ],
    execution: [
      "Gồng cứng thành bụng 360 độ (Abdominal Bracing).",
      "Bước đi chậm rãi từng bước dứt khoát trên đường thẳng.",
      "TUYỆT ĐỐI KHÔNG để thân người bị nghiêng nghiêng sang bên cầm tạ, và cũng KHÔNG được rướn người nghiêng sang phía đối diện để bù trừ.",
      "Cột sống luôn thẳng đứng 90 độ so với mặt đất trong suốt 30 giây bước đi."
    ],
    breathing: "Hít thở nhịp nhàng bằng lồng ngực trong khi thành bụng vẫn gồng cứng nẹp chặt thắt lưng.",
    sensoryMap: {
      correct: [
        "Vùng sườn eo và cơ vuông thắt lưng bên KHÔNG CẦM TẠ gồng cứng như thanh thép.",
        "Cơ mông hai bên kích hoạt ổn định xương chậu.",
        "Hai bờ vai luôn cân bằng ngang nhau."
      ],
      wrong: [
        "Người bị kéo trĩu nghiêng sang bên cầm tạ (chứng tỏ tạ quá nặng -> Giảm mức tạ ngay).",
        "Bước đi loạng choạng, chân đá lung tung.",
        "Đau nhói thắt lưng do cột sống bị bẻ cong sang bên."
      ]
    }
  },
  {
    id: "farmers-walk",
    levelId: "level3",
    name: "Farmer's Walk",
    vietnameseName: "Xách tạ 2 bên đi bộ nẹp thân",
    level: "Cấp độ 3 - Sức bền toàn thân",
    prescription: "3 hiệp x 45 giây đi bộ thẳng lưng. Mức tạ: 8 - 14 kg mỗi bên tay. Nghỉ 60-90s.",
    timerType: "standard",
    image: "/media/suitcase_carry.webp",
    videoId: "dK29cM2uY6s",
    videoTitle: "Farmer's Walk: Nẹp cứng cột sống khi mang vác vật nặng",
    description: "Mô phỏng động tác xách hai túi đồ nặng sau khi đi siêu thị về nhà. Rèn luyện sức chịu đựng của đai cơ lõi và xương bả vai dưới tải trọng đứng thẳng.",
    setup: [
      "Cầm hai quả tạ đều hai bên tay, đứng thẳng tắp.",
      "Khóa nhẹ hai xương bả vai ra sau và hạ xuống dưới (Scapular Retraction)."
    ],
    execution: [
      "Gồng cứng bụng, mắt nhìn thẳng về phía trước.",
      "Bước từng bước ngắn, chắc nịch, tiếp đất êm ái.",
      "Giữ cột sống đứng thẳng hoàn toàn, không đung đưa tạ va vào đùi."
    ],
    breathing: "Thở đều theo từng nhịp bước chân, duy trì độ cứng thành bụng.",
    sensoryMap: {
      correct: [
        "Cơ bụng, cơ cầu vai và cẳng tay gồng chắc chắn.",
        "Lưng thẳng tắp, không rung lắc."
      ],
      wrong: [
        "Lưng gù tròn đổ về phía trước.",
        "Bước quá dài làm dằn xóc lên đĩa đệm."
      ]
    }
  },
  {
    id: "goblet-box-squat",
    levelId: "level3",
    name: "Goblet Box Squat",
    vietnameseName: "Ngồi xổm chạm ghế tỳ ngực giữ lưng thẳng",
    level: "Cấp độ 3 - Vua chuyển động hạ thân",
    prescription: "3 hiệp x 8-10 cái. Mức tạ: 4 - 8 kg cầm trước ngực. Nghỉ 90s.",
    timerType: "standard",
    image: "/media/goblet_box_squat.webp",
    videoId: "7Vb_l8q8Dlc",
    videoTitle: "Goblet Box Squat: Cách ngồi xổm an toàn 100% cho người thoát vị đĩa đệm",
    description: "Quả tạ tỳ trước ngực tạo ra trọng tâm đối trọng tự nhiên giúp thân người luôn dựng đứng, triệt tiêu hoàn toàn xu hướng gập cong thắt lưng khi ngồi xuống ghế.",
    setup: [
      "Đặt một chiếc ghế chắc chắn phía sau (chiều cao ngang đầu gối hoặc bắp chân trên).",
      "Hai chân mở rộng hơn vai một chút, mũi chân mở chếch 15-20 độ.",
      "Hai tay ôm chặt một quả tạ đơn hoặc ấm tạ sát trước xương ức."
    ],
    execution: [
      "Hít một hơi sâu và gồng cứng bụng (Abdominal Bracing).",
      "Đẩy hông ra sau (Hip Hinge) và hạ người xuống cho đến khi mông chạm nhẹ vào mép ghế (không thả người ngồi phịch xuống ghế).",
      "Giữ nguyên lưng thẳng tắp trong 1 giây.",
      "Nhấn mạnh hai gót chân, bóp chặt mông và đứng thẳng người lên dứt khoát."
    ],
    breathing: "Hạ xuống hít vào gồng bụng -> Chạm ghế 1s -> Đứng lên thở ra mạnh mẽ.",
    sensoryMap: {
      correct: [
        "Cơ mông và cơ đùi trước làm việc cật lực.",
        "Cột sống luôn thẳng đứng, góc nghiêng thân người không thay đổi.",
        "Thắt lưng hoàn toàn không đau nhức."
      ],
      wrong: [
        "Cong lưng gù lưng khi hạ xuống thấp.",
        "Đầu gối chụm vào nhau hướng vào trong (Knock-knee).",
        "Ngồi bẹp xuống ghế làm mất sức căng cơ bụng."
      ]
    }
  }
];

export const DAILY_LIVING = [
  {
    id: "log-roll",
    title: "Cách bước ra khỏi giường buổi sáng (Log Roll Technique)",
    metaphor: "Lăn cả thân người như một khúc gỗ nguyên khối, không xoay vặn lưng",
    image: "/media/log_roll.webp",
    videoId: "nPm1VuOSICg",
    videoTitle: "Kỹ thuật Log Roll rời giường an toàn sau chấn thương cột sống",
    warning: "CẢNH BÁO TỬ HUYỆT: Tuyệt đối KHÔNG gập bụng bật dậy thẳng đứng từ tư thế nằm ngửa buổi sáng!",
    steps: [
      {
        step: 1,
        title: "Co hai gối",
        desc: "Khi tỉnh giấc, từ từ co cả hai đầu gối lại, đặt hai bàn chân phẳng trên đệm."
      },
      {
        step: 2,
        title: "Lăn như khúc gỗ",
        desc: "Lăn đồng thời cả vai và hông cùng một lúc sang một bên mép giường (vai và hông không được xoắn vặn nhau)."
      },
      {
        step: 3,
        title: "Thả chân & Đẩy tay",
        desc: "Thả hai cẳng chân rơi ra ngoài mép giường. Đồng thời dùng cùi chỏ tay dưới và bàn tay trên ấn mạnh xuống đệm để đẩy thân người ngồi dậy với lưng thẳng tắp."
      }
    ]
  },
  {
    id: "golfers-lift",
    title: "Cách cúi xuống nhặt đồ rơi (Golfer's Lift)",
    metaphor: "Động tác vớt bóng của vận động viên đánh golf: đá chân ra sau làm đối trọng",
    image: "/media/golfers_lift.webp",
    videoId: "pShkMkdcsKQ",
    videoTitle: "Golfer's Lift: Cách nhặt đồ nhẹ dưới sàn không làm tổn thương đĩa đệm",
    warning: "Không bao giờ cúi cong lưng xuống nhặt chìa khóa, điện thoại hay bút rơi dưới sàn.",
    steps: [
      {
        step: 1,
        title: "Chọn chân trụ",
        desc: "Đứng trụ vững vàng trên một chân (chân khỏe hơn), đầu gối hơi chùng nhẹ 10-15 độ."
      },
      {
        step: 2,
        title: "Gập hông & Đá chân đối trọng",
        desc: "Gập người tại khớp háng (lưng giữ thẳng tắp như mặt bàn), đồng thời đá thẳng chân kia ra phía sau như một chiếc đòn bẩy đối trọng."
      },
      {
        step: 3,
        title: "Nhặt đồ & Đứng lên",
        desc: "Một tay hạ xuống nhặt đồ (có thể tựa nhẹ tay kia vào bàn/ghế), sau đó hạ chân sau xuống để đưa người đứng thẳng lên an toàn."
      }
    ]
  },
  {
    id: "pomodoro-ergonomic",
    title: "Hẹn giờ công thái học IT (Pomodoro 45/5)",
    metaphor: "45 phút ngồi code -> 3 phút giải cứu đĩa đệm",
    image: "/media/hip_flexor_stretch.webp",
    videoId: "vIDzsqJiAIo",
    videoTitle: "Giãn cơ gập hông Half-Kneeling cho người ngồi máy tính nhiều",
    warning: "Ngồi liên tục quá 60 phút làm gia tăng 200% áp lực nén lên đĩa đệm L4-L5.",
    steps: [
      {
        step: 1,
        title: "Đứng dậy & Uống 200ml nước",
        desc: "Rời mắt khỏi màn hình, uống một cốc nước để cấp ẩm cho nhân nhầy đĩa đệm."
      },
      {
        step: 2,
        title: "Giãn cơ gập hông (Half-Kneeling Hip Flexor Stretch)",
        desc: "Quỳ một gối xuống sàn (như tư thế cầu hôn), gối trước vuông góc 90 độ. Siết chặt cơ mông của bên gối quỳ, cuộn xương chậu nhẹ về phía trước cho đến khi thấy căng êm ở mặt trước khớp háng. Giữ 30 giây mỗi bên mà không ưỡn thắt lưng."
      },
      {
        step: 3,
        title: "Đi lại 1-2 phút",
        desc: "Đi bộ nhẹ nhàng trong phòng để máu lưu thông và phục hồi áp suất thủy tĩnh của cột sống."
      }
    ]
  }
];

export const SAFETY_ENGINE = {
  rirRule: {
    title: "Quy tắc Sống Còn RIR = 2 (Repetitions In Reserve)",
    highlight: "KHÔNG BAO GIỜ TẬP ĐẾN KIỆT SỨC!",
    content: "Dừng set tập ngay khi bạn cảm thấy trong sức mình chỉ còn làm được 2 cái chuẩn phom nữa. Đừng bao giờ ráng nốt nhịp cuối cùng vì khi cơ bắp mệt mỏi, phản xạ thần kinh sẽ sụp đổ và toàn bộ tải trọng sẽ giáng thẳng vào đĩa đệm đang tổn thương."
  },
  morningLock: {
    title: "Khóa Cột Sống Buổi Sáng (Morning Spine Lock)",
    rule: "Trước 8:00 sáng hoặc trong vòng 60 phút sau khi thức dậy",
    reason: "Sau một đêm nằm ngủ dài, đĩa đệm hút no nước thẩm thấu khiến áp lực bên trong rất cao, bao xơ bên ngoài trở nên giòn và dễ rách nhất trong ngày.",
    protocol: "Đi lại sinh hoạt nhẹ nhàng, làm vệ sinh cá nhân, ăn sáng tối thiểu 45 - 60 phút trước khi bắt đầu thực hiện các bài tập kháng lực hoặc gập tải."
  },
  trafficLight: [
    {
      type: "green",
      title: "Đèn Xanh: Cảm Giác Tốt",
      signal: "Chỉ mỏi cơ bụng, cơ mông hoặc cơ lưng trên",
      action: "Cho phép tiếp tục tập luyện. Bạn đang kích hoạt chính xác nhóm cơ bảo vệ đĩa đệm.",
      color: "emerald"
    },
    {
      type: "yellow",
      title: "Đèn Vàng: Cảnh Báo",
      signal: "Mỏi nhẹ hoặc căng tức vùng thắt lưng dưới",
      action: "Tạm dừng tập ngay. Nghỉ 2 phút, xem lại video kỹ thuật, giảm 30% mức tạ hoặc giảm biên độ nâng.",
      color: "amber"
    },
    {
      type: "red",
      title: "Đèn Đỏ: NGUY HIỂM CẤP TỐC",
      signal: "Đau nhói, buốt buốt, hoặc tê giật lan xuống mông/chân",
      action: "LẬP TỨC KHÓA TOÀN BỘ BUỔI TẬP. Bật quy trình giảm áp khẩn cấp Prone Lying ngay bên dưới!",
      color: "red"
    }
  ],
  emergencyDecompression: {
    title: "HƯỚNG DẪN GIẢM ÁP CẤP TỐC: Prone Lying (Nằm sấp thư giãn)",
    image: "/media/emergency_decompression.webp",
    videoId: "4HIcnpTOnkM",
    videoTitle: "McKenzie Prone Lying: Giảm đau cấp tốc cho thoát vị đĩa đệm",
    steps: [
      "1. Ngừng ngay lập tức bài tập đang làm. Tuyệt đối không cố xoay vặn hay bẻ lưng.",
      "2. Nằm sấp hoàn toàn trên sàn phẳng hoặc thảm tập (không nằm trên đệm lò xo lún).",
      "3. Hai tay xuôi dọc thân người hoặc gối nhẹ trán lên mu bàn tay. Thả lỏng toàn bộ cơ mông và cơ thắt lưng.",
      "4. Hít thở bụng sâu và chậm: Khi hít vào, cảm nhận bụng ép xuống sàn; khi thở ra, thở dài qua miệng và cảm nhận thắt lưng chìm sâu xuống.",
      "5. Duy trì nằm yên trong 5 - 10 phút. Nếu có buốt rát cấp, chườm túi đá lạnh bọc khăn mềm lên vùng thắt lưng trong 15 phút."
    ]
  }
};

export const NUTRITION_WEIGHT = {
  profile: {
    age: 39,
    occupation: "Kỹ sư IT (Lập trình viên ngồi nhiều)",
    currentWeight: 72.3,
    targetWeight: 61.5,
    weightToLose: 10.8,
    recommendedRateKgPerWeek: 0.5,
    estimatedWeeks: 22
  },
  dailyTargets: {
    calories: 1550,
    proteinMin: 115,
    proteinMax: 125,
    waterLiters: 2.75, // 2.5 - 3.0 L
    waterMl: 2750,
    stepsTarget: 8000,
    walkingCaloriesBurned: 320
  },
  walkingProtocol: {
    title: "Vua Cardio Cho Thoát Vị Đĩa Đệm: Đi Bộ Nhanh (Fast Walking)",
    subtitle: "Chìa khóa đốt 300+ kcal/ngày và thẩm thấu nuôi dưỡng đĩa đệm L4-L5",
    image: "/media/fast_walking.webp",
    videoId: "vB33N2jGvEw",
    videoTitle: "Kỹ thuật đi bộ bảo vệ đĩa đệm và giải tỏa áp lực thần kinh tọa",
    whyNotRunning: "Đĩa đệm L4-L5 đang bị rách bao xơ. Chạy bộ hay nhảy dây tạo ra phản lực dằn xóc mạnh gấp 3-4 lần trọng lượng cơ thể (250-300 kg lực va đập mỗi bước chân) đè nát đĩa đệm. Đi bộ nhanh là bài tập cardio DUY NHẤT tạo áp suất âm vi thể để nhân nhầy hút nước mà không chịu va đập.",
    imbibitionMechanism: "Hiện tượng thẩm thấu thủy tĩnh (Imbibition): Đĩa đệm người trưởng thành KHÔNG có mạch máu nuôi trực tiếp. Chuyển động bước đi nhịp nhàng đều đặn tạo ra chu kỳ nén-nhả vi mô, hoạt động như một chiếc máy bơm hút dưỡng chất và nước từ đốt sống lân cận vào nuôi dưỡng bao xơ.",
    dailySchedule: [
      {
        session: "Cữ 1 (Buổi Sáng)",
        duration: "15 phút (Sau ăn sáng 45p)",
        steps: "~1,500 - 2,000 bước",
        desc: "Kích hoạt tuần hoàn máu, làm ấm cơ thể sau giấc ngủ đêm."
      },
      {
        session: "Cữ 2 (Sau Bữa Trưa)",
        duration: "20 phút (12:30 - 12:50)",
        steps: "~2,000 - 2,500 bước",
        desc: "Hạ đường huyết sau ăn, giải phóng áp lực tích tụ do 4 tiếng ngồi code buổi sáng."
      },
      {
        session: "Cữ 3 (Chiều / Tối)",
        duration: "30 phút (17:30 hoặc sau bữa tối)",
        steps: "~3,500 - 4,500 bước",
        desc: "Đốt cháy mỡ thừa chính trong ngày, thư giãn hệ thần kinh sau giờ làm việc căng thẳng."
      }
    ],
    fourRules: [
      {
        rule: "Mắt nhìn thẳng về phía chân trời",
        desc: "Tuyệt đối không vừa đi bộ vừa cúi đầu nhìn điện thoại (đầu cúi 45° tạo tải trọng 22kg đè lên cột sống cổ và thắt lưng)."
      },
      {
        rule: "Đánh tay nhịp nhàng tự nhiên",
        desc: "Đánh tay đối xứng giúp xoay nhẹ lồng ngực trên mà giữ yên thắt lưng, tạo lực đẩy cơ học phân tán chấn động."
      },
      {
        rule: "Tiếp đất êm ái bằng cuộn bàn chân",
        desc: "Tiếp đất bằng gót chân nhẹ nhàng rồi cuộn mượt mà sang mũi chân, không giậm mạnh gót chân xuống mặt đường."
      },
      {
        rule: "Sải bước vừa phải, tốc độ hơi nhanh",
        desc: "Không bước sải quá dài (over-striding). Đi nhanh hơn bình thường một chút để tim đập nhanh nhẹ và hơi thở sâu."
      }
    ]
  },
  tips: [
    "Uống 1 cốc nước ấm (250ml) ngay sau khi ngủ dậy để bù nước cho bao xơ đĩa đệm.",
    "Ưu tiên đạm nạc: ức gà, trứng, cá hồi, đậu phụ để nuôi dưỡng cơ bắp mà không tích mỡ thừa.",
    "Hạn chế đồ ăn nhiều muối và đường tinh luyện vì gây phù nề viêm nhiễm quanh rễ thần kinh tọa.",
    "Chia nhỏ 8,000 bước thành 3 cữ trong ngày thay vì dồn đi 1 lần quá dài gây mỏi cơ."
  ]
};
