import { NavLink, Outlet } from "react-router-dom";

const navStyle = ({ isActive }: { isActive: boolean }) =>
  ({ textDecoration: isActive ? "underline" : "none" });

export default function Layout() {
  return (
    <main style={{ padding: 16 }}>
      <nav style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <NavLink to="/" style={navStyle} end>Inicio</NavLink>
        <NavLink to="/vehiculos" style={navStyle}>Vehículos</NavLink>
        <NavLink to="/contacto" style={navStyle}>Contacto</NavLink>
      </nav>

      {/* <a href="#">Enlace externo</a> */}

      {/* Aquí se cargan las páginas hijas */}
      <Outlet />

      <footer style={{ marginTop: 24 }}>
        <small>© Portal DGT (demo)</small>
      </footer>
    </main>
  );
}
