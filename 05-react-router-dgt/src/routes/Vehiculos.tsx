import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import type { Vehiculo } from "../types/vehiculo.interface";

export default function Vehiculos() {
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const filtroColor = searchParams.get("color") || "";

  useEffect(() => {
    fetch("/data/vehiculos.json")
      .then((res) => res.json())
      .then((data: Vehiculo[]) => setVehiculos(data))
      .catch(() => setError("No se pudieron cargar los vehículos"))
      .finally(() => setCargando(false));
  }, []);

  const filtrados = filtroColor
    ? vehiculos.filter(v => v.color.toLowerCase() === filtroColor.toLowerCase())
    : vehiculos;

  if (cargando) return <p>Cargando vehículos…</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <>
      <h1>🚗 Vehículos</h1>

      {/* Filtro por color vía querystring ?color=Rojo */}
      <div style={{ margin: "12px 0", display: "flex", gap: 8 }}>
        <input
          placeholder="Filtrar por color (Rojo, Azul, Gris...)"
          defaultValue={filtroColor}
          onChange={(e) => {
            const val = e.target.value.trim();
            if (val) setSearchParams({ color: val });
            else setSearchParams({});
          }}
        />
        {filtroColor && (
          <button onClick={() => setSearchParams({})}>Limpiar filtro</button>
        )}
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtrados.map((v) => (
          <li key={v.matricula}
              style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12, marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <strong>{v.marca} {v.modelo}</strong> · {v.color}
                <div>Matrícula: <code>{v.matricula}</code></div>
              </div>
              <div>
                {v.seguroEnVigor ? (
                  <span style={{ padding: "4px 8px", background: "#047857", color: "white", borderRadius: 6 }}>
                    Seguro en vigor
                  </span>
                ) : (
                  <span style={{ padding: "4px 8px", background: "#dc2626", color: "white", borderRadius: 6 }}>
                    Seguro caducado
                  </span>
                )}
              </div>
            </div>

            <div style={{ marginTop: 8 }}>
              <Link to={`/vehiculos/${v.matricula}`}>Ver detalle de {v.modelo}</Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
