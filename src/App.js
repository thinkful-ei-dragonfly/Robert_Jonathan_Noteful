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

  


  render() {
    return (
      <div className="App">
        < Header />
        <main>

          {/* HANDLE INVALID PATH WITH SWITCH */}
          
          <section>
            <Route path='/' render={(props) => < MainFolderList {...props} folders={state.folders} />} />
            <Route exact path='/folder/:folderID' component={MainFolderList}/>
            {/* <Route exact path='/note/:noteID' component={FolderName}/> */}
          </section>

          <section>
            <Route path='/' render={(props) => < MainNoteList {...props} notes={state.notes} />}/> 
            {/* <Route exact path='/note/:noteID' component={Note} /> 
            <Route exact path='/folder/:folderID' component={NoteListNav}/> */}
          </section>
        

        </main>

      </div>

    )
  }
}

