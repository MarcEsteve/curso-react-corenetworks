import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">🚗 DGT Panel</h1>
      <nav>
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/vehiculos">Vehículos</NavLink>
      </nav>
    </header>
  );
}
