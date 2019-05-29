import React from 'react'
import Folder from '../Folder/Folder'
import AddFolder from './AddFolder/AddFolder'
import GoBack from './GoBack/GoBack'

export default class FolderList extends React.Component{
  
  render(){
  return (
    <div className="side-bar">
      <ul>
        <Folder />
        {/* <AddFolder />
        <GoBack /> */}
      </ul>
      </div>
  )
  }
}