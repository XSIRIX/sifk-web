# PRD — SIFK GmbH Website

## 1. Produktziel

Entwicklung einer hochwertigen Unternehmenswebsite für **SIFK GmbH**, die zwei Leistungsfelder klar, glaubwürdig und elegant unter einer Marke zusammenführt:

1. **Internationale Geschäftsentwicklung mit Fokus auf Afrika**
2. **Energieberatung für Unternehmen und Nichtwohngebäude in Deutschland**

Die Website soll nicht wie eine austauschbare Consulting-Seite wirken. Sie soll strategische Klarheit mit einer eigenständigen visuellen Identität verbinden und dadurch Vertrauen, Relevanz und Kontaktanfragen erzeugen.

---

## 2. Produktentscheidung

### Sprache

- **Primärsprache:** Deutsch
- **Englisch:** Phase 2
- Die Website wird technisch direkt **i18n-ready** gedacht, auch wenn Inhalte in Version 1 nur auf Deutsch veröffentlicht werden.

### CMS

- **Sanity** als Headless CMS
- Gründe:
  - Inhalte später selbst pflegbar
  - sauber für strukturierte Services, Unternehmensinhalte und Kontaktinformationen
  - gute Basis für spätere Mehrsprachigkeit
  - passend für Next.js App Router

---

## 3. Primäre Ziele

- In wenigen Sekunden verständlich machen, **was SIFK macht**
- Die zwei Geschäftsfelder klar trennen, aber strategisch miteinander verbinden
- Eine internationale, seriöse und hochwertige Wahrnehmung aufbauen
- Vertrauen ohne laute Selbstdarstellung erzeugen
- Kontaktanfragen für beide Leistungsbereiche fördern
- Eine inhaltlich pflegbare Basis für Wachstum schaffen
- Die Website konsequent für **Desktop und Mobile** optimieren, statt die mobile Version nur als verkleinerte Desktop-Ansicht zu behandeln

---

## 4. Marken- und Designpositionierung

### Gewünschte Wirkung

- souverän
- klar
- hochwertig
- international
- beratungsnah
- modern
- ruhig und präzise

### Was vermieden werden soll

- generische B2B-Consulting-Optik
- sterile Corporate-Blau-Layouts
- beliebige Icon-Kacheln
- überladene Effekte
- stockige “Africa = Safari”-Bildsprache

### Leitidee

**Verbindung als Marke.**

SIFK steht nicht nur für zwei Services, sondern für das aktive Verbinden von:

- Märkten
- Partnern
- Projekten
- Energie und Effizienz
- Deutschland und Afrika

Diese Idee soll sich nicht nur in Texten, sondern auch in Layout, Bildsprache, Übergängen und Navigation zeigen.

### Empfohlene visuelle Richtung

Eine **editorial geprägte Premium-B2B-Ästhetik**:

- warme, mineralische Farbtöne statt klassischem Corporate-Blau
- markante Serifenschrift für Headings, ruhige Sans-Serif für Lesetexte
- großzügige Weißräume mit asymmetrischer Komposition
- starke Bildflächen statt kleiner Dekoelemente
- dezente Linien, Raster oder “Atlas/Route”-Motive als verbindendes Designsignal
- ruhige Motion statt “wow um jeden Preis”

### Referenz-Denke

- **africon.de** als Referenz für Struktur, Beratungscharakter und Klarheit
- **archidomo.fr** als Referenz für Inszenierung, Atmosphäre und elegante Scroll-Dynamik

Ziel ist nicht eine Mischung beider Seiten, sondern ein klar eigener Ausdruck:

> Consulting-grade Struktur mit editorialer Präsenz und internationaler Ausstrahlung.

---

## 5. Kernbotschaft

SIFK ist eine strategische Brücke zwischen Deutschland und Afrika und verbindet:

- internationale Geschäftsentwicklung
- Markterschließung und Partnerschaftsaufbau
- wirtschaftliche Projektbegleitung
- mit professioneller Energieberatung für Unternehmen in Deutschland

Die Marke soll dabei **kompetent, verbindlich und zukunftsorientiert** auftreten.

---

## 6. Zielgruppen

### Geschäftsfeld Internationale Geschäftsentwicklung / Afrika

- deutsche und europäische Unternehmen mit Afrika-Interesse
- Unternehmen mit Expansions-, Vertriebs- oder Kooperationszielen
- Projektpartner, Investoren, Verbände und Institutionen

