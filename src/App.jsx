import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Menu.jsx";
import Footer from "./components/footer.jsx";
import Index from "./pages/index/Index.jsx";
import Servicios from "./pages/servicios/servicios.jsx"; // <-- IMPORTAR PÁGINA
import Soluciones from "./pages/soluciones/soluciones.jsx";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/soluciones" element={<Soluciones />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
