const jwt = require('jsonwebtoken');
const db = require('../../orm/ormconfig');
const usuarios = require('../../orm/entities/usuarios.entity');
const bcrypt = require('bcryptjs');
const authService = {
    verifyToken: async function verifyToken(req, res) {
        const token = req.header('Authorization');

        if (!token) {
            return res.sendStatus(401); // Unauthorized
        }

        jwt.verify(token, secretKey, (err, payload) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.payload = payload;
            next(); 
        });
    },
    sign: (payload) => {
        return jwt.sign(payload, process.env.JWT_CONFIG, { expiresIn: '1h' })
    },
    login: async (username, password) => {
        const usuario = await db.manager.findOne(usuarios, {
            where: {
                email: username 
            }
        })
        if(!usuario) throw new Error('Unauthorized')
        if(bcrypt.compareSync(password, usuario.password)){
            return authService.sign(usuario);
        } else {
            throw new Error('Contraseña invalida.')
        }
    }   
}

module.exports = authService;
