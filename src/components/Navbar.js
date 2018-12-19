import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../images/pxg-logo.svg';

const Brand = styled.a`
	padding-top: 5px;
	margin-left: 35px;
	margin-right: 35px;
	display: none;
`;

const NavContainer = styled.nav`
	display: flex;
	justify-content: center;
`;

const Nav = styled.ul`
	display: flex;
	padding: 0;
`;

const NavItem = styled.li`
	list-style: none;
`;

const NavLink = styled.a`
	padding: 1rem 0;
	margin-left: 35px;
	margin-right: 35px;
	color: #4A4A4A;
    text-decoration: none;
    text-transform: uppercase;
	font-family: Poppins;
	font-weight: 600;
	font-size: 12px;
	transition: all .35s ease;
	
	.nav-item:hover & {
		color: #797979;
	}
	
	.active-nav-item & {
		color: #FF9532;
	}
`;

class Navbar extends Component {

  render() {
    return (
	<NavContainer className="container">
	  <Brand href="#"><img src={logo} className="brand-logo" /></Brand>
      <Nav className="nav">
		<NavItem className="nav-item"><NavLink className="nav-link" href="#">Games</NavLink></NavItem>
		<NavItem className="nav-item active-nav-item"><NavLink className="nav-link" href="#">About Us</NavLink></NavItem>
		<NavItem className="nav-item"><NavLink className="nav-link" href="#">Team</NavLink></NavItem>
		<NavItem className="nav-item"><NavLink className="nav-link" href="#">Partner</NavLink></NavItem>
		<NavItem className="nav-item"><NavLink className="nav-link" href="#"><img src={logo} className="brand-logo" /></NavLink></NavItem>
		<NavItem className="nav-item"><NavLink className="nav-link" href="#">Career</NavLink></NavItem>
		<NavItem className="nav-item"><NavLink className="nav-link" href="#">News</NavLink></NavItem>
		<NavItem className="nav-item"><NavLink className="nav-link" href="#">Events</NavLink></NavItem>
		<NavItem className="nav-item"><NavLink className="nav-link" href="#">Contact</NavLink></NavItem>
	  </Nav>
	</NavContainer>
    );
  }
}

export default Navbar;
