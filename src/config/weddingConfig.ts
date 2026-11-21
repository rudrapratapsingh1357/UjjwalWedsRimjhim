// ═══════════════════════════════════════════════════════════════════
// Wedding Configuration — Single source of truth for all wedding data
// ═══════════════════════════════════════════════════════════════════

export interface FamilyMember {
  relation: string;
  relationHi: string;
  name: string;
  nameHi: string;
  isLate?: boolean;
}

export interface ElderCouple {
  husband: { relation: string; relationHi: string; name: string; nameHi: string };
  wife: { relation: string; relationHi: string; name: string; nameHi: string };
}

export interface WeddingEvent {
  day: string;
  dayHi: string;
  date: string;
  dateHi: string;
  events: {
    name: string;
    nameHi: string;
    time: string;
    timeHi: string;
    icon?: string;
  }[];
}

export interface WeddingConfig {
  couple: {
    groom: {
      firstName: string;
      firstNameHi: string;
      fullName: string;
      fullNameHi: string;
      father: string;
      fatherHi: string;
      mother: string;
      motherHi: string;
      isMotherLate: boolean;
      residence: string;
      residenceHi: string;
    };
    bride: {
      firstName: string;
      firstNameHi: string;
      fullName: string;
      fullNameHi: string;
      father: string;
      fatherHi: string;
      mother: string;
      motherHi: string;
      isMotherLate: boolean;
      residence: string;
      residenceHi: string;
    };
    monogram: string;
    title: string;
    titleHi: string;
  };
  grandparents: {
    grandfather: string;
    grandfatherHi: string;
    grandmother: string;
    grandmotherHi: string;
    isGrandmotherLate: boolean;
  };
  event: {
    dateDisplay: string;
    dateDisplayHi: string;
    year: number;
    weddingDate: string; // ISO date string
    timeDisplay: string;
    timeDisplayHi: string;
    venue: {
      name: string;
      nameHi: string;
      address: string;
      addressHi: string;
      mapUrl: string;
    };
    schedule: WeddingEvent[];
  };
  family: {
    brothers: string[];
    sisters: string[];
    elderCouples: ElderCouple[];
  };
  traditional: {
    jayShriRam: string;
    ganeshShloka: string;
    ganeshayNamah: string;
    ganeshInvocation: string;
    mangalikKaryakram: string;
    dampatySutraBandhan: string;
    closingNote: string;
    closingAttribution?: string;
  };
  contacts: {
    name: string;
    nameHi: string;
    phone: string;
  }[];
  darshanabhilashi: string[];
  vineet: string[];
  childrenPoems: {
    left: { poem: string; names: string };
    right: { poem: string; names: string };
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: {
      firstName: "Ujjwal",
      firstNameHi: "उज्जवल",
      fullName: "Ujjwal",
      fullNameHi: "उज्जवल",
      father: "Nardev Singh",
      fatherHi: "श्री नरदेव सिंह",
      mother: "Late Smt. Pramod Devi",
      motherHi: "स्व॰ श्रीमती प्रमोद देवी",
      isMotherLate: true,
      residence: "Village Shahzadpur, P.O. Rawli, District Bijnor",
      residenceHi: "ग्राम शहजादपुर, पो॰ रावली, जिला बिजनौर",
    },
    bride: {
      firstName: "Rimjhim",
      firstNameHi: "रिमझिम",
      fullName: "Rimjhim",
      fullNameHi: "रिमझिम",
      father: "Dharamveer Singh",
      fatherHi: "श्री धर्मवीर सिंह",
      mother: "Smt. Poonam Devi",
      motherHi: "श्रीमती पूनम देवी",
      isMotherLate: false,
      residence: "Kashipur, Uttarakhand",
      residenceHi: "काशीपुर (उत्तराखण्ड)",
    },
    monogram: "U & R",
    title: "Ujjwal & Rimjhim",
    titleHi: "उज्जवल संग रिमझिम",
  },
  grandparents: {
    grandfather: "Shri Ramkaran Singh",
    grandfatherHi: "श्री रामकरन सिंह",
    grandmother: "Late Smt. Neelo Devi",
    grandmotherHi: "स्व॰ श्रीमती नीलो देवी",
    isGrandmotherLate: true,
  },
  event: {
    dateDisplay: "4 December 2026",
    dateDisplayHi: "4 दिसम्बर 2026",
    year: 2026,
    weddingDate: "2026-12-04",
    timeDisplay: "As per Wedding Muhurat",
    timeDisplayHi: "शुभ लग्नानुसार",
    venue: {
      name: "Radhika Garden",
      nameHi: "राधिका गार्डन",
      address: "Chakkar Road, Bijnor, Uttar Pradesh, India",
      addressHi: "चक्कर रोड, बिजनौर, उत्तर प्रदेश",
      mapUrl: "https://maps.app.goo.gl/w6iAMnuPyAtdFPa2A?g_st=aw",
    },
    schedule: [
      {
        day: "Thursday",
        dayHi: "बृहस्पतिवार",
        date: "3 December 2026",
        dateHi: "3 दिसम्बर 2026",
        events: [
          {
            name: "Manda",
            nameHi: "मंडा",
            time: "1:00 PM",
            timeHi: "दोपहर 1:00 बजे",
            icon: "🪔",
          },
        ],
      },
      {
        day: "Friday",
        dayHi: "शुक्रवार",
        date: "4 December 2026",
        dateHi: "4 दिसम्बर 2026",
        events: [
          {
            name: "Ghudchadi",
            nameHi: "घुड़चढ़ी",
            time: "4:00 PM",
            timeHi: "सायं 4:00 बजे",
            icon: "🐎",
          },
          {
            name: "Prasthan Baraat",
            nameHi: "प्रस्थान बारात",
            time: "5:00 PM",
            timeHi: "सायं 5:00 बजे",
            icon: "🎺",
          },
          {
            name: "Chadhat",
            nameHi: "चढ़त",
            time: "8:00 PM",
            timeHi: "रात्रि 8:00 बजे",
            icon: "🎊",
          },
          {
            name: "Vivah Sanskar",
            nameHi: "विवाह संस्कार",
            time: "As per Wedding Muhurat",
            timeHi: "शुभ लग्नानुसार",
            icon: "🔥",
          },
        ],
      },
      {
        day: "Saturday",
        dayHi: "शनिवार",
        date: "5 December 2026",
        dateHi: "5 दिसम्बर 2026",
        events: [
          {
            name: "Griha Pravesh",
            nameHi: "नववधू गृह प्रवेश",
            time: "Morning",
            timeHi: "प्रातः बेला में",
            icon: "🏠",
          },
        ],
      },
    ],
  },
  family: {
    brothers: [
      "Rudra Pratap Singh",
      "Pushpander Saini",
      "Naveen Saini",
      "Mayank Saini",
      "Shivam Saini",
      "Sourabh Kumar Saini",
    ],
    sisters: [
      "Ishika Saini",
      "Pushpa Saini",
      "Goldy",
      "Samiksha Saini",
      "Veeraa",
      "Ruby",
    ],
    elderCouples: [
      {
        husband: { relation: "Tauji", relationHi: "ताऊजी", name: "Dr. Shokendar Saini", nameHi: "डॉ॰ शौकेन्द्र सैनी" },
        wife: { relation: "Taiji", relationHi: "ताईजी", name: "Mrs. Laxmi Saini", nameHi: "श्रीमती लक्ष्मी सैनी" },
      },
      {
        husband: { relation: "Chacha Ji", relationHi: "चाचा जी", name: "Mr. Arun Kumar Saini", nameHi: "श्री अरुण कुमार सैनी" },
        wife: { relation: "Chachi Ji", relationHi: "चाची जी", name: "Mrs. Aarti Saini", nameHi: "श्रीमती आरती सैनी" },
      },
    ],
  },
  traditional: {
    ganeshShloka: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः |\nनिर्विघ्नं कुरुमेदेव सर्व कार्येषु सर्वदा ||",
    ganeshayNamah: "॥ श्री गणेशाय नमः ॥",
    ganeshInvocation: "विघ्न हरण मंगल करण श्री गणपति जी महाराज।\nप्रथम निमन्त्रण आपको पूरण कीजो काज।।",
    mangalikKaryakram: "Wedding Celebrations",
    dampatySutraBandhan: "दाम्पत्य-सूत्र-बंधन",
    jayShriRam: "ॐ जय श्री राम ॐ",
    closingNote: "Na koi kaam, na koi bahana hoga, humare mama ki shaadi mein, aap sabko jarur-jarur aana hoga.",
    closingAttribution: "Najuk, Kunj, Madhav",
  },
  contacts: [
    { name: "Nardev Singh", nameHi: "नरदेव सिंह", phone: "9650155224" },
    { name: "Dr. Shokendar Singh", nameHi: "डॉ॰ शौकेन्द्र सिंह", phone: "9012359678" },
    { name: "Arun Kumar", nameHi: "अरुण कुमार", phone: "8377884494" },
  ],
  darshanabhilashi: [
    "Pushpendra Saini",
    "Naveen Saini",
    "Rudrapratap Singh",
    "Mayank",
    "Mohit",
    "Deepanshu",
    "Akshay",
  ],
  vineet: [
    "Shokendra Singh",
    "Arun Kumar Saini",
    "Jogendra Singh",
    "Sonveer Saini",
    "Brajveer Saini",
    "Surendra Saini",
    "Narendra Singh",
  ],
  childrenPoems: {
    left: {
      poem: "ढोल ताशे हुए पुराने,\nडी.जे. का जमाना है।\nहमारे चाचा की शादी\nमें जरूर-जरूर आना है।",
      names: "जयांश, हिताक्षी, नित्या",
    },
    right: {
      poem: "घड़ी खुशियों की आई है,\nखुशी की चाह देखेंगे\nअपने मामा की शादी में\nहम आपकी राह देखेंगे",
      names: "सूर्या, सनिका",
    },
  },
};
