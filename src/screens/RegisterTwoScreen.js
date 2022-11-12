import {  
  View,
  Text, 
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground, 
  Image,
  TextInput} from 'react-native'
import React, {useEffect, useState, useCallback} from 'react'
import { useDispatch } from 'react-redux';
import { Camera, CameraType } from 'expo-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';  // not react-image-picker
import { useNavigation } from '@react-navigation/native';
import { getAllState } from '../../redux/reducers/getSpeciality';
import { userRegisterSecond } from '../../redux/reducers/loginAuth';
import Toast from 'react-native-simple-toast';
//import DocumentPicker from "react-native-document-picker/index";

const RegisterTwoScreen = ( {route} ) => {
const navigation  = useNavigation();
const dispatch    = useDispatch();
  //console.log(route.params);
  const {user_id,fullname,role} = route.params;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [openState, setOpenState] = useState(false);
  const [valueState, setValueState] = useState(null);
  const [err,seterr] = useState();
  const [resourcePath,setResourcePath] = useState({});
  const [showeye, setshoweye] = useState(true);
  // const [type, setType] = useState(CameraType.back);
  // const [permission, requestPermission] = Camera.useCameraPermissions();
  function toggleCameraType() {
    setType((current) => (
      current === CameraType.back ? CameraType.front : CameraType.back
    ));
  }
  const [items, setItems] = useState([
    {label: '1970', value: '1970'}
  ]);

  const [state, setState] = useState([
    {label: 'Maharashtra', value: 'Maharashtra'},
  ]);

  const [imgurl,setimgurl]=useState()
  const [profileurl,setprofileurl]=useState()
  const [submitbtn,setsubmitbtn]=useState(false)

  const onMrnOpen = useCallback(() => {
    setOpenState(false);
  }, []);

  const onStateOpen = useCallback(() => {
    setOpen(false);
  }, []);

  const [register , setregister] = useState({
    pincode : "",
    mrn:"",
    mry:"",
    medicalcouncil_id:"",
    speciality:"",
    password:"",
    profile_pic:"",
    mrnproof:"",
    role:role,
    user_id:user_id
  });

 
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

const mrnID= (e) =>{
  setregister({ ...register, 
    mrn: e,
  });
}

const mrnYear= (e) =>{
  setregister({ ...register, 
    mry: e,
  });
}

const stateCouncil= (e) =>{
  setregister({ ...register, 
    medicalcouncil_id: e,
  });
}

const setPassword= (e) =>{
  setregister({ ...register, 
    password: e,
  });
}

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
 
 
useEffect(()=>{
  const year = 1972;
  const currentYear =(new Date()).getFullYear();
  const years = Array.from(new Array(51),(val, index) => index + year);

  const years_list = years.filter((e)=>{
    return e <= currentYear;
    }).map((ele, index)=>{
    return {label: ele, value: ele};
  });

    setItems(years_list);

    async function fetchState(){
      const allState = await dispatch(getAllState());
      setState(allState.payload.map((ele,index)=>{
        return {label: ele.state, value: ele.state_id};
     }))
    }
    fetchState();
  },[]);

//||checked === 4 ?!value:''
  const form_submit = async() =>{
    if(!register.pincode || !register.mrn || !register.mry || !register.medicalcouncil_id || !register.password || !register.profile_pic || !register.mrnproof ){
    //  const token = await dispatch(userLogin(register));
        seterr("Please fill the above form");
    }else{
      //console.log("gg");
      setsubmitbtn(true);
      const result = await dispatch(userRegisterSecond(register));
      console.log('Registertkn',result);
      Toast.show(result.payload.message);
        if(result.payload.status == 'Success'){
          console.log("success");
          navigation.navigate('SelectInterest', {
            user_id : user_id,
          })
        }else{
          
        }
      }
    }
 

return (
  <SafeAreaView style={{flex: 0, justifyContent: 'center',paddingTop:10}}>
  <ScrollView
    showsVerticalScrollIndicator={true}
    nestedScrollEnable={true}
    
    >
    <View style={styles.suceesheadBox}>
     <View style={styles.registermainText}>
          {/* <Icon style={{backgroundColor:"#128244",borderRadius:50,padding:8}}
          name="check"
          
          size={20}
          color="#fff"
          /> */}
          <Image style={{width:56,height:56,borderRadius:50}} source={profileurl?{ uri: profileurl }:require('../assets/images/p2.png')}/>
         
          <View style={styles.headtopInner}>
              <Text style={styles.headText}>Dr. {fullname}</Text>
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
     <Text style={{fontSize:12,marginBottom:10,marginTop:-4,color:"#51668A"}}>Bangalore,Karnataka</Text>
      <View style={styles.multiInput}>
      <TextInput style={styles.customInputVerify} 
       autoCapitalize="none"
       keyboardType="default"
       placeholder='MRN ID*'
       onChangeText={(e)=>{mrnID(e)}}
     />
     
      <DropDownPicker style={styles.customInputVerifyselect}
        open={open}
        onOpen={onMrnOpen}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="MRN Year*"
        autoScroll={true}
        searchable={false}
        listMode="MODAL"
        containerStyle={{width:"50%",
        zIndex: 9999
      }}
        onChangeValue={(value) => {
          mrnYear(value)
        }}
      />
     
      </View>
      <View style={{paddingTop:12}}>
      {/* <TextInput style={styles.customInputVerifyFull} 
       autoCapitalize="none"
       placeholder='State Council*'
     /> */}

      <DropDownPicker style={styles.customInputVerifyselectFull}
          open={openState}
          onOpen={onStateOpen}
          value={valueState}
          items={state}
          setOpen={setOpenState}
          setValue={setValueState}
          setItems={setState}
          placeholder="State Council*"
          searchable={true}
          listMode="MODAL"
          containerStyle={{
          zIndex: 1
        }}
          onChangeValue={(value) => {
            stateCouncil(value)
          }}
        />

      <TextInput style={styles.customInputVerifyFull } 
        autoCapitalize="none"
        placeholder='Set Password*'
        onChangeText={(text)=>setregister({...register, 
          password: text,
        })}
        hideShow={showeye}
        secureTextEntry={showeye}
      //  onChangeText={(e)=>{setPassword(e)}}
     />
    <Ionicons  style={styles.eyeIcon} name={showeye ? 'eye-off' : 'eye'} size={24} color="#51668A" onPress={() => setshoweye(!showeye)} />
   <Text style={styles.headTexts}>Upload a JPG for MRN Document</Text>
  
  {/* <Image_Picker onPress={toggleCameraType}/> */}

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
        </View>


   <View style={styles.verifyNextFooterpara}>
      <Text style={styles.headTextpara}> </Text>
 
      <View style={{ flexDirection:"row" }}>
            <Text onPress={() => navigation.navigate('Verification')}>By continuing, you agree to the </Text>
            <TouchableOpacity >
              <Text style={{color: '#2376E5', fontWeight: '700',fontSize:14}}>Terms & Conditions </Text>
            </TouchableOpacity>
          </View>
    </View>
    </View>  
    <Text style={{color:'red'}}>{err}</Text>
    <View style={{display:"flex",alignItems:"center"}}>
   {submitbtn?<CustomButton label={'Submitting...'} />:<CustomButton label={'Continue'} onPress={() => form_submit()} />}
   </View>
   
   
    </View>
      </ScrollView>
    </SafeAreaView>
)
}


