const Calendario = require("../models/Calendario");
const fs = require("fs");
const path = require("path");

const logPath = path.join(__dirname, "../../logs/erros.log");

function salvarLog(erro) {
  const mensagem = `[${new Date().toISOString()}] ${erro}\n`;
  fs.appendFileSync(logPath, mensagem);
}

class CalendarioService {
  static async criarCalendario(nome, usuarioId) {
    try {
      const calendario = new Calendario({ nome, usuario: usuarioId });
      return await calendario.save();
    } catch (erro) {
      salvarLog(erro.message);
      throw erro;
    }
  }

  static async listarPorUsuario(usuarioId) {
    try {
      return await Calendario.find({ usuario: usuarioId }).populate("usuario");
    } catch (erro) {
      salvarLog(erro.message);
      throw erro;
    }
  }

  static async deletarCalendario(id) {
    try {
      return await Calendario.findByIdAndDelete(id);
    } catch (erro) {
      salvarLog(erro.message);
      throw erro;
    }
  }
}

module.exports = CalendarioService;
