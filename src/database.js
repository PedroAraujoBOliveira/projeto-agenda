const mongoose = require("mongoose");

async function conectaBanco() {
  try {
    await mongoose.connect("mongodb://localhost:27017/agenda");
    console.log("✅ Conectado ao MongoDB");
  } catch (erro) {
    console.error("❌ Erro ao conectar ao MongoDB:", erro.message);
  }
}

module.exports = conectaBanco;
