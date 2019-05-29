const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressValidator = require('express-validator')
const chargingSessions = require("./routers/chargingSessions");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator())
 

app.use("/chargingSessions", chargingSessions);
 
module.exports = app;