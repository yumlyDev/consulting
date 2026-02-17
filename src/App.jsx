import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu.jsx";
import Footer from "./components/footer.jsx";
import Index from "./pages/index/Index.jsx";
import Servicios from "./pages/servicios/servicios.jsx"; // <-- IMPORTAR PÁGINA
import Soluciones from "./pages/soluciones/soluciones.jsx";
import About from "./pages/about/about.jsx";
import Contacto from "./pages/contacto/contacto.jsx";
import Sesion from "./pages/sesion/sesion.jsx";
import "./styles/App.css";
import AvisoLegal from "./pages/aviso/avisolegal.jsx";
import Terminos from "./pages/terminos/terminos.jsx";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/soluciones" element={<Soluciones />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sesion" element={<Sesion />} />
        <Route path="/AvisoLegal" element={<AvisoLegal />} />
        <Route path="/Terminos" element={<Terminos />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
