import { View,
    Text, 
    SafeAreaView,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TextInput
     } from 'react-native';
 import React, { useState, useEffect } from 'react';
 
 import { useNavigation } from '@react-navigation/native';
 import CustomButton from '../components/CustomButton';
 // import Otp from '../components/Otp';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import { quicklogin, verifyOtp } from '../apis/Apicall';
 import OTPTextView from 'react-native-otp-textinput';
 import { useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';
 import { doctorOtp } from '../../redux/reducers/otpSlice';
 
 const DoctorOtp = ({route}) => {
   const dispatch = useDispatch(); 
   //console.log(route.params);
   const {mobile_no, email, user_id, role} = route.params;
   const [phone ,setPhone] =useState("");
   const navigation = useNavigation();
   const [counter, setCounter] = useState(15);
   const [otpInput, setotpInput ] = useState('');
   const [message , setmessage] = useState();
 
   const userRegister = ()=>{
       quicklogin(email,mobile_no)
        .then(res => {
         console.log(res['status']);
          if(res['status'] == 'Success'){
           setTimeout(() => {
             // navigation.navigate('OtpVerification', {
             //   mobile_no : register.mobile_no,
             //   email : register.email,
             // })
            }, 1000);
          }
       })
       .catch(err => {
         setmessage('Error occured!');
         // setErrorType('server');
         // setProcessingState('');
         console.log(err);
       });
     };
 
 
     const submitOtp = async()=>{
       if(otpInput !== ""){
         console.log(otpInput);
         console.log(user_id);
         const result = await dispatch(doctorOtp({user_id:user_id, otp:otpInput, user_role:role}));
         console.log('doctorOtp',result);
         Toast.show(result.payload.message);
         if((result.payload.role == '4') && (result.payload.status == 'Success')){
            navigation.navigate('RegisterTwoScreen', {
                user_id   : result.payload.user_id,
                fullname  : result.payload.fullname,
                role      : result.payload.role,
            })
        }else{
          if(result.payload.status == 'Success'){
            navigation.navigate('RegisterStudentScreen', {
              user_id   : result.payload.user_id,
              fullname  : result.payload.fullname,
              role      : result.payload.role,
          }) 
         }
         
        }
         
       }else{
           setmessage('Please Enter Otp');
       }
    };
     

   useEffect(() => {
       const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
       return () => clearInterval(timer);
   }, [counter]);
 
  
   return (
     <SafeAreaView style={{paddingTop:120,paddingHorizontal:20}}>
       <ScrollView
             showsVerticalScrollIndicator={false}
             nestedScrollEnable={true}
           
             >
  <View style={styles.topImgVerify}>
         <Image source={require('../assets/images/image-verification-otp.png')}  />
     </View>
     <Text style={styles.verifyText}>
     Please enter OTP sent to 
     </Text>
     <View style={styles.InputFieldVerify}>
     <TextInput style={{fontSize:16,color:"#071B36",paddingRight:12}} 
          autoCapitalize="none"
          keyboardType="email-address"
          value={mobile_no}
          onChangeText={e=>
           setPhone(e)
          }
        />
 <Icon name="pencil" size={20} color="#2c9dd1"/>    
     </View>
     {/* <Otp/> */}
 
     <OTPTextView 
           handleTextChange={(text) => setotpInput(text)}
           containerStyle={styles.textInputContainer}
           textInputStyle={styles.roundedTextInput}
           inputCount={4}
         />
         <View
           style={styles.verifiactionSubText}>
           <Text style={styles.verifiactionInnerText}>Didn’t Receive OTP? </Text>
           <TouchableOpacity>
             <Text style={{color: '#2376E5', fontWeight: '600',fontSize:16,}} onPress={() => userRegister()}  >Resend in {counter}s</Text>
           </TouchableOpacity>
         </View>
         <Text style={{color:'red'}}>{message}</Text>
    <View>
       <View style={{paddingHorizontal:6}}>
   
         <CustomButton label={"Verify"}  onPress={()=>submitOtp()} />
 
         <CustomButton label={"Continue"}  onPress={() => navigation.navigate('RegisterTwoScreen')} />
         </View>
       </View>
       </ScrollView>
     </SafeAreaView>
    
   )
 }
 
 
 const styles = StyleSheet.create({
   topImgVerify:{
     paddingTop:50,
     display:"flex",
     justifyContent:"center",
     alignItems:"center"
   },
   verifyText:{
     textAlign:"center",
     fontSize:16,
     color:"#071B36",
     lineHeight:40,
     fontWeight:"400",
     marginTop:17,
   },
   verifiactionSubText:{
     flexDirection: 'row',
     justifyContent: 'center',       
    paddingBottom:32,
    marginTop:-8,
   },
   verifiactionInnerText:{
     fontSize: 16,
     fontWeight: '400',
     color:'#8C97AB',
   },
   InputFieldVerify:{
 display:"flex",
 flexDirection:"row",
 justifyContent:"center",
 marginBottom:25,
 
   },
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
    
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   instructions: {
     fontSize: 22,
     fontWeight: '500',
     textAlign: 'center',
     color: '#333333',
     marginBottom: 20,
   },
   textInputContainer: {
     marginBottom: 20,
   },
   roundedTextInput: {
     borderRadius: 10,
     borderWidth: 1,
   },
   buttonWrapper: {
     flexDirection: 'row',
     justifyContent: 'space-around',
     marginBottom: 20,
     width: '60%',
   },
   textInput: {
     height: 40,
     width: '60%',
     borderColor: '#000',
     borderWidth: 1,
     padding: 10,
     fontSize: 16,
     letterSpacing: 5,
     marginBottom: 10,
     textAlign: 'center',
   },
   buttonStyle: {
     marginHorizontal: 20,
   }
 
 })
 export default DoctorOtp