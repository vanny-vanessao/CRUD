const Produto = require('../models/produtoModel');
const Categoria = require('../models/categoriaModel');
const Fornecedor = require('../models/fornecedorModel');

module.exports = {
  listar: async (req, res) => {
    const produtos = await Produto.findAll({ include: [Categoria, Fornecedor] });
    res.render('produtos/index', { produtos });
  },

  criarForm: async (req, res) => {
    const categorias = await Categoria.findAll();
    const fornecedores = await Fornecedor.findAll();
    res.render('produtos/create', { categorias, fornecedores });
  },

  criar: async (req, res) => {
    await Produto.create(req.body);
    res.redirect('/produtos');
  },

  editarForm: async (req, res) => {
    const produto = await Produto.findByPk(req.params.id);
    const categorias = await Categoria.findAll();
    const fornecedores = await Fornecedor.findAll();
    res.render('produtos/edit', { produto, categorias, fornecedores });
  },

  editar: async (req, res) => {
    await Produto.update(req.body, { where: { id: req.params.id } });
    res.redirect('/produtos');
  },

  deletar: async (req, res) => {
    await Produto.destroy({ where: { id: req.params.id } });
    res.redirect('/produtos');
  }
};