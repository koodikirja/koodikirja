var Bacon = require('baconjs')
var Mailgun = require("mailgun").Mailgun
var mg = new Mailgun("key-62gzhlqok1m6z8fvhbncetlz1bzendm4")

feedbackE = new Bacon.Bus()
feedbackE.flatMap(function(feedback) {
  var email = feedback.email
  var text = feedback.text
  var formtype = feedback.formtype || "feedback"
  console.log(feedback)
  return Bacon.fromNodeCallback(mg, "sendText", 
    "juha.paananen@gmail.com",
    ["juha.paananen@gmail.com"],
    "Koodikirja - " + formtype + "(" + email + ")",
    feedback.text).map(text)
}).log("feedback->mail")

var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.post('/feedback', express.bodyParser(), function(request, response) {
  feedbackE.push(request.body)
  response.send("ok")
})
app.use(express.compress())
app.use(express.json())
app.use('/', express.static(__dirname + '/output'))
app.use('/', express.static(__dirname + '/static'))
app.listen(port)
console.log("Koodikirja server on port", port)
