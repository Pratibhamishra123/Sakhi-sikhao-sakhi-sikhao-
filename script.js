/**
 * SAKHI SIKHO, SAKHI SIKHAO (सखी सीखो, सखी सिखाओ)
 * Bilingual Engine (Hindi & English), Multi-Role Switcher Demo,
 * Accessible FAQ Accordion & Pilot Form Handling.
 */

// ════════════════════════════════════════════════════════════════
// 1. COMPLETE BILINGUAL TRANSLATION DICTIONARY
// ════════════════════════════════════════════════════════════════
const translations = {
  hi: {
    skip_to_content: "मुख्य सामग्री पर जाएं (Skip to main content)",
    banner_badge: "अवधारणा व पायलट योजना",
    banner_women_only: "🔒 सीख, अध्यापन, बिक्री व डिलीवरी: केवल महिलाओं हेतु | ग्राहक: देश भर से कोई भी",
    banner_text: "यह झारखंड की महिलाओं के साथ मिलकर सीखने और जांचने का एक शुरुआती प्रयास है।",
    brand_title: "सखी सीखो, सखी सिखाओ",
    brand_tagline: "सीखो • सिखाओ • साथ बढ़ो",
    khortha_chip: "खोरठा — जल्द",
    header_cta: "पायलट से जुड़ें",
    header_cta_text: "पायलट से जुड़ें",

    my_roles_label: "मेरी भूमिकाएँ",
    role_drop_title: "एक खाता • कई भूमिकाएँ",
    role_student_opt: "विद्यार्थी (Student)",
    role_teacher_opt: "शिक्षिका (Teacher)",
    role_seller_opt: "विक्रेता (Seller)",
    role_delivery_opt: "डिलीवरी साथी (Delivery)",
    role_hub_opt: "संगी हब सदस्य (Hub)",
    role_drop_note: "✓ आप एक साथ सीख भी सकती हैं, सिखा भी सकती हैं और बेच भी सकती हैं।",

    nav_ways: "६ भूमिकाएं",
    nav_teacher: "शिक्षिका",
    nav_student: "विद्यार्थी",
    nav_hub: "संगी हब",
    nav_comp: "प्रतियोगिता",
    nav_seller: "विक्रेता",
    nav_customer: "खरीदार",
    nav_delivery: "डिलीवरी साथी",
    nav_faq: "सवाल-जवाब",

    hero_status_pill: "झारखंड की महिलाओं के लिए • प्रस्तावित पायलट योजना",
    hero_title_line1: "सीखो, सिखाओ,",
    hero_title_line2: "साथ बढ़ो",
    hero_subtitle: "घर की चारदीवारी से निकलकर अपने हुनर को पहचान दें। झारखंड की बहनों के लिए सुरक्षित, समर्पित मंच—जहां सीखना, सिखाना, बेचना और डिलीवरी सब महिलाएं ही संभालती हैं; और देश भर के कद्रदान हस्तनिर्मित उत्पाद खरीद सकते हैं।",
    hero_btn_learn: "सीखना शुरू करें",
    hero_btn_teach: "शिक्षिका बनें",
    safe_shield_title: "सुरक्षित व केवल महिलाओं के लिए सीख:",
    safe_shield_desc: "निजी फोन नंबर कभी साझा नहीं होते। सभी सवाल-जवाब केवल मंच के सुरक्षित लाइव व चैट बॉक्स में होते हैं।",
    hero_art_caption: "झारखंडी सोहराई एवं खोवर भित्ति-चित्रकला से प्रेरित मौलिक रेखांकन",

    ways_kicker: "भागीदारी के छह रास्ते",
    ways_title: "आप किस रूप में जुड़ना चाहती हैं?",
    ways_subtitle: "हर महिला की अपनी ताकत है। एक खाता होने पर भी आप एक से अधिक भूमिकाएं चुन सकती हैं। नीचे दिए किसी भी कार्ड पर क्लिक करके उसका पूरा विवरण देखें:",
    all_india_tag: "भारत भर के सभी लोगों हेतु (All Gender)",

    way_1_title: "शिक्षिका बनें (Teacher)",
    way_1_desc: "सिलाई, सोहराई, बुनाई या पाक कला की 5-चरणीय पारदर्शी जांच के बाद शिक्षिका बनें। प्रतिदिन 2 घंटे तक क्लास लें और संगी हब कार्यशाला में मार्गदर्शन दें।",
    way_1_btn: "शिक्षिका का पूरा विवरण देखें",

    way_2_title: "विद्यार्थी बनें (Student)",
    way_2_desc: "मुफ्त डेमो क्लास देखें, 8-चरणीय यात्रा से ऑनलाइन या केवल ऑफलाइन संगी हब कार्यशाला में अभ्यास करें। कम कीमत वाली लर्निंग किट व पूर्णता पत्र पाएं।",
    way_2_btn: "विद्यार्थी का पूरा विवरण देखें",

    way_3_title: "विक्रेता बनें (Seller)",
    way_3_desc: "हस्तनिर्मित सोहराई कला, आभूषण, बांस शिल्प या सिलाई के उत्पाद सूचीबद्ध करें। भुगतान केवल बिक्री के बाद: ७०% कारीगर दीदी का, ३०% साझा मंच का।",
    way_3_btn: "विक्रेता का पूरा विवरण देखें",

    way_4_title: "खरीदार बनें (Customer / Buyer)",
    way_4_desc: "पूरे भारत से कोई भी महिला या पुरुष बिना सदस्यता के सीधे प्रामाणिक झारखंडी हस्तशिल्प खरीद सकते हैं। दीदियों की सुरक्षा हेतु सीधा संपर्क बंद रहता है।",
    way_4_btn: "हाट व खरीदार विवरण देखें",

    way_5_title: "डिलीवरी साथी (Delivery Partner)",
    way_5_desc: "उन महिलाओं के लिए कमाई का स्वाभिमानी अवसर जिनके पास समय और स्वतंत्रता है। स्थानीय स्तर पर विक्रेता से हब तक सुरक्षित, दिन के समय डिलीवरी।",
    way_5_btn: "डिलीवरी साथी का विवरण देखें",

    way_6_title: "संगी हब से जुड़ें (Sangi Hub)",
    way_6_desc: "हर 15 दिन में 3–4 घंटे की प्रत्यक्ष संगी हब कार्यशाला। शिक्षिका से आमने-सामने मार्गदर्शन, किट संग्रह, सामग्री खरीद और समस्या समाधान।",
    way_6_btn: "संगी हब कार्यशाला विवरण देखें",

    sec_teacher_kicker: "भूमिका ०१ • शिक्षिका (Teacher)",
    sec_teacher_title: "शिक्षिका सत्यापन और कार्य प्रणाली",
    sec_teacher_subtitle: "झारखंड की कुशल दीदियों को सम्मानजनक शिक्षण मंच। 5-चरणीय पारदर्शी सत्यापन के बाद आप मंच शिक्षिका बनती हैं:",
    teach_step_heading: "५-चरणीय सत्यापन यात्रा (5-Step Verification)",
    tstep_1_title: "पंजीकरण (Registration)",
    tstep_1_desc: "अपना नाम, जिला और सिखाए जाने वाले हुनर का सरल विवरण भरें।",
    tstep_2_title: "पोर्टफोलियो व अनुभव (Portfolio & Experience)",
    tstep_2_desc: "काम के फोटो/वीडियो साझा करें। (विकल्प: पोर्टफोलियो न होने पर लाइव या प्रत्यक्ष डेमो द्वारा सत्यापन)।",
    tstep_3_title: "डेमो (Short Teaching Demo)",
    tstep_3_desc: "एक छोटी सी प्रक्रिया (जैसे सुई में धागा डालना या सोहराई की पहली लकीर खींचना) बोलकर समझाएं।",
    tstep_4_title: "मंच कौशल परख (Platform Skill Test)",
    tstep_4_desc: "सिखाने के धैर्य, भाषा की सरलता और मंच नियमों की बुनियादी परख।",
    tstep_5_title: "स्वीकृति (Approval as Platform Teacher)",
    tstep_5_desc: "मंच शिक्षिका के रूप में चयन। बैच शुरू करने का अधिकार।",

    tduty_1_title: "प्रतिदिन अधिकतम २ घंटे की क्लास",
    tduty_1_desc: "शिक्षिका प्रतिदिन अधिकतम 2 घंटे तक क्लास लेती हैं—या तो मंच पर लाइव क्लास, या फिर रिकॉर्डेड वीडियो पाठ अपलोड करके।",
    tduty_safe_note: "लाइव क्लास में विद्यार्थी सवाल पूछ सकती हैं; साथ ही मंच का सुरक्षित चैट/डाउट बॉक्स उपलब्ध रहता है। फोन नंबर कभी साझा नहीं किए जाते।",
    tduty_2_title: "संगी हब शिक्षिका (वैकल्पिक / Optional)",
    tduty_2_desc: "जो शिक्षिकाएं यात्रा कर सकती हैं, वे अपने स्थानीय क्षेत्र या जहां सबसे अधिक विद्यार्थी हों, वहां जाकर हर 15 दिन में एक बार 3–4 घंटे की इन-पर्सन संगी हब कार्यशाला आयोजित करती हैं और ऑफलाइन मार्गदर्शन देती हैं।",
    tduty_3_title: "जागरूकता व संपर्क (Outreach)",
    tduty_3_desc: "शिक्षिकाएं आसपास के गांवों/टोलों में जाकर बेटियों और परिवारों से बात करती हैं और उन्हें जुड़ने के लिए प्रेरित करती हैं। वे वेबसाइट पर रिपोर्ट दर्ज करती हैं।",
    tduty_outreach_rule: "फर्जी रिपोर्ट रोकने के लिए प्रोत्साहन राशि केवल सत्यापित भुगतान वाले दाखिलों (Verified Paid Enrolments) पर ही देय होगी।",
    tduty_4_title: "समान व निष्पक्ष मानदेय सिद्धांत (Fair Pay Principle)",
    tduty_4_desc: "मानदेय आपके अनुभव, सिखाए गए घंटों, कोर्स पूरा करने वाले विद्यार्थियों और उनकी प्रतिक्रिया (फीडबैक) पर आधारित होगा—इस बात पर नहीं कि आप कौन सा शिल्प सिखाती हैं। सोहराई, पेंटिंग, सिलाई, बांस शिल्प और आभूषण सभी समान रूप से आदरणीय हैं।",
    fair_pay_pending: "राशि: पायलट परीक्षण के दौरान तय की जाएगी (To be decided in pilot)",

    sec_student_kicker: "भूमिका ०२ • विद्यार्थी (Student) — केवल बेटियां/महिलाएं",
    sec_student_title: "विद्यार्थी सीखने की ८-चरणीय यात्रा",
    sec_student_subtitle: "सीखने से लेकर प्रमाण पत्र पाने तक का स्पष्ट, सुरक्षित और सहयोगपूर्ण सफर:",
    s_step_1_title: "रुचि चुनें",
    s_step_1_desc: "वेबसाइट खोलें और अपनी पसंद का हुनर चुनें (उदा. पेंटिंग → सोहराई खंड)।",
    s_step_2_title: "मुफ्त डेमो देखें",
    s_step_2_desc: "शुल्क देने से पहले संतुष्टि के लिए एक मुफ्त डेमो क्लास देखकर समझें।",
    s_step_3_title: "पंजीकरण व शुल्क",
    s_step_3_desc: "पंजीकरण करें और प्रस्तावित नाममात्र कोर्स शुल्क का भुगतान करें।",
    s_step_4_title: "मूल्य सूची (Price List)",
    s_step_4_desc: "देखें कि क्या-क्या शामिल है: क्लास, वीडियो, किट खर्च और कोर्स की समय-सीमा (उदा. 3 माह सोहराई)। किट बाजार से सस्ती, वैकल्पिक परंतु सशुल्क है।",
    s_step_5_title: "दैनिक सीख व उपस्थिति",
    s_step_5_desc: "रोजाना लाइव क्लास या रिकॉर्डेड वीडियो से सीखें। ऑनलाइन क्लास में उपस्थिति (Attendance) दर्ज होगी।",
    s_step_6_title: "संगी हब से किट संग्रह",
    s_step_6_desc: "पंजीकरण के समय बुक की गई किट नजदीकी संगी हब कार्यशाला में स्वयं लें (घर डिलीवरी नहीं)। पहला हफ्ता किट बिना भी शुरू हो जाता है।",
    s_step_7_title: "कोर्स पूर्णता प्रमाण पत्र",
    s_step_7_desc: "उपस्थिति + अभ्यास कार्य + मूल्यांकन पूरा करने पर कोर्स-पूर्णता प्रमाण पत्र (यह सरकारी डिग्री नहीं है)।",
    s_step_8_title: "अगले कोर्स में प्रवेश",
    s_step_8_desc: "अगला नया हुनर सीखने के लिए वही सरल प्रक्रिया, नया कोर्स शुल्क लागू होगा।",

    sample_course_badge: "नमूना कोर्स • पायलट तैयारी",
    sample_course_title: "सोहराई भित्ति-चित्रकला (Sohrai Painting)",
    sample_course_duration: "अवधि: ३ माह (3 Months)",
    sample_course_desc: "पारंपरिक मिट्टी-दीवार अंकन, प्राकृतिक रंगों का निर्माण, ब्रश व कंघी का उपयोग, पशु-पक्षी व वृक्ष आकृतियों का अभ्यास।",
    btn_watch_demo: "मुफ्त डेमो देखें (Free Demo)",
    btn_enroll_interest: "दाखिले की रुचि बताएं",

    offline_pill: "केवल ऑफलाइन विद्यार्थी मार्ग (Offline-Only Path)",
    offline_title: "जो बेटियां ऑनलाइन क्लास नहीं कर सकतीं, उनके लिए:",
    off_p1_head: "कार्यशाला हेतु एक बार पंजीकरण:",
    off_p1_body: "ऑनलाइन या सीधे संगी हब कार्यशाला के दिन वहां उपस्थित होकर पंजीकरण करें।",
    off_p2_head: "कम प्रस्तावित शुल्क:",
    off_p2_body: "ये केवल ऑफलाइन सीखती हैं, इसलिए इनका शुल्क ऑनलाइन विद्यार्थियों से कम प्रस्तावित है।",
    off_p3_head: "मार्गदर्शन व समस्या समाधान (शुरु से पूरी सीख नहीं):",
    off_p3_body: "महत्वपूर्ण: कार्यशाला में आपको मार्गदर्शन और शंका समाधान मिलता है, शून्य से पूरी सिलाई/पेंटिंग नहीं सिखाई जाती।",
    off_p4_head: "सामग्री व किट खरीद की सुविधा:",
    off_p4_body: "कार्यशाला में आकर कोई भी बहन सामग्री खरीद सकती है और किट ले सकती है। किट की घर डिलीवरी नहीं होती।",

    cal_title: "शिल्प-वार कार्यशाला चक्र (Sample Workshop Calendar):",
    cal_sample_tag: "नमूना / प्रस्तावित शेड्यूल",

    hub_kicker: "ऑनलाइन और ज़मीन का अटूट जोड़",
    hub_title: "संगी हब (Sangi Hub): गांव-टोले की अपनी चौपाल",
    hub_subtitle: "हर 15 दिन में 3–4 घंटे की प्रत्यक्ष ‘संगी हब कार्यशाला’। आमने-सामने अभ्यास, मार्गदर्शन और सहयोग।",
    hub_flow_1: "सीखें (LEARN)",
    hub_flow_2: "अभ्यास करें (PRACTISE)",
    hub_flow_3: "जुड़ें (CONNECT)",
    hub_features_title: "संगी हब कार्यशाला में क्या होगा?",
    hub_f1_head: "हर १५ दिन में ३–४ घंटे की कार्यशाला:",
    hub_f1_body: "नियमित अंतराल पर अभ्यास सत्र जहां दीदियां मिलकर नया हुनर आजमाएंगी और समस्याएं सुलझाएंगी।",
    hub_f2_head: "संगी हब शिक्षिका द्वारा संचालन:",
    hub_f2_body: "सत्यापित स्थानीय महिला प्रशिक्षिका व्यक्तिगत मार्गदर्शन और तकनीक सुधार में मदद करेंगी।",
    hub_f3_new_head: "किट वितरण, सामग्री खरीद व ऑफलाइन पंजीयन:",
    hub_f3_new_body: "विद्यार्थी अपनी बुक की गई किट लेंगी, नई सामग्री खरीद सकेंगी और नई बहनें ऑफलाइन फॉर्म भर सकेंगी।",
    hub_f4_head: "मांग व सुरक्षा के अनुसार स्थान:",
    hub_f4_body: "पंचायत भवन, आंगनबाड़ी या सुरक्षित सामुदायिक जगह, जहां पहुंचना हर बहन के लिए आसान हो।",
    hub_dual_role_text: "संगी हब की महिला सदस्य चाहें तो मंच पर विक्रेता (Seller) या डिलीवरी साथी (Delivery Partner) के रूप में भी कार्य कर सकती हैं।",
    hub_caption: "गाँव की चौपाल या सामुदायिक भवन में आमने-सामने सीखने का सौहार्दपूर्ण वातावरण",

    comp_kicker: "हुनर की पहचान व पुरस्कार",
    comp_title: "समय-समय पर प्रतियोगिताएं (Competitions)",
    comp_subtitle: "सीखने के बाद अपने उत्कृष्ट काम को प्रदर्शित करें। सबसे बेहतरीन कौशल और फिनिशिंग को मिलता है सम्मान:",
    comp_rule_title: "सत्यापित शिक्षिकाओं द्वारा निष्पक्ष मूल्यांकन",
    comp_rule_desc: "विद्यार्थी अपने बनाए उत्पादों के साथ प्रतियोगिता में भाग लेती हैं। मूल्यांकन वरिष्ठ शिक्षिकाओं के पैनल द्वारा इन 4 मानदंडों पर होता है:",
    r_badge_prize: "बॉक्स १ • नकद पुरस्कार (Prize)",
    r_prize_title: "विजेता को नकद पुरस्कार",
    r_prize_desc: "प्रतियोगिता जीतने वाली दीदी को नकद सम्मान राशि दी जाती है।",
    r_prize_status: "पुरस्कार राशि: पायलट में घोषित होगी (To be announced)",
    r_badge_purchase: "बॉक्स २ • उत्पाद खरीद राशि (Separate Payout)",
    r_purchase_title: "विजेता उत्पाद की मंच द्वारा खरीद",
    r_purchase_desc: "पुरस्कार से बिल्कुल अलग, मंच विजेता के उत्पाद को बिक्री हेतु उसकी लिखित सहमति और स्वामित्व स्पष्टता के साथ खरीद सकता है। इसका अलग से मूल्य चुकाया जाता है।",
    r_purchase_status: "विजेता दीदी की पूरी सहमति पर निर्भर",

    sec_seller_kicker: "भूमिका ०३ • विक्रेता (Seller) — केवल महिलाएं",
    sec_seller_title: "विक्रेता यात्रा व पारदर्शी आय ढांचा",
    sec_seller_subtitle: "कोई भी पंजीकृत महिला सदस्य विक्रेता बन सकती है। जब तक सामान बिकता नहीं, कोई शुल्क नहीं:",
    seller_flow_heading: "७-चरणीय विक्रेता प्रक्रिया (Seller Flow)",
    sf_1_head: "सदस्य पंजीकरण:",
    sf_1_body: "विद्यार्थी, शिक्षिका, संगी हब सदस्य या स्वतंत्र कारीगर के रूप में मंच सदस्य बनें।",
    sf_2_head: "महिला सत्यापन:",
    sf_2_body: "सरल पहचान जांच जिससे पुष्टि हो कि विक्रेता एक महिला सदस्य है (कोई संवेदनशील डेटा नहीं)।",
    sf_3_head: "उत्पाद फोटो अपलोड:",
    sf_3_body: "अपने हाथ से बने उत्पाद की 2–3 स्पष्ट तस्वीरें और विवरण अपलोड करें।",
    sf_4_head: "गुणवत्ता जांच व मूल्य निर्धारण:",
    sf_4_body: "मंच गुणवत्ता जांचकर अंतिम बिक्री मूल्य तय करता है जिसे विक्रेता देखकर स्वीकार करती है।",
    sf_5_head: "डिजिटल हाट में प्रदर्शन:",
    sf_5_body: "अनुमोदित उत्पाद देश भर के ग्राहकों को ऑनलाइन हाट में दिखने लगता है।",
    sf_6_head: "भुगतान केवल ग्राहक की खरीद के बाद:",
    sf_6_body: "जब तक ग्राहक ऑर्डर नहीं करता, कोई भुगतान या लेनदेन नहीं होता।",
    sf_7_head: "बिक्री उपरांत आय विभाजन:",
    sf_7_body: "मंच का हिस्सा ३०% (प्रस्तावित) और बाकी ७०% राशि सीधे विक्रेता दीदी की कमाई।",
    mflow_title: "पारदर्शी राशि प्रवाह (Money-Flow Diagram)",
    mflow_c: "ग्राहक भुगतान करता है (100%)",
    mflow_p: "मंच सेवा व संचालन (30%)",
    mflow_tag: "प्रस्तावित — परीक्षण के अधीन",
    mflow_s: "विक्रेता दीदी की कमाई (70%)",
    mflow_stag: "सीधा बैंक खाते में",
    income_disclaimer: "⚖️ स्पष्ट नोट: आमदनी की कोई गारंटी नहीं दी जा सकती। सफलता उत्पाद की गुणवत्ता, बाजार मांग, सही मूल्य और ग्राहक के भरोसे पर निर्भर करती है।",

    sec_customer_kicker: "भूमिका ०४ • खरीदार (Customer / Buyer)",
    sec_customer_title: "डिजिटल हाट: प्रामाणिक झारखंडी हस्तशिल्प",
    sec_customer_subtitle: "पूरे भारत से कोई भी व्यक्ति (महिला या पुरुष) बिना सदस्यता के खरीदारी कर सकता है। बिचौलियों के बिना सीधे महिला कारीगरों का समर्थन करें:",
    c_rule_all: "पूरे भारत से कोई भी खरीद सकता है",
    c_rule_privacy: "दीदियों की सुरक्षा: विक्रेता से सीधा संपर्क बंद",
    c_rule_pan: "पूरे भारत में डिलीवरी की योजना जारी है",
    sample_badge: "नमूना / जल्द आ रहा है",

    sec_delivery_kicker: "भूमिका ०५ • डिलीवरी साथी (Delivery Partner) — केवल महिलाएं",
    sec_delivery_title: "स्थानीय डिलीवरी साथी के रूप में स्वावलंबन",
    sec_delivery_subtitle: "उन महिलाओं के लिए कमाई का स्वाभिमानी अवसर जिनके पास समय और स्वतंत्रता है।",
    del_flow_title: "सत्यापन व भूमिका",
    del_flow_desc: "पंजीकरण करें → मंच केवल महिला होने का सरल सत्यापन करता है → डिलीवरी साथी के रूप में स्वीकृति मिलती है। कोई भी छात्रा, शिक्षिका या विक्रेता बहन भी इस भूमिका को साथ में ले सकती है।",
    del_safety_note: "सुरक्षा प्रथम: केवल दिन के समय, नजदीकी परिचित क्षेत्र में ही डिलीवरी।",
    del_work_title: "डिलीवरी साथी का काम",
    del_fee_pending: "प्रति-पार्सल कमाई: पायलट परीक्षण में तय की जाएगी",

    price_kicker: "पारदर्शी सोच",
    price_title: "प्रस्तावित शुल्क ढांचा — परीक्षण के अधीन",
    price_subtitle: "मंच को स्वावलंबी बनाए रखने हेतु केवल बुनियादी खर्चों की योजना है। कोई छिपा शुल्क नहीं:",
    fee_1_badge: "नाममात्र पंजीकरण",
    fee_1_title: "शिक्षिका / विद्यार्थी पंजीयन",
    fee_1_desc: "गंभीर सहभागिता और बुनियादी प्रोफाइल सत्यापन खर्च।",
    fee_2_badge: "प्रोत्साहन प्रमाण पत्र",
    fee_2_title: "कोर्स पूर्णता प्रमाण पत्र",
    fee_2_desc: "संगी हब से प्रिंटेड प्रमाण पत्र प्राप्त करने का न्यूनतम खर्च।",
    fee_3_badge: "हाट व्यवस्था व सेवा",
    fee_3_title: "मंच साझा शुल्क (बिक्री पर)",
    fee_3_desc: "केवल सफल बिक्री पर। बाकी ७०% विक्रेता दीदी का।",
    fee_4_badge: "केवल ऑफलाइन विद्यार्थी",
    fee_4_title: "संगी हब कार्यशाला शुल्क",
    fee_4_desc: "ऑनलाइन विद्यार्थियों की तुलना में कम बुनियादी शुल्क प्रस्तावित।",
    od_title: "पायलट में दीदियों के साथ तय किए जा रहे बिंदु (Open Decisions):",

    pilot_kicker: "पायलट योजना: साथ मिलकर बनाएं",
    pilot_title: "सुनें → परखें → सुधारें (Listen • Test • Improve)",
    pilot_lead: "हम शुरुआत में 10–15 दीदियों से संवाद, एक छोटा पायलट क्षेत्र और एक प्रायोगिक संगी हब कार्यशाला से जांच कर रहे हैं:",
    form_privacy_line: "हम आपके इस विवरण का उपयोग केवल पायलट योजना के संपर्क व सुधार हेतु करेंगे।",

    form_heading: "अपनी रुचि साझा करें",
    form_sub: "आप क्या सीखना, सिखाना या बेचना चाहती हैं? हमें बताएं:",
    form_lbl_name: "आपका पूरा नाम",
    form_lbl_phone: "मोबाइल नंबर (WhatsApp या कॉलिंग)",
    form_lbl_district: "झारखंड का आपका ज़िला",
    form_select_district: "-- अपना ज़िला चुनें --",
    form_lbl_roles: "आप किस रूप में जुड़ना चाहती हैं? (एक या अधिक चुनें)",
    role_opt_teacher: "शिक्षिका (Teacher)",
    role_opt_student: "विद्यार्थी (Student)",
    role_opt_seller: "विक्रेता (Seller)",
    role_opt_buyer: "खरीदार (Buyer)",
    role_opt_delivery: "डिलीवरी साथी (Delivery Partner)",
    role_opt_hub: "संगी हब सदस्य (Sangi Hub)",
    role_opt_travel: "संगी हब कार्यशाला में सिखाने हेतु (यात्रा के लिए तैयार)",
    role_opt_outreach: "अपने क्षेत्र में जागरूकता व संपर्क (Outreach) में रुचि",
    form_lbl_lang: "पसंदीदा बातचीत की भाषा",
    form_lbl_skill: "वह हुनर जो आप सीखना या सिखाना चाहती हैं",
    form_btn_submit: "पायलट में रुचि दर्ज करें",

    thank_title: "जोहार दीदी! आपकी जानकारी दर्ज हो गई है।",
    thank_desc: "आपकी रुचि को स्थानीय स्तर पर सुरक्षित सहेज लिया गया है। जैसे ही आपके जिले/ब्लॉक में पहली कार्यशाला तय होगी, हम आपसे संपर्क करेंगे।",
    thank_btn_again: "दूसरी प्रविष्टि भरें",

    faq_kicker: "स्पष्टता और भरोसा",
    faq_title: "अक्सर पूछे जाने वाले सवाल (FAQ)",
    faq_subtitle: "आपके मन में उठने वाले स्वाभाविक प्रश्नों के स्पष्ट और ईमानदार उत्तर:",
    faq_q1: "क्या पुरुष भी इस मंच से जुड़ सकते हैं?",
    faq_a1: "सीखना, सिखाना, बेचना और डिलीवरी केवल महिलाओं और बेटियों के लिए सुरक्षित और आरक्षित है। परंतु, खरीदार (ग्राहक) के रूप में भारत भर से कोई भी पुरुष या महिला हस्तनिर्मित उत्पाद खरीद सकते हैं।",
    faq_q2: "क्या उत्पाद बिकने के बाद ही भुगतान होता है?",
    faq_a2: "हाँ, बिल्कुल! जब तक कोई ग्राहक आपका सामान नहीं खरीदता, तब तक कोई लेनदेन या अग्रिम भुगतान नहीं होता। बिक्री होने के बाद ३०% मंच का प्रस्तावित शुल्क कटकर शेष ७०% सीधे विक्रेता दीदी को मिलता है।",
    faq_q3: "मैं ऑनलाइन क्लास नहीं कर सकती। मैं क्या करूँ?",
    faq_a3: "आप कम प्रस्तावित शुल्क पर नजदीकी ‘संगी हब कार्यशाला’ में ऑफलाइन भाग ले सकती हैं। याद रखें, कार्यशाला में अभ्यास, शंका समाधान और मार्गदर्शन मिलता है; शून्य से पूरी क्लास नहीं होती।",
    faq_q4: "क्या मेरी लर्निंग किट घर पर डिलीवर होगी?",
    faq_a4: "नहीं, लर्निंग किट की घर पर डिलीवरी नहीं होती। आप पंजीकरण के समय चुने गए नजदीकी संगी हब कार्यशाला में आकर स्वयं अपनी किट प्राप्त करती हैं। पहला हफ्ता किट बिना भी शुरू हो जाता है।",
    faq_q5: "क्या मैं एक से अधिक भूमिकाएं (Multiple Roles) ले सकती हूँ?",
    faq_a5: "हाँ! एक ही खाते से आप विद्यार्थी भी बन सकती हैं, शिक्षिका भी, अपना सामान भी बेच सकती हैं और डिलीवरी साथी या संगी हब सदस्य भी बन सकती हैं।",
    faq_q6: "क्या मिलने वाला प्रमाण पत्र सरकारी मान्यता प्राप्त है?",
    faq_a6: "नहीं। यह केवल 'कोर्स पूर्णता प्रमाण पत्र' (Course Completion Certificate) है जो यह दर्शाता है कि आपने सभी कार्य और अभ्यास पूरे किए हैं। यह कोई सरकारी डिग्री या डिप्लोमा नहीं है।",

    footer_mission: "झारखंड की ग्रामीण व कस्बाई महिलाओं के हुनर को सहेजने, सिखाने और स्वावलंबन से जोड़ने का एक निष्कपट सामुदायिक प्रयास।",
    footer_quick_links: "त्वरित संपर्क व लिंक",
    footer_contact_title: "संपर्क व संवाद",
    footer_contact_coming: "सीधा संपर्क: पायलट लॉन्च के समय जारी किया जाएगा (Coming soon)",
    footer_disclaimer: "⚠️ अवधारणा प्रस्ताव: यह वेबसाइट एक प्रस्तावित अवधारणा एवं पायलट अध्ययन हेतु तैयार की गई है। यह कोई सरकार द्वारा संचालित योजना या व्यावसायिक संस्था नहीं है।",
    footer_copy: "सभी अधिकार सामुदायिक हित में सुरक्षित।"
  },

  en: {
    skip_to_content: "Skip to main content",
    banner_badge: "Concept & Pilot Stage",
    banner_women_only: "🔒 Learn, Teach, Sell & Delivery: Women Only | Customers: Anyone across India",
    banner_text: "An early initiative to co-create with women of Jharkhand.",
    brand_title: "Sakhi Sikho, Sakhi Sikhao",
    brand_tagline: "Learn • Teach • Grow Together",
    khortha_chip: "Khortha — Soon",
    header_cta: "Join the Pilot",
    header_cta_text: "Join the Pilot",

    my_roles_label: "My Roles",
    role_drop_title: "One Account • Multiple Roles",
    role_student_opt: "Student (विद्यार्थी)",
    role_teacher_opt: "Teacher (शिक्षिका)",
    role_seller_opt: "Seller (विक्रेता)",
    role_delivery_opt: "Delivery Partner (डिलीवरी)",
    role_hub_opt: "Sangi Hub Member (हब)",
    role_drop_note: "✓ You can learn, teach, sell, and deliver all under one single profile.",

    nav_ways: "6 Ways to Join",
    nav_teacher: "Teacher",
    nav_student: "Student",
    nav_hub: "Sangi Hub",
    nav_comp: "Competitions",
    nav_seller: "Seller",
    nav_customer: "Shop / Buyer",
    nav_delivery: "Delivery Partner",
    nav_faq: "FAQ",

    hero_status_pill: "For the Women of Jharkhand • Proposed Pilot Initiative",
    hero_title_line1: "Learn, Teach,",
    hero_title_line2: "Grow Together",
    hero_subtitle: "Step forward from the courtyard and bring your skills into the light. A safe ecosystem for the women of Jharkhand—where learning, teaching, selling, and delivery are run by women, and conscious buyers across India can shop handmade crafts.",
    hero_btn_learn: "Start Learning",
    hero_btn_teach: "Teach with Us",
    safe_shield_title: "Safe & Women-Only Learning:",
    safe_shield_desc: "Personal phone numbers are never shared. Interaction takes place strictly via in-platform live Q&A and doubt boxes.",
    hero_art_caption: "Original line art inspired by traditional Sohrai & Khovar murals of Jharkhand",

    ways_kicker: "Six Ways to Participate",
    ways_title: "How Would You Like to Join?",
    ways_subtitle: "Every woman carries a unique strength. One account can hold multiple roles. Click any card below to view its complete detailed section:",
    all_india_tag: "For Everyone Across India (All Genders)",

    way_1_title: "Become a Teacher (शिक्षिका)",
    way_1_desc: "Join after a transparent 5-step verification. Teach up to 2 hours daily through live or recorded classes and guide local Sangi Hub Workshops.",
    way_1_btn: "View Teacher Details",

    way_2_title: "Become a Student (विद्यार्थी)",
    way_2_desc: "Watch a free demo class, follow our 8-step journey online or attend offline Sangi Hub Workshops. Affordable learning kits and completion certificate.",
    way_2_btn: "View Student Details",

    way_3_title: "Become a Seller (विक्रेता)",
    way_3_desc: "List your handmade Sohrai art, jewelry, bamboo craft, or embroidery. Payment only after a customer buys: 70% to artisan sister, 30% platform share.",
    way_3_btn: "View Seller Details",

    way_4_title: "Become a Buyer (खरीदार)",
    way_4_desc: "Anyone across India (women or men) can purchase authentic Jharkhand folk crafts without membership. Direct contact with sellers is restricted for privacy.",
    way_4_btn: "View Shop & Buyer Details",

    way_5_title: "Delivery Partner (डिलीवरी साथी)",
    way_5_desc: "An earning opportunity for women who have time and independence. Safe, daytime neighborhood first-mile and last-mile order handoffs.",
    way_5_btn: "View Delivery Details",

    way_6_title: "Join a Sangi Hub (संगी हब)",
    way_6_desc: "In-person 3–4 hour Sangi Hub Workshops every 15 days. Face-to-face teacher guidance, kit pickup, material purchases, and problem solving.",
    way_6_btn: "View Workshop Details",

    sec_teacher_kicker: "Role 01 • Teacher (शिक्षिका)",
    sec_teacher_title: "Teacher Verification & Platform Duties",
    sec_teacher_subtitle: "A dignified teaching space for skilled women. Become a platform teacher after our gentle 5-step verification:",
    teach_step_heading: "5-Step Verification Journey (५-चरणीय सत्यापन)",
    tstep_1_title: "1. Registration",
    tstep_1_desc: "Submit your name, district, and the craft you wish to teach.",
    tstep_2_title: "2. Portfolio & Experience",
    tstep_2_desc: "Share photos/videos of past work. (Alternative: in-person or live demo if you don't have photos).",
    tstep_3_title: "3. Short Demo",
    tstep_3_desc: "Explain a simple process (like threading a needle or drawing an initial Sohrai stroke).",
    tstep_4_title: "4. Platform Skill Test",
    tstep_4_desc: "A brief check of teaching patience, simple communication, and basic platform guidelines.",
    tstep_5_title: "5. Approval as Platform Teacher",
    tstep_5_desc: "Welcome as an approved trainer to launch batches and lead workshops.",

    tduty_1_title: "Up to 2 Hours of Class Daily",
    tduty_1_desc: "Teachers conduct up to 2 hours of class per day—either LIVE or by uploading RECORDED video lessons.",
    tduty_safe_note: "Students ask doubts in live sessions and through the in-platform chat box. Personal numbers are never shared.",
    tduty_2_title: "Sangi Hub Workshop Teacher (Optional)",
    tduty_2_desc: "Teachers who can travel conduct one in-person 3–4 hour Sangi Hub Workshop every 15 days in their area or where student density is highest.",
    tduty_3_title: "Awareness & Community Outreach",
    tduty_3_desc: "Teachers speak with local families and young women in nearby villages. They log reports through the website.",
    tduty_outreach_rule: "To prevent artificial reports, outreach incentives are granted only on verified paid student enrolments.",
    tduty_4_title: "Fair Pay Principle (निष्पक्ष मानदेय)",
    tduty_4_desc: "Payment is based on experience, teaching hours, course completers, and student feedback—never on which craft you teach. Sohrai, painting, stitching, bamboo, and jewellery are all equally valued.",
    fair_pay_pending: "Payment rates: To be decided during pilot testing",

    sec_student_kicker: "Role 02 • Student (विद्यार्थी) — Girls/Women Only",
    sec_student_title: "Student 8-Step Learning Journey",
    sec_student_subtitle: "A clear, supportive, and safe learning path from curiosity to completion:",
    s_step_1_title: "Choose Craft",
    s_step_1_desc: "Browse the platform and choose your craft (e.g. Painting → Sohrai).",
    s_step_2_title: "Watch Free Demo",
    s_step_2_desc: "Watch a complimentary sample lesson before paying any course fee.",
    s_step_3_title: "Register & Fee",
    s_step_3_desc: "Sign up and pay the nominal proposed course fee.",
    s_step_4_title: "Price List & Schedule",
    s_step_4_desc: "Transparent breakdown of classes, videos, schedule, and practice kit. Kits are below market rate, optional but paid.",
    s_step_5_title: "Daily Practice & Attendance",
    s_step_5_desc: "Learn daily via live classes or videos; online attendance is tracked.",
    s_step_6_title: "Kit Pickup at Sangi Hub",
    s_step_6_desc: "Collect your kit in person at the local Sangi Hub Workshop (no home delivery). The first week works even before your kit arrives.",
    s_step_7_title: "Completion Certificate",
    s_step_7_desc: "Complete attendance, tasks, and assessment to earn a Course Completion Certificate (not a government degree).",
    s_step_8_title: "Join Next Level",
    s_step_8_desc: "Continue learning new craft skills through the same simple process.",

    sample_course_badge: "Sample Course • Pilot Prep",
    sample_course_title: "Sohrai Traditional Painting",
    sample_course_duration: "Duration: 3 Months",
    sample_course_desc: "Traditional mud-wall composition, natural pigment preparation, comb & brush techniques, indigenous fauna motifs.",
    btn_watch_demo: "Watch Free Demo",
    btn_enroll_interest: "Express Enrolment Interest",

    offline_pill: "Offline-Only Student Path",
    offline_title: "For Young Women Who Cannot Attend Online:",
    off_p1_head: "One-Time Workshop Registration:",
    off_p1_body: "Register online or directly in person on the Sangi Hub Workshop day.",
    off_p2_head: "Lower Proposed Fee:",
    off_p2_body: "Since they learn solely offline, they pay a lower proposed fee than online students.",
    off_p3_head: "Guidance & Problem-Solving Session:",
    off_p3_body: "Important: The workshop provides targeted guidance and problem-solving; it is not a zero-to-advanced beginner class.",
    off_p4_head: "Material & Kit Access:",
    off_p4_body: "Collect practice kits and purchase materials directly at the hub. No home deliveries.",

    cal_title: "Sample Craft-Themed Workshop Cycles:",
    cal_sample_tag: "Sample / To be scheduled",

    hub_kicker: "Connecting Ground & Digital",
    hub_title: "Sangi Hub: The Village Courtyard for Learning",
    hub_subtitle: "Fortnightly 3–4 hour in-person Sangi Hub Workshops for direct hands-on practice and guidance.",
    hub_flow_1: "LEARN",
    hub_flow_2: "PRACTISE",
    hub_flow_3: "CONNECT",
    hub_features_title: "What Happens at a Sangi Hub Workshop?",
    hub_f1_head: "Every 15 Days for 3–4 Hours:",
    hub_f1_body: "Structured hands-on workshop to practice new craft techniques and resolve questions.",
    hub_f2_head: "Led by a Sangi Hub Teacher:",
    hub_f2_body: "Local verified woman trainer provides step-by-step guidance and encouragement.",
    hub_f3_new_head: "Kit Pickup, Material Sales & Offline Signup:",
    hub_f3_new_body: "Collect ordered kits, purchase raw materials, and register offline students.",
    hub_f4_head: "Safe & Convenient Locations:",
    hub_f4_body: "Organized in accessible local spots like panchayat buildings or community centers.",
    hub_dual_role_text: "Sangi Hub women members may also work as platform Sellers or Delivery Partners.",
    hub_caption: "Warm, respectful in-person learning in a village courtyard or community hall",

    comp_kicker: "Recognition & Awards",
    comp_title: "Periodic Craft Competitions (प्रतियोगिता)",
    comp_subtitle: "Showcase finished handmade pieces after your course. Best skills win honors:",
    comp_rule_title: "Fair Judging by Verified Teachers",
    comp_rule_desc: "Students participate with their handmade items, evaluated on 4 objective criteria:",
    r_badge_prize: "Box 1 • Cash Prize",
    r_prize_title: "Winner Cash Prize",
    r_prize_desc: "A cash prize awarded to the competition winner.",
    r_prize_status: "Prize amount: To be announced in pilot",
    r_badge_purchase: "Box 2 • Separate Product Purchase Payout",
    r_purchase_title: "Platform Purchase of Winning Product",
    r_purchase_desc: "Completely separate from the prize, the platform may purchase the winner's piece for showcase sale, subject to her written consent and clear ownership.",
    r_purchase_status: "Requires artisan's full consent",

    sec_seller_kicker: "Role 03 • Seller (विक्रेता) — Women Only",
    sec_seller_title: "Seller Journey & Transparent Income Flow",
    sec_seller_subtitle: "Any registered woman member can become a seller. No fees until an order is placed:",
    seller_flow_heading: "7-Step Seller Process",
    sf_1_head: "Member Registration:",
    sf_1_body: "Join as a student, teacher, Sangi Hub member, or independent woman artisan.",
    sf_2_head: "Identity Check:",
    sf_2_body: "Simple confirmation that the seller is a registered woman member (no sensitive data).",
    sf_3_head: "Upload Product Photos:",
    sf_3_body: "Share 2–3 clear pictures and description of your handmade item.",
    sf_4_head: "Quality Check & Price Setting:",
    sf_4_body: "Platform reviews quality and sets the fair selling price, accepted by the seller.",
    sf_5_head: "Showcase Listing:",
    sf_5_body: "The verified item goes live on the digital marketplace for buyers across India.",
    sf_6_head: "Payment ONLY After Sale:",
    sf_6_body: "No advance payment or transaction until a customer places and pays for an order.",
    sf_7_head: "Post-Sale Revenue Split:",
    sf_7_body: "30% platform share (proposed), 70% direct earnings to the artisan sister.",
    mflow_title: "Transparent Money-Flow Diagram",
    mflow_c: "Customer Pays (100%)",
    mflow_p: "Platform Services (30%)",
    mflow_tag: "Proposed — being tested",
    mflow_s: "Seller Sister Earnings (70%)",
    mflow_stag: "Direct to bank account",
    income_disclaimer: "⚖️ Honest Note: Income is not guaranteed. Success depends on product quality, demand, pricing, and customer trust.",

    sec_customer_kicker: "Role 04 • Customer / Buyer (खरीदार)",
    sec_customer_title: "Digital Haat: Authentic Jharkhand Crafts",
    sec_customer_subtitle: "Open to everyone across India (women or men) without membership. Support women artisans directly:",
    c_rule_all: "Open to anyone across India",
    c_rule_privacy: "Safety: Direct contact with sellers restricted",
    c_rule_pan: "Pan-India delivery network being planned",
    sample_badge: "Sample / Coming Soon",

    sec_delivery_kicker: "Role 05 • Delivery Partner (डिलीवरी साथी) — Women Only",
    sec_delivery_title: "Local Delivery Partner Opportunity",
    sec_delivery_subtitle: "An earning opportunity for women who have time and independence.",
    del_flow_title: "Verification & Role Approval",
    del_flow_desc: "Register → simple woman identity check → approved as DELIVERY PARTNER (not seller). Students, teachers, and sellers can also take this role.",
    del_safety_note: "Safety First: Daytime, nearby local area deliveries only.",
    del_work_title: "Scope of Work",
    del_fee_pending: "Per-order delivery fee: To be decided in pilot",

    price_kicker: "Transparent Philosophy",
    price_title: "Proposed Fee Structure — Under Testing",
    price_subtitle: "Planned solely to keep the community initiative self-sustaining. No hidden charges:",
    fee_1_badge: "Nominal Registration",
    fee_1_title: "Teacher / Student Registration",
    fee_1_desc: "Covers basic profile verification and ensures genuine participation.",
    fee_2_badge: "Completion Certificate",
    fee_2_title: "Course Completion Certificate",
    fee_2_desc: "Nominal printing and processing fee for Sangi Hub certificates.",
    fee_3_badge: "Showcase & Fulfillment",
    fee_3_title: "Platform Share on Sales",
    fee_3_desc: "30% only on successful customer orders. 70% goes to seller.",
    fee_4_badge: "Offline Students",
    fee_4_title: "Sangi Hub Workshop Fee",
    fee_4_desc: "Lower proposed fee for students attending only offline workshops.",
    od_title: "Open Decisions Being Validated in the Pilot:",

    pilot_kicker: "Pilot Initiative",
    pilot_title: "Listen → Test → Improve (सुनें • परखें • सुधारें)",
    pilot_lead: "We start grounded: conversations with 10–15 women, a focused pilot block, and hands-on Sangi Hub Workshops:",
    form_privacy_line: "We will only use this information to plan and coordinate the pilot.",

    form_heading: "Share Your Interests",
    form_sub: "Tell us what you want to learn, teach, sell, or deliver:",
    form_lbl_name: "Full Name",
    form_lbl_phone: "Mobile Number (WhatsApp or Calling)",
    form_lbl_district: "Your District in Jharkhand",
    form_select_district: "-- Select Your District --",
    form_lbl_roles: "How would you like to participate? (Select all that apply)",
    role_opt_teacher: "Become a Teacher (शिक्षिका)",
    role_opt_student: "Become a Student (विद्यार्थी)",
    role_opt_seller: "Become a Seller (विक्रेता)",
    role_opt_buyer: "Become a Buyer (खरीदार)",
    role_opt_delivery: "Delivery Partner (डिलीवरी साथी)",
    role_opt_hub: "Sangi Hub Member (संगी हब)",
    role_opt_travel: "Willing to travel to lead Sangi Hub Workshops",
    role_opt_outreach: "Interested in community awareness/outreach in my area",
    form_lbl_lang: "Preferred Communication Language",
    form_lbl_skill: "Skill you wish to learn, teach, or sell",
    form_btn_submit: "Submit Pilot Interest",

    thank_title: "Johar! Your interest has been recorded.",
    thank_desc: "Thank you for sharing your thoughts. We have safely saved your details locally for pilot planning. When we organize our first workshop or batch in your district, we will reach out.",
    thank_btn_again: "Submit Another Entry",

    faq_kicker: "Clarity & Trust",
    faq_title: "Frequently Asked Questions (FAQ)",
    faq_subtitle: "Honest, direct answers to common questions about the initiative:",
    faq_q1: "Can men join this platform?",
    faq_a1: "Learning, teaching, selling, and delivery are reserved strictly for women. However, anyone across India of any gender can purchase handmade crafts as a customer.",
    faq_q2: "Do sellers get paid only after a product sells?",
    faq_a2: "Yes, exactly! No advance payments or fees are collected. Once a customer buys, 30% goes to the platform (proposed) and 70% goes directly to the seller sister.",
    faq_q3: "I cannot attend online. What can I do?",
    faq_a3: "You can join your nearest Sangi Hub Workshop offline at a lower proposed fee. Remember, the workshop provides practice and problem-solving, not a full beginner course from zero.",
    faq_q4: "Will my learning kit be delivered to my home?",
    faq_a4: "No, there is no home delivery for kits. You collect your practice kit in person at your chosen Sangi Hub Workshop. The first week begins even before your kit arrives.",
    faq_q5: "Can one woman hold multiple roles?",
    faq_a5: "Yes! With one account, you can be a student, teach a course, sell handmade crafts, and work as a delivery partner or Sangi Hub member.",
    faq_q6: "Is the certificate government-recognized?",
    faq_a6: "No. It is a Course Completion Certificate indicating that you finished course tasks. It is not an official government degree or diploma.",

    footer_mission: "A grassroots community initiative to nurture, teach, and celebrate the skills of women across Jharkhand.",
    footer_quick_links: "Quick Links",
    footer_contact_title: "Contact & Community",
    footer_contact_coming: "Direct contact channels will be published with the pilot launch (Coming soon)",
    footer_disclaimer: "⚠️ Concept Proposal: This platform represents an early concept and pilot proposal. It is not a government portal or commercial enterprise.",
    footer_copy: "All rights reserved in the community interest."
  }
};

