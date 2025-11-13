const express = require("express");
const router = express.Router();
const UsuarioService = require("../services/UsuarioService");

// Rota de registro
router.post("/registrar", async (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ erro: "Nome e e-mail são obrigatórios!" });
  }

  try {
    const usuario = await UsuarioService.criarUsuario(nome, email);
    res.status(201).json(usuario);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

// Rota de login (simples)
router.post("/login", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ erro: "E-mail é obrigatório para login!" });
  }

  try {
    const usuario = (await UsuarioService.listarUsuarios()).find(
      (u) => u.email === email
    );

    if (!usuario) {
      return res.status(404).json({ erro: "Usuário não encontrado!" });
    }

    // Cria sessão
    req.session.usuario = usuario;
    res.json({ mensagem: "Login realizado com sucesso!", usuario });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

// Rota de logout
router.post("/logout", (req, res) => {
  req.session.destroy();
  res.json({ mensagem: "Logout realizado com sucesso!" });
});

// Listar todos usuários (somente se logado)
router.get("/", (req, res) => {
  if (!req.session.usuario) {
    return res.status(401).json({ erro: "Faça login primeiro." });
  }

  UsuarioService.listarUsuarios()
    .then((usuarios) => res.json(usuarios))
    .catch((erro) => res.status(500).json({ erro: erro.message }));
});

module.exports = router;
