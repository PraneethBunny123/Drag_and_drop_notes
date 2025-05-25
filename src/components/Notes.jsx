import Note from "./Note"

export default function Notes({notes, setNotes}) {
    return (
        <div>
            {notes.map(note => (
                <Note key={note.id} content={note.text} />
            ))}
        </div>
    )
}
