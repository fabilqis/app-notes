import React from "react";

function NoteItemAction({id, onDelete, onArchived, archived}){

    return(
        <div className="note-item__action">
            <button 
            className="note-item__delete-button" 
            id={id} 
            onClick={() => onDelete(id)}
            aria-label="Delete Button"
            disabled={archived}>
           {archived ? null : "Delete"}</button>
            <button 
            className="note-item__archive-button" 
            id={id} 
            onClick={() => onArchived(id)}
            aria-label="Archive Button"
            >{archived ? "Back": "Archived"}</button>
        </div>  
    )
}

export default NoteItemAction;