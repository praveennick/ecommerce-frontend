import React from 'react';
import { connect } from 'react-redux';
import {viewProductById} from '../actions/productsActions'

class ViewProduct extends React.Component{
    componentDidMount(){
        console.log("props",this.props.isProductIdPassed)
    }
    render() {
        return (
             <div>
                 <h1>this is view product</h1>
                 
             </div>
        );
    }
}

function mapStateToProps(appState){
    return{
        isProductIdPassed:appState.product
    }
}

export default connect(mapStateToProps,null) (ViewProduct);