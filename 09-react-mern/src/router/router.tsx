import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import VehiculosPage from "../pages/VehiculosPage";
import VehiculoDetalle from "../pages/VehiculoDetalle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "vehiculos/:id", element: <VehiculoDetalle />
  },
  {
    path: "vehiculos", element: <VehiculosPage />
  }
]);
