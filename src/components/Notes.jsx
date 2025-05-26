import { createRef, useEffect, useRef } from "react"
import Note from "./Note"
import determineNewPosition from "./determineNewPosition"

export default function Notes({notes, setNotes}) {
    const noteRefs = useRef([])

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

    function handleDragStart(note, e) {

    }

    return (
        <div>
            {notes.map(note => (
                <Note 
                    key={note.id}
                    ref={noteRefs.current[note.id] ? 
                        noteRefs.current[note.id] : 
                        (noteRefs.current[note.id] = createRef())
                    } 
                    content={note.text} 
                    initialPosition={note.position}   
                    onMouseDown={(e) => handleDragStart(note, e)} 
                />
            ))}
        </div>
    )
}
