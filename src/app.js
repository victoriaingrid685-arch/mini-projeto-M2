import express from "express";
import tarefasRouter from "./routes/tarefasRoutes.js";
import { requestLogger } from "./middlewares/logger.js";

const app = express();


app.use(requestLogger);
app.use(express.json());

// rotas
app.use("/tarefas", tarefasRouter);


app.use((err, req, res, next) => {
console.error(err); 
const status = err.statusCode || 500;
res.status(status).json({ error: err.message || "Erro interno" });
});

export default app;
