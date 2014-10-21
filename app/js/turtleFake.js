define(["whenInView", "jquery", "jquery-ui"], function(whenInView) {
    $(".turtle-fake").click(function() { $(this).effect("shake", {distance: 5, times: 2})})
    $(".turtle-fake").each(function() {
      var cursor = $("<div>").addClass("cursor")
      $(this).append(cursor)
      var interval
      whenInView($(this), function(visible) {
        if (visible) {
          interval = setInterval(function() {
            $(".turtle-fake").toggleClass("blink")
          }, 500)
        } else if(interval) {
          clearInterval(interval)
        }
      })
    })
})

