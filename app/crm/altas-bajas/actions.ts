"use server";

import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

export async function crearClienteAction(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const nombreEmpresa = formData.get("nombre_empresa") as string;
    const cif = formData.get("cif") as string;
    const cuotaMensual = formData.get("cuota_mensual") as string;

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

    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (authError) {
      console.error("Error en Supabase Auth:", authError.message);
      return { success: false, error: authError.message };
    }

    const userId = authData.user.id;

    const { error: dbError } = await supabaseAdmin.from("clientes").upsert({
      id: userId,
      email: email,
      nombre_empresa: nombreEmpresa,
      cif: cif || null,
      cuota_mensual: cuotaMensual ? parseFloat(cuotaMensual) : 150.00,
    });

    if (dbError) {
      console.error("Error en la tabla clientes:", dbError.message);
      await supabaseAdmin.auth.admin.deleteUser(userId);
      return { success: false, error: dbError.message };
    }

    revalidatePath("/crm/altas-bajas");
    return { success: true, message: "Cliente creado correctamente" };
  } catch (err: any) {
    console.error("Error crítico en Server Action:", err);
    return { success: false, error: err.message || "Error desconocido en el servidor" };
  }
}

export async function darDeBajaClienteAction(formData: FormData) {
  try {
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

    const { data, error } = await supabaseAdmin
      .from("clientes")
      .update({ activo: false })
      .eq("cif", cif.trim())
      .select();

    if (error) {
      console.error("Error al dar de baja:", error.message);
      return { success: false, error: error.message };
    }

    if (!data || data.length === 0) {
      return { success: false, error: "No se encontró ningún cliente con ese CIF/NIF" };
    }

    revalidatePath("/crm/altas-bajas");
    return { success: true, message: "Cliente dado de baja correctamente" };
  } catch (err: any) {
    console.error("Error crítico en baja:", err);
    return { success: false, error: err.message || "Error desconocido en el servidor" };
  }
}