// ════════════════════════════════════════════════════════════════
// 2. STATE & LANGUAGE SWITCHER
// ════════════════════════════════════════════════════════════════
let currentLang = 'hi';

function getSavedLanguage() {
  try {
    const saved = localStorage.getItem('sakhi_lang');
    if (saved === 'hi' || saved === 'en') {
      return saved;
    }
  } catch (e) {
    console.warn('LocalStorage access restricted:', e);
  }
  return 'hi';
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  try {
    localStorage.setItem('sakhi_lang', lang);
  } catch (e) {
    console.warn('LocalStorage save restricted:', e);
  }

  // Update Language Buttons
  const btnHi = document.getElementById('btn-lang-hi');
  const btnEn = document.getElementById('btn-lang-en');
  if (btnHi && btnEn) {
    if (lang === 'hi') {
      btnHi.classList.add('active');
      btnHi.setAttribute('aria-pressed', 'true');
      btnEn.classList.remove('active');
      btnEn.setAttribute('aria-pressed', 'false');
    } else {
      btnEn.classList.add('active');
      btnEn.setAttribute('aria-pressed', 'true');
      btnHi.classList.remove('active');
      btnHi.setAttribute('aria-pressed', 'false');
    }
  }

  // Translate all DOM elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Dynamic Document Title
  if (lang === 'hi') {
    document.title = "सखी सीखो, सखी सिखाओ | सीखो • सिखाओ • साथ बढ़ो (झारखंड पायलट)";
  } else {
    document.title = "Sakhi Sikho, Sakhi Sikhao | Learn • Teach • Grow Together (Jharkhand Pilot)";
  }
}

