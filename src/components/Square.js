import React from 'react'

//style for the button
const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

function Square({onClick, value}) {
    return (
        //apply to the button the 'onClick' and 'value' passed as a prop
        <button onClick={onClick} style={style}>
            {value}
        </button>
    )
}

export default Square