### Geschäftsfeld Energieberatung Deutschland

- Unternehmen mit Effizienz- oder Transformationsbedarf
- Eigentümer gewerblicher Immobilien
- Betreiber von Nichtwohngebäuden
- Organisationen mit Förder- oder Sanierungsinteresse

### UX-Schlussfolgerung

Die Website muss zwei Dinge gleichzeitig leisten:

1. **schnelle Orientierung**, damit Besucher sofort ihren relevanten Bereich finden
2. **gemeinsame Markenlogik**, damit die Website nicht wie zwei getrennte Unternehmen wirkt

---

## 7. UX-Strategie

### Zentrales UX-Problem

Wenn beide Leistungen gleich zu Beginn nur nebeneinander genannt werden, besteht die Gefahr, dass die Marke unklar wirkt.

### UX-Antwort

Die Startseite soll in drei aufeinander aufbauenden Schritten erzählen:

1. **Wofür SIFK grundsätzlich steht**
2. **Welche zwei Leistungsfelder es gibt**
3. **Warum diese Kombination strategisch sinnvoll ist**

### UX-Prinzipien

- klare Hierarchie vor Vollständigkeit
- schnelle Orientierung für Erstbesucher
- Storytelling nur dort, wo es Verständnis oder Wertigkeit erhöht
- CTAs nicht generisch, sondern kontextbezogen
- zwei Zielgruppen, aber ein gemeinsames Qualitätsversprechen
- responsives Verhalten ist Teil des Konzepts: Layout, Typografie, Bildzuschnitte und Interaktionen müssen sich bewusst an PC und Mobile anpassen

### CTA-Logik

Nicht nur ein allgemeines “Kontakt aufnehmen”, sondern je nach Kontext differenzierte Handlungsangebote:

- **Markterschließung besprechen**
- **Energieberatung anfragen**
- **Leistungen ansehen**
- **Erstgespräch vereinbaren**

---

## 8. Seitenstruktur

### MVP

1. **Startseite**
2. **Leistungen**
3. **Über uns**
4. **Kontakt**

### Phase 2

- Englische Version
- Referenzen / Projekte
- Insights / Blog
- Partner- oder Netzwerkdarstellung

---

## 9. Informationsarchitektur

### Startseite

Aufgabe:

- Positionierung
- erste Differenzierung
- Routing zu beiden Leistungsfeldern
- Vertrauensaufbau
- Kontaktimpuls

### Leistungen

Aufgabe:

- beide Leistungsbereiche klar strukturieren
- konkrete Leistungen scanbar machen
- Prozess und Beratungslogik erklären

### Über uns

Aufgabe:

- Mission, Haltung und Arbeitsweise zeigen
- erklären, warum SIFK diese Brückenrolle glaubwürdig einnehmen kann

### Kontakt

Aufgabe:

- Hürde für Anfragen senken
- Kontaktwege klar machen
- Nutzer direkt zum passenden Anliegen führen

---

## 10. Startseite — optimierte Struktur

### 1. Hero

**Ziel:** sofortige Positionierung, aber ohne Überinformation.

Inhalt:

- starke Headline mit Brücken- / Verbindungslogik
- Subline, die beide Geschäftsfelder sauber zusammenführt
- primäre CTA
- sekundäre CTA
- großformatiges Key Visual mit internationaler, urbaner, wirtschaftlicher Stimmung

Empfehlung:

- links oder leicht versetzt gesetzter Textblock
- visuelle Spannung durch Tiefenebenen, nicht durch laute Effekte
- subtile Bewegung im Hintergrund

Beispielrichtung:

- **Verbindungen schaffen, die Märkte in Bewegung bringen**
- **Internationale Geschäftsentwicklung und Energieberatung mit strategischer Klarheit**

### 2. Quick Routing / Audience Split

Direkt nach dem Hero ein klarer Routing-Block:

- **Ich suche Unterstützung für internationale Geschäftsentwicklung**
- **Ich suche Energieberatung für mein Unternehmen**

Nutzen:

- reduziert kognitive Last
- hilft beiden Zielgruppen sofort
- verbessert Orientierung stärker als ein reiner Fließtext-Introblock

### 3. Positionierung

Kurzer, verdichteter Abschnitt:

- Wer ist SIFK?
- Welche Rolle spielt die Verbindung beider Felder?
- Was ist der strategische Mehrwert?

Wichtig:

- eher präzise als lang
- keine Wiederholung des Hero-Textes

### 4. Zwei Geschäftsbereiche

