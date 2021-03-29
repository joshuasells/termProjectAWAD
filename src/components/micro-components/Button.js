import React from 'react';
import '../../stylesheets/Button.css';

function Button(props) {
  return (
    <div className="Button__">
      <input type="button" value={props.value}></input>
    </div>
  );
}

export default Button;