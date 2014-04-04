var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

var basicAuth = express.basicAuth('koodikoulu', 'rehtori')

app.get('/', basicAuth, function(request, response) {
    response.sendfile(__dirname + '/output/index.html');
})
app.use('/', express.static(__dirname + '/output'));
app.use('/', express.static(__dirname + '/static'));

app.listen(port);
