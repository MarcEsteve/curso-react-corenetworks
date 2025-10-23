import { useEffect, useState } from "react";

type Vehiculo = {
  _id: string;
  matricula: string;
  marca: string;
  modelo: string;
  combustible: string;
  itvVigente: boolean;
  seguroVigente: boolean;
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
      <h1>Listado de Vehículos DGT</h1>
      <ul>
        {vehiculos.map((v) => (
          <li key={v._id}>
            {v.marca} {v.modelo} ({v.matricula}) - Fecha matriculación: {v.fechaUltimaITV}
          </li>
        ))}
      </ul>
    </div>
  );
}