Der zentrale Abschnitt der Startseite.

Die beiden Leistungsfelder werden gleichwertig, aber visuell unterschiedlich inszeniert:

- International / Afrika eher offen, dynamisch, marktbezogen
- Energieberatung eher strukturiert, präzise, systematisch

UX-Ziel:

- Unterschied klar zeigen
- trotzdem eine gemeinsame Markensprache halten

### 5. Story / Differenzierung

Der wichtigste Abschnitt für Einzigartigkeit.

Inhalt:

- Chancen entstehen durch Verbindungen, nicht nur durch Präsenz
- SIFK begleitet zwischen Strategie, Partnerschaft und Umsetzung
- wirtschaftliche Entwicklung und nachhaltige Transformation werden nicht gegeneinander ausgespielt

Gestalterisch:

- größere Bild/Text-Komposition
- mehr Rhythmus als in den anderen Abschnitten
- ruhige, hochwertige Scroll-Erzählung

### 6. Leistungsübersicht

Scanbare Übersicht über konkrete Leistungen:

- Markteintritt
- strategische Partnerschaften
- Projektentwicklung
- Energieaudit DIN EN 16247
- Nichtwohngebäude-Beratung nach DIN V 18599
- Förder- und Effizienzberatung

Ziel:

- Substanz zeigen
- schnell erfassbar bleiben

### 7. Vertrauen / Qualitätsversprechen

Ohne Cases kann Vertrauen zunächst über Positionierungsmerkmale aufgebaut werden:

- strukturierte Beratung
- internationale Vernetzung
- nachhaltige und wirtschaftliche Lösungen
- individuelle Begleitung statt Standardpakete

### 8. Abschluss-CTA

Klarer, warmer Abschluss:

- **Projekt besprechen**
- **Anfrage senden**
- **Erstgespräch vereinbaren**

Nicht zu “verkaufslastig”, sondern beratungsnah.

---

## 11. Leistungen-Seite — optimierte Struktur

### Einstiegsbereich

- kurze Einordnung
- Hinweis, dass SIFK zwei spezialisierte Leistungsfelder unter einer Marke bündelt

### Leistungsfeld 1: Internationale Geschäftsentwicklung

Empfohlene Themen:

- Markterschließung
- strategische Partnerschaften
- Projektanbahnung und Begleitung
- lokale und internationale Vernetzung

### Leistungsfeld 2: Energieberatung Deutschland

Empfohlene Themen:

- Energieaudit DIN EN 16247
- Energieberatung für Nichtwohngebäude nach DIN V 18599
- Contracting-Orientierungsberatung
- Energieverbrauchsanalyse
- wirtschaftliche Effizienzmaßnahmen
- Sanierungs- und Modernisierungsberatung
- Fördermittel- und Zuschussberatung

### Prozesssektion

Empfohlen:

- **Analyse**
- **Strategie**
- **Umsetzung**

Nutzen:

- erhöht Vertrauen
- zeigt Beratungslogik
- macht Leistungen greifbar

---

## 12. Über-uns-Seite — optimierte Struktur

### Ziel

Nicht nur “Unternehmensprofil”, sondern Glaubwürdigkeit und Haltung.

### Inhalte

- Intro: Wer ist SIFK?
- Mission: Brücke zwischen Deutschland und Afrika
- Arbeitsweise: strukturiert, partnerschaftlich, lösungsorientiert
- Haltung: wirtschaftlich fundiert, international vernetzt, nachhaltig denkend

### UX-Hinweis

Die Über-uns-Seite sollte nicht aus langen Fließtextwänden bestehen. Besser:

- klare Textblöcke
- wenige prägnante Aussagen
- visuelle Ruhe
- 1 bis 2 starke Bild- oder Raumakzente

---

## 13. Kontakt-Seite — optimierte Struktur

### Ziel

Kontakt vereinfachen und die Anfrage in den richtigen Kontext lenken.

### Struktur

- kurze Einleitung
- Kontaktformular
- Auswahl des Interessensbereichs
- direkte Kontaktdaten
- optional kurze Erwartungshilfe: “Wir melden uns innerhalb von X Werktagen”

### Formularfelder

- Name
- E-Mail
- Unternehmen
- Anliegen / Nachricht
- Themenbereich

### UX-Empfehlungen

- Formular nicht überfrachten
- klare Feldbezeichnungen
- optional Hilfetext für Themenauswahl
- Bestätigung sollte professionell und knapp sein