// ════════════════════════════════════════════════════════════════
// 3. MULTI-ROLE SWITCHER DEMO (Header Feature)
// ════════════════════════════════════════════════════════════════
function initRoleSwitcher() {
  const btn = document.getElementById('roleSwitcherBtn');
  const menu = document.getElementById('roleDropdownMenu');
  const label = document.getElementById('currentRoleLabel');
  if (!btn || !menu) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isShown = menu.classList.contains('show');
    if (isShown) {
      menu.classList.remove('show');
      btn.setAttribute('aria-expanded', 'false');
    } else {
      menu.classList.add('show');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('show');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Update label based on checked roles
  const checkboxes = menu.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((cb) => {
    cb.addEventListener('change', () => {
      let activeCount = 0;
      checkboxes.forEach(c => { if (c.checked) activeCount++; });
      if (label) {
        if (currentLang === 'hi') {
          label.textContent = activeCount > 1 ? `मेरी ${activeCount} भूमिकाएँ` : "मेरी भूमिकाएँ";
        } else {
          label.textContent = activeCount > 1 ? `My ${activeCount} Roles` : "My Roles";
        }
      }
    });
  });
}

// ════════════════════════════════════════════════════════════════
// 4. MOBILE NAVIGATION DRAWER
// ════════════════════════════════════════════════════════════════
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('main-nav');
  if (!menuBtn || !nav) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.contains('open');
    if (isOpen) {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    } else {
      nav.classList.add('open');
      menuBtn.setAttribute('aria-expanded', 'true');
    }
  });

  const navLinks = nav.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ════════════════════════════════════════════════════════════════
