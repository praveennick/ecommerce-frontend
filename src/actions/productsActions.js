import axios from "axios";

var URL="https://ecommerce-backendapp.herokuapp.com/"


export function getAllProducts(){
    var promise= axios.get(`${URL}admin/allProducts`);
    console.log("promise",promise)
    return{
        type:"ALL_PRODUCTS",
        payload:promise
    }
}

export function addNewProduct(product){
    console.log("this is add product action");
    console.log("product action",product);
    var promise= axios.post(`${URL}admin/addProduct`,product);
    console.log("promise",promise)
    return{
        type:"ADD_PRODUCT",
        payload:promise
    }
}

// export function storeId(pid){
//     console.log("this is storeId",pid);
//     return{
//         type:"STORE_ID",
//         payload:pid
//     }
// }

export function viewProductById(pid){
    console.log("this is view product action",pid);
    var promise= axios.get(`${URL}admin/getProductById/`+pid);
    console.log("promise",promise)
    return{
        type:"VIEW_PRODUCT",
        payload:promise
    }
}

export function deleteProduct(pid){
    console.log("This is delete product",pid);
    var promise= axios.delete(`${URL}admin/deleteProduct/`+pid);
    console.log("promise",promise)
    return{
        type:"DELETE_PRODUCT",
        payload:promise
    }
}