import React from 'react';
import Navbar from '../micro-components/Navbar';
import Login from '../micro-components/Login';
import TextInput from '../micro-components/TextInput';

function Master(props) {
  return (
    <React.Fragment>
      <Navbar />
      <Login />
      <TextInput htmlFor="Username" type="text" name="username" id="username" />
    </React.Fragment>
  )
}

export default Master;