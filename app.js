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

