import React from 'react';
import Logo from './Logo';
import '../../stylesheets/Footer.css';

function Footer(props) {
  
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked");
  }
  
  return (
    <div className="Footer__">
      <div className="content-wrapper">
        <div className="content">
          <div>
            <h3>Explore</h3>
            <ul>
              <li><a href="#" onClick={handleClick}>Shop</a></li>
              <li><a href="#" onClick={handleClick}>My Account</a></li>
              <li><a href="#" onClick={handleClick}>My Cart</a></li>
              <li><a href="#" onClick={handleClick}>Admin Portal</a></li>
              <li><a href="#" onClick={handleClick}>Log In/Log Out</a></li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="#" onClick={handleClick}>About Us</a></li>
              <li><a href="#" onClick={handleClick}>Careers</a></li>
              <li><a href="#" onClick={handleClick}>Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3>Important</h3>
            <ul>
              <li><a href="#" onClick={handleClick}>Terms of Use</a></li>
              <li><a href="#" onClick={handleClick}>Privacy Policy</a></li>
              <li><a href="#" onClick={handleClick}>FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3>Social</h3>
            <ul>
              <li><a href="#" onClick={handleClick}>Facebook</a></li>
              <li><a href="#" onClick={handleClick}>Twitter</a></li>
              <li><a href="#" onClick={handleClick}>Youtube</a></li>
              <li><a href="#" onClick={handleClick}>Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="arr-wrapper">
        <div className="allRightsReserved">
          <Logo className="Logo" />
          <span>&#169; 2021 Bookstore, LLC. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  )
}

export default Footer;