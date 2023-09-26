import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

function NoteItemBody({ notesAll, notesArchive, setNotes}) {
    return(
            <div className="note-app__body">
              <NoteInput setNotes={setNotes} />
              <NotesList label="All Notes" setNotes={setNotes} notes={notesAll} />
              <NotesList
                label="Archive Notes"
                setNotes={setNotes}
                notes={notesArchive}
              />
            </div>
    )
}

export default NoteItemBody;