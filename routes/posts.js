const express = require('express');
const router = express.Router();

const Post = require('../models/posts');

router.get('/', (req, res, next) => {
    Post.getPosts((err, Posts) => {
        if(err) console.log('err: ', err);
        res.json(Posts);
    });
});

router.get('/:id', (req, res, next) => {
    Post.getPostById(req.params.id, (err, Post) => {
        if(err) console.log('err: ', err);
        if(Post === null) {
            res.json({"message": "Post doesn't exist"});
        } else {
            res.json(Post);
        }
    });
});

router.post('/', (req, res, next) => {
    Post.addPost(req.body, (err, post) => {
        if(err) console.log('err: ', err);
        res.json(post);
    });
})

router.post('/add', (req, res, next) => {
    Post.addPost(req.body, (err, post) => {
        if(err) console.log('err: ', err);
            res.json({"message": "Post added successfully"});
    });
})

router.put('/:id', (req, res, next) => {
    Post.updatePost(req.params.id, req.body, (err, post) => {
        if(err) console.log('err: ', err);
        Post.getPostById(req.params.id, (err, post) => {
            if(err) console.log('err: ', err);
            if(post === null) {
                res.json({"message": "Post doesn't exist"});
            } else {
                res.json(post);
            }
        });
    });
});

router.delete('/:id', (req, res, next) => {
    Post.removePost(req.params.id, (err, post) => {
        if(err) console.log('err: ', err);
        if(post === null) {
            res.json({"message": "Post doesn't exist"});
        } else {
            res.json({"message": "Post removed successfuly"});
        }
    });
});

module.exports = router;