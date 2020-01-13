import React from 'react';
import './App.css';
import Game from './Game';

class App extends React.Component {
  constructor(){
    super();
    this.state = {      
        storyPoint : {
          id : -1,
          plotText : 'Hello',
          tag : 'init_tag',
          option1Text : 'init_opt1',
          option2Text : 'init_opt2',
          key : 'init_key',
        }
    }
    this.getPlotPoint("First")
  }

  getPlotPoint(decision) {
    fetch('http://localhost:8080/story/' + decision)
    .then(response =>
    { 
      if (response.ok)
        return response.json();
      else
        console.log("Error getting response"); 
    })
    .then(result => {      
      this.setState({storyPoint : result})
      console.log(this.state.storyPoint.plotText);
    })
  }
  
  render(){
    
    return (
      
      <div className="App">
        <Game plot= {this.state.plot} ></Game>
      </div>
    )
  }
}



export default App;
