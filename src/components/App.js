import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './micro-components/Navbar';
import Login from './micro-components/Login';
import Header from './micro-components/Header';
import Footer from './micro-components/Footer';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/signin" component={Login} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
