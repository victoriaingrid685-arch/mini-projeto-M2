🗂️ To-Do List — Mini Projeto Módulo 2

Aplicação criada como parte do Módulo 2 do curso Programadores do Amanhã, com o objetivo de praticar conceitos fundamentais de APIs REST, Node.js, Express e Sequelize.

Este projeto representa uma lista de tarefas (To-Do List), permitindo criar, visualizar, atualizar e deletar tarefas de forma simples e organizada. Foi uma ótima oportunidade para entender, na prática, como o back-end conversa com o banco de dados e gerencia informações através de rotas.

🚀 Tecnologias utilizadas

Node.js — ambiente de execução JavaScript no servidor

Express — criação e gerenciamento de rotas da aplicação

Sequelize — ORM para comunicação com o banco de dados

SQLite — banco de dados leve e simples para persistência local

Nodemon — reinicialização automática durante o desenvolvimento

dotenv — gerenciamento de variáveis de ambiente

⚙️ Funcionalidades da API

A API segue os princípios REST e permite realizar todas as operações do CRUD:

Método	Rota	Descrição
POST	/tarefas	Cria uma nova tarefa
GET	/tarefas	Lista todas as tarefas
GET	/tarefas/:id	Exibe uma tarefa específica
PUT	/tarefas/:id	Atualiza todos os dados de uma tarefa
PATCH	/tarefas/:id/status	Atualiza apenas o status da tarefa
DELETE	/tarefas/:id	Deleta uma tarefa pelo ID
GET	/tarefas/concluidas	(Extra) Lista apenas as tarefas concluídas
🧠 Aprendizados

Durante o desenvolvimento, foi possível:

Entender a importância de uma boa estrutura MVC (Model-View-Controller)

Aprender a modelar dados e criar migrations automáticas com o Sequelize

Praticar tratamento de erros e validações de rotas

Testar e visualizar os retornos da API diretamente no Postman

Criar endpoints organizados e reutilizáveis

🧾 Como rodar o projeto localmente

Clone o repositório:

git clone https://github.com/victoriaingrid685-arch/MINI-PROJETO-M2.git


Acesse a pasta:

cd MINI-PROJETO-M2


Instale as dependências:

npm install


Inicie o servidor:

npm run dev


Acesse no navegador ou no Postman:

http://localhost:3000/tarefas

👩‍💻 Desenvolvido por

Victoria Ingrid