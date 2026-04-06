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
    "SIFK verbindet internationale Geschäftsentwicklung mit Afrika-Fokus und fundierte Energieberatung für Unternehmen und Nichtwohngebäude in Deutschland."
};

export const navigation: NavItem[] = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/unser-team", label: "Unser Team" },
  { href: "/ueber-uns", label: "Über uns" }
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
  overview: [
    {
      title: "DIN-zertifizierte Beratung",
      text: "Energieaudit nach DIN EN 16247, Beratung nach DIN V 18599 — normkonform und praxiserprobt.",
      accent: "signal",
      href: "/leistungen#energieberatung-deutschland"
    },
    {
      title: "Eigene Teams vor Ort",
      text: "Fachkräfte in Uganda, Ghana, Kenia und Tansania — nicht nur Kontakte, sondern operative Präsenz.",
      accent: "atlas",
      href: "/unser-team"
    },
    {
      title: "Ingenieure, MBAs, GPM",
      text: "Promovierte Ingenieure, zertifizierte Projektmanager und erfahrene Finanzexperten unter einem Dach.",
      accent: "ink",
      href: "/unser-team#internationales-team"
    }
  ],
  stats: [
    { value: "30+", label: "Jahre Erfahrung" },
    { value: "6", label: "Länder" },
    { value: "9", label: "Fachkräfte" }
  ],
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

export const cloodyBadge = {
  kicker: "Handelsplattform Afrika",
  tagline: "Pay less than you guess.",
  href: "/cloody"
};

export const cloodyPromo = {
  eyebrow: "Projekt Cloody",
  title: "Der afrikanische Marktplatz entsteht.",
  text: "Cloody verbindet Europa und Afrika über eine community-basierte Handelsplattform — mit integrierter Zollabwicklung und dem Prinzip: Pay less than you guess.",
  tagline: "Pay less than you guess.",
  action: { href: "/cloody", label: "Mehr erfahren" },
  highlights: [
    "Direkter Handel ohne Mittelsmänner",
    "Integrierte Zollabwicklung",
    "Community-basierte Logistik"
  ]
};

export const cloodyPageContent = {
  intro: {
    eyebrow: "Projekt Cloody",
    title: "Der afrikanische Marktplatz, der Handel neu denkt.",
    text: "Cloody ist eine community-basierte Handelsplattform, die direkten Handel mit Afrika ermöglicht. Für Privatpersonen und Unternehmen. Mit integrierter Zollabwicklung. Unter dem Prinzip: Pay less than you guess.",
    stats: [
      { value: "54", label: "Afrikanische Länder" },
      { value: "1,4 Mrd.", label: "Menschen auf dem Kontinent" },
      { value: "∞", label: "Möglichkeiten" }
    ]
  },
  vision: {
    eyebrow: "Vision",
    title: "Handel mit Afrika, zugänglich für alle.",
    text: "Cloody macht den Zugang zu afrikanischen Märkten so einfach wie einen Online-Einkauf. Die Plattform verbindet Anbieter und Käufer direkt, reduziert Zwischenstufen und schafft Transparenz, die Vertrauen aufbaut.",
    points: [
      { title: "Direkt", text: "Handel ohne unnötige Mittelsmänner" },
      { title: "Integriert", text: "Zollabwicklung über die Plattform" },
      { title: "Offen", text: "Marktplatz für Privatpersonen und Unternehmen" },
      { title: "Transparent", text: "Preistransparenz als Kernprinzip" }
    ]
  },
  concept: {
    eyebrow: "Konzept",
    title: "Pay less than you guess.",
    text: "Cloody setzt auf ein Preismodell, das Erwartungen unterbietet. Durch Bündelung, Community-Logistik und direkte Beschaffungswege entstehen Preisvorteile, die an die Nutzer weitergegeben werden.",
    pillars: [
      { label: "Bündelung", text: "Gemeinsam günstiger einkaufen" },
      { label: "Community-Logistik", text: "Geteilte Versandwege, geteilte Kosten" },
      { label: "Direktbeschaffung", text: "Keine Zwischenhändler, keine Aufschläge" }
    ]
  },
  howItWorks: {
    eyebrow: "So funktioniert es",
    title: "Drei Schritte zum Handel mit Afrika.",
    steps: [
      {
        step: "01",
        title: "Angebot entdecken",
        text: "Durchsuchen Sie den Marktplatz nach Produkten und Dienstleistungen aus afrikanischen Märkten, oder stellen Sie selbst ein Angebot ein."
      },
      {
        step: "02",
        title: "Zoll und Logistik",
        text: "Die Plattform übernimmt die gesamte Zollabwicklung und koordiniert den Versand, damit der Handel reibungslos abläuft."
      },
      {
        step: "03",
        title: "Direkt handeln",
        text: "Kaufen oder verkaufen Sie direkt, transparent und zu Konditionen, die beide Seiten stärken."
      }
    ]
  },
  audience: {
    eyebrow: "Zielgruppe",
    title: "Für alle, die mit Afrika handeln wollen.",
    groups: [
      {
        title: "Privatpersonen",
        icon: "discover",
        text: "Zugang zu einzigartigen Produkten aus afrikanischen Märkten, ohne Komplexität bei Zoll und Versand."
      },
      {
        title: "Unternehmen",
        icon: "scale",
        text: "Direkte Beschaffungswege und neue Absatzmärkte, unterstützt durch eine belastbare Plattformstruktur."
      },
      {
        title: "Afrikanische Anbieter",
        icon: "globe",
        text: "Ein internationaler Vertriebskanal, der den Zugang zu europäischen Käufern vereinfacht und professionalisiert."
      }
    ]
  },
  cta: {
    eyebrow: "Interesse",
    title: "Cloody entsteht.",
    subtitle: "Sprechen Sie mit uns.",
    text: "Das Projekt befindet sich in der Entwicklung. Wenn Sie als Partner, Anbieter oder Early Adopter dabei sein wollen, starten wir das Gespräch.",
    action: { href: "/kontakt", label: "Kontakt aufnehmen" }
  }
};

