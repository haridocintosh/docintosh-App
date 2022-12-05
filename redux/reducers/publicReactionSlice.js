import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";


export const postLikeData = createAsyncThunk("getAllPost", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/post_like`, {
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

export const getallLikes = createAsyncThunk("getAllPost", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/allpostlike`, {
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
export const getallcomment = createAsyncThunk("getAllPost", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/getallcomment`, {
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

export const deleteComment = createAsyncThunk("getAllPost", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/delete_comment`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const delResult =  await responce.json();
        return delResult;
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
        commentsData:[],
        gelAllLikes:[]
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
  
    },
    extraReducers :{
        [getallcomment.pending] : (state)=>
            {
                state.loading =  true;
            }, 
        [getallcomment.fulfilled] : (state, action)=>
            {   
                state.loading  =  false;
                state.commentsData = action.payload;
            }, 
        [getallcomment.rejected] : (state)=>
            {
                state.loading = false;
                state.error   = true
            }, 
  
    },

    extraReducers :{
        [getallLikes.pending] : (state)=>
            {
                state.loading =  true;
            }, 
        [getallLikes.fulfilled] : (state, action)=>
            {   
                state.loading  =  false;
                state.gelAllLikes = action.payload;
            }, 
        [getallLikes.rejected] : (state)=>
            {
                state.loading = false;
                state.error   = true
            }, 
  
    },

    extraReducers :{
        [deleteComment.pending] : (state)=>
            {
                state.loading =  true;
            }, 
        [deleteComment.fulfilled] : (state, action)=>
            {   
                state.loading  =  false;
                state.gelAllLikes = action.payload;
            }, 
        [deleteComment.rejected] : (state)=>
            {
                state.loading = false;
                state.error   = true
            }, 
  
    }
});

export const { reducer : commentResults} = likesData;
export const { reducer : LikesResult } = likesData;