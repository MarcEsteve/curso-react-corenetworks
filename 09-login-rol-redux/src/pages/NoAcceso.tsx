import { Link } from "react-router";

export default function NoAcceso() {
  return (
    <main style={{ padding: 24, textAlign: "center" }}>
      <h1>🚫 No tienes acceso</h1>
      <p>Esta sección es solo para administradores.</p>
      <Link to="/">Volver al inicio</Link>
    </main>
  );
}
