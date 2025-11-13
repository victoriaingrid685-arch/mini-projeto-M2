import Tarefa from "../models/tarefa.js";

// controlador com as funções 
class TarefasController {

static async init() {
    await Tarefa.sync(); // cria tabela se não existir
}

static async criar(req, res, next) {
try {
const { titulo, descricao, status } = req.body;
// validação já feita por middleware
const nova = await Tarefa.create({ titulo, descricao, status });
return res.status(201).json(nova);
} catch (err) {
next(err);
}
}

static async listar(req, res, next) {
try {
const tarefas = await Tarefa.findAll({ order: [["criadoEm", "DESC"]] });
return res.status(200).json(tarefas);
    } catch (err) {
next(err);
    }
}

static async buscarPorId(req, res, next) {
    try {
const { id } = req.params;
const tarefa = await Tarefa.findByPk(id);
if (!tarefa) return res.status(404).json({ error: "Tarefa não encontrada" });
return res.status(200).json(tarefa);
    } catch (err) {
next(err);
    }
}

static async atualizar(req, res, next) {
    try {
const { id } = req.params;
const { titulo, descricao, status } = req.body;
const tarefa = await Tarefa.findByPk(id);
if (!tarefa) return res.status(404).json({ error: "Tarefa não encontrada" });
      // validação do título feita por middleware
tarefa.titulo = titulo;
tarefa.descricao = descricao;
if (status) tarefa.status = status;
await tarefa.save();
return res.status(200).json(tarefa);
    } catch (err) {
next(err);
    }
}

static async atualizarStatus(req, res, next) {
try {
const { id } = req.params;
const { status } = req.body;
const tarefa = await Tarefa.findByPk(id);
if (!tarefa) return res.status(404).json({ error: "Tarefa não encontrada" });
tarefa.status = status;
await tarefa.save();
return res.status(200).json(tarefa);
} catch (err) {
next(err);
}
}

static async deletar(req, res, next) {
try {
const { id } = req.params;
const tarefa = await Tarefa.findByPk(id);
if (!tarefa) return res.status(404).json({ error: "Tarefa não encontrada" });
await tarefa.destroy();
return res.status(200).json({ mensagem: "Tarefa deletada com sucesso" });
} catch (err) {
next(err);
}
}


static async listarConcluidas(req, res, next) {
try {
const tarefas = await Tarefa.findAll({
where: { status: "concluída" },
order: [["criadoEm", "DESC"]]
});
return res.status(200).json(tarefas);
} catch (err) {
next(err);
}
}
}

export default TarefasController;
