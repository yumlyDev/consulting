import { createClient } from "@supabase/supabase-js";
import MenuAdmin from "@/components/menuadministracion/menuadmin";
export default async function CarteraPage() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );

  const { data: clientes, error } = await supabaseAdmin
    .from("clientes")
    .select("*")
    .order("nombre_empresa", { ascending: true });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#090d16",
        paddingTop: "120px",
        paddingBottom: "3rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        boxSizing: "border-box",
      }}
    >
      {" "}
      <MenuAdmin />
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          backgroundColor: "#0f172a",
          border: "1px solid #1e293b",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
          color: "#f8fafc",
        }}
      >
        <div
          style={{
            marginBottom: "1.5rem",
            borderBottom: "1px solid #1e293b",
            paddingBottom: "1rem",
          }}
        >
          <h1
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              color: "#ffffff",
              margin: "0",
            }}
          >
            Cartera de Clientes
          </h1>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "0.875rem",
              marginTop: "0.25rem",
            }}
          >
            Listado general de cuentas y estados activos
          </p>
        </div>

        {error ? (
          <div
            style={{
              padding: "1rem",
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              color: "#f87171",
              borderRadius: "8px",
              fontSize: "0.875rem",
            }}
          >
            Error cargando datos: {error.message}
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              overflowX: "auto",
              borderRadius: "8px",
              border: "1px solid #1e293b",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
                whiteSpace: "nowrap",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#1e293b",
                    color: "#94a3b8",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  <th
                    style={{
                      padding: "1rem 1.25rem",
                      borderBottom: "1px solid #334155",
                    }}
                  >
                    Empresa
                  </th>
                  <th
                    style={{
                      padding: "1rem 1.25rem",
                      borderBottom: "1px solid #334155",
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      padding: "1rem 1.25rem",
                      borderBottom: "1px solid #334155",
                    }}
                  >
                    CIF
                  </th>
                  <th
                    style={{
                      padding: "1rem 1.25rem",
                      borderBottom: "1px solid #334155",
                    }}
                  >
                    Cuota
                  </th>
                  <th
                    style={{
                      padding: "1rem 1.25rem",
                      borderBottom: "1px solid #334155",
                    }}
                  >
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                {clientes?.map((cliente) => (
                  <tr
                    key={cliente.id}
                    style={{ borderBottom: "1px solid #1e293b" }}
                  >
                    <td
                      style={{
                        padding: "1rem 1.25rem",
                        color: "#ffffff",
                        fontWeight: "600",
                      }}
                    >
                      {cliente.nombre_empresa}
                    </td>
                    <td style={{ padding: "1rem 1.25rem", color: "#cbd5e1" }}>
                      {cliente.email}
                    </td>
                    <td style={{ padding: "1rem 1.25rem", color: "#94a3b8" }}>
                      {cliente.cif || "N/A"}
                    </td>
                    <td style={{ padding: "1rem 1.25rem", color: "#cbd5e1" }}>
                      {cliente.cuota_mensual} €
                    </td>
                    <td style={{ padding: "1rem 1.25rem" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "0.3rem 0.75rem",
                          borderRadius: "9999px",
                          fontSize: "0.7rem",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          backgroundColor: cliente.activo
                            ? "rgba(16, 185, 129, 0.1)"
                            : "rgba(239, 68, 68, 0.1)",
                          color: cliente.activo ? "#34d399" : "#f87171",
                          border: cliente.activo
                            ? "1px solid rgba(52, 211, 153, 0.2)"
                            : "1px solid rgba(248, 113, 113, 0.2)",
                        }}
                      >
                        {cliente.activo ? "Activo" : "Baja"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
