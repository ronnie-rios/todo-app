const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: String,
    body: String
}, { timestamps: true });

const ToDo = mongoose.model('Todo', TodoSchema);

module.exports = ToDo;
