import React from 'react';

export default function Start(props){
    return (
        <button onClick={props.handleStartButton} className="offset" type='input' value= 'start'>Start</button>
    )
}