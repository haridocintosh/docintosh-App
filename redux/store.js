import { configureStore } from "@reduxjs/toolkit";
import { allUsersData } from "./reducers/allUsers";
import { allSpeciality } from "./reducers/getSpeciality";
import { userresult } from "./reducers/loginAuth";
import { otpSlice } from "./reducers/otpSlice";
import { result } from "./reducers/forgotPass";

const store = configureStore({
    reducer : {
        myallUsers : allUsersData,
        mylogin: userresult,
        myspeciality : allSpeciality,
        myotp: otpSlice,
        forgotpass:result
    }
})

export default store;
