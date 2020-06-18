import React from 'react'
import Square from './Square'

//style for the board
const style = {
    border: '4px solid black',
    borderRadius: "10px",
    width: "250px", 
    height: "250px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"
}

function Board({squares, onClick}) {
    return (
        //div that is going to encapsulate all squares
        <div style={style}>
            {/* for each square in the 'squares' var draw a new Square componet
            onClick is going to be the one passed as a prop as well  */}
            {squares.map((s, i) => (
                <Square key={i} value={s} onClick={() => onClick(i)}/>
            ))}
        </div>
    )
}

export default Board
