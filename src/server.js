const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const conectaBanco = require("./database");

const usuarioRoutes = require("./routes/usuarioRoutes");
const calendarioRoutes = require("./routes/calendarioRoutes");
const eventoRoutes = require("./routes/eventoRoutes");

const app = express();
const PORT = 3000;

// Conecta ao banco MongoDB
conectaBanco();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração de sessão
app.use(
  session({
    secret: "segredo-super-seguro",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 30 } // 30 minutos
  })
);

// Rotas principais
app.use("/usuarios", usuarioRoutes);
app.use("/calendarios", calendarioRoutes);
app.use("/eventos", eventoRoutes);

// Rota inicial (teste)
app.get("/", (req, res) => {
  res.json({ mensagem: "🚀 Servidor Express rodando com sucesso!" });
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
