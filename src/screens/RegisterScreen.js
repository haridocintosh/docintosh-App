import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import { useFonts } from 'expo-font';
import CustomButton from '../components/CustomButton';
// import DeviceInfo from 'react-native-device-info';
// import { getUniqueId, getManufacturer } from 'react-native-device-info';
import { useDispatch } from "react-redux";
import { SvgUri } from 'react-native-svg';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker'
const styelcss = require('../assets/css/style');
import { getAllSpeciality } from "../../redux/reducers/getSpeciality";
import { checkMobile, userRegisterOne,checkEmail } from '../../redux/reducers/loginAuth';
import Toast from 'react-native-simple-toast';
import {MaterialCommunityIcons, Ionicons, FontAwesome5,Fontisto} from 'react-native-vector-icons';


export default function RegisterScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [checked, setChecked] = useState(4);
  const [checkgender, setcheckgender] = useState('');
  const [err,seterr] =useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [loader, setloader] = useState(false)
  const [fn,fnerr] = useState();
  const [ln,lnerr] = useState();
  const [genderErr,errgender] = useState();
  const [emailIderr, setemail] = useState('');
  const [mobileId, setmobile] = useState('');
  const [userrole,setroleErr] = useState();
  const [docspl, docsplErr] = useState();
  const [spl, setSpl] = useState([
    {label: 'Doctor', value: '1'},
  ]);
  const [openGender, setOpenGender] = useState(false);
  const [valueGender, setValueGender] = useState('');
  
  const [register , setregister] = useState({
    fname : "",
    lname:"",
    email:"",
    mobile:"",
    speciality:"",
    gender:"",
    role:"",
  });

  useEffect(()=>{
    async function fetchSpecialities(){
      const allSpeciality = await dispatch(getAllSpeciality());
   
      setSpl(allSpeciality.payload.map((ele,index)=>{
        return {label: ele.speciality, value: ele.speciality_id};
     }))
    }
    // DeviceInfo.getAndroidId().then((androidId) => {
    //  console.log(androidId);
    // });
    fetchSpecialities()
  },[]);

 

const firstName= (e) =>{
    const isValidnameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
    const name = e;
    if(!isValidnameRegex.test(name)){
      fnerr("Please enter valid Name")
    }else{
      fnerr('');
  }
  setregister({ ...register, 
    fname: name,
  });
}

const lastName= (e) =>{
  const isValidnameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
  const name = e;
  if(!isValidnameRegex.test(name)){
    lnerr("Please enter valid Name")
  }else{
    lnerr('')
  }
  setregister({
    ...register,
    lname: name,
   })
}

const email= async(e)=>{
  const isValidEmailRegex = /^([a-z0-9._]{2,50})([@]{1})([a-z]{2,50}([.]{1})([a-z.]{2,5}))$/;
  const emailid = e;
  if(!isValidEmailRegex.test(emailid)){
    setemail("Please enter valid Email ID")
  }else{
  setemail('')
   const result =  await dispatch(checkEmail({email: e}))
    if(result.payload.status_code="Exists"){
      console.log("frontend",result.payload.message)
      setemail(result.payload.message)
    }
  }

  setregister({
    ...register,
    email: emailid,
   })
}



const phonenumber= async(e)=>{
  const isValidmobileRegex =  /^(\[0-9]?)?\d{10}$/;
  const mobile = e;
  if(!isValidmobileRegex.test(mobile)){
    setmobile("Please enter valid mobile no.")
  }else{
    const result =  await dispatch(checkMobile({mobile: e}))
    //console.log("frontendCheck",result.payload)
    if(result.payload.status_code="Exists"){
      setmobile(result.payload.message)
    }
    // else{
    //   setmobile('')
    // }
  }
  
  setregister({
    ...register,
    mobile: mobile,
   })
}

const selectedspl=(e)=>{
  setregister({
    ...register,
    speciality: e,
   })
   docsplErr('')
}

