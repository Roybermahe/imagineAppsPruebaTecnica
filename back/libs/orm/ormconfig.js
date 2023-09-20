const { DataSource } = require("typeorm");
const usuarios = require("./entities/usuarios.entity");
const post = require("./entities/post.entity");

const conn = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true, 
    logging: true, 
    entities: [ usuarios, post ]
}
const db = new DataSource(conn);

db.initialize().then(() => {
    console.log('base de datos inicializada');
}, err => {
    console.log('error:',err);
})

module.exports = db;