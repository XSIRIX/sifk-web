export type NavItem = {
  href: string;
  label: string;
};

export type Pillar = {
  id: string;
  title: string;
  shortTitle: string;
  lead: string;
  description: string;
  href: string;
  accent: string;
  services: string[];
};

export const siteMeta = {
  name: "SIFK GmbH",
  description:
    "SIFK verbindet internationale Geschäftsentwicklung mit Fokus auf Afrika mit fundierter Energieberatung für Unternehmen und Nichtwohngebäude in Deutschland."
};

export const navigation: NavItem[] = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/unser-team", label: "Unser Team" }
];

export const homeContent = {
  hero: {
    eyebrow: "Internationale Verbindungen mit strategischer Substanz",
    title: "Verbindungen schaffen, die Märkte und Projekte in Bewegung bringen.",
    text:
      "SIFK vereint internationale Geschäftsentwicklung mit Fokus auf Afrika und fundierte Energieberatung für Unternehmen in Deutschland unter einer gemeinsamen, klaren Marke.",
    primaryCta: { href: "/kontakt", label: "Erstgespräch anfragen" },
    secondaryCta: { href: "/leistungen", label: "Leistungen ansehen" }
  },
  routing: [
    {
      title: "Internationale Geschäftsentwicklung",
      description:
        "Markteintritt, Partnerschaften und Projektbegleitung mit Fokus auf afrikanische Märkte.",
      href: "/leistungen#internationale-geschaeftsentwicklung",
      badge: "Afrika-Fokus",
      accent: "atlas"
    },
    {
      title: "Energieberatung Deutschland",
      description:
        "Energieaudits, Nichtwohngebäude-Beratung und wirtschaftliche Effizienzlösungen für Unternehmen.",
      href: "/leistungen#energieberatung-deutschland",
      badge: "DIN-orientiert",
      accent: "signal"
    }
  ],
  positioning:
    "SIFK verbindet internationale Geschäftsentwicklung mit fundierter Energieberatung und schafft damit eine beratungsnahe Plattform für Märkte, Projekte und nachhaltige Entwicklung.",
  story: {
    quote:
      "Neue Märkte entstehen nicht durch Zufall, sondern durch die richtigen Verbindungen.",
    points: [
      "Afrika als Wachstumsraum mit realer wirtschaftlicher Dynamik",
      "Partnerschaften mit Substanz statt oberflächlicher Vermittlung"
    ]
  },
  trust: [
    "Strukturierte Beratung",
    "Internationale Vernetzung",
    "Wirtschaftliche und nachhaltige Lösungen",
    "Individuelle Begleitung"
  ],
  cta: {
    title: "Lassen Sie uns über Ihr Vorhaben sprechen.",
    text:
      "Ob Markterschließung oder Energieberatung: Gemeinsam klären wir den nächsten sinnvollen Schritt.",
    action: { href: "/kontakt", label: "Erstgespräch anfragen" }
  }
};

export const pillars: Pillar[] = [
  {
    id: "internationale-geschaeftsentwicklung",
    title: "Internationale Geschäftsentwicklung",
    shortTitle: "Afrika",
    lead: "Märkte verstehen, Partnerschaften aufbauen, Projekte begleiten.",
    description:
      "SIFK unterstützt Unternehmen dabei, afrikanische Märkte strukturiert zu erschließen, tragfähige Netzwerke aufzubauen und Projekte belastbar voranzubringen.",
    href: "/leistungen#internationale-geschaeftsentwicklung",
    accent: "atlas",
    services: [
      "Markteintritt und Marktvalidierung",
      "Strategische Partnerschaften",
      "Projektbegleitung und Stakeholder-Koordination"
    ]
  },
  {
    id: "energieberatung-deutschland",
    title: "Energieberatung Deutschland",
    shortTitle: "Energie",
    lead: "Energieverbrauch analysieren, Potenziale wirtschaftlich heben.",
    description:
      "Für Unternehmen und Nichtwohngebäude verbindet SIFK technische Analyse mit wirtschaftlicher Priorisierung, damit Effizienzmaßnahmen nachvollziehbar und umsetzbar werden.",
    href: "/leistungen#energieberatung-deutschland",
    accent: "signal",
    services: [
      "Energieaudit nach DIN EN 16247",
      "Beratung für Nichtwohngebäude nach DIN V 18599",
      "Effizienzmaßnahmen und Umsetzungslogik"
    ]
  }
];

export const serviceOverview = [
  {
    title: "Internationale Geschäftsentwicklung",
    items: [
      "Markteintritt",
      "Partnerschaften",
      "Projektentwicklung",
      "Internationale Vernetzung"
    ]
  },
  {
    title: "Energieberatung Deutschland",
    items: [
      "Energieaudit",
      "Nichtwohngebäude-Beratung",
      "Förderlogik",
      "Effizienzmaßnahmen",
      "Technische Optimierung"
    ]
  }
];

