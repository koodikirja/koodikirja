var Bacon = require('baconjs')
var pg = require('pg');
//var pgUrl = "postgres://qlhornyfuuuwqb:1qGtjs7HYWKCwPIYcFzf9xm8Kv@ec2-54-243-42-236.compute-1.amazonaws.com:5432/d6hshjr0tkvfds"
var pgUrl = "postgres://localhost/koodikirja"

connE = Bacon.fromNodeCallback(pg, "connect", pgUrl)
connE.onValue(function(client) {
  console.log("conected to ugUrl")
})
connE.errors().log("error")

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
