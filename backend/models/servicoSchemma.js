const mongoose = require('mongoose');

const ServicoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    }
});

const Servico = mongoose.model('Servico', ServicoSchema);

module.exports = Servico;
