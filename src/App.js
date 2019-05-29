import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import MainFolderList from './Components/MainFolderList/MainFolderList'
import MainNoteList from './Components/MainNoteList/MainNoteList'
import Folder from './Components/Folder/Folder'
import Note from './Components/Note/Note'
import NoteListNav from './Components/NoteListNav/NoteListNav'
import state from './state'
import { Route } from 'react-router-dom';
// import browser router

export default class App extends React.Component {
state = state
folderClick = id => {
  this.setState({selectedFolder: id})
}  


  render() {
    return (
      <div className="App">
        < Header />
        <main>

          {/* HANDLE INVALID PATH WITH SWITCH */}
          
          <section>
            <Route exact path='/' render={(props) => < MainFolderList {...props} folders={state.folders} folderClick={this.folderClick} />} />
            <Route exact path='/folder/:folderID' render ={(props) => < MainFolderList {...props} folders={state.folders} folderClick={this.folderClick}/>} />
            {/* <Route exact path='/folder/:folderID' render={(props) => <NoteListNav {...props} notes={state.notes} selected={state.selected}/>} /> */}
            {/* <Route exact path='/note/:noteID' component={FolderName}/> */}
          </section>

          <section>
            <Route path='/' render={(props) => < MainNoteList {...props} notes={state.notes} />}/> 
            {/* <Route exact path='/note/:noteID' component={Note} /> */}
          </section>
        

        </main>

      </div>

    )
  }
}

