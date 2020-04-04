const { Router } = require('express');
const routes = Router();

const ModuloUm = require('../controllers/moduloUm');

routes.post('/exercicio-um', ModuloUm.exercicioUm);
routes.post('/exercicio-dois', ModuloUm.exercicioDois);
routes.post('/exercicio-tres', ModuloUm.exercicioTres);
routes.post('/exercicio-quatro', ModuloUm.exercicioQuatro);
routes.post('/exercicio-cinco', ModuloUm.exercicioCinco);

module.exports = routes;