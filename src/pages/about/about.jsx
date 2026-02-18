import "./about.css";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Conócenos – Yumly Consulting</title>
        <meta
          name="description"
          content="Yumly Consulting: consultoría tecnológica que transforma ideas en soluciones digitales, ofreciendo desarrollo de software, infraestructura IT y seguridad informática."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://consulting.yumly.es/about" />
      </Helmet>

      <main className="about">
        <section className="bloque1">
          <h1>Conócenos – Yumly Consulting, Consultoría Tecnológica</h1>

          <p className="parrafo1">
            En Yumly Consulting te ayudamos a convertir ideas en soluciones
            digitales reales, útiles y bien construidas. Creemos en proyectos
            bien enfocados, pensados para crecer con sentido y sin complejidad
            innecesaria.
          </p>

          <a
            href="https://cv.yumly.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="foto1"
              src="/yo.png"
              alt="CEO Yumly Consulting – haz click para ver portfolio"
            />
          </a>
        </section>

        <section className="bloque2">
          <p className="parrafo2">
            Somos una consultoría tecnológica que acompaña a empresas en el
            diseño, desarrollo y mejora de soluciones digitales. Trabajamos en
            áreas como desarrollo de software, infraestructura IT, seguridad
            informática y transformación digital, adaptándonos a las necesidades
            concretas de cada proyecto y al momento real de cada negocio.
          </p>
          <img
            className="foto2"
            src="/posit con ideas.png"
            alt="posit con ideas"
          />
        </section>

        <section className="bloque3">
          <img className="foto3" src="/tablero.png" alt="ceo yumly" />
          <p className="parrafo3">
            Nuestro enfoque es cercano y práctico. Nos implicamos desde el
            inicio para entender el contexto, el problema y los objetivos antes
            de proponer cualquier solución. Analizamos cada caso con calma,
            planteamos opciones claras y llevamos las ideas a producción de
            forma eficiente y escalable. Apostamos por una comunicación directa,
            decisiones bien fundamentadas y tecnología orientada a resultados.
            Sin paquetes cerrados, sin promesas vacías y sin complicaciones que
            no aportan valor. Creemos que la tecnología debe estar al servicio
            del negocio, no al revés. Por eso cuidamos tanto la seguridad, la
            escalabilidad y la alineación con los objetivos reales de cada
            cliente.
          </p>
        </section>
      </main>
    </>
  );
}

export default About;
