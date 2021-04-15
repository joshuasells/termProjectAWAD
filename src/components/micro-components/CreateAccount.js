import React from 'react';
import '../../stylesheets/CreateAccount.css';
import Logo from './Logo';
import TextInput from './TextInput';
import Button from './Button';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ye: 'ye'
    };
  }

  render() {
    return (
      <>
        <div className="CreateAccount__">
          <Logo className="Logo" color="light" />
          <div className="container">
            <form>
              <h1>CREATE AN ACCOUNT</h1>
              <TextInput label="First Name" type="text" name="fName" id="fName" />
              <TextInput label="Last Name" type="text" name="lName" id="lName" />
              <TextInput label="Username" type="text" name="username" id="username" />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default CreateAccount;