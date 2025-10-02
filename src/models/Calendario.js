const mongoose = require("mongoose");

const CalendarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true }
});

const Calendario = mongoose.model("Calendario", CalendarioSchema);
module.exports = Calendario;
