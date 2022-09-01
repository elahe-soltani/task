import React,{useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { fetchUsers } from '../redux/users/usersAction';
import styles from "./Navbar.module.css"
const Navbar = ({id, counter}) => {
    const dispatch= useDispatch();
    const userData=useSelector(state => state.userState);
   
    useEffect(()=>{
        dispatch(fetchUsers());
    },[])

    const user=userData.users.find (user=> user.id === +id );
    return (
        <div className={styles.container}>
            <span>counter:{counter}</span>
            <span>Name:{user.name}</span>
            
        </div>
    );
};

export default Navbar;