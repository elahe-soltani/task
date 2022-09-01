import axios from "axios";

const fetchPostRequset =()=>{
    return{
        type:"FETCH_POST_REQUEST"
    }
}
const fetchPostSuccess = posts =>{
    return {
        type :"FETCH_POST_SUCCESS" ,
        payload : posts
    }
}

const fetchPostFailure= error =>{
    return {
        type :"FETCH_POST_FAILURE" ,
        payload : error
    }
}
export const fetchPost = () =>{
    return (dispatch) =>{
        dispatch(fetchPostRequset());
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then (response =>{
            const posts=response.data;
            dispatch(fetchPostSuccess(posts))
        })
        .catch(error =>{
            const errorMsg=error.message
            dispatch(fetchPostFailure(errorMsg))
        })
    }
}