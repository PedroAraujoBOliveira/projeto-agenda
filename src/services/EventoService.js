const Evento = require("../models/Evento");
const fs = require("fs");
const path = require("path");

const logPath = path.join(__dirname, "../../logs/erros.log");

function salvarLog(erro) {
  const mensagem = `[${new Date().toISOString()}] ${erro}\n`;
  fs.appendFileSync(logPath, mensagem);
}

class EventoService {
  static async criarEvento(titulo, data, descricao, calendarioId) {
    try {
      const evento = new Evento({ titulo, data, descricao, calendario: calendarioId });
      return await evento.save();
    } catch (erro) {
      salvarLog(erro.message);
      throw erro;
    }
  }

  static async listarPorCalendario(calendarioId) {
    try {
      return await Evento.find({ calendario: calendarioId }).populate("calendario");
    } catch (erro) {
      salvarLog(erro.message);
      throw erro;
    }
  }

  static async deletarEvento(id) {
    try {
      return await Evento.findByIdAndDelete(id);
    } catch (erro) {
      salvarLog(erro.message);
      throw erro;
    }
  }
}

module.exports = EventoService;
