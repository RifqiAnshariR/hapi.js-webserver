import Hapi from '@hapi/hapi';
import routes from './routes.js';

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
        cors: {
            origin: ['*'], // Izinkan semua origin
            headers: ['Accept', 'Content-Type'],
            additionalHeaders: ['X-Requested-With']
        }
    }
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

// curl -X POST "http://localhost:5000/login" -H "Content-Type: application/json" -d "{\"username\": \"john_doe\", \"reason\": \"Trying out Hapi.js\"}"
