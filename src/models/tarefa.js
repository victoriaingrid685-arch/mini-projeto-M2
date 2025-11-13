import { DataTypes } from "sequelize";
import sequelize from "../database/index.js";

// Model Tarefa — campos essenciais: titulo, descricao, status
const Tarefa = sequelize.define("Tarefa", {
titulo: {
    type: DataTypes.STRING,
    allowNull: false
},
descricao: {
    type: DataTypes.TEXT,
    allowNull: true
},
status: {
    type: DataTypes.ENUM("a fazer", "em andamento", "concluída"),
    allowNull: false,
    defaultValue: "a fazer"
}
}, {
tableName: "tarefas",
  timestamps: true, // createdAt e updatedAt automáticos
createdAt: "criadoEm",
updatedAt: "atualizadoEm"
});

export default Tarefa;
