var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/output/index.html');
}).configure(function() {
    app.use('/', express.static(__dirname + '/output'));
    app.use('/', express.static(__dirname + '/static'));
}).listen(port);
