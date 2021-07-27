import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="/change-password">Change Password</Nav.Link>
    <Nav.Link href="/sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="/sign-up">Sign Up</Nav.Link>
    <Nav.Link href="/sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/all-gardens">Gardens</Nav.Link>
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
