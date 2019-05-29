import React from 'react';
import Note from '../Note/Note';
import AddNote from './AddNote/AddNote'

export default class MainNoteList extends React.Component {


  // define which functions here? probably

  render() {

    const notes = this.props.notes.map( (note, index) => { 
      return <li key={index}> < Note id={note.id} name={note.name} modified={note.modified} folderId={note.folderId} content={note.content} /></li>; 
    }); 


    return (
      <div className="note-list">
        <ul>
          {notes}
        </ul> 
        <AddNote />
      </div>
    );

  }

}