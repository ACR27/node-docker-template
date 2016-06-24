var express = require('express');
var app = express();
var http = require('http').Server(app);

var config = require('./config');
var routes = require('./modules/api/routes');


var PORT = config.PORT;
http.listen(PORT, function () {
    console.log('listening on *:' + PORT);
    routes.init(app);
});