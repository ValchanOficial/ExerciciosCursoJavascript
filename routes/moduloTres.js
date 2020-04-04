const { Router } = require('express');
const routes = Router();

const ModuloTres = require('../controllers/moduloTres');

routes.get('/app-todos', ModuloTres.appTodos);
routes.get('/todos.js', ModuloTres.renderJSFile);

module.exports = routes;