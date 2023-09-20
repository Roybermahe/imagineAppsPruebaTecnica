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
        }
    }
});

module.exports = usuarios;