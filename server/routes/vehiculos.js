import express from "express";
import Vehiculo from "../models/Vehiculo.js";

const router = express.Router();

// GET: leer todos los vehículos
router.get("/", async (req, res) => {
  const vehiculos = await Vehiculo.find();
  res.json(vehiculos);
});

// POST: crear un nuevo vehículo
router.post("/", async (req, res) => {
  const nuevoVehiculo = new Vehiculo(req.body);
  await nuevoVehiculo.save();
  res.json({ mensaje: "Vehículo añadido correctamente" });
});

export default router;
