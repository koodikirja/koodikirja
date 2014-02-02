$(function() {
  $("#main a").attr("target", "_blank")
  embedTurtleRoy($(".turtle-embed"), { glass: true }) 
})

function embedTurtleRoy(elem, options) {
  var iframe = $('<iframe width=640 height=400 src="http://turtle-roy.herokuapp.com"></iframe>')
  elem.append(iframe)
  elem.css({"position": "relative"})
  if (options.glass) {
    var glass = $('<div class="glass">')
    glass.css({"position": "absolute", "width": "100%", "height": "100%", "z-index": 1, "top": 0, "left": 0})
    elem.append(glass)
  }
}
