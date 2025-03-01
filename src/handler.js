import { read } from 'fs';
import db from './db.js';

// Handler getHomepage
const getHomepage = (request, h) => {
    return h.response({
        status: "success",
        data: undefined,
        message: undefined
    })
    .code(200)
    .header("Content-Type", "application/json")
};

// Handler guest login
const guestLogin = async (request, h) => {
    const { username, reason } = request.payload || {};

    if (!username || !reason){
        return h.response({
            error: "Username or reason is missing"
        }).code(400)
    }

    return new Promise((resolve, reject) => {
        db.run("INSERT INTO users (username, reason) VALUES (?, ?)", [username, reason], function (err){
            if (err) {
                return reject(h.response({
                    error: "Something went wrong"
                    }).code(500)
                );
            }

            resolve(h.response({
                status: "success",
                message: "Data submitted"
                })
                .code(201)
                .header("Content-Type", "application/json")
            );
        });
    });
};

// Handler getAbout
const getAbout = (request, h) => {
    return new Promise((resolve, reject) => {
        db.get("SELECT id, username, reason FROM users ORDER BY id DESC LIMIT 1", function (err, user){
            if (err || !user){
                return reject(h.response({
                    error: "Something went wrong"
                }).code(500))
            };

            resolve(h.response({
                status: "success",
                username: user.username,
                reason: user.reason,
                message: undefined
                })
                .code(201)
                .header("Content-Type", "application/json")
            );
        });
    });
};

export { getHomepage, guestLogin, getAbout };