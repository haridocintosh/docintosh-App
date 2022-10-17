import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const userPostData = createAsyncThunk("getAllPost", async (data)=>{
   // console.log('passing',data);
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/getPost`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const result=  await responce.json();
       // console.log('tara',result);
        return result;
     }
     catch(e){
        console.log(e);;
     }
})

export const postData = createSlice({
    name : "usersfetch",
    initialState :{
        postData : [],
        loading : false,
        error :false,
    },
    reducers : {},
    extraReducers :{
        [userPostData.pending] : (state)=>
            {
                state.loading =  true;
            }, 
        [userPostData.fulfilled] : (state, action)=>
            {   
                state.loading  =  false;
                state.postData = action.payload;
            }, 
        [userPostData.rejected] : (state)=>
            {
                state.loading = false;
                state.error   = true
            }, 
    }
});

export const { reducer : result } = postData;