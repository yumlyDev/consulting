import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import "./crm.css";

export default async function ClientCrmDashboard() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll() {},
      },
    },
  );

  // 1. Obtener el usuario autenticado actual
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/"); // Si no está logueado, fuera
  }

  // 2. Si eres tú (el admin) intentando entrar aquí por error, te mandamos a tu panel de administración
  if (user.email === "alejandroherrera@yumly.es") {
    redirect("/crm/administracion");
  }

  // 3. Consultar los datos de la empresa/cliente en la base de datos usando el email del usuario
  // (Asegúrate de que tu tabla de clientes tenga una columna 'email' que coincida con el login)
  const { data: clienteData, error: dbError } = await supabase
    .from("clientes") // Cambia "clientes" por el nombre real de tu tabla en Supabase
    .select("*")
    .eq("email", user.email)
    .single();

  if (dbError || !clienteData) {
    return (
      <div className="crm-wrapper">
        <p style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
          No se han encontrado datos de cliente asociados a este usuario.
        </p>
      </div>
    );
  }

  return (
    <div className="crm-wrapper">
      <header className="crm-header">
        <h1>
          Área de Cliente | <span>Yumly Consulting</span>
        </h1>
        <p>Bienvenido, {clienteData.nombre_empresa}</p>
      </header>

      <div className="crm-grid">
        {/* Tarjeta de Estado de Facturación */}
        <div className="crm-card billing-card">
          <h2>Estado de Facturación</h2>
          <div className="billing-info">
            <div>
              <span className="label">Cuota mensual:</span>
              <span className="value">{clienteData.cuota_mensual} €</span>
            </div>
            <div>
              <span className="label">Estado:</span>
              <span
                className={`status-badge ${clienteData.estado_pago === "Pagado" ? "paid" : "pending"}`}
              >
                {clienteData.estado_pago || "Pendiente"}
              </span>
            </div>
          </div>
          <button className="neon-button">Ver Facturas</button>
        </div>

        {/* Acciones Aplicadas (puedes consultar otra tabla relacionada si guardas las tareas ahí) */}
        <div className="crm-card actions-card">
          <h2>Acciones Aplicadas este Mes</h2>
          <div className="table-responsive">
            <table className="actions-table">
              <thead>
                <tr>
                  <th>Acción / Tarea</th>
                  <th>Categoría</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {/* Aquí puedes hacer un map() si cargas las tareas de otra tabla vinculada al cliente */}
                <tr>
                  <td>Mantenimiento y soporte general</td>
                  <td>
                    <span className="cat-tag">Soporte</span>
                  </td>
                  <td>-</td>
                  <td>
                    <span className="action-status done">Activo</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
