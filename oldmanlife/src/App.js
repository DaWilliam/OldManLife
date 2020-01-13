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
      {
        return response.json();
      }
      else
        console.log("Error getting response"); 
    })
    .then(result => {      
      this.setState({storyPoint : result})
      console.log(result)
      console.log(this.state.storyPoint.plotText);
    })
  }
  
  render(){
    console.log("heith the plot" + this.state.storyPoint.plotText)
    return (
      
      <div className="App">
        <Game optionOne= {this.state.storyPoint.option1Text} optionTwo= {this.state.storyPoint.option2Text} plot= {this.state.storyPoint.plotText} >
          
        </Game>

      </div>
    )
  }
}



export default App;
