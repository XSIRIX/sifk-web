import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-kicker">SIFK GmbH</p>
          <p className="footer-copy">
            Internationale Geschäftsentwicklung mit Fokus auf Afrika und
            Energieberatung für Unternehmen in Deutschland.
          </p>
        </div>

        <div className="footer-links">
          <Link href="/kontakt">Kontakt</Link>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
