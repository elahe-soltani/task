import axios from "axios";

const fetchUserRequset =()=>{
    return{
        type:"FETCH_USER_REQUEST"
    }
}
const fetchUserSuccess = users =>{
    return {
        type :"FETCH_USERS_SUCCESS" ,
        payload : users
    }
}

const fetchUserFailure= error =>{
    return {
        type :"FETCH_USERS_FAILURE" ,
        payload : error
    }
}
export const fetchUsers = () =>{
    return (dispatch) =>{
        dispatch(fetchUserRequset());
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then (response =>{
            const users=response.data;
            dispatch(fetchUserSuccess(users))
        })
        .catch(error =>{
            const errorMsg=error.message
            dispatch(fetchUserFailure(errorMsg))
        })
    }
}