"use client"; // Necesario para usar usePathname

import { usePathname } from "next/navigation"; // Cambiado de react-router-dom
import "./OcasoBanner.css";

const OcasoBanner = () => {
  const pathname = usePathname(); // Reemplaza a useLocation
  const rutasPermitidas = [
    "/servicios",
    "/soluciones",
    "/dev",
    "/gestion",
    "/infraestructura",
  ];

  if (!rutasPermitidas.includes(pathname)) {
    return null;
  }

  return (
    <div className="ocaso-sidebar-banner">
      <div className="ocaso-badge">Socio Comercial</div>
      <h4>Asegura tus bienes</h4>
      <p>
        Protección integral para tu infraestructura y activos digitales con el
        respaldo de líderes del sector.
      </p>

      <ul className="ocaso-features">
        <li>🛡️ Proteccion de Inmuebles</li>
        <li>💼 Responsabilidad Civil</li>
        <li>🏢 Protección de Equipos</li>
      </ul>

      <button
        className="ocaso-btn"
        // En Next.js, lo ideal es usar el componente Link para navegación interna,
        // pero para un botón fuera de un Link, esto funciona:
        onClick={() => (window.location.href = "/contacto")}
      >
        Más información <span>→</span>
      </button>
    </div>
  );
};

export default OcasoBanner;
