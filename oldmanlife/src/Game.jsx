import React from 'react';
import GifPlayer from 'react-gif-player';
import './game.styles.css';

//  This is a functional component that takes in the plot information and onclick to move the plot forward
const Game = ({plot, optionOne, optionTwo, makeDecision}) => {
    return <div className="game game-plot" >
            <p>{plot}</p>    
                            {/* Need this '() =>' calls it as a reference? */}        
              <button className="game-button" onClick={() => makeDecision(optionOne)}>{ optionOne }</button>
              <button className="game-button" onClick={() => makeDecision(optionTwo)}>{ optionTwo }</button>
              <GifPlayer
                  gif="https://media.giphy.com/media/l46CBvLI7Q7YthRzG/giphy.gif"
                />
            </div>
}

export default Game;