import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./Register.css";
import {registerNewUser} from "../actions/userAction";
import { NavLink } from "react-router-dom";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username:"",
      email:"",
      password:""
    };
    this.inputChanged = this.inputChanged.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  inputChanged(event) {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value,
    });
  }
  registerUser(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.registerNewUser(this.state);
    console.log("props", this.props.registerNewUser);
  }
  toggleFunc() {}
  render() {
    console.log("in register","userLogged:"+this.props.isUserLoggedIn)
    if(this.props.isUserLoggedIn){
      this.props.history.push('/dashboard')
    }
    return (
      <div className="my-login-page">
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper shadow">
                <div className="card fat">
                  <div className="card-body">
                    <h4 className="card-title">Register</h4>
                    <form className="my-login-validation">
                      <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input
                          id="name"
                          type="text"
                          className="form-control"
                          name="username"
                          onChange={this.inputChanged}
                          required
                          autoFocus
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">E-Mail</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={this.inputChanged}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Mobile</label>
                        <input
                          id="mobile"
                          type="text"
                          className="form-control"
                          name="mobile"
                          onChange={this.inputChanged}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          onChange={this.inputChanged}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <div className="custom-checkbox custom-control">
                          <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            className="custom-control-input"
                            
                            required=""
                          />
                          <label htmlFor="agree" className="custom-control-label">
                            I agree to the <a href="#">Terms and Conditions</a>
                          </label>
                        </div>
                      </div>

                      <div className="form-group m-0">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          onClick={this.registerUser}
                          disabled={!(this.state.username && this.state.email && this.state.password)}
                        >
                          Register
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        Already have an account?{" "}
                        <NavLink to="/login">Login</NavLink>
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
  console.log("appState",appState)
  return{
    isUserLoggedIn:appState.isUserLoggedIn
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      registerNewUser: registerNewUser,
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
