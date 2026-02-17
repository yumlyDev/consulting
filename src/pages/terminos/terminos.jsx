import Menu from "../../components/Menu.jsx";
import "./terminos.css";

function Terminos() {
  const secciones = [
    {
      titulo: "TÉRMINOS Y CONDICIONES DE USO",
      contenido: [
        {
          encabezado: "1. Información general:",
          texto:
            "El presente documento regula el acceso y uso del sitio web de Yumly IT Consulting. Nombre comercial: Yumly IT Consulting Titular: [Nombre y apellidos / Razón social] NIF/CIF: [NIF o CIF] Domicilio: [Dirección completa] Email de contacto: [correo electrónico]",
        },
        {
          encabezado: "2. Objeto:",
          texto:
            "A través de este sitio web, Yumly IT Consulting ofrece información sobre servicios de consultoría IT, desarrollo web, infraestructura tecnológica, seguridad y soporte técnico. El contenido del sitio web tiene carácter informativo y no constituye una oferta contractual vinculante.",
        },
        {
          encabezado: "3. Condiciones de uso:",
          texto:
            "El usuario se compromete a utilizar el sitio web de forma lícita, adecuada y conforme a la legislación vigente. Queda prohibido: Usar el sitio web con fines ilícitos, introducir virus o software malicioso, realizar acciones que puedan dañar o sobrecargar el sitio.",
        },
        {
          encabezado: "4. Responsabilidad:",
          texto:
            "Los servicios se prestan bajo modalidad consultiva y soporte técnico bajo demanda, salvo acuerdo específico por escrito. Yumly IT Consulting no garantiza disponibilidad permanente, ni presta servicios 24/7, ni asume compromisos de nivel de servicio (SLA) salvo contrato expreso.",
        },
        {
          encabezado: "5. Propiedad intelectual e industrial:",
          texto:
            "Todos los contenidos del sitio web son propiedad de Yumly IT Consulting o de terceros con licencia, quedando prohibida su reproducción sin autorización expresa.",
        },
        {
          encabezado: "6. Enlaces externos:",
          texto:
            "El sitio web puede contener enlaces a sitios web de terceros. Yumly IT Consulting no se responsabiliza del contenido, políticas o prácticas de dichos sitios externos.",
        },
        {
          encabezado: "7. Protección de datos:",
          texto:
            "Los datos personales se tratan conforme a la legislación vigente y la Política de Privacidad. El usuario puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a [correo electrónico].",
        },
        {
          encabezado: "8. Legislación aplicable y jurisdicción:",
          texto:
            "La relación entre Yumly IT Consulting y el usuario se regirá por la normativa española vigente. Cualquier controversia se someterá a los Juzgados y Tribunales del domicilio del titular del sitio web.",
        },
      ],
    },
    {
      titulo: "POLÍTICA DE PRIVACIDAD",
      contenido: [
        {
          encabezado: "1. Información general:",
          texto:
            "Responsable del tratamiento: Yumly IT Consulting. Titular: [Nombre y apellidos / Razón social]. NIF/CIF: [NIF o CIF]. Dirección: [Dirección completa]. Email: [correo electrónico].",
        },
        {
          encabezado: "2. Objeto:",
          texto:
            "Yumly IT Consulting puede recoger los siguientes datos: Nombre y apellidos, Dirección de correo electrónico, Teléfono, Información enviada a través de formularios de contacto. No se recogen datos especialmente protegidos.",
        },
        {
          encabezado: "3. Condiciones de uso:",
          texto:
            "Finalidad del tratamiento: Atender consultas o solicitudes de información, Gestionar comunicaciones comerciales, Prestar los servicios solicitados.",
        },
        {
          encabezado: "4. Responsabilidad:",
          texto:
            "La base legal para el tratamiento de los datos es el consentimiento del usuario, la ejecución de un contrato o precontrato, y el cumplimiento de obligaciones legales.",
        },
        {
          encabezado: "5. Propiedad intelectual e industrial:",
          texto:
            "Conservación de los datos: Los datos se conservarán únicamente durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados o mientras exista una relación comercial.",
        },
        {
          encabezado: "6. Enlaces externos:",
          texto:
            "Destinatarios: No se cederán datos a terceros salvo obligación legal o cuando sea necesario para la prestación del servicio (proveedores tecnológicos).",
        },
        {
          encabezado: "7. Protección de datos:",
          texto:
            "Derechos del usuario: Acceso, Rectificación, Supresión, Oposición, Limitación del tratamiento, Portabilidad. Para ejercerlos puede escribir a [correo electrónico] adjuntando copia de documento identificativo.",
        },
        {
          encabezado: "8. Seguridad de los datos:",
          texto:
            "Yumly IT Consulting adopta medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su pérdida, alteración o acceso no autorizado.",
        },
        {
          encabezado: "9. Cambios en la política:",
          texto:
            "Yumly IT Consulting se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o cambios en la actividad.",
        },
      ],
    },
  ];

  return (
    <>
      <Menu />
      {secciones.map((seccion, idx) => (
        <div className="terminos-page" key={idx}>
          <h1>{seccion.titulo}</h1>
          <div className="terminos-content">
            {seccion.contenido.map((item, i) => (
              <p key={i}>
                <strong>{item.encabezado}</strong> {item.texto}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Terminos;
