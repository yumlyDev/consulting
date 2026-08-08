"use server";

import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

export async function crearClienteAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const nombreEmpresa = formData.get("nombre_empresa") as string;
  const cif = formData.get("cif") as string;
  const cuotaMensual = formData.get("cuota_mensual") as string;

  // Cliente de Supabase con privilegios de administrador (Service Role)
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );

  // 1. Crear el usuario en Supabase Auth
  const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (authError) {
    return { success: false, error: authError.message };
  }

  const userId = authData.user.id;

  // 2. Usar .upsert() en lugar de .insert() por seguridad ante reintentos
  const { error: dbError } = await supabaseAdmin.from("clientes").upsert({
    id: userId,
    email: email,
    nombre_empresa: nombreEmpresa,
    cif: cif || null,
    cuota_mensual: cuotaMensual ? parseFloat(cuotaMensual) : 150.00,
  });

  if (dbError) {
    // Si falla la tabla, borramos el usuario de auth para evitar registros huérfanos
    await supabaseAdmin.auth.admin.deleteUser(userId);
    return { success: false, error: dbError.message };
  }

revalidatePath("/crm/altas-bajas");
  return { success: true, message: "Cliente creado correctamente" };
}

export async function darDeBajaClienteAction(formData: FormData) {
  const cif = formData.get("cif") as string;

  if (!cif) {
    return { success: false, error: "El CIF/NIF es obligatorio" };
  }

  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );

  // Actualizamos el campo activo a false donde coincida el CIF
  const { data, error } = await supabaseAdmin
    .from("clientes")
    .update({ activo: false })
    .eq("cif", cif.trim())
    .select();

  if (error) {
    return { success: false, error: error.message };
  }

  if (!data || data.length === 0) {
    return { success: false, error: "No se encontró ningún cliente con ese CIF/NIF" };
  }

  revalidatePath("/admin");
  return { success: true, message: "Cliente dado de baja correctamente" };
}