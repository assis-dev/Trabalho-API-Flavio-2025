# 📚 API de Revisão de Endpoints HTTP

Este projeto é um material didático para **aprender e praticar o desenvolvimento de APIs REST** com **Node.js, TypeScript e Express**.
A proposta é evoluir do **básico ao intermediário**, com exercícios práticos para consolidar o aprendizado.

---

## 🎯 Objetivos de Aprendizagem

* **Métodos HTTP** → GET, POST, PUT, PATCH e DELETE
* **Parâmetros** → Route Params, Query Params e Request Body
* **Validações** → Básicas e robustas de dados
* **Status Codes** → Uso apropriado para cada situação
* **TypeScript** → Aplicar tipagem estática no projeto
* **Boas práticas** → Estrutura de projeto e respostas consistentes

---

## 🚀 Configuração do Projeto

### 📌 Pré-requisitos

* Node.js **18+**
* npm ou yarn
* Editor de código (VS Code recomendado)
* Cliente HTTP (Thunder Client, Insomnia ou Postman)

### 📥 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

# Instale as dependências
npm install
```

### ▶️ Executando o projeto

```bash
# Ambiente de desenvolvimento
npm run dev

# Compilar para JavaScript
npm run build

# Executar versão compilada
npm start
```

---

## 📂 Estrutura do Projeto

```
src/
 ├── routes/          # Rotas da API
 ├── controller/      # Lógica de cada endpoint
 ├── business/        # Regras de negócio
 ├── data/            # Dados simulados (mock)
 └── server.ts        # Arquivo principal
```

---

## 🛠️ Exercícios Propostos

### ✅ Seção 1: Métodos GET

* [x] Listar usuários
* [ ] GET `/users/:id` → Buscar usuário por ID
* [ ] GET `/users/age-range?min=25&max=35` → Buscar por faixa etária

### ✅ Seção 2: Métodos POST

* [x] Criar usuário com validações
* [ ] POST `/posts` → Criar post com validações personalizadas

### ✅ Seção 3: Métodos PUT e PATCH

* [ ] PUT `/users/:id` → Atualizar usuário completamente
* [ ] PATCH `/posts/:id` → Atualização parcial de posts

### ✅ Seção 4: Métodos DELETE

* [ ] DELETE `/posts/:id` → Autor do post ou admin pode excluir
* [ ] DELETE `/users/cleanup-inactive?confirm=true` → Remover inativos

---

## 📡 Exemplos de Requisições

### 🔎 Buscar usuário por ID

```http
GET http://localhost:3000/users/1
```

### ➕ Criar post

```http
POST http://localhost:3000/posts
Content-Type: application/json

{
  "title": "Meu primeiro post",
  "content": "Conteúdo de exemplo",
  "authorId": 1
}
```

---

## ✅ Lista de Verificação

* [ ] GET básico funcionando
* [ ] Validações robustas
* [ ] PUT vs PATCH implementados
* [ ] DELETE com regras de negócio
* [ ] Status codes apropriados
* [ ] Respostas padronizadas

---

## 📖 Recursos

* [Express.js](https://expressjs.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [HTTP Status Codes](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)

---

## 👨‍💻 Autor

Projeto desenvolvido para fins de estudo — aprendizado prático de APIs REST com Node.js + TypeScript.
