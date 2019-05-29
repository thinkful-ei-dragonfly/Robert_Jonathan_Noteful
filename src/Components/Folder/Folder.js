import React from 'react'

export default class Folder extends React.Component {
  handleFolderClick = id => {
  console.log(id)
  this.props.folderClick(id);
  }

  render(){
  return (
    <button onClick={() => this.handleFolderClick(this.props.id)} id={this.props.id}>{this.props.name}</button>
  );
  }
  }