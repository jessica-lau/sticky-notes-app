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
            id: Date.now(),
            title: '',
            description: '',
            doesMatchSearch: true,
        }

        var newNotes = [...this.state.notes, newNote];
        this.setState({ notes: newNotes });
    }

    onType = (editMeId, updatedKey, updatedValue) => {
        var editNote = this.state.notes.find(x => x.id === editMeId);
        console.log(editMeId);
        editNote[updatedKey] = updatedValue;
        var newList = this.state.notes;
        newList[editMeId] = editNote;
        this.setState({ notes: newList });
      };

    render() {
        return (
            <div class="App">
                <Header searchText={this.state.searchText} addNew={this.addNote} />
                <NotesList notes={this.state.notes} onType={this.onType} />
            </div>
        );
    }

}

export default App;