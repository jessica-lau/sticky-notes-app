import React from "react";
import Note from "./Note.js";

var NotesList = props => {
    var searchMatches = props.notes.filter(x => x.doesMatchSearch === true);
    var notesElements = searchMatches.map(x => <Note note={x} key={x.id} />);
    return <ul class="notes-list">{notesElements}</ul>;

}

export default NotesList;