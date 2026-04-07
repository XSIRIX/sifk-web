import type { Pillar } from "@/lib/site-content";

export const siteMetaEn = {
  name: "SIFK GmbH",
  description:
    "SIFK combines international business development with a focus on Africa and solid energy consulting for companies and non-residential buildings in Germany."
};

export const homeContentEn = {
  hero: {
    eyebrow: "International connections with strategic substance",
    title: "Building connections that set markets and projects in motion.",
    text:
      "SIFK brings together international business development focused on Africa and energy consulting for companies in Germany under one clear, disciplined brand.",
    primaryCta: { href: "/en/kontakt", label: "Request an initial consultation" },
    secondaryCta: { href: "/en/leistungen", label: "View services" }
  },
  routing: [
    {
      title: "International Business Development",
      description:
        "Market entry, partnerships, and project guidance with a focus on African markets.",
      href: "/en/leistungen#internationale-geschaeftsentwicklung",
      badge: "Africa focus",
      accent: "atlas"
    },
    {
      title: "Energy Consulting Germany",
      description:
        "Energy audits, non-residential building consulting, and efficiency solutions with commercial logic.",
      href: "/en/leistungen#energieberatung-deutschland",
      badge: "DIN-oriented",
      accent: "signal"
    }
  ],
  positioning:
    "SIFK combines international business development with energy consulting to create a consulting-led platform for markets, projects, and sustainable development.",
  overview: [
    {
      title: "DIN-certified consulting",
      text: "Energy audit per DIN EN 16247, consulting per DIN V 18599 — standards-compliant and field-proven.",
      accent: "signal",
      href: "/en/leistungen#energieberatung-deutschland"
    },
    {
      title: "Own teams on the ground",
      text: "Specialists in Uganda, Ghana, Kenya, and Tanzania — not just contacts, but operational presence.",
      accent: "atlas",
      href: "/en/unser-team"
    },
    {
      title: "Engineers, MBAs, GPM",
      text: "PhD engineers, certified project managers, and seasoned finance professionals under one roof.",
      accent: "ink",
      href: "/en/unser-team#internationales-team"
    }
  ],
  stats: [
    { value: "30+", label: "Years experience" },
    { value: "6", label: "Countries" },
    { value: "9", label: "Specialists" }
  ],
  story: {
    quote:
      "New markets do not emerge by chance, but through the right connections.",
    points: [
      "Africa as a growth space with real economic momentum",
      "Partnerships with substance instead of superficial brokerage"
    ]
  },
  trust: [
    "Structured consulting",
    "International networks",
    "Commercially and sustainably sound solutions",
    "Individual support"
  ],
  cta: {
    title: "Let’s discuss your project.",
    text:
      "Whether market entry or energy consulting, we clarify the next sensible step together.",
    action: { href: "/en/kontakt", label: "Request an initial consultation" }
  }
};

export const pillarsEn: Pillar[] = [
  {
    id: "internationale-geschaeftsentwicklung",
    title: "International Business Development",
    shortTitle: "Africa",
    lead: "Understand markets, build partnerships, guide projects.",
    description:
      "SIFK supports companies in entering African markets in a structured way, building durable networks, and moving projects forward with clear alignment.",
    href: "/en/leistungen#internationale-geschaeftsentwicklung",
    accent: "atlas",
    services: [
      "Market entry and market validation",
      "Strategic partnerships",
      "Project support and stakeholder coordination"
    ]
  },
  {
    id: "energieberatung-deutschland",
    title: "Energy Consulting Germany",
    shortTitle: "Energy",
    lead: "Analyze energy use and unlock economic potential.",
    description:
      "For companies and non-residential buildings, SIFK combines technical analysis with economic prioritization so efficiency measures become understandable and actionable.",
    href: "/en/leistungen#energieberatung-deutschland",
    accent: "signal",
    services: [
      "Energy audit in line with DIN EN 16247",
      "Consulting for non-residential buildings under DIN V 18599",
      "Efficiency measures and implementation logic"
    ]
  }
];

