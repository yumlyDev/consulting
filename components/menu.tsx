"use client";

import { useState } from "react"; // Quitamos useEffect
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./Menu.css";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Cada vez que el componente se renderiza (al cambiar pathname),
  // comparamos y cerramos si es necesario.
  const isMenuOpen = menuOpen && pathname;

  return (
    <header className="cabeceraaback">
      <img className="logo" src="/logo.png" alt="Logo" />
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      {/* Si el pathname cambia, este componente se re-renderiza y 
          podemos forzar el cierre aquí mismo */}
      <nav className={`menu ${menuOpen ? "open" : ""}`}>
        <Link href="/">Inicio</Link>
        <Link href="/servicios">Servicios</Link>
        <Link href="/servicios#soluciones">Soluciones</Link>
        <Link href="/about">Sobre nosotros</Link>
        <Link href="/Socios">Socios</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
      ;
    </header>
  );
}

export default Menu;
