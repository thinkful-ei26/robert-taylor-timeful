import React from 'react';
import Timer from './timer'; 
import Start from './buttons/start'; 
import Stop from './buttons/stop'; 
import Reset from './buttons/reset'; 
import './App.css';

export default class App extends React.Component {
    constructor(props){
      super(props); 
      this.state ={
        seconds:0, 
        hours:0
      }
      this.secondsChange = this.secondsChange.bind(this); 
      this.handleStartButton = this.handleStartButton.bind(this); 
    }
    secondsChange(){
      this.setState({seconds: this.state.seconds +1})
    }
      handleStartButton(e){
        console.log('start button pressed!')
      e.preventDefault(); 
      setInterval(this.secondsChange, 1000); 
      }

    render(){
      return (
        <div className ='parent'>
          <h1>Timer</h1>
          <Timer seconds= '20' minutes='10' hours= '5' />
          <Start handleStartButton= {this.handleStartButton} />
          <Stop />
          <Reset />
          
          
        </div>
      )
    }
  }
