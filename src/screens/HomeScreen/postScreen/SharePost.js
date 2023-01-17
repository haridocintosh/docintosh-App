import { useEffect, useRef, useState } from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, TouchableOpacity, View, Image, ActivityIndicator, ImageBackground} from "react-native";
import {BottomSheetModal, BottomSheetModalProvider,BottomSheetScrollView} from "@gorhom/bottom-sheet";
import {Entypo, Ionicons, MaterialIcons, Fontisto,MaterialCommunityIcons, AntDesign, FontAwesome5,FontAwesome, Feather} from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { List } from 'react-native-paper';
import CheckBox from "react-native-check-box";
import { useDispatch } from "react-redux";
import Toast from 'react-native-simple-toast';
import { postCreate } from "../../../../redux/reducers/postData";
import { useNavigation } from "@react-navigation/native";
import { getMycircle } from "../../../../redux/reducers/postData";
import { mainApi } from "../../../apis/constant";
import { getLocalData } from "../../../apis/GetLocalData";
import { coinTransfer } from "../../../../redux/reducers/coinSlice";
import { PickImageAll, PickVideos } from "../../../navigation/ReuseLogics";
import { Audio } from 'expo-av';
import * as DocumentPicker from 'expo-document-picker';
import data from "../../../model/data";
import EmojiSelector, { Categories } from "react-native-emoji-selector";

let recording = new Audio.Recording();

const  Sharepost = () => {
  const dispatch    = useDispatch();
  const navigation  = useNavigation();
  const [loader, setloader] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [pickedData, setData]   = useState(null);
  const [document, setDocument]   = useState(null);
  const [circlespeciality, setSpl] = useState([]);
  const [post ,setPost] = useState({
      publishto:"",
      description :"",
      status:"1",
      broadcast_to:"",
      postType:"",
      postImage:[],
      type:"",
      custspeciality:""
  });
  const handlePress = () => setExpanded(!expanded);
  const [isOpen, setIsOpen]     = useState(false);
  const [specialNames, setSpecialNames]   = useState();
  const [countData, setCountData]   = useState();
  const [whoCanSee, setWhoCanSee]   = useState();
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
  });
  const [uploadImage, setuploadImage]   = useState({pimage:[]});
  const [emojiTab, setEmojiTab] = useState(false)
  const [media, setMedia] = useState('')
  const bottomSheetModalRef       = useRef(null);
  const bottomSheetModalRefSecond = useRef(null);
  const snapPointsOne = ["1%","48%"];
  const snapPoints = ["60%","60%"];

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
  // console.log("useId ","useId ",uniqueId);
  const pickEmoji =  () => {
  console.log("ppicked");
    setEmojiTab(!emojiTab)
  }
  const pickImage =  () => {
    setDocument(null);
    PickImageAll(setloader).then(async (res) =>{
      setloader(true);
      const data = res?.map((data,i) => {return {...data, id:i}})
      setData(data);
      setPost({...post, 
          type:'i'
      });
      setCountData(data.length);
      setMedia('images');
      setloader(false);
    })
  };

  const pickVideo =  () => {
    setDocument(null);
    PickVideos().then(async (res) =>{
      setloader(true);
      const data = res?.map((data,i) => {return {...data, id:i}})
      console.log(data);
      setData(data);
      setPost({...post, 
        type:'v'
      });
      setCountData(data.length);
      setMedia('videos');

    //   let filename = localUri.split('/').pop();
    //   let uriParts = localUri.split('.');
    //   let fileType = uriParts[uriParts.length - 1];
    //   let formData = new FormData();
    //   const imageData = {
    //     uri : localUri,
    //     name: filename,
    //     type: `video/${fileType}`,
    //   }
    //   formData.append('postImage', imageData);
    //   formData.append('post_id', '3032');
    //   const responce = await fetch(`${mainApi.baseUrl}/ApiController/postuploadDocsReact`, {
    //     method : 'POST',
    //     headers:{
    //         'Content-Type': 'multipart/form-data'
    //     },
    //     body :formData
    //  });
    // const result1 =  await responce.json();
    //   setPost({...post, 
    //     postImage: result1.postImage,
    //     type:'v'
    //   });
  setloader(false);
    })
  };

  const handleDocPicker = async () => {
    let result = await DocumentPicker.getDocumentAsync({ 
      type: "application/*",
      copyToCacheDirectory: false, 
    });
    console.log(result);
    setDocument(result)
  }

  const postCheck= (e)=>{
    const name = e;
    setPost({ ...post, 
      postType:name,
    });
    bottomSheetModalRef.current?.close();
  }

