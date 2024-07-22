const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

require('../config/dbConfig'); 

app.use(cors());
app.use(express.json());
app.use(routes);

const readServer = (req, res) => {
    return res.json({
        success: "true",
    });
};

app.get('/', readServer);

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080...');
});
