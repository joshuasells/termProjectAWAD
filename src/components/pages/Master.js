import React from 'react';
import Navbar from '../micro-components/Navbar';
import Login from '../micro-components/Login';
import TextInput from '../micro-components/TextInput';
import Button from '../micro-components/Button';

function Master(props) {
  return (
    <>
      <Navbar />
      <Login />
    </>
  )
}

export default Master;