const postDesc= (e)=>{
  setPost({ ...post, 
    description:e,
  });
}

const publishCheck = (e)=>{
  if(e == 8){
    setWhoCanSee("Public");
  }else{
    setWhoCanSee("My Speciality"); 
  }
    setSpecialNames();
    setPost({...post,
      publishto:e,
    })
   bottomSheetModalRefSecond.current?.close();
}


const publishCheck1 = (e, text)=>{
    setPost({...post,
      publishto:e,
    });
    setWhoCanSee(text)
}

  const handleStudentSubmit = async() =>{
    if(post.publishto ==''){
      Toast.show('Please Select Publish to');
      bottomSheetModalRefSecond.current?.present();
    }else if(!post.description){
      Toast.show("Please Write Something About Your Post!!!!!!!");
    }else if(!post.postType){
      Toast.show("Please Select PostType");
      bottomSheetModalRef.current?.present();
    }else{
      if(media == 'images'){
        pickedData?.map(async(data) => {
          let localUri = data.uri
          let filename = localUri.split('/').pop();
          let uriParts = localUri.split('.');
          let fileType = uriParts[uriParts.length - 1];
          let formData = new FormData();
          const imageData = {
            uri : localUri,
            name: filename,
            type: `image/${fileType}`,
          }
          formData.append('postImage', imageData);
          formData.append('post_id', '3032');
          const responce = await fetch(`${mainApi.baseUrl}/ApiController/postuploadDocsCompress`, {
              method : 'POST',
              headers:{
                  'Content-Type': 'multipart/form-data'
              },
              body :formData
          });
  
          var result1=  await responce.json();
            getFun({...uploadImage,
              uploadImage:uploadImage.pimage.push(result1.postImage)
            })
          });

      }else if(media == 'videos'){

          let filename = localUri.split('/').pop();
          let uriParts = localUri.split('.');
          let fileType = uriParts[uriParts.length - 1];
          let formData = new FormData();
          const imageData = {
            uri : localUri,
            name: filename,
            type: `video/${fileType}`,
          }
          formData.append('postImage', imageData);
          formData.append('post_id', '3032');
          const responce = await fetch(`${mainApi.baseUrl}/ApiController/postuploadDocsReact`, {
            method : 'POST',
            headers:{
                'Content-Type': 'multipart/form-data'
            },
            body :formData
          });
        var result1=  await responce.json();

      
      
      }

      getFun({...uploadImage,
        uploadImage:uploadImage.pimage.push(result1.postImage)
      })
  
      // console.log("evenet k phle",uploadImage.pimage.length);
      //   if(uploadImage.pimage.length > 0){
      //     Toast.show("uploaded");
      //     console.log("uploaded");
      //     getFun(data);
      // }else{
      //   Toast.show("Please Select atleast One Images or Video");
      // }
    }
  }

  const getFun = async(data) => {
    console.log("datasfdgh",data);
    console.log("uploaded");
    const uniqueData = data.pimage.filter((x, i, a) => a.indexOf(x) == i);
    console.log('filtercount', uniqueData);
    console.log('filtercount', uniqueData.length);
    console.log('realcount',countData);
  
    if(countData == uniqueData.length){
  
          const uploadData = {userdata,post,uploadImage:uniqueData};
          console.log('uploadDatacheck', uploadData);
        // setloader(true);
          const result = await dispatch(postCreate(uploadData));
          console.log(result);
          if(result.payload.status == 'Success'){
          // setloader(false);
            Toast.show(result.payload.message);
            const coinDetails = {task : 4, receiverId:userdata.id } 
            const coinResult  = await dispatch(coinTransfer(coinDetails));
            if(coinResult.payload.status == 'Success')
            {
              navigation.navigate('HomeScreen');
            }
          }
        }
   
    } 

  const uploadPostImage = async (post_id) => {
    //console.log(post_id);
    let localUri = {pickedData};
    //console.log(localUri);
    let filename = localUri.split('/').pop();
    log(filename);
    // Infer the type of the image
    let uriParts = localUri.split('.');
    //console.log('uri', uriParts);
    let fileType = uriParts[uriParts.length - 1];
    //console.log("fileType",fileType );
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
 // console.log(result1);

  Toast.show(result1.payload.message);
  setPost('');
  setTimeout(()=>{
    navigation.navigate('Home1')
  },3000);
};
    

  useEffect(() => {
    navigation.setOptions({ title: 'Create Post'});
    getLocalData('USER_INFO').then((res) => {
      const reData = res?.data;
      setuserdata({...userdata, 
        fullname: `${reData?.first_name} ${reData?.last_name}`,
        profile: reData?.profileimage,
        role:reData?.role,
        speciality:reData?.speciality,
        speciality_id:reData?.speciality_id,
        city_id:reData?.city_id,
        assoc_id:reData?.assoc_id,
        id:reData?.id,
        circle_type:reData?.role == 5 ? 3 : 1
      });
      fetchSpecialities(reData?.id);
    });
    bottomSheetModalRef.current?.present();
  }, [])

  const fetchSpecialities = async (id)=>{
    const postDetails = {user_id : id}
    const result = await dispatch(getMycircle(postDetails));
    setSpl(result.payload);
   }

   const handleChange = (speciality_id) => {
    let temp = circlespeciality.map((data) => {
      if (speciality_id === data.speciality_id) {
        return { ...data, checked: !data.checked };
      }
      return data;
    });

    setSpl(temp);
    const specialityId = temp
      .filter((val) => val.checked == true)
      .map((temp) => temp.speciality_id);

    const specialityName = temp
      .filter((val) => val.checked == true)
      .map((temp) => temp.speciality);

setSpecialNames(specialityName)
    setPost({ ...post, 
      publishto:3,
      custspeciality:specialityId
    });
  };

  // if(loader){
  //   return(<View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
  //       <ActivityIndicator size={'large'} color={"#2C8892"}/>
  //   </View>)
  // }

  //  const startRecording = async () => {
  //   try {
  //     await Audio.requestPermissionsAsync();
  //     await Audio.setAudioModeAsync({
  //       allowsRecordingIOS: true,
  //       playsInSilentModeIOS: true,
  //     });

  //     const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
  //     );
  //     setRecording(recording);
  //   } catch (err) {
  //     console.error('Failed to start recording', err);
  //   }
  // }

  // const stopRecording = async () =>{
  //   setRecording(undefined);
  //   await recording.stopAndUnloadAsync();
  //   await Audio.setAudioModeAsync({
  //     allowsRecordingIOS: false,
  //   });
  //   const uri = recording.getURI();
  // }

  const removeImg = (id) => {
    console.log(id);
    const removed = pickedData?.filter(data => data.id != id); 
    console.log(removed);
    setData(removed);
    setCountData(removed.length);
   // console.log('removepickedData',pickedData );
  }

  const handleDocType = (type) => {
    if(type?.includes(".pdf")){
      return "pdffile1";
    }else if(type?.includes(".xls")){
      return "exclefile1";
    }else if(type?.includes(".pptx")){
      return "pptfile1";
    }else if(type?.includes(".docx")){
      return "wordfile1";
    }else{
      return "unknowfile1";
    }
  }

  return (
    <BottomSheetModalProvider>
      <View style={styles.PostContainer}>
        <View  style={{flexDirection:'row'}}>
          <Image source={userdata.profile? {uri:userdata.profile}: null} style={styles.imageProfile}/>
          <View style={{justifyContent:'center'}}>
            <Text style={styles.userName}>{userdata?((userdata.role<='4')?'Dr.':''):''} {userdata?.fullname} <MaterialCommunityIcons name="check-decagram" size={12} color="#0F9C69" /></Text>
            <View style={{marginTop:5,}} >
              <TouchableOpacity  onPress={handlePresentModalSecond} style={{flexDirection:'row',alignItems:'center'}}> 
                <Ionicons name="md-earth" size={13} color="#45B5C0" />  
                <Text style={styles.publicOption}>{whoCanSee? whoCanSee: "Publish"}</Text>
                <AntDesign name="down" size={12} color="#51668A" />
                <Text 
                  style={[styles.publicOption,{width:120}]} numberOfLines={1} >
                    {specialNames?.map(data => data+ " ")}
                  </Text>
              </TouchableOpacity>
            </View>
          </View> 
        </View>
        <TouchableOpacity onPress={()=>handleStudentSubmit()}>
          <Text style={{fontFamily:'Inter-SemiBold',color:'#51668A'}}   >
            Post
          </Text>
        </TouchableOpacity>
      </View>
 
    <View style={styles.content} >
        <TextInput 
          multiline={true}
          style={styles.textInput}
          placeholder="What's on your mind?"
          underlineColorAndroid="transparent"
          enablesReturnKeyAutomatically
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(e)=>{postDesc(e)}}
        />
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
        {loader && <View style={{flexDirection:'row',justifyContent:'center',flex:1}}>
           <ActivityIndicator/>
        </View>}
        {pickedData?.map((data,i) => {
          return(
            <View style={{margin:8,borderRadius:5,}} key={i}>
              <ImageBackground source={{uri: data.uri}} style={{ width: 100, height: 100}}>
                <TouchableOpacity style={styles.removeImg} onPress={() => removeImg(data.id)}>
                <AntDesign name="close" size={15}/>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          )
        })}
        {document &&
        <View style={styles.pdfUploadContainer}>
           <AntDesign name={handleDocType(document?.uri)} size={24} color={"black"} />
           <Text style={styles.pdfFileName}>{document?.name}</Text>
           <TouchableOpacity style={styles.pdfFileClose} onPress={() => setDocument(null)}>
             <AntDesign name="closecircle" size={15} color="#45B5C0" />
           </TouchableOpacity>
        </View>}
        </View>
        <View style={styles.line}/>
      </View>

      <View style={[styles.container]}> 
      {/* <EmojiSelector
        category={Categories.all}
        onEmojiSelected={emoji => console.log(emoji)}
        showSearchBar={false}
        showSectionTitles={false}
        // showTabs={emojiTab}
      /> */}
        <View style={styles.bottomTabBar}>
          <TouchableOpacity onPress={pickEmoji}>
            <Fontisto name="smiley" size={24} color="#51668A" />
          </TouchableOpacity>
          <TouchableOpacity  onPress={pickImage}>
            <FontAwesome5 name="image" size={24} color="#51668A" />
          </TouchableOpacity>
          <TouchableOpacity onPress={pickVideo}>
            <FontAwesome5 name="video" size={24} color="#51668A" />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => navigation.navigate("AudioScreen")}>
            <MaterialIcons name="keyboard-voice" size={24} color="#51668A" />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={handleDocPicker}>
            <MaterialCommunityIcons name="file-document-multiple" size={24} color="#51668A" />
          </TouchableOpacity>
          <TouchableOpacity >
            <MaterialCommunityIcons name="dots-horizontal-circle" size={26} color="#51668A"  onPress={ () => handlePresentModal()}  />
          </TouchableOpacity>
        </View>
          
        <StatusBar style="auto" />

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPointsOne}
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
          <View style={{flexDirection:'row',}}>
          <FontAwesome name="bullhorn" size={20} color="#45B5C0" />
          <Text style={{marginLeft:15, fontSize:16, fontWeight:'600'}}>Announce Your Clinic</Text>
          </View></TouchableOpacity>
          <View style={{marginTop:20}}></View>
          <TouchableOpacity  onPress={() => { postCheck(3) }}>
          <View style={{flexDirection:'row'}}>
          <Feather name="send" size={20} color="#45B5C0" />
          <Text style={{marginLeft:15, fontSize:16, fontWeight:'600'}}>Publish a Study</Text>
          </View>
          </TouchableOpacity>
          <View style={{marginTop:20}}></View>
          <TouchableOpacity  onPress={() => { postCheck(8) }}>
          <View style={{flexDirection:'row'}}>
          <MaterialCommunityIcons name="share" size={20} color="#45B5C0" />
          <Text style={{marginLeft:15, fontSize:16, fontWeight:'600'}}>Share A Procedure</Text>
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

          <BottomSheetScrollView keyboardShouldPersistTaps='handled'>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Who can see this post? </Text>
            <View style={{margin:10, alignSelf:'flex-start'}}>

              <TouchableOpacity  onPress={() => { publishCheck(8)}} style={{flexDirection:'row'}}>   
                  <Ionicons name="earth" size={20} color="#45B5C0" />
                  <Text style={{marginLeft:15, fontSize:16,fontFamily:'Inter-Regular'}}>Public</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => { publishCheck(1)}} style={{flexDirection:'row',marginTop:15}}>   
                <MaterialCommunityIcons name="medal-outline" size={20} color="#45B5C0" />
                <Text style={{marginLeft:15, fontSize:16, fontFamily:'Inter-Regular',}}>My Speciality ({ userdata && userdata['speciality']})</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity onPress={() => { publishCheck(1)}}>  */}
              <List.Accordion
                style={{
                  marginHorizontal:-10,
                  backgroundColor:'#fff'
                }}
                titleStyle={{marginHorizontal:5, fontSize:16, fontFamily:'Inter-Regular'}}
                title="My Circle"
                onPress={() => { publishCheck1(3, "My Circle")}} 
                left={props => <FontAwesome5 name="users" size={20} color="#45B5C0" />}>
                     <View style={{width:"100%",margin:10, height:1, backgroundColor:'#cecece', }}></View>
                  {circlespeciality && circlespeciality?.map((element, index)=> {
                    return (
                      <TouchableOpacity style={{flexDirection:'row'}} key={index} >
                        <CheckBox
                          style={{ padding: 5 }}
                          onClick={() => handleChange(element.speciality_id)}
                          isChecked={element.checked}
                          checkBoxColor="#2C8892"
                        />
                      <Text style={{margin:8, fontSize:15,fontFamily:'Inter-Regular',color:'#51668A' }}>{element.speciality}</Text>
                      </TouchableOpacity>)
                    })}
                </List.Accordion>
                {/* </TouchableOpacity> */}
         
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
    justifyContent: "flex-end",
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
    paddingHorizontal:20,
  },
  textInput:{
    height: 100,
    fontSize: 20,
    fontFamily:'Inter-SemiBold'
  },
  line: {
    backgroundColor: '#cecece',
    widht: '100%',
  },
  PostContainer:{
    padding:20,  
    backgroundColor:"#F2FAFA",
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
  },
  imageProfile:{ 
    width:50, 
    borderRadius:50,
    height:50,
    marginRight:10
  },
  userName:{ 
    fontSize:14, 
    fontWeight:'400',
    fontFamily:'Inter-SemiBold'
  },
  publicOption:{
    fontSize:12, 
    fontWeight:'400',
    fontFamily:'Inter-Regular',
    marginHorizontal:5,
    color:'#51668A'
  },
  bottomTabBar:{ 
    flexDirection:'row', 
    paddingHorizontal:20, 
    paddingVertical:10, 
    backgroundColor:"#FFFFFF",
    width:'100%',
    justifyContent:'space-between'

  },
  removeImg:{
    width:15,
    height:15,
    backgroundColor:'#fff',
    position:'absolute',
    right:0,
    borderRadius:50,
    margin:5
  },
  pdfUploadContainer:{
    // borderWidth:1,
    padding:13,
    borderRadius:5,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    shadowColor: '#171717',
    fontSize:14,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  pdfFileName:{
    marginLeft:10
  },
  pdfFileClose:{
    marginLeft:10
  }

});

export default  Sharepost