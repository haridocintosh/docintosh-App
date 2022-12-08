import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../src/apis/constant";

export const doctorOtp = createAsyncThunk("doctor/otp", async(doctorOtp)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/verifyregotp`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(doctorOtp)
        });
        const result =  await responce.json();
        // console.log('sliceTrARRA',result);
        //result.data.token;
        return result
    }
    catch(e){
       console.log(e);
    }
})


export const userIdupdate = createAsyncThunk("user/otp", async(userUpdate)=>{
    try{
       const responce = await fetch(`${mainApi.baseUrl}/ApiController/user_email_mobile_update`, {
            method : 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(userUpdate)
        });
        const result =  await responce.json();
        console.log('resultuserUpdate',result);
        return result
    }
    catch(e){
       console.log(e);
    }
})


export const otpSlice = createSlice({
    name : "AllOTP",
    initialState :{
        doctorOtp   : {},
        loading     : false,
        error       : false,
    },
    reducers : {

    },
    extraReducers :{
        [doctorOtp.pending] : (state)=>
        {   
            console.log("pending");
            state.loading =  true;
        }, 
        [doctorOtp.fulfilled] : (state, action)=>
        {   console.log('ftaamdsmdks', action);  
            state.loading =  false;
            state.doctorOtp = action.payload;
        }, 
        [doctorOtp.rejected] : (state)=>
        {
            console.log("rejected");
            state.loading = false;
            state.error = true
        }, 
    }
});

export default otpSlice.reducer