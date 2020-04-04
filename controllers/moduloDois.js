class ModuloDois {

    static exercicioUm(req, res) {
        res.sendFile('/files/modulo2/exercicio1.html' , { root: '.' });
    }

    static exercicioDois(req, res) {
        res.sendFile('/files/modulo2/exercicio2.html' , { root: '.' });
    }

    static exercicioTres(req, res) {
        res.sendFile('/files/modulo2/exercicio3.html' , { root: '.' });
    }

    static exercicioQuatro(req, res) {
        res.sendFile('/files/modulo2/exercicio4.html' , { root: '.' });
    }

}

module.exports = ModuloDois;