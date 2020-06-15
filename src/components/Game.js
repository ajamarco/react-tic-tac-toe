import React, {useState} from 'react'
import Board from './Board'
import {calculateWinner} from '../helpers'

function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        const boardCopy = [board];
        if (boardCopy[i] === null || winner) return;
        boardCopy[i] = xIsNext ? 'X': 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
        
    }

    const jumpTo = () => {

    }

    const renderMoves = () => {

    }

    return (
        <div>
            <Board onClick={handleClick} squares={board}/>
        </div>
    )
}

export default Game
