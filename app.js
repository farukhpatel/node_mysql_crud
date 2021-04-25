const mainController = require('./controller/mainController');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



//inserting into product table
app.post("/insert", mainController().insert);
//showing data
app.get("/show", mainController().show);

//showing data by id
app.get("/show/:id", mainController().show_id);

//find by id and update
app.post("/update/:id", mainController().update);

//find by id and update
app.get("/delete/:id", mainController().delete);


app.listen("4000", () => {
    console.log("listen at port 4000");
});
//database created query
        // c.query("CREATE DATABASE frk", (e, r) => {
        //     if (e) throw e;
        //     console.log("database created");
        // });

        //create table for frk database
        // var sql = "CREATE TABLE frk_table (name varchar(255),address varchar(255))";
        // c.query(sql, (e, r) => {
        //     if (e) throw e;
        //     console.log(`table created ${r}`);

        // });

        //insert in frk_table
        // var sql = "INSERT INTO frk_table (name,address) values('farukh4','biaora4')";
        // c.query(sql, (e, result) => {
        //     if (e) throw e;
        //     console.log(`inserted successfully ${result.insertId}`);
        //     console.log(result.insertId);
        // });

        //select
        // var sql = "SELECT name FROM frk_table";
        // c.query(sql, (e, r) => {
        //     if (e) throw e;
        //     console.log(r);
        // });
