import React from "react";
import Input from "./InputBox";
import imgs from "./imgs.svg";

function NoteHeader({search, setQuery}){
    return (
        <div className="note-app__header">
            <img src={imgs} alt="app-notes" height={50} width={50}/>
            <h1>App Notes</h1>
          <div className="note-search">
            <Input
              value={search}
              onChange={setQuery}
              type="search"
              id="search_note"
              name="search_note"
              placeholder="Cari Catatan..."
            />
          </div>
          </div>
      );
}
export default NoteHeader;