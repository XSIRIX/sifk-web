import type { Locale } from "@/lib/locale-routing";

export const sharedCopy: Record<
  Locale,
  {
    navigation: Array<{ href: string; label: string }>;
    header: {
      contactLabel: string;
      navAriaLabel: string;
      toggleLabel: string;
      localeLabel: string;
    };
    footer: {
      kicker: string;
      copy: string;
      links: Array<{ href: string; label: string }>;
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
      };
      options: Array<{ value: string; label: string }>;
      submit: string;
      disclaimer: string;
      success: string;
    };
  }
> = {
  de: {
    navigation: [
      { href: "/leistungen", label: "Leistungen" },
      { href: "/unser-team", label: "Unser Team" },
      { href: "/ueber-uns", label: "Über uns" }
    ],
    header: {
      contactLabel: "Kontakt",
      navAriaLabel: "Hauptnavigation",
      toggleLabel: "Navigation umschalten",
      localeLabel: "ENGLISH"
    },
    footer: {
      kicker: "SIFK GmbH",
      copy:
        "Internationale Geschäftsentwicklung mit Fokus auf Afrika und Energieberatung für Unternehmen in Deutschland.",
      links: [
        { href: "/kontakt", label: "Kontakt" },
        { href: "/impressum", label: "Impressum" },
        { href: "/datenschutz", label: "Datenschutz" }
      ]
    },
    contactForm: {
      fields: {
        name: "Name",
        namePlaceholder: "Ihr Name",
        company: "Unternehmen",
        companyPlaceholder: "Organisation oder Firma",
        email: "E-Mail",
        emailPlaceholder: "name@unternehmen.de",
        topic: "Anliegen",
        message: "Projekt oder Fragestellung",
        messagePlaceholder:
          "Beschreiben Sie kurz Ihr Vorhaben, den Kontext und den gewünschten nächsten Schritt."
      },
      options: [
        { value: "international", label: "Internationale Geschäftsentwicklung" },
        { value: "energie", label: "Energieberatung Deutschland" },
        { value: "allgemein", label: "Allgemeine Anfrage" }
      ],
      submit: "Anfrage vorbereiten",
      disclaimer:
        "Formularversand ist im Boilerplate bewusst noch nicht an eine Inbox angebunden.",
      success:
        "Danke. Die Struktur steht; als Nächstes kann das Formular an die gewünschte E-Mail oder ein CRM angebunden werden."
    }
  },
  en: {
    navigation: [
      { href: "/leistungen", label: "Services" },
      { href: "/unser-team", label: "Team" },
      { href: "/ueber-uns", label: "About" }
    ],
    header: {
      contactLabel: "Contact",
      navAriaLabel: "Main navigation",
      toggleLabel: "Toggle navigation",
      localeLabel: "DEUTSCH"
    },
    footer: {
      kicker: "SIFK GmbH",
      copy:
        "International business development with a focus on Africa and energy consulting for companies in Germany.",
      links: [
        { href: "/kontakt", label: "Contact" },
        { href: "/impressum", label: "Legal notice" },
        { href: "/datenschutz", label: "Privacy" }
      ]
    },
    contactForm: {
      fields: {
        name: "Name",
        namePlaceholder: "Your name",
        company: "Company",
        companyPlaceholder: "Organisation or company",
        email: "Email",
        emailPlaceholder: "name@company.com",
        topic: "Topic",
        message: "Project or request",
        messagePlaceholder:
          "Briefly describe your project, the context, and the next step you want to take."
      },
      options: [
        { value: "international", label: "International business development" },
        { value: "energie", label: "Energy consulting Germany" },
        { value: "allgemein", label: "General inquiry" }
      ],
      submit: "Prepare inquiry",
      disclaimer:
        "In this boilerplate, form submission is intentionally not yet connected to an inbox.",
      success:
        "Thanks. The structure is in place; next, the form can be connected to your preferred email destination or CRM."
    }
  }
};
