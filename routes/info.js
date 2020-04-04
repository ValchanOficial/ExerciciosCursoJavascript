const { Router } = require('express');
const routes = Router();

routes.get('/', (req, res) => {
    res.json({
        curso: 'Rocketseat - Curso de Javascript',
        info: 'Leia o arquivo README.md'
    });
});

module.exports = routes;