import { View,SafeAreaView, ScrollView,Text, TextInput, Image,} from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton';
const styelcss = require('../assets/css/style');
const CreateNewPass = () => {
  const [password,setpassword] =useState();
  return (
    <SafeAreaView style={styelcss.maindDivBannerCnp}>
    <ScrollView
     showsVerticalScrollIndicator={false}
     nestedScrollEnable={true}
    >
        <View style={styelcss.forgetmainPara}>
            <Text style={styelcss.forgetPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
        </View>
        <TextInput style={styelcss.customInputVerifyFull} 
         placeholder="Password"
           returnKeyType='go'
           secureTextEntry
       
       />
       {/* <PasswordStrengthBar password={password} /> */}
       <View>
       {/* <Image
        source={require('../images/icon/bar.png')}
      /> */}
       </View>
        <TextInput style={styelcss.customInputVerifyFull} 
         placeholder="Confirm Password*"
           returnKeyType='go'
           secureTextEntry
       
       />
       
           <Text style={styelcss.forgetParapaasb}>Both passwords must match.</Text>

        <View style={{marginVertical:23}}>
    <CustomButton label={'Reset Password'} onPress={() => navigation.navigate('Login')} />
    </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default CreateNewPass