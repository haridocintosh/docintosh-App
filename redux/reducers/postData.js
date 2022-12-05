import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const userPostData = createAsyncThunk("getAllPost", async (postDetails)=>{
    // console.log('postdata1',postDetails.role);
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/getPost`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify({
                postType:0,
                role:postDetails.role,
                circle_type:postDetails.circle_type,
                city_id:postDetails.city_id,
                assoc_id:postDetails.assoc_id,
                pageCounter:600,
                id:postDetails.userId,
                profile:postDetails.profileimage,
            })
         });
        const result=  await responce.json();
    //    console.log('tara12345654',result);
        return result;
     }
     catch(e){
        console.log(e);;
     }
})



export const postCreate = createAsyncThunk("postupload", async(uploadData)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/createPostReact`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(uploadData)
        });
        const result=  await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
})


export const getMycircle = createAsyncThunk("getCircle", async (data)=>{
    const response = await fetch(`${mainApi.baseUrl}/ApiController/getCircle`,{
        method : 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    });
    const result = await response.json();
    //console.log('mycircle', result);
    return result;
})

export const getMyPostsApi = createAsyncThunk("getCircle", async (data)=>{
    const response = await fetch(`${mainApi.baseUrl}/ApiController/getmyPost`,{
        method : 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    });
    const getMyPostsResult = await response.json();
    return getMyPostsResult;
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


        [postCreate.pending] : (state)=>
            {
                state.loading =  true
            }, 
        [postCreate.fulfilled] : (state, action)=>
            {  // console.log(fulfilled);
                state.loading       = false,
                state.isLoggedIn    = true
                state.registerData  = action.payload;
            }, 
        [postCreate.rejected] : (state, action)=>
            {   
                state.isLoggedIn = false,
                state.loading = false;
                state.error = false
            },


        [getMycircle.pending] : (state)=>
            {
                state.loading   =  true;
            }, 
        [getMycircle.fulfilled] : (state, action)=>
            {   
                state.loading       =  false;
                state.circleData    = action.payload;
            }, 
        [getMycircle.rejected] : (state)=>
            {
                state.loading = false;
                state.error   = true
            }, 

        // get My post    
        [getMyPostsApi.pending] : (state)=>
            {
                state.loading   =  true;
            }, 
        [getMyPostsApi.fulfilled] : (state, action)=>
            {   
                state.loading       =  false;
                state.circleData    = action.payload;
            }, 
        [getMyPostsApi.rejected] : (state)=>
            {
                state.loading = false;
                state.error   = true
            }, 

    }
});

export const { reducer : result } = postData;