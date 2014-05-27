SvgTurtle = (function() {
  function create(parent) {
    var rotation = 0,
        position = Vector2D(0, 0)
    var turtle = $('<svg width=20 height=40>\
                      <polygon points="10,0 20,39 0,39" style="fill:white;stroke:black;stroke-width:1"></polygon>\
                    </svg>')
      .css({"position": "absolute",
            "transition": "all 0.1s ease"})
    parent.css({"position": "relative"})
    parent.append(turtle)
    return {
      rotate: function(deg) {
        rotation+=deg
        turtle.css("transform", "rotate("+rotation+"deg)")
        return this
      },
      move: function(d) {
        var vec = Vector2D(0, -d).rotateDeg(rotation)
        position = position.add(vec)
        turtle.animate({"left": position.x, "top": position.y}, 100, "linear")
        return this
      }
    }
  }
  return {
    create: create
  }
})()

$(function() {
  //  window.t1 = SvgTurtle.create($(".turtle-svg"))
})
