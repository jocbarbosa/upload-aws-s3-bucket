const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const upload = multer(multerConfig);

const Post = require('./models/Post');

routes.get('/post', (req, res) => {
    const posts = await Post.find();

    return res.json(posts);
});

routes.post('/post', upload.single('file'), async (req, res) => {
    const { originalName: name, size, key, location: url = '' } = req.file;

    const post = await Post.create({
        name, size, key, url
    });

    return res.status(201).json(post);
});

routes.delete('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);

    await post.remove();

    return res.send();
});

module.exports = routes;