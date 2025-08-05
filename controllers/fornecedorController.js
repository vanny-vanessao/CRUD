const Fornecedor = require('../models/fornecedorModel');

module.exports = {
  listar: async (req, res) => {
    const fornecedores = await Fornecedor.findAll();
    res.render('fornecedores/index', { fornecedores });
  },

  criarForm: (req, res) => {
    res.render('fornecedores/create');
  },

  criar: async (req, res) => {
    await Fornecedor.create(req.body);
    res.redirect('/fornecedores');
  },

  editarForm: async (req, res) => {
    const fornecedor = await Fornecedor.findByPk(req.params.id);
    res.render('fornecedores/edit', { fornecedor });
  },

  editar: async (req, res) => {
    await Fornecedor.update(req.body, { where: { id: req.params.id } });
    res.redirect('/fornecedores');
  },

  deletar: async (req, res) => {
    await Fornecedor.destroy({ where: { id: req.params.id } });
    res.redirect('/fornecedores');
  }
};