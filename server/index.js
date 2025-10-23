import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import vehiculosRoutes from "./routes/vehiculos.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB local primero
mongoose.connect("mongodb://localhost:27017/dgt_vehiculos")
  .then(() => console.log("✅ Conectado a MongoDB local"))
  .catch(err => console.error("❌ Error de conexión:", err));

// Rutas
app.use("/api/vehiculos", vehiculosRoutes);

// Puerto
const PORT = 4000;
app.listen(PORT, () => console.log(`🚗 Servidor en http://localhost:${PORT}`));
