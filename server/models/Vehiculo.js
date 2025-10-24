import mongoose from "mongoose";

const vehiculoSchema = new mongoose.Schema(
  {
    matricula: { type: String, required: true, unique: true, trim: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    anioMatriculacion: { type: Number, required: true },
    kms: { type: Number, default: 0 },
    combustible: {
      type: String,
      enum: ["Gasolina", "Diésel", "Eléctrico", "Híbrido"],
      required: true,
    },
    itvVigente: { type: Boolean, default: true },
    seguroVigente: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Vehiculo", vehiculoSchema);
