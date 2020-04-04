class ModuloQuatro {

    static exercicioUm(req, res) {
        res.sendFile('/files/modulo4/exercicio1.html' , { root: '.' });
    }

    static exercicioDois(req, res) {
        res.sendFile('/files/modulo4/exercicio2.html' , { root: '.' });
    }

    static exercicioTres(req, res) {
        res.sendFile('/files/modulo4/exercicio3.html' , { root: '.' });
    }

}

module.exports = ModuloQuatro;