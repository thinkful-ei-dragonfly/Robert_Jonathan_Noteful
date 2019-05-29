import React from 'react'
import Folder from '../Folder/Folder'
import AddFolder from './AddFolder/AddFolder'
import GoBack from './GoBack/GoBack'
import {Link} from 'react-router-dom'

export default class FolderList extends React.Component {
  
  render() {

    const folders = this.props.folders.map( (folder, index) => { 
      return <li  key={index}><Link to={"/folder/" + folder.id}>< Folder id={folder.id} name={folder.name} folderClick={this.props.folderClick} /> </Link></li>; 
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