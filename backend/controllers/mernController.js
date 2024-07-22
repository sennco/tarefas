const { request } = require('express');
const Mern = require('../models/mernSchemma');

module.exports = {
    
    async read(req, res) {
        try {
            const mernList = await Mern.find();
            console.log(mernList);
            return res.json(mernList);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
            return res.status(500).json({
                success: false,
                message: 'Erro no servidor',
            });
        }
    },

    async create(req, res) {
        
        const { title, notes, description, priority } = req.body;
        
        const mernCreated =  await Mern.create({
            title,
            notes,
            description,
            priority
        })

        return res.json(mernCreated);
    },

    async deletar(req, res){
        const { id } = req.params;

        const mernDeleted = await Mern.findOneAndDelete({ _id: id});
        if (mernDeleted){

            return res.json({
                message: "O registro deletado foi:",
                data: mernDeleted})}         

        return res.status(401).json({
            error: "Nao foi encontrado o id para exclusao!"})  
        
        }
        
};
