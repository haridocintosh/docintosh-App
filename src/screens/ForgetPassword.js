import { View,SafeAreaView, ScrollView,Text, TextInput, } from 'react-native'
import Toast from 'react-native-simple-toast';
import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../components/CustomButton';
const styelcss = require('../assets/css/style');
import { useNavigation } from '@react-navigation/native';
import { forgotPassword_ } from '../../redux/reducers/forgotPass';




const ForgetPassword = () => {
   const navigation = useNavigation();
   const dispatch = useDispatch();
   const [buttonChange ,setbuttonChange]=useState(false);
   const [inputtext ,getinput]=useState();
   const forgotpasswordState = useSelector((state)=>{
  
    return state.forgotpass;
   
  });

 

   const handleSubmit = async ()=>{
    if(inputtext){
      const token =await dispatch(forgotPassword_({
        email:inputtext
      }))
      Toast.show(token.payload.message);
      console.log(token.payload.status);
      if(token.payload.status == 'Success'){
        navigation.navigate('ForgotPasswordOTP',{
          mobile_no: inputtext,
          email:'',
          user_id :token.payload.userid
        })
      }
    }else{
      Toast.show("Please Enter Mobile No. OR Email");
    }   
  }
  return (
  <SafeAreaView style={styelcss.maindDivBannerForget}>
    <ScrollView
     showsVerticalScrollIndicator={false}
     nestedScrollEnable={true}
    >
        <View style={styelcss.forgetmainPara}>
            <Text style={styelcss.forgetPara}>Enter the email address or mobile number associated with your account</Text>
        </View>
        <TextInput style={styelcss.customInputVerifyFull} 
         autoCapitalize="none"
         placeholder='Email/Mobile Number*'
         onChangeText={(e)=>{getinput(e);}}
       />
        <View style={{marginVertical:23}}>
    <CustomButton label={(forgotpasswordState.loading)?'Sending OTP...':'Receive OTP'}  onPress={()=>{handleSubmit()}} disabled={!forgotpasswordState.loading} />
    {/* <Text>{console.log(forgotpasswordState.loading)}</Text> */}
    </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default ForgetPassword