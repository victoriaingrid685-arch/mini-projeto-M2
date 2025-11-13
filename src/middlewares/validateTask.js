export const validStatus = ["a fazer", "em andamento", "concluída"];

export function validateTaskPost(req, res, next) {
const { titulo, descricao, status } = req.body;
if (!titulo || String(titulo).trim() === "") {
    return res.status(400).json({ error: "titulo é obrigatório" });
}
if (status && !validStatus.includes(status)) {
    return res.status(400).json({ error: `status inválido. Valores válidos: ${validStatus.join(", ")}` });
}
next();
}

export function validateTaskPut(req, res, next) {
const { titulo, status } = req.body;
if (!titulo || String(titulo).trim() === "") {
    return res.status(400).json({ error: "titulo é obrigatório" });
}
if (status && !validStatus.includes(status)) {
    return res.status(400).json({ error: `status inválido. Valores válidos: ${validStatus.join(", ")}` });
}
next();
}

export function validateStatusPatch(req, res, next) {
const { status } = req.body;
if (!status) {
    return res.status(400).json({ error: "status é obrigatório" });
}
if (!validStatus.includes(status)) {
    return res.status(400).json({ error: `status inválido. Valores válidos: ${validStatus.join(", ")}` });
}
next();
}

export function validIdParam(req, res, next) {
const { id } = req.params;
if (!id || Number.isNaN(Number(id))) {
    return res.status(400).json({ error: "ID inválido" });
}
next();
}