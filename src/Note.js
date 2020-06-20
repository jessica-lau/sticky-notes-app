import React from "react";

var Note = props => (
    <li class="note">
        <input value={props.note.title} class="note__title" type="text" placeholder="Title" />
        <textarea value={props.note.description} class="note__description" placeholder="Description..." />
        <span class="note__delete">X</span>
    </li>
);

export default Note;