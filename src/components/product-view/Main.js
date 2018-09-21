import React, { Component } from 'react';
import './Main.css';

import { Jumbotron } from 'react-bootstrap';
import Products from './Products';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <Jumbotron bsClass='bg'>
        <Products />
      </Jumbotron>
    )
  }
}
