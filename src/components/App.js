import React, {Component} from 'react';
import Navbar from './micro-components/Navbar';
import Login from './micro-components/Login';
import Header from './micro-components/Header';
import Footer from './micro-components/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
