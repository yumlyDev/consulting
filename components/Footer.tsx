import "./footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copy">
          © 2026 | Yumly IT Consulting. Todos los derechos reservados.
        </p>

        <nav className="footer-links">
          <Link href="/avisolegal">Aviso Legal</Link>
          <Link href="/terminos">Términos y Privacidad</Link>
        </nav>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/company/consulting-yumly"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/linkedin.svg" alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/yumly_consulting/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src="/instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}