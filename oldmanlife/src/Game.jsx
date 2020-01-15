import React from 'react';
import GifPlayer from 'react-gif-player';
import './game.styles.css';

//  This is a functional component that takes in the plot information and onclick to move the plot forward
const Game = ({plot, optionOne, optionTwo, gifURL, makeDecision, endGame}) => {
    if(optionTwo === 'End')
    {
        return <div className="game game-plot" >
                <p>{plot}</p>    
                                {/* Need this '() =>' calls it as a reference? */}        
                <button className="game-button" onClick={() => endGame(optionOne)}>{ optionOne }</button>
                <button className="game-button" onClick={() => endGame(optionTwo)}>{ optionTwo }</button>
                <GifPlayer
                    gif={gifURL}
                    />
                </div>
    }
    else
    {
        return <div className="game game-plot" >
                <p>{plot}</p>    
                                {/* Need this '() =>' calls it as a reference? */}        
                <button className="game-button" onClick={() => makeDecision(optionOne)}>{ optionOne }</button>
                <button className="game-button" onClick={() => makeDecision(optionTwo)}>{ optionTwo }</button>
                <GifPlayer
                    gif={gifURL}/>
                </div>
    }
}

export default Game;