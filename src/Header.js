import React from "react";

var Header = props => (
    <header class="app-header">
        <h1 class="app-header__title">Super Sticky Notes</h1>
        <aside class="app-header__controls">
            <button class="add-new" onClick={props.addNew} >+ New Note</button>
            <input value={props.searchText} class="search" type="text" placeholder="Type here to search..." onChange={props.onSearch} />
        </aside>
    </header>
);


export default Header;