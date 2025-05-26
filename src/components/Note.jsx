import { forwardRef } from "react"

const Note = ({content, initialPosition, ...props}) => {
    return (
        <div
            style={{
                position: "absolute",
                left: `${initialPosition?.x}px`,
                top: `${initialPosition?.y}px`,
                border: "1px solid black",
                userSelect: "none",
                padding: '10px',
                width: "200px",
                cursor: "move",
                backgroundColor: "lightyellow"
            }}
            {...props}
        >
            📌{content}
        </div>
    )
}

export default Note;