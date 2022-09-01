const initialstate = {
    loading:false ,
    posts : [] ,
    error :""
}
const postsReducer = (state = initialstate , action) =>{
    switch(action.type) {
        case "FETCH_POST-REQUEST" :
            return {
                ...state ,
                loading : true 
            }
        case "FETCH_POST_SUCCESS":
            return {
                loading:false ,
                posts : action.payload
            }
        case "FETCH_POST_FAILURE" : 
           return{
              loading:false , 
              post :[],
              error:action.payload
           }
        default:
            return state   
    }
}
export default postsReducer;