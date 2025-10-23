import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleRoute from "./components/RoleRoute";

import Login from "./pages/Login";
import Panel from "./pages/Panel";
import PanelAjustes from "./pages/PanelAjustes";
import NoAcceso from "./pages/NoAcceso";

export default function App() {
  const { profile, logout } = useAuth();

  const link = ({ isActive }: { isActive: boolean }) => ({
    textDecoration: isActive ? "underline" : "none",
    marginRight: 12,
  });

  return (
    <BrowserRouter>
      <header style={{ padding: 12, background: "#003366", color: "white", display: "flex", justifyContent: "space-between" }}>
        <nav>
          <NavLink to="/" style={link} end>Inicio</NavLink>
          <NavLink to="/panel" style={link}>Panel</NavLink>
          <NavLink to="/panel/ajustes" style={link}>Ajustes (admin)</NavLink>
        </nav>
        <div>
          {profile ? (
            <>
              👋 Hola {profile.nombre || profile.email} ({profile.role})
              <button onClick={logout} style={{ marginLeft: 10 }}>Salir</button>
            </>
          ) : (
            <NavLink to="/login" style={{ color: "white" }}>Iniciar sesión</NavLink>
          )}
        </div>
      </header>

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/panel"
          element={
            <ProtectedRoute>
              <Panel />
            </ProtectedRoute>
          }
        />

        <Route
          path="/panel/ajustes"
          element={
            <RoleRoute allowed="admin">
              <PanelAjustes />
            </RoleRoute>
          }
        />

        <Route path="/no-acceso" element={<NoAcceso />} />
        <Route path="/" element={<p style={{ padding: 24 }}>Inicio público</p>} />
        <Route path="*" element={<p style={{ padding: 24 }}>404</p>} />
      </Routes>
    </BrowserRouter>
  );
}
