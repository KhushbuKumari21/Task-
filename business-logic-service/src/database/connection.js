const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "newpassword",
  database: "microservices_db"
});

db.connect((err) => {
  if (err) throw err;
  console.log("DB Connected");
});

module.exports = db;
