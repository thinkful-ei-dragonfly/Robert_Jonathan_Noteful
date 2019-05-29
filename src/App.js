import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import MainFolderList from './Components/MainFolderList/FolderList'
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
          
          <section>
            <Route path='/' component={MainFolderList} />
            <Route path='/folder/:folderID' component={MainFolderList}/>
            <Route path='/note/:noteID' component={Folder}/>
          </section>

          <section>
            <Route path='/' component={MainNoteList} />
            <Route path='/note/:noteID' component={Note} />
            <Route path='/folder/:folderID' component={NoteListNav}/>
          </section>

        </main>

      </div>

    )
  }
}

