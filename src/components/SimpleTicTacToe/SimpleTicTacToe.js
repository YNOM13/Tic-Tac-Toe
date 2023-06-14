import React, { useState } from 'react';
import "./SimpleTicTacToe.scss"
import Modal from "../AI/Modal/Modal";

const gameParams = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
};

const WinningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const SimpleTicTacToe = () => {
  const [active, setActive] = useState(true)
  const [ticTacToeInfo, setTicTacToeInfo] = useState(gameParams);
  const [gamePlayed, setGamePlayed] = useState(0)
  const handleClick = (index) => {
    const { board, currentPlayer, winner } = ticTacToeInfo;

    if (board[index] || winner) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;

    const newWinner = checkWinner(updatedBoard);
    const newPlayer = currentPlayer === 'X' ? 'O' : 'X';

    setTicTacToeInfo({
      board: updatedBoard,
      currentPlayer: newPlayer,
      winner: newWinner,
    });
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WinningCombinations.length; i++) {
      const [a, b, c] = WinningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const renderSquare = (index) => {
    const { board } = ticTacToeInfo;
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const { currentPlayer, winner } = ticTacToeInfo;

  const resetGame = () => {
    setTicTacToeInfo(gameParams);
    setGamePlayed(prevState => prevState + 1)
    setActive(true)
  };

  let status;
  if (winner) {
    status = <Modal active={active} setActive={()=>setActive(false)}>
      <button onClick={resetGame}>Play again</button>
      <span>The winner is {winner}</span>
    </Modal>
  } else {
    status = <p>Next player:
      <span style={currentPlayer === 'X' ?
        {background:'red'} : {background:'green'}}
        className="currentPlayer">
        {currentPlayer}
      </span>
    </p>;
  }

  return (
    <div className="game">
      <div className="game-board">
        <h2>{gamePlayed}</h2>
        <div className="status">{status}</div>
        <button onClick={resetGame}>ResetGame</button>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>

      </div>
    </div>
  );
};

export default SimpleTicTacToe;

