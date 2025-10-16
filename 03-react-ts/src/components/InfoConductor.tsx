import { useState } from "react";

export default function InfoConductor() {
  const [nombre] = useState("Gabriel");
  const [puntos, setPuntos] = useState(15);
  const [vehiculo] = useState("Seat León");
  const [velocidad, setVelocidad] = useState(90);

  function multar() {
    setPuntos(puntos - 3);
    setVelocidad(130);
  }

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>📋 Información del conductor</h2>
      <p>👤 Nombre: <strong>{nombre}</strong></p>
      <p>🚗 Vehículo: <strong>{vehiculo}</strong></p>
      <p>💨 Velocidad actual: <strong>{velocidad} km/h</strong></p>
      <p>🏅 Puntos del carnet: <strong>{puntos}</strong></p>

      <button onClick={multar}>
        Simular multa (-3 puntos)
      </button>
    </div>
  );
}
