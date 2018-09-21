import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap'

import './Header.css';
export default class Header extends Component {
  render() {
    return (
      <div className="header" >
        <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Link to='/'>
              <Navbar.Brand>
                  <a href="#brand">React-Bookstore</a>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle />
          </ Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1}>
                Login
              </NavItem>
              <NavItem eventKey={2}>
                Categories
              </NavItem>

              <NavItem eventKey={3}>
                <Link to='/cart'>
                  Cart <Glyphicon glyph="shopping-cart" />
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
      </div>
    )
  }
}
