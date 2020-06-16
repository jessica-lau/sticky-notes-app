import React from "react";


var App = () => (
    <div>
        <header class= "app-header">
            <h1 class="app-header__title">Super Sticky Notes</h1>
            <aside class= "app-header__controls">
                <button class="add-new">+ New Note</button>
                <input class="search" type="text" placeholder="Type here to search..." />
            </aside>
        </header>
        <ul class= "notes-list">
            <li class= "note">
                <input class= "note__title" type="text" placeholder="Title" />
                <textarea class= "note__description" placeholder="Description..." />
                <span class= "note__delete">X</span>
            </li>
            <li class= "note">
                <input class= "note__title" type="text" placeholder="Title" />
                <textarea class= "note__description" placeholder="Description..." />
                <span class= "note__delete">X</span>
            </li>
            <li class= "note">
                <input class= "note__title" type="text" placeholder="Title" />
                <textarea class= "note__description" placeholder="Description..." />
                <span class= "note__delete">X</span>
            </li>
        </ul>
    </div>
);

export default App;