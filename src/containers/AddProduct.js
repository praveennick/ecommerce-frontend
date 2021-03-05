import React,{useState} from 'react';
import { bindActionCreators } from 'redux';
import './AddProduct.css';
import {addNewProduct} from '../actions/productsActions'
import { connect } from 'react-redux';

function AddProduct(props) {

    const [product, setproduct] = useState(
        {
            pid:'',
            product_name:'',
            price:'',
            product_image:'',
            offers:[],
            product_specifications:[],
            category:'',
            sub_category:'',
            seller:'',
            reviews:[]
        }
    )

    const inputChanged=(event) =>{
        var name = event.target.name;
        var value = event.target.value;
        if(name=='pid'&& name=='price'){
            value= parseInt(value);
        }
        setproduct(product => ({
            ...product,
            [name] : value
        }))
    }
    const addproducts=(event)=>{
        event.preventDefault();
        console.log("addProducts state",product);
        props.addNewProduct(product);
        // console.log("addProduct props",props.addNewProduct);
        if(props.isProductAdded){
            alert("product added")
          }
          else
          {
              alert("some issue, try again later");
          }
    }
    return (
        <form className="form-div">
                <div className="form-group row div-container">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Enter Product ID :</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control input" name="pid" onChange={inputChanged} placeholder="Product ID" />
                    </div>
                </div>
                <div className="form-group row div-container">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Enter Product Name :</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control input" name="product_name" onChange={inputChanged} placeholder="Product Name" />
                    </div>
                </div>
                <div className="form-group row div-container">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Enter Price :</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control input" name="price" onChange={inputChanged} placeholder="Price" />
                    </div>
                </div>
                <div className="form-group row div-container">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Enter Product Image URL :</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control input" name="product_image" onChange={inputChanged} placeholder="Image URL" />
                    </div>
                </div>
                <div className="form-group row div-container">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Enter Offers :</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control input" name="offers" onChange={inputChanged} placeholder="Offers" />
                    </div>
                </div>
                <div className="form-group row div-container">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Enter Specifications :</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control input" name="product_specifications" onChange={inputChanged} placeholder="Specifications" />
                    </div>
                </div>
                <div className="form-group row div-container">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Enter Category :</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control input" name="category" onChange={inputChanged} placeholder="Category" />
                    </div>
                </div>
                <div className="form-group row div-container">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Enter Sub Category :</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control input" name="sub_category" onChange={inputChanged} placeholder="Sub Category" />
                    </div>
                </div>
                <div className="form-group row div-container">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Enter Seller Name :</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control input" name="seller" onChange={inputChanged} placeholder="Seller Name" />
                    </div>
                </div>
                {/* <div className="form-group row div-container">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Enter Reviews :</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control input" name="reviews" onChange={inputChanged} placeholder="Reviews" />
                    </div>
                </div> */}
                <div className="form-group row div-container">
                    <div className="col-sm-10 offset-sm-2">
                    <button type="submit" onClick={addproducts} className="btn btn-primary">Add Product</button>
                    </div>
                </div>
            </form>

    )
}

function mapStateToProps(appState){
    return{
        isProductAdded:appState.isProductAdded
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            addNewProduct:addNewProduct
        },dispatch
    )
}

export default connect(mapStateToProps,mapDispatchToProps) (AddProduct)
