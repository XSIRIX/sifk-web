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
          text: "Das BAFA fördert Energieaudits nach DIN EN 16247 mit 50 % des Beratungshonorars, höchstens 3.000 Euro, bei jährlichen Energiekosten bis 10.000 Euro netto höchstens 600 Euro. Auch Energieberatungen für Nichtwohngebäude nach DIN V 18599 sind förderfähig. Die Beratung muss eine Person durchführen, die in der Energieeffizienz-Expertenliste gelistet ist. Die Förderrichtlinie endet am 31.12.2026."
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
        a: "Das BAFA fördert Energieaudits und Energieberatungen für Nichtwohngebäude mit 50 % des Beratungshonorars. Die Förderrichtlinie endet am 31.12.2026."
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
          text: "BAFA funds energy audits to DIN EN 16247 with 50 % of the consulting fee, up to 3,000 euros, or up to 600 euros where annual energy costs are 10,000 euros net or less. Energy consulting for non-residential buildings to DIN V 18599 is also eligible. The consulting must be done by a person on the Energieeffizienz-Expertenliste. The funding guideline ends on 31 December 2026."
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
        a: "BAFA funds energy audits and energy consulting for non-residential buildings with 50 % of the consulting fee. The funding guideline ends on 31 December 2026."
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

// Filled by the Africa page task. No route renders it until then.
const africaStub = (base: ServicePageContent): ServicePageContent => ({
  ...base,
  path: "/leistungen/markteintritt-afrika",
  topic: "international"
});

export const servicePagesDe: ServicePages = { energy: energyDe, africa: africaStub(energyDe) };
export const servicePagesEn: ServicePages = { energy: energyEn, africa: africaStub(energyEn) };
