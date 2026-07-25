"use client";

import { usePathname } from "next/navigation";
import "./OcasoBanner.css";

export default function OcasoBanner() {
  const pathname = usePathname();

  const rutasPermitidas: string[] = [
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
        onClick={() => (window.location.href = "/contacto")}
      >
        Más información <span>→</span>
      </button>
    </div>
  );
}
