import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postSelected } from "../redux/ActionCreater";
import sunsetImg from "../img/sunset.svg";


const PostCard= ({postId,postTitle,postDesc})=>{

    const [readMore, setReadMore]= useState(false);
    const navigate= useNavigate();
    const dispatch = useDispatch();

    let desc= !readMore? postDesc.slice(0,100): postDesc;
    

    
    function postClicked(e){

        if(e.target.id==="readm" || e.target.id==="readmBtn"){
            return;
        }

        dispatch(postSelected(postId))
        navigate(`/details/${postId}`);
    }
    


    return(
        <div className="post-card" onClick={postClicked}>
            <div className="img-div">
                <img src={sunsetImg}/>
            </div>
            <strong>Title: {postTitle}</strong>
            <p>{desc} <button id="readm" className="read-more" onClick={()=>setReadMore(!readMore)}>{!readMore?"Read more...":"read less!"}</button></p>

            <button id="readmBtn" onClick={()=>setReadMore(!readMore)} className="material-icons read-more-btn">{!readMore?"chevron_right":"chevron_left"}</button>
        </div>
    )
    }
    export default PostCard