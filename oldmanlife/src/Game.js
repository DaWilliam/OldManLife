import React from 'react';
import './App.css';

class Game extends React.Component {
  constructor(){
    super();
    this.state = {
     plot: "a",
     buttonOneText: "b",
     buttonTwoText: "c",

    }
  }


  
  render(){
    return (

      <div className="game">
        <p> {this.state.plot} </p>
    <button>{ this.state.buttonOneText }</button>
    <button>{ this.state.buttonTwoText }</button>
      </div>
    )
  }
}

export default Game;