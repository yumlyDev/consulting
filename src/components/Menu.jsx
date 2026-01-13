import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li className="submenu-hover">
          <Link to="/resumen">Experiencia</Link>

          <ul className="submenu">
            <li>
              <Link to="/sistemas">Sistemas</Link>
            </li>
            <li>
              <Link to="/desarrollador">Desarrollador</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/acerca">Sobre mí</Link>
        </li>

        <li>
          <Link to="/estudios">Estudios</Link>
        </li>

        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
