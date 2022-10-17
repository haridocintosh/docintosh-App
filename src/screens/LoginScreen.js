import React,{ Dimensions, useState , useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
const styelcss = require('../assets/css/style');
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
import CustomButton from '../components/CustomButton';
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login, storeData, singlestoreData } from '../apis/Apicall';
import { userLogin } from '../../redux/reducers/loginAuth';
import Toast from 'react-native-simple-toast';


const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [data, setdata] = useState();
  const [showeye, setshoweye] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const [message , setmessage]  = useState();
  const isValidemailRegex       =  /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const [register ,setregister] = useState({
    email:"",
    password : "",
  });

  let userData = useSelector((state)=>{
   // console.log(state);
    return state.mylogin.userName;
});

  const updateEmail = (text)=>{
    //console.log(text);
    if(!isValidemailRegex.test(text)){
        setmessage("Please enter valid email");
    }else{
        setmessage('');
    }
    setregister({ ...register, 
      email: text,
    });
  }

  // const userLogin = ()=>{
  //   console.log(register.email, register.password);
  //   if(register.email !== "" &&  register.password !== ""){
  //     login(register.email, register.password)
  //      .then(res => {
  //       // setProcessingState('saved');
  //       // console.log(res['status']);
  //     //  console.log(register.mobile_no);
  //        if(res['status'] == 'Success'){
  //         setTimeout(() => {
  //           // return <AppStack/>;
          
  //          navigation.navigate('Home')

  //         //  props.navigation.navigate('drawer', {
  //         //   screen: 'TabNavigator',
  //         // });
  //          },1000);
  //        }
  //     })
  //     .catch(err => {
  //       setmessage('Error occured!');
  //       // setErrorType('server');
  //       // setProcessingState('');
  //       console.log(err);
  //     });
  //   }else{
  //       setmessage('Please fill the above form');
  //     }
  //   };

  const authLogin = async (e)=>{
    // console.log("Form");
    if(register.email !== "" &&  register.password !== ""){
      const token = await dispatch(userLogin(register));
    console.log('lgitokm',token);
      if(token.payload.status == 'Success'){
        storeData('USER_INFO',JSON.stringify({
          login:true,
          data:token.payload.session_data
        }))
        //singlestoreData('usertoken','userloginData');
        singlestoreData('isloggedin','true'); 
     //   Toast.show(token.payload.message);
          navigation.navigate('Home')
      }else{
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
      setmessage('Please fill the above form');
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
     //  console.log(jsonValue);
      setdata(jsonValue != null ? JSON.parse(JSON.parse(jsonValue)) : null)
    } catch(e) {
     console.log(e)
    }
}

  useEffect(() => {
    getData('USER_INFO')
  },[])

  return (
    <SafeAreaView style={{paddingHorizontal:30}}>
      <View style={{marginTop:40}}>
      
        <Text  style={styles.headingtext}>
          Welcome {data?((data.data.role<='4')?'Dr.':''):''}{data?data.data.first_name+' '+data.data.last_name:'' }
        </Text>
        <Text style={styles.headingpara}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          {userData}
        </Text>
    
      <TextInput style={styelcss.customInputVerifyFullMobile} 
          autoCapitalize="none"
          keyboardType="email-address" 
          placeholder='Email ID'
          onChangeText={(text)=>updateEmail(text)}
         />

      <TextInput style={styelcss.customInputVerifyFullMobile} 
          autoCapitalize="none"
          placeholder='Password'
          secureTextEntry={showeye}
          onChangeText={(text)=>setregister({...register, 
            password: text,
          })}
          inputType="password"
          hideShow={showeye}
          fieldButtonFunction={() => {}}
        />
      <Ionicons  style={styles.eyeIcon} name={showeye ? 'eye-off' : 'eye'} size={24} color="#51668A" onPress={() => setshoweye(!showeye)} />
      
      <View style={{display:'flex', justifyContent: 'space-between',flexDirection:'row',paddingHorizontal: 5,paddingBottom:12,}}>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginBottom: 20,
            fontStyle: 'normal',
            lineHeight: 15,
            letterSpacing: 1,
            color: '#687690',
          }}>
        Remember Me
          </Text>
      </View>

          <Text style={{
         // fontFamily: 'Inter_900Black',
            fontSize: 14,
            fontWeight: '600',
            marginBottom: 20,
           // fontFamily: 'Inter',
            fontStyle: 'normal',
            lineHeight: 24,
            letterSpacing: 1,
            color: '#2376E5'}}
            onPress={()=>navigation.navigate('ForgetPassword')}
          >
          Forgot Password?
          </Text>
        </View>
        <Text style={{color:'red' , textAlign:'center' }}>{message}</Text>
        <CustomButton label={"Login"} onPress={() => authLogin()}  />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text style={styles.headingpara2}>or</Text>
          
        </View>
       <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 30,
          }}>
        
          <SvgUri width="56" height="56" uri="https://www.brandcare.net/Docintosh_Svg/google.svg" />
          <SvgUri width="56" height="56" uri="https://www.brandcare.net/Docintosh_Svg/linkdin.svg" />
          <SvgUri width="56" height="56" uri="https://www.brandcare.net/Docintosh_Svg/facebook%20%282%29.svg" />
        </View>

        <View
          style={styles.ragistertext}>
          <Text style={styles.ragistertext2}>Already a member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#2376E5', fontWeight: '600',fontSize:16,}} > Register</Text>
          </TouchableOpacity>
        </View>
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
  marginBottom: 10,
  //fontFamily: 'Plus Jakarta Sans',
  fontStyle: 'normal',
  letterSpacing: 1,
  color: '#8C97AB',
},
ragistertext:{
  flexDirection: 'row',
  justifyContent: 'center',       
  position:'absolute',
  bottom:-90,
  alignSelf:'center'

},
ragistertext2:{
  fontSize: 16,
  fontWeight: '400',
  color:'#8C97AB',
},
section:{display:'flex',flexDirection:'row',justifyContent:'center'},
});

export default LoginScreen;