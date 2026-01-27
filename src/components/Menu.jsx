import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <header className="cabeceraaback">
      <img className="logo" src="/logo.png" alt="Logo" />

      <nav className="menu">
        <Link to="/">Inicio</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/soluciones">Soluciones</Link>
        <Link to="/nosotros">Sobre nosotros</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/sesion">Iniciar sesión</Link>
      </nav>
    </header>
  );
}

export default Menu;
