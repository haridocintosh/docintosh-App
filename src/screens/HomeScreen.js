import React, {useState, useEffect,useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import d  from '../assets/dr-icon/d.png'
import discount1  from '../assets/dr-icon/discount1.png';
import p2 from '../assets/images/p2.png';
import Modal from "react-native-modal";
import { Button , } from "react-native-elements";
import Carousel from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Entypo,Ionicons,MaterialCommunityIcons,AntDesign,FontAwesome5,FontAwesome,Foundation,Feather} from '@expo/vector-icons';
import profileimg from '../assets/images/p2.png';
import grid6 from '../assets/images/grid6.png';
import grid2 from '../assets/images/grid2.png';
import oval from '../assets/dr-icon/Oval.png';
import ban1 from '../assets/images/ban1.png';
import ban2 from '../assets/images/ban2.png';
import SmilingFacewithHeart from '../assets/images/SmilingFacewithHeart-Eyes.png';
import bgtophome from '../assets/images/bg-top-home.png';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/CarouselCardItem'
import Slider from '@react-native-community/slider';
import { userPostData } from '../../redux/reducers/postData';
import Svg, {Path} from 'react-native-svg';
import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';




const HomeScreen = ()=> {
// like unlike fun=>
  const [isPlaying, setIsPlaying]   = useState(false);
  const [userdata, setuserdata]     = useState({
    profile:''
  });
  const [allPost, setallPost]       = useState([])

  const dispatch = useDispatch();
  const tooglePlay =() =>{
     isPlaying === false ? setIsPlaying(true) : setIsPlaying(false);
  };
  const maximumValue =3.15;
  const [duration , setDuration] = useState(0.0);
  const [visible, setVisible] = useState(false);
  const isCarousel = React.useRef(null);
  const navigation = useNavigation();
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);
    // 👇️ or set to true
    // setIsActive(true);
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const [liked, setLiked] = useState(false)
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }
  const onSelectSwitch = value => {
    setGamesTab(value);
  };
  const closeModal = () => {
    setVisible(false);
  };
  const data = [
    {
      title: "Aenean leoxdfggds",
      body: "Ut tincidunt tincidunt eratdgfds. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imgUrl: "https://picsum.photos/id/11/200/300",
    },
    {
      title: "In turpis",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "Lorem Ipsum",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
      imgUrl: "https://picsum.photos/id/12/200/300",
    },
    {
      title: "In turpis",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
    {
      title: "In turpis",
      body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
      imgUrl: "https://picsum.photos/id/10/200/300",
    },
  ];



  useEffect(()=>{
    asyncFetchDailyData();
  },[]);

  const asyncFetchDailyData = async () => {
    const jsonValue = await AsyncStorage.getItem('USER_INFO');
    const data=await JSON.parse(jsonValue);
    const result=JSON.parse(data)['data'];
    // if(result == null){
    //  // setuserdata([]);
    // }else{
    //   // setuserdata({...userdata,
    //   //   postType:0,
    //   //   role:result['role'],
    //   //   circle_type:1,
    //   //   city_id:result['city_id'],
    //   //   assoc_id:result['assoc_id'],
    //   //   pageCounter:600,
    //   //   id:result['id'],
    //   //   profile:result['profileimage'],
    //   // });
    // }
    setuserdata({
      profile:result['profileimage']
    });
    fetchPostData(result['role'],result['city_id'], result['assoc_id'], result['profileimage'], result['id'])
   
  }

  const fetchPostData = async (role,city_id,assoc_id,profileimage,userId)=>{ 
     // console.log(role,city_id,assoc_id,userId,profileimage);
    const postDetails = {role,city_id,assoc_id,profileimage,userId}
    const result = await dispatch(userPostData(postDetails));
    setallPost(result.payload);
    //console.log('latestfetchdata',result.payload);
  }


//   useEffect(()=>{
//     async function fetchPostData(){
//      //console.log('fetchDataConsole', userdata)
//        const result = await dispatch(userPostData(userdata));
//        if(result == null){
//        }else{
//          setallPost(result.payload);
//         // console.log('updatePostData',allPost);
//        }
//       // console.log('lgitokm', result.payload);
//        //console.log('lgitokm', result);
      
//      }
// fetchPostData();
//  },[userdata]);


// const fetchPostDataOld = async () => {
// console.log('fetchDataConsole', userdata)
//   const result = await dispatch(userPostData(userdata));
//  // console.log('lgitokm', result.payload);
//   console.log('lgitokm', result);
//  // setallPost(result.payload);
// }
// console.log('1111',allPost);
  return (
  <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true}>
      <View style={{backgroundColor:"#071B36"}}></View>
        <View style={{backgroundColor:'#071B36', }}>
        <Image source={bgtophome} style={{zIndex:999, width:'100%', resizeMode:'cover'}}></Image>
        <View style={{flexDirection:'row', margin:10,  marginBottom:-20, zIndex:9999, marginTop:-100}}> 
      <TouchableOpacity  >
        <Ionicons name="reorder-three-outline" size={34} color="#fff" onPress={() => navigation.openDrawer()} />
      </TouchableOpacity>

        <View style={{backgroundColor:'#FFCC00', width:4, height:24, marginTop:8, marginLeft:10}}>
    
    <Image source={{uri:userdata.profile}} style={{marginLeft:3, marginTop:1.5}}></Image>
    </View>
    <Text style={{fontSize:10, color:'#fff', alignSelf:'center', marginHorizontal:5}}>What’s New</Text>
    </View>
    
    <View style={{marginTop:-19, zIndex:9999,  height:91, width:'100%', flexDirection:'row-reverse', }}>
   <View style={{margin:10, }}>
   <MaterialCommunityIcons name="bell-ring-outline" size={24} color="#ffff" style={{zIndex:999}}/>
   </View>
   <View style={{zIndex:1, margin:10}}>
   <Feather name="search" size={24} color="#ffff" onPress={()=>{ navigation.navigate('CommonSearchScreen') }} />
   </View>

    </View>
    <TouchableOpacity style={{zIndex:999}}>
   <View style={{borderRadius:50,marginBottom:40, marginTop:-20, backgroundColor:'#20324a', width:130, height:26, flexDirection:'row', alignSelf:'center' }} >
   <Image source={d} style={styles.d} />
   <Text style={styles.count}>7822 |</Text>
   <Image source={discount1} style={{width:16, height:16, alignSelf:'flex-start', marginVertical:5,  marginHorizontal:5}}></Image>
   <Text style={styles.count}  >102</Text>
   </View>
   </TouchableOpacity>
    </View>
 
 
   <View style={{padding:10}}>
   <Card style={{marginTop:-35, zIndex:1, borderRadius:50,shadowRadius:10, shadowOffset:10}} onPress={() => navigation.navigate('SharePost')}>
    <View style={{flexDirection:'row' , margin:10}} >
    <Image source={userdata.profile?{uri:userdata.profile}:''}  style={{width:32, height:32, borderRadius:50}}></Image>
    <Text style={styles.whtsnewtxt}>What’s on your mind?</Text>
    <View style={{ marginLeft:'40%', alignSelf:'center'}}>
    <AntDesign name="pluscircle" size={26} color="#D5DEED" />
    </View>
    </View>
    </Card>

    {/* <Text>foundmdsmsm</Text> */}
    

{/* Take poll Start  */}
  <Card style={{marginTop:20, borderRadius:10,shadowRadius:10,}}>
    <View style={styles.marginten}>
      <Text style={{fontSize:16, fontWeight:'600'}}>Take a Poll</Text>
      <Entypo name="cross"  onPress={closeModal}  size={20} color="#45B5C0" style={{ alignSelf:'flex-end', fontWeight:'200', zIndex:1, marginTop:-20}} />
      <View style={{width:'100%', height:1, backgroundColor:'#D5DEED', marginTop:18, }}></View>
    </View>
   <Text style={styles.questions}>What are the problems associated with high BP?</Text>
   <View style={{flexDirection:'row', paddingHorizontal:10, paddingVertical:5 ,}}>
    <Ionicons name="time-outline" size={20} color="red" />
    <Text style={{color:'red', paddingHorizontal:5}}>Expairing Soon</Text>
  </View>

  <TouchableOpacity>
    <View style={styles.marginten}>
      <View style={styles.bordermcq}>
        <Text style={styles.aligncenter}>Heart Diseases</Text>
      </View>
    </View>
  </TouchableOpacity>
  <TouchableOpacity>
    <View style={styles.marginten}>
      <View style={styles.bordermcq}>
        <Text style={styles.aligncenter}>Kidney Diseases</Text>
      </View>
    </View>
  </TouchableOpacity>

  <TouchableOpacity>
    <View style={styles.marginten}>
      <View style={styles.bordermcq}>
        <Text style={styles.aligncenter}>Stroke Diseases</Text>
      </View>
    </View>
  </TouchableOpacity>

  <TouchableOpacity>
    <View style={styles.marginten}>
      <View style={styles.bordermcq}>
        <Text style={styles.aligncenter}>All of the Above</Text>
      </View>
    </View>
  </TouchableOpacity>

  <View style={{marginBottom:20}}></View>
</Card>
{/* Take poll end  */}



{ allPost && allPost.map((element, index)=>{
  return (
<Card style={{marginTop:20, borderRadius:10,shadowRadius:10, padding:15}} key={index}>
  <View style={styles.marginten}>
    <Text style={{fontSize:16, fontWeight:'600'}}>Suggested Post</Text>
      <Entypo name="cross"  onPress={closeModal}  size={20} color="#45B5C0" style={{ alignSelf:'flex-end', fontWeight:'200', zIndex:1, marginTop:-20}} />
  </View>
  <View style={{width:'100%', height:1, backgroundColor:'#D5DEED', marginTop:10, }}></View>

  <View style={styles.userInfo}>
    <View  style={{flexDirection:'row',alignItems:'center'}}>
      <Image source={profileimg} onPress={() => navigation.navigate('ProfileScreen2')} style={{width:38, height:38,marginRight:5}} ></Image>
        <View >
          <Text style={{fontSize:14, fontWeight:'400'}}>
            {element.role =='4' ? 'Dr.' : ''} { element.first_name && element.first_name} {element.last_name && element.last_name} 
            <MaterialCommunityIcons name="check-decagram" size={12} color="#0F9C69" />
          </Text>
          <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{marginLeft:5}}>
                <FontAwesome5 name="users" size={17} color="#45B5C0" />  
              </Text>
              <View style={styles.dot}/>
              <Text style={{fontSize:12, fontWeight:'400',color:'#2376E5'}}>{element.speciality && element.speciality}</Text>
              <Text style={{marginHorizontal:4}}>
                <Ionicons name="time-outline" size={19} color="#51668A" />  
              </Text>
              <Text style={{fontSize:12, paddingRight:5, fontWeight:'400',color:'#51668A'}}>{element.post_date} 1hr ago</Text>
          </View>
        </View> 
    </View>

    <View>
      <Svg width="7" height="20" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M3.5 1.55552C3.5 0.696472 2.82839 0 2 0C1.17161 0 0.5 0.696472 0.5 1.55552C0.5 2.41458 1.17161 3.11105 2 3.11105C2.82839 3.11105 3.5 2.41458 3.5 1.55552ZM3.5 8C3.5 7.14095 2.82839 6.44448 2 6.44448C1.17161 6.44448 0.5 7.14095 0.5 8C0.5 8.85905 1.17161 9.55552 2 9.55552C2.82839 9.55552 3.5 8.85905 3.5 8ZM3.5 14.4445C3.5 13.5854 2.82839 12.889 2 12.889C1.17161 12.889 0.5 13.5854 0.5 14.4445C0.5 15.3035 1.17161 16 2 16C2.82839 16 3.5 15.3035 3.5 14.4445Z" fill="#51668A"/>
      </Svg>
    </View>
  </View>

  <View style={{ flexDirection:'row',paddingVertical:10}}>
    <Text style={{color:'#51668A', }}>
    { element.ptitle && element.ptitle }
    </Text>
  </View>

  <View>
    <Image source={element.imgPath?{uri:element.imgPath}:''} style={{width:"100%",height:200,borderRadius:2}}/>
  </View>

  <View style={{ flex: 1, flexDirection: 'row',marginTop:10}}>
      <View style={{ flexDirection: 'row',marginVertical:5  }}>
        <View style={{paddingRight:5, flexDirection:'row'}}>
          <TouchableOpacity>
            {/* <AntDesign name={liked?"heart":"hearto"} size={22} color="red"
              onPress={()=>{setLiked(!liked)}}/> */}
              <Image source={SmilingFacewithHeart} onPress={()=>{setLiked(!liked)}}/>
          </TouchableOpacity>
          <Text style={{paddingLeft:10,color:'#51668A'}}>{element.likecount}k</Text>
        </View>

        <View style={{paddingLeft:20, flexDirection:'row'}}>
          <TouchableOpacity>
            {/* <FontAwesome5 name="comment-alt" size={20} color="black" /> */}
            <Svg width="20" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
             <Path d="M15.5691 1H4.38122C2.54144 1 1 2.5 1 4.4V16.4C1 16.65 1.14917 16.85 1.39779 16.95C1.49724 17 1.54696 17 1.64641 17C1.79558 17 1.94475 16.95 2.09392 16.8L4.67956 14.35H15.6188C17.4586 14.35 19 12.85 19 10.95V4.35C18.9503 2.5 17.4586 1 15.5691 1ZM17.7072 10.95C17.7072 12.15 16.7624 13.1 15.5691 13.1H4.38122C4.23204 13.1 4.08287 13.15 3.9337 13.25L2.24309 14.9V4.35C2.24309 3.15 3.18785 2.2 4.38122 2.2H15.5691C16.7624 2.2 17.7072 3.15 17.7072 4.35V10.95Z" fill="#51668A" stroke="#51668A" stroke-width="0.6"/>
            </Svg>
          </TouchableOpacity>
          <Text style={{paddingLeft:10,color:'#51668A'}}>{element.commentcount}K</Text>
        </View>

        

        <View style={{paddingLeft:20, flexDirection:'row'}}>
          <TouchableOpacity>
            <Svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <Path d="M13.9991 3.53823L13.9739 3.60574H14.046H14.3898C14.616 3.62756 14.8357 3.69389 15.0363 3.80095C15.2375 3.90837 15.4155 4.05467 15.5599 4.23138C15.7043 4.40809 15.8123 4.61172 15.8777 4.83048C15.943 5.04924 15.9644 5.2788 15.9406 5.50589L15.9403 5.50586V5.5111V8.71079H15.9401L15.9405 8.71558C15.9809 9.13435 15.8733 9.55402 15.6366 9.90161C15.3999 10.2492 15.0489 10.5027 14.6448 10.6181L14.6086 10.6284V10.6662V14.5135C14.5904 14.9094 14.4171 15.2822 14.1261 15.551C13.8349 15.82 13.4494 15.963 13.0534 15.949L13.0534 15.949H13.0516H2.94837V15.9489L2.94653 15.949C2.55618 15.9633 2.17557 15.825 1.88529 15.5633C1.59543 15.3019 1.41835 14.9381 1.39143 14.5485V10.6662V10.6284L1.35516 10.6181C0.951065 10.5027 0.600134 10.2492 0.363406 9.90161C0.126677 9.55402 0.0191329 9.13435 0.0594871 8.71558L0.0597177 8.71561V8.71079L0.0597177 5.5111H0.0599922L0.0594446 5.50589C0.0356155 5.2788 0.0569866 5.04924 0.122322 4.83048C0.187656 4.61172 0.295659 4.40809 0.440081 4.23138C0.584503 4.05467 0.76248 3.90837 0.96372 3.80095C1.16427 3.69389 1.38395 3.62756 1.61016 3.60574H1.95402H2.0261L2.00085 3.53823C1.89658 3.25941 1.84061 2.96482 1.83535 2.66715C1.8539 1.95777 2.15195 1.28452 2.66447 0.794309C3.17723 0.30386 3.86301 0.0364737 4.57202 0.0505272C5.2728 0.065686 5.95663 0.269182 6.5519 0.639715C7.14719 1.01025 7.63203 1.53421 7.95564 2.15672L8 2.24206L8.04436 2.15672C8.36797 1.53421 8.85281 1.01025 9.4481 0.639715C10.0434 0.269183 10.7272 0.065687 11.428 0.0505274C12.137 0.0364722 12.8228 0.303858 13.3355 0.794309C13.848 1.28452 14.1461 1.95777 14.1647 2.66714C14.1594 2.96482 14.1034 3.25941 13.9991 3.53823ZM14.2147 8.93855H14.2564L14.2639 8.89747C14.2753 8.83431 14.2756 8.76963 14.2647 8.7064V5.51549C14.2756 5.45226 14.2753 5.38759 14.2639 5.32442L14.2564 5.28334H14.2147H8.88781H8.83781V5.33334V8.88855V8.93855H8.88781H14.2147ZM11.424 1.72822L11.424 1.72816L11.4214 1.72845C10.9158 1.78484 10.4372 1.98564 10.0425 2.30689C9.64778 2.62814 9.35373 3.05626 9.19541 3.54019L9.17397 3.60574H9.24293H11.4255C11.6896 3.62076 11.9491 3.53132 12.148 3.35665C12.3473 3.18166 12.4697 2.9352 12.4889 2.67056L12.4894 2.67059L12.4889 2.66333C12.4697 2.39869 12.3473 2.15222 12.148 1.97723C11.9487 1.80224 11.6887 1.71279 11.424 1.72822ZM3.51109 2.66333L3.51056 2.66329L3.51109 2.67056C3.53027 2.9352 3.65272 3.18166 3.85199 3.35665C4.05089 3.53132 4.31036 3.62076 4.5745 3.60574H6.74819H6.81712L6.79572 3.54022C6.63804 3.05757 6.34536 2.63032 5.95241 2.30919C5.55946 1.98805 5.08273 1.7865 4.57878 1.72847L4.57879 1.72839L4.57597 1.72822C4.31133 1.71279 4.05126 1.80224 3.85199 1.97723C3.65272 2.15222 3.53027 2.39869 3.51109 2.66333ZM1.78534 5.28334H1.74359L1.73614 5.32443C1.72469 5.38759 1.72442 5.45226 1.73534 5.51549V8.7064C1.72442 8.76963 1.72469 8.83431 1.73614 8.89747L1.74359 8.93855H1.78534H7.11219H7.16219V8.88855V5.33334V5.28334H7.11219H1.78534ZM3.11705 10.6162H3.06705V10.6662V14.2214V14.2714H3.11705H7.11219H7.16219V14.2214V10.6662V10.6162H7.11219H3.11705ZM8.83781 14.2214V14.2714H8.88781H12.8829H12.933V14.2214V10.6662V10.6162H12.8829H8.88781H8.83781V10.6662V14.2214Z" fill="#51668A" stroke="white" stroke-width="0.1"/>
            </Svg>
          </TouchableOpacity>
          <Text style={{paddingLeft:10,color:'#51668A'}}>240</Text>
        </View>

        <View style={{paddingLeft:20,flexDirection:'row'}}>
          <TouchableOpacity>
            {/* <FontAwesome name="send" size={20} color="black" /> */}
            <Svg width="20" height="20" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
             <Path d="M10.7972 16.1916L10.7972 16.1916L10.7966 16.1892L9.02808 9.05565L9.01309 8.9952L8.95222 8.98199L0.811266 7.21548C0.81111 7.21544 0.810954 7.21541 0.810799 7.21537C0.618131 7.17148 0.444894 7.06642 0.317021 6.91594C0.18909 6.7654 0.113457 6.57751 0.101435 6.38043C0.0904246 6.18574 0.143015 5.99273 0.251306 5.83046C0.359486 5.66836 0.517406 5.54569 0.701352 5.48088C0.701608 5.48079 0.701864 5.4807 0.702119 5.48061L16.7174 0.147642L16.718 0.147461C16.8761 0.0938231 17.0461 0.0854631 17.2087 0.123329C17.3713 0.161194 17.52 0.24377 17.6381 0.361697C17.7561 0.479624 17.8388 0.628192 17.8767 0.790585C17.9145 0.952742 17.9062 1.12223 17.8527 1.27993C17.8527 1.28016 17.8526 1.28039 17.8525 1.28062L12.514 16.2798L12.514 16.2798L12.5131 16.2824C12.4557 16.4593 12.3444 16.6138 12.1949 16.7246C12.0456 16.8351 11.8655 16.8964 11.6797 16.9H11.63C11.4334 16.8885 11.2459 16.8134 11.0958 16.686C10.9449 16.5581 10.8401 16.3845 10.7972 16.1916ZM4.74819 6.03814L4.40337 6.15376L4.75882 6.23069L9.96431 7.35739L9.9644 7.35741C10.1338 7.39392 10.289 7.47843 10.4116 7.60082C10.5341 7.72322 10.6187 7.87829 10.6552 8.04745L10.6552 8.04766L11.7898 13.2478L11.8674 13.6035L11.9823 13.2581L15.5328 2.59109L15.596 2.40101L15.4061 2.4647L4.74819 6.03814Z" fill="#51668A" stroke="white" stroke-width="0.2"/>
            </Svg>

          </TouchableOpacity>
          <Text style={{paddingLeft:10,color:'#51668A'}}>4k</Text>
        </View>
      </View>
  </View>
  <View style={{flexDirection:'row',marginTop:10,marginLeft:10, marginBottom:10}}>
      <Image source={oval}style={{marginLeft:-10, borderColor:'#000'}}/>
      <Image source={oval}style={{marginLeft:-10, borderColor:'#000'}}/>
      <Image source={oval}style={{marginLeft:-10, borderColor:'#000'}}/>
      <Text style={{fontSize:12, fontWeight:'400',color:'#51668A',padding:5}}>Liked by Kunal Patel and 44,686 others</Text>
  </View>
  </Card>)

})}




  {/* 3rd Card  */}
  <Card style={{marginTop:20, borderRadius:10,shadowRadius:10,}}>
  
  <View  style={{flexDirection:'row',marginTop:10}}>
  <Image source={profileimg} style={{margin:10,width:38, height:38,}}></Image>
  <View style={{margin:0}}>
  <Text style={{marginTop:10, fontSize:14, fontWeight:'400'}}>Pediasure
  
  </Text>
  
  <View style={{flexDirection:'row',}}>
  <Foundation name="clock" size={16} color="#51668A" />
  <Text style={{marginLeft:1,fontSize:12, fontWeight:'400',}}>
