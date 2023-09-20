var express = require('express');
const authService = require('../../libs/services/auth/auth.service');

const authRouter = express.Router();

authRouter.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        res.json({
            token: await authService.login(username, password) 
        })
    } catch (error) {
        res.json({
            error: error.message
        })
    }
})

module.exports = authRouter;