export const servicePageContent = {
  intro: {
    eyebrow: "Leistungen",
    title: "Zwei Leistungsfelder, eine gemeinsame Beratungslogik.",
    text:
      "SIFK arbeitet an der Schnittstelle von internationaler Entwicklung und wirtschaftlicher Effizienz. Beide Felder folgen derselben Haltung: präzise Analyse, belastbare Struktur und partnerschaftliche Umsetzung."
  },
  process: [
    {
      step: "01",
      title: "Ausgangslage klären",
      text:
        "Wir definieren Ziele, Rahmenbedingungen und Entscheidungsgrundlagen früh, damit Projekte nicht auf Annahmen aufbauen."
    },
    {
      step: "02",
      title: "Strategie strukturieren",
      text:
        "SIFK übersetzt komplexe Situationen in priorisierte Handlungsfelder, klare Rollen und belastbare nächste Schritte."
    },
    {
      step: "03",
      title: "Umsetzung begleiten",
      text:
        "Von der Kontaktanbahnung bis zur Maßnahmenlogik begleiten wir den Prozess so, dass Entscheidungen anschlussfähig bleiben."
    }
  ],
  cta: {
    title: "Lernen wir Ihr Vorhaben genauer kennen.",
    text:
      "Wir besprechen, welches Leistungsfeld für Ihre Anfrage relevant ist und wie ein sinnvoller Einstieg aussehen kann.",
    action: { href: "/kontakt", label: "Anfrage starten" }
  }
};

export const aboutPageContent = {
  intro: {
    eyebrow: "Über uns",
    title: "SIFK gestaltet Verbindung mit unternehmerischer Klarheit.",
    text:
      "Die Marke steht für das aktive Zusammenführen von Märkten, Partnern, Projekten und Energieeffizienz. Daraus entsteht ein Beratungsansatz, der wirtschaftliche Chancen und belastbare Umsetzung zusammendenkt."
  },
  principles: [
    {
      title: "Klarheit vor Lautstärke",
      text:
        "SIFK kommuniziert präzise und unaufgeregt. Vertrauen entsteht hier nicht durch Inszenierung, sondern durch Struktur und Substanz."
    },
    {
      title: "Internationale Perspektive",
      text:
        "Wir arbeiten mit einem Blick auf wirtschaftliche Zusammenhänge, lokale Realitäten und partnerschaftliche Beziehungen."
    },
    {
      title: "Wirtschaftlich belastbare Entscheidungen",
      text:
        "Ob Markterschließung oder Energieeffizienz: Empfehlungen müssen umsetzbar, nachvollziehbar und strategisch sinnvoll sein."
    }
  ],
  workingStyle: [
    "präzise Analyse statt pauschaler Beratung",
    "zielgerichtete Prozesse mit klaren nächsten Schritten",
    "Begleitung auf Augenhöhe über Fach- und Kulturgrenzen hinweg"
  ],
  cta: {
    href: "/kontakt",
    label: "Kontakt aufnehmen"
  }
};

export const contactPageContent = {
  intro: {
    eyebrow: "Kontakt",
    title: "Der einfachste Einstieg ist ein klares Anliegen.",
    text:
      "Nutzen Sie das Formular, um Ihr Vorhaben kurz zu skizzieren. Die direkte Kontaktadresse und rechtlichen Unternehmensangaben werden in der nächsten Iteration ergänzt."
  },
  options: [
    {
      title: "Markterschließung besprechen",
      text:
        "Für internationale Geschäftsentwicklung, Partnerschaften oder projektbezogene Anfragen mit Afrika-Bezug."
    },
    {
      title: "Energieberatung anfragen",
      text:
        "Für Energieaudits, Nichtwohngebäude-Beratung oder Effizienzthemen in Deutschland."
    },
    {
      title: "Allgemeine Anfrage",
      text:
        "Für übergreifende Fragen zur Marke, Kooperationen oder organisatorische Themen."
    }
  ]
};

export const teamPageContent = {
  intro: {
    eyebrow: "Unser Team",
    title: "Ein Team, das Verbindung operativ tragfähig macht.",
    text:
      "SIFK bündelt internationale Geschäftsentwicklung, Energieberatung und strukturierte Projektführung in einer gemeinsamen Arbeitsweise. So entstehen Entscheidungen, die fachlich klar und in der Umsetzung belastbar bleiben."
  },
  focus: [
    {
      title: "Internationale Geschäftsentwicklung",
      text:
        "Wir arbeiten an Markteintritt, Partnerschaften und belastbaren Beziehungen mit Afrika-Bezug. Der Fokus liegt auf realistischen Schritten, klaren Rollen und anschlussfähigen Gesprächen."
    },
    {
      title: "Energieberatung und Effizienz",
      text:
        "Technische Analyse, wirtschaftliche Priorisierung und umsetzbare Maßnahmenlogik werden zusammen gedacht, damit Effizienzthemen nicht abstrakt bleiben."
    },
    {
      title: "Projektführung und Koordination",
      text:
        "Zwischen Strategie und Umsetzung sorgt das Team für Struktur, Priorisierung und saubere Kommunikation mit allen relevanten Beteiligten."
    }
  ],
  collaboration: [
    "klare Verantwortlichkeiten statt diffuser Übergaben",
    "fachliche Tiefe mit unternehmerischem Blick",
    "kommunikative Sicherheit über kulturelle und operative Kontexte hinweg"
  ],
  cta: {
    href: "/kontakt",
    label: "Kontakt aufnehmen"
  }
};