const selectedgender=(e)=>{
   setregister({
    ...register,
    gender: e,
   })
}

const setuserrole= (e)=>{
  setregister({
    ...register,
    role: e,
   })
}

const form_submit = async() =>{
  // console.log("Doctor",register.mobile);
  // if(!register.fname || !register.lname  || !register.mobile || !register.email || !register.gender || !register.role || !register.speciality || checked === 4 ?!value:''){
  //     seterr("Please fill the above form");
  // }else if(emailId != ''){
  //   setemail("This Email ID is registered with us");
  // }else if(mobileId != ''){
  //   setmobile("This mobile no. is registred with us");

  if(!register.fname){
    fnerr("Please enter First Name");
  }else if(!register.lname){
    lnerr("Please enter Last Name");
  }else if(!register.email){
    setemail("Please enter valid Email ID");
  }
  // else if(emailIderr != ''){
  //   setemail("This Email ID is registered with us");
  // }else if(mobileId !=''){
  //   setemail("This mobile no. is registred with us");
  // }
  else if(!register.mobile){
    setmobile("Pleaes enter valid mobile no.");
  }else if(!register.gender){
    errgender("Please Select gender");
  }else if(!register.role){
    setroleErr("Please Select role");
  }else if(!register.speciality){
    docsplErr("Please Select Speciality");
  }
  else{
    setloader(true)
    const result = await dispatch(userRegisterOne(register));
    setloader(false)
    console.log('Registertkn',result);
    Toast.show(result.payload.message);
    setregister({
      fname : "",
      lname:"",
      email:"",
      mobile:"",
      gender:"",
      role:"",
   })
    navigation.navigate('DoctorOtp', {
      mobile_no : result.payload.mobilenumber,
      email     : result.payload.email,
      user_id   : result.payload.user_id,
      role      : result.payload.role,
    })
    }
  }

  const handleStudentSubmit = async() =>{
    console.log("student",register);
    // if(!register.fname || !register.lname || !register.email || !register.mobile || !register.gender ||  !register.role || checked === 5 ?!value:''){
    //     seterr("Please fill the above form")
    // }else if(emailId != ''){
    //     setemail("This Email ID is registered with us");
    // }else if(mobileId != ''){
    //     setmobile("This mobile no. is registred with us");
    if(!register.fname){
      fnerr("Please enter First Name");
    }else if(!register.lname){
      lnerr("Please enter Last Name");
    }else if(!register.gender){
      errgender("Please Select gender");
    }
    // else if(emailIderr != ''){
    //   setemail("This Email ID is registered with us");
    // }else if(mobileId !=''){
    //   setemail("This mobile no. is registred with us");
    // }
    else if(!register.email){
      setemail("Please enter valid Email ID");
    }else if(!register.mobile){
      setmobile("Pleaes enter valid mobile no.");
    }else if(!register.role){
      setroleErr("Please Select role");
    }else{
      seterr("")
      setemail("");
      setmobile("");
      setloader(true)
      const result = await dispatch(userRegisterOne(register));
      setloader(false)
      setregister({
          fname : "",
          lname:"",
          email:"",
          mobile:"",
          gender:"",
          role:"",
      })
      Toast.show(result.payload.message);
      navigation.navigate('DoctorOtp', {
        mobile_no : result.payload.mobilenumber,
        email     : result.payload.email,
        user_id   : result.payload.user_id,
        role      : result.payload.role,
      })
      }
    }


  
  if(loader){
    return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
        <ActivityIndicator size={'large'} color={"#2C8892"}/>
    </View>)
  }

  return (
    <SafeAreaView style={{ display:"flex",justifyContent: 'center'}}>
          <ScrollView 
          keyboardShouldPersistTaps='handled'
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

  
            {/* <View
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
            </Text> */}

            
       <View style={{ display:"flex" ,flexDirection:"row",alignItems:'center', flexDirection:"column"}}>

        <TextInput style={[styelcss.customInputVerifyFullMobile,{fontFamily: 'PlusJakartaSans-Regular',}]} placeholderTextColor='#687690' placeholder='First name'  onChangeText={(e)=>{firstName(e);}}/>
        <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{fn}</Text>

        <TextInput style={[styelcss.customInputVerifyFullMobile,{fontFamily: 'PlusJakartaSans-Regular',}]}  placeholderTextColor='#687690' placeholder='Last Name' 
        onChangeText={(e)=>{lastName(e);}} />
        <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{ln}</Text>

        <View style={{ display:"flex" ,flexDirection:"row",alignItems:'center',marginTop:12, marginLeft:0 ,width:"100%"}}>
          <Text style={{ fontFamily: 'Inter-Regular',fontSize:16,color:"#51668A"}}>You are :</Text>
          <View>
            <RadioButton 
            value="male" status={ checkgender === 'male' ? 'checked' : 'unchecked' }
            onPress={() => {setcheckgender('male'); selectedgender('male')}} />
            <View  style={{marginTop:-56,zIndex:-1, alignSelf:'center',
            alignItems:'center', paddingVertical:10,
            flexDirection:'row',backgroundColor:'#fff', width:110, borderRadius:20/2}}>
            <View style={{marginRight:20}}></View><Ionicons name="md-male-sharp" size={24} color="#51668A" />
            <Text style={{color:'#51668A',fontSize:16, fontWeight:'400'}}>Male</Text></View>
          </View>
  
          <View style={{flex:0,   borderRadius:20/2, }}>
            <RadioButton 
              value="female"
              status={ checkgender === 'female' ? 'checked' : 'unchecked' }
              onPress={() => {setcheckgender('female'); selectedgender('female')}}
            />

          <View  style={{marginTop:-56,zIndex:-1,alignSelf:'center', alignItems:'center', paddingVertical:10, flexDirection:'row', backgroundColor:'#fff', width:110,height:46, borderRadius:20/2}} ><View style={{marginRight:20}}></View><MaterialCommunityIcons name="gender-female" size={24} color="#51668A" /><Text style={{color:'#51668A',fontSize:16, fontWeight:'400'}}>Female</Text></View>
        </View>
        </View>

        <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{genderErr}</Text>
        <TextInput  style={[styelcss.customInputVerifyFullMobile,{fontFamily: 'PlusJakartaSans-Regular'}]} placeholderTextColor='#687690' autoComplete='off' autoCapitalize="none" keyboardType="email-address" placeholder='Email ID' onChangeText={(e)=>{email(e)}}/>
        <Text style={{color:'red',fontFamily: 'PlusJakartaSans-Regular'}}>{emailIderr !='' && emailIderr}</Text>

        <TextInput style={[styelcss.customInputVerifyFullMobile,{fontFamily: 'PlusJakartaSans-Regular',}]}  placeholderTextColor='#687690' placeholder='Mobile Number' keyboardType="numeric"  onChangeText={(e)=>{phonenumber(e)}}  maxLength={10} />
        <Text style={{color:'red',fontFamily: 'PlusJakartaSans-Regular'}}>{mobileId !='' && mobileId}</Text></View>

        <View style={{ display:"flex" ,flexDirection:"row",alignItems:'center',marginTop:12, marginLeft:0}}>
          <Text style={{ fontFamily: 'Inter-Regular',fontSize:16,color:"#51668A"}}>You are :</Text>
          <View>
            <RadioButton 
            value="4" 
            status={ checked === '4' ? 'checked' : 'unchecked' }
            onPress={() => {setChecked('4'); setuserrole(4)}} />
            <View  style={{marginTop:-56,zIndex:-1,alignSelf:'center',
             justifyContent:'center',
             alignItems:'center',
             paddingVertical:10,
             flexDirection:'row',
             backgroundColor:'#fff', width:110, height:46, borderRadius:20/2}}>
            <Fontisto name="doctor" size={20} color="#51668A" />
             <Text style={{color:'#51668A',marginLeft:5,fontSize:16, fontWeight:'400'}}>
              Doctor
              </Text>
            </View>
          </View>
          <View>
          <RadioButton 
            value="5"
            status={ checked === '5' ? 'checked' : 'unchecked' }
            onPress={() => {setChecked('5'); setuserrole(5)}}
          />
            <View  style={{marginTop:-56,zIndex:-1,alignSelf:'center',
              justifyContent:'center',
              alignItems:'center',
              paddingVertical:10,
              flexDirection:'row',
              backgroundColor:'#fff', width:110, height:46, borderRadius:20/2}}>
              <FontAwesome5 name="user-graduate" size={20} color="#51668A" />
              <Text style={{color:'#51668A', marginLeft:5, fontSize:16, fontWeight:'400'}}>
                Student
              </Text>
            </View>
        </View>

     </View>

     <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{userrole}</Text>
    
    <View style={{alignSelf: 'center' }}>
    {checked === '4'? (
      <DropDownPicker style={styles.customInputVerify}
          open={open}
          value={value}
          items={spl}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setSpl}
          showTickIcon={false}
          searchable={true}
          placeholder="Speciality"
          listMode="MODAL"
          textStyle={{
            fontSize: 16,
            color:"#687690",
            fontFamily: 'PlusJakartaSans-Regular',
          }}
          onChangeValue={(value) => {
            selectedspl(value)
          }}

          listItemLabelStyle={{
            color: "#687690",
            fontWeight:"800",
            borderBottomWidth:1,
            borderBottomColor:"#687690",
            textAlign:"center",
            paddingBottom:10,
          }}
          selectedItemLabelStyle={{
            fontWeight: "900",
            color:"#45B5C0",
            fontSize:18
          }}
          searchContainerStyle={{
            borderBottomColor: "#687690"
          }}
  
        />
        ) : null}
    </View>
    <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{docspl}</Text>

    <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Text style={{color:'red',fontFamily: 'PlusJakartaSans-Regular'}}>{err}</Text>
    </View>

    <View>
      {checked === '4'? ( 
        <CustomButton label={'Continue'}  onPress={() =>{form_submit()}} />
        ) : 
      <CustomButton label={'Continue'}  onPress={() =>{handleStudentSubmit()}} />
      }
    </View>
    
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 30,
        }}>
        <Text>Already registered?</Text>
        <TouchableOpacity >
          <Text style={{color: '#2C8892', fontWeight: '700'}}  onPress={() => navigation.navigate('Login')}> Login</Text>
        </TouchableOpacity>
      </View> */}
      <View>
    </View>
    </ScrollView>
  </SafeAreaView>
      
  );
}


const styles = StyleSheet.create({
  headingtext:{
    fontSize: 24,
    // fontWeight: '700',
    color: '#071B36',
     fontFamily: 'PlusJakartaSans-Bold',
  },
  headingpara:{
     fontSize: 14,
    //  fontWeight: '400',
     color: '#333',
     marginBottom: 30,
     fontFamily: 'Inter-Regular',
     fontStyle: 'normal',
     lineHeight: 20,
    //  letterSpacing: 1,
     color: '#687690',
  },
  headingpara2:{
    fontSize: 14,
    fontWeight: '400',
    color: '#333',
    marginBottom: 10,
    fontFamily: 'Inter-Regular',
    fontStyle: 'normal',
    letterSpacing: 1,
    color: '#8C97AB',
    textAlign: 'center',
  },
  customInputVerify:
    {
    backgroundColor:"transparent",
    // width:320,
    width: "100%",
    height:48,
    marginTop:10,
   borderRadius:0,
    borderBottomWidth:1,
    borderLeftWidth:0,
    borderRightWidth:0,
    borderTopWidth:0,
    borderColor:"#6C81A6",
    paddingLeft:8,
   
   
  },
    
});