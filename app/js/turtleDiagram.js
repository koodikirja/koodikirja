define(["whenInView", "turtle", "lodash", "jquery"], function(whenInView, Turtle) {
  function jsonAttr(elem, attr) {
    var attrValue = elem.attr(attr)
    return attrValue && JSON.parse(attrValue)
  }
  $(function() {
    $(".turtle-diagram").each(function() {
      var elem = $(this)
      var diagram = { 
        commands: jsonAttr(elem, "data-commands"), 
        offsetY: jsonAttr(elem, "data-offsety")
      }
      var turtle = Turtle(elem, parseInt(elem.css("width")) || 640, parseInt(elem.css("height")) || 500)
      var drawn = false
      whenInView(elem, function(inView) {
        if (inView && !drawn) {
          drawn = true
          if (diagram.offsetY) {
            turtle.penup()
            turtle.rt(180)
            turtle.fd(diagram.offsetY)
            turtle.rt(180)
            turtle.pendown()
          }
          if (diagram.offsetX) {
            turtle.penup()
            turtle.lt(90)
            turtle.fd(diagram.offsetX)
            turtle.rt(90)
            turtle.pendown()
          }
          var calls = diagram.commands
          calls = _.reduce(calls, foldTurns, [])
          calls.forEach(function(call) {
            turtle[call[0]].apply(turtle, call[1])
          })
        }
      })
      function foldTurns(commands, command) {
        if (isTurn(command)) {
          var index = findDrawOrMove(commands)
          if (index >= 0 && isTurn(commands[index])) {
            commands[index] = combineTurns(command, commands[index])
            return commands
          }
        }
        return commands.concat([command])
      }
      function findDrawOrMove(commands) {
        for (var i = commands.length - 1; i >= 0; i--) {
          if (isTurn(commands[i]) || isDraw(commands[i])) {
            return i
          }
        }
        return -1
      }
      function isTurn(command) {
        return command && (command[0] == "lt" || command[0] == "rt")
      }
      function isDraw(command) {
        return !isTurn(command) && !isPen(command)
      }
      function isPen(command) {
        return command && command[0].indexOf("pen") == 0
      }
      function combineTurns(a, b) {
        var angle = (turnAngle(a) + turnAngle(b)) % 360
        if (angle > 180) angle = angle - 360
        return turnFromAngle(angle)
      }
      function turnAngle(turn) {
        if (turn[0] == "rt")
          return turn[1][0]
        return -turn[1][0]
      }
      function turnFromAngle(angle) {
        if (angle < 0) {
          return ["lt", [-angle]]
        }
        return ["rt", [angle]]
      }
    })
  })
})
