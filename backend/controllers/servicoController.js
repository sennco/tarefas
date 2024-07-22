const { request } = require('express');
const Servico = require('../models/servicoSchemma');

const ServicoController = {

    async listar(req, res){ 
        const resultado = await Servico.find({});
        res.json(resultado);
      },

    async buscarPorId(req, res){
        const id = req.params.id;
        const servico = await Servico.findOne({'_id': id});
        res.json(servico);
      },

      async salvar(req, res) {        
        const servico = req.body;
        const resultado = await Servico.create(servico);
        res.json(resultado);
      },

      async atualizar(req, res){
        const id = req.params.id;
        const servico = req.body;        
        const resultado = await Servico.findOneAndUpdate({'_id': id}, servico, {new: true});
        res.json(resultado);
      },

      async excluir(req, res){
        const id = req.params.id;
        await Servico.findOneAndDelete({'_id': id});
        res.send("Excluído(a) com sucesso!");
      }
    
}

module.exports = ServicoController;
