import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { fetchPost } from '../redux/posts/postsAction';
import styles from './UpdatePage.module.css'
const UpdatePage = () => {
    const dispatch=useDispatch();
    const postData=useSelector(state=>state.postState);
    
    useEffect(()=>{
        dispatch(fetchPost())
    },[])

    const params=useParams();

    const post=postData.posts.find (post=> post.id === +params.id );
 
    const [data , setData] =useState({
        title:post.title,
        body: post.body
    });
    const changeHandler= event =>{
        setData ({ ...data , [event.target.name]:event.target.value })
    }; 
    const clickHandeler =() =>{
        axios.patch("https://jsonplaceholder.typicode.com/posts/"+post.id,
        {
            title:data.title,
            body:data.body
        }
        )
        .then((response)=>console.log(response))
    }
    return (
        <div className={styles.container}>
            <div>
            <label>tilte:</label>
            <textarea
             style={{width:"250px",height:"150px"}}
             type="text" name='title'
             value={data.title}
             onChange={changeHandler}
               />
         <label>body:</label>
            <textarea
             style={{width:"250px",height:"150px"}}
             name='body'
             value={data.body}
             onChange={changeHandler}
                 />
             
            </div>
            <button  onClick={clickHandeler}>update</button>
       </div>

    )
};

export default UpdatePage;