const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    userId: {
        type: Number
    },
});

const Post = module.exports = mongoose.model('Post', postsSchema);

//get Posts
module.exports.getPosts = (callback, limit) => {
    Post.find(callback).limit(limit);
};

//get Post by id
module.exports.getPostById = (id, callback) => {
    Post.findById(id, callback);
};

//add new Post
module.exports.addPost = (post, callback) => {
    Post.create(post, callback);
}

//update Post
module.exports.updatePost = (id, post, callback) => {
    // const query = {
    //     title: post.title,
    //     body: post.body
    // };
    const query = {}
    if (post?.title) query.title = post.title
    if (post?.body) query.body = post.body
    console.log("query: ", query);
    console.log("post: ", post);
    Post.findByIdAndUpdate(id, query, callback);
}

//remove Post
module.exports.removePost = (id, callback) => {
    Post.findByIdAndRemove(id, callback);
};