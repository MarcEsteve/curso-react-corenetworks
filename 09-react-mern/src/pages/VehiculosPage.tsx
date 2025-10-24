import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { VehiculosAPI } from "../api";

type Vehiculo = {
  _id: string; matricula: string; marca: string; modelo: string;
  anioMatriculacion: number; kms: number; combustible: string;
  itvVigente: boolean; seguroVigente: boolean;
};

export default function VehiculosPage() {
  const [items, setItems] = useState<Vehiculo[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";

  useEffect(() => {
    (async () => {
      setLoading(true);
      try { setItems(await VehiculosAPI.list()); }
      finally { setLoading(false); }
    })();
  }, []);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return items;
    return items.filter(v =>
      v.matricula.toLowerCase().includes(term) ||
      v.marca.toLowerCase().includes(term) ||
      v.modelo.toLowerCase().includes(term)
    );
  }, [items, q]);

  return (
    <section className="wrap">
      <h2>Vehículos</h2>

      <div className="card" style={{ marginBottom: 12 }}>
        <input
          placeholder="🔎 Buscar por matrícula, marca o modelo…"
          value={q}
          onChange={(e) => setSearchParams(e.target.value ? { q: e.target.value } : {})}
          style={{ width:"100%", padding:10, borderRadius:10, border:"1px solid #e5e7eb"}}
        />
      </div>

      {loading ? <p>Cargando…</p> : (
        <div className="list">
          {filtered.length === 0 ? <p className="muted">Sin resultados.</p> :
            filtered.map(v => (
              <article key={v._id} className="card item">
                <header style={{display:"flex",justifyContent:"space-between"}}>
                  <strong>{v.marca} {v.modelo}</strong>
                  <Link to={`/vehiculos/${v._id}`} className="chip" title="Ver detalle">
                    {v.matricula}
                  </Link>
                </header>
                <p className="meta">
                  Año {v.anioMatriculacion} · {v.combustible} · {v.kms.toLocaleString()} kms
                </p>
                <p className="flags">
                  ITV: <b className={v.itvVigente ? "ok":"ko"}>{v.itvVigente ? "VIGENTE":"NO"}</b>
                  {" · "}
                  Seguro: <b className={v.seguroVigente ? "ok":"ko"}>{v.seguroVigente ? "VIGENTE":"NO"}</b>
                </p>
              </article>
            ))
          }
        </div>
      )}
    </section>
  );
}
