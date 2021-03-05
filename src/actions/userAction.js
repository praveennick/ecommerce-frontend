import axios from "axios";

export function registerNewUser(user) {
  alert("Im in register action");
  console.log("user", user);
  var promise = axios.post("http://localhost:9478/user/register", user);
  console.log("register-promise",promise)
  return {
    type: "REGISTER",
    payload: promise,
  };
}

export function loginUser(user){
  console.log("user",user)
  alert("this is login action");
  var promise= axios.post("http://localhost:9478/user/login",user);
  console.log("login-promise",promise)
  return{
    type:"LOGIN",
    payload:promise
  }
}