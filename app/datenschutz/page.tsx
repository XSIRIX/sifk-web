import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
};

export default function PrivacyPage() {
  return (
    <section className="page-intro page-single">
      <div className="shell legal-copy">
        <p className="eyebrow">Datenschutz</p>
        <h1>Datenschutzerklärung</h1>

        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>
          SIFK GmbH
          <br />
          Carl-Benz-Straße 4<br />
          69198 Schriesheim
          <br />
          Telefon: 06203 – 9375175
          <br />
          E-Mail:{" "}
          <a href="mailto:info@sifk.de">info@sifk.de</a>
          <br />
          Internet:{" "}
          <a href="https://www.sifk.de" rel="noopener">
            www.sifk.de
          </a>
        </p>

        <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
        <p>
          Beim Besuch unserer Website werden durch den Browser automatisch Informationen an den
          Server übermittelt. Diese Informationen werden temporär in einem sogenannten Logfile
          gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur
          automatisierten Löschung gespeichert:
        </p>
        <ul>
          <li>IP-Adresse des anfragenden Rechners</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
          <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
        </ul>
        <p>
          Diese Daten werden ausschließlich zur Sicherstellung eines störungsfreien Betriebs der
          Website und zur Verbesserung unseres Angebots ausgewertet. Eine Zuordnung zu einer
          bestimmten Person ist nicht möglich. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2>3. Kontaktformular</h2>
        <p>
          Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
          dem Formular einschließlich der von Ihnen dort angegebenen Kontaktdaten zur Bearbeitung
          der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
          wir nicht ohne Ihre Einwilligung weiter. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
          DSGVO.
        </p>

        <h2>4. Ihre Rechte</h2>
        <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
        <ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Darüber hinaus haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
          Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
        </p>

        <h2>5. Cookies</h2>
        <p>
          Diese Website verwendet keine Cookies zu Marketing- oder Trackingzwecken. Technisch
          notwendige Cookies können eingesetzt werden, um die Funktionalität der Website
          sicherzustellen. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2>6. Analyse-Tools und Drittanbieter</h2>
        <p>
          Auf dieser Website werden derzeit keine Analyse-Tools oder Dienste von Drittanbietern
          eingesetzt, die personenbezogene Daten verarbeiten.
        </p>

        <h2>7. Aktualität und Änderung dieser Datenschutzerklärung</h2>
        <p>
          Diese Datenschutzerklärung ist aktuell gültig (Stand: April 2026). Durch die
          Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann es
          notwendig werden, diese Datenschutzerklärung zu ändern.
        </p>
      </div>
    </section>
  );
}
