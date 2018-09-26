import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap'
import './Header.css';

// state management
import { connect } from 'react-redux'

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Loading...';
      case false: 
        return 'Logged out';
      default: 
        return 'Logged in';
    }
  }
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
                <Link to='/auth/google'>
                    {
                      this.renderContent()
                    }
                </Link>
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);