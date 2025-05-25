export default function Note({content, ...props}) {
    return (
        <div
            style={{
                position: "absolute",
                left: 0,
                right: 0,
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
