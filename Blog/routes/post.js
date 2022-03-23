const express = require('express');
const Post = require('../models/Post')

const router = express.Router()

router.get('/', async(req, res) => {
  const posts = await Post.find();
  res.render('home', {posts});
});

router.get('/create', (req, res) => { 
  res.render('create');
})

router.post('/create', async(req, res) => {
  const { title, body } = req.body;
  const post = new Post({ title, body })
  await post.save()
  // await Post.create(req.body);
  res.redirect('/')
});

router.post('/delete/:id', async (req, res) => { 
  const id = req.params.id; 
  await Post.findByIdAndDelete(id)
  res.redirect('/')
})

module.exports = router;