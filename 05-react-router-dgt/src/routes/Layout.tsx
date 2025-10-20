import { NavLink, Outlet, useNavigation } from "react-router-dom";

const navStyle = ({ isActive }: { isActive: boolean }) =>
  ({ textDecoration: isActive ? "underline" : "none" });

export default function Layout() {
  const navigation = useNavigation(); // pending/idle

  return (
    <main style={{ padding: 16 }}>
      <nav style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <NavLink to="/" style={navStyle} end>Inicio</NavLink>
        <NavLink to="/vehiculos" style={navStyle}>Vehículos</NavLink>
        <NavLink to="/contacto" style={navStyle}>Contacto</NavLink>
      </nav>

      {navigation.state === "loading" && (
        <div style={{ padding: 8, background: "#eef2ff", borderRadius: 6, marginBottom: 12 }}>
          ⏳ Cargando…
        </div>
      )}

      <Outlet />

      <footer style={{ marginTop: 24 }}>
        <small>© Portal DGT (demo)</small>
      </footer>
    </main>
  );
}
