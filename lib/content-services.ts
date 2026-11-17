import type { Faq } from "@/lib/content-voucher";

// Copy for the two service pages, /leistungen/energieberatung and /leistungen/markteintritt-afrika,
// in German and English. Every factual sentence has a row in docs/seo/claims.md.
// Nothing here changes on its own: facts with an end date name that date and carry a Stand line,
// and are re-checked by hand.

type Item = { title: string; text: string };

/** A link in a funding item. `hrefLang` marks a link to a page in another language; it is never localized. */
export type FundingLink = { href: string; label: string; hrefLang?: "de" };

export type ServiceSection =
  | { kind: "prose"; title: string; paragraphs: string[]; stand?: boolean }
  | { kind: "ledger"; title: string; lead?: string; items: Item[] }
  | { kind: "steps"; title: string; items: Item[] }
  | { kind: "funding"; title: string; items: Array<{ title: string; text: string; link?: FundingLink }> }
  | { kind: "places"; title: string; text: string; places: string[] };

export type ServicePageContent = {
  path: "/leistungen/energieberatung" | "/leistungen/markteintritt-afrika";
  topic: "energie" | "international";
  /** Breadcrumb label for the services page and for this page. */
  crumbs: { services: string; page: string };
  schema: { name: string; serviceTypes: string[] };
  /** The line naming the day the facts were last checked, for example "Stand: 17.11.2026". */
  stand: string;
  hero: { title: string; lead: string; art: { src: string; alt: string; width: number; height: number } };
  sections: ServiceSection[];
  faq: { title: string; items: Faq[] };
  close: { title: string; text: string };
};

export type ServicePages = { energy: ServicePageContent; africa: ServicePageContent };

const places = ["Schriesheim", "Heidelberg", "Mannheim", "Weinheim", "Ladenburg", "Rhein-Neckar"];

