// Essential imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// statemanagement imports
import { connect } from 'react-redux'
import * as actions from './state/actions'

// component/view imports
import Header from './components/Header';
import Home from './views/Home';
import CartMain from './user/transactions/cart/CartMain';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Router>
            <div>
              <Header />         
              <Route exact path='/' component={Home} />
              <Route path='/cart' component={CartMain} />
            </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
