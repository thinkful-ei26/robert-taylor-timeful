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
        seconds: 0,
        minutes: 0, 
        hours:0,
        active: false
      }
      this.secondsChange = this.secondsChange.bind(this); 
      this.handleStartButton = this.handleStartButton.bind(this);
      this.handleStopButton = this.handleStopButton.bind(this); 
      this.handleResetButton = this.handleResetButton.bind(this);
    }
    secondsChange(){
      this.setState({seconds: this.state.seconds +1})
    }
    handleStartButton(e){
        console.log('start button pressed!')
      e.preventDefault();
      this.setState({active: true})
      while(this.state.active) {
        setInterval(this.secondsChange, 1000); 
      } 
    }

    handleStopButton(e) {
      console.log('STOPPPPPP!!!!')
      e.preventDefault();
      this.setState({active: false});
    }

    handleResetButton(e) {
      console.log('START OVER');
      e.preventDefault();
      this.setState({
        seconds: 0,
        minutes: 0,
        hours: 0,
        active: false
      })
    }

    render(){
      return (
        <div className ='parent'>
          <h1>Timer</h1>
          <Timer seconds={this.state.seconds} minutes={this.state.minutes} hours={this.state.hours} />
          <Start handleStartButton={this.handleStartButton} />
          <Stop handleStopButton={this.handleStopButton}/>
          <Reset handleRestButton={this.handleResetButton}/>
          
          
        </div>
      )
    }
  }
