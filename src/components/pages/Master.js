import React from 'react';
import Navbar from '../micro-components/Navbar';
import Login from '../micro-components/Login';

function Master(props) {
  return (
    <React.Fragment>
      <Navbar />
      <Login />
    </React.Fragment>
  )
}

export default Master;