const router = require('express').Router();
const User = require('../models/user');
const Post = require('../models/post')

//creating new post
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

//updating a post
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                },
                    { new: true }
                );
                res.status(200).json(updatedPost);
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(401).json("You can update only your post")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})


//delete a post
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.deleteOne();
                res.status(200).json("Post has been deleted");
            } catch (error) {
                res.status(500).json(error) 
            }
        } else {
            res.status(401).json("You can delete only your post")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

//getting a post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error)
    }
})

//getting all posts
router.get('/', async (req, res) => {
    const username=req.query.user;
    const catname=req.query.categories;
    try {
        let posts;
        if(username){
            posts = await Post.find({username})
        }else 
        if(catname){
            posts=await Post.find({categories:{
                $in:[catname],
            },
        })
        }else{
            posts= await Post.find()
        }
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router