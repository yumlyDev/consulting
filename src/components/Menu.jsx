import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <header className="cabeceraaback">
      <div>
        <img className="logo" src="/logo.png" alt="Logo" />
      </div>

      <nav className="menu">
        <Link to="/">Inicio</Link>
        <a href="#servicios">Servicios</a>
        <a href="#soluciones">Soluciones</a> 
         <a href="#nosotros">Sobre nosotros</a>
        <a href="#contact">Contacto</a>
        <Link to="/sesion">Iniciar sesión</Link>
      </nav>
    </header>
   
  );
}

export default Menu;
