define(["bacon.jquery", "jquery"], function() {
  var oses = ["windows", "mac", "linux"]

  $("body").addClass("os-detected-" + detectOS())
           .removeClass("os-notdetected")

  var selectionEvents = $(".select-os li").clickE().map(function(e) {
    return $(e.target).closest("li").attr("data-os")
  })
  var selectedOS = selectionEvents.toProperty(initialOS())

  selectedOS.onValue(function(selected) {
    localStorage.setItem("selectedOS", selected)
    $(".select-os li").removeClass("selected")
    $(".select-os .os-" + selected).addClass("selected")
    oses.forEach(function(os) {
      $("body").toggleClass("os-" + os, os == selected)
    })
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
