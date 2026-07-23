import type { Metadata } from "next";
import Menu from "../../components/menu";
import "./terminos.css";
// 1. Sustituye a react-helmet para SEO
export const metadata: Metadata = {
  title: "Yumly Consulting - Términos y Política de Privacidad",
  description:
    "Consulta los términos de uso y la política de privacidad de Yumly IT Consulting. Transparencia y cumplimiento legal en servicios IT y desarrollo web.",
  alternates: {
    canonical: "https://consulting.yumly.es/terminos",
  },
  openGraph: {
    title: "Yumly Consulting - Términos y Política de Privacidad",
    description:
      "Consulta los términos de uso y la política de privacidad de Yumly IT Consulting.",
    images: ["https://consulting.yumly.es/ConsultingLogo.png"],
    type: "website",
    url: "https://consulting.yumly.es/terminos",
  },
};

export default function TerminosPage() {
  const secciones = [
    {
      titulo: "TÉRMINOS Y CONDICIONES DE USO",
      contenido: [
        {
          encabezado: "1. Información general:",
          texto:
            "El presente documento regula el acceso y uso del sitio web de Yumly IT Consulting. Nombre comercial: Yumly IT Consulting NIF/CIF: 49095026p Domicilio: C/ gallicia fuenlabrada  Email de contacto: Info@yunly.es",
        },
        {
          encabezado: "2. Objeto:",
          texto:
            "A través de este sitio web, Yumly IT Consulting ofrece información sobre servicios de consultoría IT, desarrollo web, infraestructura tecnológica, seguridad y soporte técnico.",
        },
        {
          encabezado: "3. Condiciones de uso:",
          texto:
            "El usuario se compromete a utilizar el sitio web de forma lícita, adecuada y conforme a la legislación vigente.",
        },
        {
          encabezado: "4. Responsabilidad:",
          texto:
            "Los servicios se prestan de manera puntual y bajo demanda. Yumly IT Consulting no garantiza disponibilidad continua ni presta soporte 24/7.",
        },
        {
          encabezado: "5. Propiedad intelectual e industrial:",
          texto:
            "Todos los contenidos del sitio web son propiedad de Yumly IT Consulting o de terceros con licencia.",
        },
        {
          encabezado: "6. Enlaces externos:",
          texto:
            "El sitio web puede contener enlaces a sitios web de terceros. Yumly IT Consulting no se responsabiliza de dichos sitios externos.",
        },
        {
          encabezado: "7. Protección de datos:",
          texto:
            "Los datos personales se tratan conforme a la legislación vigente. El usuario puede ejercer sus derechos escribiendo a [correo electrónico].",
        },
        {
          encabezado: "8. Legislación aplicable y jurisdicción:",
          texto:
            "La relación entre Yumly IT Consulting y el usuario se regirá por la normativa española vigente.",
        },
      ],
    },
    {
      titulo: "POLÍTICA DE PRIVACIDAD",
      contenido: [
        {
          encabezado: "1. Información general:",
          texto:
            "Responsable del tratamiento: Yumly IT Consulting. NIF/CIF: 49095026p Domicilio: C/ gallicia fuenlabrada  Email de contacto: Info@yunly.es",
        },
        {
          encabezado: "2. Objeto:",
          texto:
            "Yumly IT Consulting puede recoger: Nombre, email, teléfono e información enviada a través de formularios.",
        },
        {
          encabezado: "3. Condiciones de uso:",
          texto:
            "Finalidad del tratamiento: Atender consultas, gestionar comunicaciones comerciales y prestar servicios.",
        },
        {
          encabezado: "4. Responsabilidad:",
          texto:
            "La base legal para el tratamiento de los datos es el consentimiento del usuario y la ejecución contractual.",
        },
        {
          encabezado: "5. Propiedad intelectual e industrial:",
          texto:
            "Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados.",
        },
        {
          encabezado: "6. Enlaces externos:",
          texto:
            "No se cederán datos a terceros salvo obligación legal o necesidad de prestación del servicio.",
        },
        {
          encabezado: "7. Protección de datos:",
          texto:
            "Derechos: Acceso, Rectificación, Supresión, Oposición, Limitación y Portabilidad.",
        },
        {
          encabezado: "8. Seguridad de los datos:",
          texto:
            "Yumly IT Consulting adopta medidas técnicas necesarias para garantizar la seguridad de los datos personales.",
        },
        {
          encabezado: "9. Cambios en la política:",
          texto:
            "Yumly IT Consulting se reserva el derecho a modificar esta Política para adaptarla a novedades legislativas.",
        },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Yumly Consulting",
        url: "https://consulting.yumly.es",
        logo: "https://consulting.yumly.es/ConsultingLogo.png",
      },
      {
        "@type": "WebSite",
        name: "Yumly Consulting",
        url: "https://consulting.yumly.es",
      },
    ],
  };

  return (
    <>
      {/* Script JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Menu />

      <main className="terminos-page">
        {secciones.map((seccion, idx) => (
          <section key={idx}>
            <h1>{seccion.titulo}</h1>
            <div className="terminos-content">
              {seccion.contenido.map((item, i) => (
                <p key={i}>
                  <strong>{item.encabezado}</strong> {item.texto}
                </p>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
