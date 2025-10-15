export default function EstadoTramo() {
  const tramoAbierto = true;

  return (
    <button className={`boton ${tramoAbierto ? "verde" : "rojo"}`}>
      {tramoAbierto ? "🟢 Tramo abierto" : "🔴 Tramo cerrado"}
    </button>
  );
}
