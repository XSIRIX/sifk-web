type OpeningHours = Array<{
  /** schema.org day names, e.g. "Monday". */
  days: string[];
  /** HH:MM */
  opens: string;
  closes: string;
}>;

type CompanyFacts = {
  name: string;
  street: string;
  postalCode: string;
  city: string;
  /** ISO 3166-2 subdivision code without the country: Baden-Württemberg. */
  region: string;
  country: string;
  /** From OpenStreetMap (building at Carl-Benz-Straße 4), six decimals. The owner checks the pin against Google Maps. */
  geo: { latitude: number; longitude: number };
  phoneDisplay: string;
  phoneInternational: string;
  phoneHref: string;
  email: string;
  managingDirector: string;
  court: string;
  register: string;
  url: string;
  mapUrl: string;
  // Owner facts. Left unset until the owner gives them; unset fields are left out everywhere.
  openingHours?: OpeningHours;
  googleProfileUrl?: string;
  linkedinUrl?: string;
};

// Facts already published in the legal notice. One source for every page.
export const company: CompanyFacts = {
  name: "SIFK GmbH",
  street: "Carl-Benz-Straße 4",
  postalCode: "69198",
  city: "Schriesheim",
  region: "BW",
  country: "DE",
  geo: { latitude: 49.466327, longitude: 8.663783 },
  phoneDisplay: "06203 9375175",
  phoneInternational: "+49 6203 9375175",
  phoneHref: "tel:+4962039375175",
  email: "info@sifk.de",
  managingDirector: "Pheeraphon Karch",
  court: "Amtsgericht Mannheim",
  register: "HRB 750493",
  url: "https://www.sifk.de",
  // A plain search link: no embedded map, so no consent is needed.
  mapUrl: "https://www.google.com/maps/search/?api=1&query=SIFK+GmbH%2C+Carl-Benz-Stra%C3%9Fe+4%2C+69198+Schriesheim"
};
