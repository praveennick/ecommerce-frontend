import React from 'react';
import { connect } from 'react-redux';
import './ViewProduct.css'
import {viewProductById} from '../actions/productsActions';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class ViewProduct extends React.Component{
    componentDidMount(){
        // console.log("this is props",this.props.isProductIdPassed)
        var productId=localStorage.getItem("pid");
        console.log("here is ths pid",productId)
       this.props.viewProductById(productId)
    }
    render() {
        return (
             <div className="w-75 p-3 container shadow">
               {/*Section: Block Content*/}
<section className="inbox">
<NavLink to="/" className="previous">&laquo; Previous</NavLink>
  <div className="row">
    <div className="col-md-6 mb-4 mb-md-0">
      
      <div id="mdb-lightbox-ui" />
      <div className="mdb-lightbox">
        <div className="row product-gallery mx-1">
          <div className="col-12 mb-0">
            <figure className="view overlay rounded z-depth-1 main-img">
              <a href="" data-size="710x823">
                <img src={this.props.isProductIdPassed.product_image} className="img-fluid z-depth-1" />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <h5>{this.props.isProductIdPassed.product_name}</h5>
      <p className="text-muted text-uppercase small">{this.props.isProductIdPassed.sub_category}</p>
      <p><span className="mr-1"><strong>₹{this.props.isProductIdPassed.price}</strong></span></p>
      <p className="pt-1">{this.props.isProductIdPassed.product_specifications}</p>
      <hr />
      
        
         
     <div className="input-group">
  <input type="button" defaultValue="-" className="button-minus" data-field="quantity" />
  <input type="number" step={1} max defaultValue={1} name="quantity" className="quantity-field" />
  <input type="button" defaultValue="+" className="button-plus" data-field="quantity" />
</div>




       
      </div>
      {/* <FontAwesomeIcon icon={faCoffee}/> */}
      <button type="button" className="btn btn-primary btn-md mr-1 mb-2">Buy now</button>
      <button type="button" className="btn btn-light btn-md mr-1 mb-2"><i className="fas fa-shopping-cart pr-2" />Add to cart</button>
    </div>

</section>
{/*Section: Block Content*/}

             </div>
        );
    }
}

function mapStateToProps(appState){
    return{
        isProductIdPassed:appState.productId
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      viewProductById:viewProductById
    },dispatch
  )
}

export default connect(mapStateToProps,mapDispatchToProps) (ViewProduct);