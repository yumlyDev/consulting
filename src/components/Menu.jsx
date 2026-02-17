import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // 🔹 Cierra el menú cada vez que cambie la ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="cabeceraaback">
      <img className="logo" src="/logo.png" alt="Logo" />

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav className={`menu ${menuOpen ? "open" : ""}`}>
        <Link to="/">Inicio</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/servicios#soluciones">Soluciones</Link>
        <Link to="/about">Sobre nosotros</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/sesion">Iniciar sesión</Link>
      </nav>
    </header>
  );
}

export default Menu;
