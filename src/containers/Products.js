import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import {getAllProducts} from '../actions/productsActions';
import ProductList from "./ProductList";
import './Products.css';
import {viewProductById} from '../actions/productsActions'

class Products extends React.Component {
  constructor(){
    super();
    this.state={
    }
    this.renderList=this.renderList.bind(this);
  }

  componentDidMount(){
    this.props.getAllProducts()
  }
  renderList(){
    // var listitems=this.props.products.map(
    //   (product)=>{
    //     return (this.setState({productListItems:product}))
    //   })
    //   return listitems;
  }
  render() {
    return (
      <div>
          {console.log("object products",this.props.products)}
          {this.props.products.map(

            (product)=>{
                    return (

                      <div className="row">
  <div className="col-lg-8 mx-auto">
    {/* List group*/}
    <ul className="list-group shadow" >
      {/* list group item*/}
      <li className="list-group-item" key={product.pid} >
        {/* Custom content*/}
        <div className="media align-items-lg-center flex-column flex-lg-row p-3">
          <div className="media-body order-2 order-lg-1">
            <h5 className="mt-0 font-weight-bold mb-2">{product.product_name}</h5>
            <p className="font-italic text-muted mb-0 small">{product.product_specifications}</p>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <h6 className="font-weight-bold my-2">₹{product.price}</h6>
              
            </div>
            <button type="button" className="btn btn-primary">add</button>
            <NavLink className="nav-link"
             onClick={
               (event)=>{
                 event.preventDefault();
                 console.log("object clicked");
                 this.props.viewProductById(product.pid);
                 this.props.history.push("/viewProduct")
                }
                }
                to="/viewProduct" type="button" className="btn btn-success" productId={product.pid}>view</NavLink>
            
          </div><img src={product.product_image} alt="Generic placeholder image" className="ml-lg-5 order-1 order-lg-2" />
        </div> {/* End */}
      </li> {/* End */}
    </ul>
  </div>
</div>

                    )

            }
          )}
        {console.log("products in",typeof (this.props.products))}
          {/* <h1>{this.props.products.length}</h1> */}
      </div>
    );
  }
}

function mapStateToProps(appState){
  console.log(appState);
 return {
   products: appState.products,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      getAllProducts:getAllProducts,
      viewProductById:viewProductById
    },dispatch
  )
}
export default connect(mapStateToProps,mapDispatchToProps) (Products);
