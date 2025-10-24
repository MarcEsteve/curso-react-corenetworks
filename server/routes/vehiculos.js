import express from "express";
import Vehiculo from "../models/Vehiculo.js";

const router = express.Router();

// GET /api/vehiculos → lista
router.get("/", async (_req, res) => {
  const items = await Vehiculo.find().sort({ createdAt: -1 });
  res.json(items);
});

// GET /api/vehiculos/:id → detalle
router.get("/:id", async (req, res) => {
  const item = await Vehiculo.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "No encontrado" });
  res.json(item);
});

// POST /api/vehiculos → crear
router.post("/", async (req, res) => {
  try {
    const nuevo = await Vehiculo.create(req.body);
    res.status(201).json(nuevo);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// PUT /api/vehiculos/:id → reemplazar completo
router.put("/:id", async (req, res) => {
  try {
    const actualizado = await Vehiculo.findByIdAndUpdate(req.params.id, req.body, {
      new: true, runValidators: true, overwrite: true
    });
    if (!actualizado) return res.status(404).json({ error: "No encontrado" });
    res.json(actualizado);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// PATCH /api/vehiculos/:id → actualizar parcial
router.patch("/:id", async (req, res) => {
  try {
    const actualizado = await Vehiculo.findByIdAndUpdate(req.params.id, req.body, {
      new: true, runValidators: true
    });
    if (!actualizado) return res.status(404).json({ error: "No encontrado" });
    res.json(actualizado);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// DELETE /api/vehiculos/:id → borrar
router.delete("/:id", async (req, res) => {
  const borrado = await Vehiculo.findByIdAndDelete(req.params.id);
  if (!borrado) return res.status(404).json({ error: "No encontrado" });
  res.json({ ok: true });
});

export default router;
