const usuarios = require("../orm/entities/usuarios.entity");
const db = require("../orm/ormconfig");
const bcrypt = require('bcryptjs');

const usuarioService = {
    getAll: async () => {
        return await db.manager.find(usuarios)
    },
    getOne: async (id) => {
        return await db.manager.findOne(usuarios, {
            where: {
                id
            }
        })
    },
    save: async (data) => {
        data.password = bcrypt.hashSync(data.password, 10);
        return await db.manager.save(usuarios, data);
    },
    delete: async (id) => {
        return await db.manager.delete(usuarios, { id });
    },
    update: async (id, data) => {
        await db.manager.update(usuarios, id, data);
        return await this.getOne(id);
    }
}

module.exports = usuarioService;