const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

//get all blogs
router.get('/', (req, res) => {
    Blog.find()
    .then(blog => res.status(200)
    .json(blog))
});

//post a new blog
router.post('/', (req, res) => {
    Blog.create(req.body)
    .then(newBlog => res.status(200)
    .json(newBlog))
    .catch(err => res.json(err))
});

//find blog by id and its comments
router.get('/:id', (req, res) => {
    Blog.findById(req.params.id)
    .then(blog => res.json(blog))
    .catch(err => res.json(err))
});

//get comment id
router.get('/:id/:commentid', (req, res) => {
    const id = req.params.id
    const commentid = req.params.commentid
    Blog.findById(id)
    .then(blog => {
        const comment = blog.comments.id(commentid)
        res.json(comment)
    })
    .catch(err => res.json(err))
});

//adding a comment to the blog model
router.put('/:id', (req, res) => {
    Blog.findByIdAndUpdate(
        req.params.id,
        { $push: { comments: req.body } },
        { new: true })
    .then(newBlog => res.json(newBlog))
    .catch(err => res.json(err))
});

//delete a comment
router.put('/:id/:commentid', (req, res) => {
    Blog.findByIdAndUpdate(
        //blogid
        req.params.id,
        //pull from it , pass in the comments by its id and set the obj to the params.commentid
        { $pull: { comments: { _id: req.params.commentid} } },
        { new: true })
    .then(newBlog => res.json(newBlog))
    .catch(err => res.json(err))
});

module.exports = router;