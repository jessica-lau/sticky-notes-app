import React from "react";

var Note = () => (
    <li class="note">
        <input class="note__title" type="text" placeholder="Title" />
        <textarea class="note__description" placeholder="Description..." />
        <span class="note__delete">X</span>
    </li>
);

export default Note;