8min ago</Text>
<View style={{
borderStyle: 'solid',
borderWidth: 2,
height:2,
backgroundColor:'#000',
borderRadius: 12,
marginTop:6,
marginLeft:10,
marginRight:5

}}>
</View>
<Text style={{fontSize:12, fontWeight:'400'}}>
Sponsored </Text>
<Text style={{marginLeft:5}}>
<TouchableOpacity>
<Ionicons name="md-earth" size={13} color="#45B5C0" />  
</TouchableOpacity>
</Text>

</View>
  </View> 
</View>
  <View style={{alignSelf:'flex-end', zIndex:1, marginTop:-40, marginBottom:10, marginEnd:10}}>
  <Entypo name="dots-three-vertical" size={22} color="#51668A" style={{}} />
  </View>

  <View style={{marginTop:10}}>
    <Image source={ban1} style={{width:'95%', height:297, alignSelf:'center'}}/>
    <View style={styles.imgblackstrip}>
    </View>
   
    <Text style={{color:'#FFFFFF', zIndex:2, marginTop:-30, marginLeft:30 }}>Visit Now</Text>
    <Text style={{alignSelf:'flex-end', marginRight:20, marginTop:-20,}}>
    <AntDesign name="right" size={22} color="white"  />
    </Text>
    
    
  </View>
 

  <View style={{ flex: 1, flexDirection: 'row', marginTop:15, marginBottom:15}}>
              <View style={{ flexDirection: 'row',  }}>
              <View style={{padding:5,marginLeft:8, flexDirection:'row'}}>
              <AntDesign name={liked?"heart":"hearto"} size={22} color="red"
              onPress={()=>{
                setLiked(!liked)
              }}
               /><Text style={{paddingLeft:10,color:'#51668A'}}>21k</Text>

              </View>
              <View style={{paddingLeft:20, paddingTop:5, flexDirection:'row'}}>
              <FontAwesome5 name="comment-alt" size={20} color="black" /><Text style={{paddingLeft:10,color:'#51668A'}}>2.1k</Text>

              </View>
              <View style={{paddingLeft:20, marginTop:5, flexDirection:'row'}}>
              <FontAwesome name="send" size={20} color="black" /><Text style={{paddingLeft:10,color:'#51668A'}}>4k</Text>
              </View>
              <View style={{paddingLeft:20, marginTop:2, flexDirection:'row'}}>
              <AntDesign name="gift" size={24} color="black" /><Text style={{paddingLeft:10,marginTop:4,color:'#51668A'}}>240</Text>
              </View>
             
              </View>
              </View>
          
  
  </Card>


  {/* 4th card  */}
  <Card style={{marginTop:20, borderRadius:10,shadowRadius:10,}}>
  <View style={{marginBottom:10}}>
  <View style={{marginTop:20,marginLeft:10, }}>
  <Text style={{fontSize:16, fontWeight:'900', color:'#071B36'}}>Fast Company</Text>
 </View>
  <View style={{alignSelf:'flex-end', zIndex:1, marginTop:-20, marginBottom:0, marginEnd:10}}>
  <Entypo name="dots-three-vertical" size={22} color="#51668A" style={{}} />
  </View>
  </View>
 

  <View style={{marginTop:10}}>
    <Image source={ban2} style={{width:'95%', height:140, alignSelf:'center'}}/>  
  </View>
 
