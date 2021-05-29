const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const port = process.env.PORT || 2000;

const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use("/static",express.static("static"));

app.set('view engine', 'ejs'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// End Points

app.get("/",(req,res)=>{
    res.status(200).render("index.ejs");
});

app.get("/login",(req,res)=>{
    res.render("login.ejs");
});



app.listen(port, ()=>{
    console.log(`the app is listening at https://localhost:${port}`);
})