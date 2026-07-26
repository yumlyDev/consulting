"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg("Correo o contraseña incorrectos");
      return;
    }

    // Redirección inteligente forzando recarga completa para enviar la cookie limpia
    if (email === "alejandroherrera@yumly.es") {
      window.location.href = "/crm/administracion";
    } else {
      window.location.href = "/crm/clientes";
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">
          Acceso a <span>Yumly</span>
        </h2>
        <p className="login-subtitle">
          Introduce tus credenciales para continuar
        </p>

        {errorMsg && (
          <p
            style={{
              color: "#ef4444",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            {errorMsg}
          </p>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
            />
          </div>
          <button type="submit" className="neon-button">
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
}
