import React from "react";

var Header = props => (
    <header class="app-header">
        <h1 class="app-header__title">Super Sticky Notes</h1>
        <aside class="app-header__controls">
            <button class="add-new">+ New Note</button>
            <input value={props.searchText} class="search" type="text" placeholder="Type here to search..." />
        </aside>
    </header>
);


export default Header;