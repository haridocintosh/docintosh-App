import { useEffect, useRef, useState } from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Camera, CameraType } from 'expo-camera';
import docprofile from '../assets/images/docprofile.png'
import {StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import {BottomSheetModal, BottomSheetModalProvider,BottomSheetScrollView} from "@gorhom/bottom-sheet";
import * as ImagePicker from 'expo-image-picker';
import {Entypo, Ionicons, MaterialIcons, Fontisto,MaterialCommunityIcons, AntDesign, FontAwesome5,FontAwesome, Feather} from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { List, Checkbox } from 'react-native-paper';
import { useDispatch } from "react-redux";
// import { getAllSpeciality } from "../../redux/reducers/getSpeciality";
import Toast from 'react-native-simple-toast';
import { postCreate } from "../../redux/reducers/postData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { getMycircle } from "../../redux/reducers/postData";
import { mainApi } from "../apis/constant";

const  Sharepost = () => {
  const dispatch    = useDispatch();
  const navigation  = useNavigation();
  const [expanded, setExpanded] = useState(true);
  const [images, setImages]   = useState(null);
  const [video, setVideo]   = useState(null);
  const [audio, setAudio]   = useState(null);
  const [document, setDocument] = useState(null);
  const [err,seterr] =useState();
  const [circlespeciality, setSpl] = useState(null);

  const [post ,setPost] = useState({
      publishto:"",
      description : "",
      status:"1",
      broadcast_to:"",
      postType:"",
      postImage:"",
      type:"i"
  });

  

  const handlePress = () => setExpanded(!expanded);
  const [isOpen, setIsOpen]     = useState(false);
  const [checked, setChecked]   = useState(false);
  const [userdata, setuserdata] = useState({
    fullname:'',
    profile:'',
    role:'',
    speciality:'',
    speciality_id:'',
    assoc_id:'',
    id:'',
    circle_type:'',
    city_id:''
  })
  const bottomSheetModalRef       = useRef(null);
  const bottomSheetModalRefSecond = useRef(null);
  const snapPoints = ["20%", "48%", "75%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }

  function handlePresentModalSecond() {
    bottomSheetModalRefSecond.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImages(result.uri ? result.uri : result.selected);
    }

    let localUri = result.uri;
   // setImages(localUri)
   console.log(localUri);
      let filename = localUri.split('/').pop();
      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      
      let uriParts = localUri.split('.');
      let fileType = uriParts[uriParts.length - 1];
      console.log(fileType);
      let formData = new FormData();
      const imageData = {
        uri : localUri,
        name: filename,
        type: `image/${fileType}`,
      }
    
      formData.append('postImage', imageData);
      formData.append('post_id', '3032');
      const responce = await fetch(`https://docintosh.com/ApiController/postuploadDocsReact`, {
        method : 'POST',
        headers:{
            'Content-Type': 'multipart/form-data'
        },
        body :formData
     });

    const result1=  await responce.json();
    console.log(result1);
    setPost({...post, 
      postImage: result1.postImage,
    });
  };

  const pickVideo = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });
  //  console.log(result);
    if (!result.cancelled) {
      setVideo(result.uri ? result.uri : result.selected);
    }
  };

  const pickAudio = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });
 //   console.log(result);
    if (!result.cancelled) {
      setAudio(result.uri ? result.uri : result.selected);
    }
  };

  const pickDocument = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });
   // console.log(result);
    if (!result.cancelled) {
      setDocument(result.uri ? result.uri : result.selected);
    }
  };

  const postCheck= (e)=>{
    console.log(e);
    const name = e;
    setPost({ ...post, 
      postType:name,
    });
    bottomSheetModalRef.current?.close();
  }

const postDesc= (e)=>{
  //console.log(e);
  setPost({ ...post, 
    description:e,
  });
}

