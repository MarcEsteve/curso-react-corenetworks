type Props = { matricula: string; modelo: string; itv: boolean };

export default function VehiculoCard({ matricula, modelo, itv }: Props) {
  return (
    <article>
      <h3>🚗 {modelo}</h3>
      <p>Matrícula: {matricula}</p>
      <p>ITV: {itv ? "Vigente ✅" : "Caducada 🚫"}</p>
    </article>
  );
}
