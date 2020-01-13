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
        <p>{this.props.plot} </p>
      <button onClick= {}>{ this.state.buttonOneText }</button>
   
      </div>
    )
  }
}

export default Game;