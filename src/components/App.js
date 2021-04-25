import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './micro-components/Navbar';
import Login from './micro-components/Login';
import Header from './micro-components/Header';
import Footer from './micro-components/Footer';
import Shop from './micro-components/Shop';
import shopItems from '../data/shopItems.json';
import ProductDetails from './micro-components/ProductDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentWillMount() {
    this.setState({
      items: shopItems.shop,
    });
  }

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
            <Route exact path="/shop" render={(props) => {
              return (
                <Shop items={this.state.items} />
              )
            }} />
            <Route exact path="/shop/product/:id" render={(props) => {
              let productId = props.location.pathname.replace('/shop/product/', '');
              return (
                <ProductDetails item={this.state.items[productId]} />
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