export const servicePageContentEn = {
  intro: {
    eyebrow: "Services",
    title: "Two service fields, one shared consulting logic.",
    text:
      "SIFK operates at the intersection of international development and economic efficiency. Both fields follow the same approach: precise analysis, durable structure, and partnership-oriented execution."
  },
  process: [
    {
      step: "01",
      title: "Clarify the starting point",
      text:
        "We define goals, constraints, and decision criteria early so projects do not rest on vague assumptions."
    },
    {
      step: "02",
      title: "Structure the strategy",
      text:
        "SIFK translates complex situations into prioritized action areas, clear roles, and reliable next steps."
    },
    {
      step: "03",
      title: "Support implementation",
      text:
        "From relationship building to implementation logic, we support the process so decisions stay connected and actionable."
    }
  ],
  cta: {
    title: "Let us understand your project in more detail.",
    text:
      "We discuss which service field is relevant for your request and what a sensible entry point could look like.",
    action: { href: "/en/kontakt", label: "Start an inquiry" }
  }
};

export const aboutPageContentEn = {
  intro: {
    eyebrow: "About",
    title: "SIFK creates connection with commercial clarity.",
    text:
      "The brand stands for actively bringing together markets, partners, projects, and energy efficiency. The result is a consulting approach that combines economic opportunity with reliable execution."
  },
  principles: [
    {
      title: "Clarity over volume",
      text:
        "SIFK communicates precisely and without noise. Trust here is built through structure and substance, not staging."
    },
    {
      title: "International perspective",
      text:
        "We work with a view of economic interdependence, local realities, and partnership-based relationships."
    },
    {
      title: "Commercially robust decisions",
      text:
        "Whether market entry or energy efficiency, recommendations must be actionable, transparent, and strategically sound."
    }
  ],
  workingStyle: [
    "precise analysis instead of generic consulting",
    "goal-oriented processes with clear next steps",
    "collaboration on equal footing across technical and cultural contexts"
  ],
  cta: {
    href: "/en/kontakt",
    label: "Get in touch"
  }
};

export const contactPageContentEn = {
  intro: {
    eyebrow: "Contact",
    title: "The simplest starting point is a clear request.",
    text:
      "Use the form to briefly outline your project. Direct contact details and legal company information will be added in the next iteration."
  },
  options: [
    {
      title: "Discuss market entry",
      text:
        "For international business development, partnerships, or project-related inquiries with an Africa focus."
    },
    {
      title: "Request energy consulting",
      text:
        "For energy audits, non-residential building consulting, or efficiency topics in Germany."
    },
    {
      title: "General inquiry",
      text:
        "For broader questions about the brand, partnerships, or organisational topics."
    }
  ]
};

export const cloodyBadgeEn = {
  kicker: "African Trading Platform",
  tagline: "Pay less than you guess.",
  href: "/en/cloody"
};

export const cloodyPromoEn = {
  eyebrow: "Project Cloody",
  title: "The African marketplace is taking shape.",
  text: "Cloody connects Europe and Africa through a community-based trading platform — with integrated customs processing and the principle: Pay less than you guess.",
  tagline: "Pay less than you guess.",
  action: { href: "/en/cloody", label: "Learn more" },
  highlights: [
    "Direct trade without middlemen",
    "Integrated customs processing",
    "Community-based logistics"
  ]
};

