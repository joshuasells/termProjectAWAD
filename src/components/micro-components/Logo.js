import React from 'react';
import logo from '../../assets/bookStoreLogo.png';
import logoDark from '../../assets/bookStoreLogoDark.png';

function Logo(props) {
  
  let image;

  if (props.color === "light") {
    image = logo;
  }
  else {
    image = logoDark;
  }
  
  return (
    <div className={props.className}>
      <img src={image} alt="Logo"></img>
    </div>
  )
}

export default Logo;