import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productsReducer';

const rootReducer = combineReducers({
    isUserLoggedIn:userReducer,
    allProducts:productReducer,
    isProductAdded:productReducer,
    productId:productReducer
});

export default rootReducer;
