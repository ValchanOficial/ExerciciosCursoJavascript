const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const info = require('./routes/info');
const moduloUm = require('./routes/moduloUm');
const moduloDois = require('./routes/moduloDois');
const moduloTres = require('./routes/moduloTres');
const moduloQuatro = require('./routes/moduloQuatro');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(info);
app.use('/modulo-um', moduloUm);
app.use('/modulo-dois', moduloDois);
app.use('/modulo-tres', moduloTres);
app.use('/modulo-quatro', moduloQuatro);

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
});