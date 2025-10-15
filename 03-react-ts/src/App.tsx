// import React from "react";
import "./App.css";
import Card from "./components/Card";
import Restriccion from "./components/Restriccion";
import Saludo from "./components/Saludo";
import Titulo from "./components/Titulo";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

function App() {
  return (
    // Fragment <></> <React.Fragment></React.Fragment>
    <>
      <Header />
      <Titulo />
      <p>Este es mi primer componente reutilizable.</p>
      <main>
        <p>Uso de Props en componentes:</p>
        <Saludo nombre="Gabriel" />
        <Saludo nombre="Cristina" />
        <Saludo nombre="Rut" />

        <Card titulo="Primero" contenido="Este es mi primer componente Card." />
        <Card titulo="Segundo" contenido="Los componentes pueden repetirse." />
        <Card titulo="Tercero" contenido="Y cada uno tiene props distintas." />
      </main>
      <h2>Simulación de restricción DGT (useState)</h2>
      <Restriccion />
      <Footer />
    </>
  );
}

export default App;
