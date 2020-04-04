const { Router } = require('express');
const routes = Router();

const ModuloQuatro = require('../controllers/moduloQuatro');

routes.get('/exercicio-um', ModuloQuatro.exercicioUm);
routes.get('/exercicio-dois', ModuloQuatro.exercicioDois);
routes.get('/exercicio-tres', ModuloQuatro.exercicioTres);

module.exports = routes;