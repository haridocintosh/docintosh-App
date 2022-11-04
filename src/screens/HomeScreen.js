import React, {useState, useEffect,useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,ActivityIndicator,
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
import drban from '../assets/images/drban.png';
import bgtophome from '../assets/images/bg-top-home.png';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/CarouselCardItem'
import Slider from '@react-native-community/slider';
import { userPostData } from '../../redux/reducers/postData';


const HomeScreen = ()=> {
// like unlike fun=>
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying]   = useState(false);
  const [allPost, setallPost]       = useState([])
  const [loader, setLoader] = useState(true);
  const [userdata, setuserdata]     = useState({
    profile:''
  });
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
    setLoader(false)
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
//console.log('1111',allPost);

if(loader){
  return(
  <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
      <ActivityIndicator size={'large'} color={"#2C8892"}/>
  </View>)
}
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
  {/* <Card style={{marginTop:20, borderRadius:10,shadowRadius:10,}}>
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
</Card> */}
{/* Take poll end  */}


{ allPost &&  allPost.filter(allPost => allPost.user_role == 4).map((element, index)=>{
  return (
<Card style={{marginTop:20, borderRadius:10,shadowRadius:10,}} key={index}>
  {/* <View style={styles.marginten}>
    <Text style={{fontSize:16, fontWeight:'600'}}>Suggested Post</Text>
      <Entypo name="cross"  onPress={closeModal}  size={20} color="#45B5C0" style={{ alignSelf:'flex-end', fontWeight:'200', zIndex:1, marginTop:-20}} />
  </View>
  <View style={{width:'100%', height:1, backgroundColor:'#D5DEED', marginTop:10, }}></View> */}

  <View  style={{flexDirection:'row'}}>
    <Image source={element.profileimage && {uri:element.profileimage}}  style={{margin:10,width:38, height:38, borderRadius:50}}   onPress={() => navigation.navigate('ProfileScreen2')} />
    <View style={{margin:0}}>
    <Text style={{marginTop:10, fontSize:14, fontWeight:'400'}}>{element.utitle && element.utitle} { element.first_name && element.first_name} {element.last_name && element.last_name} <MaterialCommunityIcons name="check-decagram" size={12} color="#0F9C69" /></Text>
    {/* <View style={{flexDirection:'row',}}>
    <Text style={{marginLeft:1,fontSize:12, fontWeight:'400'}}>{element.post_date} 8min ago</Text>
    <View style={{borderStyle: 'solid', borderWidth: 2, height:2, backgroundColor:'#000', borderRadius: 12,
      marginTop:6, marginLeft:10, marginRight:5}}></View>
    <Text style={{fontSize:12, fontWeight:'400'}}>{element.speciality && element.speciality}</Text>
      <Text style={{marginLeft:5}}>
        <Ionicons name="md-earth" size={13} color="#45B5C0" />  
      </Text>
    </View> */}
    <View style={{flexDirection:'row',}}>
    <Text style={{marginLeft:5}}>
        <FontAwesome5 name="users" size={13} color="#45B5C0" />  
      </Text>
    <View style={{borderStyle: 'solid', borderWidth: 2, height:2, backgroundColor:'#000', borderRadius: 12,
      marginTop:6, marginLeft:3, marginRight:2}}></View>
    <Text style={{fontSize:12, fontWeight:'400'}}>{element.speciality && element.speciality} </Text>
    <View style={{borderStyle: 'solid', borderWidth: 2, height:2, backgroundColor:'#000', borderRadius: 12,
      marginTop:6, marginLeft:3, marginRight:1}}></View>
    <Text style={{marginRight:2}}>
        <Ionicons name="time-outline" size={16} color="#51668A" />  
      </Text>
    <Text style={{fontSize:12, width:"100%", paddingRight:5, fontWeight:'400'}}>{element.post_date} 1hr ago</Text>
      
    </View>
  </View> 
</View>

  <View style={{alignSelf:'flex-end', zIndex:1, marginTop:-40, marginBottom:10, marginEnd:10}}>
    <Entypo name="dots-three-vertical" size={22} color="#51668A" style={{}} />
  </View>
  <View style={{padding:20, flexDirection:'row'}}>
    <Text>
   { element.ptitle && element.ptitle }
    </Text>
  </View>

  <View>
    <Image source={element.imgPath?{uri:element.imgPath}:''} style={{width:320,height:200, alignSelf:'center'}}/>
    {/* <View style={styles.careticontop}>
    <AntDesign name="caretright" size={24} color="#fff"  style={{zIndex:1,}}/>
  </View>  */}
  </View>

  <View style={{flexDirection:'row', padding:10}}>
  {/* <View style={{paddingRight:10}}>
    <Image source={grid2} style={{width:110,height:110, alignSelf:'center'}}></Image>
    <View style={styles.careticon}>
    <AntDesign name="caretright" size={24} color="#fff"  />
    </View>
  </View> */}
  {/* <View style={{paddingRight:10}}>
    <Image source={grid2} style={{width:110,height:110, alignSelf:'center'}}></Image>
     <View style={styles.careticon}>
    <AntDesign name="caretright" size={24} color="#fff"  />
    </View>
  </View> */}
  {/* <View>
    <Image source={grid2} style={{width:110,height:110, alignSelf:'center',opacity:0.6, backgroundColor:'#000'}}></Image>
     <View style={{width:30,
     height:30,
     padding:2,
     marginTop:-60,
     marginBottom:30,
    alignSelf:'center',
     shadowColor:'#000',
     zIndex:1}}>
     <Text style={{color:'#fff',fontSize:20,fontWeight:'900'}}>4+</Text>
    </View>
  </View> */}
  </View>

  <View style={{ flex: 1, flexDirection: 'row'}}>
              <View style={{ flexDirection: 'row',  }}>
              <View style={{padding:5,marginLeft:5, flexDirection:'row'}}>
              <TouchableOpacity>
              <AntDesign name={liked?"heart":"hearto"} size={22} color="red"
              onPress={()=>{
                setLiked(!liked)
              }}
               />
              </TouchableOpacity>
              
              <Text style={{paddingLeft:10,color:'#51668A'}}>{element.likecount}k</Text>

              </View>
              <View style={{paddingLeft:20, paddingTop:5, flexDirection:'row'}}>
              <TouchableOpacity>
              <FontAwesome5 name="comment-alt" size={20} color="black" />
              </TouchableOpacity>
              <Text style={{paddingLeft:10,color:'#51668A'}}>{element.commentcount}K</Text>

              </View>
              <View style={{paddingLeft:20, marginTop:5, flexDirection:'row'}}>
              <TouchableOpacity>
              <FontAwesome name="send" size={20} color="black" />
              </TouchableOpacity>
              <Text style={{paddingLeft:10,color:'#51668A'}}>4k</Text>
              </View>
              <View style={{paddingLeft:20, marginTop:2, flexDirection:'row'}}>
              <TouchableOpacity>
              <AntDesign name="gift" size={24} color="black" />
              </TouchableOpacity>
              <Text style={{paddingLeft:10,marginTop:4,color:'#51668A'}}>240</Text>
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
  
  </Card>)

})}




  {/* 3rd Card  */}
  {/* <Card style={{marginTop:20, borderRadius:10,shadowRadius:10,}}>
  
  <View  style={{flexDirection:'row',marginTop:10}}>
  <Image source={profileimg} style={{margin:10,width:38, height:38,}}></Image>
  <View style={{margin:0}}>
  <Text style={{marginTop:10, fontSize:14, fontWeight:'400'}}>Pediasure
  
  </Text>
  
  <View style={{flexDirection:'row',}}>
  <Foundation name="clock" size={16} color="#51668A" />
  <Text style={{marginLeft:1,fontSize:12, fontWeight:'400',}}>8min ago</Text>
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
          
  
  </Card> */}

  {/* 3rd Card End */}


  {/* 4th card  */}
  {/* <Card style={{marginTop:20, borderRadius:10,shadowRadius:10,}}>
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
 
        
  </Card> */}

  {/* 4th card end  */}
  {/* 6th card  */}

  {/* <Card style={{marginTop:20, borderRadius:10,shadowRadius:10,}}>
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
    marginRight:5 }}>
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

                <View>
                <View >
                   
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
              
                <Text style={{fontSize:12, fontWeight:'400',color:'#687690',padding:5}}>Liked by Kunal Patel and 44,686 others</Text>
               </View>
  </Card> */}

  {/* 6th card end  audio included */}

  {/* 7th card */}
  {/* <Card style={{marginTop:20, borderRadius:10,shadowRadius:10,}}>
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
              
                <Text style={{fontSize:12, fontWeight:'400',color:'#687690',padding:5}}>Liked by Kunal Patel and 44,686 others</Text>
               </View>
  
  </Card> */}
  {/* 7th card end here */}

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
  });

export default HomeScreen
  