import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant"

export const forgotPassword_ = createAsyncThunk("forgotPassword", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/forgotPassword`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const result=  await responce.json();
        console.log(result);
        return result;
     }
     catch(e){
        console.log(e);;
     }
})

export const setpassword = createAsyncThunk("setpassword", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/setpass`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const result=  await responce.json();
     
        return result;
     }
     catch(e){
        console.log(e);;
     }
})

export const forgotPasswordSlice = createSlice({
    name : "forgotpasswordData",
    initialState :{
        forgotpasswordData : [],
        loading : false,
        error :false,
    },
    reducers : {

    },
    extraReducers :{
       [forgotPassword_.pending] : (state)=>
        {
            state.loading =  true;
        }, 
        [forgotPassword_.fulfilled] : (state, action)=>
        {   
            state.loading =  false;
            state.forgotpasswordData = action.payload;
         }, 
         [forgotPassword_.rejected] : (state)=>
         {

            state.loading = false;
            state.error = true
          }, 
          [setpassword.fulfilled] : (state, action)=>
          {   
              state.loading =  false;
              state.forgotpasswordData = action.payload;
           },
    }
});

export const { reducer : result } = forgotPasswordSlice;