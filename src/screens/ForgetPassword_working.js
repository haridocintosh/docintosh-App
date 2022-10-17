import { View,SafeAreaView, ScrollView,Text, TextInput, } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton';
const styelcss = require('../assets/css/style');
import { useNavigation } from '@react-navigation/native';


const ForgetPassword = () => {
   const navigation = useNavigation();
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
       
       />
        <View style={{marginVertical:23}}>
    <CustomButton label={'Receive OTP'}  onPress={() => navigation.navigate('OtpVerification', {
            mobile_no : '9029634011',
            email : 'tara@gmail.com',
            user_id :'228737',
          }
          )}  />
    </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default ForgetPassword