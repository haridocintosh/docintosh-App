import { View, Text, TextInput,SafeAreaView } from 'react-native'
import React, { useEffect,useState } from 'react';
import { styles } from '../AccountSettingStyles';
import { Ionicons } from '@expo/vector-icons';

const ResetPassword = ({navigation}) => {
  const [showeye, setshoweye] = useState(true);

  const oldPassword = (e) => {

  }
  const newPassword = (e) => {

  }
  useEffect(() => {
    navigation.setOptions({ title:'Reset Password'});
  },[])
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ecf2f6",paddingHorizontal:15 }}>
      <TextInput 
          style={styles.customInputVerifyFullMobile} 
          placeholderTextColor='#687690' 
          placeholder='Current Password*'  
          onChangeText={(e)=> oldPassword(e)}
        />
      <TextInput 
          style={styles.customInputVerifyFullMobile} 
          placeholderTextColor='#687690'
          placeholder='New Password*'  
          onChangeText={(e)=> newPassword(e)}
        />
        <View>
        <TextInput 
            style={styles.customInputVerifyFullMobile} 
            placeholderTextColor='#687690' 
            placeholder='Re-Enter New Password*'  
            onChangeText={(e)=> newPassword(e)}
            inputType="password"
            secureTextEntry={showeye}
            hideShow={showeye}
          />
          <Ionicons  style={styles.eyeIcon} name={showeye ? 'eye-off' : 'eye'} size={24} color="#51668A" onPress={() => setshoweye(!showeye)} />
        </View>
        <View style={styles.resetPasswdBtn} >
          <Text style={styles.resetPasswdBtnText}>Continue</Text>
        </View>
    </SafeAreaView>
  )
}

export default ResetPassword