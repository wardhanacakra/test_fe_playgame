import React, { Component } from 'react';
import logo from '../images/pxg-logo.svg';
import {Nav, NavItem, NavLink, } from './Elements.js';

class Navigation extends Component {

  render() {
    return (
      <Nav className="nav">
		<NavItem className="nav-item"><NavLink className="nav-link" href="#">Games</NavLink></NavItem>
		<NavItem className="nav-item active-nav-item"><NavLink className="nav-link" href="#">About Us</NavLink></NavItem>
		<NavItem className="nav-item"><NavLink className="nav-link" href="#">Team</NavLink></NavItem>
		<NavItem className="nav-item"><NavLink className="nav-link" href="#">Partner</NavLink></NavItem>
		<NavItem className="nav-item brand"><NavLink className="nav-link" href="#"><img src={logo} className="brand-logo" alt="logo" /></NavLink></NavItem>
		<NavItem className="nav-item"><NavLink className="nav-link" href="#">Career</NavLink></NavItem>
		<NavItem className="nav-item"><NavLink className="nav-link" href="#">News</NavLink></NavItem>
		<NavItem className="nav-item"><NavLink className="nav-link" href="#">Events</NavLink></NavItem>
		<NavItem className="nav-item"><NavLink className="nav-link" href="#">Contact</NavLink></NavItem>
	  </Nav>
    );
  }
}

export default Navigation;
