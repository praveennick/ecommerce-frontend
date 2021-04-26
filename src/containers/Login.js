import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {bindActionCreators} from 'redux';
import {loginUser} from '../actions/userAction';
class Login extends React.Component {
  constructor(){
    super();
    this.state={
        email:"",
        password:"",
        role:""
    }
    this.inputChanged = this.inputChanged.bind(this);
    this.login=this.login.bind(this);
  }
  inputChanged(event){
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]:value
    })
  }
  login(event){
    event.preventDefault();
    console.log("state",this.state);
    this.props.loginUser(this.state);
    sessionStorage.setItem("username",this.state.username)
    alert("login success");
  }
  render() {
    console.log("In login","userLogged:"+this.props.isUserLoggedIn)
    if(this.props.isUserLoggedIn){
      this.props.history.push('/');
    }
    return (
      <div className="my-login-page">
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper shadow">
                <div className="card fat">
                  <div className="card-body">
                    <h4 className="card-title">Login</h4>
                    <form className="my-login-validation" noValidate>
                    <div className="form-group">
                        <label>Select Role:</label>
                        <select className="form-control" name="role" onChange={this.inputChanged} required autoFocus>
                          <option>Click to Select</option>
                          <option value="ROLE_CUSTOMER">User</option>
                          <option value="ROLE_ADMIN">Admin</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Username</label>
                        <input id="email" type="username" onChange={this.inputChanged} className="form-control" name="username" required/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">
                          Password
                          <a href="forgot.html" className="float-right">
                            Forgot Password?
                          </a>
                        </label>
                        <input id="password" type="password" onChange={this.inputChanged} className="form-control" name="password" required/>
                      </div>
                     
                      <div className="form-group">
                        <div className="custom-checkbox custom-control">
                          <input type="checkbox" name="remember" id="remember" className="custom-control-input"/>
                          <label htmlFor="remember" className="custom-control-label">
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <div className="form-group m-0">
                        <button type="submit" onClick={this.login} disabled={!(this.state.role && this.state.username && this.state.password)} className="btn btn-primary btn-block">
                          Login
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        Don't have an account? {" "}
                        <NavLink className="" to="/register">
                          Create One
                        </NavLink>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
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
      loginUser:loginUser
    },dispatch
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
