// import './App.css'
import { useState } from "react"
import { DUMMY_DATA } from "./components/DUMMY_DATA"
import Notes from "./components/Notes"

function App() {
    const [notes, setNotes] = useState(DUMMY_DATA)
    
    return (
        <div>
            <Notes notes={notes} setNotes={setNotes} />
        </div>
    )
}

export default App
