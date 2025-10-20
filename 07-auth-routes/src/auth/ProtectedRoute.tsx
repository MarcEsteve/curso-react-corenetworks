import { Navigate, useLocation } from "react-router-dom";
import {type ReactNode } from "react";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // redirige a /login y recuerda a dónde iba
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <>{children}</>;
}
