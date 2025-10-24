import { useEffect, useState } from "react";
import "./App.css";

type Vehiculo = {
  _id: string;
  matricula: string;
  marca: string;
  modelo: string;
  combustible: string;
  seguroEnVigor: boolean;
  fechaUltimaITV: string;
};

export default function App() {
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/vehiculos")
      .then((res) => res.json())
      .then(setVehiculos)
      .catch((err) => console.error("Error cargando datos:", err));
  }, []);

  return (
    <div>
      <h1>Listado de Vehículos DGT 🚗</h1>
      <table>
        <thead>
          <tr>
            <th> Matrícula</th>
            <th> Marca</th>
            <th> Modelo</th>
            <th>🗓️ Fecha última ITV</th>
            <th>🛡️ Seguro vigente</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((v) => (
            <tr key={v._id}>
              <td>{v.matricula}</td>
              <td>{v.marca}</td>
              <td>{v.modelo}</td>
              {/* Convertir fecha a tipo Date() */}
              {/* Formatear fecha a "dia" de "mes" del "año" */}
              <td>{new Date(v.fechaUltimaITV).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}</td>
              <td>{v.seguroEnVigor ? "✅ Seguro en vigor" : "❌ Seguro caducado"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
