class ModuloTres {

    static appTodos(req, res) {
        res.sendFile('/files/modulo3/app-todos.html' , { root: '.' });
    }

    static renderJSFile(req, res) {
        res.sendFile('/files/modulo3/todos.js' , { root: '.' });
    }

}

module.exports = ModuloTres;