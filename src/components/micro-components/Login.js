import React from 'react';
import '../../stylesheets/Login.css';
import Logo from './Logo';
import TextInput from './TextInput';
import Button from './Button';


function LoginForm(props) {
  return (
    <form>
      <h1>SIGN IN TO YOUR ACCOUNT</h1>
      <TextInput label="Username" type="text" name="username" id="username" />
      <TextInput label="Password" type="password" name="password" id="password" />
      <Button value="SIGN IN" />
    </form>
  );
}

function CreateAccountForm(props) {
  return (
    <form>
      <h1>CREATE AN ACCOUNT</h1>
      <TextInput label="First Name" type="text" name="fName" id="fName" />
      <TextInput label="Last Name" type="text" name="lName" id="lName" />
      <TextInput label="Username" type="text" name="username" id="username" />
      <TextInput label="Email" type="text" name="email" id="email" />
      <TextInput label="Password" type="password" name="password" id="password" />
      <TextInput label="Confirm Password" type="password" name="cfmPassword" id="cfmPassword" />
      <Button value="Create Account" />
    </form>
  );
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      buttonText: "Create an Account"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    

    if (this.state.login) {
      this.setState({
        login: false,
        buttonText: "Login Here"
      });
    }
    else {
      this.setState({
        login: true,
        buttonText: "Create an Account"
      });
    }

  }

  render() {

    let form;
    if (this.state.login) {
      form = <LoginForm />
    }
    else {
      form = <CreateAccountForm />
    }
    

    return (
      <>
        <div className="Login__">
          <Logo className="Login__Logo" color="light" />
            <div className="Login__container">
              {form}
              <a href="#" onClick={this.handleClick}>{this.state.buttonText}</a>
            </div>
        </div>
      </>
    );
  }
}

export default Login;