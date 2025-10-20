import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main style={{ padding: 16 }}>
      <h1>🏠 Inicio</h1>
      <p><Link to="/dashboard">Ir al Dashboard (protegido)</Link></p>
      <p><Link to="/login">Login</Link></p>
    </main>
  );
}
