import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const SavePostApi = createAsyncThunk("savePost", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/savepost`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const result = await responce.json();
        return result;
     }
     catch(e){
        console.log(e);;
     }
})

export const BlockUserApi = createAsyncThunk("blockUserApi", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/blockPost`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const result = await responce.json();
        return result;
     }
     catch(e){
        console.log(e);;
     }
})

export const followApi = createAsyncThunk("follow", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/change_follow_status`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const result = await responce.json();
        return result;
     }
     catch(e){
        console.log(e);;
     }
})

export const getsearchSplData = createAsyncThunk("searchSplData", async ()=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/getsearchSplData`);
        const result = await responce.json();
        return result;
     }
     catch(e){
        console.log(e);;
     }
})


export const sendInvitation = createAsyncThunk("sendinvite", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/sendInvitation`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const result = await responce.json();
        console.log('inviteStatus',result);
     }
     catch(e){
        console.log(e);;
     }
})

export const savePost = createSlice({
    name : "savePost",
    initialState :{
        savePostResult   : {},
        blockUserResult   : {},
        getsearchResult   : {},
        followResult   : {},
        loading     : false,
        error       : false,
    },
    reducers : {},
    extraReducers :{
        [SavePostApi.pending] : (state)=>{   
            state.loading       =  true;
        }, 
        [SavePostApi.fulfilled] : (state, action)=>{   
            state.loading       =  false;
            state.savePostResult    = action.payload;
        }, 
        [SavePostApi.rejected] : (state)=>{
            state.loading       = false;
            state.error         = true
        }, 
    },
    extraReducers :{
        [BlockUserApi.pending] : (state)=>{   
            state.loading       =  true;
        }, 
        [BlockUserApi.fulfilled] : (state, action)=>{   
            state.loading         =  false;
            state.blockUserResult = action.payload;
        }, 
        [BlockUserApi.rejected] : (state)=>{
            state.loading       = false;
            state.error         = true
        }, 
    },
    extraReducers :{
        [getsearchSplData.pending] : (state)=>{   
            state.loading       =  true;
        }, 
        [getsearchSplData.fulfilled] : (state, action)=>{   
            state.loading         =  false;
            state.getsearchResult = action.payload;
        }, 
        [getsearchSplData.rejected] : (state)=>{
            state.loading       = false;
            state.error         = true
        }, 
    },
    extraReducers :{
        [followApi.pending] : (state)=>{   
            state.loading       =  true;
        }, 
        [followApi.fulfilled] : (state, action)=>{   
            state.loading         =  false;
            state.followResult = action.payload;
        }, 
        [followApi.rejected] : (state)=>{
            state.loading       = false;
            state.error         = true
        }, 
    },
});

export const { reducer : SavePostResult } = savePost;