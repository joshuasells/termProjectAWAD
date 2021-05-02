import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Login.css';
import Logo from './Logo';
import TextInput from './TextInput';
import Button from './Button';
import axios from 'axios';

const LoginForm = (props) => {
  return ( 
    <>
      <form onChange={props.onChange} onSubmit={props.onSubmit}>
        <h1>SIGN IN TO YOUR ACCOUNT</h1>
        <TextInput label="Username" type="text" name="lgUsername" value={props.stateInfo.lgUsername} id="lgUsername" />
        <TextInput label="Password" type="password" name="lgPassword" value={props.stateInfo.lgPassword} id="lgPassword" />
        <Button value="SIGN IN" />
      </form>
      <Link to="/createaccount">Create an Account Here</Link>
    </>
  );
};

const CreateAccountForm = (props) => {
  return (
    <>
      <form onChange={props.onChange} onSubmit={props.onSubmit}>
        <h1>CREATE AN ACCOUNT</h1>
        <TextInput label="First Name" type="text" name="firstName" value={props.stateInfo.firstName} id="firstName" />
        <TextInput label="Last Name" type="text" name="lastName" value={props.stateInfo.lastName} id="lastName" />
        <TextInput label="Username" type="text" name="username" value={props.stateInfo.username} id="username" />
        <TextInput label="Email" type="text" name="email" value={props.stateInfo.email} id="email" />
        <TextInput label="Password" type="password" name="password" value={props.stateInfo.password} id="password" />
        <TextInput label="Confirm Password" type="password" name="cfmPassword" value={props.stateInfo.cfmPassword} id="cfmPassword" />
        <Button value="Create Account" />
      </form>
      <Link to="/signin">Login Here</Link>
    </>
  );
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      cfmPassword: "",
      lgUsername: "",
      lgPassword: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.onCreateAccountSubmit = this.onCreateAccountSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onLoginSubmit(event) {
    event.preventDefault();
    console.log("This is where we will handle the logic to log in a user.");
  }

  onCreateAccountSubmit(event) {
    event.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:4000/app/createaccount', newUser)
      .then(response => { console.log(response.data) })
      .catch(error => { console.log(error); });

    window.location = '/welcome';
  }

  render() { 
    
    let form;
    if (this.props.login) {
      form = <LoginForm 
        onChange={this.handleChange} 
        onSubmit={this.onLoginSubmit} 
        stateInfo={this.state}
      />
    }
    else {
      form = <CreateAccountForm 
        onChange={this.handleChange} 
        onSubmit={this.onCreateAccountSubmit}
        stateInfo={this.state}
      />
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