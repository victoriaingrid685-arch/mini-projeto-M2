import { Router } from "express";
import TarefasController from "../controllers/tarefasController.js";
import {
validateTaskPost,
validateTaskPut,
validateStatusPatch,
validIdParam
} from "../middlewares/validateTask.js";

const router = Router();

// inicializa modelo (cria tabela se necessário) — executa uma vez
TarefasController.init().catch((err) => {
console.error("Erro ao inicializar modelo:", err);
});

// endpoints obrigatórios
router.post("/", validateTaskPost, (req, res, next) => TarefasController.criar(req, res, next));
router.get("/", (req, res, next) => TarefasController.listar(req, res, next));
router.get("/concluidas", (req, res, next) => TarefasController.listarConcluidas(req, res, next)); // rota extra
router.get("/:id", validIdParam, (req, res, next) => TarefasController.buscarPorId(req, res, next));
router.put("/:id", validIdParam, validateTaskPut, (req, res, next) => TarefasController.atualizar(req, res, next));
router.patch("/:id/status", validIdParam, validateStatusPatch, (req, res, next) => TarefasController.atualizarStatus(req, res, next));
router.delete("/:id", validIdParam, (req, res, next) => TarefasController.deletar(req, res, next));

export default router;
