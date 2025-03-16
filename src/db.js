import sqlite3 from 'sqlite3';

const db = new sqlite3.Database("./guests.db");

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS guests (id INTEGER PRIMARY KEY, username TEXT, reason TEXT)");
});

export default db;
