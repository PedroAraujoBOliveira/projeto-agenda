const Usuario = require("../models/Usuario");
const fs = require("fs");
const path = require("path");

// Caminho do arquivo de log
const logPath = path.join(__dirname, "../../logs/erros.log");

function salvarLog(erro) {
  const mensagem = `[${new Date().toISOString()}] ${erro}\n`;
  fs.appendFileSync(logPath, mensagem);
}

class UsuarioService {
  static async criarUsuario(nome, email) {
    try {
      const usuario = new Usuario({ nome, email });
      return await usuario.save();
    } catch (erro) {
      salvarLog(erro.message);
      throw erro;
    }
  }

  static async listarUsuarios() {
    try {
      return await Usuario.find();
    } catch (erro) {
      salvarLog(erro.message);
      throw erro;
    }
  }

  static async buscarUsuarioPorId(id) {
    try {
      return await Usuario.findById(id);
    } catch (erro) {
      salvarLog(erro.message);
      throw erro;
    }
  }

  static async atualizarUsuario(id, dados) {
    try {
      return await Usuario.findByIdAndUpdate(id, dados, { new: true });
    } catch (erro) {
      salvarLog(erro.message);
      throw erro;
    }
  }

  static async deletarUsuario(id) {
    try {
      return await Usuario.findByIdAndDelete(id);
    } catch (erro) {
      salvarLog(erro.message);
      throw erro;
    }
  }
}

module.exports = UsuarioService;
