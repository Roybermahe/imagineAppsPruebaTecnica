const express = require('express');
const authService = require('../libs/services/auth/auth.service');
const postService = require('../libs/services/post.service');
const postRouter = express.Router()

postRouter.get('/', authService.verifyToken, async (req, res) => {
    try {
        console.log(req.query)
        res.json(await postService.getAll(req.query))
    } catch (error) {
        res.json({
            error: error.message
        })
    }
})

postRouter.get('/:id', authService.verifyToken, async (req, res) => {
    try {
        res.json(await postService.getOne(req.params['id']))
    } catch (error) {
        res.json({
            error: error.message
        })
    }
})

postRouter.get('/user/:id', authService.verifyToken, async (req, res) => {
    try {
        res.json(await postService.getByUser(req.query,req.params['id']))
    } catch (error) {
        res.json({
            error: error.message
        })
    }
})

postRouter.post('/', authService.verifyToken, async (req, res) => {
    try {
        res.json(await postService.save(req.body))
    } catch (error) {
        res.json({
            error: error.message
        })
    }
})
postRouter.put('/:id', authService.verifyToken, async (req, res) => {
    try {
        res.json(await postService.update(req.params['id'], req.body))
    } catch (error) {
        res.json({
            error: error.message
        })
    }
})
postRouter.delete('/:id', authService.verifyToken, async (req, res) => {
    try {
        res.json(await postService.delete(req.params['id']))
    } catch (error) {
        res.json({
            error: error.message
        })
    }
})

module.exports = postRouter;