const energyDe: ServicePageContent = {
  path: "/leistungen/energieberatung",
  topic: "energie",
  crumbs: { services: "Leistungen", page: "Energieberatung" },
  schema: {
    name: "Energieaudit und Energieberatung für Unternehmen",
    serviceTypes: [
      "Energieaudit nach DIN EN 16247-1",
      "Energieberatung für Nichtwohngebäude nach DIN V 18599",
      "Maßnahmenplan mit Kosten, Einsparung und Amortisation",
      "Hinweise zu Förderprogrammen"
    ]
  },
  stand: "Stand: 17.11.2026",
  hero: {
    title: "Energie­audit und Energie­beratung für Unternehmen.",
    lead:
      "Wir prüfen den Energieverbrauch von Betrieben und Nichtwohngebäuden und zeigen, welche Maßnahme sich zuerst lohnt. Für Unternehmen in Heidelberg, Mannheim und der Region Rhein-Neckar.",
    art: {
      src: "/world/energy-after.webp",
      alt: "Weißes Modell eines Betriebs mit Solardach, Wärmepumpen und Ladepunkten. Ein goldenes Band führt vom Dach in die Halle.",
      width: 1600,
      height: 1200
    }
  },
  sections: [
    {
      kind: "prose",
      title: "Wer muss ein Energieaudit machen?",
      paragraphs: [
        "Heute gilt: Jedes Unternehmen, das kein kleines oder mittleres Unternehmen ist, muss ein Energieaudit nach DIN EN 16247-1 machen und es mindestens alle vier Jahre wiederholen. Wer ein Energiemanagementsystem nach DIN EN ISO 50001 oder ein Umweltmanagementsystem nach EMAS eingerichtet oder mit der Einrichtung begonnen hat, ist davon befreit.",
        "Ein Gesetzentwurf der Bundesregierung (Drucksache 21/8027) würde die Pflicht neu fassen: Entscheidend wäre dann nicht mehr die Größe des Unternehmens, sondern ein durchschnittlicher Energieverbrauch von mehr als 2,77 Gigawattstunden im Jahr, gerechnet über die letzten drei Kalenderjahre. Der Bundestag hat den Entwurf am 24.09.2026 an den Ausschuss überwiesen. Beschlossen ist er noch nicht."
      ],
      stand: true
    },
    {
      kind: "ledger",
      title: "Was Sie bekommen.",
      items: [
        {
          title: "Energieaudit nach DIN EN 16247-1",
          text: "Wir erfassen Verbräuche, Anlagen, Gebäude und Prozesse und dokumentieren das Audit so, wie die Norm es verlangt."
        },
        {
          title: "Nichtwohngebäude nach DIN V 18599",
          text: "Wir bewerten Gebäudehülle, Heizung, Lüftung, Kühlung und Beleuchtung nach dem Rechenverfahren der Norm."
        },
        {
          title: "Maßnahmenplan mit Kosten, Einsparung und Amortisation",
          text: "Jede Empfehlung mit Investition, jährlicher Einsparung und Amortisationszeit, sortiert nach Wirkung."
        },
        {
          title: "Hinweise zu Förderprogrammen",
          text: "Wir zeigen, welche Förderprogramme für Ihre Maßnahmen in Frage kommen und was dafür nötig ist."
        }
      ]
    },
    {
      kind: "steps",
      title: "So läuft ein Energieaudit ab.",
      items: [
        {
          title: "Erstgespräch",
          text: "Wir klären, welche Standorte, Gebäude und Anlagen das Audit umfasst und welche Daten schon vorliegen."
        },
        {
          title: "Daten und Begehung",
          text: "Wir sammeln Verbrauchsdaten und sehen uns Gebäude, Anlagen und Abläufe vor Ort an."
        },
        {
          title: "Analyse",
          text: "Wir werten Verbräuche aus, finden die größten Verbraucher und rechnen Maßnahmen durch."
        },
        {
          title: "Bericht und Maßnahmenplan",
          text: "Sie erhalten den Auditbericht und einen Maßnahmenplan, mit dem Sie entscheiden können."
        }
      ]
    },
    {
      kind: "funding",
      title: "Förderung.",
      items: [
        {
          title: "Energieberatung für Nichtwohngebäude, Anlagen und Systeme (BAFA)",
          text: "Bis 31.12.2026 fördert das BAFA Energieaudits nach DIN EN 16247 mit 50 % des Beratungshonorars, höchstens 3.000 Euro, bei jährlichen Energiekosten bis 10.000 Euro netto höchstens 600 Euro. Auch Energieberatungen für Nichtwohngebäude nach DIN V 18599 sind bis dahin förderfähig. Die Beratung muss eine Person durchführen, die in der Energieeffizienz-Expertenliste gelistet ist."
        },
        {
          title: "Bundesförderung für effiziente Gebäude (BEG)",
          text: "Für die Sanierung von Nichtwohngebäuden gibt es die Bundesförderung für effiziente Gebäude."
        },
        {
          title: "Transformationspläne (BAFA, Modul 5)",
          text: "Gefördert werden Pläne, mit denen ein Unternehmen seinen Weg zur Treibhausgasneutralität plant. Den Antrag stellen Sie beim Projektträger VDI/VDE Innovation + Technik."
        }
      ]
    },
    {
      kind: "places",
      title: "Einsatzgebiet.",
      text: "Unser Sitz ist in Schriesheim. Wir beraten Unternehmen in der Region und deutschlandweit.",
      places
    }
  ],
  faq: {
    title: "Häufige Fragen.",
    items: [
      {
        q: "Muss unser Unternehmen ein Energieaudit machen?",
        a: "Nach heutigem Recht ja, wenn Ihr Unternehmen kein kleines oder mittleres Unternehmen im Sinne der Empfehlung 2003/361/EG der EU-Kommission ist und kein Energie- oder Umweltmanagementsystem eingerichtet hat."
      },
      {
        q: "Wie oft ist ein Energieaudit fällig?",
        a: "Mindestens alle vier Jahre, gerechnet vom Abschluss des letzten Energieaudits."
      },
      {
        q: "Energieaudit oder Energiemanagementsystem?",
        a: "Ein Energieaudit ist eine Bestandsaufnahme, die alle vier Jahre wiederholt wird. Ein Energiemanagementsystem nach DIN EN ISO 50001 ist ein dauerhafter Prozess. Wer eines einrichtet, ist von der Auditpflicht befreit."
      },
      {
        q: "Was bestimmt die Kosten eines Energieaudits?",
        a: "Vor allem die Zahl der Standorte und Gebäude, die Zahl der Anlagen und wie vollständig die Verbrauchsdaten schon vorliegen. Im Erstgespräch klären wir, wo wir ansetzen und was es kostet."
      },
      {
        q: "Gibt es Förderung für kleinere Unternehmen?",
        a: "Bis 31.12.2026 fördert das BAFA Energieaudits und Energieberatungen für Nichtwohngebäude mit 50 % des Beratungshonorars."
      },
      {
        q: "Was unterscheidet DIN EN 16247 von DIN V 18599?",
        a: "DIN EN 16247-1 regelt Energieaudits: Sie betrachten den gesamten Energieeinsatz eines Unternehmens, mit Gebäuden, Anlagen, Abläufen und Transport. DIN V 18599 ist das Rechenverfahren für die Energiebilanz von Gebäuden. Damit bewerten wir Nichtwohngebäude und planen ihre Sanierung."
      }
    ]
  },
  close: {
    title: "Energieverbrauch prüfen lassen.",
    text: "Im Erstgespräch klären wir, ob ein Audit Pflicht ist, wo wir ansetzen und was es kostet."
  }
};