const styles = StyleSheet.create({

  eyeIcon:{
    zIndex:0, 
    alignSelf:'flex-end', 
    marginTop:-50,
    marginRight:30,
    marginBottom:30
    
},
customInputVerify:
    {fontSize:14,
    color:"#071B36",
    width:"48%",
    height:48,
    marginTop:10,
    borderBottomWidth:1,
    marginRight:"4%",
    borderColor:"#6C81A6",
    paddingLeft:8,
  },
customInputVerifyselect:{
  fontSize:14,
  color:"#071B36",
  marginTop:10,
  width:"100%",
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

  customInputVerify:
  {fontSize:14,
    color:"#071B36",
  width:"48%",
  height:48,
  marginTop:10,
  borderBottomWidth:1,
  marginRight:"4%",
  borderColor:"#6C81A6",
  paddingLeft:8,
},
  customInputVerifyselect:{
      fontSize:14,
      color:"#071B36",
      marginTop:10,
      width:"100%",
      // height:48,
      borderBottomWidth:1,
      borderRightWidth:0,
      borderTopWidth:0,
      borderLeftWidth:0,
      borderColor:"#6C81A6",
      borderRadius:0,
      paddingLeft:8,
      backgroundColor:"transparent"
  },


  customInputVerifyselectFull:{
    fontSize:14,
    color:"#071B36",
    marginTop:10,
    width:"100%",
    //height:48,
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
  },


  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom:12    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  }



})

export default RegisterTwoScreen