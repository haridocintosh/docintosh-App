import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";


export const getSavedPostsApi = createAsyncThunk("savedPosts", async(data)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/getSavedPost`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        });
        const result=  await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
  });
  
export const getBlockedUsersApi = createAsyncThunk("blockedUsers", async(data)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/getBlockedPost`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        });
        const result=  await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
  });


  export const circleSlice = createSlice({
    name : "getSavedPost",
    initialState :{
        users : [],
        getBlockedUsers : [],
        loading : false,
        error :false,
    },
    reducers : {

    },
    extraReducers :{
        [getSavedPostsApi.pending] : (state)=>
        {
          state.loading =  true;
        }, 
        [getSavedPostsApi.fulfilled] : (state, action)=>
        {   
          state.loading =  false;
          state.users = action.payload;
        }, 
        [getSavedPostsApi.rejected] : (state)=>
        {
          state.loading = false;
          state.error = true
        },
    },
    extraReducers :{
        [getBlockedUsersApi.pending] : (state)=>
        {
          state.loading =  true;
        }, 
        [getBlockedUsersApi.fulfilled] : (state, action)=>
        {   
          state.loading =  false;
          state.getBlockedUsers = action.payload;
        }, 
        [getBlockedUsersApi.rejected] : (state)=>
        {
          state.loading = false;
          state.error = true
        },
    },
});

export const { reducer : result } = circleSlice;