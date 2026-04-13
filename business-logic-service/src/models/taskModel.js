const db = require("../database/connection");

exports.createTask = (title, callback) => {
  db.query("INSERT INTO tasks (title) VALUES (?)", [title], callback);
};

exports.getTasks = (callback) => {
  db.query("SELECT * FROM tasks", callback);
};
