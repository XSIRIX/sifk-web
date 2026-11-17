// Copy for /beratungsgutscheine-afrika (German only).
// Every factual sentence has a row in docs/seo/claims.md with its source and check date.
// Applications close on 28.02.2027. The page does not change on its own: re-check BAFA in early
// February 2027 and update this copy by hand (the programme may be extended).

export type Faq = { q: string; a: string };

type Item = { title: string; text: string };

export type VoucherBody = {
  hero: { title: string; lead: string };
  programme: { title: string; text: string; facts: Array<{ label: string; value: string }> };
  steps: { title: string; items: Item[] };
  listed: { title: string; text: string; topics: string[]; source: { href: string; label: string } };
  faq: { title: string; items: Faq[] };
  close: { title: string; text: string };
};

/** A short note on German pages with an Africa section, pointing to the voucher page. */
export type VoucherTeaser = { text: string; link: { href: string; label: string } };

/** `stand` is the line naming the day the copy was last checked against its sources. */
export type VoucherContent = VoucherBody & { stand: string; crumb: string };

const bafaList =
  "https://www.bafa.de/SharedDocs/Downloads/DE/Wirtschaft/bga_liste_beratungsunternehmen_beratungsorganisationen.pdf?__blob=publicationFile";

// The advisory topics BAFA lists for SIFK (A1 to A5, B1 to B3 on the list of 28.09.2026).
const listedTopics = [
  "Marktanalyse und Marktrecherche",
  "Geschäftspartner und Kontakte vor Ort",
  "Zoll- und Einfuhrbestimmungen",
  "Logistik und Transport",
  "Business-Case-Berechnung",
  "Zertifizierungen und Normen",
  "Aufbau einer Vertriebsstruktur"
];