// 5. ACCESSIBLE FAQ ACCORDION
// ════════════════════════════════════════════════════════════════
function initFaqAccordion() {
  const accordionButtons = document.querySelectorAll('.accordion-header');

  accordionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const targetId = btn.getAttribute('aria-controls');
      const targetPanel = document.getElementById(targetId);

      // Close other panels
      accordionButtons.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherPanelId = otherBtn.getAttribute('aria-controls');
          const otherPanel = document.getElementById(otherPanelId);
          if (otherPanel) otherPanel.hidden = true;
        }
      });

      // Toggle clicked panel
      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        if (targetPanel) targetPanel.hidden = true;
      } else {
        btn.setAttribute('aria-expanded', 'true');
        if (targetPanel) targetPanel.hidden = false;
      }
    });
  });
}

// ════════════════════════════════════════════════════════════════
// 6. PILOT INTEREST FORM (Front-End & LocalStorage Only)
// ════════════════════════════════════════════════════════════════
function initInterestForm() {
  const form = document.getElementById('interestForm');
  const thankYouCard = document.getElementById('thankYouMessage');
  const previewBox = document.getElementById('savedDataPreview');
  const resetBtn = document.getElementById('btnResetForm');

  if (!form || !thankYouCard) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearFormErrors();

    const nameInput = document.getElementById('userName');
    const phoneInput = document.getElementById('userPhone');
    const districtSelect = document.getElementById('userDistrict');
    const langSelect = document.getElementById('userLang');
    const skillInput = document.getElementById('userSkill');
    const roleCheckboxes = form.querySelectorAll('input[name="roles"]:checked');

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      showError('nameError', currentLang === 'hi' ? 'कृपया अपना सही नाम लिखें।' : 'Please enter your full name.');
      isValid = false;
    }

    // Validate Phone (10 digits)
    const phoneClean = phoneInput.value.trim().replace(/\D/g, '');
    if (phoneClean.length !== 10) {
      showError('phoneError', currentLang === 'hi' ? 'कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें।' : 'Please enter a valid 10-digit mobile number.');
      isValid = false;
    }

    // Validate District
    if (!districtSelect.value) {
      showError('districtError', currentLang === 'hi' ? 'कृपया झारखंड का अपना ज़िला चुनें।' : 'Please select your district.');
      isValid = false;
    }

    // Validate Roles (At least one)
    if (roleCheckboxes.length === 0) {
      showError('rolesError', currentLang === 'hi' ? 'कृपया कम से कम एक भूमिका अवश्य चुनें।' : 'Please select at least one role.');
      isValid = false;
    }

    if (!isValid) return;

    const selectedRoles = Array.from(roleCheckboxes).map(cb => cb.value);

    const submissionData = {
      id: 'PILOT-' + Date.now().toString().slice(-6),
      name: nameInput.value.trim(),
      phone: phoneClean,
      district: districtSelect.value,
      roles: selectedRoles,
      language: langSelect ? langSelect.value : 'Hindi',
      skill: skillInput ? skillInput.value.trim() : '',
      timestamp: new Date().toISOString()
    };

    // Save safely in LocalStorage
    try {
      const existing = JSON.parse(localStorage.getItem('sakhi_pilot_submissions') || '[]');
      existing.push(submissionData);
      localStorage.setItem('sakhi_pilot_submissions', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }

    // Render Preview Summary
    const rolesLabels = {
      teacher: currentLang === 'hi' ? 'शिक्षिका (Teacher)' : 'Teacher',
      student: currentLang === 'hi' ? 'विद्यार्थी (Student)' : 'Student',
      seller: currentLang === 'hi' ? 'विक्रेता (Seller)' : 'Seller',
      buyer: currentLang === 'hi' ? 'खरीदार (Buyer)' : 'Buyer',
      delivery: currentLang === 'hi' ? 'डिलीवरी साथी (Delivery Partner)' : 'Delivery Partner',
      hub: currentLang === 'hi' ? 'संगी हब सदस्य (Sangi Hub)' : 'Sangi Hub Member',
      travel_hub: currentLang === 'hi' ? 'हब कार्यशाला हेतु यात्रा (Travel)' : 'Hub Workshop Travel',
      outreach: currentLang === 'hi' ? 'जागरूकता व संपर्क (Outreach)' : 'Outreach'
    };

    const rolesDisplay = selectedRoles.map(r => rolesLabels[r] || r).join(', ');

    if (previewBox) {
      previewBox.innerHTML = `
        <strong>${currentLang === 'hi' ? 'प्रविष्टि विवरण (सुरक्षित सहेजा गया):' : 'Saved Submission Summary:'}</strong><br>
        • <strong>${currentLang === 'hi' ? 'नाम' : 'Name'}:</strong> ${escapeHTML(submissionData.name)}<br>
        • <strong>${currentLang === 'hi' ? 'फ़ोन' : 'Phone'}:</strong> ${escapeHTML(submissionData.phone)}<br>
        • <strong>${currentLang === 'hi' ? 'ज़िला' : 'District'}:</strong> ${escapeHTML(submissionData.district)}<br>
        • <strong>${currentLang === 'hi' ? 'भूमिका' : 'Roles'}:</strong> ${escapeHTML(rolesDisplay)}<br>
        • <strong>${currentLang === 'hi' ? 'हुनर / रुचि' : 'Skill / Interest'}:</strong> ${escapeHTML(submissionData.skill || (currentLang === 'hi' ? 'सामान्य रुचि' : 'General Interest'))}
      `;
    }

    form.style.display = 'none';
    thankYouCard.style.display = 'block';
    thankYouCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      clearFormErrors();
      form.style.display = 'block';
      thankYouCard.style.display = 'none';
      form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
}