const energyEn: ServicePageContent = {
  path: "/leistungen/energieberatung",
  topic: "energie",
  crumbs: { services: "Services", page: "Energy consulting" },
  schema: {
    name: "Energy audits and energy consulting for companies",
    serviceTypes: [
      "Energy audit to DIN EN 16247-1",
      "Energy consulting for non-residential buildings to DIN V 18599",
      "Action plan with cost, savings and payback",
      "Guidance on funding programmes"
    ]
  },
  stand: "As of 17 November 2026",
  hero: {
    title: "Energy audits and energy consulting for companies.",
    lead:
      "We check how much energy businesses and non-residential buildings use and show which measure pays off first. For companies in Heidelberg, Mannheim and the Rhine-Neckar region.",
    art: {
      src: "/world/energy-after.webp",
      alt: "White model of a company with a solar roof, heat pumps and charging points. A golden ribbon runs from the roof into the hall.",
      width: 1600,
      height: 1200
    }
  },
  sections: [
    {
      kind: "prose",
      title: "Who must carry out an energy audit?",
      paragraphs: [
        "Today: every company that is not a small or medium-sized enterprise must carry out an energy audit to DIN EN 16247-1 and repeat it at least every four years. Companies that have set up, or begun to set up, an energy management system to DIN EN ISO 50001 or an environmental management system under EMAS are exempt.",
        "A government bill (Bundestag printed paper 21/8027) would redefine the duty: what would count is no longer company size but an average energy use of more than 2.77 gigawatt hours a year over the last three calendar years. The Bundestag referred the bill to committee on 24 September 2026. It has not been passed."
      ],
      stand: true
    },
    {
      kind: "ledger",
      title: "What you get.",
      items: [
        {
          title: "Energy audit to DIN EN 16247-1",
          text: "We record consumption, equipment, buildings and processes and document the audit the way the standard requires."
        },
        {
          title: "Non-residential buildings to DIN V 18599",
          text: "We assess the building envelope, heating, ventilation, cooling and lighting with the standard's calculation method."
        },
        {
          title: "Action plan with cost, savings and payback",
          text: "Every recommendation with investment, annual savings and payback period, ranked by impact."
        },
        {
          title: "Guidance on funding programmes",
          text: "We show which funding programmes may apply to your measures and what they require."
        }
      ]
    },
    {
      kind: "steps",
      title: "How an energy audit runs.",
      items: [
        {
          title: "First call",
          text: "We agree which sites, buildings and equipment the audit covers and which data already exist."
        },
        {
          title: "Data and site visit",
          text: "We collect consumption data and look at buildings, equipment and processes on site."
        },
        {
          title: "Analysis",
          text: "We evaluate consumption, find the largest users and calculate measures."
        },
        {
          title: "Report and action plan",
          text: "You receive the audit report and an action plan to decide on."
        }
      ]
    },
    {
      kind: "funding",
      title: "Funding.",
      items: [
        {
          title: "Energy consulting for non-residential buildings, equipment and systems (BAFA)",
          text: "Until 31 December 2026, BAFA funds energy audits to DIN EN 16247 with 50 % of the consulting fee, up to 3,000 euros, or up to 600 euros where annual energy costs are 10,000 euros net or less. Until then, energy consulting for non-residential buildings to DIN V 18599 is also eligible. The consulting must be done by a person on the Energieeffizienz-Expertenliste."
        },
        {
          title: "Federal funding for efficient buildings (BEG)",
          text: "For renovating non-residential buildings there is the federal funding for efficient buildings (BEG)."
        },
        {
          title: "Transformation plans (BAFA, module 5)",
          text: "Funding covers plans with which a company maps its path to greenhouse gas neutrality. Applications go to the project agency VDI/VDE Innovation + Technik."
        }
      ]
    },
    {
      kind: "places",
      title: "Where we work.",
      text: "We are based in Schriesheim. We advise companies in the region and across Germany.",
      places: ["Schriesheim", "Heidelberg", "Mannheim", "Weinheim", "Ladenburg", "Rhine-Neckar"]
    }
  ],
  faq: {
    title: "Common questions.",
    items: [
      {
        q: "Does our company have to carry out an energy audit?",
        a: "Under current law, yes, if your company is not a small or medium-sized enterprise as defined in European Commission Recommendation 2003/361/EC and has not set up an energy or environmental management system."
      },
      {
        q: "How often is an energy audit due?",
        a: "At least every four years, counted from the completion of the last energy audit."
      },
      {
        q: "Energy audit or energy management system?",
        a: "An energy audit is a stocktake that is repeated every four years. An energy management system to DIN EN ISO 50001 is an ongoing process. Companies that set one up are exempt from the audit duty."
      },
      {
        q: "What drives the cost of an energy audit?",
        a: "Mainly the number of sites and buildings, the amount of equipment and how complete the consumption data already are. In a first call we work out where to start and what it costs."
      },
      {
        q: "Is there funding for smaller companies?",
        a: "Until 31 December 2026, BAFA funds energy audits and energy consulting for non-residential buildings with 50 % of the consulting fee."
      },
      {
        q: "How does DIN EN 16247 differ from DIN V 18599?",
        a: "DIN EN 16247-1 governs energy audits: they look at a company's entire energy use, including buildings, equipment, processes and transport. DIN V 18599 is the calculation method for the energy balance of buildings. We use it to assess non-residential buildings and plan their renovation."
      }
    ]
  },
  close: {
    title: "Have your energy use checked.",
    text: "In a first call we work out whether an audit is required, where to start and what it costs."
  }
};

