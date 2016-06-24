var express = require('express');
var app = express();
var http = require('http').Server(app);

var config = require('./config');
var api = require('./modules/api/api');


var PORT = config.PORT;
http.listen(PORT, function () {
    console.log('listening on *:' + PORT);
    api.init(app);
});