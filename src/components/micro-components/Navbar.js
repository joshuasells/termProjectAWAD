import React from 'react';
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
      <nav className="Navbar__navbar">
        {/* <div className="Navbar__logo">
          <img src={bookStoreLogo} alt="Logo" height="50px"></img>
        </div> */}
        <Logo className="Navbar__logo" />
        <a href="#" className="Navbar__toggle-button" onClick={this.toggleHamburger}>
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
            <li><a href="" onClick={this.nullifyLinks}>SIGN IN</a></li>
            <li><a href="" onClick={this.nullifyLinks}>SIGN OUT</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;