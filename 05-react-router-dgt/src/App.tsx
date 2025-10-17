import { Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Vehiculos from "./routes/Vehiculos";
import VehiculoDetalle from "./routes/VehiculoDetalle";
import Contacto from "./routes/Contacto";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="vehiculos" element={<Vehiculos />} />
        <Route path="vehiculos/:matricula" element={<VehiculoDetalle />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<h1>404 - Matrícula no encontrada</h1>} />
      </Route>
    </Routes>
  );
}
