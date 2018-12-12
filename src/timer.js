import React from 'react'; 

export default function Timer(props){
    return (
        <div>
            <h1 style={{ fontSize:100, marginLeft:0}} onChange= {props.handleChange} >
            {props.hours}:{props.minutes}:{props.seconds}</h1>
        </div>
    );
}