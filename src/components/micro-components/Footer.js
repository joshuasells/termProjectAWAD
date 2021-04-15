import React from 'react';
import Logo from './Logo';
import '../../stylesheets/Footer.css';

function Footer(props) {
  return (
    <div className="Footer__">
      <div>
        <h3>Explore</h3>
        <ul>
          <li>Shop</li>
          <li>My Account</li>
          <li>My Cart</li>
          <li>Admin Portal</li>
          <li>Log In/Log Out</li>
        </ul>
      </div>
      <div>
        <h3>Company</h3>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h3>Important</h3>
        <ul>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div>
        <h3>Social</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Youtube</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="arr">
        <Logo />
        <span>&#169; 2021 Bookstore, LLC. All Rights Reserved.</span>
      </div>
    </div>
  )
}

export default Footer;