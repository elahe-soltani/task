import React,{useEffect ,useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { fetchPost } from '../redux/posts/postsAction';
import {useParams} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Card from '../shared/Card';
import Navbar from './Navbar';
import "./post.css";

const Post = () => {
    const params=useParams();

    const dispatch=useDispatch();
    const postData=useSelector(state=>state.postState);
    useEffect(()=>{
        dispatch(fetchPost())
    },[])

    const [post , setPost] = useState([]);
    const [counter , setCounter] = useState(0);
    const [search , setSearch] = useState("");
    const [pageNumber,setPageNumber]=useState(0);
    
    const postPerPage=10;
    const pagesVisited=pageNumber*postPerPage; 
    const displayPosts=post
    .slice(pagesVisited,pagesVisited+postPerPage)
    .map(post=>
        <Card
        key={post.id} 
        id={post.id}
        title={post.title}
        body={post.body}
        />
     )


      const pageCount=Math.ceil(postData.posts.length / postPerPage);
      const changePage =({selected}) =>{
        setPageNumber(selected);
      }
      const searchHandeler=() =>{
         setCounter(prevCounter => prevCounter+1)
         const newPost=postData.posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase())); 
         setPost(newPost);
     }
     
    return (
        <div className='container'>
            <Navbar id={params.id} counter={counter} />
            <input type="text" 
            placeholder='search'
             value={search} 
             onChange={event=>setSearch(event.target.value)} />

            <button onClick={searchHandeler}>search</button>  

            { postData.loading ? 
             <p>Loading...</p>
            :
             postData.error ?
             <p>something wrong</p> :
             displayPosts
            } 
            

          <ReactPaginate
             previousLabel={"pervious"}
             nextLabel={"Next"}
             pageCount={pageCount}
             onPageChange={changePage}
             containerClassName={"paginationBttns"}
             previousLinkClassName={"previousBttn"}
             nextLinkClassName={"nextBttn"}
             disabledClassName={"paginationDisabled"}
             activeClassName={"paginationActive"}
           />
        </div>
    );
};

export default Post;