import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getAllUsers = createAsyncThunk("getAllUsers", async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const allUsersData = await response.json();
    return allUsersData;
})

export const allUsers = createSlice({
    name : "usersfetch",
    initialState :{
        users : [],
        loading : false,
        error :false,
    },
    reducers : {

    },
    extraReducers :{
       [getAllUsers.pending] : (state)=>
       {
        state.loading =  true;
        
        }, 
        [getAllUsers.fulfilled] : (state, action)=>
        {   
           
            state.loading =  false;
            state.users = action.payload;
         }, 
         [getAllUsers.rejected] : (state)=>
         {
            state.loading = false;
            state.error = true
          }, 
    }
});

export const { reducer : allUsersData } = allUsers;