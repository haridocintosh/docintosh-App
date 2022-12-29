import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant"

export const getInterestSpl = createAsyncThunk("user/getInterestSplt", async(data)=>{
  try{
     const responce = await fetch(`${mainApi.baseUrl}/ApiController/getInterestSpecialities`, {
          method : 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body : JSON.stringify(data)
      });
      const result=  await responce.json();
    //  console.log('interestAPI',result);
      return result
  }
  catch(e){
     console.log(e);
  }
})

export const addCircle = createAsyncThunk("user/addCircle", async(data)=>{
  try{
     const responce = await fetch(`${mainApi.baseUrl}/ApiController/addCircle`, {
          method : 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body : JSON.stringify(data)
      });
      const result=  await responce.json();
      console.log('slice',result);
      return result
  }
  catch(e){
     console.log(e);
  }
})

export const removeCircle = createAsyncThunk("user/removeCircle", async(data)=>{
  try{
     const responce = await fetch(`${mainApi.baseUrl}/ApiController/removeCircle`, {
          method : 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body : JSON.stringify(data)
      });
      const result=  await responce.json();
      console.log('removeSlice',result);
      return result
  }
  catch(e){
     console.log(e);
  }
})

export const circleSlice = createSlice({
    name : "addCircle",
    initialState :{
        users : [],
        loading : false,
        error :false,
    },
    reducers : {

    },
    extraReducers :{
        [getInterestSpl.pending] : (state)=>
        {
          state.loading =  true;
        }, 
        [getInterestSpl.fulfilled] : (state, action)=>
        {   
          state.loading =  false;
          state.users = action.payload;
        }, 
        [getInterestSpl.rejected] : (state)=>
        {
          state.loading = false;
          state.error = true
        },
        [addCircle.pending] : (state)=>
        {
          state.loading =  true;
        }, 
        [addCircle.fulfilled] : (state, action)=>
        {   
          state.loading =  false;
          state.users = action.payload;
        }, 
        [addCircle.rejected] : (state)=>
        {
          state.loading = false;
          state.error = true
        },
         
        [removeCircle.pending] : (state)=>
        {
          state.loading =  true;
        }, 
        [removeCircle.fulfilled] : (state, action)=>
        {   
          state.loading =  false;
          state.users = action.payload;
        }, 
        [removeCircle.rejected] : (state)=>
        {
          state.loading = false;
          state.error = true
        }, 
    }
});

export const { reducer : result } = circleSlice;