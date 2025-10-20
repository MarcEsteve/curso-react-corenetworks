import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import type { Vehiculo } from "../types/vehiculo.interface";

type LoaderData = { vehiculos: Vehiculo[] };

export default function Vehiculos() {
  const { vehiculos } = useLoaderData() as LoaderData;
  const [searchParams, setSearchParams] = useSearchParams();
  const filtroColor = searchParams.get("color") || "";

  const filtrados = filtroColor
    ? vehiculos.filter(v => v.color.toLowerCase() === filtroColor.toLowerCase())
    : vehiculos;

  return (
    <>
      <h1>🚗 Vehículos</h1>

      <div style={{ margin: "12px 0", display: "flex", gap: 8 }}>
        <input
          placeholder="Filtrar por color…"
          defaultValue={filtroColor}
          onChange={(e) => {
            const val = e.target.value.trim();
            if (val) setSearchParams({ color: val }); else setSearchParams({});
          }}
        />
        {filtroColor && <button onClick={() => setSearchParams({})}>Limpiar</button>}
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtrados.map((v) => (
          <li key={v.matricula}
              style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12, marginBottom: 10 }}>
            <strong>{v.marca} {v.modelo}</strong> · {v.color}
            <div>Matrícula: <code>{v.matricula}</code></div>
            <div style={{ marginTop: 6 }}>
              {v.seguroEnVigor ? "✅ Seguro en vigor" : "❌ Seguro caducado"}
            </div>
            <div style={{ marginTop: 8 }}>
              <Link to={`/vehiculos/${v.matricula}`}>Ver detalle</Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
