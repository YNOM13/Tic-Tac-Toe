import React, {useState} from 'react';
import "./Game.scss"
import DropDown from "../AI/DropDown/DropDown";

const boardMemoryDefault = [
  [0,0,0,],
  [0,0,0,],
  [0,0,0,],
]
const Game = () => {
  const [boardSize, setBoardSize] = useState(boardMemoryDefault.flat().length)
  const [boardMemory, setBoardMemory] = useState(boardMemoryDefault)
  const [currentStep, setCurrentStep] = useState(1)

  const buttonsMarkUp = () => {
    let  buttonsArray = []
    boardMemory.flat().forEach((element, index) => {
      buttonsArray.push(
        <button
          disabled={element !== 0}
          onClick={()=>updateGame(index)}
          key={index} className="game-buttons"
        >
          {element === 1 ? "X" : element === 2 ? "0" : ""}
        </button>
      )
    })

    return buttonsArray
  }

  const updateGame = (index) => {
    const coords= decodeIndex(index,Math.sqrt(boardSize))

    setBoardMemory(prevState => {
      const prevBoard = JSON.parse(JSON.stringify(prevState))
      prevBoard[coords[0]][coords[1]] = currentStep % 2 === 0 ? 2 : 1

      return prevBoard
    })
    setCurrentStep(prevState => prevState + 1)
  }


  const decodeIndex = (index, boardDim) => {
    const row = parseInt(index / boardDim);
    const col = index % boardDim;
    return [row, col];
  }

  const changeBoardSize = (value) => {
    const boardArr = new Array(+value);
    for (let i = 0; i < boardArr.length; i++) {
      boardArr[i] = new Array(+value).fill(0)
    }
    setBoardMemory(boardArr)
    setBoardSize(boardArr.flat().length)
  }



  return (
    <div className="game-block">
      <div className="select-menu">
        <DropDown onSelectChange={changeBoardSize}/>
      </div>
      <div className="game-block__players">
        <h2 className="player-red">Player 1</h2>
        <h2 className="player-blue">Player 2</h2>
      </div>
      <div className="count-of-wins">
        <p>X</p>
        <p>O</p>
      </div>
      <div style={{gridTemplateColumns:`repeat(${Math.sqrt(boardSize)},1fr)`,
        gridTemplateRows:`repeat(${Math.sqrt(boardSize)},1fr)`}}
        className="buttons-container">
        {buttonsMarkUp()}
      </div>

    </div>
  );
};

export default Game;