export const cloodyPageContentEn = {
  intro: {
    eyebrow: "Project Cloody",
    title: "The African marketplace that rethinks trade.",
    text: "Cloody is a community-based trading platform enabling direct trade with Africa. For individuals and businesses alike. With integrated customs processing. Under the principle: Pay less than you guess.",
    stats: [
      { value: "54", label: "African countries" },
      { value: "1.4 bn", label: "People on the continent" },
      { value: "\u221E", label: "Possibilities" }
    ]
  },
  vision: {
    eyebrow: "Vision",
    title: "Trade with Africa, accessible to everyone.",
    text: "Cloody makes access to African markets as straightforward as an online purchase. The platform connects sellers and buyers directly, reduces intermediaries, and creates the transparency that builds trust.",
    points: [
      { title: "Direct", text: "Trade without unnecessary middlemen" },
      { title: "Integrated", text: "Customs processing through the platform" },
      { title: "Open", text: "Marketplace for individuals and businesses" },
      { title: "Transparent", text: "Price transparency as a core principle" }
    ]
  },
  concept: {
    eyebrow: "Concept",
    title: "Pay less than you guess.",
    text: "Cloody builds on a pricing model that beats expectations. Through bundling, community logistics, and direct sourcing channels, price advantages are created and passed on to users.",
    pillars: [
      { label: "Bundling", text: "Buy together, pay less" },
      { label: "Community logistics", text: "Shared routes, shared costs" },
      { label: "Direct sourcing", text: "No middlemen, no markups" }
    ]
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "Three steps to trading with Africa.",
    steps: [
      {
        step: "01",
        title: "Discover offerings",
        text: "Browse the marketplace for products and services from African markets, or list your own offering."
      },
      {
        step: "02",
        title: "Customs and logistics",
        text: "The platform handles all customs processing and coordinates shipping, so trade runs smoothly."
      },
      {
        step: "03",
        title: "Trade directly",
        text: "Buy or sell directly, transparently, and on terms that strengthen both sides."
      }
    ]
  },
  audience: {
    eyebrow: "Target audience",
    title: "For everyone who wants to trade with Africa.",
    groups: [
      {
        title: "Individuals",
        icon: "discover",
        text: "Access to unique products from African markets, without customs and shipping complexity."
      },
      {
        title: "Businesses",
        icon: "scale",
        text: "Direct sourcing channels and new sales markets, backed by a reliable platform structure."
      },
      {
        title: "African sellers",
        icon: "globe",
        text: "An international distribution channel that simplifies and professionalises access to European buyers."
      }
    ]
  },
  cta: {
    eyebrow: "Interest",
    title: "Cloody is taking shape.",
    subtitle: "Talk to us.",
    text: "The project is in development. Whether you want to join as a partner, seller, or early adopter, let\u2019s start the conversation.",
    action: { href: "/en/kontakt", label: "Get in touch" }
  }
};

