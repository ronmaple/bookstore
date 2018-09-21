// Essential imports
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// component/view imports
import Header from './components/Header';
import Home from './views/Home';
import CartMain from './user/transactions/cart/CartMain';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cart' component={CartMain} />
        </Switch>
        {/* <Home /> */}
      </div>
    );
  }
}

export default App;
