import axios from "axios";

export function getAllProducts(){
    var promise= axios.get("http://localhost:9478/admin/allProducts");
    console.log("promise",promise)
    return{
        type:"PRODUCTS",
        payload:promise
    }
}

export function addNewProduct(product){
    console.log("this is add product action");
    console.log("product action",product);
    var promise= axios.post("http://localhost:9478/admin/addProduct",product);
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
    var promise= axios.get("http://localhost:9478/admin/getProductById/"+pid);
    console.log("promise",promise)
    return{
        type:"VIEW_PRODUCT",
        payload:promise
    }
}