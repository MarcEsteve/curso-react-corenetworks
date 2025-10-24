import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { VehiculosAPI } from "../api";

type Vehiculo = {
  _id: string; matricula: string; marca: string; modelo: string;
  anioMatriculacion: number; kms: number; combustible: string;
  itvVigente: boolean; seguroVigente: boolean; createdAt?: string; updatedAt?: string;
};

export default function VehiculoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [v, setV] = useState<Vehiculo | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    VehiculosAPI.get(id)
      .then(setV)
      .catch(e => setError(String(e)));
  }, [id]);

  if (error) return <p style={{padding:20, color:"crimson"}}>Error: {error}</p>;
  if (!v) return <p style={{padding:20}}>Cargando detalle…</p>;

  return (
    <section className="wrap">
      <div className="card" style={{ marginBottom: 12 }}>
        <button className="btn" onClick={() => navigate(-1)}>← Volver</button>
      </div>

      <article className="card">
        <header style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <h2 style={{margin:0}}>{v.marca} {v.modelo}</h2>
          <span className="chip">{v.matricula}</span>
        </header>

        <ul style={{lineHeight:1.9}}>
          <li><b>Año matriculación:</b> {v.anioMatriculacion}</li>
          <li><b>Kilometraje:</b> {v.kms.toLocaleString()} kms</li>
          <li><b>Combustible:</b> {v.combustible}</li>
          <li><b>ITV:</b> {v.itvVigente ? "VIGENTE ✅" : "NO ❌"}</li>
          <li><b>Seguro:</b> {v.seguroVigente ? "VIGENTE ✅" : "NO ❌"}</li>
          {v.createdAt && <li><b>Creado:</b> {new Date(v.createdAt).toLocaleString()}</li>}
          {v.updatedAt && <li><b>Actualizado:</b> {new Date(v.updatedAt).toLocaleString()}</li>}
        </ul>

        <div className="actions">
          <Link className="btn" to="/vehiculos">Ir a la lista</Link>
        </div>
      </article>
    </section>
  );
}
