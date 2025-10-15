import { useState } from "react";

type EstadoRestriccion = "Permitido" | "Restricción parcial" | "Prohibido";

function Restriccion() {
  // usamos useState para guardar el estado actual
  const [estado, setEstado] = useState<EstadoRestriccion>("Restricción parcial");

  // función para ciclar el estado al pulsar botón
  function cambiarEstado() {
    // if (condition) { } 
    if (estado === "Permitido") setEstado("Restricción parcial");
    else if (estado === "Restricción parcial") setEstado("Prohibido");
    else setEstado("Permitido");
  }

  return (
    <div
      style={{ border: "1px solid #444", padding: "1rem", borderRadius: "8px" }}
    >
      <h3>Restricción de tráfico actual:</h3>
      <p>
        <strong>{estado}</strong>
      </p>
      <button onClick={cambiarEstado}>Cambiar estado</button>
    </div>
  );
}

export default Restriccion;