export const teamPageContentEn = {
  intro: {
    eyebrow: "Our Team",
    title: "A team with clear leadership, regional depth, and reliable execution.",
    text:
      "SIFK combines international business development, energy consulting, and structured project delivery in one shared operating model. That creates decisions that are both technically clear and durable in execution."
  },
  sectionLeadership: {
    eyebrow: "Leadership & Practice Leads",
    title: "Clear responsibility with a clean operating structure."
  },
  executiveLead: {
    name: "Pheeraphon Karch",
    role: "Managing Director",
    accent: "atlas",
    flags: ["🇩🇪"],
    country: "Germany",
    languages: "German, English C2",
    text:
      "Has led SIFK since November 2022. Combines company strategy, operational steering, and international communication with clear client focus.",
    areas: ["Company strategy", "Operational leadership", "International client communication"]
  },
  practiceLeads: [
    {
      name: "Adrian Müller",
      role: "Head of Energy and Africa",
      accent: "forge",
      flags: ["🇩🇪"],
      country: "Germany",
      languages: "German (native), English fluent, French basic",
      text:
        "Lead energy auditor at SIFK focused on consulting for non-residential buildings, systems, and technical infrastructure under DIN 16247 and DIN 18599.",
      areas: ["DIN EN 16247-1 energy audits", "Non-residential buildings & systems", "Technical efficiency assessment"]
    },
    {
      name: "Rainer Bardtke",
      role: "Director | Africa Business Advisory",
      accent: "signal",
      flags: ["🇩🇪"],
      country: "Germany / Africa",
      languages: "German (native), English C2, French B1, Spanish A1",
      text:
        "Brings long-running experience in executive management, international sales, and market development. Leads the Africa practice with a focus on durable partnerships and practical market entry.",
      areas: ["Africa market development", "Sales & partnerships", "Commercial development"]
    }
  ],
  africaDesk: {
    eyebrow: "Africa Team",
    title: "Operational market insight, regional language capability, and direct project support for the Africa practice.",
    members: [
      {
        name: "Patience Bauer",
        role: "Environmental & Resource Management Specialist",
        flags: ["🇺🇬", "🇩🇪"],
        country: "Uganda / Germany",
        text:
          "Strategic business consultant with more than 15 years of experience bridging German operational standards and African market dynamics. Specialized in Uganda-Germany market access, operational scaling, and intercultural coordination."
      },
      {
        name: "Panu Mankit",
        role: "Executive Operations Specialist",
        flags: ["🇩🇪"],
        country: "Germany",
        text:
          "Supports projects with strong operational coordination, correspondence, and data management. Brings experience from sales operations, CRM, and executive support."
      },
      {
        name: "Haulie Tembo-Schäfer",
        role: "Business Development Specialist",
        flags: ["🇿🇲"],
        country: "Zambia",
        text:
          "Brings 11 years of sales experience in West Africa with a focus on business processes, market understanding, and performance metrics. Strong in solution-oriented work with practical, implementable proposals."
      },
      {
        name: "Christian Brecht",
        role: "Sales Director",
        flags: ["🇩🇪"],
        country: "Germany",
        text:
          "Brings more than 30 years of experience in existing-customer support, business acquisition, and the preparation of robust market analyses."
      }
    ]
  },
  sectionInternational: {
    eyebrow: "Our International Team",
    title: "Local expert partners and grounded market presence across multiple African countries."
  },
  intlTeam: [
    {
      name: "Mahlet Asfha Woldegiorgis",
      role: "Africa Team | Ethiopia",
      flags: ["🇪🇹"],
      country: "Ethiopia",
      qualification: "German, English, Amharic | Pharmacy",
      text: "Brings a pharmacy background, work experience in Addis Ababa, and language fluency in German, English, and Amharic. Supports coordination in German-Ethiopian contexts."
    },
    {
      name: "Tom Twimukire",
      role: "Director Business Development",
      flags: ["🇺🇬"],
      country: "Uganda",
      qualification: "MBA, B.Com (Hons)",
      org: "Tocom Ltd",
      text: "Founder and managing director of Tocom Ltd. Over 10 years of experience in brand strategy, go-to-market planning, and digital marketing across East African growth markets."
    },
    {
      name: "Dr. Kobla Xoese Nanewortor",
      role: "Project Lead Technical Engineering",
      flags: ["🇬🇭"],
      country: "Ghana",
      qualification: "Dr.-Ing. Electrical Engineering",
      org: "TenneT TSO GmbH",
      text: "PhD engineer specializing in high-voltage technology, grid planning, and certification of decentralized power generation. Experienced at TenneT, E.ON, TÜV NORD, and Siemens."
    },
    {
      name: "Muwanga K. James",
      role: "Director, Accounting & Business",
      flags: ["🇺🇬"],
      country: "Uganda",
      qualification: "B.Comm Business Studies (Accounting)",
      text: "Seasoned finance and business professional focused on accounting, internal audit, and strategic company leadership. Manages multiple businesses in Uganda."
    },
    {
      name: "John Damulira",
      role: "Operations Manager",
      flags: ["🇺🇬"],
      country: "Uganda",
      qualification: "B.Comm, Makerere University",
      text: "Operations manager with experience in construction, real estate, and credit-control-driven client operations at G4S Uganda."
    },
    {
      name: "Celestine Wafula",
      role: "Sales Executive",
      flags: ["🇰🇪"],
      country: "Kenya",
      qualification: "BSc Pharmaceutical Technology | Business Management & Digital Marketing",
      text: "Sales executive with 9 years of experience across East Africa, Turkey, Egypt, and Thailand. Specializes in sales planning, client relationships, and market analysis."
    },
    {
      name: "Albert Guido Moshi",
      role: "Logistics & Environmental Management",
      flags: ["🇹🇿"],
      country: "Tanzania",
      qualification: "MSc, Certified Project Manager (GPM)",
      text: "MSc in Environmental and Resource Management with experience in dispatch, fleet management, international shipping, and operational rail logistics. Active in German-Tanzanian educational outreach."
    }
  ],
  collaboration: [
    "clear responsibilities instead of diffuse handovers",
    "technical depth with an entrepreneurial perspective",
    "communicative confidence across cultural and operational contexts"
  ],
  cta: {
    href: "/en/kontakt",
    label: "Get in touch"
  }
};
