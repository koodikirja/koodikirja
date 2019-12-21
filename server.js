var Bacon = require('baconjs')
var sendFeedback

if (process.env.SENDGRID_API_KEY) {
  var sgMail = require('@sendgrid/mail');  
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sendFeedback = function(feedback) {

    var email = feedback.email
    var text = feedback.text
    var formtype = feedback.formtype || "feedback"

    var message = {
      from: "juha.paananen@gmail.com",
      to: "juha.paananen@gmail.com",
      subject: "Koodikirja - " + formtype + "(" + email + ")",
      text: text
    }
    sgMail.send(message)
    console.log("Sent to SendGrid")
    return Bacon.once(message)
  } 
} else {
  console.warn("SENDGRID_API_KEY missing -> using fake email sender")
  sendFeedback = function (feedback) {
    console.log("Not sending feedback mail", feedback)
    return Bacon.once(feedback.text)
  }
}

feedbackE = new Bacon.Bus()
feedbackE.flatMap(sendFeedback).log("feedback->mail")

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
