  import {  
    View,
    Text, 
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput
  } from 'react-native'
  import React, {useState, useEffect} from 'react'
  import Icon from 'react-native-vector-icons/FontAwesome';
  import CustomButton from '../components/CustomButton';
  import DropDownPicker from 'react-native-dropdown-picker';
  import { useDispatch } from 'react-redux';
  import { useNavigation } from '@react-navigation/native';
  import { getAllUniversity } from '../../redux/reducers/getSpeciality';
  import { getcollegelist } from '../../redux/reducers/getSpeciality';
  import * as ImagePicker from 'expo-image-picker';
  import { userRegisterSecond } from '../../redux/reducers/loginAuth';
  import Toast from 'react-native-simple-toast';
  import Ionicons from 'react-native-vector-icons/Ionicons';
 
  import { ZoomIn } from 'react-native-reanimated';
  const RegisterStudentScreen = ( {route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showeye, setshoweye] = useState(true);
  const {user_id,fullname,role} = route.params;
  const [register , setregister] = useState({
    pincode : "",
    university:"",
    college:"",
    password:"",
    profile_pic:"",
    mrnproof:"",
    role:role,
    user_id:user_id
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);

  const [openState, setOpenState] = useState(false);
  const [valueState, setValueState] = useState(null);
  const [err,seterr] = useState();
  const [imgurl,setimgurl]=useState()
  const [profileurl,setprofileurl]=useState()
  const [submitbtn,setsubmitbtn]=useState(false)
  const [university, setUniversity] = useState([
    {label: 'Male', value: '1'},
  ]);
  const SelectList=[
    {label: 'Please Select University', value: '1'},
  ]
  const [college, setcollege] = useState();


  const Pincode= (e) =>{
    const isValidnameRegex = /^(\[0-9]?)?\d{6}$/;;
    const pincode = e;
    if(!isValidnameRegex.test(pincode)){
      seterr("Please enter valid Pincode")
    }else{
      seterr('');
  }
  setregister({ ...register, 
    pincode: pincode,
  });
}





const setPassword= (e) =>{
  setregister({ ...register, 
    password: e,
  });
}


  
  useEffect(()=>{
    async function fetchUniversity(){
      const allUniversity = await dispatch(getAllUniversity());
      setUniversity(allUniversity.payload.university.map((ele,index)=>{
        return {label: ele.university_name, value: ele.university_id};
     }))
    }
    fetchUniversity()
    //console.log("cl")
  },[]);

  const setuniversity= (e) =>{
    setregister({ ...register, 
      university: e,
    });
    if(e!=null){
      fetchCollege(e)
    }
    async function fetchCollege(e){
      const university1={
        "university_id":e
      }
      const allCollege = await dispatch(getcollegelist(university1));
 
        setcollege(allCollege.payload.college.map((ele,index)=>{
          return {label: ele.collegename, value: ele.college_id};
       }))    
    }
  }

  const setCollege= (e) =>{
    setregister({ ...register, 
      college: e,
    });
  }

  //Image Picker//


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
  
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    let localUri = result.uri;
    setimgurl(localUri)
        let filename = localUri.split('/').pop();
        // Infer the type of the image
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;
        let uriParts = localUri.split('.');
        let fileType = uriParts[uriParts.length - 1];
        let formData = new FormData();
        const imageData = {
          uri : localUri,
          name: filename,
          type: `image/${fileType}`,
        }
      
        formData.append('mrnproof', imageData);
        const responce = await fetch(`https://docintosh.com/ApiController/image_upload`, {
          method : 'POST',
          headers:{
              'Content-Type': 'multipart/form-data'
          },
          body :formData
       });
  
      const result1=  await responce.json();
  
      setregister({ ...register, 
        mrnproof: result1,
      });
  
  
  };
  
  
  const pickprofile = async () => {
    // No permissions request is necessary for launching the image library
  
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    let localUri = result.uri;
    setprofileurl(localUri)
        let filename = localUri.split('/').pop();
      
        // Infer the type of the image
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;
        
  
        let uriParts = localUri.split('.');
        let fileType = uriParts[uriParts.length - 1];
        let formData = new FormData();
        const imageData = {
          uri : localUri,
          name: filename,
          type: `image/${fileType}`,
        }
      
        formData.append('profile_pic', imageData);
        const responce = await fetch(`https://docintosh.com/ApiController/image_upload`, {
          method : 'POST',
          headers:{
              'Content-Type': 'multipart/form-data'
          },
          body :formData
       });
  
      const result1=  await responce.json();
     
      setregister({ ...register, 
        profile_pic: result1,
      });
  };


  const form_submit = async() =>{
    if(!register.pincode || !register.university || !register.college || !register.password || !register.profile_pic || !register.mrnproof){
    //  const token = await dispatch(userLogin(register));
    // console.log(register)
        seterr("Please fill the above form");
    }else{
      // console.log("gg");
      setsubmitbtn(true);
      const result = await dispatch(userRegisterSecond(register));
      // console.log('Registertkn',result);
      Toast.show(result.payload.message);
        if(result.payload.status == 'Success'){
          console.log("success");
          navigation.navigate('Login')
        }
      }
    }
 


  return (
    <SafeAreaView style={{flex: 0, justifyContent: 'center',paddingTop:10}}>
    <ScrollView
      showsVerticalScrollIndicator={true}
      nestedScrollEnable={true}>
      <View style={styles.suceesheadBox}>
       <View style={styles.registermainText}>
            {/* <Icon style={{backgroundColor:"#128244",borderRadius:50,padding:8}}
            name="check"
            size={20}
            color="#fff"
            /> */}
             <Image style={{width:56,height:56,borderRadius:50}} source={profileurl?{ uri: profileurl }:require('../assets/images/p2.png')}/>
           
            <View style={styles.headtopInner}>
                <Text style={styles.headText}>{fullname}</Text>
                <TouchableOpacity onPress={pickprofile}>
        <View>
       
        <Text>Edit Profile Photo</Text>
        </View>
        </TouchableOpacity>
          
            </View>
            </View>
        </View>
        <View style={styles.verificationForm}>
        <TextInput style={styles.customInputVerifyFull } 
         autoCapitalize="none"
         keyboardType="number-pad"
         placeholder='PIN Code*'
         onChangeText={(e)=>{Pincode(e);}}
       />
       {/* <Text style={{fontSize:12,marginBottom:10,marginTop:-4,color:"#51668A"}}>Bangalore,Karnataka</Text> */}

       {/* <TextInput style={styles.customInputVerifyFull } 
         autoCapitalize="none"
         keyboardType="default"
         placeholder='University*'
       /> */}
    <Text>{console.log("text",college)}</Text>
            <DropDownPicker style={[styles.customInputVerify,styles.customInputVerifyun]}
                open={open}
                value={value}
                items={university}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setUniversity}
                placeholder="University"
                listMode="SCROLLVIEW"
                textColor=""
                onChangeValue={(value) => {
                  if(value!=null){
                    setuniversity(value)
                  }
                 
                }}
              />


            <DropDownPicker style={styles.customInputVerify}
                open={open1}
                value={value1}
                items={college?college:SelectList}
                setOpen={setOpen1}
                setValue={setValue1}
                setItems={setcollege}
                placeholder="college"
                listMode="SCROLLVIEW"
                textColor=""
                onChangeValue={(value) => {
                  if(value!=null){
                    setCollege(value)
                  }
                  
                }}
              />
        <TextInput style={styles.customInputVerifyFull } 
         autoCapitalize="none"
         placeholder='Set Password*'
         hideShow={showeye}
         secureTextEntry={showeye}
        // onChangeText={(e)=>{setPassword(e)}}
         onChangeText={(text)=>setregister({...register, 
          password: text,
        })}
       />
      <Ionicons  style={styles.eyeIcon} name={showeye ? 'eye-off' : 'eye'} size={24} color="#51668A" onPress={() => setshoweye(!showeye)} />
     
     <Text style={styles.headTexts}>Upload a JPG for MRN Document</Text>
    
     <View>
    <TouchableOpacity onPress={pickImage}>
      <View style={{borderColor:"#D5DEED",borderRadius:4,borderStyle: 'dashed',borderWidth:1.4,width:"100%",height:102,justifyContent:"center",alignItems:"center"}}>
      <Image source={require('../assets/icons/upload-img.png')} style={{alignSelf:"center"}}  /> 
      <Text style={{textAlign:"center",fontSize:14,color:"#2376E5",fontWeight:"600",paddingVertical:6}}>Upload your file</Text>
      <Text style={{textAlign:"center",fontSize:12,color:"#51668A",fontWeight:"400"}}>Upload JPG max 2MB</Text>
      </View>
      </TouchableOpacity>
       <View style={{paddingBottom:14}}></View>
        {imgurl && <Image source={{ uri: imgurl }} style={{ width: 320, height: 320 ,}} />}
        {/* <Text>{register.mrnproof}</Text> */}
        </View>
   
  
     <View style={styles.verifyNextFooterpara}>
        <Text style={styles.headTextpara}> </Text>
   
        <View style={{
                flexDirection:"row"
              }}>
          <Text onPress={() => navigation.navigate('Verification')}>By continuing, you agree to the </Text>
          <TouchableOpacity >
            <Text style={{color: '#2376E5', fontWeight: '700',fontSize:14}}>Terms & Conditions </Text>
          </TouchableOpacity>
        </View>
      </View>
  
      <Text style={{color:'red'}}>{err}</Text>
      {submitbtn?<CustomButton label={'Submitting...'}  />:<CustomButton label={'Continue'} onPress={() => form_submit()} />}
            
       
        </View>
         </ScrollView>
        </SafeAreaView>
  )
  }
  
  
  const styles = StyleSheet.create({
    eyeIcon:{
      zIndex:1, 
      alignSelf:'flex-end', 
      marginTop:-50,
       marginRight:30,
       marginBottom:30
    },
    registermainText:{
  display:"flex",
  alignItems:"center",
  flexDirection:"row",
  
    },
    suceesheadBox:{
      backgroundColor:"#F2FAFA",
      width:"100%",
     paddingHorizontal: 20,
     paddingVertical:12,
     marginBottom:10
    },
    headtopInner:{
        paddingLeft:18,
     
    },
    verificationForm:{
     paddingHorizontal:20,
  
    },
    headText:{
        color:"#071B36",
        fontSize:16,
        fontWeight:"600",
    },
    headTexts:{
      color:"#071B36",
      fontSize:16,
      fontWeight:"600",
      marginTop:16,
  },
    headPara:{
        color:"#2376E5",
        fontSize:14,
        fontWeight:"400",
        fontWeight: "600",
    },
    multiInput:{
     
        display:"flex",
        flexDirection:"row", 
      alignItems:"center",
      width:"100%"
      
    
    },
    multiInputR:{
     
      display:"flex",
      flexDirection:"row", 
    alignItems:"center",
    width:"100%"
    
  
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
  color:"red!important",
  zIndex:1
},
customInputVerifyun:
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
color:"red!important",
ZoomIn:9999
},
  customInputVerifyselect:{
      fontSize:14,
      color:"#071B36",
      marginTop:10,
      width:"48%",
      height:48,
      borderBottomWidth:1,
      borderRightWidth:0,
      borderTopWidth:0,
      borderLeftWidth:0,
      borderColor:"#6C81A6",
      borderRadius:0,
      paddingLeft:8,
      backgroundColor:"transparent"
    
  },
    customInputVerifyFull:{
        fontSize:14,
        color:"#071B36",
        height:48, 
        width:"100%",
        borderBottomWidth:1,
        paddingRight:19,
        borderColor:"#6C81A6",
        // borderRadius:8,
        marginVertical:12,
        paddingLeft:8,
        
  
    },
    headTextpara:
    {
        fontSize:14,
        fontWeight:"400",
        color:"#071B36"
    },
    verifyNextFooterpara:{
      marginVertical:12
    }
  })
  
  export default RegisterStudentScreen