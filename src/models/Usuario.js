const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

const Usuario = mongoose.model("Usuario", UsuarioSchema);
module.exports = Usuario;
