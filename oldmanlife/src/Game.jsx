import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import './game.styles.css';

//  This is a functional component that takes in the plot information and onclick to move the plot forward
const Game = ({plot, optionOne, optionTwo, makeDecision}) => {
    return <div className="game game-plot" >
            <p>{plot}</p>    
                            {/* Need this '() =>' calls it as a reference? */}        
              <button className="game-button" onClick={() => makeDecision(optionOne)}>{ optionOne }</button>
              <button className="game-button" onClick={() => makeDecision(optionTwo)}>{ optionTwo }</button>
            </div>
}

export default Game;