import { Routes, Route, NavLink } from "react-router";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import ProtectedRoute from "./auth/ProtectedRoute";

export default function App() {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    ({ textDecoration: isActive ? "underline" : "none", marginRight: 12 });

  return (
    <>
      <nav style={{ padding: 12 }}>
        <NavLink to="/" style={linkStyle} end>Inicio</NavLink>
        <NavLink to="/dashboard" style={linkStyle}>Dashboard</NavLink>
        <NavLink to="/login" style={linkStyle}>Login</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<h1 style={{ padding: 16 }}> Error 404: página no encontrada</h1>} />
      
      </Routes>
    </>
  );
}
