var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use bodyParser!
app.use(bodyParser.json());
// static content
app.use(express.static(path.join(__dirname, "./RestfulAPI/dist/RestfulAPI")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
// use validation errors below but after session used

require("./server/config/routes")(app);
app.listen(8000, () => {
    console.log("listening to port 8000");
})