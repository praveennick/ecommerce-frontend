import React from 'react';
import { NavLink,Route} from 'react-router-dom';
import './header.css'
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Product from './Product';
import ViewProduct from './ViewProduct';
import { bindActionCreators } from 'redux';
import {logoutUser,displayUser} from '../actions/userAction';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';


class Header extends React.Component{
  constructor(){
    super();
    this.state={
      
    }
    this.logout=this.logout.bind(this)
  }
  logout(event){
    event.preventDefault();
    this.props.logoutUser();
    sessionStorage.removeItem("id");
  }

  componentDidMount(){
    // console.log("this is props",this.props.isProductIdPassed)
    var productId=sessionStorage.getItem("id");
    console.log("here is ths pid",productId)
    if(this.props.isUserLoggedIn){
      this.props.displayUser(productId)
    }
   else{
     console.log("please login")
   }
}
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
        {this.props.isUserLoggedIn?null:<li><NavLink to="/login" style={{textDecoration:"none",color:"white"}}>Login</NavLink></li>}
        {console.log("is userLogedin in home:",this.props.isUserLoggedIn)}
        </ul>
      </nav>
      <Route path="/" exact component={Home}></Route>
      <Route path="/register" exact component={Register}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/product" component={Product}></Route>
      <Route path="/viewProduct" component={ViewProduct}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      </React.Fragment>
        )
    }
}
function mapStateToProps(appState){
  return{
    isUserLoggedIn:appState.isUserLoggedIn
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      logoutUser:logoutUser,
      displayUser:displayUser
    },dispatch
  )
}

export default connect(mapStateToProps,mapDispatchToProps) (Header);