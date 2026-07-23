import "./aviso.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yumly Consulting - Aviso Legal",
  description: "Aviso Legal de Yumly Consulting: información sobre titularidad, condiciones de uso, responsabilidad, propiedad intelectual, enlaces externos y protección de datos.",
  robots: "index, follow",
  alternates: {
    canonical: "https://consulting.yumly.es/avisolegal",
  },
  openGraph: {
    title: "Yumly Consulting - Aviso Legal",
    description: "Aviso Legal de Yumly Consulting: información sobre titularidad, condiciones de uso, responsabilidad, propiedad intelectual, enlaces externos y protección de datos.",
    url: "https://consulting.yumly.es/avisolegal ",
    siteName: "Yumly Consulting",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yumly Consulting - Aviso Legal",
    description: "Aviso Legal de Yumly Consulting: información sobre titularidad, condiciones de uso, responsabilidad, propiedad intelectual, enlaces externos y protección de datos.",
  },
};

export default function AvisoLegal() {
  return (
    <main className="aviso-legal-page">
      <h1>Aviso Legal</h1>
      <div className="aviso-legal-content">
        <p>
          <strong>1. Información general:</strong> En cumplimiento con el
          deber de información recogido en la Ley 34/2002, de Servicios de la
          Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se
          facilita la siguiente información: Nombre comercial: Yumly IT
          Consulting. Titular: Yumly IT Consulting (próximamente registro
          oficial). NIF/CIF: 49095026p Domicilio: C/ gallicia fuenlabrada Email de contacto: Info@yunly.es,
          Actividad: Servicios
          de consultoría IT, desarrollo web, infraestructura tecnológica y
          soporte técnico.
        </p>

        <p>
          <strong>2. Objeto:</strong> El presente Aviso Legal regula el uso
          del sitio web de Yumly IT Consulting, que pone a disposición de los
          usuarios información sobre sus servicios profesionales de carácter
          tecnológico y consultivo. El acceso y/o uso del sitio web atribuye
          la condición de usuario, que acepta, desde dicho acceso y/o uso, las
          condiciones aquí reflejadas.
        </p>

        <p>
          <strong>3. Condiciones de uso:</strong> El usuario se compromete a
          hacer un uso adecuado del sitio web y de sus contenidos, de
          conformidad con la legislación vigente, la buena fe y el orden
          público. Queda prohibido el uso del sitio web con fines ilícitos o
          lesivos, o que puedan causar perjuicio o impedir el normal
          funcionamiento del mismo.
        </p>

        <p>
          <strong>4. Responsabilidad:</strong> Yumly IT Consulting no se hace
          responsable de los errores u omisiones en los contenidos del sitio
          web, ni de los daños derivados del uso del mismo, ni por actuaciones
          realizadas sobre la base de la información que en él se facilita.
          Los servicios ofrecidos a través del sitio web se prestan bajo
          modalidad consultiva y soporte técnico bajo demanda, sin compromiso
          de soporte continuo, SLA ni monitorización permanente, salvo acuerdo
          expreso por escrito.
        </p>

        <p>
          <strong>5. Propiedad intelectual e industrial:</strong> Todos los
          contenidos del sitio web (textos, imágenes, logotipos, diseño,
          código fuente, etc.) son titularidad de Yumly IT Consulting o
          dispone de los derechos necesarios para su uso, quedando prohibida
          su reproducción, distribución o modificación sin autorización
          expresa.
        </p>

        <p>
          <strong>6. Enlaces externos:</strong> El sitio web puede contener
          enlaces a sitios web de terceros. Yumly IT Consulting no se
          responsabiliza del contenido, políticas o prácticas de dichos sitios
          externos.
        </p>

        <p>
          <strong>7. Protección de datos:</strong> El tratamiento de los datos
          personales del usuario se rige por lo dispuesto en la Política de
          Privacidad, accesible desde este mismo sitio web, cumpliendo con el
          Reglamento (UE) 2016/679 (RGPD) y la normativa española vigente.
        </p>

        <p>
          <strong>8. Legislación aplicable y jurisdicción:</strong> La
          relación entre Yumly IT Consulting y el usuario se regirá por la
          normativa española vigente. Cualquier controversia se someterá a los
          Juzgados y Tribunales del domicilio del titular del sitio web, salvo
          que la ley disponga lo contrario.
        </p>
      </div>
    </main>
  );
}