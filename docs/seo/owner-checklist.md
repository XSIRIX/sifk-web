# Owner checklist: getting found outside the website

Stand: 17.11.2026. Work through it top to bottom. Each step says what to do and gives the exact text to copy.

**Use this one form everywhere.** Same spelling, same order, every time:

```
SIFK GmbH, Carl-Benz-Straße 4, 69198 Schriesheim, +49 6203 9375175, https://www.sifk.de
```

Search engines trust a firm more when name, address and phone match on every site.

---

## 1. Google Business Profile

This is the free listing that puts SIFK on Google Maps. Today there is none.

1. Go to https://business.google.com and create or claim the profile.
2. **Name:** exactly `SIFK GmbH`. Never add words such as "Energieberatung Heidelberg" to the name. Google forbids it and can suspend the profile.
3. **Main category:** `Energieberatung`.
4. **Extra categories:** `Unternehmensberater` and `Berater für internationalen Handel`. Check that these labels exist in Google's own list when you type them; pick the closest match if they differ.
5. **Address:** Carl-Benz-Straße 4, 69198 Schriesheim. Show it only if the office is staffed and can receive clients during the hours you post, even by appointment. If not, choose "service-area business" and hide the address.
6. **Never** use a virtual office in Mannheim or Heidelberg to rank there. It is the biggest suspension risk.
7. **Phone:** +49 6203 9375175. **Website:** https://www.sifk.de
8. **Description** (German, 603 characters, every sentence is already on the website):

   ```
   SIFK GmbH ist eine Beratung aus Schriesheim bei Heidelberg mit zwei Geschäftsfeldern. Energieberatung in Deutschland: Energieaudits nach DIN EN 16247, Bewertung von Nichtwohngebäuden nach DIN V 18599, Maßnahmenpläne mit Kosten, Einsparung und Amortisation sowie Hinweise zu Förderprogrammen. Markteintritt in Afrika: Marktvalidierung, strategische Partnerschaften, Projektbegleitung vor Ort und interkulturelle Abstimmung. SIFK arbeitet mit eigenem Team in sieben Ländern und verbindet technische Analyse mit wirtschaftlicher Priorisierung. Im Erstgespräch klären wir, wo wir ansetzen und was es kostet.
   ```

   Once you have approved the voucher claims in `docs/seo/claims.md`, you may add this sentence at the end. It brings the text to 699 characters; Google allows 750. `SIFK ist ein vom BAFA gelistetes Beratungsunternehmen im Rahmen der Beratungsgutscheine Afrika.`

9. **Services** (the eight services on `/leistungen`):
   - Markteintritt und Marktvalidierung
   - Strategische Partnerschaften
   - Projektbegleitung und Stakeholder-Koordination
   - Interkulturelle Abstimmung
   - Energieaudit nach DIN EN 16247
   - Nichtwohngebäude nach DIN V 18599
   - Maßnahmenplan mit Kosten, Einsparung und Amortisation
   - Hinweise zu Förderprogrammen
10. **Pictures:** the logo only. You decided against office photos.
11. **Verification:** Google usually asks for a short private video before the listing goes live. It shows the street, the building, a sign and something that proves the business, such as the office door or business papers. Eleven other firms share this address, so a visible SIFK sign at the entrance will likely be needed.
12. Once the profile is live, send me its link. It goes into the company data on the website.

## 2. Fix wrong entries

**BAFA adviser list.** SIFK is entry no. 186 on the list for Beratungsgutscheine Afrika, but the entry links to sifk.eu. Send this e-mail to `poststelle@bafa.bund.de` (BAFA, Referat 414):

```
Betreff: Beratungsgutscheine Afrika – Änderung der Website, Listungsnummer 186

Sehr geehrte Damen und Herren,

in der Liste der Beratungsunternehmen/Beratungsorganisationen des Förderprogramms „Beratungsgutscheine Afrika“ ist die SIFK GmbH unter der Listungsnummer 186 geführt. Als Website ist dort http://www.sifk.eu angegeben.

Bitte ändern Sie die Website in https://www.sifk.de. Alle übrigen Angaben bleiben unverändert.

Vielen Dank und freundliche Grüße

[Name]
SIFK GmbH
Carl-Benz-Straße 4
69198 Schriesheim
+49 6203 9375175
https://www.sifk.de
```

**fachrat.de.** SIFK is listed as an energy adviser in Schriesheim, but without a website or phone. Add both: https://fachrat.de/energieberater/schriesheim/

**auftragsbank.de.** The entry still shows the old name "Süddeutsches Institut für Klimaschutz" and house number 3. Ask them to correct it to the one form above, or to remove it: https://www.auftragsbank.de/firmen/sueddeutsches-institut-fuer-klimaschutz-sifk-gmbh/101800

## 3. Basic listings

One afternoon. Use the one form above on each.

