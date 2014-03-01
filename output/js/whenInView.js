define(["jquery", "bacon.jquery"], function() {
  return function whenInView(elem, f) {
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
})
