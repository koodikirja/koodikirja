define(["bacon.jquery", "jquery"], function() {
  $("body").addClass("os-detected-" + detectOS())

  var selectionEvents = $(".select-os li").clickE().map(function(e) {
    return $(e.target).closest("li").attr("data-os")
  })
  var selectedOS = selectionEvents.toProperty(initialOS())

  selectedOS.onValue(function(os) {
    localStorage.setItem("selectedOS", os)
    $(".select-os li").removeClass("selected")
    $(".select-os .os-" + os).addClass("selected")
  })

  function detectOS() {
    if (navigator.appVersion.indexOf("Win")!=-1) return "windows"
    if (navigator.appVersion.indexOf("Mac")!=-1) return "mac"
    if (navigator.appVersion.indexOf("Linux")!=-1) return "linux"
  }

  function initialOS() {
    return localStorage.selectedOS || detectOS()
  }
})
