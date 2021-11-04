import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handleClickSave = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small
          style={{
            color: characterLimit - noteText.length <= 10 ? "red" : "black",
          }}
        >
          {characterLimit - noteText.length} Remaining
        </small>
        <button className="save" onClick={handleClickSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
