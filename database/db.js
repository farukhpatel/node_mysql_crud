const mysql = require('mysql');
const c = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "shopping"
});
c.connect((e) => {
    if (e) {
        console.log("error part");
    }
    else {
        console.log("datbase connected");
    }
});
module.exports = c;