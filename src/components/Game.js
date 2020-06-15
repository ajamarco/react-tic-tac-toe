import React, {useState} from 'react'
import Board from './Board'
import {calculateWinner} from '../helpers'

const styles = {
    width: '200px',
    margin: '20px auto'
}

function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        debugger;
        const boardCopy = [...board];
        if (winner) return;
        else if (boardCopy[i] === null) {
            boardCopy[i] = xIsNext ? 'X': 'O';
            setBoard(boardCopy);
            setXisNext(!xIsNext);
        }

    }

    const jumpTo = () => {

    }

    const renderMoves = () => {
        return(
            <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
        )
    }

    return (
        <>
            <Board onClick={handleClick} squares={board}/>
            <div style={styles}>
                <p>{winner ? `Winner: ${winner}` : "Next Player: " + (xIsNext ? "X": "O")}</p>
                {renderMoves()}
            </div> 
        </>
    )
}

export default Game
