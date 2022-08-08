const express= require('express');
const router = express.Router();
const ToDo = require('../models/Todo');

router.get('/', (req, res) => {
    ToDo.find()
    .then(todos =>
        res.status(200)
        .json(todos
    ))
});

router.post('/', (req, res) => {
    ToDo.create(req.body)
    .then(newTodo => 
        res.status(200)
        .json(newTodo
    ))
    .catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
    const id = req.params.id 
    ToDo.findById(id)
    .then(todo => res.json(todo))
    .catch(err => res.json(err))
});

router.put('/:id', (req, res) => {
    // const {id} = req.params.id 
    ToDo.findByIdAndUpdate({ _id: req.params.id}, req.body, {new: true })
    .then(todo => res.json(todo))
    .catch(err => res.json(err))
});

router.delete('/:id', (req, res) => {
    // const {id} = req.params.id 
    ToDo.findByIdAndDelete(req.params.id )
    .then(() => {
        res.redirect(301, '/todo')
    })
    .catch(err => {
        res.json(err)
    })
});


module.exports = router;