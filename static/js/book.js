$(function() {
  $("#main a").attr("target", "_blank")
  $("blockquote").each(function() {
    whenInView($(this), function(visible) {
      this.toggleClass("grayscale", !visible)
    })
  })
  $(".turtle-fake").each(function() {
    whenInView($(this), function(visible) {
      this.toggleClass("frozen", !visible)
    })
  })
  setInterval(function() {
    $(".turtle-fake").toggleClass("blink")
  }, 500)
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
      .toProperty(0)
      .map(function() { return isScrolledIntoView(elem) })
      .skipDuplicates()
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
