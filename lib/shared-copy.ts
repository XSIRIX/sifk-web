import type { Locale } from "@/lib/locale-routing";

type TopicOption = { value: string; label: string };

export type SharedCopy = {
  skipLink: string;
  notFound: { title: string; text: string; home: string };
  navigation: Array<{ href: string; label: string }>;
  header: {
    contactLabel: string;
    navAriaLabel: string;
    openMenu: string;
    closeMenu: string;
    localeLabel: string;
    localeAriaLabel: string;
    /** Alt text of the logo image in header and footer. */
    logoAlt: string;
    /** Used when this page has no version in the other language and the switch goes elsewhere. */
    localeFallbackAriaLabel: string;
    homeLabel: string;
  };
  footer: {
    copy: string;
    navTitle: string;
    contactTitle: string;
    legalTitle: string;
    /** Service pages listed after the navigation items. A page may exist in one language only. */
    services: Array<{ href: string; label: string }>;
    links: Array<{ href: string; label: string }>;
    rights: string;
  };
  contactForm: {
    fields: {
      name: string;
      namePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      topic: string;
      message: string;
      messagePlaceholder: string;
      optional: string;
    };
    options: TopicOption[];
    submit: string;
    sending: string;
    disclaimer: string;
    privacyLink: string;
    successTitle: string;
    successText: string;
    successAgain: string;
    error: string;
    invalidEmail: string;
    required: string;
  };
};

export const sharedCopy: Record<Locale, SharedCopy> = {
  de: {
    skipLink: "Zum Inhalt springen",
    notFound: {
      title: "Diese Seite gibt es nicht.",
      text: "Vielleicht hat sich die Adresse geändert.",
      home: "Zur Startseite"
    },
    navigation: [
      { href: "/leistungen", label: "Leistungen" },
      { href: "/unser-team", label: "Team" },
      { href: "/ueber-uns", label: "Über uns" },
      { href: "/cloody", label: "Cloody" }
    ],
    header: {
      contactLabel: "Kontakt",
      navAriaLabel: "Hauptnavigation",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
      localeLabel: "EN",
      localeAriaLabel: "Switch to English",
      localeFallbackAriaLabel: "Diese Seite gibt es nur auf Deutsch. Zur englischen Seite Markteintritt Afrika",
      homeLabel: "SIFK GmbH, zur Startseite",
      logoAlt: "SIFK GmbH Logo: Afrika, aus Bändern gewebt"
    },
    footer: {
      copy:
        "Markteintritt in Afrika und Energieberatung in Deutschland. Mit eigenem Team in sieben Ländern.",
      navTitle: "Seiten",
      contactTitle: "Kontakt",
      legalTitle: "Rechtliches",
      // Soft hyphen: the long compound must break in the narrow footer tile on phones.
      services: [
        { href: "/leistungen/energieberatung", label: "Energie\u00ADberatung" },
        { href: "/leistungen/markteintritt-afrika", label: "Markteintritt Afrika" },
        { href: "/beratungsgutscheine-afrika", label: "Beratungs\u00ADgutscheine Afrika" }
      ],
      links: [
        { href: "/impressum", label: "Impressum" },
        { href: "/datenschutz", label: "Datenschutz" }
      ],
      rights: "SIFK GmbH"
    },
    contactForm: {
      fields: {
        name: "Name",
        namePlaceholder: "Vor- und Nachname",
        company: "Unternehmen",
        companyPlaceholder: "Firma oder Organisation",
        email: "E-Mail",
        emailPlaceholder: "name@unternehmen.de",
        topic: "Worum geht es?",
        message: "Ihr Vorhaben",
        messagePlaceholder:
          "Was haben Sie vor, bis wann, und wobei sollen wir helfen?",
        optional: "optional"
      },
      options: [
        { value: "international", label: "Markteintritt Afrika" },
        { value: "energie", label: "Energieberatung" },
        { value: "cloody", label: "Cloody und Kooperationen" },
        { value: "allgemein", label: "Etwas anderes" }
      ],
      submit: "Nachricht senden",
      sending: "Wird gesendet …",
      disclaimer: "Wir nutzen Ihre Angaben nur, um Ihre Anfrage zu beantworten.",
      privacyLink: "Datenschutz",
      successTitle: "Danke, Ihre Nachricht ist angekommen.",
      successText: "Wir melden uns persönlich bei Ihnen.",
      successAgain: "Weitere Nachricht schreiben",
      error:
        "Die Nachricht wurde nicht gesendet. Bitte versuchen Sie es erneut oder schreiben Sie direkt an info@sifk.de.",
      invalidEmail: "Bitte prüfen Sie die E-Mail-Adresse, zum Beispiel name@firma.de.",
      required: "Bitte füllen Sie dieses Feld aus."
    }
  },
  en: {
    skipLink: "Skip to content",
    notFound: {
      title: "This page does not exist.",
      text: "The address may have changed.",
      home: "Back to the home page"
    },
    navigation: [
      { href: "/leistungen", label: "Services" },
      { href: "/unser-team", label: "Team" },
      { href: "/ueber-uns", label: "About" },
      { href: "/cloody", label: "Cloody" }
    ],
    header: {
      contactLabel: "Contact",
      navAriaLabel: "Main navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      localeLabel: "DE",
      localeAriaLabel: "Auf Deutsch wechseln",
      localeFallbackAriaLabel: "This page exists in English only. Go to the German page",
      homeLabel: "SIFK GmbH, home",
      logoAlt: "SIFK GmbH logo: Africa woven from ribbons"
    },
    footer: {
      copy:
        "Market entry in Africa and energy consulting in Germany. With our own team in seven countries.",
      navTitle: "Pages",
      contactTitle: "Contact",
      legalTitle: "Legal",
      services: [
        { href: "/leistungen/energieberatung", label: "Energy consulting" },
        { href: "/leistungen/markteintritt-afrika", label: "Africa market entry" }
      ],
      links: [
        { href: "/impressum", label: "Legal notice" },
        { href: "/datenschutz", label: "Privacy" }
      ],
      rights: "SIFK GmbH"
    },
    contactForm: {
      fields: {
        name: "Name",
        namePlaceholder: "First and last name",
        company: "Company",
        companyPlaceholder: "Company or organisation",
        email: "Email",
        emailPlaceholder: "name@company.com",
        topic: "What is it about?",
        message: "Your project",
        messagePlaceholder: "What are you planning, by when, and where should we help?",
        optional: "optional"
      },
      options: [
        { value: "international", label: "Market entry Africa" },
        { value: "energie", label: "Energy consulting" },
        { value: "cloody", label: "Cloody and partnerships" },
        { value: "allgemein", label: "Something else" }
      ],
      submit: "Send message",
      sending: "Sending …",
      disclaimer: "We only use your details to answer your inquiry.",
      privacyLink: "Privacy",
      successTitle: "Thank you, your message has arrived.",
      successText: "We'll get back to you personally.",
      successAgain: "Write another message",
      error:
        "Your message was not sent. Please try again or email us directly at info@sifk.de.",
      invalidEmail: "Please check the email address, for example name@company.com.",
      required: "Please fill in this field."
    }
  }
};
