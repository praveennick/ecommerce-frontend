import React from 'react';
import { NavLink,Route} from 'react-router-dom';
import './header.css'
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Product from './Product';
import ViewProduct from './ViewProduct';

class Header extends React.Component{
    render() {
        return (
          <React.Fragment>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        {/* Brand/logo */}
        <NavLink className="navbar-brand" to="/">Ecommerce</NavLink>
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
      <Route path="/" exact component={Home}></Route>
      <Route path="/register" exact component={Register}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/product" component={Product}></Route>
      <Route path="/viewProduct" component={ViewProduct}></Route>
      </React.Fragment>
        )
    }
}

export default Header;