/**
 * 石柏華公開觀議課 - 核心資料庫 (siteData)
 * 南投縣立南投國中 115學年度 專任輔導教師石柏華 · SEL社會情緒學習公開授課與議課研討成果旗艦網
 */

const siteData = {
  metadata: {
    siteTitle: "石柏華公開觀議課",
    fullTitle: "石柏華公開觀議課 ｜ 南投國中 115學年度 SEL社會情緒學習公開授課與議課研討成果旗艦網",
    topic: "情緒防爆指南：面對情緒 · 做情緒的主人 (The Emotional Toolkit)",
    school: "南投縣立南投國民中學",
    subject: "綜合活動領域 · 專任輔導活動",
    teacher: "石柏華 專任輔導教師",
    demoDate: "115年10月30日 (2026/10/30)",
    classTime: "15:08 ~ 15:53 (第7節 公開演示課)",
    meetingTime: "15:56 ~ 16:45 (第8節 觀課回饋與議課研討)",
    location: "南投國中 專題活動教室",
    targetGrade: "國中七年級 / 八年級學生",
    participants: [
      { name: "石柏華", title: "專任輔導教師", role: "公開課授課教師", icon: "user-check" },
      { name: "許正儀", title: "教務主任", role: "教學行政領導與觀課督導", icon: "award" },
      { name: "師培指導教授", title: "師資培育指導委員", role: "教案架構與評量指導專家", icon: "graduation-cap" },
      { name: "李協融", title: "公民科專任教師", role: "班級經營與現場節奏回饋委員", icon: "users" },
      { name: "孫雅惠", title: "資深專任教師", role: "教學引導與師生互動評估委員", icon: "sparkles" }
    ],
    metrics: [
      { num: "45", unit: "分鐘", label: "公開教學演示實況", desc: "完整經歷情緒覺察、呼吸放鬆與情境演練" },
      { num: "21", unit: "頁", label: "上課投影片線上播放", desc: "情緒導航手冊精編全彩簡報播放器" },
      { num: "3", unit: "關", label: "情緒防爆三關挑戰賽", desc: "身體慢速放氣、想法拆彈、行為戰術登出" },
      { num: "4.3", unit: "萬字", label: "議課逐字稿精華沉澱", desc: "主任、教授與觀課夥伴傾囊相授" }
    ]
  },

  // ==========================================
  // 教案詳細說明 (依據 教學計劃（石伯華教案）.pdf)
  // ==========================================
  lessonPlan: {
    title: "情緒調節－不爆彈計畫（氣球）",
    subject: "綜合活動領域 輔導科",
    instructor: "石柏華 老師",
    target: "國中八年級（國二）",
    duration: "4 節課，共 180 分鐘（本次公開演示為第四堂課「情緒調節」45分鐘）",
    concept: "本課程以國中生的日常生活與人際互動為出發點，結合社會情緒學習（SEL）的理念，透過「覺察情緒、辨別情緒、理解情緒升溫、調節情緒」四個循序漸進的階段，引導學生從認識自己的內在狀態，進一步學習理解他人，並發展適切的情緒因應能力。在數位社群普及、同儕互動頻繁的現代生活中，學生可能因為訊息已讀不回、社群媒體上的比較、網路嘲諷、同儕排擠或課業壓力而產生情緒起伏。因此，本課程將這些貼近國中生生活的情境融入教學，讓學生理解：情緒不是需要被壓抑的問題，而是值得被理解的訊號；重要的不只是感受到什麼，更是如何理解情緒，並選擇適當的回應方式。",
    coreCompetencies: {
      domain: "A 自主行動 ｜ ⬛ A1 身心素質與自我精進",
      performance: "1d-IV-1 覺察個人的心理困擾與影響因素，運用適當策略或資源，促進心理健康。",
      contents: [
        { code: "輔Da-IV-1", desc: "正向思考模式、生活習慣與態度的培養" },
        { code: "輔Da-IV-2", desc: "情緒與壓力的成因、影響與因素" },
        { code: "輔Db-IV-2", desc: "重大心理困擾與失落經驗的因應" }
      ]
    },
    fourLessons: [
      {
        lesson: "第一堂課",
        theme: "覺察情緒",
        activity: "辨識情緒 · 身體訊號",
        goals: [
          "1-1 學生能覺察並描述自己的情緒。",
          "1-2 學生能辨識情緒的身體訊號，並連結事件、情緒與行為反應。",
          "1-3 學生能理解情緒與行為的差異，建立接納情緒的觀念。"
        ]
      },
      {
        lesson: "第二堂課",
        theme: "情緒強度",
        activity: "教室站位 · 情緒溫度計",
        goals: [
          "2-1 學生能辨識並說出不同情境中的情緒。",
          "2-2 學生能運用情緒溫度計評估情緒強度（0~10分）。",
          "2-3 學生能理解情緒感受與強度的個別差異。"
        ]
      },
      {
        lesson: "第三堂課",
        theme: "理解情緒",
        activity: "戳破氣球 · 觸發因素分析",
        goals: [
          "3-1 學生能理解日常壓力與當下事件對情緒強度的影響。",
          "3-2 學生能辨識情緒觸發因素，並分析情緒升溫的原因。",
          "3-3 學生能理解他人的情緒差異，培養同理與尊重的態度。"
        ]
      },
      {
        lesson: "第四堂課（公開課）",
        theme: "情緒調節",
        activity: "不爆彈計畫 · 防爆三關挑戰賽",
        goals: [
          "4-1 學生能運用身體放鬆、想法轉換及行為調整等策略調節情緒。",
          "4-2 學生能區分客觀事實與個人解讀，嘗試以不同觀點看待事件。",
          "4-3 學生能在情緒強烈時適時暫停，減少衝動行為並做出適當回應。"
        ]
      }
    ],
    demoProcedure: [
      {
        section: "一、課前回顧",
        time: "2 分鐘",
        desc: "教師複習前三堂課核心：第一堂辨識情緒、第二堂教室站位量測強度、第三堂戳破氣球體會壓力累積，今天進入第四堂實戰調節技巧。",
        remark: "學習單已發放於學生桌上"
      },
      {
        section: "二、引起動機：破除誤區",
        time: "3 分鐘",
        desc: "國中生常以為情緒調節就是「忍耐、認輸、當縮頭烏龜」。老師點破：「調節是讓你在不爽的時候，還能帥氣地控制場面，不讓自己因為爆掉而變成理虧、被記過的那個人！」並正式引入「調節三條路」——身體、想法、行為安全放氣。",
        remark: "給予1分鐘填寫學習單「一、我的情緒警報」"
      },
      {
        section: "三、第一關：身體的路 ｜ 終極慢速放氣",
        time: "7 分鐘",
        desc: "氣球直接鬆手會亂飛失控，慢慢捏著氣球嘴放氣才平穩。帶領全班進行 3 次「4-7-8 呼吸法」（吸氣4秒、憋氣7秒、慢吐8秒），進行『物理降溫』，關掉大腦過熱警報器。",
        remark: "臨床實證：4-7-8呼吸法能有效刺激副交感神經，改善心率變異度(HRV)並降低皮質醇"
      },
      {
        section: "四、第二關：想法的路 ｜ 地雷拆除大師",
        time: "15 分鐘",
        desc: "撕掉大腦裡自己加的料，氣球就不會大得那麼快！\n1. 示範案例：王小美生日送卡片被當眾潑冷水（事實 vs 加料想法『他故意瞧不起我』vs 拆彈安全想法『他可能只是害羞裝酷』）。老師點撥：「不要用別人的不成熟，懲罰你珍貴的善良。」\n2. 六組實作情境演練（退追蹤已讀不回、爸媽拿去比較、被老師連帶處分、分組同學不參與、考試考差、朋友IG發文指責）並指派代表發表。",
        remark: "小組討論5分鐘，代表口頭發表各1分鐘，填寫學習單第二關"
      },
      {
        section: "五、第三關：行為的路 ｜ 戰術登出",
        time: "8 分鐘",
        desc: "當氣球快爆時，最好的方式是暫時放下它、物理隔離、換個環境！當情緒高達8分時，戰術性離開現場 10 秒鐘（聽音樂、找人聊聊、運動、抱娃娃、嚕貓狗、洗把臉），保住理智，不讓自己後悔。",
        remark: "填寫學習單第三關行為選擇"
      },
      {
        section: "六、綜合活動：課堂總結",
        time: "5 分鐘",
        desc: "學生分享收穫：透過深呼吸平穩、透過拆彈往好的方向想、透過戰術登出避免衝動。教師歸納情緒防爆三大金鑰：① 覺察情緒，是調節的第一步；② 運用方法，讓情緒回到平衡；③ 持續練習，活出自在的自己！",
        remark: "收回學習單，統計小組總分並表揚"
      }
    ],
    literatureNote: "4-7-8 呼吸法實證依據：臨床實驗顯示，規律練習 4-7-8 呼吸法能顯著激活副交感神經、改善心率變異度（HRV），並有效降低人體皮質醇水準（Geethanjali et al., 2022; Kahraman & Ozdemir, 2023）。"
  },

  // ==========================================
  // 上課簡報播放器資料 (21 頁全彩投影片)
  // ==========================================
  slides: [
    { num: 1, title: "情緒調節－不爆彈計畫", category: "單元首頁", img: "images/slides/slide_01.jpg", notes: "本單元《情緒調節－不爆彈計畫》封面，確立做情緒主人的核心理念。" },
    { num: 2, title: "課前回顧：前三堂課歷程", category: "課前回顧", img: "images/slides/slide_02.jpg", notes: "複習第一堂辨識情緒、第二堂教室站位強度、第三堂戳破氣球體會壓力累積。" },
    { num: 3, title: "打破誤區：調節不是忍耐", category: "引起動機", img: "images/slides/slide_03.jpg", notes: "調節不是認輸或當縮頭烏龜，而是在不爽時能帥氣控制場面，不變成理虧被記過的人。" },
    { num: 4, title: "核心概念：調節三條路", category: "引起動機", img: "images/slides/slide_04.jpg", notes: "在氣球爆開前，透過「身體、想法、行為」三條路徑主動安全放氣。" },
    { num: 5, title: "第一關：身體的路 ｜ 慢速放氣", category: "第一關：身體", img: "images/slides/slide_05.jpg", notes: "氣球慢慢放氣才能平順，引入 4-7-8 呼吸法進行身體物理降溫。" },
    { num: 6, title: "4-7-8 呼吸法實作步驟", category: "第一關：身體", img: "images/slides/slide_06.jpg", notes: "吸氣4秒（鼻子）、懸氣7秒（屏息）、吐氣8秒（嘴巴），連續進行3次。" },
    { num: 7, title: "生理降溫的科學原理", category: "第一關：身體", img: "images/slides/slide_07.jpg", notes: "臨床實證副交感神經被激活，心跳減緩、肌肉放鬆，大腦警報器強制關閉。" },
    { num: 8, title: "第二關：想法的路 ｜ 地雷拆除", category: "第二關：想法", img: "images/slides/slide_08.jpg", notes: "撕掉大腦裡自己加的料，區分客觀事實與主觀加料想法。" },
    { num: 9, title: "示範情境：送生日卡片被潑冷水", category: "第二關：想法", img: "images/slides/slide_09.jpg", notes: "小美當眾說卡片很俗，旁人笑成一團。分析事實 vs 會讓人爆炸的加料想法。" },
    { num: 10, title: "拆彈三步驟：事實・加料・安全", category: "第二關：想法", img: "images/slides/slide_10.jpg", notes: "示範如何將「他故意羞辱我」轉化為「他可能害羞裝酷，旁人只是被逗笑」。" },
    { num: 11, title: "老師點撥：決定權在你手中", category: "第二關：想法", img: "images/slides/slide_11.jpg", notes: "「不要用別人的不成熟，來懲罰你珍貴的善良！」" },
    { num: 12, title: "小組討論：六大生活情境分組", category: "小組演練", img: "images/slides/slide_12.jpg", notes: "各組領取貼近國中生日常的真實情境，於5分鐘內合作完成地雷拆除。" },
    { num: 13, title: "情境演練：退追蹤與比較情境", category: "小組演練", img: "images/slides/slide_13.jpg", notes: "第一組（退追蹤已讀不回）、第二組（被爸媽拿去與別人比較）深度探討。" },
    { num: 14, title: "情境演練：連帶處分與組員擺爛", category: "小組演練", img: "images/slides/slide_14.jpg", notes: "第三組（無辜被連帶處分）、第四組（分組報告同組同學不參與）拆彈成果。" },
    { num: 15, title: "情境演練：考試考差與IG被罵", category: "小組演練", img: "images/slides/slide_15.jpg", notes: "第五組（準備好久考差了）、第六組（好友發IG說爛人）之安全轉念。" },
    { num: 16, title: "第三關：行為的路 ｜ 戰術登出", category: "第三關：行為", img: "images/slides/slide_16.jpg", notes: "當氣球快爆開時，最好的策略是暫時放下、物理隔離、換個環境。" },
    { num: 17, title: "戰術登出的多樣化錦囊", category: "第三關：行為", img: "images/slides/slide_17.jpg", notes: "聽音樂、找人聊聊、運動、抱娃娃、嚕貓狗、洗把臉，給自己10秒冷靜。" },
    { num: 18, title: "戰術性登出：保住理智不後悔", category: "第三關：行為", img: "images/slides/slide_18.jpg", notes: "離開現場10秒鐘，保住理智，不讓衝動造成無法挽回的人際傷害。" },
    { num: 19, title: "課堂總結：三大防爆金鑰", category: "總結收束", img: "images/slides/slide_19.jpg", notes: "① 覺察情緒是第一步；② 運用方法回到平衡；③ 持續練習活出自在。" },
    { num: 20, title: "學習單填寫與成果收束", category: "總結收束", img: "images/slides/slide_20.jpg", notes: "核對情緒防爆三關挑戰賽學習單，小組互評與分數結算。" },
    { num: 21, title: "做自己情緒的主人！", category: "結語致謝", img: "images/slides/slide_21.jpg", notes: "感謝全班同學的勇於分享，讓情緒成為人生持續成長的最好助力！" }
  ],

  // ==========================================
  // 情緒防爆三關挑戰賽 (互動學習單題庫與設定)
  // ==========================================
  challenge: {
    title: "情緒防爆三關挑戰賽",
    motto: "情緒調節不是忍耐，是把控制權拿回來",
    emotions: [
      { name: "委屈", color: "sky" },
      { name: "生氣", color: "rose" },
      { name: "焦慮", color: "amber" },
      { name: "沮喪", color: "indigo" },
      { name: "緊張", color: "purple" },
      { name: "不爽", color: "red" },
      { name: "無奈", color: "slate" },
      { name: "平靜", color: "emerald" }
    ],
    bodyAlarms: [
      { id: "heart", label: "心跳加速" },
      { id: "breath", label: "呼吸變快" },
      { id: "chest", label: "胸口悶" },
      { id: "body", label: "身體僵硬" },
      { id: "shoulder", label: "肩膀緊" },
      { id: "cry", label: "想哭" },
      { id: "shout", label: "想叫" }
    ],
    presetScenarios: [
      {
        title: "情境一：被同學退追蹤 / 已讀不回",
        event: "傳訊息問功課，同學已讀不回，後來發現他還退了我 IG 追蹤。",
        toxicThought: "他一定是討厭我！在背後搞排擠，根本沒把我當朋友！",
        safeThought: "退追蹤可能只是他在整理帳號，已讀不回也許正在忙。我不用把別人的社群舉動完全怪到自己身上。"
      },
      {
        title: "情境二：被爸媽拿去跟別人比較",
        event: "段考成績公布，爸媽看了嘆氣說：『你看隔壁小明都考前三名，你怎麼就不學學人家？』",
        toxicThought: "反正我怎麼努力你們都不滿意！你們只喜歡別人家的小孩，根本不愛我！",
        safeThought: "爸媽表達方式很笨拙，但他們只是焦慮我的未來；我有我自己的進步節奏，不需要拿別人的標準否定自己。"
      },
      {
        title: "情境三：分組報告同組同學不參與",
        event: "老師規定這週要交報告，同組同學都在聊天滑手機，完全不幫忙做 PPT。",
        toxicThought: "這些人都想搭便車！憑什麼都是我一個人在累？全部都給我去死好了！",
        safeThought: "他們可能不知道該做什麼，或者逃避作業；我可以直接明確分配一人做一頁，若真的不做就據實回報老師，不需自己悶著爆炸。"
      },
      {
        title: "情境四：送好友禮物被潑冷水",
        event: "用心熬夜手作生日卡片送好友，他卻隨手塞進書包說：『現在誰還寫卡片啊？很俗耶！』",
        toxicThought: "我的真心被踐踏了！他根本不配當我朋友，故意讓我難堪！",
        safeThought: "他可能在大家面前害羞、故意講垃圾話裝酷；不要用別人的不成熟，來懲罰自己珍貴的善良。"
      },
      {
        title: "情境五：準備好久的考試考砸了",
        event: "每天熬夜苦讀準備數學段考，結果成績發下來只有 52 分，不及格。",
        toxicThought: "我就是笨蛋、智商低！再怎麼努力都沒有用，我徹底完蛋了！",
        safeThought: "這次考差只代表這幾個單元還沒搞懂，不代表我整個人是失敗者；去問老師哪裡算錯，把洞補起來就好。"
      }
    ],
    logoutBehaviors: [
      { id: "music", icon: "music", label: "聽音樂放鬆" },
      { id: "diary", icon: "book-open", label: "寫心情日記" },
      { id: "talk", icon: "phone-call", label: "找信任的人聊聊" },
      { id: "sport", icon: "activity", label: "去操場跑步或運動" },
      { id: "pet", icon: "heart", label: "抱娃娃 / 嚕貓嚕狗" },
      { id: "water", icon: "droplets", label: "喝一杯溫水 / 洗把臉" }
    ]
  },

  // 1151030 完整公開授課 YouTube 直播錄影
  youtubeLive: {
    id: "yt-live-1",
    title: "1151030投-柏華公開課",
    url: "https://youtube.com/live/qcdgb6GTIMM",
    embedUrl: "https://www.youtube.com/embed/qcdgb6GTIMM",
    duration: "45 分鐘全紀錄",
    badge: "現場直播存檔",
    school: "南投縣立南投國中",
    teacher: "石柏華 專任輔導教師",
    topic: "情緒防爆指南：面對情緒 · 做情緒的主人 (The Emotional Toolkit)",
    desc: "115年10月30日第7節（15:08 ~ 15:53）公開演示課現場全程實況錄影。完整呈現引起動機、大腦杏仁核腦科學解析、4-7-8 呼吸深層放鬆引導、生活情境拆彈演練與戰術登出行為承諾。",
    chapters: [
      { time: "00:00 - 08:00", title: "引起動機與情緒溫度計", desc: "破冰活動、身體晴雨表與覺察情緒警報訊號" },
      { time: "08:00 - 25:00", title: "腦科學解密與 4-7-8 呼吸", desc: "杏仁核 vs 前額葉拔河、身體慢速放氣沉浸演練" },
      { time: "25:00 - 38:00", title: "情境想法拆彈小組演練", desc: "檢視客觀事實、停止想法自動加料與安全轉念" },
      { time: "38:00 - 45:00", title: "戰術登出行為與自我承諾", desc: "選擇正向轉移卡片、全班統整與公開課總結" }
    ]
  },

  videos: [
    {
      id: "v1",
      title: "為什麼我們常常理智斷線？—— 揭開大腦杏仁核的秘密",
      filename: "videos/why_brain_freeze.mp4",
      rawPath: "公開課/1151030-15-08柏華SEL公開課為什麼我們常常理智斷線 (1).mp4",
      duration: "02:18",
      tag: "公開課核心媒材",
      desc: "利用生動動畫解析大腦杏仁核（情緒警報器）如何在威脅或壓力下搶奪主導權，讓前額葉（理性指揮官）瞬間離線，引發衝動言行。",
      poster: "images/1151030-15-08柏華SEL公開課1.jpg",
      takeaways: [
        "情緒是演化帶來的保護機制，但過度敏感會造成人際誤判",
        "理解『理智斷線』不是自己很差，而是大腦警報器啟動了生存反應",
        "給前額葉争取 6 秒鐘時間，就能重新拿回大腦的主控權"
      ]
    },
    {
      id: "v2",
      title: "學生處理情緒的 3 種有效方法 —— 實踐版情緒導航手冊",
      filename: "videos/three_emotion_methods.mp4",
      rawPath: "公開課/1151030-15-08柏華SEL公開課學生處理情緒的3種方法.mp4",
      duration: "03:45",
      tag: "公開課核心媒材",
      desc: "介紹青少年在日常校園中可即時落地的 3 種情緒調適法：生理呼吸法、認知轉念法、以及建立安全表達的替代行為模式。",
      poster: "images/1151030-15-08柏華SEL公開課2.jpg",
      takeaways: [
        "方法一【深呼吸煞車法】：以 4-7-8 呼吸快速降低生理激發水準",
        "方法二【思維拆彈法】：不幫情緒自動『加料』，檢視客觀事實",
        "方法三【安全發洩與溝通】：用『我訊息』清楚表達感受與期待"
      ]
    },
    {
      id: "v3",
      title: "議課精華短片：教學改善關鍵點與觀課回饋總整理",
      filename: "videos/observation_meeting_highlights.mp4",
      rawPath: "議課/1151030-15-56柏華-議課掌握議課精華：教學改善關鍵點.mp4",
      duration: "04:12",
      tag: "議課研討紀錄",
      desc: "剪輯議課座談中教務主任、指導教授與觀課資深教師針對教學節奏、班級經營口令、學生追問引導與教材修整的亮點與關鍵金句。",
      poster: "images/1151030-15-56柏華-議課掌握議課精華：教學改善關鍵點.jpg",
      takeaways: [
        "穩定表現、語速合宜、表達清晰是新進教師最珍貴的基本功",
        "班級經營以明確訊號建立常規（如照相機口令、定格加分）",
        "給學生思考留白：先個人深思，再小組討論，最後才全班發表",
        "對學生的錯誤或不同回答，以『追問理由』代替『代為解答』"
      ]
    }
  ],

  gallery: [
    { id: "img-7832", src: "images/IMG_7832.jpg", raw: "影音/IMG_7832.jpg", title: "公開課破冰暖身：引起動機與目標說明", category: "intro", catName: "課堂引起動機", desc: "石柏華老師以親切溫和的語調開啟課程，向全班說明今天的主題《情緒防爆指南》與上課小組規則。" },
    { id: "img-7836", src: "images/IMG_7836.jpg", raw: "影音/IMG_7836.jpg", title: "建立專注默契：師生互動與眼神交流", category: "intro", catName: "課堂引起動機", desc: "透過清晰指令讓學生迅速安定注意力，營造安全且具包容性的學習氛圍。" },
    { id: "img-7838", src: "images/IMG_7838.jpg", raw: "影音/IMG_7838.jpg", title: "情緒簡報導讀：情緒是什麼？", category: "intro", catName: "課堂引起動機", desc: "引導學生回想上週面對考試或被同學開玩笑時的情緒感受，啟動自我覺察感知。" },
    { id: "img-7842", src: "images/IMG_7842.jpg", raw: "影音/IMG_7842.jpg", title: "觀課教師團隊專注紀錄現場節奏", category: "meeting", catName: "觀課研討紀錄", desc: "許主任、指導教授與觀課夥伴在教室後方認真記錄教師提問、學生發言與時間節奏配置。" },
    { id: "img-7844", src: "images/IMG_7844.jpg", raw: "影音/IMG_7844.jpg", title: "課堂口令互動：3-2-1 默契凝聚", category: "interaction", catName: "師生互動加分", desc: "全班以高昂默契回應教師指令，現場學習動能充沛，學生舉手踴躍。" },
    { id: "img-7859", src: "images/IMG_7859.jpg", raw: "影音/IMG_7859.jpg", title: "教師走入組別進行個別引導", category: "group", catName: "小組討論巡視", desc: "分組活動展開，石柏華老師巡視各組走道，俯身聆聽學生的疑難並及時提供回饋。" },
    { id: "img-7860", src: "images/IMG_7860.jpg", raw: "影音/IMG_7860.jpg", title: "學生認真辨識情緒警報卡", category: "worksheet", catName: "學習單填寫與深思", desc: "學生翻閱情緒學習單，在「身體警訊」項目中勾選心跳加快、手心冰冷或冒汗等特徵。" },
    { id: "img-7867", src: "images/IMG_7867.jpg", raw: "影音/IMG_7867.jpg", title: "小組討論：我們怎麼面對生氣的時候？", category: "group", catName: "小組討論巡視", desc: "組員彼此交流在生氣當下會想做的事情，有人分享想打枕頭、有人想聽音樂或去操場跑圈。" },
    { id: "img-7869", src: "images/IMG_7869.jpg", raw: "影音/IMG_7869.jpg", title: "同儕共學：互相核對情緒強度指數", category: "group", catName: "小組討論巡視", desc: "組內同學互相分享彼此的情緒溫度計數值，發現每個人對壓力的敏感點各有不同。" },
    { id: "img-7878", src: "images/IMG_7878.jpg", raw: "影音/IMG_7878.jpg", title: "舉手踴躍發言：分享組內研討成果", category: "interaction", catName: "師生互動加分", desc: "前排與側邊組別學生主動舉手爭取發表，課堂參與度極高，展現良好的學習動機。" },
    { id: "img-7879", src: "images/IMG_7879.jpg", raw: "影音/IMG_7879.jpg", title: "教師正向回饋與課堂加分鼓勵", category: "interaction", catName: "師生互動加分", desc: "石柏華老師肯定學生的具體分享，給予即時正向讚美與小組得分獎勵。" },
    { id: "img-7882", src: "images/IMG_7882.jpg", raw: "影音/IMG_7882.jpg", title: "大腦杏仁核腦科學概念解說", category: "intro", catName: "課堂引起動機", desc: "老師運用投影片插圖講解大腦杏仁核就像火警警報器，幫助學生以科學態度面對情緒起伏。" },
    { id: "img-7885", src: "images/IMG_7885.jpg", raw: "影音/IMG_7885.jpg", title: "巡視第二組：協助釐清想法加料與客觀事實", category: "group", catName: "小組討論巡視", desc: "引導學生區分『他看我一眼（事實）』與『他一定在瞧不起我（想法加料）』的關鍵差異。" },
    { id: "img-7886", src: "images/IMG_7886.jpg", raw: "影音/IMG_7886.jpg", title: "各組專注熱烈討論情境案例", category: "group", catName: "小組討論巡視", desc: "不同組別成員全心投入，紙筆記錄著各自的情境解決策略。" },
    { id: "img-7887", src: "images/IMG_7887.jpg", raw: "影音/IMG_7887.jpg", title: "學生分享真實校園生活經驗", category: "interaction", catName: "師生互動加分", desc: "學生立足座位面向全班，勇敢分享自己在分組合作時曾產生的委屈與因應轉念。" },
    { id: "img-7893", src: "images/IMG_7893.jpg", raw: "影音/IMG_7893.jpg", title: "4-7-8 呼吸練習示範與實體帶領", category: "interaction", catName: "師生互動加分", desc: "石柏華老師帶領全班放鬆肩膀，進行吸氣 4 秒、屏氣 7 秒、慢吐 8 秒的身心調息實作。" },
    { id: "img-7894", src: "images/IMG_7894.jpg", raw: "影音/IMG_7894.jpg", title: "全班閉目調息：感受副交感神經安定", category: "interaction", catName: "師生互動加分", desc: "教室在輕柔的音樂中瞬間沉靜，學生閉上雙眼專注體會氣息出入與肌肉鬆弛。" },
    { id: "img-7896", src: "images/IMG_7896.jpg", raw: "影音/IMG_7896.jpg", title: "呼吸練習後的感受核對與回饋", category: "worksheet", catName: "學習單填寫與深思", desc: "呼吸練習結束後，引導學生在學習單上寫下『呼吸前與呼吸後身體感覺的差別』。" },
    { id: "img-7897", src: "images/IMG_7897.jpg", raw: "影音/IMG_7897.jpg", title: "書寫深思：記錄我的情緒煞車錦囊", category: "worksheet", catName: "學習單填寫與深思", desc: "學生在學習單上認真勾勒屬於自己的情緒急救三部曲，筆觸專注認真。" },
    { id: "img-7899", src: "images/IMG_7899.jpg", raw: "影音/IMG_7899.jpg", title: "組間觀摩與共學討論", category: "group", catName: "小組討論巡視", desc: "學生彼此閱讀同組同學寫下的安全想法，從中獲得不同視角的解決靈感。" },
    { id: "img-7900", src: "images/IMG_7900.jpg", raw: "影音/IMG_7900.jpg", title: "學習單成果檢視與個別鼓勵", category: "worksheet", catName: "學習單填寫與深思", desc: "老師巡至後排，低聲給予害羞學生肯定，鼓勵其待會小組分享時勇敢唸出自己的答案。" },
    { id: "img-7912", src: "images/IMG_7912.jpg", raw: "影音/IMG_7912.jpg", title: "全班性提問與想法引導", category: "interaction", catName: "師生互動加分", desc: "石柏華老師以開放式問答『如果這時我們回罵過去，結果會變得如何？』引發全班批判性思維。" },
    { id: "img-7919", src: "images/IMG_7919.jpg", raw: "影音/IMG_7919.jpg", title: "同儕積極補充：更多元的安全替代做法", category: "interaction", catName: "師生互動加分", desc: "其他同學舉手補充：『可以先喝一口水、或是離開現場去洗手間洗一把臉！』" },
    { id: "img-7920", src: "images/IMG_7920.jpg", raw: "影音/IMG_7920.jpg", title: "黑板板書與重點歸納統整", category: "worksheet", catName: "學習單填寫與深思", desc: "教師在黑板上逐步條列學生發表的關鍵字，幫助視覺型學習者加深記憶。" },
    { id: "img-7932", src: "images/IMG_7932.jpg", raw: "影音/IMG_7932.jpg", title: "整節課堂核心回顧：做自己情緒的主人", category: "worksheet", catName: "學習單填寫與深思", desc: "課程進入尾聲，老師邀請各組代表說出今天收穫最多的一個觀念，再次扣回情緒防爆三大金鑰。" },
    { id: "img-7934", src: "images/IMG_7934.jpg", raw: "影音/IMG_7934.jpg", title: "下課前的小組總結算與感謝致意", category: "worksheet", catName: "學習單填寫與深思", desc: "公布課堂小組積分，全班以熱烈掌聲感謝彼此的投入與觀課師長的陪伴。" },
    { id: "img-7942", src: "images/IMG_7942.jpg", raw: "影音/IMG_7942.jpg", title: "議課會議開始：許主任主持與致詞", category: "meeting", catName: "觀課研討紀錄", desc: "觀課後立即於專題會議室展開議課，許主任肯定公開課的整體流暢度與進度掌控。" },
    { id: "img-7945", src: "images/IMG_7945.jpg", raw: "影音/IMG_7945.jpg", title: "指導教授針對教案結構深入回饋", category: "meeting", catName: "觀課研討紀錄", desc: "教授就情緒警報選項光譜、評量欄位細節及提問深探策略給予高階專業建言。" },
    { id: "img-7947", src: "images/IMG_7947.jpg", raw: "影音/IMG_7947.jpg", title: "李協融老師分享班級經營實戰技巧", category: "meeting", catName: "觀課研討紀錄", desc: "李老師傳授『照相機定格口令』與加分標準透明化的現場實務經驗，助益良多。" },
    { id: "img-7952", src: "images/IMG_7952.jpg", raw: "影音/IMG_7952.jpg", title: "孫雅惠老師回饋課堂節奏與呼吸練習", category: "meeting", catName: "觀課研討紀錄", desc: "孫老師盛讚石柏華老師的台風與語速，並細膩指出呼吸法節奏與思考留白的優化細節。" },
    { id: "img-7955", src: "images/IMG_7955.jpg", raw: "影音/IMG_7955.jpg", title: "石柏華老師虛心記錄各方建言與反思", category: "meeting", catName: "觀課研討紀錄", desc: "授課教師逐筆記錄專家前輩的建議，坦誠分享設計初衷與現場感受，氣氛融洽溫馨。" },
    { id: "img-7960", src: "images/IMG_7960.jpg", raw: "影音/IMG_7960.jpg", title: "議課研討聚焦教案修改與後續行動", category: "meeting", catName: "觀課研討紀錄", desc: "研討確立後續教案精進重點：擴充平靜選項、放大投影片字體、並爭取代課實戰磨練。" },
    { id: "img-7964", src: "images/IMG_7964.jpg", raw: "影音/IMG_7964.jpg", title: "觀課夥伴熱烈交流與跨科對話", category: "meeting", catName: "觀課研討紀錄", desc: "輔導活動與學科領域教師針對學生身心健康議題激盪跨域共學火花。" },
    { id: "img-7966", src: "images/IMG_7966.jpg", raw: "影音/IMG_7966.jpg", title: "議課圓滿結束：展現南投國中專業社群能量", category: "meeting", catName: "觀課研討紀錄", desc: "與會全體師長一致肯定本次公開課的研討成果，為新進教師專業成長注入堅實支持。" },
    { id: "img-7968", src: "images/IMG_7968.jpg", raw: "影音/IMG_7968.jpg", title: "研討記錄與資料彙整封存", category: "meeting", catName: "觀課研討紀錄", desc: "完成完整會議紀錄與心智圖產出，為全校教學觀摩與經驗傳承留下珍貴寶藏。" }
  ],

  feedbackMatrix: {
    dimensions: [
      {
        id: "dim1",
        title: "教學表現與台風掌控",
        subtitle: "Teaching Performance & Demeanor",
        icon: "smile",
        color: "indigo",
        highlights: [
          "語速穩定合宜，聲音清晰，不疾不徐，展現優良的新進教師基本功",
          "進度掌控極為精準，45分鐘完整涵蓋引起動機、概念建構、實作與收束",
          "親和力高，走動巡視各組走道，能迅速掌握各小組之研討進度與困難"
        ],
        improvements: [
          "互動發言目前較偏向前排座位同學，建議多向教室中後排走動並主動點名引導",
          "留意舉手等待過久的學生，避免學生因久候未能發言而感到失落或放棄參與",
          "上台講授可進一步擺脫逐字背稿感，增加更多與學生眼神的自然對焦與臨場反應"
        ],
        quotes: [
          { speaker: "孫雅惠老師", text: "我的最後評語寫了十二個字：『穩定表現、速度合宜、講話清晰』。這幾件事在新人老師身上是非常不容易的！" },
          { speaker: "許正儀主任", text: "第一個是時間完全掌控到，進度控制得剛剛好！整個課堂看起來是非常融洽的，而且充分鼓勵了學生回答問題。" }
        ]
      },
      {
        id: "dim2",
        title: "班級經營與規則透明度",
        subtitle: "Classroom Management & Scoring Rules",
        icon: "shield-check",
        color: "emerald",
        highlights: [
          "善用『3-2-1 Oh my god!』班級齊聲口令，凝聚學生專注力的效果顯著",
          "以分組計分機制激勵學生發言，有效調動青少年的求勝欲與參與動機",
          "課堂規則開宗明義提醒舉手發言，維持良好的教學演示秩序"
        ],
        improvements: [
          "加分標準宜預先具體化（如回答完整給 3 分、有嘗試給 1 分、偏離題意如何給分），避免分數突然大跳動造成學生感到不公",
          "宣佈加分時教師可堅定宣告分數與原因，不需反覆詢問學生『好不好』，展現評量權威感",
          "可引入一致性安靜訊號（例如『照相機』指令配合同步定格），在學生討論過熱時能於 5 秒內快速恢復秩序"
        ],
        quotes: [
          { speaker: "李協融老師", text: "今天學生配合度高，但若是日常課堂，可能你在前面講、學生在後面各聊各的。開頭就可以約定好，看到分神直接講『照相機』，馬上全場定格！" },
          { speaker: "李協融老師", text: "加分標準要先講好，不要前面加一分兩分，後面突然一次加五分，學生會困惑『那我剛才那麼努力是在幹嘛？』" }
        ]
      },
      {
        id: "dim3",
        title: "活動流程與提問深探",
        subtitle: "Activity Flow & Deep Inquiries",
        icon: "git-branch",
        color: "amber",
        highlights: [
          "課程結尾請學生說出所學、再扣回三大金鑰的總結設計非常精彩，學習成效立即可見",
          "分組安排合理，組員彼此有足夠的互動空間與發表機會",
          "結合音樂作為學習單書寫的背景，給予學生安定情緒的感官支持"
        ],
        improvements: [
          "活動轉場之間宜增加簡短口頭銜接與邏輯統整，說明前後活動的關聯性，避免直接跳接",
          "實施『先個人深思（1-2分）➔ 再小組討論（5分）➔ 後全班分享』的階梯式思維鷹架",
          "學生回答後教師先『追問理由』（為什麼你會這樣想？）代替立刻代為解釋或判定對錯；視錯誤答案為全班學習修正的珍貴契機",
          "4-7-8 呼吸練習節奏宜放慢，需事先交代清楚吐納秒數與操作方法，避免學生因緊張而感到喘促缺氧"
        ],
        quotes: [
          { speaker: "指導教授", text: "當學生回答一個答案時，先不要急著幫他總結或說對不對，先追問一句『你為什麼會這樣想？』，讓他把思考脈絡講出來，全班才有深度學習。" },
          { speaker: "孫雅惠老師", text: "呼吸練習要先交代清楚要觀察什麼，放慢節奏，甚至先讓孩子寫下學習單、再請人分享感受，效果會更深層。" }
        ]
      },
      {
        id: "dim4",
        title: "教材教案修整與情境設計",
        subtitle: "Curriculum Design & Worksheet Refinement",
        icon: "file-edit",
        color: "rose",
        highlights: [
          "教案架構完整，結合青少年身心發展特質，教材實用性極高",
          "自編《情緒導航手冊》版面活潑，學生樂於動筆書寫與留存",
          "腦科學與認知行為療法的整合貼近現代 SEL 教育趨勢"
        ],
        improvements: [
          "【情緒警報光譜】：目前學習單選項多偏向生氣、緊張等劇烈反應，宜補上『平靜、放鬆』等低強度選項，呈現完整情緒光譜",
          "【版面可讀性】：簡報細小文字與警報表格字體偏小，後排觀看吃力，需善用版面留白將字體顯著放大",
          "【教學現場貼合度】：檢視情境設計中『老師連帶處分全班』之例子，建議改為更貼近國中生真實人際互動之情境",
          "【教案格式補完】：備註欄補充多元評量方式（實作評量、口語表達評量），用語避免生僻自創詞（如『想法的路』宜改為『思維轉念』）"
        ],
        quotes: [
          { speaker: "孫雅惠老師", text: "學習單上都是心跳快、握拳頭，但如果孩子現在很平靜，他會不知道該勾哪一個。情緒警報要有平靜的綠燈選項！" },
          { speaker: "指導教授", text: "教案備註欄要把評量方式（口語評量、實作檢核）寫清楚，觀測表欄位對應清楚，這樣教案的嚴謹度就無可挑剔了。" }
        ]
      }
    ]
  },

  actionChecklist: [
    {
      category: "教材與教案修訂",
      items: [
        { task: "情緒警報學習單增列「平靜狀態」選項，補足低強度情緒光譜", status: "completed", note: "已於教案修訂版中增設平靜綠燈與微弱焦慮黃燈" },
        { task: "全面檢視簡報字體，關鍵字級由 24pt 放大至 36pt 以上", status: "completed", note: "確保教室最後一排學生及觀課教師均能清晰閱讀" },
        { task: "修正情境案例，以「同儕借筆弄丟」取代「教師連帶處分」", status: "completed", note: "使情境更加切合學生同儕互動之真實體驗" },
        { task: "教案表格備註欄補入口語評量、小組合作評量與實作評量指標", status: "completed", note: "符合十二年國教素養導向多元評量規範" }
      ]
    },
    {
      category: "課堂節奏與引導技巧",
      items: [
        { task: "調整 4-7-8 呼吸引導節奏，示範時放慢吐氣速度並叮嚀舒適度", status: "in-progress", note: "以秒針音效或柔和呼吸球動畫輔助視覺提示" },
        { task: "落實「思維留白」：小組討論前強制給予 1~2 分鐘個別沉思", status: "in-progress", note: "讓慢熟學生先形成想法，提升組內發表均等性" },
        { task: "刻意練習追問句型：「是什麼讓你這樣覺得？」取代立即代答", status: "in-progress", note: "將學生的錯誤回答轉化為班級探究與辨析的養分" },
        { task: "增加活動間的口頭轉場銜接，明確交代下一步目標與前一步之關聯", status: "in-progress", note: "加強課堂結構的流暢度與邏輯通透性" }
      ]
    },
    {
      category: "班級經營與實戰磨練",
      items: [
        { task: "建立統一的注意力召喚訊號（引入『照相機・定格』口令）", status: "in-progress", note: "在開課前 3 分鐘宣布並演練兩次" },
        { task: "預先制定公開透明的加分規準表（完整回答 3 分、嘗試 1 分）", status: "completed", note: "於黑板角落清楚標示計分原則，提升公平感" },
        { task: "積極爭取校內代課機會，以 30~40 分鐘微型模組反覆試教", status: "planned", note: "累積現場應變手感，降低背稿感並提升師生眼神互動" },
        { task: "建立學生發言輪轉機制，保障中後排與內向學生的發表權利", status: "in-progress", note: "採用抽籤棒或指定各組特定號次發言" }
      ]
    }
  ],

  mindmap: {
    title: "1151030 柏華SEL情緒 議課回饋與改進 全景心智圖",
    nodes: [
      {
        branch: "教學表現 (Performance)",
        icon: "award",
        items: [
          "課程進度掌握穩定，語速合宜、表達清晰",
          "師生互動良好，學生課堂參與度高",
          "分組時能走動巡視各組並協助引導",
          "善用舉手規則、口令與加分機制提升參與"
        ]
      },
      {
        branch: "班級經營 (Management)",
        icon: "users",
        items: [
          "建立明確秩序指令，協助學生快速進入狀況",
          "設計一致的安靜訊號（如照相機定格法）",
          "讓發言機會分配更平均，留意久候學生",
          "明確說明加分標準，維持公平與一致"
        ]
      },
      {
        branch: "教學流程 (Instruction)",
        icon: "git-commit",
        items: [
          "活動轉場需增加口頭說明與邏輯銜接",
          "呼吸練習放慢節奏，交代清楚操作方式與秒數",
          "先個人思考（1-2分），再小組討論與分享",
          "學習單先書寫，再邀請學生分享感受",
          "增加學生口頭發表時間，引導面向全班發言"
        ]
      },
      {
        branch: "引導學生思考 (Thinking)",
        icon: "help-circle",
        items: [
          "學生回答後先追問理由，避免立即代為解釋",
          "彙整學生觀點，再補充或延伸概念",
          "對不同或錯誤答案以接納方式追問與引導",
          "善用同儕補充，視錯誤為思考與修正機會"
        ]
      },
      {
        branch: "情緒教材與活動 (Materials)",
        icon: "book-open",
        items: [
          "情緒警報增加平靜狀態等選項，呈現完整光譜",
          "口頭說明情緒強度與身體警訊的對應關聯",
          "放大簡報與警報表格文字，提升後排可讀性",
          "檢視情境設計，替換更切合校園生活的例子",
          "對傷害性回應引導思考合宜的替代行為"
        ]
      },
      {
        branch: "教案與評量 (Assessment)",
        icon: "check-square",
        items: [
          "備註欄補充評量方式（實作評量、口語表達評量）",
          "檢視用語清晰度，避免不易理解的自訂詞彙",
          "補入課程融入欄位，完善教案結構完整度",
          "核對觀課表與教案格式，統一版本編號",
          "思考學生學習成果如何長期蒐集、回饋與延伸"
        ]
      },
      {
        branch: "後續行動 (Next Steps)",
        icon: "trending-up",
        items: [
          "爭取代課或實際授課機會，反覆練習 30~40 分鐘模組",
          "持續修正活動轉場、呼吸引導與班級常規",
          "保持教學熱忱與自信，將前輩回饋轉化為成長動力",
          "落實以學生為中心的自主探索與心理安全感"
        ]
      }
    ]
  },

  documents: [
    {
      id: "doc-new-1",
      title: "教學計劃（石伯華教案） - 4堂課完整教案與簡報",
      filename: "教學計劃（石伯華教案）.pdf",
      aliasPath: "docs/lesson_plan_bohua_new.pdf",
      type: "PDF",
      size: "8.5 MB",
      badge: "正式新版教案",
      badgeColor: "bg-rose-600",
      desc: "包含四堂課完整教案設計理念、素養指標、公開課45分鐘詳細歷程表、15頁PPT縮圖與挑戰賽學習單。"
    },
    {
      id: "doc-new-2",
      title: "情緒防爆三關挑戰賽 - 課堂學生學習單",
      filename: "情緒防爆三關挑戰賽 .pdf",
      aliasPath: "docs/emotion_challenge_worksheet.pdf",
      type: "PDF",
      size: "1.3 MB",
      badge: "挑戰賽學習單",
      badgeColor: "bg-purple-600",
      desc: "國中生情緒防爆實作單，含情緒警報溫度計、身體訊號、4-7-8呼吸檢核、想法地雷拆除與行為戰術登出。"
    },
    {
      id: "doc-1",
      title: "1151030 投中專輔石柏華教案 - 情緒防爆指南",
      filename: "1151030投中專輔柏華教案-情緒防爆指南.pdf",
      aliasPath: "docs/lesson_plan.pdf",
      type: "PDF",
      size: "21.7 MB",
      badge: "核心教案",
      badgeColor: "bg-rose-500",
      desc: "完整的公開課演示教學設計，包含單元核心素養、學習表現、學習內容、三階段教學歷程與多元評量規準。"
    },
    {
      id: "doc-2",
      title: "1151030 柏華SEL公開課 - 情緒導航手冊 (教學簡報 PPTX)",
      filename: "公開課/1151030-15-08柏華SEL公開課-情緒導航手冊.pptx",
      aliasPath: "docs/emotion_navigation_guide.pptx",
      type: "PPTX",
      size: "23.5 MB",
      badge: "演示簡報",
      badgeColor: "bg-amber-500",
      desc: "公開授課現場使用之 21 頁精美動態教學簡報，包含情境漫畫、杏仁核大腦構造圖與情緒溫度計指針動畫。"
    },
    {
      id: "doc-3",
      title: "1151030 柏華SEL公開課 - 情緒導航手冊 (簡報 PDF 版)",
      filename: "公開課/1151030-15-08柏華SEL公開課-情緒導航手冊.pdf",
      aliasPath: "docs/emotion_navigation_guide.pdf",
      type: "PDF",
      size: "23.3 MB",
      badge: "簡報PDF",
      badgeColor: "bg-amber-600",
      desc: "高解析度教學簡報 PDF 文件，適合平板檢視、課後印製手冊或跨平台快速預覽。"
    },
    {
      id: "doc-4",
      title: "1151030 柏華SEL公開課 - The Emotional Toolkit 3",
      filename: "公開課/1151030-15-08柏華SEL公開課-The Emotional Toolkit3.pdf",
      aliasPath: "docs/toolkit_handbook.pdf",
      type: "PDF",
      size: "24.8 MB",
      badge: "學習手冊",
      badgeColor: "bg-blue-500",
      desc: "學生情緒工具箱全彩學習手冊，收錄情緒警報卡、4-7-8 呼吸放鬆指引與安全想法換道卡片。"
    },
    {
      id: "doc-5",
      title: "1151030 柏華SEL公開課 - 做情緒的主人",
      filename: "公開課/1151030-15-08柏華SEL公開課-做情緒的主人.pdf",
      aliasPath: "docs/master_emotions.pdf",
      type: "PDF",
      size: "19.5 MB",
      badge: "參考教材",
      badgeColor: "bg-indigo-500",
      desc: "學生專用輔導讀本，以生動圖文解析青少年常見之同儕人際摩擦、挫折容忍與自我對話技巧。"
    },
    {
      id: "doc-6",
      title: "1151030 柏華SEL情緒 - 議課 - 新手教師議課大補帖 2 (PPTX)",
      filename: "議課/1151030-15-56柏華SEL情緒-議課-新手教師議課大補帖2.pptx",
      aliasPath: "docs/novice_teacher_pack.pptx",
      type: "PPTX",
      size: "25.0 MB",
      badge: "議課精華簡報",
      badgeColor: "bg-emerald-500",
      desc: "由觀課團隊與教授指導整理的新手教師議課大補帖簡報，濃縮教學優化四大關鍵與課堂常規實戰技巧。"
    },
    {
      id: "doc-7",
      title: "1151030 柏華SEL情緒 - 議課 - 新手教師議課大補帖 2 (PDF)",
      filename: "議課/1151030-15-56柏華SEL情緒-議課-新手教師議課大補帖2.pdf",
      aliasPath: "docs/novice_teacher_pack.pdf",
      type: "PDF",
      size: "23.0 MB",
      badge: "議課大補帖",
      badgeColor: "bg-emerald-600",
      desc: "新手教師議課大補帖高解析 PDF 文件，完整條列現場教學演示必備之秩序召喚、轉場與多元評量指南。"
    },
    {
      id: "doc-8",
      title: "1151030 柏華SEL情緒 - 議課 - SEL Teaching Playbook",
      filename: "議課/1151030-15-56柏華SEL情緒-議課-SEL Teaching Playbook.pdf",
      aliasPath: "docs/meeting_playbook.pdf",
      type: "PDF",
      size: "24.8 MB",
      badge: "教學戰術手冊",
      badgeColor: "bg-purple-500",
      desc: "全方位的 SEL 教師實戰指導手冊，針對班級經營、提問深探、情境案例與課堂心理安全感建立提供完整 SOP。"
    },
    {
      id: "doc-9",
      title: "1151030 柏華SEL情緒 - 議課紀錄表 (DOCX)",
      filename: "1151030-15-56柏華SEL情緒-議課-情緒管理教學演示回饋與改進_議課紀綠表.docx",
      aliasPath: "docs/meeting_minutes.docx",
      type: "DOCX",
      size: "12.6 KB",
      badge: "正式會議紀錄",
      badgeColor: "bg-sky-600",
      desc: "正式議課會議紀錄表，詳載會議焦點、討論事項、優勢與改進建議、行動項目負責人與後續追蹤步驟。"
    },
    {
      id: "doc-10",
      title: "1151030 柏華SEL情緒 - 議課摘要 (DOCX)",
      filename: "1151030-15-56柏華SEL情緒-議課-情緒管理教學演示回饋與改進_摘要.docx",
      aliasPath: "docs/meeting_summary.docx",
      type: "DOCX",
      size: "12.5 KB",
      badge: "摘要總覽",
      badgeColor: "bg-sky-500",
      desc: "精煉會議摘要，彙整教務主任、教授及與會資深教師在各發言段落之核心要點與關鍵行動倡議。"
    },
    {
      id: "doc-11",
      title: "1151030 柏華SEL情緒 - 議課逐字稿 (TXT 4.3萬字)",
      filename: "1151030-15-56柏華SEL情緒-議課-情緒管理教學演示回饋與改進-逐字稿.txt",
      aliasPath: "docs/meeting_transcript.txt",
      type: "TXT",
      size: "43.2 KB",
      badge: "真實逐字稿",
      badgeColor: "bg-gray-600",
      desc: "完整收錄 312 行、4.3 萬字之議課研討對話全程逐字紀錄，原汁原味呈現最真實的教學對話與思辨交鋒。"
    },
    {
      id: "doc-12",
      title: "1151030 柏華SEL情緒 - 議課心智圖 (Markdown)",
      filename: "1151030_15_56柏華sel情緒_議課_情緒管理教學演示回饋與改進心智圖.md",
      aliasPath: "docs/meeting_mindmap.md",
      type: "MD",
      size: "2.1 KB",
      badge: "結構化心智圖",
      badgeColor: "bg-teal-600",
      desc: "以 Markdown 語法建構之七大主軸心智圖，涵蓋教學表現、班級經營、流程、提問、教材、評量與後續行動。"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
}
