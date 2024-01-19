import { useState } from "react";


export default function Player({initialName,symbol}){
 const [playername,setPlayerName] = useState(initialName);
 const [isEditing,setEditing] =useState(false);

 function handleEditClick(){
    setEditing((editing)=> !editing);
 }

 function handleChange(event){
   setPlayerName(event.target.value);
 }
 let editablePlayerName= <span className="player-name">{playername}</span>;
 
 let btnCaption='Edit';

 if(isEditing){
   editablePlayerName=<input type="text" required value={playername} onChange={handleChange}/>;
    btnCaption='Save';
 }

    return (
        <li>
            <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            {/* <button onClick={handleEditClick}>{isEditing?'Save':'Edit'}</button> */}
            <button onClick={handleEditClick}>{btnCaption}</button>
            
          </li>
    );
}