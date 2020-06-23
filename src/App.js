import React, { Component } from "react";
import Header from "./Header.js";
import NotesList from "./NotesList.js";


class App extends Component {
    state = {
        notes: [{
            id: 0,
            title: "eat",
            description: "reese peanut butter cups",
            doesMatchSearch: true
        },
        {
            id: 1,
            title: "sleep",
            description: "eight hours",
            doesMatchSearch: true
        },
        {
            id: 2,
            title: "code",
            description: "build an awesome ui",
            doesMatchSearch: true
        }],
        searchText: "Search",

    }

    addNote = () => {
        var newNote = {
            id: this.state.notes.length,
            title: '',
            description: '',
            doesMatchSearch: true,
        }

        var newNotes = [...this.state.notes, newNote];
        this.setState({ notes: newNotes });
    }

    removeNote = (removeId) => {
        var remainingNotes = this.state.notes.filter(x => x.id !== removeId);
        this.setState({ notes: remainingNotes });
    }

    onType = (editMeId, updatedKey, updatedValue) => {
        var editNote = this.state.notes.find(x => x.id === editMeId);
        editNote[updatedKey] = updatedValue;
        var newList = this.state.notes;
        newList[editMeId] = editNote;
        this.setState({ notes: newList });
    };

    onSearch = e => {
        /* toggle the doesMatchSearch boolean value of each sticky
        note when the user types in the search field.
        set the doesMatchSearch value to true for a sticky note if
        it's title or description matches the search string. */
        var searchText = e.target.value.toLowerCase();
        var updatedNotes = this.state.notes.map(note => {
            if (!searchText) {
                /* If the search field is empty, then
              we set the doesMatchSearch value for every note to true. */
                return {
                    ...note,
                    doesMatchSearch: true
                };
            } else {
                var title = note.title.toLowerCase();
                var description = note.description.toLowerCase();
                var titleMatch = title.includes(searchText);
                var descriptionMatch = description.includes(searchText);
                var hasMatch = titleMatch || descriptionMatch;
                return {
                    ...note,
                    doesMatchSearch: hasMatch
                };
            }
        });
        this.setState({
            searchText: searchText,
            notes: updatedNotes
        });
    };

    componentDidUpdate () {
        var saveNotesInString = JSON.stringify(this.state);
        localStorage.setItem("savedNotes", saveNotesInString);
    
    }
    componentDidMount() {
        var saveNotesInString = localStorage.getItem("savedNotes");
        if (saveNotesInString) {
            var savedState = JSON.parse(saveNotesInString);
            this.setState(savedState);
        }
    }

    render() {
        return (
            <div class="App">
                <Header searchText={this.state.searchText} addNew={this.addNote} onSearch={this.onSearch} />
                <NotesList notes={this.state.notes} onType={this.onType} removeNote={this.removeNote} />
            </div>
        );
    }

}

export default App;