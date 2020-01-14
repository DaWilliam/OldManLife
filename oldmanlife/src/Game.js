import React from 'react';
import './App.css';

class Game extends React.Component {
  constructor(props){
    super();
     this.state = {

     }
   }  
  
  render(){
    return (

      <div className="game">
        <p>{this.props.plot} </p>
        <button onClick={this.props.makeDecision(this.props.optionOne)}>{ this.props.optionOne }</button>
        <button onClick={this.props.makeDecision(this.props.optionTwo)}>{ this.props.optionTwo }</button>

   
      </div>
    )
  }
}

export default Game;