import React from 'react';
import '../../stylesheets/TextInput.css';

function TextInput(props) {
  return (
    <div className="TextInput__">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
      />
    </div>
  );
}

export default TextInput;