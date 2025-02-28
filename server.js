import Hapi from '@hapi/hapi';
import routes from './routes.js';

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

// curl -X GET http://localhost:5000/hello/dicoding?lang=id
// curl -X POST http://localhost:5000/login -H "Content-Type: application/json" -d "{\"username\": \"user123\", \"password\": \"pass123\"}"