---

## 14. Bildsprache

### Soll

- urbane, wirtschaftliche, infrastrukturelle und partnerschaftliche Motive
- hochwertige reale Situationen statt austauschbarer Stock-Symbole
- Architektur, Industrie, Business-Kontexte, Mobilität, Energie
- Bilder mit Raum, Tiefe und Atmosphäre

### Soll nicht

- klischeehafte Afrika-Motive
- rein dekorative Naturbilder ohne Kontext
- austauschbare Handschlag-Stockfotos
- typische “Team im Besprechungsraum lacht in Kamera”-Bilder

---

## 15. Motion-Konzept

### Gewünschte Motion

- sanfte Fade-ins
- leichte Parallax-Effekte
- Bild- und Text-Reveals
- ruhige Scroll-Transitions
- klare Hover-Reaktionen

### Vermeiden

- übertriebene 3D-Effekte
- hektische Bewegungen
- permanente Animation ohne funktionalen Zweck

### Grundregel

Die Website soll lebendig und hochwertig wirken, aber nie wie ein Kreativportfolio.

---

## 16. Technische Anforderungen

### Frontend

- **Next.js**
- **TypeScript**
- **App Router**

### Styling

- **Tailwind CSS** empfohlen
- Mobile-first umsetzen, aber visuell auf **große Desktop-Bühnen** ebenso sorgfältig ausarbeiten

### Animation

- **Framer Motion**
- leichte Parallax-Effekte über Custom Scroll Hooks oder kleine Utility-Lösung

### CMS

- **Sanity**

---

## 17. Content-Modell in Sanity

### `siteSettings`

- Firmenname
- Claim
- Logo
- Kontaktinformationen
- Social Links
- SEO Default

### `homePage`

- Hero Headline
- Hero Copy
- Hero Visual
- Routing-Block
- Intro
- Story Block
- Featured Services
- Trust Points
- CTA Block

### `service`

- Titel
- Bereich (`afrika` | `energie`)
- Kurzbeschreibung
- Langbeschreibung
- Stichpunkte
- Bild
- Reihenfolge

### `aboutPage`

- Intro
- Mission
- Unternehmensbeschreibung
- Werte / Arbeitsweise

### `contactPage`

- Introtext
- Formulartext
- Kontaktdaten
- CTA-Hinweis

### Später optional

- `caseStudy`
- `insight`
- `faq`

---

## 18. Mehrsprachigkeit

### Phase 1

- Inhalte nur auf Deutsch

### Phase 2

- Englisch ergänzen
- Sanity-Schemas so anlegen, dass spätere Lokalisierung sauber möglich ist

Empfehlung für MVP:

- **de-only Content**
- aber **i18n-ready Codebase und Informationsarchitektur**

---

## 19. SEO-Basis

### Relevante Themenfelder

#### Energie

- Energieaudit DIN EN 16247
- Energieberatung Nichtwohngebäude
- Energieeffizienz Unternehmen
- Fördermittel Energieberatung

#### Afrika / International

- Geschäftsentwicklung Afrika
- Markteintritt Afrika
- Strategische Partnerschaften Afrika
- Internationale Projektentwicklung Afrika

### SEO-Hinweis

Die Inhalte sollten fachlich präzise, aber nicht keyword-überladen geschrieben werden. Vertrauen entsteht eher durch klare Spezialisierung als durch SEO-Sprache.

---

## 20. MVP-Scope

Version 1 umfasst:

- Startseite
- Leistungen
- Über uns
- Kontakt
- Sanity CMS
- deutsches Content-Setup
- moderat hochwertige Motion
- responsive Design mit eigener Optimierung für **PC und Mobile**
- SEO-Basis

---

## 21. Erfolgskriterien

- Besucher verstehen die Positionierung innerhalb weniger Sekunden
- beide Leistungsfelder sind klar erkennbar und sauber navigierbar
- die Seite wirkt hochwertig und eigenständig
- Kontaktaufnahme ist niedrigschwellig
- das Design schafft Vertrauen, ohne austauschbar zu wirken
- die Nutzererfahrung bleibt auf Desktop und Mobile gleichermaßen hochwertig, lesbar und intuitiv

---

## 22. Leitformel für die Umsetzung

> Keine generische Beratungswebsite, sondern eine präzise, international wirkende Unternehmenspräsenz mit klarer Struktur, ruhiger Autorität und einer eigenständigen visuellen Handschrift rund um das Thema Verbindung.
