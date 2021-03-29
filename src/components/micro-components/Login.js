import React from 'react';
import '../../stylesheets/Login.css';
import Logo from './Logo';
import TextInput from './TextInput';
import Button from './Button';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ye: 'ye'
    };
  }

  render() {
    return (
      <>
        <div className="Login__">
          <Logo className="Login__Logo" color="light" />
            <div className="Login__container">
              <form>
                <h1>SIGN IN TO YOUR ACCOUNT</h1>
                <TextInput label="Username" type="text" name="username" id="username" />
                <TextInput label="Password" type="text" name="password" id="password" />
                <Button value="SIGN IN" />
              </form>
            </div>
        </div>
      </>
    );
  }
}

export default Login;