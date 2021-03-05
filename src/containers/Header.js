import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'

class Header extends React.Component{
    render() {
        return (
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        {/* Brand/logo */}
        <NavLink className="navbar-brand" to="/products">Ecommerce</NavLink>
        {/* Links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="#">Link 1</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">Register</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
        )
    }
}

export default Header;