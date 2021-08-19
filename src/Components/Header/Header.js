import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <Fragment>
    <NavLink className='nav-link' to="/change-password">Change Password</NavLink>
    <NavLink className='nav-link' to="/sign-out">Sign Out</NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink className='nav-link' to="/sign-up">Sign Up</NavLink>
    <NavLink className='nav-link' to="/sign-in">Sign In</NavLink>
  </Fragment>
)

const alwaysOptions = (
	<Fragment>
		<NavLink className='nav-link' to='/'>Home</NavLink>
		<NavLink className='nav-link' to='/all-gardens'>
			Gardens
		</NavLink>
	</Fragment>
)

const Header = ({ user }) => (

  <Navbar className="d-flex align-items-center justify-content-between">
    <Navbar.Brand href="#" >
    NYC <span className="navbar-brand-logo">Gardens</span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
      <div className="navbar-text"><a href="#sign-in" className="search-btn"><i className="icon-search-1"></i></a></div>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
