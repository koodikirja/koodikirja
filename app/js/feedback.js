define(["bacon.jquery", "lodash", "jquery"], function() {
  if (!$("#feedback").length) return
  function nonEmpty(x) { return x.length > 0 }
  var email = Bacon.$.textFieldValue($("#feedback-email"))
  var text = Bacon.$.textFieldValue($("#feedback-text"))
  var sendButton = $("#feedback-send")
  var feedback = Bacon.combineTemplate({
    email: email,
    text: text,
    formtype: $("#feedback-type").attr("value")})
  var request = sendButton.clickE().doAction(".preventDefault")
  var response = request.map(feedback).flatMap(function(feedback) {
    return Bacon.$.ajax({
      url: "/feedback",
      contentType: "application/json; charset=utf-8",
      type: "post",
      data: JSON.stringify(feedback)
    })
  })
  var sending = request.awaiting(response.mapError())
  var sent = response.map(true).toProperty(false)
  var changed = text.changes().awaiting(request)
  var okToSend = changed.and(email.map(nonEmpty)).and(text.map(nonEmpty))
  okToSend.not().or(sending).assign(sendButton, "attr", "disabled")
  sent.assign($("#feedback-sent"), "toggle")
  response.log("feedback")
})

