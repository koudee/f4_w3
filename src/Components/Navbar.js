import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import 'material-icons/iconfont/material-icons.css';


const Navbar= ()=>{

    const postId= useSelector(state=>state.clickedPost_Id);
    return(
        <div>
            <div className="navbar-container">
                <h2>TravelMedia.in</h2>
                <div className="links-div">
                    <NavLink  to={""} className="material-icons link">home</NavLink>
                    <NavLink  to={`/details/${postId}`} className="material-icons link">bookmark</NavLink>
                </div>
                <div></div>
            </div>

            <Outlet />
        </div>
    )
}

export default Navbar