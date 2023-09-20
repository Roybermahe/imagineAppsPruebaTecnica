const { EntitySchema } = require("typeorm");

const post = new EntitySchema({
    name: 'post',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: 'increment',
        },
        title: {
            type: String,
            length: 30,
            nullable: false,
        },
        message: {
            type: String,
            length: 300,
            nullable: false,
        },
        created_at: {
            type: Date,
            createDate: true,
        },
        update_at: {
            type: Date,
            updateDate: true,
        }
    },
    relations: {
        usuario: {
            target: 'usuarios',
            type: 'many-to-one',
            inverseSide: 'usuarios',
        }
    }
});

module.exports = post;