function showError(elementId, message) {
  const errEl = document.getElementById(elementId);
  if (errEl) {
    errEl.textContent = message;
  }
}

function clearFormErrors() {
  const errorElements = document.querySelectorAll('.field-error');
  errorElements.forEach((el) => {
    el.textContent = '';
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// Global helper to select role in form
window.selectRoleInForm = function(roleKey) {
  const checkbox = document.getElementById(`role-${roleKey}`);
  if (checkbox) {
    checkbox.checked = true;
  }
  const formSection = document.getElementById('pilot-form');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
    const nameInput = document.getElementById('userName');
    if (nameInput) {
      setTimeout(() => nameInput.focus(), 600);
    }
  }
};

// ════════════════════════════════════════════════════════════════
// 7. BACK TO TOP BUTTON
// ════════════════════════════════════════════════════════════════
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ════════════════════════════════════════════════════════════════
// 8. INITIALIZATION ON DOM READY
// ════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const initialLang = getSavedLanguage();
  setLanguage(initialLang);

  const btnHi = document.getElementById('btn-lang-hi');
  const btnEn = document.getElementById('btn-lang-en');
  if (btnHi) btnHi.addEventListener('click', () => setLanguage('hi'));
  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));

  initRoleSwitcher();
  initMobileMenu();
  initFaqAccordion();
  initInterestForm();
  initBackToTop();
});
