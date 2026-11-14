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
    mainInvitation: string;
    closingNote: string;
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
      fullName: "Ujjwal Saini",
      fullNameHi: "उज्जवल सैनी",
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
      fullName: "Rimjhim Saini",
      fullNameHi: "रिमझिम सैनी",
      father: "Dharamveer Singh",
      fatherHi: "श्री धर्मवीर सिंह",
      mother: "Smt. Poonam Devi",
      motherHi: "श्रीमती पूनम देवी",
      isMotherLate: false,
      residence: "Kashipur, Uttarakhand",
      residenceHi: "काशीपुर (उत्तराखण्ड)",
    },
    monogram: "U & R",
    title: "Ujjwal Weds Rimjhim",
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
    timeDisplay: "7:00 PM onwards",
    timeDisplayHi: "सायं 7:00 बजे",
    venue: {
      name: "Radhika Garden",
      nameHi: "राधिका गार्डन",
      address: "Chakkar Road, Bijnor, Uttar Pradesh",
      addressHi: "चक्कर रोड, बिजनौर",
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
            time: "5:00 PM",
            timeHi: "सायं 5:00 बजे",
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
            time: "Auspicious Hour",
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
            name: "Nav Vadhu Sang Aagman",
            nameHi: "नव वधू संग आगमन",
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
      "Rudra",
      "Pushpander",
      "Naveen",
      "Mayank",
      "Krishna",
      "Keshav",
    ],
    sisters: [
      "Ishika",
      "Samiksha",
      "Goldi",
      "Veera",
      "Rubi",
      "Pushpa",
    ],
    elderCouples: [
      {
        husband: { relation: "Tauji", relationHi: "ताऊजी", name: "Shokendar", nameHi: "शौकेन्द्र" },
        wife: { relation: "Taiji", relationHi: "ताईजी", name: "Laxmi", nameHi: "लक्ष्मी" },
      },
      {
        husband: { relation: "Chachaji", relationHi: "चाचाजी", name: "Arun", nameHi: "अरुण" },
        wife: { relation: "Chachiji", relationHi: "चाचीजी", name: "Aarti", nameHi: "आरती" },
      },
      {
        husband: { relation: "Fufaji", relationHi: "फूफाजी", name: "Dharampal", nameHi: "धर्मपाल" },
        wife: { relation: "Buaji", relationHi: "बुआजी", name: "Brijesh", nameHi: "ब्रिजेश" },
      },
      {
        husband: { relation: "Fufaji", relationHi: "फूफाजी", name: "Khar Singh", nameHi: "खड़ सिंह" },
        wife: { relation: "Buaji", relationHi: "बुआजी", name: "Sangeeta", nameHi: "संगीता" },
      },
    ],
  },
  traditional: {
    jayShriRam: "ॐ जय श्री राम ॐ",
    ganeshShloka: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः |\nनिर्विघ्नं कुरुमेदेव सर्व कार्येषु सर्वदा ||",
    ganeshayNamah: "|| श्री गणेशाय नमः ||",
    ganeshInvocation: "विघ्न हरण मंगल करण श्री गणपति जी महाराज।\nप्रथम निमन्त्रण आपको पूरण कीजो काज।।",
    mangalikKaryakram: "|| मांगलिक कार्यक्रम ||",
    dampatySutraBandhan: "दाम्पत्य-सूत्र-बंधन",
    mainInvitation: "परम पिता परमेश्वर की असीम अनुकम्पा से\n\nवैदिक मंत्रोच्चार सहित पवित्र अग्नि देव के समक्ष सात फेरों के वैवाहिक बन्धन में बँधने जा रहे हैं। आप इस मंगल क्षण के साक्षी बन नव-युगल को अपना शुभाशीर्वाद प्रदान कर अनुगृहित करें।",
    closingNote: "कृपया निमंत्रण पत्र को ही प्रत्यक्ष मिलन मानकर हृदय से स्वीकार करें।",
  },
  contacts: [
    { name: "Nardev Singh", nameHi: "नरदेव सिंह", phone: "9012359678" },
    { name: "Dr. Shokendar Singh", nameHi: "डॉ॰ शौकेन्द्र सिंह", phone: "9650155224" },
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
