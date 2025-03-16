import Hapi from '@hapi/hapi';
import routes from './routes.js';

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
        cors: {
            origin: ['*'],
            headers: ['Accept', 'Content-Type'],
            additionalHeaders: ['X-Requested-With']
        }
    }
    });

    server.route(routes);

    await server.start();
    console.log(`Server run on: ${server.info.uri}`);
};

init();
