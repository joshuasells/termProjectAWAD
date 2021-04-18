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
            <Route exact path="/signin" render={(props) => {
              return (
                <Login login={true} />
              )
            }} />
            <Route exact path="/createaccount" render={(props) => {
              return (
                <Login login={false} />
              )
            }} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
