const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Fornecedor = sequelize.define('Fornecedor', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'fornecedores',
  timestamps: false,
});

module.exports = Fornecedor;