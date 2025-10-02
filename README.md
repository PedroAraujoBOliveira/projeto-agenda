# 📅 Projeto 1 – Agenda Eletrônica  
Disciplina: **Programação Web Back-End**  
Professor(a): Monique Emídio de Oliveira / Willian Massami Watanabe  

---

## 📖 Descrição
Este projeto consiste no desenvolvimento de uma **biblioteca em Node.js** para manipulação de dados em um banco MongoDB, simulando uma **Agenda Eletrônica**.  
O sistema permite gerenciar:  
- 👤 **Usuários**  
- 🗓️ **Calendários** vinculados a usuários  
- 📌 **Eventos** vinculados a calendários  

O foco do projeto é o **acesso ao banco de dados**, implementação de **CRUDs** e **tratamento de exceções** com registro em **logs**.

---

## ✅ Funcionalidades
- Criar, listar, atualizar e deletar **usuários**.  
- Criar e listar **calendários** de um usuário.  
- Criar e listar **eventos** em um calendário.  
- Relacionamentos entre entidades (`Usuário → Calendário → Evento`).  
- Validação de campos obrigatórios.  
- Tratamento de erros (exemplo: e-mails duplicados).  
- Registro de erros em arquivo de log (`logs/erros.log`).  

---

## 🛠️ Tecnologias utilizadas
- **Node.js** (v22)  
- **MongoDB** (v7)  
- **Mongoose** (ODM)  
- **MongoDB Compass** para visualização dos dados  

---

## 📂 Estrutura de pastas
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
│   ├── database.js
│   └── index.js
│── package.json
│── package-lock.json

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

### 📊 Exemplo de execução

Saída esperada no terminal:

```bash
✅ Conectado ao MongoDB
✅ Usuário criado: { ... }
✅ Calendário criado: { ... }
✅ Evento criado: { ... }
📋 Usuários cadastrados: [ ... ]
📅 Calendários do usuário: [ ... ]
🗓️ Eventos do calendário: [ ... ]
✏️ Usuário atualizado: { ... }
🗑️ Evento deletado!
🗑️ Calendário deletado!
🗑️ Usuário deletado!
```

### 📌 Observações
As collections (usuarios, calendarios, eventos) são criadas automaticamente no MongoDB ao rodar o projeto.
Todos os erros são registrados em logs/erros.log.
O campo email de Usuário é único → não é possível cadastrar usuários repetidos.

### 👨‍💻 Autor
*Pedro Araujo Bueno de Oliveira* <br> *Engenharia de Computação – UTFPR* <br> *Projeto desenvolvido para a disciplina Programação Web Back-End*