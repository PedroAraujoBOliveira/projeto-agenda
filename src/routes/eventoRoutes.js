const express = require("express");
const router = express.Router();
const EventoService = require("../services/EventoService");

router.post("/criar", async (req, res) => {
  if (!req.session.usuario) {
    return res.status(401).json({ erro: "Usuário não autenticado." });
  }

  const { titulo, data, descricao, calendarioId } = req.body;

  if (!titulo || !data || !calendarioId) {
    return res.status(400).json({ erro: "Título, data e calendário são obrigatórios." });
  }

  try {
    const evento = await EventoService.criarEvento(
      titulo,
      data,
      descricao,
      calendarioId
    );
    res.status(201).json(evento);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

router.get("/:calendarioId", async (req, res) => {
  if (!req.session.usuario) {
    return res.status(401).json({ erro: "Usuário não autenticado." });
  }

  try {
    const eventos = await EventoService.listarPorCalendario(req.params.calendarioId);
    res.json(eventos);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

module.exports = router;
