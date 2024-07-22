const mongoose = require('mongoose');

const MernSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    
});

const Mern = mongoose.model('Mern', MernSchema);

module.exports = Mern;
