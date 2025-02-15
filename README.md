# 📝 Task Management API  

🚀 **Task Management API** é uma API REST simplificada para gerenciamento de tarefas, construída com **Node.js**, **Express** e **SQLite**.  

---

## ⚙️ Tecnologias Utilizadas
- ✅ Node.js - Runtime para execução do JavaScript no backend
- ✅ Express.js - Framework minimalista para criação de APIs
- ✅ SQLite3 - Banco de dados SQL leve e eficiente
- ✅ Sequelize - ORM para manipulação da base de dados
- ✅ Nodemon - Hot reload para ambiente de desenvolvimento

## 🚀 Instalação e Execução
1. Clone o repositório:
    ```bash
    git clone <repository-url>
    cd task-api
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Execute a API:
    ```bash
    npm start
    ```

## 🔥 Endpoints da API
### 📌 Criar uma nova tarefa
- **Método:** POST api/tarefa
- **Body (JSON):**
    ```json
    {
      "nome": "Estudar Node.js",
      "descricao": "Revisar conceitos de Express e Sequelize"
    }
    ```
- **Resposta:**
    ```json
    {
      "id": 1,
      "nome": "Estudar Node.js",
      "descricao": "Revisar conceitos de Express e Sequelize",
      "createdAt": "2025-02-15T12:00:00Z"
    }
    ```

### 📌 Listar todas as tarefas
- **Método:** GET api/tarefa
- **Resposta:**
    ```json
    {
      "lista": [
        {
          "id": 1,
          "nome": "Estudar Node.js",
          "descricao": "Revisar conceitos de Express e Sequelize"
        }
      ]
    }
    ```

### 📌 Deletar uma tarefa
- **Método:** DELETE api/tarefa/:id
- **Resposta:**
    ```json
    {
      "msg": "Tarefa deletada com sucesso"
    }
    ```
- **Caso não exista a tarefa:**
    ```json
    {
      "msg": "Não foi possível deletar a tarefa"
    }
    ```

🚀 Desenvolvido com 💙 para aprendizado e boas práticas na construção de APIs.
