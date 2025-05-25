import { useEffect } from "react"
import Note from "./Note"

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
    }, [])

    function determineNewPosition() {
        const maxX = window.innerWidth - 250
        const maxY = window.innerHeight - 250

        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY)
        }
    }

    return (
        <div>
            {notes.map(note => (
                <Note key={note.id} content={note.text} />
            ))}
        </div>
    )
}
