"use client";

import React from "react";
import MenuAdmin from "@/components/menuadministracion/menuadmin"; // O la ruta de importación que uses
import "./admin.css";
import Link from "next/link";
export default function AdminPanelPage() {
  return (
    <div className="admin-wrapper">
      <header className="admin-header">
        <h1>
          Panel de Administración | <span>Yumly</span>
        </h1>
        <p>clientes y accesos</p>
      </header>

      <div className="admin-grid">
        <MenuAdmin />
        <div className="admin-card"></div>
      </div>
    </div>
  );
}
