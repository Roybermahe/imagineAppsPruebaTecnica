const { Like, Between } = require("typeorm");
const post = require("../orm/entities/post.entity");
const db = require("../orm/ormconfig");

const postService = {
    getAll: async (query) => {
        let where = []
        if(query.hasOwnProperty('date') || query.hasOwnProperty('title')) {
            if (query.hasOwnProperty('date') && query?.date !== '') {
                const fechaInicio = new Date(query.date || '');
                fechaInicio.setHours(0, 0, 0);
                const fechaFin = new Date(query.date || '');
                fechaFin.setHours(24, 0, 0);
    
                where.push({
                    created_at: Between(fechaInicio, fechaFin)
                })
            }
            if (query.hasOwnProperty('title') && query?.title !== '') {
                where.push({
                    title: Like(query.title)
                })
            }
        }
        return await db.manager.find(post, {
            relations: ['usuario'],
            where: where,
        });
    },
    getOne: async (id) => {
        return await db.manager.findOneOrFail(post,{ relations: ['usuario'], where:{ id }})
    },
    save: async (data) => {
        return await db.manager.save(post, data);
    },
    update:  async (id, data) => {
        await db.manager.update(post, id, data);
        return await postService.getOne(id);
    },
    delete: async (id) => {
        return await db.manager.delete(post, id);
    },
    getByUser: async (query = '', userid) => {
        let where = {
            usuario: {
                id: userid
            }
        }
        if(query.date !== '') {
            const fechaInicio = new Date(query.date || '');
            fechaInicio.setHours(0, 0, 0);
            const fechaFin = new Date(query.date || '');
            fechaFin.setHours(24, 0, 0);
            where = {
                created_at: Between(fechaInicio, fechaFin),
                usuario: {
                    id: userid
                }
            }
        }
        return await db.manager.find(post, {
            relations: ['usuario'],
            where: where
        });
    }
}

module.exports = postService;