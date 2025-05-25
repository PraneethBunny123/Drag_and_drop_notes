import { useEffect } from "react"
import Note from "./Note"
import determineNewPosition from "./determineNewPosition"

export default function Notes({notes, setNotes}) {

    useEffect(() => {
        //local storage
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || []

        const updatedNotes = notes.map(note => {
            const savedNote = savedNotes.find(n => n.id === note.id)
            if(savedNote) {
                return {...note, position: savedNote.position}
            }else {
                const position = determineNewPosition()
                return {...note, position}
            }
        })

        setNotes(updatedNotes)
        localStorage.setItem('notes', JSON.stringify(updatedNotes))
    }, [notes.length])


    return (
        <div>
            {notes.map(note => (
                <Note 
                    key={note.id} 
                    content={note.text} 
                    initialPosition={note.position}    
                />
            ))}
        </div>
    )
}
