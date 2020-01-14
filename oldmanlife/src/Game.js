import React from 'react';
import './App.css';

const Game = ({plot, optionOne, optionTwo, makeDecision}) => {


    return <div className="game">
            <p>{plot} </p>
            <button onClick={() => makeDecision(optionOne)}>{ optionOne }</button>
            <button onClick={() => makeDecision(optionTwo)}>{ optionTwo }</button>
          </div>
}

export default Game;