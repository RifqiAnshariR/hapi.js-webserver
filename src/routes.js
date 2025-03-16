import { postLogin, getHome, accessDenied } from "./handler.js";

const routes = [
    {
        method: 'POST',
        path: '/login',
        handler: postLogin,
    },
    {
        method: '*',
        path: '/login',
        handler: accessDenied,
    },
    {
        method: 'GET',
        path: '/home',
        handler: getHome,
    },
    {
        method: '*',
        path: '/home',
        handler: accessDenied,
    },
];

export default routes;
