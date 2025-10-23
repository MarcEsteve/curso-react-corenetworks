import mongoose from "mongoose";

const vehiculoSchema = new mongoose.Schema({
  matricula: String,
  marca: String,
  modelo: String,
  combustible: String,
  itvVigente: Boolean,
  seguroVigente: Boolean,
});

export default mongoose.model("Vehiculo", vehiculoSchema);
