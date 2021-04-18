import React from 'react';
import '../../stylesheets/Login.css';
import Logo from './Logo';
import TextInput from './TextInput';
import Button from './Button';

const LoginForm = (props) => {
  return ( 
    <>
      <form>
        <h1>SIGN IN TO YOUR ACCOUNT</h1>
        <TextInput label="Username" type="text" name="username" id="username" />
        <TextInput label="Password" type="password" name="password" id="password" />
        <Button value="SIGN IN" />
      </form>
      <button onClick={props.handleClick}>Create an Account</button>
    </>
  );
};

const CreateAccountForm = (props) => {
  return (
    <>
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
      <button onClick={props.handleClick}>Login Here</button>
    </>
  );
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ login: !this.state.login });
  }

  render() {

    let form;
    if (this.state.login) {
      form = <LoginForm handleClick={this.handleClick}/>
    }
    else {
      form = <CreateAccountForm  handleClick={this.handleClick}/>
    }
    

    return (
      <>
        <div className="Login__">
          <Logo className="Login__Logo" color="light" />
          <div className="Login__container">
            {form}
          </div>
        </div>
      </>
    );
  }
}

export default Login;