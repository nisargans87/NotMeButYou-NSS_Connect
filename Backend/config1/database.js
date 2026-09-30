const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nss_website",
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.log("Database Connection Failed!");
        console.log(err);
    } else {
        console.log("MySQL Connected Successfully!");
    }
});

module.exports = connection;