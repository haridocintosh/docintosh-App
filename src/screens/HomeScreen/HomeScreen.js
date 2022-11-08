import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
  Animated
} from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import d  from '../../assets/dr-icon/d.png'
import discount1  from '../../assets/dr-icon/discount1.png';
import Modal from "react-native-modal";
import { Button , } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Ionicons,MaterialCommunityIcons,AntDesign,FontAwesome5,Feather} from '@expo/vector-icons';
import profileimg from '../../assets/images/p2.png';
import oval from '../../assets/dr-icon/Oval.png';
import bgtophome from '../../assets/images/bg-top-home.png';
import { userPostData } from '../../../redux/reducers/postData';
import Svg, {Path} from 'react-native-svg';
import PublicReactions from './PublicReactions';
import  {HeaderImageScrollView, TriggeringView } from 'react-native-image-header-scroll-view';


const HomeScreen = ()=> {
// like unlike fun =>
  const [sliceData, setSliceData] = useState(10);
  const [loader, setLoader] = useState(true);
  const [isPlaying, setIsPlaying]   = useState(false);
  const [userdata, setuserdata]     = useState({
    profile:'',
    user_id:''
  });
  const [allPost, setallPost]  = useState([]);

  const scrollPosition = useRef(new Animated.Value(0)).current;

  const dispatch = useDispatch();
  const tooglePlay =() =>{
     isPlaying === false ? setIsPlaying(true) : setIsPlaying(false);
  };
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
 
  const [isModalVisible, setModalVisible] = useState(false);
  const [liked, setLiked] = useState(false)
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  const closeModal = () => {
    setVisible(false);
  };

  useEffect(()=>{
    asyncFetchDailyData();
  },[]);

  const asyncFetchDailyData = async () => {
    const jsonValue = await AsyncStorage.getItem('USER_INFO');
    const data=await JSON.parse(jsonValue);
    const result=JSON.parse(data)['data'];
    setuserdata({
      profile:result['profileimage'],
      user_id:result['id']
    });
    fetchPostData(result['role'],result['city_id'], result['assoc_id'], result['profileimage'], result['id'])
  }

  const fetchPostData = async (role,city_id,assoc_id,profileimage,userId)=>{ 
    const postDetails = {role,city_id,assoc_id,profileimage,userId}
    const result = await dispatch(userPostData(postDetails));
    const allPostData = result.payload.filter(Post => Post.user_role != 5)
   // setallPost(result.payload);
    setallPost(allPostData);
    setLoader(false)
  }
  
  const dimensions = Dimensions.get('window');
 
  const handlePost = (item) => {
    // console.log("hgghg",val);
    navigation.navigate('PostsScreen', {item:item})
  }

  if(loader){
    return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
        <ActivityIndicator size={'large'} color={"#2C8892"}/>
    </View>)
  }


    const renderItem = ({item}) => {
      return(
        <Card style={styles.cardOfPosts} >
          <View style={styles.userInfo}>
            <View  style={{flexDirection:'row',alignItems:'center'}}>
              <Image source={profileimg} onPress={() => navigation.navigate('ProfileScreen2')} style={{width:38, height:38,marginRight:5}} ></Image>
                <View >
                  <Text style={{fontSize:14, fontWeight:'400'}}>
                   {item.utitle && item.utitle} { item.first_name && item.first_name} {item.last_name && item.last_name} 
                    <MaterialCommunityIcons name="check-decagram" size={12} color="#0F9C69" />
                  </Text>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Text style={{marginLeft:5}}>
                        <FontAwesome5 name="users" size={17} color="#45B5C0" />  
                      </Text>
                      <View style={styles.dot}/>
                      <Text style={{fontSize:12, fontWeight:'400',color:'#2376E5'}}>{item.speciality && item.speciality}</Text>
                      <Text style={{marginHorizontal:4}}>
                        <Ionicons name="time-outline" size={19} color="#51668A" />  
                      </Text>
                      <Text style={{fontSize:12, paddingRight:5, fontWeight:'400',color:'#51668A'}}>1hr ago</Text>
                      {/* {item.post_date}  */}
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
            { item.ptitle && item.ptitle }
            </Text>
          </View>

          <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}} onPress={() => handlePost(item)} >
            <Image source={item.imgPath?{uri:item.imgPath}:''} 
            style={{width:"100%",height:200,borderRadius:2}} resizeMode="center"/>
          </TouchableOpacity>

          <PublicReactions item={item}/>

          <View style={{flexDirection:'row',marginTop:5,marginLeft:10, marginBottom:10}}>
              <Image source={oval}style={{marginLeft:-10, borderColor:'#000'}}/>
              <Image source={oval}style={{marginLeft:-10, borderColor:'#000'}}/>
              <Image source={oval}style={{marginLeft:-10, borderColor:'#000'}}/>
              <Text style={{fontSize:12, fontWeight:'400',color:'#51668A',padding:5}}>Liked by Kunal Patel and 44,686 others</Text>
          </View>
        </Card>
      )
    }



  return (
  <SafeAreaView>
    {/* <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true}> */}
      <View style={{backgroundColor:'#071B36',}}>
        <ImageBackground source={bgtophome} style={styles.bgtophome}>
          <View style={styles.imageConatentContainer}>
         
            <View style={{flexDirection:'row',alignItems:'center'}}> 
              <TouchableOpacity>
                <Ionicons name="reorder-three-outline" size={34} color="#fff"  />
              </TouchableOpacity>
              <View style={{backgroundColor:'#FFCC00', width:4, height:24,marginHorizontal:10,borderRadius:5}}/>
              <Text style={{fontSize:10, color:'#fff'}}>What’s New</Text>
            </View>

            <View style={{flexDirection:'row'}} >
              <View>
                <Feather name="search" size={24} color="#ffff" onPress={()=>{ navigation.navigate('CommonSearchScreen') }} />
              </View>
              <View style={{marginLeft:10}}>
                <MaterialCommunityIcons name="bell-ring-outline" size={24} color="#ffff" />
              </View>
            </View>

          </View>

         <View style={styles.collectedCoins} >
            <Image source={d} style={styles.d} />
            <Text style={styles.count}>7822 |</Text>
            <Image source={discount1} style={{width:16, height:16, marginVertical:5,  marginHorizontal:5}}></Image>
            <Text style={styles.count}>102</Text>
          </View>

        </ImageBackground>
      </View>
 
    <View style={{padding:10}}>
      <Card style={{marginTop:-35, zIndex:1, borderRadius:50,shadowRadius:10, shadowOffset:10}} onPress={() => navigation.navigate('SharePost')}>
        <View style={{flexDirection:'row' , margin:10}} >
          <Image source={userdata.profile?{uri:userdata.profile}:''}  style={{width:32, height:32, borderRadius:50}}></Image>
          <Text style={styles.whtsnewtxt}>What’s on your mind?</Text>
          <View style={{ marginLeft:'40%', alignSelf:'center'}}>
            <AntDesign name="pluscircle" size={26} color="#D5DEED"/>
          </View>
        </View>
      </Card>

      <View>
         <View style={styles.marginten}>
              <Text style={{fontSize:16, fontWeight:'600'}}>Suggested Post</Text>
              <View style={{width:'100%', height:1, backgroundColor:'#D5DEED', marginTop:10}}></View>
          </View>

          <FlatList
              data={allPost}
              renderItem={renderItem}
              keyExtractor={(item,index) => index}
              // onEndReached={loadMore}
          />
      </View>
      </View>



{/* //removerd data in raugh */}

  
  
  {/* <Modal isVisible={isModalVisible} width={320} style={{alignSelf:'center', }}>
        <View>
        <Card >
        <AntDesign name="close" color={'#51668A'} size={25} style={{alignSelf:'flex-end'}} onPress={toggleModal}/>
       
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
      
  </Modal> */}
  
{/* Modal doccoins view  */}

  {/* </ScrollView> */}
  </SafeAreaView>
  );
}


const styles = StyleSheet.create({
   d:{
    width:17, 
    height:17, 
    marginHorizontal:5,
  },
  count:{
    color:'#fff',
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
    backgroundColor:'#fff',
    padding:15,
    marginTop:15,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
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
  },
  cardOfPosts:{
    marginBottom:25, 
    borderRadius:10,
    shadowRadius:10, 
    padding:15,
    marginTop:-10,
  },
  bgtophome:{ 
    width:'100%', 
    resizeMode:'cover',
    height:150 
  },
  imageConatentContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:15,
    },
    collectedCoins:{
      borderRadius:50, 
      backgroundColor:'#20324a', 
      flexDirection:'row',
      position:'absolute',
      alignSelf:'center',
      bottom:35,
       paddingHorizontal:10,
       alignItems:'center'
    }
  });

export default HomeScreen
  