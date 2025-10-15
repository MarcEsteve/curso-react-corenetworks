import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

//Indicamos que utilizamos React

//Antes SWC se compilaba con Babel, actualmente Vite usa SWC directamente para compilar el código de React, lo que mejora el rendimiento y reduce el tiempo de construcción.

//SWC es Speedy Web Compiler, una herramienta de compilación rápida escrita en Rust que se utiliza para transformar y optimizar el código JavaScript y TypeScript.