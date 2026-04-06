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
      sending: string;
      disclaimer: string;
      success: string;
      error: string;
    };
  }
> = {
  de: {
    navigation: [
      { href: "/leistungen", label: "Leistungen" },
      { href: "/unser-team", label: "Unser Team" },
      { href: "/ueber-uns", label: "Über uns" },
      { href: "/cloody", label: "Cloody" }
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
      submit: "Anfrage senden",
      sending: "Wird gesendet …",
      disclaimer:
        "Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.",
      success:
        "Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.",
      error:
        "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
    }
  },
  en: {
    navigation: [
      { href: "/leistungen", label: "Services" },
      { href: "/unser-team", label: "Team" },
      { href: "/ueber-uns", label: "About" },
      { href: "/en/cloody", label: "Cloody" }
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
      submit: "Send inquiry",
      sending: "Sending …",
      disclaimer:
        "Your data will only be used to process your inquiry.",
      success:
        "Thank you for your message. We will get back to you shortly.",
      error:
        "Something went wrong. Please try again."
    }
  }
};
