import logo from './logo.svg';
import './App.css';
import Register from './containers/Register';
import React from 'react'
import Products from './containers/Products';
import Login from './containers/Login';
import Header from './containers/Header';
import {HashRouter, Route} from 'react-router-dom'
import ProductList from './containers/ProductList';
import Dashboard from './containers/Dashboard';
import AddProduct from './containers/AddProduct';
import ViewProduct from './containers/ViewProduct';

function App() {
  return (
     <div className="App">
      <React.Fragment>
        <HashRouter>
            <Header/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} style={{float:"right"}}/>
            <Route path="/products" component={Products}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/addProduct" component={AddProduct}/>
            <Route path="/viewProduct" component={ViewProduct}/>
            <ProductList/>
        </HashRouter>
         
       
        {/* <Register/> */}
        {/* <Login/> */}
        {/* <Products/> */}
      </React.Fragment>
     </div>
  );
}

export default App;
