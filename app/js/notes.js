define(["bacon.jquery", "lodash"], function() {
  var main = $("#main")
  var click = main.dblclickE()
  var addedNote = click.flatMapFirst(function(e) {
    var x = e.pageX - main.offset().left
    var y = e.pageY - main.offset().top
    var id = nextId()
    var note = addNoteDiv(id, x,y)
    var input = $('<input type="text">')
      .attr("placeholder", "Kirjoita muistiinpano")
    note.append(input)

    setTimeout(function() {
      input.focus()
    }, 0)

    return input.blurE().take(1).flatMap(function() {
      var text = input.val()
      if (text) {
        input.replaceWith(createStaticNoteText(text))
        return Bacon.once({ x: x, y: y, text: text, id: id})
      } else {
        note.remove()
        return Bacon.never()
      }
    }).concat(Bacon.later(500).filter(false))
  })

  var noteIdRemoved = main.clickE(".note .remove").doAction(".preventDefault").doAction(".stopPropagation")
    .map(function(event) {
      var $note = $(event.target).closest(".note")
      return parseInt($note.attr("data-id"))
    })

  var notes = Bacon.update(
      initialNotes(),
      [addedNote], function(notes, note) { return notes.concat(note) },
      [noteIdRemoved], function(notes, id) { return _.reject(notes, { id: id}) })
  notes.take(1).flatMap(Bacon.fromArray).onValue(addStaticNote)
  notes.skip(1).onValue(function(notes) {
    localStorage.setItem("notes", JSON.stringify(notes))
  })
  noteIdRemoved.onValue(function(noteId) {
    var $note = $(".note[data-id=" + noteId + "]")
    $note.remove()
  })
  function nextId() {
    return new Date().getTime()
  }
  function addNoteDiv(id, x, y) {
    var note = $("<div>").addClass("note").attr("data-id", id)
    note.css({ position: "absolute", left: x, top: y})
    var remove = $("<a>x</a>").addClass("remove")
    note.append(remove)
    main.append(note)
    return note
  }
  function addStaticNote(note) {
    addNoteDiv(note.id, note.x, note.y).append(createStaticNoteText(note.text))
  }
  function createStaticNoteText(text) {
    return $("<span>").text(text)
  }
  function initialNotes() {
    noteString = localStorage.getItem("notes")
    return noteString ? JSON.parse(noteString) : []
  }
})
