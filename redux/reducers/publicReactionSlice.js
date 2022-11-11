import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";


export const postLikeData = createAsyncThunk("getAllPost", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/user_post_like`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const LikesResult=  await responce.json();
        return LikesResult;
     }
     catch(e){
        console.log(e);;
     }
})

export const commentData = createAsyncThunk("getAllPost", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/post_comment`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const commentResults =  await responce.json();
        return commentResults;
     }
     catch(e){
        console.log(e);;
     }
})


export const likesData = createSlice({
    name : "likesData",
    initialState :{
        likesData : [],
        loading : false,
        error :false,
        commentsData:[]
    },
    reducers : {},
    extraReducers :{
        [postLikeData.pending] : (state)=>
            {
                state.loading =  true;
            }, 
        [postLikeData.fulfilled] : (state, action)=>
            {   
                state.loading  =  false;
                state.likesData = action.payload;
            }, 
        [postLikeData.rejected] : (state)=>
            {
                state.loading = false;
                state.error   = true
            }, 
  
    },


    extraReducers :{
        [commentData.pending] : (state)=>
            {
                state.loading =  true;
            }, 
        [commentData.fulfilled] : (state, action)=>
            {   
                state.loading  =  false;
                state.commentsData = action.payload;
            }, 
        [commentData.rejected] : (state)=>
            {
                state.loading = false;
                state.error   = true
            }, 
  
    }
});

export const { reducer : commentResults} = likesData;
export const { reducer : LikesResult } = likesData;