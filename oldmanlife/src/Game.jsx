import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import './game.styles.css';

const Game = ({plot, optionOne, optionTwo, makeDecision}) => {


    return <div className="game game-plot" >
            <p>{plot}</p>            
              <button onClick={() => makeDecision(optionOne)}>{ optionOne }</button>
              <button onClick={() => makeDecision(optionTwo)}>{ optionTwo }</button>
            </div>
}

export default Game;