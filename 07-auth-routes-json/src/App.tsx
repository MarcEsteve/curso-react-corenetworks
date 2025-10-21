import { Routes, Route, NavLink } from "react-router";
import Home from "./routes/Home";
import Login from "./routes/Login";
import ProtectedRoute from "./auth/ProtectedRoute";

import PanelLayout from "./routes/panel/PanelLayout";
import PanelResumen from "./routes/panel/PanelResumen";
import PanelVehiculos from "./routes/panel/PanelVehiculos";
import PanelAjustes from "./routes/panel/PanelAjustes";

const link = ({ isActive }: { isActive: boolean }) => ({
  textDecoration: isActive ? "underline" : "none",
  marginRight: 12,
});

export default function App() {
  return (
    <>
      <nav style={{ padding: 12, borderBottom: "1px solid #eee" }}>
        <NavLink to="/" style={link} end>Inicio</NavLink>
        <NavLink to="/panel" style={link}>Panel</NavLink>
        <NavLink to="/login" style={link}>Login</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Grupo protegido: Panel + rutas hijas */}
        <Route
          path="/panel"
          element={
            <ProtectedRoute>
              <PanelLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<PanelResumen />} />
          <Route path="vehiculos" element={<PanelVehiculos />} />
          <Route path="ajustes" element={<PanelAjustes />} />
        </Route>

        <Route path="*" element={<h1 style={{ padding: 16 }}>404</h1>} />
      </Routes>
    </>
  );
}
