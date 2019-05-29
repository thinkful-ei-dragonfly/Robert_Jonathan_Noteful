import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import FolderList from './Components/FolderList/FolderList'
import NoteList from './Components/NoteList/NoteList'
// import browser router

export default function App() {
  return (
    <div className="App">
      < Header />
      < main >
        {/* < FolderList />
        < NoteList /> */}
      </main>

    </div>

  )
}

