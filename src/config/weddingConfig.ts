export interface FamilyMember {
  relation: string;
  name: string;
}

export interface ElderCouple {
  husband: { relation: string; name: string };
  wife: { relation: string; name: string };
}

export interface WeddingConfig {
  couple: {
    groom: {
      firstName: string;
      fullName: string;
      father: string;
      mother: string;
    };
    bride: {
      firstName: string;
      fullName: string;
      father: string;
      mother: string;
    };
    monogram: string;
    title: string;
  };
  event: {
    dateDisplay: string; // "4 December"
    timeDisplay: string; // "7:00 PM onwards"
    year: number | null; // null if unconfirmed
    messageTitle: string;
    messageBody: string[];
    blessingQuote: string;
    venue: {
      title: string;
      mapUrl: string;
    };
  };
  family: {
    brothers: string[];
    sisters: string[];
    elderCouples: ElderCouple[];
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: {
      firstName: "Ujjwal",
      fullName: "Ujjwal Singh",
      father: "Nardev Singh",
      mother: "Pramod Devi",
    },
    bride: {
      firstName: "Rimjhim",
      fullName: "Rimjhim Saini",
      father: "Dharameer",
      mother: "Punam Saini",
    },
    monogram: "U & R",
    title: "Ujjwal Weds Rimjhim",
  },
  event: {
    dateDisplay: "4 December",
    timeDisplay: "7:00 PM onwards",
    year: null, // Configurable: Set to e.g. 2026 once year is finalized
    messageTitle: "With the blessings of our families",
    messageBody: [
      "With immense joy and the blessings of our families, we invite you to join us in celebrating the beautiful union of Ujjwal and Rimjhim.",
      "Your presence, love, and blessings will make this occasion even more special.",
      "We look forward to celebrating this new beginning with you.",
    ],
    blessingQuote: "A union of two hearts, two souls, and two families bonded by love and tradition.",
    venue: {
      title: "Wedding Celebration Venue",
      mapUrl: "https://maps.app.goo.gl/w6iAMnuPyAtdFPa2A?g_st=aw",
    },
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
        husband: { relation: "Tauji", name: "Shokendar" },
        wife: { relation: "Taiji", name: "Laxmi" },
      },
      {
        husband: { relation: "Chachaji", name: "Arun" },
        wife: { relation: "Chachiji", name: "Aarti" },
      },
      {
        husband: { relation: "Fufaji", name: "Dharampal" },
        wife: { relation: "Buaji", name: "Brijesh" },
      },
      {
        husband: { relation: "Fufaji", name: "Khar Singh" },
        wife: { relation: "Buaji", name: "Sangeeta" },
      },
    ],
  },
};
