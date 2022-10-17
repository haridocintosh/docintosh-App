import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import CustomButton from '../components/CustomButton';

import InputField from '../components/InputField';
import { SvgUri } from 'react-native-svg';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker'
const styelcss = require('../assets/css/style');
export default function RegisterScreen() {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [checked, setChecked] = useState('first');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  return (
        <SafeAreaView style={{ display:"flex",justifyContent: 'center'}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnable={true}
            style={{paddingHorizontal: 20}}>

          <View style={{ marginTop :30}}>

            <Text  style={styles.headingtext}
            >
              Hey There!
            </Text>
            <Text style={styles.headingpara}
            >
              Welcome to Docintosh. Let’s create your account. 
            </Text>
            </View>
           
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 30,
              }}>
              <TouchableOpacity
                onPress={() => {}}
                >
                <SvgUri width="56" height="56" uri="https://www.brandcare.net/Docintosh_Svg/google.svg" />
          
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {}}
               >

            <SvgUri width="56" height="56" uri="https://www.brandcare.net/Docintosh_Svg/facebook%20%282%29.svg" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {}}
                >
                  <SvgUri width="56" height="56" uri="https://www.brandcare.net/Docintosh_Svg/linkdin.svg" />
              </TouchableOpacity>
            </View>
    
            <Text  style={styles.headingpara2}>
              Or
            </Text>

            
      

        <TextInput style={styelcss.customInputVerifyFullMobile} 
         
          keyboardType="numeric"
          placeholder='Fisrt name'/>
            <TextInput style={styelcss.customInputVerifyFullMobile}  
            label={'Last Name'}
            placeholder='Last Name'/>
    
            <TextInput  style={styelcss.customInputVerifyFullMobile}
              label={'Email ID'}
              keyboardType="email-address"
              placeholder='Email ID'
            />

          <TextInput   style={styelcss.customInputVerifyFullMobile} label={'Mobile Number'}  
           placeholder='Mobile Number'
          />

          <View  style={{ display:"flex" ,flexDirection:"row",alignItems:'center'}}>
                <Text>You are :</Text>
                <View style={{flex:0}}>
                <RadioButton style={{display:"none"}}
                  value="first"
                  status={ checked === 'first' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('first')}
                /> 
                         {/* <Text style={{marginTop:-35,zIndex:-1}}>Doctor</Text> */}
                          <Image source={require('../assets/images/doctor.png')} style={{marginTop:-64,zIndex:-1,marginLeft:-4}} />
              </View>
  
             
              <View style={{flex:0,}}>
              <RadioButton style={{backgroundColor:"red"}}
                value="second"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
              />
            <Image source={require('../assets/images/student.png')} style={{marginTop:-64,zIndex:-1,marginLeft:-4}} />
          </View>
     
              </View>
    
        

          <DropDownPicker style={styles.customInputVerify}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Speciality"
              listMode="SCROLLVIEW"
            />
          <View style={{ marginBottom: 30}} ></View>

         <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         <CustomButton label={'Continue'} onPress={() => navigation.navigate('OtpVerification', {
            mobile_no : '9029634011',
            email : 'tara@gmail.com',
            user_id :'228737',
          }
          )} />
         </View>
    
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 30,
              }}>
              <Text>Already registered?</Text>
              <TouchableOpacity >
                <Text style={{color: '#2C8892', fontWeight: '700'}}  onPress={() => navigation.navigate('Login')}> Login</Text>
              </TouchableOpacity>
            </View>
            <View>
     
    </View>

          </ScrollView>
        </SafeAreaView>
      
  );
}


const styles = StyleSheet.create({
  headingtext:{
    fontSize: 24,
    fontWeight: '700',
    color: '#071B36',
     // fontFamily: 'Inter_900Black',
  },
  headingpara:{
     // fontFamily: 'Inter_900Black',
     fontSize: 14,
     fontWeight: '400',
     color: '#333',
     marginBottom: 30,
     //fontFamily: 'Plus Jakarta Sans',
     fontStyle: 'normal',
     lineHeight: 20,
     letterSpacing: 1,
     color: '#687690',
  },
  headingpara2:{
    // fontFamily: 'Inter_900Black',
    fontSize: 14,
    fontWeight: '400',
    color: '#333',
    marginBottom: 30,
    //fontFamily: 'Plus Jakarta Sans',
    fontStyle: 'normal',
    letterSpacing: 1,
    color: '#8C97AB',
    textAlign: 'center',
  },
  customInputVerify:
    {backgroundColor:"transparent",fontSize:16,color:"#071B36",height:48,marginTop:10,borderWidth:1,marginRight:12,borderColor:"#6C81A6",borderRadius:8,paddingLeft:8,},
    
});