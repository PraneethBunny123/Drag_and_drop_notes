import {useState} from "react";
import "./App.css";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Link in bio for my Frontend Interview Prep Course",
    },
    {
      id: 2,
      text: "Like this Video and Subscribe to Roadside Coder",
    },
  ]);

  const [note, setNote] = useState("");

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          marginTop: "30px",
        }}
      >
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          placeholder="Enter a note"
        />
        <button
          onClick={() => {
            setNotes([...notes, {id: notes.length + 1, text: note}]);
            setNote("");
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Add Note
        </button>
      </div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;