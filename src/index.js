const conectaBanco = require("./database");
const UsuarioService = require("./services/UsuarioService");
const CalendarioService = require("./services/CalendarioService");
const EventoService = require("./services/EventoService");

async function main() {
  await conectaBanco();

  try {
    // Criar usuário
const usuario = await UsuarioService.criarUsuario("Pedro", "pedro" + Date.now() + "@email.com");
    console.log("✅ Usuário criado:", usuario);

    // Criar calendário para o usuário
    const calendario = await CalendarioService.criarCalendario("Calendário Pessoal", usuario._id);
    console.log("✅ Calendário criado:", calendario);

    // Criar evento dentro do calendário
    const evento = await EventoService.criarEvento(
      "Prova de Programação Web",
      new Date("2025-10-10"),
      "Estudar antes!",
      calendario._id
    );
    console.log("✅ Evento criado:", evento);

    // Listar usuários
    const usuarios = await UsuarioService.listarUsuarios();
    console.log("📋 Usuários cadastrados:", usuarios);

    // Listar calendários do usuário
    const calendarios = await CalendarioService.listarPorUsuario(usuario._id);
    console.log("📅 Calendários do usuário:", calendarios);

    // Listar eventos do calendário
    const eventos = await EventoService.listarPorCalendario(calendario._id);
    console.log("🗓️ Eventos do calendário:", eventos);

    // Atualizar usuário
    const usuarioAtualizado = await UsuarioService.atualizarUsuario(usuario._id, { nome: "Pedro A." });
    console.log("✏️ Usuário atualizado:", usuarioAtualizado);

    // Deletar evento
    await EventoService.deletarEvento(evento._id);
    console.log("🗑️ Evento deletado!");

    // Deletar calendário
    await CalendarioService.deletarCalendario(calendario._id);
    console.log("🗑️ Calendário deletado!");

    // Deletar usuário
    await UsuarioService.deletarUsuario(usuario._id);
    console.log("🗑️ Usuário deletado!");
  } catch (erro) {
    console.error("❌ Erro:", erro.message);
  }
}

main();
