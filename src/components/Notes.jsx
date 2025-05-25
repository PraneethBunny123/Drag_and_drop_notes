import { useEffect } from "react"
import Note from "./Note"
import determineNewPosition from "./determineNewPosition"

export default function Notes({notes, setNotes}) {

    useEffect(() => {
        const savedNotes = []

        const updatedNotes = notes.map(note => {
            const savedNotes = null
            if(savedNotes) {
                return {}
            }else {
                const position = determineNewPosition()
                return {...note, position}
            }
        })

        setNotes(updatedNotes)
    }, [notes])


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
