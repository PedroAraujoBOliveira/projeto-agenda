const mongoose = require("mongoose");

const EventoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  data: { type: Date, required: true },
  descricao: { type: String },
  calendario: { type: mongoose.Schema.Types.ObjectId, ref: "Calendario", required: true }
});

const Evento = mongoose.model("Evento", EventoSchema);
module.exports = Evento;
