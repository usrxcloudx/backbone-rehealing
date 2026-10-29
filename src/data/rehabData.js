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

export const EXERCISES = [
  {
    id: "mcgill-curlup",
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
    id: "side-plank",
    name: "Modified Side Plank",
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
    id: "bird-dog",
    name: "Bird-Dog",
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
    name: "Chest-Supported Dumbbell Row",
    vietnameseName: "Kéo tạ đơn tỳ ngực trên ghế nghiêng",
    level: "Cấp độ 2 - Tăng sức mạnh lưng trên",
    prescription: "3 hiệp x 10-12 cái. Mức tạ: 2 - 4 kg mỗi bên (Dừng lại khi còn làm được 2 cái - Quy tắc RIR=2). Nghỉ 60-90s giữa hiệp.",
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
    name: "Glute Bridge",
    vietnameseName: "Cầu mông - Đánh thức cơ mông",
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
    waterMl: 2750
  },
  tips: [
    "Uống 1 cốc nước ấm (250ml) ngay sau khi ngủ dậy để bù nước cho bao xơ đĩa đệm.",
    "Ưu tiên đạm nạc: ức gà, trứng, cá hồi, đậu phụ để nuôi dưỡng cơ bắp mà không tích mỡ thừa.",
    "Hạn chế đồ ăn nhiều muối và đường tinh luyện vì gây phù nề viêm nhiễm quanh rễ thần kinh tọa."
  ]
};
