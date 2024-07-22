const express = require('express');
const routes = express.Router();
const mernController = require('../controllers/mernController');
const servicoController = require('../controllers/servicoController')

//mern//
routes.get('/mern', mernController.read);
routes.post('/mern', mernController.create);
routes.delete('/mern/:id', mernController.deletar );

//servico
routes.get('/servicos', servicoController.listar);
routes.get('/servicos/:id', servicoController.buscarPorId)
routes.post('/servicos', servicoController.salvar);
routes.put('/servicos/:id', servicoController.atualizar)
routes.delete('/servicos/:id', servicoController.excluir);

module.exports = routes;
