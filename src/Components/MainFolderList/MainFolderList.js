import React from 'react'
import Folder from '../Folder/Folder'
import AddFolder from './AddFolder/AddFolder'
import GoBack from './GoBack/GoBack'

export default class FolderList extends React.Component {
  
  render() {

    const folders = this.props.folders.map( (folder, index) => { 
      return <li key={index}> < Folder id={folder.id} name={folder.name} /></li>; 
    }); 

  return (
    <div className="side-bar">
      <ul>
        {folders}
      </ul>
      <AddFolder />
    </div>
    )
  }
}