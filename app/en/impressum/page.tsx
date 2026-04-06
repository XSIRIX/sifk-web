import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice",
};

export default function LegalNoticePageEn() {
  return (
    <section className="page-intro page-single">
      <div className="shell legal-copy">
        <p className="eyebrow">Legal Notice</p>
        <h1>Information pursuant to § 5 TMG</h1>

        <h2>Company Information</h2>
        <p>
          SIFK GmbH
          <br />
          Carl-Benz-Straße 4<br />
          69198 Schriesheim, Germany
        </p>
        <p>Managing Director: P. Karch</p>
        <p>
          Phone: +49 6203 9375175
          <br />
          Email:{" "}
          <a href="mailto:info@sifk.de">info@sifk.de</a>
          <br />
          Website:{" "}
          <a href="https://www.sifk.de" rel="noopener">
            www.sifk.de
          </a>
        </p>
        <p>Register Court: Amtsgericht Mannheim<br />Commercial Register: HRB 750493</p>

        <h2>Responsible for Content (§ 55 para. 2 RStV)</h2>
        <p>
          Pheeraphon Karch
          <br />
          SIFK GmbH
          <br />
          Carl-Benz-Straße 4<br />
          69198 Schriesheim, Germany
        </p>

        <h2>Liability for Content</h2>
        <p>
          The contents of our pages have been created with the utmost care. However, we cannot
          guarantee the accuracy, completeness, or timeliness of the content. As a service provider,
          we are responsible for our own content on these pages in accordance with § 7 para. 1 TMG.
          According to §§ 8 to 10 TMG, however, we are not obligated to monitor transmitted or
          stored third-party information or to investigate circumstances indicating illegal activity.
        </p>

        <h2>Liability for Links</h2>
        <p>
          Our website contains links to external third-party websites over whose content we have no
          influence. Therefore, we cannot accept any liability for this third-party content. The
          respective provider or operator of linked pages is always responsible for their content. A
          permanent content review of linked pages is not reasonable without concrete evidence of a
          legal violation. If we become aware of any legal violations, we will remove such links
          immediately.
        </p>

        <h2>Copyright</h2>
        <p>
          The content and works created by the site operators on these pages are subject to German
          copyright law. Reproduction, editing, distribution, and any kind of use beyond the limits
          of copyright law require the written consent of the respective author or creator. Downloads
          and copies of this site are only permitted for private, non-commercial use.
        </p>
      </div>
    </section>
  );
}
