import Link from "next/link";
import "./menuadmin.css"; // O los estilos que utilices

export default function MenuAdmin() {
  return (
    <nav className="admin-menu">
      <ul>
        <li>
          <Link href="/crm/altas-bajas">Altas y Bajas</Link>
        </li>
        <li>
          <Link href="/crm/cartera">Cartera de Clientes</Link>
        </li>
        <li>
          <Link href="/crm/actividad">actividad</Link>
        </li>
      </ul>
    </nav>
  );
}
