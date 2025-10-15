// import React from "react";
import "./App.css";
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
      </main>
      <Footer />
    </>
  );
}

export default App;
