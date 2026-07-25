"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; // Importamos el componente optimizado
import "./Menu.css";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="cabeceraaback">
      <Link href="/">
        <Image
          className="logo"
          src="/logo.png"
          alt="Logo"
          width={95}
          height={80}
          priority
        />
      </Link>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav className={`menu ${menuOpen ? "open" : ""}`}>
        <Link href="/">Inicio</Link>
        <Link href="/servicios">Servicios</Link>
        <Link href="/servicios#soluciones">Soluciones</Link>
        <Link href="/about">Sobre nosotros</Link>
        <Link href="/Socios">Socios</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}

export default Menu;
