export default function(state=null,action){
    switch(action.type){
        case "ALL_PRODUCTS":
            return action.payload.data;

        case "ADD_PRODUCT":
            console.log('add products reducer',action.payload.data);
            if(action.payload.data.status){
                return true;
            }
            else
            {
                return false;
            };

        case "VIEW_PRODUCT":
            console.log('view products reducer',action.payload.data);
            return action.payload.data;

        case "DELETE_PRODUCT":
            console.log("delete product reducer",action.payload.data);
            return action.payload.data;

        default :
            console.log("im products default");
            return []
    }
}