const africaArt = { src: "/world/africa.webp", width: 1600, height: 1200 };
const africaCountriesDe = ["Ghana", "Sambia", "Uganda", "Kenia", "Äthiopien", "Tansania"];

const africaDe: ServicePageContent = {
  path: "/leistungen/markteintritt-afrika",
  topic: "international",
  crumbs: { services: "Leistungen", page: "Markteintritt Afrika" },
  schema: {
    name: "Beratung zum Markteintritt in Afrika",
    serviceTypes: [
      "Markteintritt und Marktvalidierung",
      "Strategische Partnerschaften",
      "Projektbegleitung und Stakeholder-Koordination",
      "Interkulturelle Abstimmung"
    ]
  },
  stand: "Stand: 17.11.2026",
  hero: {
    title: "Markteintritt Afrika. Beratung mit Menschen vor Ort.",
    lead:
      "Wir beraten Unternehmen, die in afrikanischen Ländern verkaufen, einkaufen oder investieren wollen: von der Marktprüfung bis zur Umsetzung, mit eigenem Team in sechs Ländern.",
    art: {
      ...africaArt,
      alt: "Weißes Modell einer afrikanischen Hafen- und Marktstadt mit Kran, Containern und Akazien, durchzogen von gelben und grünen Bändern"
    }
  },
  sections: [
    {
      kind: "prose",
      title: "Für wen.",
      paragraphs: [
        "Für Unternehmen, die in afrikanischen Ländern verkaufen, einkaufen oder investieren wollen, und für Unternehmen, deren Projekt dort schon läuft und die Partner und Begleitung vor Ort brauchen.",
        "Wir helfen, bevor viel Geld fließt: mit Zahlen zum Markt, geprüften Partnern und einem Team, das vor Ort lebt."
      ]
    },
    {
      kind: "ledger",
      title: "Was wir für Sie tun.",
      items: [
        {
          title: "Markteintritt und Marktvalidierung",
          text: "Marktgröße, Wettbewerb, Zölle und Vorschriften. Sie entscheiden auf Basis von Fakten, nicht von Hoffnung."
        },
        {
          title: "Strategische Partnerschaften",
          text: "Wir suchen und prüfen Händler, Lieferanten und Behörden und begleiten die ersten Gespräche."
        },
        {
          title: "Projektbegleitung und Stakeholder-Koordination",
          text: "Termine, Dokumente, Beteiligte: Wir halten Ihr Projekt vor Ort zusammen."
        },
        {
          title: "Interkulturelle Abstimmung",
          text: "Wir übersetzen nicht nur Sprache, sondern Erwartungen, damit Verhandlungen auf beiden Seiten funktionieren."
        }
      ]
    },
    {
      kind: "places",
      title: "Unser Team vor Ort.",
      text: "Unsere Kolleginnen und Kollegen leben in sechs afrikanischen Ländern. Sie kennen Märkte, Regeln und Menschen.",
      places: africaCountriesDe
    },
    {
      kind: "funding",
      title: "Förderung.",
      items: [
        {
          title: "Beratungsgutscheine Afrika",
          text: "Für Anträge bis einschließlich 28.02.2027 fördert der Bund Beratung zu Ihrem Geschäftsvorhaben in Afrika mit bis zu 75\u00A0% der Beratungskosten.",
          link: { href: "/beratungsgutscheine-afrika", label: "Beratungs\u00ADgutscheine Afrika" }
        }
      ]
    },
    {
      kind: "steps",
      title: "So arbeiten wir.",
      items: [
        {
          title: "Erstgespräch",
          text: "Sie schildern Ihr Vorhaben. Wir sagen offen, ob wir passen und was ein sinnvoller erster Schritt ist."
        },
        {
          title: "Marktprüfung",
          text: "Wir sammeln Marktdaten und prüfen Annahmen, bevor Entscheidungen fallen."
        },
        {
          title: "Plan",
          text: "Sie bekommen klare Empfehlungen mit Prioritäten, Kosten und Zuständigkeiten."
        },
        {
          title: "Umsetzung vor Ort",
          text: "Wir begleiten die Umsetzung vor Ort in Afrika, bis das Ergebnis steht."
        }
      ]
    }
  ],
  faq: {
    title: "Häufige Fragen.",
    items: [
      {
        q: "In welchen Ländern sind Sie vor Ort?",
        a: "Unser Team lebt in Ghana, Sambia, Uganda, Kenia, Äthiopien und Tansania. Für andere Länder klären wir im Erstgespräch, ob und wie wir helfen können."
      },
      {
        q: "Wie prüfen Sie Geschäftspartner?",
        a: "Wir sprechen mit möglichen Partnern vor Ort, prüfen ihre Angaben und begleiten die ersten Gespräche, bevor Sie sich festlegen."
      },
      {
        q: "Was kostet die Beratung?",
        a: "Das hängt vor allem vom Land, vom Umfang der Marktprüfung und davon ab, wie viel Arbeit vor Ort nötig ist. Im Erstgespräch klären wir, wo wir ansetzen und was es kostet."
      },
      {
        q: "Begleiten Sie auch Projekte, die schon laufen?",
        a: "Ja. Wir koordinieren Beteiligte, Termine und Dokumente vor Ort, auch wenn Ihr Projekt schon begonnen hat."
      },
      {
        q: "Gibt es Förderung?",
        a: "Für Anträge bis einschließlich 28.02.2027 fördert der Bund mit den Beratungsgutscheinen Afrika Beratung zu Geschäftsvorhaben in Afrika mit bis zu 75\u00A0% der Beratungskosten. SIFK ist ein vom BAFA gelistetes Beratungsunternehmen im Rahmen der Beratungsgutscheine Afrika."
      }
    ]
  },
  close: {
    title: "Markteintritt in Afrika planen.",
    text: "Im Erstgespräch klären wir, wo wir ansetzen und was es kostet."
  }
};

