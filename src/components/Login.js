import React , {useState , useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/users/usersAction';
import { useNavigate} from "react-router-dom";
import styles from "./Login.module.css"
const Login = () => {
    const navigate=useNavigate();
    const dispatch= useDispatch();
    const userData=useSelector(state => state.userState);
    useEffect(()=>{
        dispatch(fetchUsers());
    },[])
     const [data , setData] = useState ({
        user : "" ,
        password:""
    });
    
    const changeHandler= event =>{
        setData ({ ...data , [event.target.name]:event.target.value })
    };
   const clickHandeler=()=>{
   const user=userData.users.find (element=> element.username === data.user && element.name === data.password); 
    navigate("/post/"+user.id)
  
   }
    return (
        <div className={styles.container}>
            <form onSubmit={event=>event.preventDefault()}>
            <p>Login</p>
            <label>userName:</label>
            <input type="text" name="user" value={data.user} onChange={changeHandler} />
            <br/>
            <label>password:</label>
            <input type="password" name="password" value={data.password} onChange={changeHandler}/>
            <br/>
            
            <button onClick={clickHandeler}> Login </button> 
            </form>
           </div>
    );
};

export default Login;