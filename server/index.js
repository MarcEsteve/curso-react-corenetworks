import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import vehiculosRoutes from "./routes/vehiculos.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Healthcheck sencillo
app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.use("/api/vehiculos", vehiculosRoutes);

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI; // Atlas

async function start() {
  try {
    if (!MONGODB_URI) throw new Error("Falta MONGODB_URI en .env");
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Conectado a MongoDB Atlas");
    app.listen(PORT, () =>
      console.log(`🚗 API en http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("❌ Error conectando a MongoDB Atlas:", err.message);
    process.exit(1);
  }
}
start();
