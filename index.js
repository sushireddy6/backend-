/*
Author: Mallikarjun
Date: 01-06-2000
Description: Core Byrds application
*/


// Import express
let express = require('express');

// Import Body parser
let bodyParser = require('body-parser');

// Import Mongoose
let mongoose = require('mongoose');

// Initialise the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes");

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/byrdsNest', { useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var portNum = 8080;
var port = process.env.PORT || portNum;

// Send message for default URL (only for testing)
app.get('/', (req, res) => res.send('Hello! This is Byrds'));

// Use Api routes in the App
app.use('/api', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running Byrds on port " + port);
});