<View style={{padding:10}}>
  <Text style={{lineHeight:18,fontSize:12, fontWeight:'400', color:'#51668A'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis, diam a cursus egestas.</Text>
</View>
<View style={{padding:10, flexDirection:'row'}}>
<Foundation name="clock" size={16} color="#51668A" style={{marginRight:9,}} />

  <Text style={{color:'#51668A', fontSize:12, fontWeight:'400'}}>21hrs ago | By Dr.Vasudev</Text>
</View>
 
          
  
  </Card>
  {/* 6th card  */}

  <Card style={{marginTop:20, borderRadius:10,shadowRadius:10,}}>
  <View  style={{flexDirection:'row',}}>
  <Image source={profileimg} style={{margin:10,width:38, height:38,}}></Image>
  <View style={{margin:0}}>
  <Text style={{marginTop:10, fontSize:14, fontWeight:'400'}}>Dr. Kiran <MaterialCommunityIcons name="check-decagram" size={12} color="#0F9C69" />
  
  </Text>
  
  <View style={{flexDirection:'row',}}>
  <Text style={{marginLeft:1,fontSize:12, fontWeight:'400'}}> Yesterday 11:30PM</Text>
<View style={{
borderStyle: 'solid',
borderWidth: 2,
height:2,
backgroundColor:'#000',
borderRadius: 12,
marginTop:6,
marginLeft:10,
marginRight:5

}}>
</View>
<Text style={{fontSize:12, fontWeight:'400'}}>
Cardiologist </Text>
<Text style={{marginLeft:5}}>
<Ionicons name="md-earth" size={13} color="#45B5C0" />  
</Text>

</View>
  </View> 
</View>
  <View style={{alignSelf:'flex-end', zIndex:1, marginTop:-40, marginBottom:10, marginEnd:10}}>
  <Entypo name="dots-three-vertical" size={22} color="#51668A" style={{}} />
  </View>
  <View style={{padding:20, flexDirection:'row'}}>
    <Text>
    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur.#new_venture 
    </Text>
 
  </View>

 <View style={{height:130, backgroundColor:'#45B5C0', opacity:0.5, marginBottom:10 }}>
{/* audio start here */}
                <View>
                <View >
                    {/* <View style={{paddingRight:2, paddingLeft:2, marginTop:10}}>
                        <Text style={styles.songStyle}>20:00</Text>
                    </View> */}
                     {/* <ProgressBarAndroid style={{marginLeft:10, marginRight:10}} styleAttr="Horizontal" color="#0E8F9A" indeterminate={false} progress={0.1} /> */}
                    <View>
                    <View style={styles.ProgressLabeContainer}>
                          <Text style={styles.ProgressLabelTxt}>{duration.toFixed(2)}</Text>
                          <Text style={styles.ProgressLabelTxt}>-{(maximumValue - duration).toFixed(2)}</Text>
                          </View> 
                    <Slider
                      style={styles.Progressbarcontainer}
                      onValueChange = {(value) => setDuration(value)}
                      value={10}
                      minimumValue={0}
                      maximumValue={maximumValue}
                      thumbTintColor="#00545B"
                      maximumTrackTintColor="#ffff"
                    
                      onSlidingComplete={()=>{}}
                    />
                         
                          <View style={styles.MusicController}>
                            <TouchableOpacity onPress={()=> {}}>
                            <Ionicons name="play-skip-back-outline" size={30} color="black" style={{marginTop:20}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> tooglePlay()}>
                            <Ionicons name={isPlaying ? "ios-pause-circle":"ios-play-circle"} size={60} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{}}>
                            <Ionicons name="md-play-skip-forward-outline" size={30} color="black" style={{marginTop:20}} />
                            </TouchableOpacity>
                          </View>
                        
                    </View>                        
                </View>

            </View>
{/* audio end here */}
 </View>

  <View style={{ flex: 1, flexDirection: 'row'}}>
              <View style={{ flexDirection: 'row',  }}>
              <View style={{padding:5,marginLeft:5, flexDirection:'row'}}>
              <AntDesign name={liked?"heart":"hearto"} size={22} color="red"
              onPress={()=>{
                setLiked(!liked)
              }}
               /><Text style={{paddingLeft:10,color:'#51668A'}}>21k</Text>

              </View>
              <View style={{paddingLeft:20, paddingTop:5, flexDirection:'row'}}>
              <FontAwesome5 name="comment-alt" size={20} color="black" /><Text style={{paddingLeft:10,color:'#51668A'}}>2.1k</Text>

              </View>
              <View style={{paddingLeft:20, marginTop:5, flexDirection:'row'}}>
              <FontAwesome name="send" size={20} color="black" /><Text style={{paddingLeft:10,color:'#51668A'}}>4k</Text>
              </View>
              <View style={{paddingLeft:20, marginTop:2, flexDirection:'row'}}>
              <AntDesign name="gift" size={24} color="black" /><Text style={{paddingLeft:10,marginTop:4,color:'#51668A'}}>240</Text>
              </View>
             
              </View>
              </View>
              <View style={{flexDirection:'row',marginLeft:10 , marginTop:10, marginBottom:10}}>
                <Image source={oval} ></Image>
                <Image source={oval}style={{zIndex:1, marginLeft:-10, borderColor:'#000'}} ></Image>
                <Image source={oval}style={{zIndex:1, marginLeft:-10, borderColor:'#000'}} ></Image>
                {/* <Image source={oval}></Image> */}
                <Text style={{fontSize:12, fontWeight:'400',color:'#687690',padding:5}}>Liked by Kunal Patel and 44,686 others</Text>
               </View>
  
  </Card>


  {/* 7th card */}
  <Card style={{marginTop:20, borderRadius:10,shadowRadius:10,}}>
  <View  style={{flexDirection:'row',}}>
  <Image source={profileimg} style={{margin:10,width:38, height:38,}}></Image>
  <View style={{margin:0}}>
  <Text style={{marginTop:10, fontSize:14, fontWeight:'400'}}>Dr. Kiran <MaterialCommunityIcons name="check-decagram" size={12} color="#0F9C69" /></Text>
  <View style={{flexDirection:'row',}}>
  <Text style={{marginLeft:1,fontSize:12, fontWeight:'400'}}> Yesterday 11:30PM</Text>
    <View style={{
    borderStyle: 'solid',
    borderWidth: 2,
    height:2,
    backgroundColor:'#000',
    borderRadius: 12,
    marginTop:6,
    marginLeft:10,
    marginRight:5
    }}></View>
<Text style={{fontSize:12, fontWeight:'400'}}>Cardiologist </Text>
<Text style={{marginLeft:5}}>
<Ionicons name="md-earth" size={13} color="#45B5C0" />  
</Text>

</View>
  </View> 
</View>
  <View style={{alignSelf:'flex-end', zIndex:1, marginTop:-40, marginBottom:10, marginEnd:10}}>
  <Entypo name="dots-three-vertical" size={22} color="#51668A" style={{}} />
  </View>
  <View style={{padding:10,}}>
    <Text>
    Lorem ipsum dolor sit amet ! 😊 
    </Text>
  </View>
  <View style={{flexDirection:'row', marginLeft:10}}>
<Text style={{fontSize:14, fontWeight:'800'}}>Lorem ipsum dolor</Text>
    <View style={{
    borderStyle: 'solid',
    borderWidth: 2,
    height:2,
    backgroundColor:'#000',
    borderRadius: 12,
    marginTop:9,
    marginLeft:10,
    marginRight:5

    }}>
  </View>
  <Text style={{fontSize:12, fontWeight:'400',marginTop:1}}>10 pages </Text>
  </View>

 
 <View style={{marginTop:10, marginRight:10, alignItems:'center', marginBottom:10}}>
      <Carousel
        layout="default"
        layoutCardOffset={1}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>


  <View style={{ flex: 1, flexDirection: 'row'}}>
              <View style={{ flexDirection: 'row',  }}>
              <View style={{padding:5,marginLeft:5, flexDirection:'row'}}>
              <AntDesign name={liked?"heart":"hearto"} size={22} color="red"
              onPress={()=>{
                setLiked(!liked)
              }}
               /><Text style={{paddingLeft:10,color:'#51668A'}}>21k</Text>

              </View>
              <View style={{paddingLeft:20, paddingTop:5, flexDirection:'row'}}>
              <FontAwesome5 name="comment-alt" size={20} color="black" /><Text style={{paddingLeft:10,color:'#51668A'}}>2.1k</Text>

              </View>
              <View style={{paddingLeft:20, marginTop:5, flexDirection:'row'}}>
              <FontAwesome name="send" size={20} color="black" /><Text style={{paddingLeft:10,color:'#51668A'}}>4k</Text>
              </View>
              <View style={{paddingLeft:20, marginTop:2, flexDirection:'row'}}>
              <AntDesign name="gift" size={24} color="black" /><Text style={{paddingLeft:10,marginTop:4,color:'#51668A'}}>240</Text>
              </View>
             
              </View>
              </View>
              <View style={{flexDirection:'row',marginLeft:10 , marginTop:10, marginBottom:10}}>
                <Image source={oval} ></Image>
                <Image source={oval}style={{zIndex:1, marginLeft:-10, borderColor:'#000'}} ></Image>
                <Image source={oval}style={{zIndex:1, marginLeft:-10, borderColor:'#000'}} ></Image>
                {/* <Image source={oval}></Image> */}
                <Text style={{fontSize:12, fontWeight:'400',color:'#687690',padding:5}}>Liked by Kunal Patel and 44,686 others</Text>
               </View>
  
  </Card>

  </View>
  
  <Modal isVisible={isModalVisible} width={320} style={{alignSelf:'center', }}>
        <View>
        <Card >
        <Entypo name="cross" size={16} color="#51668A" onPress={toggleModal} style={{alignSelf:'flex-end'}} />
       
          <Text style={{fontSize:18, fontWeight:'600',marginTop:20, alignSelf:'center',color:"#51668A", fontSize:18, fontWeight:'500'}}>View your collected DocCoins here</Text>
          <View style={{flexDirection:'row', margin:10, marginTop:20, marginBottom:20}}>
          <Button
            
            title="Skip"
            type="outline"
            buttonStyle={{
              borderColor: '#2C8892',
              
              borderRadius:15/2,
              height:48,
              width:136,
             marginLeft:10
            }}
            titleStyle={{
              color:'#2C8892'
            }}/>
            <Button
        
            title="Next"
            type="outline"
            buttonStyle={{
              borderColor: '#2C8892',
              backgroundColor:'#2C8892',
              borderRadius:15/2,
              height:48,
              width:136,
              marginLeft:10
            }}
            titleStyle={{
              color:'#FFFF'
            }}/>
          </View> 
        
          
          
          </Card>
        </View>
      
      </Modal>
  <View style={{marginBottom:50}}></View>
{/* Modal doccoins view  */}

  </ScrollView>
  </SafeAreaView>
  );
}


