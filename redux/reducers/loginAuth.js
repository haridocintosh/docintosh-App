import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";
import AsyncStorage from '@react-native-async-storage/async-storage';
 

export const userLogin = createAsyncThunk("user/login", async(loginData)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/login`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(loginData)
        });
        const userresult=  await responce.json();
     //   console.log('slice',userresult);
        //result.data.token;
        return userresult
    }
    catch(e){
       console.log(e);
    }
})

export const userRegisterOne = createAsyncThunk("user/register", async(regData)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/userCreate1`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(regData)
        });
        const result=  await responce.json();
        console.log('registerSlice',result);
        //result.data.token;
        return result
    }
    catch(e){
       console.log(e);
    }
})

export const userRegisterSecond = createAsyncThunk("user/regSecond", async(regData)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/updateReg`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(regData)
        });
        const result=  await responce.json();
        console.log('registerSecondSlice',result);
        //result.data.token;
        return result
    }
    catch(e){
       console.log(e);
    }
})

export const checkEmail = createAsyncThunk("user/email_check", async(regData)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/email_check`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(regData)
        });
        const result=  await responce.json();
       // console.log('emailCheck',result);
        return result
    }
    catch(e){
       console.log(e);
    }
})


export const checkMobile = createAsyncThunk("user/check_mobile", async(regData)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/mobile_check`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(regData)
        });
        const result = await responce.json();
        return result
    }
    catch(e){
       console.log(e);
    }
})


export const resendOTP = createAsyncThunk("user/resendOTP", async(regData)=>{
    try{
        console.log(regData);
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/loginwithotp`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(regData)
        });
        const result = await responce.json();
        console.log("checkresend",result);
        return result
    }catch(e){
       console.log(e);
    }
})

export const loginAuth = createSlice({
    name : "auth",
    initialState : {
        userInfo    : {},
        userName    : "test user",
        loading     : false,
        isLoggedIn  : false,
        error       : false,
        usertoken   : null,
        registerData: {},
        registerTwoData : {}

    },
    reducers : {
        logout : (currentState)=>{
            console.log(currentState);
            currentState.loading    = false;
            currentState.usertoken  = null;
            currentState.loading    = false;
        },
        // getUserInfo :  (currentState)=>{
        //   //  currentState.userName =  AsyncStorage.getItem('USER_INFO');
        //     // console.log("reactAuthData",jsonValue);
        //     // const data=await JSON.parse(jsonValue);
        //     //  currentState.userName=JSON.parse(data)['data'];
        // },
        
    },
    extraReducers :{
       [userLogin.pending] : (state)=>
        {
         state.loading =  true
        }, 
        [userLogin.fulfilled] : (state, action)=>
        {
            state.loading       = false;
            state.isLoggedIn    = true;
            state.usertoken     = 'userLogin'
            state.userInfo      =  action.payload;
        }, 
        [userLogin.rejected] : (state, action)=>
        {   
            state.isLoggedIn = false;
            state.loading = false;
            state.error = false
        },
        

        [userRegisterOne.pending] : (state)=>
        {
            state.loading =  true
        }, 
        [userRegisterOne.fulfilled] : (state, action)=>
        {  
            state.loading       = false,
            state.isLoggedIn    = true
            state.registerData  = action.payload;
        }, 
        [userRegisterOne.rejected] : (state, action)=>
        {   
            state.isLoggedIn = false,
            state.loading = false;
            state.error = false
        },


        [userRegisterSecond.pending] : (state)=>
        {
            state.loading =  true
        }, 
        [userRegisterSecond.fulfilled] : (state, action)=>
        {  // console.log(fulfilled);
            state.loading       = false,
            state.isLoggedIn    = true
            state.registerTwoData  = action.payload;
        }, 
        [userRegisterSecond.rejected] : (state, action)=>
        {   
            state.isLoggedIn = false,
            state.loading = false;
            state.error = false
        }
    }
});


export const { reducer : userresult} = loginAuth;
export const { logout } = loginAuth.actions
