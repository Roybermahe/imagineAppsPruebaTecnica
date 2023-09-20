const { EntitySchema } = require("typeorm");

const usuarios = new EntitySchema({
    name: 'usuarios',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: 'increment',
        },
        nombre: {
            type: String,
            nullable: false
        },
        email: {
            type: String,
            nullable: false,
            unique: true
        },
        password: {
            type: String,
            nullable: false
        },
        created_at: {
            type: Date,
            createDate: true,
        },
        update_at: {
            type: Date,
            updateDate: true,
        }
    }
});

module.exports = usuarios;