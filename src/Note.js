import React, { Component } from "react";

class Note extends Component {
    updateTitle = e => {
        console.log(e.target);
        var updatedValue = e.target.value;
        var editMeId = this.props.note.id;
        this.props.onType(editMeId, "title", updatedValue);
    };
    updateDescription = e => {
        var updatedValue = e.target.value;
        var editMeId = this.props.note.id;
        this.props.onType(editMeId, "description", updatedValue);
    };

    render() {
        let props = this.props
        return (
            <li class="note">
                <input value={props.note.title} class="note__title" type="text" placeholder="Title" onChange={this.updateTitle} />
                <textarea value={props.note.description} class="note__description" placeholder="Description..." onChange={this.updateDescription} />
                <span class="note__delete">X</span>
            </li>
        )
    }
};

export default Note;