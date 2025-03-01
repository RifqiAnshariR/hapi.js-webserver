import { getHomepage, getAbout, guestLogin } from "./handler.js";

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: getHomepage
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return h.response('Access denied')
                .code(405)
                .header('Content-Type', 'text/plain');
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: getAbout
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return h.response('Access denied')
                .code(405)
                .header('Content-Type', 'text/plain');
        },
    },
    {
        method: 'POST',
        path: '/login',
        handler: guestLogin
    },
    {
        method: '*',
        path: '/login',
        handler: (request, h) => {
            return h.response('Access denied')
                .code(405)
                .header('Content-Type', 'text/plain');
        },
    },

    // {
    //     method: 'GET',
    //     path: '/hello/{name?}',
    //     handler: (request, h) => {
    //         const { name = "stranger" } = request.params;
    //         const { lang } = request.query;

    //         const message = lang === 'id' ? `Hai, ${name}!` : `Hello, ${name}!`;
    //         return h.response({ message }) // Respons dalam bentuk JSON
    //             .code(200)
    //             .header('Content-Type', 'application/json');
    //     },
    // },
    // {
    //     method: 'POST',
    //     path: '/login',
    //     handler: (request, h) => {
    //         const { username, password } = request.payload || {};

    //         if (!username || !password) {
    //             return h.response({ error: 'Username dan password harus diisi' })
    //                 .code(400)
    //                 .header('Content-Type', 'application/json');
    //         }

    //         return h.response({ message: `Welcome ${username}!` })
    //             .code(200)
    //             .header('Content-Type', 'application/json');
    //     },
    // },
    // {
    //     method: '*',
    //     path: '/{any*}',
    //     handler: (request, h) => {
    //         return h.response({ error: 'Halaman tidak ditemukan' })
    //             .code(404)
    //             .header('Content-Type', 'application/json');
    //     },
    // },
];

export default routes;
