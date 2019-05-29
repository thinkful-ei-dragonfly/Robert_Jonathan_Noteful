import React from 'react'

export default function Note(props) {

  // if ()

  // add onClick and onHover to h2/name??

  return (
    <div folderid={props.folderId}>
      <h2>{props.name}</h2>
      <p>{props.modified}</p>
      <button className="delete-button">Delete</button>
      <p className="hidden hide-content">{props.content}</p>
    </div>
  );

}