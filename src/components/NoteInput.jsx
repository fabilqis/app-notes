import React from "react";
import { useState } from "react";
import Input from "./InputBox";


function  NoteInput ({setNotes }){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onSubmitEventHandler = (event) => {
        event.preventDefault();
        const timestamp = new Date().toISOString();

        setNotes((notes) => [
            ...notes,
            {
                id: timestamp,
                title: title,
                body:body,
                createdAt: timestamp,
                archived : false,
            }
        ])
    }

    return (
        <div className="note-input">
          <h2>New Notes</h2>
          <form onSubmit={onSubmitEventHandler}>
            <p className="note-input__title__char-limit">
              Character left : {50 - title.length}
            </p>
            <Input
              value={title}
              onChange={setTitle}
              id="title"
              name="title"
              type="text"
              placeholder="Tulis judul..."
              required
            />
            <Input
              value={body}
              onChange={setBody}
              id="body"
              name="body"
              type="textarea"
              placeholder="Tulis isi catatan disini..."
              required
            />
              <button type="submit">
              Tambahkan
            </button>
          </form>
        </div>
      );
    }

export default NoteInput;