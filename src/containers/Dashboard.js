import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Dashboard extends React.Component{
    
    render(){
        console.log("in dashboard",this.props.isUserLoggedIn)
        if(!this.props.isUserLoggedIn){
            alert("Please login");
            this.props.history.push('/login')
        }
        return(
            <div>
                <h1>this is Dashboard</h1>
                <NavLink className="nav-link " to="/addProduct">
                    <button type="button" className="btn btn-primary">add product</button>
                </NavLink>
            </div>
        )
    }
}
function mapStateToProps(appState){
    return{
        isUserLoggedIn:appState.isUserLoggedIn
    }
}

export default connect(mapStateToProps,null)(Dashboard);