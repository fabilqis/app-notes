import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NotesItemContent";

function NoteItem({ id, title, body, createdAt, archived, action }) {
  const onDelete = (item) =>
    action((notes) => notes.filter((note) => note.id !== item));

  const onArchived = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      })
    );
  };

  return (
    <div className="note-item">
      <NoteItemContent
        title={title}
        body={body}
        createdAt={createdAt}
        archived={archived}
        action={action}
      />

      <NoteItemAction
        onDelete={onDelete}
        onArchived={onArchived}
        id={id}
        archived={archived}
      />
    </div>
  );
}

export default NoteItem;