- Bing Places (it can import the Google profile once that is live)
- Apple Business
- Gelbe Seiten
- Das Örtliche
- 11880
- Cylex
- Wer liefert was
- Stadt Schriesheim business directory: https://www.schriesheim.de/branchenverzeichnis

## 4. LinkedIn company page

Create one named `SIFK GmbH`, with the same address, phone and website. Decide who runs it. Send me its link once it exists; it goes into the company data on the website.

## 5. Reviews

- Ask every client in person at the last meeting of a project, or on paper.
- Ask by e-mail only if the client has agreed to that separately beforehand. German law treats an e-mail review request as advertising (BGH VI ZR 225/17).
- No rewards. Do not ask only the happy clients. No reviews from staff.
- Reply to every review within a few days, in the reviewer's language, without project details.
- A sensible aim: 10 to 20 genuine reviews with text in 6 to 12 months.

## 6. Domains

sifk.de and sifk.eu forward to https://www.sifk.de with a temporary redirect today. In Vercel, under the project's Domains, set both to redirect permanently to `www.sifk.de`.

## 7. Search Console and Bing Webmaster Tools

1. Google Search Console: confirm you can open the property for https://www.sifk.de. If not, verify it.
2. Export the "Performance" report for the last three months as a baseline. Keep the file.
3. Submit the new page: URL inspection → `https://www.sifk.de/beratungsgutscheine-afrika` → "Request indexing".
4. Run the live URL test on three pages: `https://www.sifk.de/`, `https://www.sifk.de/leistungen` and `https://www.sifk.de/beratungsgutscheine-afrika`. Open "View tested page" → screenshot and HTML. The headlines and text must be visible. They fade in with animation, so this confirms Google sees them. Tell me if any text is missing.
5. Bing Webmaster Tools: https://www.bing.com/webmasters. Use "Import from Google Search Console". Then submit `https://www.sifk.de/sitemap.xml`.

## 8. Official energy lists

Only if the firm's people qualify. Tell me who does; until then the website makes no such claim.

- **BAFA list of energy auditors.** Registration is personal and required by law for mandatory energy audits. Appearing on the public list is optional. If someone is registered, the correct wording is "beim BAFA registrierter Energieauditor" (BAFA registers, it does not certify).
- **dena Energieeffizienz-Expertenliste.** Required for consulting funded by the BAFA programme for non-residential buildings (EBN).

## 9. Cloody

"Cloody" is a registered EU trade mark (EUTM 017969024) for online marketplace services, owned by NRG GmbH in Brühl, now in liquidation. Whether that company is linked to SIFK is not known. Have a lawyer check it before any promotion of the Cloody name.

## 10. Monthly check

Search each term on Google once a month and note whether sifk.de is on page one. This is the state on 17.11.2026, read once from the Heidelberg area:

| Search | sifk.de on page 1? | Who was on top |
|---|---|---|
| Energieaudit Schriesheim | No | Heid's Schriesheim page, Stadt Schriesheim, energie-bw.com, MVV |
| Energieberatung Unternehmen Heidelberg | No | Maps box: Heidelberger Energieberater GbR (21 reviews), KLiBA (7), Energieberatung Grabner (5) |
| Energieaudit Mannheim | No | MVV, IHK, FS Energieberater, BAFA |
| Energieaudit DIN EN 16247 Rhein-Neckar | No | Out-of-region PDFs and blogs; no Rhein-Neckar provider |
| Markteintritt Afrika Beratung | No | Ministry voucher page, AHK, trAIDe (3rd), GTAI, IHK, BAFA |
| Afrika Beratung Heidelberg | No | City offices and charities; no business consultancy |
| Geschäftsentwicklung Afrika Beratung | No | Voucher pages, Africa Business Guide, GIZ, InterGest |
| Markteintritt Ghana Beratung | No | Africa Business Guide, startfinder, InterGest |

## 11. Facts we need from you

Where a fact is missing, the website leaves the claim out. Nothing is guessed.

| Fact | Used for | If missing |
|---|---|---|
| OK to state "BAFA-gelistet" with listing no. 186 | Voucher and Africa pages | The page says "gelistetes Beratungsunternehmen" without the number |
| Which countries to name beside the listing's own (the list names Äthiopien, Kenia, Madagaskar, Nigeria, Uganda, Senegal; the site names Ghana, Sambia, Uganda, Kenia, Äthiopien, Tansania) | Voucher page | Voucher page names only Uganda, Kenia, Äthiopien plus "Ostafrika und Subsahara" |
| Whether team members are BAFA-registered auditors or on the dena list | Energy page credentials | No credential claim |
| Opening hours | Kontakt page, company data | Left out |
| Google profile URL and LinkedIn URL, once they exist | Company data | Left out |
| Search Console and Bing verification codes | Measurement | No tag rendered |

Also: a yes or no on each row of `docs/seo/claims.md`. The voucher page does not go live until every row is a yes.
