const Categoria = require('../models/categoriaModel');

module.exports = {
  listar: async (req, res) => {
    const categorias = await Categoria.findAll();
    res.render('categorias/index', { categorias });
  },

  criarForm: (req, res) => {
    res.render('categorias/create');
  },

  criar: async (req, res) => {
    await Categoria.create(req.body);
    res.redirect('/categorias');
  },

  editarForm: async (req, res) => {
    const categoria = await Categoria.findByPk(req.params.id);
    res.render('categorias/edit', { categoria });
  },

  editar: async (req, res) => {
    await Categoria.update(req.body, { where: { id: req.params.id } });
    res.redirect('/categorias');
  },

  deletar: async (req, res) => {
    await Categoria.destroy({ where: { id: req.params.id } });
    res.redirect('/categorias');
  }
};