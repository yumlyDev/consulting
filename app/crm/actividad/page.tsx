"use client";

export const dynamic = "force-dynamic";

import React, { useEffect, useState } from "react";
import MenuAdmin from "@/components/menuadministracion/menuadmin";
import { supabase } from "@/lib/supabase";
import "./actividad.css";

interface RegistroActividad {
  id: string;
  ip: string;
  pais: string;
  codigoPais: string;
  fecha: string;
  banned: boolean;
}

export default function ActividadPage() {
  const [actividad, setActividad] = useState<RegistroActividad[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function obtenerDatosActividad() {
      try {
        // 1. Consultar los accesos REALES guardados por el proxy en Supabase
        const { data: logsReales, error: errorLogs } = await supabase
          .from("access_logs")
          .select("id, ip, created_at")
          .order("created_at", { ascending: false })
          .limit(50); // Los últimos 50 accesos

        if (errorLogs) throw errorLogs;

        if (!logsReales || logsReales.length === 0) {
          setCargando(false);
          return;
        }

        // 2. Mapear cada IP real con su geolocalización y estado de baneo
        const datosMapeados: RegistroActividad[] = await Promise.all(
          logsReales.map(async (item) => {
            try {
              // Comprobar si está baneada en la tabla ip_banidas
              const { data: banCheck } = await supabase
                .from("ip_banidas")
                .select("id")
                .eq("ip", item.ip)
                .maybeSingle();

              // Consultar país mediante la API gratuita
              const res = await fetch(`https://ipapi.co/${item.ip}/json/`);
              const data = await res.json();

              return {
                id: String(item.id),
                ip: item.ip,
                pais: data.country_name || "Desconocido",
                codigoPais: data.country_code
                  ? data.country_code.toLowerCase()
                  : "xx",
                fecha: new Date(item.created_at).toLocaleString(),
                banned: !!banCheck,
              };
            } catch {
              return {
                id: String(item.id),
                ip: item.ip,
                pais: "Desconocido",
                codigoPais: "xx",
                fecha: new Date(item.created_at).toLocaleString(),
                banned: false,
              };
            }
          }),
        );

        setActividad(datosMapeados);
      } catch (error) {
        console.error("Error al obtener la actividad:", error);
      } finally {
        setCargando(false);
      }
    }

    obtenerDatosActividad();
  }, []);

  // Función para banear o desbanear IP
  const toggleBanIP = async (ip: string, estadoActual: boolean) => {
    if (estadoActual) {
      const { error } = await supabase.from("ip_banidas").delete().eq("ip", ip);
      if (error) {
        alert("Error al desbanear la IP");
        return;
      }
    } else {
      const { error } = await supabase.from("ip_banidas").insert([{ ip }]);
      if (error) {
        alert("Error al banear la IP");
        return;
      }
    }

    setActividad((prev) =>
      prev.map((item) =>
        item.ip === ip ? { ...item, banned: !estadoActual } : item,
      ),
    );
  };

  return (
    <div className="admin-wrapper">
      <header className="admin-header">
        <h1>
          Registro de Actividad | <span>Yumly</span>
        </h1>
        <p>Control de accesos reales y bloqueo de IPs</p>
      </header>

      <div className="admin-grid">
        <MenuAdmin />

        <div className="admin-card">
          <h2>Últimos Accesos</h2>
          {cargando ? (
            <p className="loading-text">Cargando registros...</p>
          ) : actividad.length === 0 ? (
            <p className="loading-text">
              No hay registros de actividad todavía. Navega por las rutas
              protegidas para generar accesos.
            </p>
          ) : (
            <div className="table-responsive">
              <table className="activity-table">
                <thead>
                  <tr>
                    <th>Dirección IP</th>
                    <th>País</th>
                    <th>Fecha y Hora</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {actividad.map((item) => (
                    <tr key={item.id}>
                      <td className="ip-cell">{item.ip}</td>
                      <td className="country-cell">
                        {item.codigoPais !== "xx" && (
                          <img
                            src={`https://flagcdn.com/24x18/${item.codigoPais}.png`}
                            alt={item.pais}
                            className="country-flag"
                          />
                        )}
                        <span>{item.pais}</span>
                      </td>
                      <td className="date-cell">{item.fecha}</td>
                      <td>
                        <button
                          onClick={() => toggleBanIP(item.ip, item.banned)}
                          className={item.banned ? "btn-unban" : "btn-ban"}
                        >
                          {item.banned ? "Desbanear" : "Banear IP"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
