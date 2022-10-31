import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const quizPostData = createAsyncThunk("getAllPost", async (data)=>{
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/getQuizData`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify({
                postType:0,
                role:data.role,
                circle_type:data.circle_type,
                city_id:data.city_id,
                assoc_id:data.assoc_id,
                pageCounter:600,
                id:data.userId 
            })
         });
        const result=  await responce.json();
    //   console.log('resultttdaata',result);
        return result;
     }
     catch(e){
        console.log(e);;
     }
})
export const GetQuizQuestions = createAsyncThunk("getQuizQuestions", async (data)=>{
//    console.log('GetQuizQuestions11',data);
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/getQuizQuestions`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const result=  await responce.json();
     //   console.log('resultttdaata',result);
        return result;
     }
     catch(e){
        console.log(e);;
     }
});

export const saveQuizAnswer = createAsyncThunk("saveQuizAnswer", async (data)=>{
//    console.log('saveQuizAnswer',data);
    try{
        const responce = await fetch(`${mainApi.baseUrl}/ApiController/saveQuizAnswer`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body :JSON.stringify(data)
         });
        const result=  await responce.json();
     //   console.log('resultttdaata',result);
        return result;
     }
     catch(e){
        console.log(e);;
     }
});

export const quizData = createSlice({
    name : "quiz",
    initialState :{
        postData : [],
        loading : false,
        error :false,
    },
    reducers : {},
    extraReducers :{
        [quizPostData.pending] : (state)=>
            {
                state.loading =  true;
            }, 
        [quizPostData.fulfilled] : (state, action)=>
            {   
                state.loading  =  false;
                state.postData = action.payload;
            }, 
        [quizPostData.rejected] : (state)=>
            {
                state.loading = false;
                state.error   = true
            }, 




        [GetQuizQuestions.pending] : (state)=>
            {
                state.loading =  true;
            }, 
        [GetQuizQuestions.fulfilled] : (state, action)=>
            {   
                state.loading  =  false;
                state.postData = action.payload;
            }, 
        [GetQuizQuestions.rejected] : (state)=>
            {
                state.loading = false;
                state.error   = true
            }, 


        [saveQuizAnswer.pending] : (state)=>
            {
                state.loading =  true;
            }, 
        [saveQuizAnswer.fulfilled] : (state, action)=>
            {   
                state.loading  =  false;
                state.postData = action.payload;
            }, 
        [saveQuizAnswer.rejected] : (state)=>
            {
                state.loading = false;
                state.error   = true
            }, 
    }
});

export const { reducer : result } = quizData;