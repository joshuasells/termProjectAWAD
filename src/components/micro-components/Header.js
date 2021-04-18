import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import bookLover from '../../assets/bookLover.png';
import '../../stylesheets/Header.css';

function Header(props) {
  return (
    <div className="Header__">
      <div className="Header-container">
        <div className="content">
          <h1>Find the right book for the right class.</h1>
          <Link to="/createaccount"><Button value="FIND MY BOOK" /></Link>
        </div>
        <img src={bookLover} alt="Book Lover Design"></img>
      </div>
    </div>
  )
}

export default Header;