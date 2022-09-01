const initialstate = {
    loading:false ,
    users : [] ,
    error :""
}
const userReducer = (state = initialstate , action) =>{
    switch(action.type) {
        case "FETCH_USER-REQUEST" :
            return {
                ...state ,
                loading : true 
            }
        case "FETCH_USERS_SUCCESS":
            return {
                loading:false ,
                users : action.payload
            }
        case "FETCH_USER_FAILURE" : 
           return{
              loading:false , 
              users :[],
              error:action.payload
           }
        default:
            return state   
    }
}
export default userReducer;