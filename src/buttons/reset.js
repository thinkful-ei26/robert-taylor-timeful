import React from 'react';

export default function Reset(props){
    return (
        <button onClick={props.handleResetButton} className="offset" type='input' value= 'reset'>Reset</button>
    )
}