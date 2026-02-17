import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copy">
          © 2025 Yumly. Todos los derechos reservados.
        </p>
        <nav className="footer-links">
          <Link to="/avisolegal">Aviso Legal</Link>
          <Link to="/terminos">Términos Legales</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
