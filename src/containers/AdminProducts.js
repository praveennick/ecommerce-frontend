import React from 'react';
import { NavLink } from 'react-router-dom';
import AddProduct from './AddProduct';

class AdminProducts extends React.Component{
    render() {
        return (
             <div>
                 <h1>this is admin products</h1>
                 <NavLink className="nav-link " to="/addProduct">
                    <button type="button" className="btn btn-primary">add product</button>
                </NavLink>
             </div>
        );
    }
}
export default AdminProducts;