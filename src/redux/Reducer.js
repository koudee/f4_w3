import React from "react";
import { actionTypes } from "./Actiontypes";


const initialState={
    allPosts:[],
    clickedPost_Id:null
}
export const reducer=(state=initialState,action)=>{

    if(action.type=== actionTypes.FETCH_POSTS){
       
        state={
            ...state,
            allPosts:action.payload
        }
        return state;
    }
    else if(action.type===actionTypes.POST_SELECTED){
        state={
            ...state,
            clickedPost_Id:action.payload
        }
        return state
    }
    return state;
}