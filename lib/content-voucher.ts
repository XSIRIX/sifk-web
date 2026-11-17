import type { Dated } from "@/lib/dated";

// Copy for /beratungsgutscheine-afrika (German only).
// Every factual sentence has a row in docs/seo/claims.md with its source and check date.
// The programme ends on 28.02.2027. After that day the page shows `ended` on its own.

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

export type VoucherContent = Dated<VoucherBody> & { stand: string; crumb: string };

const bafaList =
  "https://www.bafa.de/SharedDocs/Downloads/DE/Wirtschaft/bga_liste_beratungsunternehmen_beratungsorganisationen.pdf?__blob=publicationFile";
const bafaProgramme =
  "https://www.bafa.de/DE/Wirtschaft/Auslandsmarkterschliessung/Beratungsgutscheine_Afrika/beratungsgutscheine_afrika_node.html";

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
  until: "2027-02-28",
  stand: "2026-11-17",
  crumb: "Beratungsgutscheine Afrika",
  open: {
    hero: {
      title: "Beratungs­gutscheine Afrika. Förderung für Ihre Beratung.",
      lead:
        "Der Bund fördert Beratung zu Ihrem Geschäftsvorhaben in Afrika mit bis zu 75\u00A0% der Beratungskosten. SIFK ist ein vom BAFA gelistetes Beratungsunternehmen im Rahmen der Beratungsgutscheine Afrika."
    },
    programme: {
      title: "Was das Programm fördert.",
      text:
        "Mit den Beratungsgutscheinen Afrika fördert das Bundesministerium für Wirtschaft und Energie (BMWE) externe Beratung für kleine und mittlere Unternehmen, die ein Geschäftsvorhaben in Afrika vorbereiten oder umsetzen. Die Anträge prüft das BAFA.",
      facts: [
        {
          label: "Zuschuss",
          value: "75\u00A0% der förderfähigen Beratungskosten. 25\u00A0% trägt Ihr Unternehmen selbst."
        },
        {
          label: "Wer gefördert wird",
          value:
            "Kleine und mittlere Unternehmen der gewerblichen Wirtschaft und des Handwerks mit Betriebsstätte oder Niederlassung in Deutschland. Auch Mittelständler mit weniger als 500 Beschäftigten und bis zu 100\u00A0Mio. Euro Jahresumsatz, verbundene Unternehmen eingerechnet."
        },
        {
          label: "Umfang",
          value:
            "Bis zu 15 Beratertage je Gutschein. Bis zu drei Gutscheine im Kalenderjahr, höchstens fünf während der Laufzeit des Programms."
        },
        {
          label: "Antragsfrist",
          value: "Anträge sind bis zum 28.02.2027 möglich."
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
          a: "Kleine und mittlere Unternehmen der gewerblichen Wirtschaft und des Handwerks mit Betriebsstätte oder Niederlassung in Deutschland. Wo der Hauptsitz liegt, spielt keine Rolle. Start-ups können den Gutschein nutzen, wenn sie diese Bedingungen erfüllen."
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
          a: "Nein. Der Vertrag darf erst nach der Bewilligung geschlossen werden. Wer vorher unterschreibt oder mit der Beratung beginnt, verliert die Förderung."
        }
      ]
    },
    close: {
      title: "Vorhaben besprechen, Gutschein nutzen.",
      text: "Im Erstgespräch klären wir, ob wir zu Ihrem Vorhaben passen und welche Schritte als Nächstes kommen."
    }
  },
  ended: {
    hero: {
      title: "Beratungs­gutscheine Afrika. Das Programm ist beendet.",
      lead: "Anträge waren bis zum 28.02.2027 möglich. SIFK berät Sie weiter zum Markteintritt in Afrika."
    },
    programme: {
      title: "Was das Programm war.",
      text:
        "Mit den Beratungsgutscheinen Afrika förderte das Bundesministerium für Wirtschaft und Energie (BMWE) externe Beratung für kleine und mittlere Unternehmen mit Geschäftsvorhaben in Afrika. Die Anträge prüfte das BAFA.",
      facts: [
        { label: "Zuschuss", value: "Zuletzt 75\u00A0% der förderfähigen Beratungskosten." },
        { label: "Laufzeit", value: "Anträge waren bis zum 28.02.2027 möglich." },
        { label: "Heute", value: "Neue Beratungsgutscheine können nicht mehr beantragt werden." }
      ]
    },
    steps: {
      title: "Was jetzt noch hilft.",
      items: [
        {
          title: "Kostenlose Erstberatung",
          text:
            "Das IHK Netzwerkbüro Afrika der DIHK Service GmbH berät zur Außenwirtschaftsförderung, die Agentur für Wirtschaft und Entwicklung zur Entwicklungszusammenarbeit."
        },
        {
          title: "Überblick",
          text:
            "Die Geschäftsstelle des Wirtschaftsnetzwerks Afrika bei Germany Trade and Invest gibt einen Überblick über die kostenlosen Angebote des Bundes."
        },
        {
          title: "Märkte und Absicherung",
          text:
            "Germany Trade and Invest und die Auslandshandelskammern informieren über einzelne Märkte. Zu Export- und Investitionsgarantien des Bundes beraten beauftragte Unternehmen kostenlos."
        },
        {
          title: "Beratung durch SIFK",
          text: "Wir beraten weiter zu Markteintritt, Partnern und Projekten vor Ort, jetzt ohne Gutschein."
        }
      ]
    },
    listed: {
      title: "Was SIFK berät.",
      text:
        "SIFK war ein vom BAFA gelistetes Beratungsunternehmen im Rahmen der Beratungsgutscheine Afrika. Die Liste nannte für uns unter anderem Uganda, Kenia und Äthiopien sowie die Regionen Ostafrika und Subsahara, mit diesen Schwerpunkten:",
      topics: listedTopics,
      source: { href: bafaProgramme, label: "Programmseite des BAFA" }
    },
    faq: {
      title: "Häufige Fragen.",
      items: [
        {
          q: "Kann man noch Beratungsgutscheine beantragen?",
          a: "Nein. Anträge waren bis zum 28.02.2027 möglich."
        },
        {
          q: "Wo gibt es jetzt Unterstützung?",
          a: "Kostenlose Erstberatung bieten das IHK Netzwerkbüro Afrika und die Agentur für Wirtschaft und Entwicklung. Einen Überblick gibt die Geschäftsstelle des Wirtschaftsnetzwerks Afrika bei Germany Trade and Invest."
        },
        {
          q: "Berät SIFK weiter zum Markteintritt in Afrika?",
          a: "Ja. Wir beraten weiter zu Märkten, Partnern und Projekten vor Ort. Im Erstgespräch klären wir, wo wir ansetzen und was es kostet."
        }
      ]
    },
    close: {
      title: "Markteintritt in Afrika planen.",
      text: "Im Erstgespräch klären wir, wo wir ansetzen und was es kostet."
    }
  }
};
