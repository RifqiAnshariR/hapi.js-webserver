import db from './db.js';

// Handler Login Page
const postLogin = async (request, h) => {
    const { username, reason } = request.payload || {};

    if (!username || !reason){
        return h.response({ error: "Username or reason is missing!" }).code(400).header("Content-Type", "application/json")
    }

    try {
        await new Promise((resolve, reject) => {
            db.run("INSERT INTO guests (username, reason) VALUES (?, ?)", 
                [username, reason], 
                function (err){
                    if (err) reject(err);
                    resolve();
                }
            )
        });

        return h.response({
            status: "success",
            message: "Data submitted!",
        }).code(201).header("Content-Type", "application/json")
    } catch (err) {
        return h.response({ error: "Something went wrong!" }).code(500).header("Content-Type", "application/json");
    }
};

// Handler Home Page
const getHome = async (request, h) => {
    try {
        const getUser = await new Promise((resolve, reject) => {
            db.get("SELECT id, username, reason FROM guests ORDER BY id DESC LIMIT 1", 
                function (err, user){
                    if (err) reject(err);
                    resolve(user);
            })
        });

        return h.response({
            status: "success",
            message: "Data received!",
            data: { username: getUser.username, 
                reason: getUser.reason },
        }).code(200).header("Content-Type", "application/json")
    } catch (err) {
        return h.response({ error: "Something went wrong!" }).code(500).header("Content-Type", "application/json");
    }
};

// Handler Access Denied
const accessDenied = async (request, h) => {
    return h.response({ error: "Access denied!" }).code(405).header("Content-Type", "application/json");
}

export { postLogin, getHome, accessDenied };
