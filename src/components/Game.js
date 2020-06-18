import React, {useState} from 'react'
import Board from './Board'
import {calculateWinner} from '../helpers'

const styles = {
    width: '200px',
    margin: '20px auto'
}

function Game() {
    //states that will hold the board and who's next to play - X or O
    //the first creates an array with 9 elements filling them with null values
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);

    //var to hold the winner - if theres one already
    const winner = calculateWinner(board);


    const handleClick = (i) => {
        //create a copy of the board var
        const boardCopy = [...board];
        //if theres a winner just end this function without changing anything
        if (winner) return;

        //if the square where the user clicked is null we fill this space with X or O
        else if (boardCopy[i] === null) {
            boardCopy[i] = xIsNext ? 'X': 'O';
            //set the board to be the copy we are dealing with
            setBoard(boardCopy);
            //changing whos next
            setXisNext(!xIsNext);
        }

    }

    //function to deal with the time jump
    const jumpTo = () => {

    }

    //function to render a button below the board
    //to start a new game setting a new empty board
    const renderMoves = () => {
        return(
            <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
        )
    }

    return (
        <>
            {/* create a new board component, passing the board and handleClick*/}
            <Board onClick={handleClick} squares={board}/>
            <div style={styles}>
                {/* text to indicate who the winner is - if theres one 
                    render the function renderMoves() */}
                <p>{winner ? `Winner: ${winner}` : "Next Player: " + (xIsNext ? "X": "O")}</p>
                {renderMoves()}
            </div> 
        </>
    )
}

export default Game
