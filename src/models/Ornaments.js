import Sequelize from "sequelize";
import connection from "../database/db";

export const Ornaments = connection.define("candy", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  foto: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
    freezeTableName: true,
    timesTamps: false,
    createdAt: false,
    updateAt: false,
});
