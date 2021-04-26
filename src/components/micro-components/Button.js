import React from 'react';
import '../../stylesheets/Button.css';

function Button(props) {
  return (
    <div className="Button__">
      <input type="submit" value={props.value}></input>
    </div>
  );
}

export default Button;