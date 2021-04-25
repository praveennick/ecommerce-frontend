import logo from './logo.svg';
import './App.css';
import Register from './containers/Register';
import React from 'react'
import Products from './containers/Products';
import Login from './containers/Login';
import Header from './containers/Header';
// import {HashRouter, Route} from 'react-router-dom';
import {BrowserRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import AddProduct from './containers/AddProduct';
import ViewProduct from './containers/ViewProduct';
import AdminProducts from './containers/AdminProducts';
import DeleteProduct from './containers/DeleteProduct';


function App() {
  return (
     <div className="App">
      <React.Fragment>
        <Router>
            <Header/>
            {/* <Route path="/login" component={Login} />
            <Route path="/register" component={Register} style={{float:"right"}}/>
            <Route path="/products" component={Products}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/addProduct" component={AddProduct}/>
            <Route path="/viewProduct" component={ViewProduct}/>
            <Route path="/admin-products" component={AdminProducts}/>
            <Route path="/deleteProduct" component={DeleteProduct}/> */}
        </Router>
         
       
        {/* <Register/> */}
        {/* <Login/> */}
        {/* <Products/> */}
      </React.Fragment>
     </div>
  );
}

export default App;
