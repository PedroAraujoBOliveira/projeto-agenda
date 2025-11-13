const express = require("express");
const router = express.Router();
const CalendarioService = require("../services/CalendarioService");

router.post("/criar", async (req, res) => {
  if (!req.session.usuario) {
    return res.status(401).json({ erro: "Usuário não autenticado." });
  }

  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ erro: "O nome do calendário é obrigatório." });
  }

  try {
    const calendario = await CalendarioService.criarCalendario(
      nome,
      req.session.usuario._id
    );
    res.status(201).json(calendario);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

router.get("/", async (req, res) => {
  if (!req.session.usuario) {
    return res.status(401).json({ erro: "Usuário não autenticado." });
  }

  try {
    const calendarios = await CalendarioService.listarPorUsuario(
      req.session.usuario._id
    );
    res.json(calendarios);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

module.exports = router;
