const { Router } = require('express');
const routes = Router();

const ModuloDois = require('../controllers/moduloDois');

routes.get('/exercicio-um', ModuloDois.exercicioUm);
routes.get('/exercicio-dois', ModuloDois.exercicioDois);
routes.get('/exercicio-tres', ModuloDois.exercicioTres);
routes.get('/exercicio-quatro', ModuloDois.exercicioQuatro);

module.exports = routes;