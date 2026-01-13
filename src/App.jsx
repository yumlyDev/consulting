import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Menu.jsx";
import Index from "./pages/Index.jsx";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Menu de navegación */}
      <Menu />

      {/* Rutas */}
      <Routes>
        <Route path="/index" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
