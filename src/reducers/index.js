import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productsReducer';

const rootReducer = combineReducers({
    isUserLoggedIn:userReducer,
    products:productReducer,
    isProductAdded:productReducer,
    product:productReducer
});

export default rootReducer;
