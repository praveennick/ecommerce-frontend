export default function(state=null,action){
    switch(action.type){
        case 'REGISTER':
            console.log('action.payload.data.token',action.payload.data.token);
            if(action.payload.data.token != null){
                localStorage.setItem('token', action.payload.data.token);
                console.log("reducer printed");
                return true;
            }
        case "LOGIN":
            console.log("hello this is login",action);
            if (action.payload.data.result) {
                return true;
            }else{
                alert("Incorrect password");    
                // localStorage.setItem("message",action.payload.data.message)
                return false;
            }

        case "DISPLAY_USER":
            console.log("display ac data",action.payload.data)
            return action.payload.data; 
    
        case "LOGOUT":
            console.log("User Logged Out!");
            return false;
        default:
            console.log("Im in default");
            return false;
    }
}