const publishCheck = (e)=>{
  console.log(e);
    setPost({...post,
      publishto:e,
    })
  bottomSheetModalRefSecond.current?.close();
}
  const handleStudentSubmit = async() =>{
  
    if(post.publishto ==''){
      Toast.show('Please select Publishto');
    }else if(!post.description){
        Toast.show("Please Write Something About Your Post!!!!!!!");
    }else if(!post.postType){
      Toast.show("Please select PostType");
    }else{
      const uploadData = {userdata,post}
     const result = await dispatch(postCreate(uploadData));
     console.log(result);
         if(result.payload.status == 'Success'){
        //   console.log(result.payload);
          //uploadPostImage(result.payload.post_id)
           Toast.show(result.payload.message);
          // setPost('');
          setTimeout(()=>{
            navigation.navigate('Home')
          },3000);
        }
      }
    }

  const uploadPostImage = async (post_id) => {
    console.log(post_id);
    let localUri = {images};
    console.log(localUri);
    let filename = localUri.split('/').pop();
    log(filename);
    // Infer the type of the image
    let uriParts = localUri.split('.');
    console.log('uri', uriParts);
    let fileType = uriParts[uriParts.length - 1];
    console.log("fileType",fileType );
    let formData = new FormData();
    const imageData = {
      uri : localUri,
      name: filename,
      type: `image/${fileType}`,
    }
    formData.append('postImage', imageData);
    formData.append('post_id', post_id);
    const responce = await fetch(`${mainApi.baseUrl}/ApiController/postuploadDocsReact`, {
      method : 'POST',
      headers:{
          'Content-Type': 'multipart/form-data'
      },
      body :formData
   });
  const result1 = await responce.json();
  console.log(result1);

  // Toast.show(result.payload.message);
  // setPost('');
  // setTimeout(()=>{
  //   navigation.navigate('Home1')
  // },3000);
};
    

  useEffect(() => {
    const asyncFetchDailyData = async () => {
    const jsonValue = await AsyncStorage.getItem('USER_INFO');
      const data=await JSON.parse(jsonValue);
      console.log(JSON.parse(data)['data'])
      const result=JSON.parse(data)['data'];
      setuserdata({...userdata, 
        fullname: `${result['first_name']} ${result['last_name']}`,
        profile: result['profileimage'],
        role:result['role'],
        speciality:result['speciality'],
        speciality_id:result['speciality_id'],
        city_id:result['city_id'],
        assoc_id:result['assoc_id'],
        id:result['id'],
        circle_type:"1"
      });
      fetchSpecialities(result['id']);
    }


    asyncFetchDailyData();
   // fetchSpecialities();
  }, [])

  const fetchSpecialities = async (id)=>{
    const postDetails = {user_id : id}
    const result = await dispatch(getMycircle(postDetails));
    setSpl(result.payload);
   }
  

  return (
    <BottomSheetModalProvider>
   
      <View style={{marginTop:20}}></View>
      <View style={{margin:40,marginBottom:-10, alignSelf:'flex-end', }}>
        <Text style={{backgroundColor:'#859ef7', paddingBottom:5, paddingEnd:15, paddingStart:15, paddingTop:5, borderRadius:20/2}}  onPress={()=>handleStudentSubmit()} >Post</Text>
      </View>
      <View style={{padding:20, marginTop:-50, backgroundColor:"#F2FAFA"}}>
      <View  style={{flexDirection:'row',}}>
      <Image source={{uri:userdata.profile}} onPress={() => navigation.navigate('ProfileScreen2')} style={{margin:10, width:50, borderRadius:50,height:50,}} ></Image>
      <View style={{margin:0, }}>
      <Text style={{marginTop:10, fontSize:14, fontWeight:'400'}}>{userdata?((userdata.role<='4')?'Dr.':''):''} {userdata['fullname']} <MaterialCommunityIcons name="check-decagram" size={12} color="#0F9C69" /></Text>
      <View style={{marginTop:5}} >
      <TouchableOpacity  onPress={handlePresentModalSecond} style={{flexDirection:'row'}}> 
        <Text style={{marginRight:5, }}>
        <Ionicons name="md-earth" size={13} color="#45B5C0" />  
        </Text>
        <Text style={{fontSize:12, fontWeight:'400'}}>Publish To </Text>
        <AntDesign name="down" size={15} color="gray"   />
        </TouchableOpacity>
      </View>
        </View> 
      </View>
      </View>
 
    <View style={styles.content} >
        <TextInput 
          multiline={true}
          style={styles.textInput}
          placeholder="Whats Your Mind?"
          underlineColorAndroid="transparent"
          enablesReturnKeyAutomatically
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(e)=>{postDesc(e)}}
        />
      {images && <Image source={{ uri: images }} style={{ width: 100, height: 100 ,}} />}
      <View style={styles.line} /></View>
      {/* <Text style={{color:"red", textAlign:"center" }} >{err}</Text> */}
      <View style={[styles.container]}> 
      <View style={{alignSelf:'center', flexDirection:'row', padding:12, backgroundColor:"#FFFFFF"}}>
     
      <View style={{flexDirection:'row', marginHorizontal:30}}>

      <View style={{margin:5 ,marginRight:20}}>
      <Fontisto name="smiley" size={24} color="#51668A" />
      </View>

      <TouchableOpacity onPress={pickImage}>
        <View style={{margin:5,marginRight:20 }}>
        <FontAwesome5 name="image" size={24} color="#51668A" />
        </View>
      </TouchableOpacity>
      {/* onPress={pickVideo} */}
      <TouchableOpacity >
        <View style={{margin:5,marginRight:20 }}>
          <FontAwesome5 name="video" size={24} color="#51668A" />
        </View>
      </TouchableOpacity>

      {/* onPress={pickAudio} */}
      <TouchableOpacity>
        <View style={{margin:5,marginRight:20 }}>
          <MaterialIcons name="keyboard-voice" size={24} color="#51668A" />
        </View>
      </TouchableOpacity>
      {/* onPress={pickDocument} */}
      <TouchableOpacity>
        <View style={{margin:5,marginRight:20 }}>
          <MaterialCommunityIcons name="file-document-multiple" size={24} color="#51668A" />
        </View>
      </TouchableOpacity>
      </View>
      <View style={{margin:5, }}>
        <MaterialCommunityIcons name="dots-horizontal-circle" size={26} color="#51668A"  onPress={handlePresentModal}  />
        </View>
      </View>
          
        <StatusBar style="auto" />

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 30 }}
          onDismiss={() => setIsOpen(false)}>
          <View style={styles.contentContainer}>
          <Text style={[styles.title, { marginBottom: 20 }]}>Suggestions</Text>
          <View style={{margin:10, alignSelf:'flex-start'}}>
          <TouchableOpacity  onPress={() => { postCheck(11)}}>
          <View style={{flexDirection:'row',}}  >
          <Entypo name="edit" size={20} color="#45B5C0" />
          <Text style={{marginLeft:15, fontSize:16, fontWeight:'600'}} >Post an Update</Text>
          </View></TouchableOpacity>
          
          <View style={{marginTop:20}}></View>
          <TouchableOpacity  onPress={() => { postCheck(9)}}>
          <View style={{flexDirection:'row',}} >
          <FontAwesome name="bullhorn" size={20} color="#45B5C0" />
          <Text style={{marginLeft:15, fontSize:16, fontWeight:'600'}}>Announce Your Clinic</Text>
          </View></TouchableOpacity>

          <View style={{marginTop:20}}></View>
          <TouchableOpacity  onPress={() => { postCheck(3) }}>
          <View style={{flexDirection:'row',}}>
          <Feather name="send" size={20} color="#45B5C0" />
          <Text style={{marginLeft:15, fontSize:16, fontWeight:'600'}} >Publish a Study</Text>
          </View></TouchableOpacity>

          <View style={{marginTop:20}}></View>
          <TouchableOpacity  onPress={() => { postCheck(8) }}>
          <View style={{flexDirection:'row'}}>
          <MaterialCommunityIcons name="share" size={20} color="#45B5C0" />
          <Text style={{marginLeft:15, fontSize:16, fontWeight:'600'}} >Share A Procedure</Text>
          </View></TouchableOpacity>

          <View style={{marginTop:20}}></View>
          <TouchableOpacity  onPress={() => { postCheck(5)}}>
          <View style={{flexDirection:'row',}}>
          <AntDesign name="questioncircle" size={20} color="#45B5C0" />
          <Text style={{marginLeft:15, fontSize:16, fontWeight:'600'}} >Ask a question</Text>
          </View></TouchableOpacity>

          <View style={{marginTop:20}}></View>
          <TouchableOpacity  onPress={() => { postCheck(2)}}>
          <View style={{flexDirection:'row',}}>
          <MaterialIcons name="dashboard" size={20} color="#45B5C0" />
          <Text style={{marginLeft:15, fontSize:16, fontWeight:'600'}}>Other</Text></View></TouchableOpacity>
     </View>         
     </View>
        </BottomSheetModal>

        
        <BottomSheetModal
          ref={bottomSheetModalRefSecond}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 30 }}
          onDismiss={() => setIsOpen(false)}>
          <BottomSheetScrollView>
          <View style={styles.contentContainer}>
          <Text style={[styles.title, { marginBottom: 20 }]}>Who can see this post? </Text>
          <View style={{margin:10, alignSelf:'flex-start'}}>
          <TouchableOpacity  onPress={() => { publishCheck(8)}}>   
          <View style={{flexDirection:'row',}}>
          <Ionicons name="earth" size={20} color="#45B5C0" />
          <Text style={{marginLeft:15, fontSize:16, fontWeight:'600'}}>Public</Text>
          </View></TouchableOpacity>

          <View style={{marginTop:20}}></View>

          <TouchableOpacity  onPress={() => { publishCheck(1)}}>   
          <View style={{flexDirection:'row',}}>
          <MaterialCommunityIcons name="medal-outline" size={20} color="#45B5C0" />
          <Text style={{marginLeft:15, fontSize:16, fontWeight:'600'}}>My Speciality ({ userdata && userdata['speciality']})</Text>
          </View></TouchableOpacity>

          {/* <View style={{flexDirection:'row',}} onPress={{}}>
          <FontAwesome5 name="users" size={20} color="#45B5C0" />
          <Text style={{marginLeft:15, fontSize:16, fontWeight:'600'}}>My Circle</Text>
          </View> */}
         

         <TouchableOpacity onPress={() => { publishCheck(1)}}> 
         <List.Accordion
          style={{
            marginHorizontal:-10,
            backgroundColor:'#fff'
          }}
          titleStyle={{marginHorizontal:5, fontSize:14, fontWeight:'700', }}
          title="My Circle"
          left={props => <FontAwesome5 name="users" size={20} color="#45B5C0" />}>
            {circlespeciality && circlespeciality.slice(0,10).map((element, index)=> {
              return (
                <View style={{flexDirection:'row', }} key={index} >
                <View style={{marginRight:1}}>
                  {/* <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                    setChecked(!checked);
                  }}/> */}
                </View>
                <Text style={{margin:8, fontSize:16, fontWeight:'600'}}>{element.speciality}</Text>
                </View>)
              })}
          </List.Accordion>
          </TouchableOpacity>
          <View style={{width:340,margin:10, height:1, backgroundColor:'#cecece', }}></View>
          </View>        
          </View>
          </BottomSheetScrollView>
        </BottomSheetModal>
      </View>
   
      {/* </ScrollView> */}
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignSelf:'flex-end',
    justifyContent: "flex-end",
    marginBottom:10,
    // marginLeft:10,
    marginRight:10,
    // backgroundColor:"#E6E6E6" 
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontWeight: "900",
    letterSpacing: 0.5,
    fontSize: 16,
    //alignSelf:'center',
  },
  subtitle: {
    color: "#101318",
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    color: "#56636F",
    fontSize: 13,
    fontWeight: "normal",
    width: "100%",
  },
  content: {
    padding:10,
    // backgroundColor: '#E6E6E6',
  },
  textInput:{
    // backgroundColor: '#E6E6E6',
    height: 100,
    fontSize: 16,
    fontWeight: '600',
  },
  line: {
    backgroundColor: '#cecece',
    height: 0,
    widht: '100%',
  }
});

export default  Sharepost