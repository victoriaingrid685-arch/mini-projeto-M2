import express from "express";
import tarefasRouter from "./routes/tarefasRoutes.js";
import { requestLogger } from "./middlewares/logger.js";

const app = express();

// middlewares globais
app.use(requestLogger);
app.use(express.json());

// rotas
app.use("/tarefas", tarefasRouter);

// tratamento de erro simples
app.use((err, req, res, next) => {
console.error(err); // log mínimo para debug
const status = err.statusCode || 500;
res.status(status).json({ error: err.message || "Erro interno" });
});

export default app;
