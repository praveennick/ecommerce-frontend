import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getAllProducts} from '../actions/productsActions';
import Product from './Product';

class Home extends React.Component{

    componentDidMount(){
        this.props.getAllProducts();
        console.log("didmount props",this.props.getAllProducts())
    }
    
    renderList=()=>{
        if(this.props.allProducts.length>0){
            let allProducts=this.props.allProducts.map(
                (item)=>{
                    return <Product history={this.props.history} key={item.pid} product={item}/>
                }
            )
            return allProducts;
        }
    }

    render() {
        return (
             <div>
                 {/* <h1>Hello this is home</h1> */}
                 {/* {console.log("home props",this.props.allProducts)} */}
                 {this.renderList()}
             </div>
        );
    }
}

function mapStateToProps(appState){
    return{
        allProducts:appState.allProducts
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            getAllProducts:getAllProducts
        },dispatch
    )
}

export default connect(mapStateToProps,mapDispatchToProps) (Home);