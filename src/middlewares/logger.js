export function requestLogger(req, res, next) {
  // um log simples pra mostrar atividade (parece humano)
console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
next();
}