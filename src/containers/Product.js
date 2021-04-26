import React from 'react';
import './Products.css';

class Product extends React.Component{

    specificProduct= (event) => {
        event.preventDefault();
                 console.log("object clicked");
                //  this.props.viewProductById(product.pid);
                localStorage.setItem("pid",this.props.product.pid)
                 this.props.history.push("/viewProduct")
     }

    render() {
        let product=this.props.product;
        return (
             <div>
                 {/* {console.log("Product props---",this.props.product)} */}
                 <div className="row" key={product.pid}>
  <div className="col-lg-8 mx-auto">
    {/* List group*/}
    <ul className="list-group shadow">
      {/* list group item*/}
      <li className="list-group-item">
        {/* Custom content*/}
        <div className="media align-items-lg-center flex-column flex-lg-row p-3">
          <div className="media-body order-2 order-lg-1">
            <h5 className="mt-0 font-weight-bold mb-2">{product.product_name}</h5>
            <h6 className="d-inline text-secondary small">{product.category} {">"} </h6><h6 className="small d-inline text-secondary">{product.sub_category}</h6>
            <p className="font-italic text-muted mb-0 small">{product.product_specifications}</p>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <h6 className="font-weight-bold my-2">₹{product.price}</h6>
              
            </div>
            <button type="button" className="btn btn-primary">add</button>
            <button onClick={this.specificProduct} className="btn btn-success" >view</button>
            
          {/* <button type="button" className="btn btn-danger">delete</button> */}

          </div><img src={product.product_image} alt="Generic placeholder image" className="ml-lg-5 order-1 order-lg-2" />
        </div> {/* End */}
      </li> {/* End */}
    </ul>
  </div>
</div>
             </div>
        );
    }
}

export default Product;