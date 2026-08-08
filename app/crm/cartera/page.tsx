// app/crm/cartera/page.tsx
import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export default async function CarteraPage() {
  // 1. Cliente con permisos totales de administrador
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    },
  );

  // 2. Traemos todos los clientes sin restricciones de RLS
  const { data: clientes, error } = await supabaseAdmin
    .from("clientes")
    .select("*")
    .order("nombre_empresa", { ascending: true });

  return (
    <div className="admin-wrapper">
      <h1>Cartera de Clientes</h1>
      {error ? (
        <p>Error cargando datos: {error.message}</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Email</th>
              <th>CIF</th>
              <th>Cuota (€)</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {clientes?.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.nombre_empresa}</td>
                <td>{cliente.email}</td>
                <td>{cliente.cif || "N/A"}</td>
                <td>{cliente.cuota_mensual}</td>
                <td>
                  <span
                    className={
                      cliente.activo ? "badge-active" : "badge-inactive"
                    }
                  >
                    {cliente.activo ? "Activo" : "Baja"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
