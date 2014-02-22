define(["whenInView", "turtleDiagram", "turtleFake", "os", "notes", "jquery", "bacon.jquery"], 
function(whenInView) {
  $(function() {
    $("#main a").attr("target", "_blank")
    $("blockquote").each(function() {
      whenInView($(this), function(visible) {
        this.toggleClass("grayscale", !visible)
      })
    })
  })
})
