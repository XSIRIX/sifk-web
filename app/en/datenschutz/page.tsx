import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPageEn() {
  return (
    <section className="page-intro page-single">
      <div className="shell legal-copy">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy Policy</h1>

        <h2>1. Controller</h2>
        <p>The controller responsible for data processing on this website is:</p>
        <p>
          SIFK GmbH
          <br />
          Carl-Benz-Straße 4<br />
          69198 Schriesheim, Germany
          <br />
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

        <h2>2. Collection and Storage of Personal Data</h2>
        <p>
          When you visit our website, your browser automatically transmits information to the
          server. This information is temporarily stored in a log file. The following data is
          collected without any action on your part and stored until automatic deletion:
        </p>
        <ul>
          <li>IP address of the requesting device</li>
          <li>Date and time of access</li>
          <li>Name and URL of the accessed file</li>
          <li>Website from which access is made (referrer URL)</li>
          <li>Browser used and, if applicable, your operating system</li>
        </ul>
        <p>
          This data is evaluated exclusively to ensure trouble-free operation of the website and to
          improve our services. It is not possible to associate this data with a specific person. The
          legal basis is Art. 6 para. 1 lit. f GDPR.
        </p>

        <h2>3. Contact Form</h2>
        <p>
          If you send us enquiries via the contact form, your details from the form including the
          contact data you provide will be stored by us for the purpose of processing the enquiry
          and in case of follow-up questions. We do not share this data without your consent. The
          legal basis is Art. 6 para. 1 lit. b GDPR.
        </p>

        <h2>4. Your Rights</h2>
        <p>You have the following rights with respect to your personal data:</p>
        <ul>
          <li>Right of access (Art. 15 GDPR)</li>
          <li>Right to rectification (Art. 16 GDPR)</li>
          <li>Right to erasure (Art. 17 GDPR)</li>
          <li>Right to restriction of processing (Art. 18 GDPR)</li>
          <li>Right to data portability (Art. 20 GDPR)</li>
          <li>Right to object to processing (Art. 21 GDPR)</li>
        </ul>
        <p>
          You also have the right to lodge a complaint with a data protection supervisory authority
          regarding the processing of your personal data.
        </p>

        <h2>5. Cookies</h2>
        <p>
          This website does not use cookies for marketing or tracking purposes. Technically necessary
          cookies may be used to ensure the functionality of the website. The legal basis is Art. 6
          para. 1 lit. f GDPR.
        </p>

        <h2>6. Analytics and Third-Party Services</h2>
        <p>
          This website currently does not use any analytics tools or third-party services that
          process personal data.
        </p>

        <h2>7. Updates to This Privacy Policy</h2>
        <p>
          This privacy policy is currently valid (as of April 2026). Due to the further development
          of our website or changes in legal requirements, it may become necessary to update this
          privacy policy.
        </p>
      </div>
    </section>
  );
}