const styles = StyleSheet.create({
   d:{
    width:16, 
    height:16, 
    alignSelf:'flex-start', 
    marginVertical:5, 
    marginHorizontal:5
  },
  count:{
    color:'#000',
    marginVertical:5,
    fontSize:16, 
    fontWeight:'600' 
  },
  whtsnewtxt:{
    alignSelf:'center', 
    paddingLeft:12,
     fontSize:14,
     fontWeight:'400',
     color:'#51668A'
  },
  questions:{
    fontSize:14,
    fontWeight:'400',
    color:"#071B36",
    padding:10

  },
  marginten:{
    margin:10
  },
  bordermcq:{
    borderColor:'#D5DEED',
     borderRadius:10,
     padding:12,
     borderWidth:2
  },
  aligncenter:{
    alignSelf:'center'
  },
  careticon:{
    backgroundColor:'#45B5C0',
     borderRadius:50/2,
     width:30,
     height:30,
     padding:2,
     marginTop:-60,
     marginBottom:30,
    alignSelf:'center',
     shadowColor:'#000',
     zIndex:1
  },
  careticontop:{
    backgroundColor:'#45B5C0',
     borderRadius:50/2,
     width:30,
     height:30,
     padding:3,
     marginTop:-100,
     marginBottom:70,
    alignSelf:'center',
     shadowColor:'#000',
     zIndex:99999
  },
  imgblackstrip:{
    backgroundColor:'#000',
     width:'95%',
     padding:20,
     marginLeft:9,
    zIndex:1,
     marginTop:-40,
     opacity:0.6,
     height:20
  },
 
  songStyle:{
    marginLeft:10
  },
  Progressbarcontainer:{
    width:350,
    height:40,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20,
   
  },
  ProgressLabeContainer:{
 width:340,
 flexDirection:'row',
 justifyContent:'space-between',
alignSelf:'center',
marginTop:10
  },
  ProgressLabelTxt:{
 color:'#000',
 marginRight:20
  },
  MusicController:{
    marginTop:-30,
    alignSelf:'center',
    flexDirection:'row',
    width:'60%',
    justifyContent:'space-between'
  },
  userInfo:{
    justifyContent:'space-between',
    paddingVertical:10,
    flexDirection:'row',
    alignItems:'center'
    
  },
  dot:{
    borderStyle: 'solid', 
    borderWidth: 2, 
    borderColor:'#51668A',
    height:2,
    borderRadius: 12,
    marginTop:6, 
    marginHorizontal:5
  }
  });

export default HomeScreen
  