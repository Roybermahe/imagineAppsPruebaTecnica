var express = require('express');

const usuarioRouter = express.Router();
const usuarioService = require('../libs/services/usuario.service')
usuarioRouter.get('/', async (req, res) => {
    try {
        res.json(await usuarioService.getAll())
    } catch (error) {
        return res.json({
            error
        })
    }
});

usuarioRouter.get('/:id', async (req, res) => {
    try {
        const id = req.params['id']
        res.json(await usuarioService.getOne(id))
    } catch (error) {
        return res.json({
            error
        })
    }
});

usuarioRouter.post('/', async (req, res) => {
    try {
        res.json(await usuarioService.save(req.body));
    } catch (error) {
        return res.json({
            error
        })
    }
});

usuarioRouter.put('/:id', async (req, res) => {
    try {

        res.json(await usuarioService.update(req.params['id'], req.body));
    } catch (error) {
        return res.json({
            error
        })
    }
});

usuarioRouter.delete('/:id', async (req, res) => {
    try {
        res.json(await usuarioService.delete(req.params['id']));
    } catch (error) {
        return res.json({
            error
        })
    }
});

module.exports = usuarioRouter;