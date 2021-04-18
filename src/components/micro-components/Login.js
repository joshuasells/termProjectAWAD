import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/createaccount">Create an Account Here</Link>
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
      <Link to="/signin">Login Here</Link>
    </>
  );
};

const Login = (props) => {
  
  let form;
  if (props.login) {
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
        </div>
      </div>
    </>
  );
};

export default Login;