import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const userPostData = createAsyncThunk("getAllPost", async (postDetails)=>{
    //  console.log('postdata1',postDetails);
    // console.log('postdata1',postDetails.city_id);
    // console.log('postdata1',postDetails.assoc_id);
    // console.log('postdata1',postDetails.profileimage);
    // console.log('postdata1',postDetails.userId);
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/getPost`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify({
                postType:0,
                role:postDetails.role,
                circle_type:1,
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