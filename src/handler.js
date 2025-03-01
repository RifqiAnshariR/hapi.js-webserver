import db from './db.js';

// Handler getHomepage
const getHomepage = (request, h) => {
    return new Promise((resolve, reject) => {
        db.get("SELECT id, username, reason FROM users ORDER BY id DESC LIMIT 1", function (err, user){
            if (err){
                return reject(h.response({
                    error: "something went wrong"
                }).code(500))
            };

            const html = `
                <html>
                    <head><title>${user?.username || "Guest"} - ${user?.id || "No ID"}</title></head>
                    <body><h1>Welcome, ${user?.username || "Guest"}!</h1></body>
                </html>
            `;

            resolve(h.response(html)
                .code(200)
                .header("Content-Type", "text/html")
            );
        });
    });
};

// Handler getAbout
const getAbout = (request, h) => {
    return h.response({
        status: "success",
        data: undefined,
        message: "About"
    }).code(200)
};

// Handler guest login
const guestLogin = async (request, h) => {
    const { username, reason } = request.payload || {};

    if (!username || !reason){
        return h.response({
            error: "username or reason is missing"
        }).code(400)
    }

    return new Promise((resolve, reject) => {
        db.run("INSERT INTO users (username, reason) VALUES (?, ?)", [username, reason], function (err){
            if (err) {
                return reject(h.response({
                    error: "something went wrong"
                    }).code(500)
                );
            }

            resolve(h.response({
                status: "success",
                message: `username: ${username} and reason: ${reason} has id: ${this.lastID}, accepted`
                }).code(201)
            );
        });
    });
};

export { getHomepage, getAbout, guestLogin };