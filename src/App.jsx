import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Menu.jsx";
import Footer from "./components/footer.jsx";
import Index from "./pages/Index.jsx";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Menu siempre visible */}
      <Menu />

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Index />} />  {/* Página principal */}
        <Route path="/index" element={<Index />} /> {/* Ruta alternativa */}
      </Routes>

      {/* Footer siempre visible */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
