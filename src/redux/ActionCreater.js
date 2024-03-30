import React from "react";
import { actionTypes } from "./Actiontypes";

export const fetchPost= ()=>{


    return async (dispatch)=>{

        const response= await fetch("https://jsonplaceholder.typicode.com/posts");
        const responseObject= await response.json();

        
        let data = responseObject;

        dispatch({
            type:actionTypes.FETCH_POSTS,
            payload:data
        })
    }
}

export const postSelected=(id)=>{

    return(
        {
            type:actionTypes.POST_SELECTED,
            payload:id
        }
    )
}