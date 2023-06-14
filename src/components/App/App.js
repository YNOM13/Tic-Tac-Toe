import './App.scss';
import Game from "../Game/Game";
import React, {useState} from "react";
import SimpleTicTacToe from "../SimpleTicTacToe/SimpleTicTacToe";

function App() {

  return (
    <div className="main-box">
      <h1>Tac-Tac-Toe</h1>


      <SimpleTicTacToe/>

      <Game/>
    </div>
  );
}

export default App;
