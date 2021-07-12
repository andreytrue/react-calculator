import React from 'react';
import '../../css/button.css';

const isOutcome = (value) => {
  return value === "=";
}

function Button(props) {
  return (
    <div
      className={`button-wrapper ${
        isOutcome(props.children) ?  'button--outcome' : ''
      }`}
      onClick={() => props.onClick(props.children)}
    >
      {props.children}
    </div>
  )
}

export default Button;
