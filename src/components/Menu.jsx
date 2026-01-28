import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <header className="cabeceraaback">
      <img className="logo" src="/logo.png" alt="Logo" />

      <nav className="menu">
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
