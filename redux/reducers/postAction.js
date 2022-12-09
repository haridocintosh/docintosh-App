import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant"

export const deletePost = createAsyncThunk("postAction/delete", async(data)=>{
  try{
     const responce = await fetch(`${mainApi.baseUrl}/ApiController/deletePost`, {
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
})


export const reportPost = createAsyncThunk("postAction/reportPost", async(data)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/reportabusepost`, {
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
  })

export const postAction = createSlice({
    name : "postAction",
    initialState :{
        postaction  : [],
        loading     : false,
        error       : false,
    },
    reducers : {

    },
    extraReducers :{
        [deletePost.pending] : (state)=>
        {
          state.loading     =  true;
        }, 
        [deletePost.fulfilled] : (state, action)=>
        {   
          state.loading     =  false;
          state.postaction  =  action.payload;
        }, 
        [deletePost.rejected] : (state)=>
        {
          state.loading     = false;
          state.error       = true
        },
    }
});

export const { reducer : result } = postAction;