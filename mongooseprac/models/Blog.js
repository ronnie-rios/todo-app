const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    username: String,
    comment: String,
});

const blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    comments: [commentSchema]
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;