import React from "react";
import Note from "./Note.js";

var keepMatchSearch = note => note.doesMatchSearch;
var renderNote = note => <Note note={note} key={note.id} />

var NotesList = props => {
    var searchMatches = props.notes.filter(keepMatchSearch);
    var notesElements = searchMatches.map(renderNote);
    return <ul class="notes-list">{notesElements}</ul>;

}

export default NotesList;