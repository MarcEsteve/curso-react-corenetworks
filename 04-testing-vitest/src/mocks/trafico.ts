export async function obtenerEstadoTráfico(ciudad: string) {
  const res = await fetch(`https://api.dgt.es/trafico/${ciudad}`);
  const data = await res.json();
  return data.estado;
}
