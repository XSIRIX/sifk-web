import { voucherDe, type VoucherContent } from "@/lib/content-voucher";
import type { Locale } from "@/lib/locale-routing";

export type CountryCode = "de" | "zm" | "et" | "ug" | "gh" | "ke" | "tz";

export type TeamMember = {
  name: string;
  role: string;
  countries: CountryCode[];
  location: string;
  text: string;
  languages?: string;
  qualification?: string;
  org?: string;
  areas?: string[];
};

export type ServiceItem = { title: string; text: string };

export type ServiceField = {
  id: string;
  label: string;
  title: string;
  lead: string;
  text: string;
  services: ServiceItem[];
};

type Link = { href: string; label: string };

const de = {
  meta: {
    name: "SIFK GmbH",
    description:
      "SIFK begleitet Unternehmen beim Markteintritt in Afrika und berät Unternehmen und Nichtwohngebäude in Deutschland zur Energieeffizienz."
  },
  common: {
    inDevelopment: "In Entwicklung",
    firstCall: { href: "/kontakt", label: "Erstgespräch anfragen" } as Link,
    contact: { href: "/kontakt", label: "Kontakt aufnehmen" } as Link,
    phone: "Telefon",
    email: "E-Mail",
    address: "Adresse",
    pauseVideo: "Video anhalten",
    playVideo: "Video abspielen",
    pauseLogos: "Logo-Laufband anhalten",
    playLogos: "Logo-Laufband abspielen"
  },
  countries: {
    de: "Deutschland",
    zm: "Sambia",
    et: "Äthiopien",
    ug: "Uganda",
    gh: "Ghana",
    ke: "Kenia",
    tz: "Tansania"
  } as Record<CountryCode, string>,
  places: {
    title: "Sieben Länder. Ein Netz.",
    text: "Von Schriesheim bis Sambia: Diese Menschen betreuen Ihr Projekt vor Ort.",
    hq: "Sitz Schriesheim",
    person: "Fachperson vor Ort",
    people: "Fachleute vor Ort",
    alt: {
      de: "Weißes Modell der Bergstraße bei Schriesheim: Burgruine über Weinbergen",
      gh: "Weißes Modell einer Kakaofarm in Ghana: Kakaobäume mit Früchten, ein Trockentisch und ein kleines Haus",
      zm: "Weißes Modell der Victoriafälle in Sambia mit der Bogenbrücke über der Schlucht",
      ug: "Weißes Modell von Kampala: Häuser auf runden Hügeln, davor ein Kronenkranich",
      ke: "Weißes Modell von Nairobi: zwei Giraffen und eine Akazie vor den Türmen der Stadt",
      et: "Weißes Modell des äthiopischen Kaffeehochlands: Terrassen mit Kaffeesträuchern, davor eine Kaffeekanne",
      tz: "Weißes Modell der Savanne in Tansania: Elefanten und Akazien vor dem Kilimandscharo"
    } as Record<CountryCode, string>
  },
  map: {
    label:
      "Netzwerk-Karte: Sitz in Schriesheim mit fünf Fachleuten, verbunden mit Fachleuten in Ghana, Sambia, Uganda, Kenia, Äthiopien und Tansania.",
    hq: "Sitz Schriesheim",
    person: "Fachperson",
    people: "Fachleute"
  },
  home: {
    hero: {
      title: ["Wachstum in Afrika.", "Effizienz in Deutschland."],
      text:
        "SIFK begleitet Unternehmen beim Markteintritt in afrikanischen Ländern und senkt den Energieverbrauch von Betrieben und Gebäuden in Deutschland.",
      actions: [
        { href: "/leistungen#internationale-geschaeftsentwicklung", label: "Markteintritt Afrika" },
        { href: "/leistungen#energieberatung-deutschland", label: "Energieberatung" }
      ] as Link[],
      proof: [
        { value: "15", label: "Fachleute im Team" },
        { value: "7", label: "Länder" }
      ],
      switchLabel: "Geschäftsfeld wählen",
      places: {
        africa: {
          place: "Afrika",
          field: "Markteintritt",
          caption: "Kapstadt, Tafelberg",
          alt: "Der Tafelberg über Kapstadt, davor goldene Savanne im Abendlicht",
          sceneAlt:
            "Weißes Architekturmodell: links ein deutscher Betrieb mit Solardach unter einer Burgruine, rechts Tafelberg, Akazien und ein Hafen. Bänder in Schwarz, Rot, Gold und Grün verweben sich dazwischen."
        },
        germany: {
          place: "Deutschland",
          field: "Energieberatung",
          caption: "Frankfurt am Main",
          alt: "Die Skyline von Frankfurt am Main bei Sonnenuntergang über dem Fluss"
        }
      },
      pauseScene: "Bildbewegung anhalten",
      playScene: "Bildbewegung fortsetzen"
    },
    index: {
      label: "Kapitel dieser Seite",
      items: [
        { href: "#afrika", label: "Afrika", text: "Markteintritt" },
        { href: "#energie", label: "Energie", text: "Beratung in Deutschland" },
        { href: "#team", label: "Team", text: "15 Menschen, 7 Länder" },
        { href: "#cloody", label: "Cloody", text: "Handelsplattform" },
        { href: "#kontakt", label: "Kontakt", text: "Erstgespräch" }
      ]
    },
    intro: {
      title: "Eine Beratung.\nZwei Felder.",
      lead: "SIFK ist eine Beratung aus Schriesheim bei Heidelberg.",
      africaClaim: "Wir öffnen Märkte in Afrika.",
      germanyClaim: "Wir sparen Energie in Deutschland.",
      note: "15 Fachleute in 7 Ländern. Kunden und Partner in ganz Deutschland und Afrika.",
      germany: "Deutschland",
      africa: "Afrika",
      germanyAlt: "Weißes Modell der Bergstraße: Burgruine über Weinbergen, ein Band in Schwarz, Rot und Gold führt den Hang hinauf",
      africaAlt: "Weißes Modell der Savanne in Tansania: Elefanten und Akazien vor dem Kilimandscharo, ein grünes Band führt zum Berg"
    },
    figure: {
      claim: "Ein Team in sieben Ländern.",
      unit: "Fachleute",
      size: 15,
      more: "Weitere Mitarbeitende"
    },
    weave: {
      link: { href: "/ueber-uns", label: "Über SIFK" } as Link,
      germany: "Waagerecht: Deutschland",
      africa: "Senkrecht: Afrika",
      markAlt: "Das SIFK-Zeichen: der afrikanische Kontinent, gewebt aus waagerechten und senkrechten Bändern"
    },
    closeWord: "Kontakt",
    references: {
      title: "Kunden und Partner, die mit uns arbeiten.",
      ariaLabel: "Logos von Kunden und Partnern"
    },
    africa: {
      title: "Markteintritt in Afrika, mit Menschen vor Ort.",
      text:
        "Wir prüfen Ihren Zielmarkt, finden belastbare Partner und begleiten Ihr Projekt bis zur Umsetzung. Unser Team lebt in Uganda, Kenia, Tansania, Ghana, Äthiopien und Sambia, nicht in einer Datenbank.",
      services: [
        {
          title: "Markteintritt und Marktvalidierung",
          text: "Lohnt sich der Markt? Wir liefern Zahlen, Wettbewerb und Regeln, bevor Sie investieren."
        },
        {
          title: "Strategische Partnerschaften",
          text: "Wir finden Händler, Lieferanten und Behörden, die zu Ihnen passen, und führen die ersten Gespräche."
        },
        {
          title: "Projektbegleitung vor Ort",
          text: "Wir koordinieren Beteiligte, Termine und Dokumente, damit Ihr Projekt nicht an der Entfernung scheitert."
        }
      ] as ServiceItem[],
      link: { href: "/leistungen#internationale-geschaeftsentwicklung", label: "Leistungen Afrika im Detail" } as Link,
      imageAlt: "Weißes Modell einer afrikanischen Hafen- und Marktstadt mit Kran, Containern und Akazien, durchzogen von gelben und grünen Bändern"
    },
    statement: {
      label: "Deutschland und Afrika, verbunden durch ein Team in Ghana, Sambia, Uganda, Kenia, Äthiopien und Tansania"
    },
    bridge: {
      statement: "Wir schlagen die Brücke von Deutschland nach Afrika.",
      from: "Deutschland",
      to: "Afrika",
      startCaption: "Frankfurt am Main",
      endCaption: "Kapstadt, Tafelberg",
      canvasLabel:
        "Film beim Scrollen: Die Skyline von Frankfurt am Main geht über in die Savanne vor dem Tafelberg in Kapstadt."
    },
    energy: {
      title: "Energie sparen. Mit Zahlen statt Bauchgefühl.",
      text:
        "Wir messen, wo Ihr Betrieb oder Gebäude Energie verliert, und rechnen jede Maßnahme durch: Investition, Einsparung, Amortisation. Normgerecht nach DIN EN 16247 und DIN V 18599.",
      deliverables: [
        "Energieaudit nach DIN EN 16247",
        "Beratung für Nichtwohngebäude nach DIN V 18599",
        "Maßnahmenplan mit Kosten, Einsparung und Amortisation",
        "Hinweise zu passenden Förderprogrammen"
      ],
      link: { href: "/leistungen#energieberatung-deutschland", label: "Leistungen Energie im Detail" } as Link,
      imageAlt: "Weißes Modell eines Betriebs mit Solardach, Wärmepumpen und Ladepunkten"
    },
    people: {
      title: "15 Menschen. 7 Länder. Ein Team.",
      text:
        "Ingenieure, Energieauditoren, Ökonominnen und Projektmanager. Sie sprechen direkt mit der Person, die Ihr Projekt betreut.",
      link: { href: "/unser-team", label: "Team kennenlernen" } as Link
    },
    cloody: {
      title: "Cloody: direkter Handel mit Afrika.",
      text:
        "Unsere Handelsplattform soll Käufer in Europa direkt mit Anbietern in Afrika verbinden, mit Zollabwicklung und gemeinsamer Logistik. Wir suchen Partner, Anbieter und erste Nutzer.",
      link: { href: "/cloody", label: "Mehr über Cloody" } as Link
    },
    close: {
      title: "Erzählen Sie uns von Ihrem Vorhaben.",
      text: "Wir sagen Ihnen ehrlich, ob und wie wir helfen können."
    }
  },
  energyScene: {
    before: "Heute",
    after: "Nach der Beratung",
    beforeTitle: "Wo verliert Ihr Betrieb Energie?",
    beforeText: "Wir erfassen Verbräuche, Anlagen und Gebäudehülle vollständig, nach DIN EN 16247 und DIN V 18599.",
    afterTitle: "Jede Maßnahme durchgerechnet.",
    afterText: "Sie bekommen einen Plan mit Investition, Einsparung und Amortisation, sortiert nach Wirkung.",
    hotspots: [
      { id: "pv", label: "Photovoltaik auf dem Hallendach" },
      { id: "heat", label: "Wärmepumpe statt Gaskessel" },
      { id: "charge", label: "Ladepunkte für die Flotte" }
    ],
    beforeAlt: "Weißes Modell eines Betriebs mit Halle und Büro. Rote Bänder strömen aus Dach, Tor und Fenstern: Hier geht Energie verloren.",
    afterAlt: "Derselbe Betrieb mit Solardach, Wärmepumpen und Ladepunkten. Ein goldenes Band führt vom Dach in die Halle."
  },
  services: {
    intro: {
      title: "Leistungen in Afrika und Deutschland.",
      text:
        "Zwei Geschäftsfelder, ein Anspruch: Wir klären die Lage, rechnen ehrlich und bleiben bis zur Umsetzung an Bord."
    },
    fields: [
      {
        id: "internationale-geschaeftsentwicklung",
        label: "Afrika",
        title: "Internationale Geschäfts\u00ADentwicklung",
        lead: "Märkte prüfen, Partner finden, Projekte vor Ort begleiten.",
        text:
          "Für Unternehmen, die in afrikanischen Ländern verkaufen, einkaufen oder investieren wollen. Wir arbeiten mit eigenem Team in sechs Ländern und kennen Märkte, Regeln und Menschen.",
        services: [
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
        id: "energieberatung-deutschland",
        label: "Energie",
        title: "Energie\u00ADberatung Deutschland",
        lead: "Verbrauch messen, Maßnahmen rechnen, Kosten senken.",
        text:
          "Für Unternehmen und Nichtwohngebäude in Deutschland. Wir verbinden technische Analyse mit wirtschaftlicher Priorisierung, damit Sie wissen, welche Maßnahme sich zuerst lohnt.",
        services: [
          {
            title: "Energieaudit nach DIN EN 16247",
            text: "Wir erfassen Verbräuche, Anlagen und Prozesse vollständig und dokumentieren normgerecht."
          },
          {
            title: "Nichtwohngebäude nach DIN V 18599",
            text: "Bewertung von Gebäudehülle, Heizung, Lüftung, Kühlung und Beleuchtung nach Norm."
          },
          {
            title: "Maßnahmenplan mit Kosten, Einsparung und Amortisation",
            text: "Jede Empfehlung mit Investition, jährlicher Einsparung und Amortisationszeit, sortiert nach Wirkung."
          },
          {
            title: "Hinweise zu Förderprogrammen",
            text: "Wir zeigen, welche Förderprogramme für Ihre Maßnahmen in Frage kommen."
          }
        ]
      }
    ] as ServiceField[],
    process: {
      title: "Vom Erstgespräch bis zur Umsetzung.",
      steps: [
        {
          title: "Erstgespräch",
          text: "Sie schildern Ihr Vorhaben. Wir sagen offen, ob wir passen und was ein sinnvoller erster Schritt ist."
        },
        {
          title: "Analyse",
          text: "Wir sammeln Marktdaten oder Messwerte und prüfen Annahmen, bevor Entscheidungen fallen."
        },
        {
          title: "Plan",
          text: "Sie bekommen klare Empfehlungen mit Prioritäten, Kosten und Zuständigkeiten."
        },
        {
          title: "Umsetzung",
          text: "Wir begleiten die Umsetzung, in Deutschland oder vor Ort in Afrika, bis das Ergebnis steht."
        }
      ]
    },
    close: {
      title: "Welches Feld passt zu Ihrem Vorhaben?",
      text: "Im Erstgespräch klären wir, wo wir ansetzen und was es kostet."
    }
  },
  about: {
    intro: {
      title: "Wir verbinden Deutschland und Afrika.",
      text:
        "Wir bringen deutsche Unternehmen nach Afrika und helfen, in Deutschland Energie zu sparen. SIFK ist eine Beratung aus Schriesheim bei Heidelberg. Zwei Felder, die auf den ersten Blick wenig gemeinsam haben und doch dieselbe Arbeitsweise brauchen: genau hinsehen, ehrlich rechnen, verlässlich umsetzen."
    },
    mark: {
      title: "Unser Zeichen ist ein Gewebe.",
      text:
        "Die waagerechten Fäden stehen für Deutschland, die senkrechten für Afrika. Wo sie sich kreuzen, entsteht etwas, das hält. So verstehen wir unsere Arbeit.",
      imageAlt: "Das SIFK-Zeichen als Skulptur: der afrikanische Kontinent aus gewebten, farbigen Bändern"
    },
    principlesTitle: "Drei Dinge, an die wir uns halten.",
    principles: [
      {
        title: "Klartext statt Folien",
        text: "Wir sagen, was wir sehen, auch wenn es unbequem ist. Eine ehrliche Absage ist mehr wert als ein schöner Plan, der nicht trägt."
      },
      {
        title: "Vor Ort statt aus der Ferne",
        text: "Unsere Fachleute leben in den Märkten, die wir beraten. Und in Deutschland stehen wir selbst im Technikraum."
      },
      {
        title: "Rechnen statt versprechen",
        text: "Ob Markteintritt oder Effizienzmaßnahme: Jede Empfehlung kommt mit Zahlen, die Sie nachprüfen können."
      }
    ],
    facts: {
      title: "SIFK in Kürze",
      items: [
        { label: "Sitz", value: "Schriesheim, Baden-Württemberg" },
        { label: "Geschäftsführung", value: "Pheeraphon Karch, seit 2022" },
        { label: "Team", value: "15 Fachleute in 7 Ländern" },
        { label: "Register", value: "Amtsgericht Mannheim, HRB 750493" }
      ]
    },
    working: {
      title: "Wie wir arbeiten",
      items: [
        "Eine feste Ansprechperson für Ihr Projekt",
        "Klare nächste Schritte nach jedem Termin",
        "Zusammenarbeit auf Augenhöhe, über Fach- und Kulturgrenzen hinweg"
      ]
    },
    close: {
      title: "Erzählen Sie uns von Ihrem Vorhaben.",
      text: "Wir sagen Ihnen ehrlich, ob wir passen."
    }
  },
  team: {
    intro: {
      title: "15 Menschen. 7 Länder.\nEin Team.",
      photoAlt: "Fünf Menschen arbeiten gemeinsam an einem Tisch mit Laptops und Unterlagen (Symbolbild)",
      text:
        "In Schriesheim sitzen Geschäftsführung, Energieberatung und Vertrieb. In sechs afrikanischen Ländern arbeiten Fachleute, die ihre Märkte von innen kennen."
    },
    leadership: {
      title: "Geschäftsführung und Leitung Energie",
      members: [
        {
          name: "Pheeraphon Karch",
          role: "Geschäftsführung",
          countries: ["de"],
          location: "Deutschland",
          languages: "Deutsch, Englisch (C2)",
          text:
            "Führt SIFK seit November 2022. Verbindet Unternehmensstrategie, operative Steuerung und internationale Kommunikation mit klarer Kundenorientierung.",
          areas: ["Unternehmensstrategie", "Operative Führung", "Internationale Kundenkommunikation"]
        },
        {
          name: "Adrian Müller",
          role: "Leitung Bereich Energie",
          countries: ["de"],
          location: "Deutschland",
          languages: "Deutsch (Muttersprache), Englisch fließend, Französisch Grundkenntnisse",
          text:
            "Leitender Energieauditor mit Schwerpunkt Nichtwohngebäude, Anlagen und Systeme nach DIN EN 16247 und DIN V 18599. Bringt Maschinenbau und angewandte Informatik zusammen.",
          areas: ["Energieaudits nach DIN EN 16247-1", "Nichtwohngebäude und Systeme", "Technische Effizienzbewertung"]
        }
      ] as TeamMember[]
    },
    africaDesk: {
      title: "Bereich Afrika",
      text: "Markterschließung, Partnerschaften und Projektsteuerung für afrikanische Märkte.",
      members: [
        {
          name: "Patience Bauer",
          role: "Environmental & Resource Management Specialist",
          countries: ["ug", "de"],
          location: "Uganda und Deutschland",
          text:
            "Über 15 Jahre Erfahrung zwischen deutschen Betriebsstandards und afrikanischen Märkten. Spezialisiert auf Marktzugang im Korridor Uganda–Deutschland, operative Skalierung und interkulturelle Koordination."
        },
        {
          name: "Christian Brecht",
          role: "Vertriebsleiter",
          countries: ["de"],
          location: "Deutschland",
          text:
            "Über 30 Jahre Erfahrung in Kundenbetreuung, Akquise und der Erstellung belastbarer Marktanalysen."
        },
        {
          name: "Haulie Tembo-Schäfer",
          role: "Business Development Specialist",
          countries: ["zm"],
          location: "Sambia",
          text:
            "11 Jahre Vertriebserfahrung in Westafrika mit Schwerpunkt auf Geschäftsprozessen, Marktverständnis und Kennzahlen. Arbeitet lösungsorientiert und mit Blick auf das Umsetzbare."
        },
        {
          name: "Panu Mankit",
          role: "Executive Operations Specialist",
          countries: ["de"],
          location: "Deutschland",
          text:
            "Hält Projekte organisatorisch zusammen: Korrespondenz, Datenpflege und Abläufe. Erfahrung aus Vertriebssteuerung, CRM und Geschäftsleitungsassistenz."
        }
      ] as TeamMember[]
    },
    onSite: {
      title: "Vor Ort in Afrika",
      text: "Fachleute in Äthiopien, Uganda, Ghana, Kenia und Tansania, mit eigenen Netzwerken in ihren Märkten.",
      members: [
        {
          name: "Tom Twimukire",
          role: "Director Business Development",
          countries: ["ug"],
          location: "Uganda",
          qualification: "MBA, B.Com (Hons)",
          org: "Tocom Ltd",
          text:
            "Gründer und Geschäftsführer von Tocom Ltd. Über 10 Jahre Erfahrung in Markenstrategie, Go-to-Market-Planung und digitalem Marketing in ostafrikanischen Wachstumsmärkten."
        },
        {
          name: "Dr. Kobla Xoese Nanewortor",
          role: "Projektleitung Technisches Engineering",
          countries: ["gh"],
          location: "Ghana",
          qualification: "Dr.-Ing. Elektrotechnik",
          org: "TenneT TSO GmbH",
          text:
            "Promovierter Ingenieur für Hochspannungstechnik, Netzplanung und die Zertifizierung dezentraler Stromerzeuger. Erfahrung bei TenneT, E.ON, TÜV NORD und Siemens."
        },
        {
          name: "Mahlet Asfha Woldegiorgis",
          role: "Team Afrika, Äthiopien",
          countries: ["et"],
          location: "Äthiopien",
          qualification: "Pharmazie; Deutsch, Englisch, Amharisch",
          text:
            "Pharmazeutischer Hintergrund mit Berufserfahrung in Addis Abeba. Unterstützt die Abstimmung in deutsch-äthiopischen Projekten."
        },
        {
          name: "Muwanga K. James",
          role: "Director, Accounting & Business",
          countries: ["ug"],
          location: "Uganda",
          qualification: "B.Comm Business Studies (Accounting)",
          text:
            "Finanz- und Unternehmensberater mit Schwerpunkt Rechnungswesen, interne Revision und Unternehmensführung. Leitet mehrere Unternehmen in Uganda."
        },
        {
          name: "John Damulira",
          role: "Operations Manager",
          countries: ["ug"],
          location: "Uganda",
          qualification: "B.Comm, Makerere University",
          text:
            "Erfahrung im Bau- und Immobiliensektor sowie im Kreditmanagement und in der Kundensteuerung bei G4S Uganda."
        },
        {
          name: "Celestine Wafula",
          role: "Sales Executive",
          countries: ["ke"],
          location: "Kenia",
          qualification: "BSc Pharmaceutical Technology; Business Management & Digital Marketing",
          text:
            "9 Jahre Vertrieb und Marketing in Ostafrika, der Türkei, Ägypten und Thailand. Spezialisiert auf Vertriebsplanung, Kundenbeziehungen und Marktauswertung."
        },
        {
          name: "Albert Guido Moshi",
          role: "Logistik und Umweltmanagement",
          countries: ["tz"],
          location: "Tansania",
          qualification: "MSc Umwelt- und Ressourcenmanagement; Projektmanager (GPM)",
          text:
            "Erfahrung in Disposition, Fuhrparkmanagement, internationalem Versand und Bahnlogistik. Engagiert in der deutsch-tansanischen Bildungsarbeit."
        }
      ] as TeamMember[]
    },
    more: {
      title: "Und viele mehr.",
      text: "Neben den Menschen oben arbeiten weitere Mitarbeitende für SIFK, im Büro in Schriesheim und in Projekten vor Ort. Dazu kommt ein Netzwerk aus Fachleuten, das wir je nach Auftrag dazuholen."
    },
    emailTo: "E-Mail an",
    close: {
      title: "Direkt zur richtigen Person.",
      text: "Jede Person im Team ist per E-Mail erreichbar. Oder Sie schreiben uns, und wir stellen den Kontakt her."
    }
  },
  contact: {
    intro: {
      title: "Schreiben Sie uns.",
      text:
        "Beschreiben Sie kurz, worum es geht. Wir melden uns persönlich, mit einer ehrlichen Einschätzung und einem Vorschlag für den nächsten Schritt."
    },
    formTitle: "Kontaktformular",
    direct: "Lieber direkt?"
  },
  cloody: {
    imageAlt: "Weißes Modell eines Containerschiffs, beladen mit Containern in Schwarz, Rot, Gold und Grün",
    intro: {
      title: "Cloody: direkter Handel mit Afrika.",
      text:
        "Cloody soll Käufer in Europa direkt mit Anbietern in Afrika verbinden, für Privatpersonen und Unternehmen. Die Plattform soll die Zollabwicklung übernehmen und Sendungen bündeln, damit Handel einfacher und günstiger wird.",
      statement: ["Afrika hat 54 Länder", "und 1,4 Milliarden Menschen.", "Cloody soll den Handel", "mit ihnen einfach machen."]
    },
    vision: {
      title: "So einfach wie ein Online-Einkauf.",
      text:
        "Heute scheitern viele Geschäfte an Zwischenhändlern, Zollformularen und teurem Einzelversand. Cloody soll diese Hürden aus dem Weg räumen.",
      points: [
        { title: "Direkt", text: "Handel ohne unnötige Zwischenhändler" },
        { title: "Integriert", text: "Zollabwicklung über die Plattform" },
        { title: "Offen", text: "Für Privatpersonen und Unternehmen" },
        { title: "Transparent", text: "Klare Preise ohne versteckte Aufschläge" }
      ]
    },
    concept: {
      title: "Pay less than you guess.",
      text:
        "Wer bündelt, spart. Cloody soll Bestellungen und Versandwege zusammenfassen und die Preisvorteile an die Nutzer weitergeben.",
      pillars: [
        { title: "Bündelung", text: "Gemeinsam günstiger einkaufen" },
        { title: "Gemeinsame Logistik", text: "Geteilte Versandwege, geteilte Kosten" },
        { title: "Direkter Einkauf", text: "Keine Zwischenhändler, keine Aufschläge" }
      ]
    },
    how: {
      title: "So soll Cloody funktionieren.",
      steps: [
        {
          title: "Angebot finden",
          text: "Produkte und Dienstleistungen aus afrikanischen Märkten entdecken oder selbst ein Angebot einstellen."
        },
        {
          title: "Zoll und Versand",
          text: "Die Plattform übernimmt die Zollabwicklung und koordiniert den Versand."
        },
        {
          title: "Direkt handeln",
          text: "Kaufen oder verkaufen, direkt und zu Konditionen, die beide Seiten stärken."
        }
      ]
    },
    audience: {
      title: "Für wen Cloody gedacht ist.",
      groups: [
        {
          title: "Privatpersonen",
          text: "Zugang zu Produkten aus afrikanischen Märkten, ohne Aufwand bei Zoll und Versand."
        },
        {
          title: "Unternehmen",
          text: "Direkte Beschaffungswege und neue Absatzmärkte auf einer verlässlichen Plattform."
        },
        {
          title: "Afrikanische Anbieter",
          text: "Ein Vertriebskanal zu europäischen Käufern, einfach und professionell."
        }
      ]
    },
    close: {
      title: "Partner, Anbieter oder früher Nutzer?",
      text: "Cloody ist in Entwicklung. Wenn Sie von Anfang an dabei sein wollen, sprechen Sie mit uns."
    }
  },
  // German only: the page /beratungsgutscheine-afrika has no English version.
  voucher: voucherDe as VoucherContent | null
};

export type SiteContent = typeof de;

const en: SiteContent = {
  meta: {
    name: "SIFK GmbH",
    description:
      "SIFK helps companies enter African markets and advises businesses and non-residential buildings in Germany on energy efficiency."
  },
  common: {
    inDevelopment: "In development",
    firstCall: { href: "/kontakt", label: "Request a first call" },
    contact: { href: "/kontakt", label: "Get in touch" },
    phone: "Phone",
    email: "Email",
    address: "Address",
    pauseVideo: "Pause video",
    playVideo: "Play video",
    pauseLogos: "Pause logo carousel",
    playLogos: "Play logo carousel"
  },
  countries: {
    de: "Germany",
    zm: "Zambia",
    et: "Ethiopia",
    ug: "Uganda",
    gh: "Ghana",
    ke: "Kenya",
    tz: "Tanzania"
  },
  places: {
    title: "Seven countries. One network.",
    text: "From Schriesheim to Zambia: these are the people who run your project on the ground.",
    hq: "Head office Schriesheim",
    person: "specialist on the ground",
    people: "specialists on the ground",
    alt: {
      de: "White model of the Bergstrasse near Schriesheim: a castle ruin above vineyards",
      gh: "White model of a cocoa farm in Ghana: cocoa trees with pods, a drying table and a small house",
      zm: "White model of Victoria Falls in Zambia with the arch bridge across the gorge",
      ug: "White model of Kampala: houses on rounded hills, a crowned crane in front",
      ke: "White model of Nairobi: two giraffes and an acacia in front of the city towers",
      et: "White model of the Ethiopian coffee highlands: terraces of coffee bushes, a coffee pot in front",
      tz: "White model of the savanna in Tanzania: elephants and acacias below Mount Kilimanjaro"
    } as Record<CountryCode, string>
  },
  map: {
    label:
      "Network map: head office in Schriesheim with five specialists, connected to specialists in Ghana, Zambia, Uganda, Kenya, Ethiopia and Tanzania.",
    hq: "Head office Schriesheim",
    person: "specialist",
    people: "specialists"
  },
  home: {
    hero: {
      title: ["Growth in Africa.", "Efficiency in Germany."],
      text:
        "SIFK helps companies enter African markets and cuts the energy use of businesses and buildings in Germany.",
      actions: [
        { href: "/leistungen#internationale-geschaeftsentwicklung", label: "Market entry Africa" },
        { href: "/leistungen#energieberatung-deutschland", label: "Energy consulting" }
      ],
      proof: [
        { value: "15", label: "specialists" },
        { value: "7", label: "countries" }
      ],
      switchLabel: "Choose a line of business",
      places: {
        africa: {
          place: "Africa",
          field: "Market entry",
          caption: "Cape Town, Table Mountain",
          alt: "Table Mountain above Cape Town, with golden savanna in evening light in front",
          sceneAlt:
            "White architectural model: a German company with a solar roof below a castle ruin on the left, Table Mountain, acacias and a harbour on the right. Ribbons in black, red, gold and green weave together in between."
        },
        germany: {
          place: "Germany",
          field: "Energy consulting",
          caption: "Frankfurt am Main",
          alt: "The Frankfurt am Main skyline at sunset above the river"
        }
      },
      pauseScene: "Pause image motion",
      playScene: "Resume image motion"
    },
    index: {
      label: "Chapters on this page",
      items: [
        { href: "#afrika", label: "Africa", text: "Market entry" },
        { href: "#energie", label: "Energy", text: "Consulting in Germany" },
        { href: "#team", label: "Team", text: "15 people, 7 countries" },
        { href: "#cloody", label: "Cloody", text: "Trade platform" },
        { href: "#kontakt", label: "Contact", text: "First call" }
      ]
    },
    intro: {
      title: "One firm.\nTwo fields.",
      lead: "SIFK is a consultancy from Schriesheim near Heidelberg.",
      africaClaim: "We open markets in Africa.",
      germanyClaim: "We save energy in Germany.",
      note: "15 specialists in 7 countries. Clients and partners all across Germany and Africa.",
      germany: "Germany",
      africa: "Africa",
      germanyAlt: "White model of the Bergstrasse: a castle ruin above vineyards, a ribbon in black, red and gold winding up the hill",
      africaAlt: "White model of the savanna in Tanzania: elephants and acacias in front of Kilimanjaro, a green ribbon running to the mountain"
    },
    figure: {
      claim: "One team in seven countries.",
      unit: "specialists",
      size: 15,
      more: "More staff"
    },
    weave: {
      link: { href: "/ueber-uns", label: "About SIFK" },
      germany: "Horizontal: Germany",
      africa: "Vertical: Africa",
      markAlt: "The SIFK mark: the African continent woven from horizontal and vertical ribbons"
    },
    closeWord: "Contact",
    references: {
      title: "Clients and partners who work with us.",
      ariaLabel: "Client and partner logos"
    },
    africa: {
      title: "Market entry in Africa, with people on site.",
      text:
        "We test your target market, find reliable partners and support your project through to delivery. Our team lives in Uganda, Kenya, Tanzania, Ghana, Ethiopia and Zambia, not in a database.",
      services: [
        {
          title: "Market entry and validation",
          text: "Is the market worth it? We deliver numbers, competitors and rules before you invest."
        },
        {
          title: "Strategic partnerships",
          text: "We find distributors, suppliers and authorities that fit you, and lead the first conversations."
        },
        {
          title: "Project support on the ground",
          text: "We coordinate stakeholders, schedules and paperwork so distance doesn't stall your project."
        }
      ],
      link: { href: "/leistungen#internationale-geschaeftsentwicklung", label: "Africa services in detail" },
      imageAlt: "White model of an African harbour and market town with a crane, containers and acacias, crossed by yellow and green ribbons"
    },
    statement: {
      label: "Germany and Africa, connected by one team in Ghana, Zambia, Uganda, Kenya, Ethiopia and Tanzania"
    },
    bridge: {
      statement: "We build the bridge from Germany to Africa.",
      from: "Germany",
      to: "Africa",
      startCaption: "Frankfurt am Main",
      endCaption: "Cape Town, Table Mountain",
      canvasLabel:
        "Scroll film: the Frankfurt skyline turns into the savanna in front of Table Mountain in Cape Town."
    },
    energy: {
      title: "Save energy. With numbers, not gut feeling.",
      text:
        "We measure where your site or building loses energy and cost out every measure: investment, savings, payback. In line with DIN EN 16247 and DIN V 18599.",
      deliverables: [
        "Energy audit to DIN EN 16247",
        "Non-residential building assessment to DIN V 18599",
        "Action plan with cost, savings and payback",
        "Guidance on suitable funding programmes"
      ],
      link: { href: "/leistungen#energieberatung-deutschland", label: "Energy services in detail" },
      imageAlt: "White model of a company site with a solar roof, heat pumps and charging points"
    },
    people: {
      title: "15 people. 7 countries. One team.",
      text:
        "Engineers, energy auditors, economists and project managers. You talk directly to the person who runs your project.",
      link: { href: "/unser-team", label: "Meet the team" }
    },
    cloody: {
      title: "Cloody: direct trade with Africa.",
      text:
        "Our trading platform is designed to connect buyers in Europe directly with suppliers in Africa, with customs handling and shared logistics. We're looking for partners, suppliers and early users.",
      link: { href: "/cloody", label: "More about Cloody" }
    },
    close: {
      title: "Tell us about your project.",
      text: "We'll tell you honestly whether and how we can help."
    }
  },
  energyScene: {
    before: "Today",
    after: "After our advice",
    beforeTitle: "Where does your site lose energy?",
    beforeText: "We record consumption, equipment and building envelope in full, to DIN EN 16247 and DIN V 18599.",
    afterTitle: "Every measure costed out.",
    afterText: "You get a plan with investment, savings and payback, ranked by impact.",
    hotspots: [
      { id: "pv", label: "Solar on the factory roof" },
      { id: "heat", label: "Heat pumps instead of a gas boiler" },
      { id: "charge", label: "Charging points for the fleet" }
    ],
    beforeAlt: "White model of a company with a hall and an office. Red ribbons pour out of the roof, a gate and the windows: this is where energy is lost.",
    afterAlt: "The same company with a solar roof, heat pumps and charging points. A golden ribbon runs from the roof into the hall."
  },
  services: {
    intro: {
      title: "Services in Africa and Germany.",
      text:
        "Two lines of business, one standard: we get the facts straight, do the maths honestly and stay on board until it's done."
    },
    fields: [
      {
        id: "internationale-geschaeftsentwicklung",
        label: "Africa",
        title: "International Business Development",
        lead: "Test markets, find partners, support projects on the ground.",
        text:
          "For companies that want to sell, source or invest in African countries. We work with our own team in six countries and know the markets, the rules and the people.",
        services: [
          {
            title: "Market entry and validation",
            text: "Market size, competition, tariffs and regulations. You decide on facts, not hope."
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
        id: "energieberatung-deutschland",
        label: "Energy",
        title: "Energy Consulting Germany",
        lead: "Measure consumption, cost out measures, cut bills.",
        text:
          "For companies and non-residential buildings in Germany. We combine technical analysis with commercial priorities so you know which measure pays off first.",
        services: [
          {
            title: "Energy audit to DIN EN 16247",
            text: "We capture consumption, equipment and processes in full and document to the standard."
          },
          {
            title: "Non-residential buildings to DIN V 18599",
            text: "Assessment of building envelope, heating, ventilation, cooling and lighting to the standard."
          },
          {
            title: "Action plan with cost, savings and payback",
            text: "Every recommendation with investment, annual savings and payback period, ranked by impact."
          },
          {
            title: "Guidance on funding programmes",
            text: "We show which funding programmes may apply to your measures."
          }
        ]
      }
    ],
    process: {
      title: "From first call to delivery.",
      steps: [
        {
          title: "First call",
          text: "You describe your project. We tell you openly whether we fit and what a sensible first step is."
        },
        {
          title: "Analysis",
          text: "We gather market data or measurements and test assumptions before decisions are made."
        },
        {
          title: "Plan",
          text: "You get clear recommendations with priorities, costs and responsibilities."
        },
        {
          title: "Delivery",
          text: "We support delivery, in Germany or on the ground in Africa, until the result is in place."
        }
      ]
    },
    close: {
      title: "Which line of business fits your project?",
      text: "In a first call we work out where to start and what it costs."
    }
  },
  about: {
    intro: {
      title: "We connect Germany and Africa.",
      text:
        "We take German companies to Africa and help businesses in Germany save energy. SIFK is a consultancy based in Schriesheim near Heidelberg. Two fields that seem to have little in common, yet need the same way of working: look closely, calculate honestly, deliver reliably."
    },
    mark: {
      title: "Our mark is a weave.",
      text:
        "The horizontal threads stand for Germany, the vertical ones for Africa. Where they cross, something holds. That is how we see our work.",
      imageAlt: "The SIFK mark as a sculpture: the African continent woven from coloured ribbons"
    },
    principlesTitle: "Three things we hold ourselves to.",
    principles: [
      {
        title: "Plain words, not slides",
        text: "We say what we see, even when it's uncomfortable. An honest no is worth more than a nice plan that won't hold."
      },
      {
        title: "On the ground, not from afar",
        text: "Our specialists live in the markets we advise on. And in Germany, we stand in the plant room ourselves."
      },
      {
        title: "Numbers, not promises",
        text: "Market entry or efficiency measure: every recommendation comes with figures you can check."
      }
    ],
    facts: {
      title: "SIFK at a glance",
      items: [
        { label: "Head office", value: "Schriesheim, Baden-Württemberg" },
        { label: "Managing director", value: "Pheeraphon Karch, since 2022" },
        { label: "Team", value: "15 specialists in 7 countries" },
        { label: "Register", value: "Mannheim Local Court, HRB 750493" }
      ]
    },
    working: {
      title: "How we work",
      items: [
        "One fixed contact person for your project",
        "Clear next steps after every meeting",
        "Working on equal footing, across disciplines and cultures"
      ]
    },
    close: {
      title: "Tell us about your project.",
      text: "We'll tell you honestly whether we're the right fit."
    }
  },
  team: {
    intro: {
      title: "15 people. 7 countries.\nOne team.",
      photoAlt: "Five people working together at a table with laptops and papers (stock photo)",
      text:
        "Management, energy consulting and sales are based in Schriesheim. In six African countries, specialists work who know their markets from the inside."
    },
    leadership: {
      title: "Management and head of energy",
      members: [
        {
          name: "Pheeraphon Karch",
          role: "Managing Director",
          countries: ["de"],
          location: "Germany",
          languages: "German, English (C2)",
          text:
            "Has led SIFK since November 2022. Combines corporate strategy, operational management and international communication with a clear focus on clients.",
          areas: ["Corporate strategy", "Operational management", "International client communication"]
        },
        {
          name: "Adrian Müller",
          role: "Head of Energy",
          countries: ["de"],
          location: "Germany",
          languages: "German (native), English (fluent), French (basic)",
          text:
            "Lead energy auditor focusing on non-residential buildings, equipment and systems to DIN EN 16247 and DIN V 18599. Brings together mechanical engineering and applied computer science.",
          areas: ["Energy audits to DIN EN 16247-1", "Non-residential buildings and systems", "Technical efficiency assessment"]
        }
      ]
    },
    africaDesk: {
      title: "Africa business unit",
      text: "Market development, partnerships and project management for African markets.",
      members: [
        {
          name: "Patience Bauer",
          role: "Environmental & Resource Management Specialist",
          countries: ["ug", "de"],
          location: "Uganda and Germany",
          text:
            "More than 15 years between German operating standards and African markets. Specialises in market access in the Uganda–Germany corridor, operational scaling and cross-cultural coordination."
        },
        {
          name: "Christian Brecht",
          role: "Head of Sales",
          countries: ["de"],
          location: "Germany",
          text:
            "More than 30 years of experience in account management, acquisition and well-founded market analysis."
        },
        {
          name: "Haulie Tembo-Schäfer",
          role: "Business Development Specialist",
          countries: ["zm"],
          location: "Zambia",
          text:
            "11 years of sales experience in West Africa, focusing on business processes, market insight and KPIs. Solution-minded, with an eye on what can actually be done."
        },
        {
          name: "Panu Mankit",
          role: "Executive Operations Specialist",
          countries: ["de"],
          location: "Germany",
          text:
            "Keeps projects organised: correspondence, data and processes. Background in sales operations, CRM and executive assistance."
        }
      ]
    },
    onSite: {
      title: "On the ground in Africa",
      text: "Specialists in Ethiopia, Uganda, Ghana, Kenya and Tanzania, with their own networks in their markets.",
      members: [
        {
          name: "Tom Twimukire",
          role: "Director Business Development",
          countries: ["ug"],
          location: "Uganda",
          qualification: "MBA, B.Com (Hons)",
          org: "Tocom Ltd",
          text:
            "Founder and managing director of Tocom Ltd. More than 10 years in brand strategy, go-to-market planning and digital marketing in East African growth markets."
        },
        {
          name: "Dr. Kobla Xoese Nanewortor",
          role: "Project Lead, Technical Engineering",
          countries: ["gh"],
          location: "Ghana",
          qualification: "Dr.-Ing. Electrical Engineering",
          org: "TenneT TSO GmbH",
          text:
            "Engineer with a doctorate in high-voltage engineering, grid planning and the certification of distributed generators. Experience at TenneT, E.ON, TÜV NORD and Siemens."
        },
        {
          name: "Mahlet Asfha Woldegiorgis",
          role: "Team Africa, Ethiopia",
          countries: ["et"],
          location: "Ethiopia",
          qualification: "Pharmacy; German, English, Amharic",
          text:
            "Pharmaceutical background with work experience in Addis Ababa. Supports coordination in German–Ethiopian projects."
        },
        {
          name: "Muwanga K. James",
          role: "Director, Accounting & Business",
          countries: ["ug"],
          location: "Uganda",
          qualification: "B.Comm Business Studies (Accounting)",
          text:
            "Finance and business consultant focusing on accounting, internal audit and corporate management. Runs several companies in Uganda."
        },
        {
          name: "John Damulira",
          role: "Operations Manager",
          countries: ["ug"],
          location: "Uganda",
          qualification: "B.Comm, Makerere University",
          text:
            "Experience in construction and real estate, as well as credit management and client management at G4S Uganda."
        },
        {
          name: "Celestine Wafula",
          role: "Sales Executive",
          countries: ["ke"],
          location: "Kenya",
          qualification: "BSc Pharmaceutical Technology; Business Management & Digital Marketing",
          text:
            "9 years in sales and marketing across East Africa, Turkey, Egypt and Thailand. Specialises in sales planning, client relationships and market analysis."
        },
        {
          name: "Albert Guido Moshi",
          role: "Logistics and Environmental Management",
          countries: ["tz"],
          location: "Tanzania",
          qualification: "MSc Environmental and Resource Management; project manager (GPM)",
          text:
            "Experience in dispatch, fleet management, international shipping and rail logistics. Active in German–Tanzanian education projects."
        }
      ]
    },
    more: {
      title: "And many more.",
      text: "Beyond the people above, more employees work for SIFK, in the Schriesheim office and on projects on the ground. On top of that we bring in a network of specialists as each project needs."
    },
    emailTo: "Email",
    close: {
      title: "Straight to the right person.",
      text: "Everyone on the team can be reached by email. Or write to us and we'll connect you."
    }
  },
  contact: {
    intro: {
      title: "Write to us.",
      text:
        "Tell us briefly what it's about. We'll reply personally, with an honest assessment and a suggestion for the next step."
    },
    formTitle: "Contact form",
    direct: "Prefer to reach us directly?"
  },
  cloody: {
    imageAlt: "White model of a container ship loaded with containers in black, red, gold and green",
    intro: {
      title: "Cloody: direct trade with Africa.",
      text:
        "Cloody is designed to connect buyers in Europe directly with suppliers in Africa, for individuals and companies. The platform is meant to handle customs and bundle shipments, so trade becomes simpler and cheaper.",
      statement: ["Africa has 54 countries", "and 1.4 billion people.", "Cloody is meant to make", "trading with them simple."]
    },
    vision: {
      title: "As simple as shopping online.",
      text:
        "Today, many deals fail because of middlemen, customs forms and expensive single shipments. Cloody aims to clear these hurdles away.",
      points: [
        { title: "Direct", text: "Trade without unnecessary middlemen" },
        { title: "Integrated", text: "Customs handled on the platform" },
        { title: "Open", text: "For individuals and companies" },
        { title: "Transparent", text: "Clear prices without hidden mark-ups" }
      ]
    },
    concept: {
      title: "Pay less than you guess.",
      text:
        "Bundling saves money. Cloody aims to combine orders and shipping routes and pass the savings on to its users.",
      pillars: [
        { title: "Bundling", text: "Buy together, pay less" },
        { title: "Shared logistics", text: "Shared routes, shared costs" },
        { title: "Direct sourcing", text: "No middlemen, no mark-ups" }
      ]
    },
    how: {
      title: "How Cloody is meant to work.",
      steps: [
        {
          title: "Find an offer",
          text: "Discover products and services from African markets, or list your own offer."
        },
        {
          title: "Customs and shipping",
          text: "The platform handles customs and coordinates shipping."
        },
        {
          title: "Trade directly",
          text: "Buy or sell directly, on terms that work for both sides."
        }
      ]
    },
    audience: {
      title: "Who Cloody is for.",
      groups: [
        {
          title: "Individuals",
          text: "Access to products from African markets, without the hassle of customs and shipping."
        },
        {
          title: "Companies",
          text: "Direct sourcing routes and new sales markets on a reliable platform."
        },
        {
          title: "African suppliers",
          text: "A sales channel to European buyers, simple and professional."
        }
      ]
    },
    close: {
      title: "Partner, supplier or early user?",
      text: "Cloody is in development. If you want to be there from the start, talk to us."
    }
  },
  voucher: null
};

export const content: Record<Locale, SiteContent> = { de, en };

export function getContent(locale: Locale) {
  return content[locale];
}
