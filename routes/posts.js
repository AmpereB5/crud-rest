const express = require('express');
const router = express.Router();
const Post = require('../model/POST');

//READ
router.get('/',async(req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

//CREATE
router.post('/', async (req, res) => {
    const post = new Post({
        ime: req.body.ime,
        vrsta: req.body.vrsta,
        spol: req.body.spol,
        dob: req.body.dob
    });
    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
    
});

//READ ONE
router.get('/:postId', async (req, res) =>{
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
}catch(err){
    res.json({message: err});
}
});

//DELETE
router.delete('/:postId', async (req, res) =>{
    try{
    const removePost = await Post.remove({_id: req.params.postId});
    res.json(removePost);
}catch(err){
    res.json({message: err});
}
});

//UPDATE ONE
router.patch('/:postId', async (req, res) =>{
    try{
    const updatePost = await Post.updateOne({_id: req.params.postId}, {$set: {ime: req.body.ime}});
    res.json(updatePost);
}catch(err){
    res.json({message: err});
}
});

module.exports = router;