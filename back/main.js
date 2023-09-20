require('dotenv').config();
const  app  = require('./app');
const db = require('./libs/orm/ormconfig');


async function bootstrap() {
    app.listen((process.env.APP_PORT || 3000), async () => {
        console.log(`la app esta corriendo en http://localhost:${process.env.APP_PORT}`);
    })   
}

bootstrap();