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
import { styles } from './Homestyle';
import  {HeaderImageScrollView, TriggeringView } from 'react-native-image-header-scroll-view';


const HomeScreen = ()=> {
// like unlike fun =>
  const [loader, setLoader] = useState(true);
  const [isPlaying, setIsPlaying]   = useState(false);
  const [userdata, setuserdata]     = useState({profile:'',user_id:''});
  const [allPost, setallPost]  = useState([]);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [liked, setLiked] = useState(false);

  //---------------- header Animation------------------
  const scrollPosition = useRef(new Animated.Value(0)).current;
  const minHeaderHeight = 100
  const maxHeaderHeight = 160

  const headerHeight = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [maxHeaderHeight, minHeaderHeight],
    extrapolate: 'clamp',
  });
  const opacity = scrollPosition.interpolate({
    inputRange: [0, 100, 200],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });
  const sizeFont = scrollPosition.interpolate({
    inputRange: [0, 100, 200, 300, 400],
    outputRange: [10, 9, 8, 7, 6],
    extrapolate: 'clamp',
  });

  const imagePosition = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [(21 * Dimensions.get('window').width) / 100, 0],
    extrapolateLeft: 'identity',
    extrapolateRight: 'clamp',
  });
  const scoresPosition = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [(10 * Dimensions.get('window').height) / 100, 0],
    extrapolateLeft: 'identity',
    extrapolateRight: 'clamp',
  });


  const tooglePlay =() =>{
    isPlaying === false ? setIsPlaying(true) : setIsPlaying(false);
 };

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
  
  const handlePost = (item) => {
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
                  <Text style={{fontSize:14, fontWeight:'400', fontFamily:"Inter-Regular"}}>
                    {item.role =='4' ? 'Dr.' : ''} { item.first_name && item.first_name} {item.last_name && item.last_name} 
                    <MaterialCommunityIcons name="check-decagram" size={12} color="#0F9C69" />
                  </Text>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Text style={{marginLeft:5}}>
                        <FontAwesome5 name="users" size={17} color="#45B5C0" />  
                      </Text>
                      <View style={styles.dot}/>
                      <Text style={{fontSize:12, fontWeight:'400',color:'#2376E5', fontFamily:"Inter-Regular"}}>{item.speciality && item.speciality}</Text>
                      <Text style={{marginHorizontal:4}}>
                        <Ionicons name="time-outline" size={19} color="#51668A" />  
                      </Text>
                      <Text style={{fontSize:12, paddingRight:5, fontWeight:'400',color:'#51668A,fontFamily:"Inter-Regular"'}}>1hr ago</Text>
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
            <Text style={{color:'#51668A',fontFamily:"Inter-Regular" }}>
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
      <Animated.View style={{backgroundColor:'#071B36',height:headerHeight,position:'relative'}}>
        <Animated.Image source={bgtophome} style={[styles.bgtophome,{height:headerHeight,opacity:opacity}]}/>

          <View style={styles.imageConatentContainer}>
            <View style={{flexDirection:'row',alignItems:'center'}}> 
              <TouchableOpacity>
                <Ionicons name="reorder-three-outline" size={34} color="#fff"  />
              </TouchableOpacity>
              <View style={{backgroundColor:'#FFCC00', width:4, height:24,marginLeft:10,borderRadius:5,zIndex:1}}/>
              <Animated.View style={{backgroundColor:'#3477E0', width:imagePosition, height:24,justifyContent:'center',position:'relative'}}>
                <View style={styles.triangle}/>
                <Text style={{fontSize:10, color:'#fff',marginLeft:10}}>What’s New</Text>
              </Animated.View>
            </View>

            <Animated.View style={{flexDirection:'row'}} >
              <View>
                <Feather name="search" size={24} color="#ffff" onPress={()=>{ navigation.navigate('CommonSearchScreen') }} />
              </View>
              <View style={{marginLeft:10}}>
                <MaterialCommunityIcons name="bell-ring-outline" size={24} color="#ffff" />
              </View>
            </Animated.View>
          </View>

          <Animated.View style={[styles.collectedCoins,{transform: [{translateY: scoresPosition}]}]} >
            <Image source={d} style={styles.d} />
            <Text style={styles.count}>7822 |</Text>
            <Image source={discount1} style={{width:16, height:16, marginVertical:5,  marginHorizontal:5}}></Image>
            <Text style={styles.count}>102</Text>
          </Animated.View>

      </Animated.View>
      
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

          <Animated.FlatList
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollPosition}}}],
                {useNativeDriver: false},
              )}
              contentInsetAdjustmentBehavior="automatic"
              data={allPost}
              renderItem={renderItem}
              keyExtractor={(item,index) => index}
              // onEndReached={loadMore}
              showsVerticalScrollIndicator={false}
          />
      </View>
      
      </View>



{/* //removerd data in raugh */}

  
  
  {/* <Modal isVisible={isModalVisible} width={320} style={{alignSelf:'center', }}>
        <View>
        <Card >
        <AntDesign name="close" color={'#51668A'} size={25} style={{alignSelf:'flex-end'}} onPress={toggleModal}/>
       
          <Text style={styles.viewDoccin}>View your collected DocCoins here</Text>
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
              color:'#2C8892',
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
              marginLeft:10,
            }}
            titleStyle={{
              color:'#FFFF'
            }}/>
          </View> 
        
          
          
          </Card>
        </View>
      
  </Modal> */}
  
{/* Modal doccoins view  */}

  </SafeAreaView>
  );
}
export default HomeScreen
  