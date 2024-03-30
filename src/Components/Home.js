import React, { useEffect } from "react";
import { fetchPost } from "../redux/ActionCreater";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./PostCard";

const Home= ()=>{

    const dispatch= useDispatch();
    const allPosts_Arr= useSelector(state=>state.allPosts);

    useEffect(()=>{
        dispatch(fetchPost());
    },[])

    return(
        <div className="home-container">
            <div>
                <h1>Social Media For Travellers</h1>
                <input className="search-input" type="text" placeholder="🧳 search here"></input>
            </div>

            <div className="posts-container">
                {allPosts_Arr.length>0 &&
                allPosts_Arr.map((post,ind)=>{

                    return(
                        <PostCard key={post.id} postId={post.id} postDesc={post.body} postTitle={post.title} />
                    )
                })
                }
            </div>

        </div>
    )
}

export default Home