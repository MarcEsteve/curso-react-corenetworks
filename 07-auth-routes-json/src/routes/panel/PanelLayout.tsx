import { NavLink, Outlet } from "react-router";
import { useAuth } from "../../auth/AuthContext";

const link = ({ isActive }: { isActive: boolean }) => ({
  textDecoration: isActive ? "underline" : "none",
  marginRight: 12,
});

export default function PanelLayout() {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: 16 }}>
      <header style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <nav>
          <NavLink to="/panel" style={link} end>Resumen</NavLink>
          <NavLink to="/panel/vehiculos" style={link}>Vehículos</NavLink>
          <NavLink to="/panel/ajustes" style={link}>Ajustes</NavLink>
        </nav>
        <div>
          <span style={{ marginRight: 8 }}>👤 {user?.name} ({user?.role})</span>
          <button onClick={logout}>Salir</button>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
