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
];

export default routes;
