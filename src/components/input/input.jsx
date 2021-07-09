import React from 'react';
import '../../css/input.css';

function Input(props) {
  return (
    <div className="input">
      <div className="input--value">{props.input}</div>
      <div className="input--result">{props.result}</div>
    </div> 
  )
}

export default Input;
