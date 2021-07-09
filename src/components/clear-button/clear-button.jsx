import React from 'react';
import '../../css/button.css';

function ClearButton(props) {
  return (
    <div className="button-wrapper" onClick={props.handleClear}>
      {props.children}
    </div>
  )
}

export default ClearButton;
