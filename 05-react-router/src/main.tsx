import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactRouter from './ReactRouter'
import { BrowserRouter } from "react-router-dom";
// import Nosotros from './Nosotros';
// import Servicios from './Servicios';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Header></Header> */}
    {/* <Nosotros /> */}
    {/* <Servicios /> */}
    <BrowserRouter>
      <ReactRouter />
    </BrowserRouter>
    {/* <Footer></Footer> */}
  </StrictMode>,
)
