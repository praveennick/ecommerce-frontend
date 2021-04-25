import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllProducts ,deleteProduct} from "../actions/productsActions";

class DeleteProduct extends React.Component {
  componentDidMount() {
    this.props.getAllProducts();
  }
  render() {
    return (
      <div>
        {/* {console.log("delete action props",)} */}
        {console.log("delete props state", this.props.allProducts)}
        {this.props.allProducts.map((product) => {
          return (
            <div className="row" key={product.pid}>
              <div className="col-lg-8 mx-auto">
                {/* List group*/}
                <ul className="list-group shadow">
                  {/* list group item*/}
                  <li className="list-group-item">
                    {/* Custom content*/}
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                      <div className="media-body order-2 order-lg-1">
                        <h5 className="mt-0 font-weight-bold mb-2">
                          {product.product_name}
                        </h5>
                        <h6 className="d-inline text-secondary small">
                          {product.category} {">"}{" "}
                        </h6>
                        <h6 className="small d-inline text-secondary">
                          {product.sub_category}
                        </h6>
                        <p className="font-italic text-muted mb-0 small">
                          {product.product_specifications}
                        </p>
                        <div className="d-flex align-items-center justify-content-between mt-1">
                          <h6 className="font-weight-bold my-2">
                            ₹{product.price}
                          </h6>
                        </div>
                        <button type="button" className="btn btn-danger"
                          onClick={
                            (event)=>{
                              event.preventDefault();
                              console.log("Clicked");
                              this.props.deleteProduct(product.pid);
                              alert("Product "+product.product_name+" deleted successfully!")
                              // this.props.history.push("/dashboard")
                            }
                          }
                        >
                          delete
                        </button>
                        {/* <NavLink
                          className="nav-link"
                          onClick={(event) => {
                            event.preventDefault();
                            console.log("object clicked");
                            this.props.viewProductById(product.pid);
                            this.props.history.push("/viewProduct");
                          }}
                          to="/viewProduct"
                          type="button"
                          className="btn btn-success"
                        >
                          view
                        </NavLink> */}

                        {/* <button type="button" className="btn btn-danger">delete</button> */}
                      </div>
                      <img
                        src={product.product_image}
                        alt="Generic placeholder image"
                        className="ml-lg-5 order-1 order-lg-2"
                      />
                    </div>{" "}
                    {/* End */}
                  </li>{" "}
                  {/* End */}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getAllProducts: getAllProducts,
      deleteProduct:deleteProduct
    },
    dispatch
  );
}

function mapStateToProps(appState) {
  return {
    allProducts: appState.allProducts,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProduct);
