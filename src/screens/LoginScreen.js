import React,{ useState , useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  } from 'react-native';
import { useDispatch } from "react-redux";
const styelcss = require('../assets/css/style');
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeData, singlestoreData } from '../apis/Apicall';
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
  const isValidemailRegex  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.[a-z]{1,3})+([a-zA-Z0-9]{1,3})|(^[0-9]{10})+$/;
  const [register ,setregister] = useState({email:"",password:""});
  const [data, setdata] = useState();
  const [datarm, setdatarm] = useState();
  const isFocused = useIsFocused();

  const toggleRememberMe = (value) => {
    setChecked(value);
  }

  const  updateEmail = (text)=>{
    if(!isValidemailRegex.test(text)){
        setmessage("Please Enter valid Email address or Phone number.");
    }else{
        setmessage('');
    }
    setregister({ ...register, 
      email: text,
    });
  }

  const authLogin = async ()=>{

    register.email = register.email? register.email : datarm?.data.email;
    register.password = register.password ? register.password :datarm?.data.password ;
    //console.log("line55", register);
    if(register.email !== "" &&  register.password !== "" && register.email !== undefined &&  register.password !== undefined){
      setloader(true)
      const token = await dispatch(userLogin(register));
      if(token.payload.status == 'Success'){
          setloader(false)
          await storeData('USER_INFO',JSON.stringify({
          login:true,
          data:token.payload.session_data
        }));
        if(isChecked){
            storeData('rememberme',JSON.stringify({
            data:{...token.meta.arg, isChecked:isChecked }
          }))
        }else{
          AsyncStorage.removeItem("rememberme")
        }
        singlestoreData('isloggedin','true'); 
          navigation.navigate('HomeScreen');
          setshoweye(true)
      }else{
        setloader(false)
        Toast.show(token.payload.message);
      }
    }else{
      setloader(false)
      setmessage('Please fill the above details');
    }
  }

  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      setdata(jsonValue != null ? JSON.parse(JSON.parse(jsonValue)) : null);
      setloader(false);
    } catch(e) {
     console.log(e)
    }
  }

  const getDatarm = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const result = jsonValue != null ? JSON.parse(JSON.parse(jsonValue)) : null;
      setdatarm(result)
      setChecked(result?.data.isChecked);
      if(result == null){
        setregister({email: "",password :""});
      }
    } catch(e) {
     console.log(e)
    }
  }

  useEffect(() => {
    getData('USER_INFO');
    if(isFocused){
      getDatarm('rememberme');
    }
  },[isFocused])

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
          defaultValue={datarm?.data.email}
          blurOnSubmit={true}
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
          defaultValue={datarm?.data.password}
          blurOnSubmit={true}
        />
      <Ionicons  style={styles.eyeIcon} name={showeye ? 'eye-off' : 'eye'} size={24} color="#51668A" onPress={() => setshoweye(!showeye)} />
      
      <View style={{justifyContent: 'space-between',flexDirection:'row',paddingHorizontal: 5,paddingBottom:12,alignItems:"center"}}>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} 
          value={isChecked} 
          onValueChange={(value) => toggleRememberMe(value)} 
        />
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