import React,{ Dimensions, useState , useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
const styelcss = require('../assets/css/style');
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login, storeData, singlestoreData } from '../apis/Apicall';
import { userLogin } from '../../redux/reducers/loginAuth';
import Toast from 'react-native-simple-toast';
import { useFonts } from 'expo-font';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch   = useDispatch();
  const [loader, setloader] = useState(true);
  const [showeye, setshoweye] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const [message , setmessage]  = useState();
 // const isValidemailRegex       = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$/;
 const isValidemailRegex  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.[a-z]{1,3})+([a-zA-Z0-9]{1,3})|(^[0-9]{10})+$/;
  const [register ,setregister] = useState({
    email:"",
    password : "",
  });
const [data, setdata] = useState();


  const  updateEmail = (text)=>{
    //console.log(text);
    if(!isValidemailRegex.test(text)){
        setmessage("Please Enter valid Email address or Phone number.");
    }else{
        setmessage('');
    }
    setregister({ ...register, 
      email: text,
    });
  }

  const authLogin = async (e)=>{
    // console.log("Form");
   
    if(register.email !== "" &&  register.password !== ""){
      setloader(true)
      const token = await dispatch(userLogin(register));
      console.log('lgitokm',token);
      if(token.payload.status == 'Success'){
        setloader(false)
        storeData('USER_INFO',JSON.stringify({
          login:true,
          data:token.payload.session_data
        }))
        singlestoreData('isloggedin','true'); 
       // Toast.show(token.payload.message);
          navigation.navigate('HomeScreen')
      }else{
        setloader(false)
        Toast.show(token.payload.message);
      }
    
      // localStorage.setItem('auth', token.payload);
      // storeData('USER_INFO',JSON.stringify({
      //   login:true,
      //   data:res.data["session_data"]
      // })) 
      // singlestoreData('isloggedin','true'); 
      // navigate('/', {
      //     replace: true
      // })

//navigation.navigate('Home')
    }else{
      setmessage('Please fill the above details');
    }
  }

  // const removeData = async (key) => {
  //   try {
  //     await AsyncStorage.removeItem(key);
  //   console.log("remove");
  //   } catch(e) {
    
  //   }
  // }
  // useEffect(() => {
  //     removeData('USER_INFO');
  //   },[])

  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      setdata(jsonValue != null ? JSON.parse(JSON.parse(jsonValue)) : null)
      setloader(false);
    } catch(e) {
     console.log(e)
    }
  }

  useEffect(() => {
    getData('USER_INFO')
  },[])

  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'PlusJakartaSans-Regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
    
  });
  if(!fontsLoaded) {
    return null;
  }

  if(loader){
    return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
        <ActivityIndicator size={'large'} color={"#2C8892"}/>
    </View>)
  }
  return (
    <SafeAreaView style={{paddingHorizontal:30}}>
      <View style={{marginTop:40}}>
      <Text  style={styles.headingtexts}>
          Welcome 
        </Text>
        <Text  style={styles.headingtext}>
         {data?((data.data.role<='4')?'Dr. ':''):''}{data?data.data.first_name+' '+data.data.last_name:''}
        </Text>
        <Text style={styles.headingpara}>Log in to your own personal space in one of the fastest growing professional network for doctors. 
        </Text>
    
      <TextInput style={[styelcss.customInputVerifyFullMobile,{ fontFamily: 'PlusJakartaSans-Regular',}]} 
          autoCapitalize="none"
          keyboardType="email-address" 
          placeholder='Email ID / Mobile Number*'
          placeholderTextColor='#51668A'
          onChangeText={(text)=>updateEmail(text)}
         />

      <TextInput style={[styelcss.customInputVerifyFullMobile,{ fontFamily: 'PlusJakartaSans-Regular',}]} 
          autoCapitalize="none"
          placeholder='Password'
          secureTextEntry={showeye}
          onChangeText={(text)=>setregister({...register, 
            password: text,
          })}
          inputType="password"
          placeholderTextColor='#51668A'
          hideShow={showeye}
          fieldButtonFunction={() => {}}
        />
      <Ionicons  style={styles.eyeIcon} name={showeye ? 'eye-off' : 'eye'} size={24} color="#51668A" onPress={() => setshoweye(!showeye)} />
      
      <View style={{justifyContent: 'space-between',flexDirection:'row',paddingHorizontal: 5,paddingBottom:12,alignItems:"center"}}>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginBottom: 20,
            fontStyle: 'normal',
            letterSpacing: 1,
            color: '#51668A',
            fontFamily: 'Inter-Regular',
          }}>
          Remember Me
        </Text>
      </View>

          <Text style={{
            fontSize: 14,
            fontWeight: '600',
            marginBottom: 20,
            fontFamily: 'PlusJakartaSans-Bold',
            fontStyle: 'normal',
            lineHeight: 24,
            letterSpacing: 1,
            color: '#2376E5'}}
            onPress={()=>navigation.navigate('ForgetPassword')}
          >
          Forgot Password?
          </Text>
        </View>
        <Text style={{color:'red' , textAlign:'center', marginBottom:10,fontFamily: 'PlusJakartaSans-Regular' }}>{message}</Text>
        <CustomButton label={"Login"} onPress={() => authLogin()}  />
        <CustomButton label={"Register"} onPress={() => navigation.navigate('Register')}  />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
 
  eyeIcon:{
    zIndex:1, 
    alignSelf:'flex-end', 
    marginTop:-50,
     marginRight:30,
     marginBottom:30
},
red: {
  backgroundColor: 'red',
},
checkbox: {
  marginRight:7,
  color:'blue',
},
headingtexts:{
fontSize:16,
fontFamily:"PlusJakartaSans-Bold",

},
headingtext:{
  fontSize: 20,
  color: '#071B36',
  fontFamily:"PlusJakartaSans-Bold",
},
headingpara:{
   fontFamily: 'Inter-Regular',
   fontSize: 14,
   fontWeight: '400',
   color: '#333',
  //  marginBottom: 24,
   fontStyle: 'normal',
   lineHeight: 20,
   letterSpacing: 0,
   color: '#51668A',
   marginTop:6
},
headingpara2:{
  fontFamily: 'Inter-Regular',
  fontSize: 14,
  fontWeight: '400',
  color: '#333',
  marginBottom: 10,
  //fontFamily: 'Plus Jakarta Sans',
  fontStyle: 'normal',
  letterSpacing: 1,
  color: '#8C97AB',
},
ragistertext:{
  flexDirection: 'row',
  justifyContent: 'center',       
  // position:'absolute',
  // bottom:-90,
  alignSelf:'center'

},
ragistertext2:{
  fontSize: 16,
  fontWeight: '400',
  color:'#51668A',
  fontFamily:"Inter-Regular"
},
section:{flexDirection:'row',justifyContent:'center',},
});

export default LoginScreen;