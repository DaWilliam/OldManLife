import React from 'react';
import './App.css';
import Game from './Game';
import Title from './Title';

class App extends React.Component {
  constructor(){
    super();
    this.state = {                
        isPlayin : false,
        storyPoint : {
          id : -1,
          plotText : 'Hello',
          tag : 'init_tag',
          option1Text : 'init_opt1',
          option2Text : 'init_opt2',
          gifURL : 'init_gif',
          key : 'init_key'
        }
    }
    
  }

  getPlotPoint = (decision) => {
    fetch('http://localhost:8080/story/' + decision)
    .then(response => response.json())
    .then(result => {
      this.setState({storyPoint : result})
      console.log(this.state.storyPoint.plotText)
    })
  }
  
  render(){
    return (
      <div className="App">        
        {this.renderGame()}
      </div>
    )
  }

  renderGame = () => {
      if(!this.state.isPlayin)
      {
          return <Title playOnClick={this.playGame}></Title>
      }
      else
      {          
          return <Game plot={this.state.storyPoint.plotText} optionOne={this.state.storyPoint.option1Text} optionTwo={this.state.storyPoint.option2Text}
                        gifURL={this.state.storyPoint.gifURL} makeDecision={this.getPlotPoint} endGame={this.endGame}></Game>      
      }
  }

  playGame = () => {
      console.log("Starting Game");
      this.getPlotPoint("First")
      this.setState({isPlayin : true})
  }

  endGame = () => {
      this.setState({isPlayin : false});
  }
}

export default App;