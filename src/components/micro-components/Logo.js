import React from 'react';
import logo from '../../assets/bookStoreLogo.png';

function Logo(props) {
  return (
    <div className={props.className}>
      <img src={logo} alt="Logo" height={props.height}></img>
    </div>
  )
}

export default Logo;