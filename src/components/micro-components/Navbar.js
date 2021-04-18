import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Navbar.css';
import Logo from './Logo';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "Navbar__navbar-links"
    };

    this.toggleHamburger = this.toggleHamburger.bind(this);
  }

  toggleHamburger(e) {
    e.preventDefault();

    if (this.state.classes === "Navbar__navbar-links") {
      this.setState({
        classes: "Navbar__navbar-links Navbar__active"
      });
    }
    else {
      this.setState({
        classes: "Navbar__navbar-links"
      });
    }
  }

  nullifyLinks(e) {
    e.preventDefault();
  }


  render() {
    return (
      <div className="Navbar__">
        <nav className="Navbar__navbar">
          <Link className="Navbar__logo" to="/"><Logo className="Navbar__logo" /></Link>
          <a href className="Navbar__toggle-button" onClick={this.toggleHamburger}>
            <span className="Navbar__bar"></span>
            <span className="Navbar__bar"></span>
            <span className="Navbar__bar"></span>
          </a>
          <div className={this.state.classes}>
            <ul>
              <li><a href="" onClick={this.nullifyLinks}>SHOP</a></li>
              <li><a href="" onClick={this.nullifyLinks}>ACCOUNT</a></li>
              <li><a href="" onClick={this.nullifyLinks}>ADMIN</a></li>
              <li><a href="" onClick={this.nullifyLinks}>CART</a></li>
              <li><Link to="/signin">SIGN IN</Link></li>
              <li><a href="" onClick={this.nullifyLinks}>CREATE AN ACCOUNT</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;