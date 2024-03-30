import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import PostCard from "./PostCard";


const Details = () => {
  const [like, setLike] = useState(false);
  const [details,setDetails]= useState(true);

  const navigate = useNavigate();
  const posts_Arr = useSelector((state) => state.allPosts);
  const params = useParams();

  let postId = Number(params.postId) || 1;
  let selectedPost = posts_Arr.filter((post) => {
    return post.id === postId;
  })[0];

  return (
    <div className="details-page">
      {selectedPost && (
        <div className="selected-post-container">
          <div className="post-number">
            <div
              onClick={() => navigate(-1)}
              className="material-icons navigate-btn"
            >
              keyboard_backspace
            </div>
            <h1>Post Number: {postId}</h1>
          </div>
          <div className="post-details-container">
            <div className="selected-post-img-container">
              <div>
                <h3 className="post-title">{selectedPost.title}</h3>
                <div className="post-likes">
                  <span className="material-icons">share</span>
                  <span
                    onClick={() => setLike(!like)}
                    className={`material-icons ${!like ? "unlike" : "liked"} `}
                  >
                    favorite
                  </span>
                </div>
              </div>
            </div>
            <div className="second-div">
                <div className="two-buttons">
                    <button onClick={()=>setDetails(true)} className={details?"colorful":""}>Detail</button>
                    <button onClick={()=>setDetails(false)} className={!details?"colorful":""} >User Info</button>
                </div>
                <div>
                    {details?
                    <div>
                        <h3>Post Title: {selectedPost.title}</h3>
                        <p>Post Description: {selectedPost.body}</p>
                    </div>:
                    <div>
                        <h3>Post was posted by {postId}</h3>
                    </div>
                    }
                </div>
            </div>
          </div>
        </div>
      )}
    <br/>
    <br/>
    <br/>
    <h2>More Posts</h2>
      <div className="posts-container">
        {posts_Arr.length>0 && 
        
        posts_Arr.map((post,ind)=>{
            return <PostCard key={ind} postDesc={post.body} postTitle={post.title} postId={post.id} />
        })
        }
      </div>
    </div>
  );
};

export default Details;