export const teamPageContent = {
  intro: {
    eyebrow: "Unser Team",
    title: "Ein Team, das Verbindung operativ tragfähig macht.",
    text:
      "SIFK bündelt internationale Geschäftsentwicklung, Energieberatung und strukturierte Projektführung in einer gemeinsamen Arbeitsweise. So entstehen Entscheidungen, die fachlich klar und in der Umsetzung belastbar bleiben."
  },
  sectionLeadership: {
    eyebrow: "Geschäftsleitung & Beratung",
    title: "Erfahrung, die Richtung gibt."
  },
  coreTeam: [
    {
      name: "Rainer Bardtke",
      initials: "RB",
      role: "Unternehmensberatung Bereich Energie",
      accent: "signal",
      flags: ["🇩🇪"],
      languages: "DE (Muttersprache), EN C2, FR B1, ES A1",
      text:
        "Über 30 Jahre Erfahrung in der Energiebranche. Verbindet technische Analyse mit wirtschaftlicher Priorisierung für nachhaltige Effizienzlösungen.",
      areas: ["Energieaudit", "Nichtwohngebäude-Beratung", "Wirtschaftliche Effizienz"]
    },
    {
      name: "Pheeraphon Karch",
      initials: "PK",
      role: "Geschäftsleitung",
      accent: "atlas",
      flags: ["🇩🇪"],
      languages: "DE (Muttersprache), EN C2",
      text:
        "Leitet SIFK seit November 2022. Verbindet internationale Perspektive mit unternehmerischer Klarheit und strukturierter Projektführung.",
      areas: ["Geschäftsführung", "Projektstruktur", "Internationale Koordination"]
    }
  ],
  sectionInternational: {
    eyebrow: "Unser internationales Team",
    title: "SIFK-Mitarbeiter weltweit."
  },
  intlTeam: [
    {
      name: "Panu Mankit",
      initials: "PM",
      role: "Assistent der Geschäftsleitung",
      flags: ["🇩🇪", "🇱🇦"],
      qualification: "DE & Laotisch (Muttersprache), EN C2",
      text: "Unterstützt die Geschäftsführung bei Projektorganisation, Korrespondenz und CRM-Verwaltung. Zuvor stellvertretender Vertriebsleiter bei NRG GmbH und Co-Founder in Thailand."
    },
    {
      name: "Tom Twimukire",
      initials: "TT",
      role: "Director Business Development",
      flags: ["🇺🇬"],
      qualification: "MBA, B.Com (Hons)",
      org: "Tocom Ltd",
      text: "Gründer und Geschäftsführer von Tocom Ltd. Über 10 Jahre Erfahrung in Markenstrategie, Go-to-Market-Planung und digitalem Marketing in ostafrikanischen Wachstumsmärkten."
    },
    {
      name: "Dr. Kobla Xoese Nanewortor",
      initials: "KN",
      role: "Projektleitung Technisches Engineering",
      flags: ["🇬🇭"],
      qualification: "Dr.-Ing. Elektrotechnik",
      org: "TenneT TSO GmbH",
      text: "Promovierter Ingenieur mit Schwerpunkt Hochspannungstechnik und Energieverteilung. Erfahrung in Netzplanung, EEG-Anlagenprüfung und Zertifizierung bei E.ON, TÜV NORD und Siemens."
    },
    {
      name: "Muwanga K. James",
      initials: "MJ",
      role: "Director, Accounting & Business",
      flags: ["🇺🇬"],
      qualification: "B.Comm Business Studies (Accounting)",
      text: "Erfahrener Finanzexperte mit Hintergrund in interner Revision, Buchhaltung und strategischer Unternehmensberatung. Leitet mehrere Unternehmen in Uganda."
    },
    {
      name: "John Damulira",
      initials: "JD",
      role: "Operations Manager",
      flags: ["🇺🇬"],
      qualification: "B.Comm, Makerere University",
      text: "Operations Manager mit Erfahrung im Bau- und Immobiliensektor sowie im internationalen Kreditmanagement bei G4S Uganda und Spedag Interfreight."
    },
    {
      name: "Celestine Wafula",
      initials: "CW",
      role: "Sales Executive",
      flags: ["🇰🇪"],
      qualification: "BSc Pharmaceutical Technology",
      text: "9 Jahre Vertriebserfahrung in Ostafrika, der Türkei, Ägypten und Thailand. Spezialisiert auf strategische Vertriebsplanung, Kundenbeziehungen und datengetriebene Marktanalyse."
    },
    {
      name: "Albert Guido Moshi",
      initials: "AM",
      role: "Logistik & Umweltmanagement",
      flags: ["🇹🇿"],
      qualification: "MSc, Zertifizierter Projektmanager (GPM)",
      text: "MSc in Umwelt- und Ressourcenmanagement mit Erfahrung in Disposition, Fuhrparkmanagement und internationalem Versand. Engagiert in der deutsch-tansanischen Bildungsarbeit."
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
