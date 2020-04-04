class ModuloUm {

    static exercicioUm(req, res) {
        const { cidade, uf, bairro, rua, numero} = req.body;
        res.json({ resposta: `O usuário mora em ${cidade} / ${uf}, no bairro ${bairro}, na rua '${rua}' com nº ${numero}.`});
    }

    static exercicioDois(req, res) {
        const evenNumbers = [];
        const {n1, n2} = req.body;
        let value = n1+1;
        while (value !== n2) {
            if(value % 2 == 0) {
                evenNumbers.push(value);
            }
            value++;
        }
        res.json({ info: `Números pares entre ${n1} e ${n2}`, resposta: evenNumbers });
    }

    static exercicioTres(req, res) {
        const { skills } = req.body;
        const resposta = skills.includes('Javascript');
        res.json({ skills, resposta});
    }

    static exercicioQuatro(req, res) {
        const { anosEstudo } = req.body;
        let response;
        if(anosEstudo >= 0 && anosEstudo <= 1) {
            response = { info: `Anos de estudo: ${anosEstudo}`, resposta: 'Iniciante'};
        } else if (anosEstudo > 1 && anosEstudo <= 3) {
            response = { info: `Anos de estudo: ${anosEstudo}`, resposta: 'Intermediário'};
        } else if (anosEstudo > 3 && anosEstudo <= 6) {
            response = { info: `Anos de estudo: ${anosEstudo}`, resposta: 'Avançado'};
        } else if (anosEstudo >= 7) {
            response = { info: `Anos de estudo: ${anosEstudo}`, resposta: 'Jedi Master'};
        } else {
            response = { info: `Anos de estudo: ${anosEstudo}`, resposta: 'Digite um dado válido!'};
        }
        res.json(response);
    }

    static exercicioCinco(req, res) {
        const { usuarios } = req.body;
        const resposta = usuarios.map(el => {
            return `O ${el.nome} possui as habilidades: ${el.habilidades.join(', ')}`;
        });
        res.json({resposta});
    }

}

module.exports = ModuloUm;