import React from "react";
import { useEffect, useState } from "react";
import NoteItemBody from "./NoteItemBody";
import NoteHeader from "./NoteHeader";
import { getData } from "../utils";

function NoteApp() {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getData());

  const notesAll = (searchNotes || notes).filter((note) => !note.archived);
  const notesArchive = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  return (
    <div className="note-app">
      <NoteHeader search={query} setQuery={setQuery} />
      <NoteItemBody
        notesAll={notesAll}
        notesArchive={notesArchive}
        setNotes={setNotes}
      />
    </div>
  );
}

export default NoteApp;
