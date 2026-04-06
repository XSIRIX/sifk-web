import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function LegalNoticePage() {
  return (
    <section className="page-intro page-single">
      <div className="shell legal-copy">
        <p className="eyebrow">Impressum</p>
        <h1>Angaben gemäß § 5 TMG</h1>

        <h2>Unternehmensangaben</h2>
        <p>
          SIFK GmbH
          <br />
          Carl-Benz-Straße 4<br />
          69198 Schriesheim
        </p>
        <p>Geschäftsführer: P. Karch</p>
        <p>
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
        <p>Registergericht: Amtsgericht Mannheim<br />Handelsregisternummer: HRB 750493</p>

        <h2>Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV</h2>
        <p>
          Pheeraphon Karch
          <br />
          SIFK GmbH
          <br />
          Carl-Benz-Straße 4<br />
          69198 Schriesheim
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
          verantwortlich. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
          Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
          der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
          Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
          nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
      </div>
    </section>
  );
}
