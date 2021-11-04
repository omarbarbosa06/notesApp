import NotesList from "./Components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid"
const App = () => {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "15/02/02",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "13/02/02",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "12/02/02",
    },
    {
      id: nanoid(),
      text: "This is my forth note",
      date: "12/02/02",
    }
  ]);
  return (
   <div className="container">
     <NotesList notes={notes}/>
   </div>
  )
};

export default App;