import React, {useEffect, useState} from 'react';
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
// import DeviceInfo from 'react-native-device-info';
// import { getUniqueId, getManufacturer } from 'react-native-device-info';
import { useDispatch } from "react-redux";
import { SvgUri } from 'react-native-svg';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker'
const styelcss = require('../assets/css/style');
import { getAllSpeciality } from "../../redux/reducers/getSpeciality";
import { userRegisterOne } from '../../redux/reducers/loginAuth';
import Toast from 'react-native-simple-toast';
import {check_mail} from '../apis/Apicall';


export default function RegisterScreen() {

  const dispatch = useDispatch();

//   const speciality = useSelector((state)=>{
//     return state.myspeciality.speciality;
//   });

//   let loading = useSelector((state)=>{
//     return state.myspeciality.loading;
// });

  const navigation = useNavigation();
  const [checked, setChecked] = useState(4);
  const [err,seterr] =useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [spl, setSpl] = useState([
    {label: 'Doctor', value: '1'},
  ]);

  const [openGender, setOpenGender] = useState(false);
  const [valueGender, setValueGender] = useState('');
  const [gender, setGender] = useState([
    {label: 'Male', value: '1'},
    {label: 'Female', value: '2'},
    {label: 'Other', value: '3'},
  ]);

  const [register , setregister] = useState({
    fname : "",
    lname:"",
    email:"",
    mobile:"",
    speciality:"",
    gender:"",
    role:"",
  });


  // const [studentReg , setstudentReg] = useState({
  //   fname : "",
  //   lname:"",
  //   email:"",
  //   mobile:"",
  //   speciality_id:"",
  //   role:checked
  // });

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

  // const checkmail= (e)=>{
  //   check_mail(e)
  //   .then(res => {
  //     console.log("checkstatus",res['status']);
  //      if(res['status'] == 'Success'){
  //         setemail(e);
  //      }
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

const firstName= (e) =>{
    const isValidnameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
    const name = e;
    if(!isValidnameRegex.test(name)){
      seterr("Please enter valid Name")
    }else{
      seterr('');
  }
  setregister({ ...register, 
    fname: name,
  });
}

const lastName= (e) =>{
  const isValidnameRegex = /^[a-zA-Z]+[a-zA-Z]+$/;
  const name = e;
  if(!isValidnameRegex.test(name)){
     seterr("Please enter valid Name")
  }else{
    seterr('')
  }
  setregister({
    ...register,
    lname: name,
   })
}

const email=(e)=>{
  const isValidEmailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const emailid = e;
  if(!isValidEmailRegex.test(emailid)){
     seterr("Please enter valid Email")
  }else{
     seterr("")
  }
  setregister({
    ...register,
    email: emailid,
   })
}

const phonenumber=(e)=>{
  const isValidmobileRegex =  /^(\[0-9]?)?\d{10}$/;
  const mobile = e;
  if(!isValidmobileRegex.test(mobile)){
     seterr("Please enter valid Mobile")
  }else{
    seterr('')
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
  console.log(register);
  if(!register.fname || !register.lname || !register.email || !register.mobile || !register.gender ||checked === 4 ?!value:''){
  //  const token = await dispatch(userLogin(register));
      seterr("Please fill the above form");
  }else{
    const result = await dispatch(userRegisterOne(register));
    // console.log('Registertkn',result);
    Toast.show(result.payload.message);
      navigation.navigate('DoctorOtp',{
        mobile_no : result.payload.mobilenumber,
        email     : result.payload.email,
        user_id   : result.payload.user_id,
        role      : result.payload.role,
      })
    }
  }


  const handleStudentSubmit = async() =>{
    console.log(register);
    if(!register.fname || !register.lname || !register.email || !register.mobile || !register.gender ||checked === 5 ?!value:''){
        seterr("Please fill the above form")
    }else{
      const result = await dispatch(userRegisterOne(register));
     // console.log('Registertkn',result);
      Toast.show(result.payload.message);
      navigation.navigate('DoctorOtp', {
        mobile_no : result.payload.mobilenumber,
        email     : result.payload.email,
        user_id   : result.payload.user_id,
        role      : result.payload.role,
      })
      }
    }

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

            
       <View style={{ display:"flex" ,flexDirection:"row",alignItems:'center', flexDirection:"column"}}>

        <TextInput style={styelcss.customInputVerifyFullMobile} placeholder='First name'  onChangeText={(e)=>{firstName(e);}}/>

        <TextInput style={styelcss.customInputVerifyFullMobile}  placeholder='Last Name' 
        onChangeText={(e)=>{lastName(e);}} />
    
        <TextInput  style={styelcss.customInputVerifyFullMobile}  keyboardType="email-address" placeholder='Email ID' onChangeText={(e)=>{email(e)}}/>

        <TextInput style={styelcss.customInputVerifyFullMobile}  placeholder='Mobile Number' keyboardType="numeric" maxLength={10}  onChangeText={(e)=>{phonenumber(e)}}/>

        <View style={{alignSelf:'center'}}>
          <DropDownPicker style={styles.customInputVerify}
              open={openGender}
              value={valueGender}
              items={gender}
              setOpen={setOpenGender}
              setValue={setValueGender}
              setItems={setGender}
              placeholder="Gender"
              listMode="SCROLLVIEW"
              textColor=""
              onChangeValue={(value) => {
                selectedgender(value)
              }}
            />
      </View>
      </View>

        <View style={{ display:"flex" ,flexDirection:"row",alignItems:'center',}}>
          <Text>You are :</Text>
          <View>
            <RadioButton 
            value="4" status={ checked === '4' ? 'checked' : 'unchecked' } 
            onPress={() => {setChecked('4'); setuserrole(4)}} /> 
            <Image source={require('../assets/images/doctor.png')} style={{marginTop:-64,zIndex:-1,marginLeft:-4}} />
          </View>
  
          <View style={{flex:0,}}>
            <RadioButton style={{backgroundColor:"red"}}
              value="5"
              status={ checked === '5' ? 'checked' : 'unchecked' }
              onPress={() => {setChecked('5'); setuserrole(5)}}
            />
          <Image source={require('../assets/images/student.png')} style={{marginTop:-64,zIndex:-1,marginLeft:-4}} />
        </View>
     </View>
    
    <View style={{alignSelf: 'center' }}>
    {checked === '4'? (
      <DropDownPicker style={styles.customInputVerify}
          open={open}
          value={value}
          items={spl}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setSpl}
          placeholder="Speciality"
          listMode="SCROLLVIEW"
          textColor=""
          onChangeValue={(value) => {
            selectedspl(value)
          }}
        />
        ) : null}
    </View>

      <View style={{ marginBottom: 30}} ></View>

      <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

      <Text style={{color:'red'}}>{err}</Text>

    

      {/* <CustomButton label={'Continue'} onPress={() => navigation.navigate('OtpVerification', {
        mobile_no : '9029634011',
        email : 'tara@gmail.com',
        user_id :'228737',
      }
      )} /> */}
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
    textAlign: 'center',
  },
  customInputVerify:
    {backgroundColor:"transparent",
    fontSize:16,color:"#071B36",
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
    textColor:'red',
    tintColor:'#ffffff',
    color:"red!important"
  },
    
});