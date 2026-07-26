"use client";

import React from "react";
import { crearClienteAction, darDeBajaClienteAction } from "./actions";
import "./admin.css";

export default function AdminPanelPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await crearClienteAction(formData);
    if (result.success) {
      alert(result.message);
      (e.target as HTMLFormElement).reset();
    } else {
      alert("Error: " + result.error);
    }
  };

  const handleBaja = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await darDeBajaClienteAction(formData);
    if (result.success) {
      alert(result.message);
      (e.target as HTMLFormElement).reset();
    } else {
      alert("Error: " + result.error);
    }
  };

  return (
    <div className="admin-wrapper">
      <header className="admin-header">
        <h1>
          Panel de Administración | <span>Yumly</span>
        </h1>
        <p>Gestión de altas de clientes y accesos</p>
      </header>

      <div className="admin-grid">
        <div className="admin-card">
          <h2>Dar de Alta Nuevo Cliente</h2>
          <form onSubmit={handleSubmit} className="admin-form">
            <div className="input-group">
              <label>Nombre de la Empresa</label>
              <input
                type="text"
                name="nombre_empresa"
                placeholder="Ej. Transportes SL"
                required
              />
            </div>

            <div className="input-group">
              <label>Correo Electrónico (Login)</label>
              <input
                type="email"
                name="email"
                placeholder="cliente@correo.com"
                required
              />
            </div>

            <div className="input-group">
              <label>Contraseña Provisional</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="input-group">
              <label>CIF / NIF</label>
              <input type="text" name="cif" placeholder="B12345678" />
            </div>

            <div className="input-group">
              <label>Cuota Mensual (€)</label>
              <input
                type="number"
                step="0.01"
                name="cuota_mensual"
                defaultValue="150.00"
                required
              />
            </div>

            <button type="submit" className="neon-button">
              Crear Cliente
            </button>
          </form>
        </div>

        <div className="admin-card">
          <h2>Dar de Baja Cliente</h2>
          <form onSubmit={handleBaja} className="admin-form">
            <div className="input-group">
              <label>CIF / NIF del Cliente</label>
              <input type="text" name="cif" placeholder="B12345678" required />
            </div>

            <button
              type="submit"
              className="neon-button"
              style={{ background: "#ef4444" }}
            >
              Dar de Baja
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
