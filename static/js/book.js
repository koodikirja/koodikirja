$(function() {
  $("#main a").attr("target", "_blank")
  embedTurtleRoy($(".turtle-embed"), { glass: true }) 
  $("blockquote").each(function() {
    whenInView($(this), function(visible) {
      console.log("bq", visible)
      this.toggleClass("grayscale", !visible)
    })
  })
})

function embedTurtleRoy(elem, options) {
  var width = 640, height = 400
  var iframe = $('<iframe width=' + width + ' height=' + height + ' src="http://turtle-roy.herokuapp.com"></iframe>')
  iframe.css({"border": 0})
  elem.append(iframe)
  elem.css({"position": "relative",
            "display": "inline-block",
            "border": "1px solid black",
            "width": width + "px",
            "height": height + "px"})
  if (true) {
    var glass = $('<div class="turtle-roy-placeholder">')
    glass.css({"position": "absolute", 
               "width": "100%", 
               "height": "100%", 
               "z-index": 2, 
               "top": 0, 
               "left": 0,
               "background": "url('/images/roy-placeholder.png') no-repeat"})
    elem.append(glass)

    whenInView(elem, toggleVisibility)

    function toggleVisibility(visible) {
      $(".turtle-roy-placeholder").animate({"opacity": visible ? 0 : 1})
    }
  }
  if (options.glass) {
    var glass = $('<div class="glass">')
    glass.css({"position": "absolute", 
               "width": "100%", 
               "height": "100%", 
               "z-index": 2, 
               "top": 0, 
               "left": 0})
    elem.append(glass)
  }
}

function whenInView(elem, f) {
  var isInView = $(window).asEventStream("scroll").doAction(".preventDefault")
      .map(function() { return isScrolledIntoView(elem) })
      .skipDuplicates()
      .toProperty()

  Bacon.later(3000)
      .flatMap(isInView)
      .delay(500)
      .onValue(function(visible) { f.call(elem, visible) })

  function isScrolledIntoView(elem)
  {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
}
