import React from 'react';
import './App.css';
import Game  from './Game';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      plot: "Old Man Life",
      buttonOneText: "wasup",
      buttonTwoText: "kaka",
    }
  }
  render(){
    return (
      
      <div className="App">

    <Game plot={this.state.plot}>  
     </Game>
    

        
      </div>
    )
  }
}



export default App;
