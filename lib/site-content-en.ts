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

export const teamPageContentEn = {
  intro: {
    eyebrow: "Our Team",
    title: "A team that makes connection operationally reliable.",
    text:
      "SIFK combines international business development, energy consulting, and structured project delivery in one shared operating model. That creates decisions that are both technically clear and durable in execution."
  },
  profiles: [
    {
      name: "International Business Development",
      role: "Market entry and partnerships",
      accent: "atlas",
      image: "/profile/black.jpg",
      imageAlt: "Portrait for international business development",
      text:
        "Leads conversations, partnership development, and durable relationships with an Africa focus. The emphasis is on realistic steps, clear roles, and decisions that can move forward.",
      areas: ["Market entry", "Partnerships", "Stakeholder communication"]
    },
    {
      name: "Energy Consulting",
      role: "Analysis and efficiency logic",
      accent: "signal",
      image: "/profile/asian.jpg",
      imageAlt: "Portrait for energy consulting",
      text:
        "Combines technical analysis with economic prioritization so efficiency topics can be evaluated clearly and turned into practical measures.",
      areas: ["Audits", "Non-residential buildings", "Economic prioritization"]
    },
    {
      name: "Project Coordination",
      role: "Execution and structure",
      accent: "forge",
      image: "/profile/white.jpg",
      imageAlt: "Portrait for project coordination",
      text:
        "Keeps projects together across strategy, consulting, and operational execution. Priorities, communication, and responsibilities remain aligned across all stakeholders.",
      areas: ["Project structure", "Coordination", "Execution steering"]
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
