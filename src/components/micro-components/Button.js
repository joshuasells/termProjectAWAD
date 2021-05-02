import React from 'react';
import '../../stylesheets/Button.css';

function Button(props) {
  return (
    <div className="Button__">
      <input type="submit" value={props.value} id={props.id}></input>
    </div>
  );
}

export default Button;