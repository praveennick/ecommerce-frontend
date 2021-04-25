import axios from "axios";

var URL="https://ecommerce-backendapp.herokuapp.com/"

export function registerNewUser(user) {
  alert("Im in register action");
  console.log("user", user);
  var promise = axios.post(`${URL}user/register`, user);
  console.log("register-promise",promise)
  return {
    type: "REGISTER",
    payload: promise,
  };
}

export function loginUser(user){
  console.log("user",user)
  alert("this is login action");
  var promise= axios.post(`${URL}user/login`,user);
  console.log("login-promise",promise)
  return{
    type:"LOGIN",
    payload:promise
  }
}