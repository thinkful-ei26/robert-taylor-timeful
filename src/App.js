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
        seconds: 55,
        minutes: 59, 
        hours:0,
        active: false, 
        interval: null
      }
      this.timer = this.timer.bind(this); 
      this.handleStartButton = this.handleStartButton.bind(this);
      this.handleStopButton = this.handleStopButton.bind(this); 
      this.handleResetButton = this.handleResetButton.bind(this);
      this.toggle = this.toggle.bind(this); 
      this.minutesChange = this.minutesChange.bind(this); 
      this.hoursChange = this.hoursChange.bind(this); 
      this.addLeadingZeros = this.addLeadingZeros.bind(this); 
    }
    timer(){
      console.log(typeof this.state.seconds);
      this.minutesChange();
      this.hoursChange();

      if(this.state.active){
      this.setState({seconds: this.state.seconds +1})
      }
      else{
        this.setState({seconds:this.state.seconds})
      }
    }
    minutesChange(){
      if(this.state.seconds === 59){
        this.setState({seconds:0, minutes:this.state.minutes +1});
      }
    }
    hoursChange(){
      if(this.state.minutes === 60){
        this.setState({minutes:0, hours:this.state.hours +1});
      }
    }
    toggle(){
     this.state.active = !this.state.active;
    }
    addLeadingZeros(value) {
      value = String(value);
      while (value.length < 2) {
        value = '0' + value;
      }
      return value;
    }
    
    handleStartButton(e){
      console.log('start button pressed!')
      e.preventDefault();
      this.toggle(); 
      console.log(this.state.active); 
      if(this.state.active) {
      console.log('counter running');
      this.setState({interval:setInterval(this.timer, 1000)}); 
      } 
      else{
        clearInterval(this.state.interval);
      }
    }

    handleStopButton(e) {
      console.log('STOPPPPPP!!!!')
      e.preventDefault();
      this.setState({active: false});
      clearInterval(this.state.interval);
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
      clearInterval(this.state.interval);
    }

    render(){

      return (
        <div className ='parent'>
          <h1>Timer</h1>
          <Timer seconds={this.addLeadingZeros(this.state.seconds)}
            minutes={this.addLeadingZeros(this.state.minutes)} 
            hours={this.addLeadingZeros(this.state.hours)} />
          <Start handleStartButton={this.handleStartButton} />
          <Stop handleStopButton={this.handleStopButton}/>
          <Reset handleResetButton={this.handleResetButton}/>
          
          
        </div>
      )
    }
  }
