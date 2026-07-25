"use client";

import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  ssr: false,
  loading: () => (
    <p style={{ textAlign: "center", color: "#fff" }}>Cargando formulario...</p>
  ),
});

export default function DynamicContact() {
  return <ContactForm />;
}
