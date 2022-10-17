import { mainApi } from "./constant"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import axios  from 'axios';

const storeData = async (key,value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      // saving error
    }
}

const singlestoreData = async (key,value) => {
  try {
   // const jsonValue = JSON.stringify(value)
   console.log(key,value);
    await AsyncStorage.setItem(key, value)
  }catch (e) {
    // saving error
  }
}



// const getData = async (key) => {
//     try {
//       const jsonValue = await AsyncStorage.getItem(key);
//       setdata(jsonValue != null ? JSON.parse(jsonValue) : null)
//     } catch(e) {
//      console.log(e)
//     }
// }



//  function quickloginnotworking(email,mobile_no) {
//     fetch(`${mainApi.baseUrl}/ApiController/loginwithotp`, {
//         method: 'POST',
//         body: JSON.stringify({
//             email: email,
//             mobile_no: mobile_no,
//           }),
//           headers: {
//               "Content-type": "application/json; charset=UTF-8"
//           }
//         })
//         .then(response =>response.json())
//         .then((result)=>{
//             console.log(result);
//             if(result["status"]=='Success') {
//                 storeData('user_id',result["userid"])  
//              //  console.log(getData('user_id'))
//             // navigation.navigate('OtpVerification');
//                 Toast.show("Please Check Your OTP")
//             }else{
//                 Toast.show(result["message"])
//             }
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }


const login = (email,password) =>
new Promise((resolve, reject) => {
  axios({
    method: 'post',
    url: `${mainApi.baseUrl}/ApiController/login`,
    headers: {"Content-type": "application/json; charset=UTF-8"},
    data: JSON.stringify({
      email: email,
      password: password,
    }),
    responseType: 'json',
  })
    .then(res => {
     // console.log(res);
      if(res.status === 200) {
        console.log(res.data);
        storeData('USER_INFO',JSON.stringify({
          login:true,
          data:res.data["session_data"]
        })) 
        singlestoreData('isloggedin','true');  
        resolve(res.data);
        Toast.show(res.data["message"])
      } else reject(res);
    })
    .catch(error => {
      console.log(error);
      reject(error);
    });
});

 const quicklogin = (email,mobile_no) =>
  new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${mainApi.baseUrl}/ApiController/loginwithotp`,
      headers: {"Content-type": "application/json; charset=UTF-8"},
      data: JSON.stringify({
        email: email,
        mobile_no: mobile_no,
      }),
      responseType: 'json',
    })
      .then(res => {
       // console.log(res);
        if(res.status === 200) {
          resolve(res.data);
          Toast.show(res.data["message"])
        } else reject(res);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });



const verifyOtp = (otp,user_id) =>
  new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${mainApi.baseUrl}/ApiController/loginwithotpverify`,
      headers: {"Content-type": "application/json; charset=UTF-8"},
      data: JSON.stringify({
        otp: otp,
        user_id: user_id,
      }),
      responseType: 'json',
    })
      .then(res => {
        if(res.status === 200) {
         console.log(res.data);
        storeData('USER_INFO',JSON.stringify({
          login:true,
          data:res.data["session_data"]
        }))  
        resolve(res.data);
        Toast.show(res.data["message"])
        } else reject(res);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });


  const check_mail= (e)=>
  new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${mainApi.baseUrl}/ApiController/email_check`,
      headers: {"Content-type": "application/json; charset=UTF-8"},
      data: JSON.stringify({
        email: e
      }),
      responseType: 'json',
    })
      .then(res => {
        if(res.status === 200) {
          console.log(res.data);
          resolve(res.data);
          if(res.data["message"])
          Toast.show(res.data["message"])
        } else reject(res);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  })
  
 
 
  const mobile_check= (e)=>{
    // fetch(`${mainApi.baseUrl}/ApiController/mobile_check`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     mobile: e
    //     }),
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //     }
    //   })
    //   .then(response => response.json())
    //   .then((json) => {
    //       if (json["status_code"]=='Exists') {
    //         seterr(json["message"])
    //       }else{
    //         setphone(e);
    //          seterr('');
    //       }
    //   })
    //   .catch((error) => {
    //       console.error(error);
    //   });


    // ==================email===========

    // {
    //   fetch(`${mainApi.baseUrl}/ApiController/email_check`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         email: e
    //       }),
    //       headers: {
    //           "Content-type": "application/json; charset=UTF-8"
    //       }
    //     })
    //     .then(response => response.json())
    //     .then((json) => {
    //         if (json["status_code"]=='Exists') {
    //           seterr(json["message"])
    //         }else{
    //           setemail(e);
    //            seterr('');
    //         }
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    // }
  }



  const forgotverifyOtp = (otp,user_id) =>
  new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${mainApi.baseUrl}/ApiController/verifyotp`,
      headers: {"Content-type": "application/json; charset=UTF-8"},
      data: JSON.stringify({
        otp: otp,
        user_id: user_id,
      }),
      responseType: 'json',
    })
      .then(res => {
        if(res.status === 200) {
         console.log(res.data); 
        resolve(res.data);
        Toast.show('OTP Verify Successfully')
        } else reject(res);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });


export {login, quicklogin, verifyOtp, check_mail, storeData, singlestoreData,forgotverifyOtp} 