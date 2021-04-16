import React from 'react';
import Navbar from '../micro-components/Navbar';
import Login from '../micro-components/Login';
import TextInput from '../micro-components/TextInput';
import Button from '../micro-components/Button';
import Header from '../micro-components/Header';
import Footer from '../micro-components/Footer';

function Master(props) {
  return (
    <>
      <Navbar />
      <Header />
      <Login />
      <Footer />
    </>
  )
}

export default Master;