export const voucherDe: VoucherContent = {
  stand: "Stand: 17.11.2026",
  crumb: "Beratungsgutscheine Afrika",
  hero: {
    title: "Beratungs­gutscheine Afrika. Förderung für Ihre Beratung.",
    lead:
      "Der Bund fördert Beratung zu Ihrem Geschäftsvorhaben in Afrika mit bis zu 75\u00A0% der Beratungskosten. SIFK ist ein vom BAFA gelistetes Beratungsunternehmen im Rahmen der Beratungsgutscheine Afrika."
  },
  programme: {
    title: "Was das Programm fördert.",
    text:
      "Mit den Beratungsgutscheinen Afrika fördert das Bundesministerium für Wirtschaft und Energie (BMWE) externe Beratung für kleine und mittlere Unternehmen, die ein Geschäftsvorhaben in Afrika vorbereiten oder umsetzen.",
    facts: [
      {
        label: "Zuschuss",
        value: "75\u00A0% der förderfähigen Beratungskosten. 25\u00A0% trägt Ihr Unternehmen selbst."
      },
      {
        label: "Wer gefördert wird",
        value:
          "Rechtlich selbständige kleine und mittlere Unternehmen der gewerblichen Wirtschaft und des Handwerks mit Betriebsstätte oder Niederlassung in Deutschland und substanziellem Interesse am Markteintritt in Afrika. Auch Mittelständler mit weniger als 500 Beschäftigten und bis zu 100\u00A0Mio. Euro Jahresumsatz, verbundene Unternehmen eingerechnet."
      },
      {
        label: "Umfang",
        value:
          "Bis zu 15 Beratertage je Gutschein. Bis zu drei Gutscheine im Kalenderjahr, höchstens fünf während der Laufzeit des Programms."
      },
      {
        label: "Antragsfrist",
        value: "Anträge stellen Sie elektronisch beim BAFA, bis zum 28.02.2027."
      },
      {
        label: "Erst Antrag, dann Vertrag",
        value:
          "Den Beratungsvertrag dürfen Sie erst nach der Bewilligung schließen. Ein vorher geschlossener Vertrag ist nicht förderfähig."
      }
    ]
  },
  steps: {
    title: "So kommen Sie zum Gutschein.",
    items: [
      {
        title: "Berater wählen",
        text: "Sie wählen ein Beratungsunternehmen von der Liste des BAFA und besprechen Vorhaben und Tagessätze."
      },
      {
        title: "Antrag stellen",
        text: "Sie beantragen den Gutschein elektronisch beim BAFA. Den Vertrag schließen Sie erst nach der Bewilligung."
      },
      {
        title: "Beraten lassen",
        text: "Die Beratung beginnt nach der Bewilligung und muss innerhalb von sechs Monaten abgeschlossen sein."
      },
      {
        title: "Zuschuss erhalten",
        text:
          "Sie bezahlen die Rechnung und reichen binnen zwölf Wochen den Verwendungsnachweis ein. Danach erhalten Sie 75\u00A0% der förderfähigen Kosten."
      }
    ]
  },
  listed: {
    title: "SIFK auf der Liste des BAFA.",
    text:
      "SIFK ist ein vom BAFA gelistetes Beratungsunternehmen im Rahmen der Beratungsgutscheine Afrika. Die Liste nennt für uns unter anderem Uganda, Kenia und Äthiopien sowie die Regionen Ostafrika und Subsahara. Diese Beratungsschwerpunkte sind für uns gelistet:",
    topics: listedTopics,
    source: { href: bafaList, label: "Liste der gelisteten Beratungsunternehmen (BAFA, PDF)" }
  },
  faq: {
    title: "Häufige Fragen.",
    items: [
      {
        q: "Wer kann die Beratungsgutscheine nutzen?",
        a: "Rechtlich selbständige kleine und mittlere Unternehmen der gewerblichen Wirtschaft und des Handwerks mit Betriebsstätte oder Niederlassung in Deutschland und substanziellem Interesse am Markteintritt in Afrika. Wo der Hauptsitz liegt, spielt keine Rolle. Start-ups können den Gutschein nutzen, wenn sie diese Bedingungen erfüllen."
      },
      {
        q: "Wie hoch ist die Förderung?",
        a: "Der Zuschuss beträgt 75\u00A0% der förderfähigen Beratungskosten. Das BAFA begrenzt die förderfähigen Tagessätze je Beratungsthema. Ein Beratertag umfasst mindestens acht Stunden. Vorbereitung, Reisen und Nebenkosten sind mit dem Tagessatz abgegolten."
      },
      {
        q: "Was kostet die Beratung unser Unternehmen?",
        a: "Ihr Eigenanteil beträgt 25\u00A0% der förderfähigen Kosten. Sie bezahlen die Rechnung zunächst vollständig. Nach Prüfung des Verwendungsnachweises überweist der Bund 75\u00A0% an Ihr Unternehmen. Kosten über den förderfähigen Tagessätzen tragen Sie selbst."
      },
      {
        q: "Wie lange dauert eine Beratung?",
        a: "Ein Gutschein deckt bis zu 15 Beratertage. Die Beratung muss innerhalb von sechs Monaten nach der Bewilligung abgeschlossen sein. Den Verwendungsnachweis reichen Sie binnen zwölf Wochen danach ein."
      },
      {
        q: "Für welche Länder gilt der Gutschein?",
        a: "Das Programm gilt für Vorhaben in afrikanischen Zielmärkten. Mit SIFK als Berater sind es die Länder und Regionen, für die wir gelistet sind, unter anderem Uganda, Kenia und Äthiopien sowie Ostafrika und Subsahara."
      },
      {
        q: "Bis wann müssen wir den Antrag stellen?",
        a: "Anträge sind bis einschließlich 28.02.2027 möglich. Bis dahin sind höchstens fünf Gutscheine je Unternehmen erlaubt, frühere Anträge eingerechnet."
      },
      {
        q: "Dürfen wir den Beratungsvertrag schon vorher schließen?",
        a: "Nein. Der Vertrag darf erst nach der Bewilligung geschlossen werden. Wer vorher unterschreibt oder mit der Beratung beginnt, erhält keine Förderung."
      }
    ]
  },
  close: {
    title: "Vorhaben besprechen, Gutschein nutzen.",
    text: "Im Erstgespräch klären wir, ob wir zu Ihrem Vorhaben passen und welche Schritte als Nächstes kommen."
  }
};

// Same two sentences as the hero lead (claims rows 4 and 5), so no new claim.
export const voucherTeaserDe: VoucherTeaser = {
  text: voucherDe.hero.lead,
  link: { href: "/beratungsgutscheine-afrika", label: "Mehr zu den Beratungs\u00ADgutscheinen Afrika" }
};
