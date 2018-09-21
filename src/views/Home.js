import React, { Component } from 'react'

import Main from './../components/product-view/Main';
import './Home.css';

export default class Home extends Component {
  constructor(props) {
   super(props) 
   
   this.state = {
     data: ''
   }
  }

  render() {
    return (
      <div className="Home--body">
        <Main />
      </div>
    )
  }
}
