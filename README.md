# 📅 Projeto 1 e 2 – Agenda Eletrônica  
Disciplina: **Programação Web Back-End**  
Professor(a): Monique Emídio de Oliveira / Willian Massami Watanabe  

---

## 📖 Descrição
Este projeto foi desenvolvido em duas etapas, integrando conceitos de **back-end com Node.js**, **MongoDB** e **Express.js**.  
Ele representa uma **Agenda Eletrônica**, permitindo o gerenciamento de usuários, calendários e eventos, com autenticação e controle de sessões.  

O projeto atende a **todos os requisitos das duas partes da disciplina**:
- **Projeto 1:** Biblioteca Node.js com CRUD e logs.  
- **Projeto 2:** Aplicação web com Express.js, rotas HTTP, login e sessões.

---

## ✅ Funcionalidades
- 👤 Cadastro, listagem, atualização e deleção de **usuários**.  
- 🗓️ Criação e listagem de **calendários** vinculados a usuários.  
- 📌 Criação e listagem de **eventos** vinculados a calendários.  
- 🔐 **Login e logout de usuários** com controle de sessão.  
- ⚙️ **Validação** de campos obrigatórios e tratamento de erros.  
- 🪵 **Registro de logs** de erros no arquivo `logs/erros.log`.  
- 💾 Persistência de dados no **MongoDB** via `mongoose`.  

---

## 🛠️ Tecnologias utilizadas
- **Node.js** (v22)  
- **Express.js** (v4)  
- **MongoDB** (v7)  
- **Mongoose** (ODM)  
- **Express-session** (gerenciamento de sessão)  
- **Morgan** (logger de requisições HTTP)  
- **Body-parser** (leitura de JSON e formulários)  
- **CORS** (controle de acesso externo)  
- **Postman** (testes de rotas HTTP)

---

## 📂 Estrutura de pastas
```bash
projeto1-agenda/
│── logs/
│   └── erros.log
│── src/
│   ├── models/
│   │   ├── Usuario.js
│   │   ├── Calendario.js
│   │   └── Evento.js
│   ├── services/
│   │   ├── UsuarioService.js
│   │   ├── CalendarioService.js
│   │   └── EventoService.js
|   ├── routes/
│   │   ├── calendarioRoutes.js
│   │   ├── eventoRoutes.js
│   │   └── usuarioRoutes.js
│   ├── database.js
│   └── server.js
│── package.json
│── package-lock.json
```
---

## 🚀 Como executar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/projeto1-agenda.git
cd projeto1-agenda
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Garantir que o MongoDB esteja rodando
```bash
net start MongoDB   # Windows
mongod              # Linux/Mac
```

### 4. Executar o projeto
```bash
node src/index.js
```

### 5. Saída esperada no terminal

✅ Servidor rodando em http://localhost:3000 <br>
✅ Conectado ao MongoDB


## 🌐 Testando as rotas (via Postman)

A seguir estão as requisições que podem ser utilizadas no **Postman** para testar todas as funcionalidades da API Agenda Eletrônica.

---

### ➤ **1. Criar Usuário**
**Método:** `POST`  
**URL:** `http://localhost:3000/usuarios/registrar`  
**Body (raw → JSON):**
```json
{
  "nome": "Pedro",
  "email": "pedro@email.com"
}

```

## Resposta Esperada
```json
{
  "_id": "68d56a09877c923b8be71ee3",
  "nome": "Pedro",
  "email": "pedro@email.com",
  "__v": 0
}
```

### ➤ **2. Fazer Login**
**Método:** `POST`  
**URL:** `http://localhost:3000/usuarios/login`  
**Body (raw → JSON):**

```json
{
  "email": "pedro@email.com"
}
```

### Resposta Esperada

```json
{
  "mensagem": "Login realizado com sucesso!",
  "usuario": {
    "_id": "68d56a09877c923b8be71ee3",
    "nome": "Pedro",
    "email": "pedro@email.com",
    "__v": 0
  }
}
```

### ➤ **3. Criar Calendário**
**Método:** `POST`  
**URL:** `http://localhost:3000/calendarios/criar`  
**Body (raw → JSON):**

```json
{
  "nome": "Calendário Pessoal"
}
```

### Resposta Esperada

```json
{
  "_id": "68de7072fc7314ac82755125",
  "nome": "Calendário Pessoal",
  "usuario": "68de7072fc7314ac82755122",
  "__v": 0
}
```

### ➤ **4. Criar Evento**
**Método:** `POST`  
**URL:** `http://localhost:3000/eventos/criar`  
**Body (raw → JSON):**

```json
{
  "titulo": "Prova de Programação Web",
  "data": "2025-11-25",
  "descricao": "Estudar antes!",
  "calendarioId": "ID_DO_CALENDARIO_CRIADO"
}
```

### Resposta Esperada

```json
{
  "_id": "68de7072fc7314ac82755127",
  "titulo": "Prova de Programação Web",
  "data": "2025-11-25T00:00:00.000Z",
  "descricao": "Estudar antes!",
  "calendario": "68de7072fc7314ac82755125",
  "__v": 0
}
```

### ➤ **5. Listar Usuários**
**Método:** `GET`  
**URL:** `http://localhost:3000/usuarios`  

### Resposta Esperada

```json
[
  {
    "_id": "68d56a09877c923b8be71ee3",
    "nome": "Pedro",
    "email": "pedro@email.com",
    "__v": 0
  }
]
```

### ➤ **6. Logout**
**Método:** `POST`  
**URL:** `http://localhost:3000/usuarios/logout`  

### Resposta Esperada

```json
{
  "mensagem": "Logout realizado com sucesso!"
}
```

💡 O Postman guarda automaticamente o cookie de sessão, então você pode acessar as rotas protegidas sem precisar fazer login novamente até encerrar a sessão.

### Dicas Adicionais
Sempre verifique se o servidor está rodando:

```json
✅ Servidor rodando em http://localhost:3000
✅ Conectado ao MongoDB
```

Caso a rota retorne 401 - Usuário não autenticado, refaça o login antes da requisição. <br>
Os dados inseridos podem ser visualizados também no MongoDB Compass.

### 📌 Observações
As collections (usuarios, calendarios, eventos) são criadas automaticamente no MongoDB ao rodar o projeto.
Todos os erros são registrados em logs/erros.log.
O campo email de Usuário é único → não é possível cadastrar usuários repetidos.

### 👨‍💻 Autor
*Pedro Araujo Bueno de Oliveira* e *Leonardo Rodrigues de Souza*<br> *Engenharia de Computação – UTFPR* <br> *Projeto desenvolvido para a disciplina Programação Web Back-End*