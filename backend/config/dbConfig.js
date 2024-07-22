// backend/config/dbConfig.js

const mongoose = require('mongoose');

const dbConfig = 'mongodb://localhost:27017/mern'; // URL para o MongoDB local

mongoose.connect(dbConfig, {

}).then(() => {
    console.log('Conectado ao MongoDB local');
}).catch(err => {
    console.error('Erro ao conectar ao MongoDB', err);
});
