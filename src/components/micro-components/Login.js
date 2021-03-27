import React from 'react';
import '../../stylesheets/Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ye: 'ye'
    };
  }

  render() {
    return (
      <div className="Login__">
        <div className="Login__container">
          <form>
            <h1>SIGN IN TO YOUR ACCOUNT</h1>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
            />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
            />
            <input type="button" value="SIGN IN"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;