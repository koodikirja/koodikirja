define(["jquery"], function () {
  return function turtleEmbed(elem, options) {
    var width = 640,
      height = 400;
    var iframe = $(
      "<iframe width=" +
        width +
        " height=" +
        height +
        ' src="https://turtle-roy.fly.dev"></iframe>'
    );
    iframe.css({ border: 0 });
    elem.append(iframe);
    elem.css({
      position: "relative",
      display: "inline-block",
      border: "1px solid black",
      width: width + "px",
      height: height + "px",
    });
    if (true) {
      var glass = $('<div class="turtle-roy-placeholder">');
      glass.css({
        position: "absolute",
        width: "100%",
        height: "100%",
        "z-index": 2,
        top: 0,
        left: 0,
        background: "url('/images/roy-placeholder.png') no-repeat",
      });
      elem.append(glass);

      whenInView(elem, toggleVisibility);

      function toggleVisibility(visible) {
        $(".turtle-roy-placeholder").animate({ opacity: visible ? 0 : 1 });
      }
    }
    if (options.glass) {
      var glass = $('<div class="glass">');
      glass.css({
        position: "absolute",
        width: "100%",
        height: "100%",
        "z-index": 2,
        top: 0,
        left: 0,
      });
      elem.append(glass);
    }
  };
});