const africaEn: ServicePageContent = {
  path: "/leistungen/markteintritt-afrika",
  topic: "international",
  crumbs: { services: "Services", page: "Africa market entry" },
  schema: {
    name: "Africa market entry consulting",
    serviceTypes: [
      "Market entry and validation",
      "Strategic partnerships",
      "Project support and stakeholder coordination",
      "Cross-cultural alignment"
    ]
  },
  stand: "As of 17 November 2026",
  hero: {
    title: "Africa market entry. Consulting with people on the ground.",
    lead:
      "We advise companies that want to sell, buy or invest in African countries: from market validation to delivery, with our own team in six countries.",
    art: {
      ...africaArt,
      alt: "White model of an African port and market town with a crane, containers and acacias, crossed by yellow and green ribbons"
    }
  },
  sections: [
    {
      kind: "prose",
      title: "Who it is for.",
      paragraphs: [
        "For companies that want to sell, buy or invest in African countries, and for companies whose project there is already running and who need partners and support on the ground.",
        "We help before much money is spent: with market figures, vetted partners and a team that lives on the ground."
      ]
    },
    {
      kind: "ledger",
      title: "What we do for you.",
      items: [
        {
          title: "Market entry and validation",
          text: "Market size, competition, tariffs and regulations. You decide on facts, not on hope."
        },
        {
          title: "Strategic partnerships",
          text: "We find and vet distributors, suppliers and authorities and support the first conversations."
        },
        {
          title: "Project support and stakeholder coordination",
          text: "Meetings, documents, stakeholders: we keep your project together on the ground."
        },
        {
          title: "Cross-cultural alignment",
          text: "We translate expectations, not just language, so negotiations work on both sides."
        }
      ]
    },
    {
      kind: "places",
      title: "Our team on the ground.",
      text: "Our colleagues live in six African countries. They know the markets, the rules and the people.",
      places: ["Ghana", "Zambia", "Uganda", "Kenya", "Ethiopia", "Tanzania"]
    },
    {
      kind: "funding",
      title: "Funding.",
      items: [
        {
          title: "Beratungsgutscheine Afrika (Africa consulting vouchers)",
          text: "For applications made until and including 28 February 2027, the German federal government funds consulting on your business project in Africa with up to 75\u00A0% of the consulting costs.",
          // The voucher page exists in German only. Never localize this link.
          link: { href: "/beratungsgutscheine-afrika", label: "Details (in German)", hrefLang: "de" }
        }
      ]
    },
    {
      kind: "steps",
      title: "How we work.",
      items: [
        {
          title: "First call",
          text: "You describe your project. We say openly whether we are the right fit and what a sensible first step is."
        },
        {
          title: "Market validation",
          text: "We collect market data and test assumptions before decisions are made."
        },
        {
          title: "Plan",
          text: "You get clear recommendations with priorities, costs and responsibilities."
        },
        {
          title: "Delivery on the ground",
          text: "We support delivery on the ground in Africa until the result is in place."
        }
      ]
    }
  ],
  faq: {
    title: "Common questions.",
    items: [
      {
        q: "In which countries are you on the ground?",
        a: "Our team lives in Ghana, Zambia, Uganda, Kenya, Ethiopia and Tanzania. For other countries we clarify in a first call whether and how we can help."
      },
      {
        q: "How do you vet business partners?",
        a: "We talk to potential partners on the ground, check what they tell us and support the first conversations before you commit."
      },
      {
        q: "What does the consulting cost?",
        a: "It depends mainly on the country, the scope of the market validation and how much work is needed on the ground. In a first call we work out where to start and what it costs."
      },
      {
        q: "Do you also support projects that are already running?",
        a: "Yes. We coordinate stakeholders, meetings and documents on the ground, even when your project has already started."
      },
      {
        q: "Is there funding?",
        a: "For applications made until and including 28 February 2027, the German federal government funds consulting on business projects in Africa with up to 75\u00A0% of the consulting costs through the Beratungsgutscheine Afrika. SIFK is a consulting firm listed by BAFA under the Beratungsgutscheine Afrika programme."
      }
    ]
  },
  close: {
    title: "Plan your market entry in Africa.",
    text: "In a first call we work out where to start and what it costs."
  }
};

export const servicePagesDe: ServicePages = { energy: energyDe, africa: africaDe };
export const servicePagesEn: ServicePages = { energy: energyEn, africa: africaEn };
