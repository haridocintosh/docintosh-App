import React, {useState, useEffect, useRef, createContext, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Animated,
} from 'react-native';
import { Card } from 'react-native-paper';
import { useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Ionicons,MaterialCommunityIcons,AntDesign,FontAwesome5,Feather} from '@expo/vector-icons';
import oval from '../../assets/dr-icon/Oval.png';
import bgtophome from '../../assets/images/bg-top-home.png';
import { userPostData } from '../../../redux/reducers/postData';
import Svg, {Path} from 'react-native-svg';
import PublicReactions from './PublicReactions';
import { styles } from './Homestyle';
import moment from "moment";
import { useIsFocused } from '@react-navigation/native';
import OptionModal from './optionModal';




const HomeScreen = ({navigation})=> {
// like unlike fun =>
  const [loader, setLoader] = useState(false);
  const [userdata, setuserdata]     = useState({profile:'',user_id:''});
  const [allPost, setallPost]  = useState([]);
  const dispatch = useDispatch();
  const [postId, setPostId] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const isFocused = useIsFocused();

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
    inputRange: [0, 200,  400],
    outputRange: [10, 6, 5],
    extrapolate: 'clamp',
  });

  const imagePosition = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [(21 * Dimensions.get('window').width) / 100, 30],
    extrapolateLeft: 'identity',
    extrapolateRight: 'clamp',
  });
  const scoresPosition = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [(10 * Dimensions.get('window').height) / 100, 0],
    extrapolateLeft: 'identity',
    extrapolateRight: 'clamp',
  });


//   const tooglePlay =() =>{
//     isPlaying === false ? setIsPlaying(true) : setIsPlaying(false);
//  };

const handleOption = (post_id) => {
  setPostId(post_id);
  if(postId == post_id){
    setModalVisible(!modalVisible);
    return;
  }
  setModalVisible(true);
}
  // const closeModal = () => {
  //   setVisible(false);
  // };

  useEffect(()=>{
    if(isFocused){
      asyncFetchDailyData();
    }
  },[isFocused]);


  const asyncFetchDailyData = async () => {
    const jsonValue = await AsyncStorage.getItem('USER_INFO');
    const data=await JSON.parse(jsonValue);
    const result=JSON.parse(data)['data'];
    // console.log("result",result);
    setuserdata({
      profile:result['profileimage'],
      user_id:result['id']
    });
    fetchPostData(result['role'],result['city_id'], result['assoc_id'], result['profileimage'], result['id'],result['circle_type'],)
  }

  const fetchPostData = async (role,city_id,assoc_id,profileimage,userId,circle_type)=>{ 
    setLoader(true);
    if(role == 5){
      var circle_type = 3;
    } 
    else{
      circle_type = 1
    }
    const postDetails = {role,city_id,assoc_id,profileimage,userId,circle_type}
      
    // console.log("postDetails",postDetails); 
    const result = await dispatch(userPostData(postDetails));
    setLoader(false);
    // const allPostData = result && result.payload.filter(Post => Post.user_role != 5)
    setallPost(result.payload);
    // console.log("result.payload",result);
  }
  
  const handlePost = (item) => {
    navigation.navigate('PostsScreen', {item:item})
  }

  if(loader){
    return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator size={'large'} color={"#2C8892"}/>
    </View>)
  }

    const renderItem = ({item}) => {
      
      return(
        <Card style={styles.cardOfPosts} >
          <View style={styles.userInfo}>
            <View  style={{flexDirection:'row',alignItems:'center'}}>
              <Image source={{uri:item.profileimage}} onPress={() => navigation.navigate('ProfileScreen2')} style={{width:38, height:38,marginRight:5,borderRadius:50}} />
                <View >
                  <Text style={{fontSize:14, fontWeight:'400', fontFamily:"Inter-Regular"}}>
                    {item.role =='4' ? 'Dr.' : ''} {item.first_name && item.first_name} {item.last_name && item.last_name} 
                    <MaterialCommunityIcons name="check-decagram" size={12} color="#0F9C69" />
                  </Text>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Text style={{marginLeft:5}}>
                        <FontAwesome5 name="users" size={17} color="#45B5C0" />  
                      </Text>
                      <View style={styles.dot}/>
                      <Text style={{fontSize:12, fontWeight:'400',color:'#51668A', fontFamily:"Inter-Regular"}}>{item?.speciality}</Text>
                      <Text style={{marginHorizontal:4}}>
                        <Ionicons name="time-outline" size={19} color="#51668A" />  
                      </Text>
                      <Text style={{fontSize:12, paddingRight:5, fontWeight:'400',color:'#51668A',fontFamily:"Inter-Regular"}}>
                         {moment(item?.created_at).fromNow()}
                      </Text>
                  </View>
                </View> 
            </View>
            <View>
            <TouchableOpacity onPress={() => handleOption(item?.post_id)} style={{padding:10,right:-10,top:-10}}>
              <Svg width="7" height="20" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M3.5 1.55552C3.5 0.696472 2.82839 0 2 0C1.17161 0 0.5 0.696472 0.5 1.55552C0.5 2.41458 1.17161 3.11105 2 3.11105C2.82839 3.11105 3.5 2.41458 3.5 1.55552ZM3.5 8C3.5 7.14095 2.82839 6.44448 2 6.44448C1.17161 6.44448 0.5 7.14095 0.5 8C0.5 8.85905 1.17161 9.55552 2 9.55552C2.82839 9.55552 3.5 8.85905 3.5 8ZM3.5 14.4445C3.5 13.5854 2.82839 12.889 2 12.889C1.17161 12.889 0.5 13.5854 0.5 14.4445C0.5 15.3035 1.17161 16 2 16C2.82839 16 3.5 15.3035 3.5 14.4445Z" fill="#51668A"/>
              </Svg>
            </TouchableOpacity>
              {item?.post_id == postId && <OptionModal modalVisible={modalVisible}/>}
            </View>
          </View>

          <View style={item?.ptitle &&{ flexDirection:'row',paddingVertical:10}}>
            <Text style={{color:'#51668A',fontFamily:"Inter-Regular" }}>
            {item?.ptitle }
            </Text>
          </View>

          <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => handlePost(item)} >
            <Image source={item.imgPath?{uri:item.imgPath}:''} 
            style={{flex: 1, 
              width: Dimensions.get("window").width, 
              height:300}} resizeMode={'contain'}/>
          </TouchableOpacity>
            <PublicReactions item={item}/>
        </Card>
      )
    }

  return (
  <SafeAreaView>
      <Animated.View style={{backgroundColor:'#071B36',height:headerHeight,position:'relative'}}>
        <Animated.Image source={require('../../assets/images/bg-top-home.png')} style={[styles.bgtophome,{height:headerHeight,opacity:opacity}]}/>

          <View style={styles.imageConatentContainer}>
            <View style={{flexDirection:'row',alignItems:'center'}}> 
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Ionicons name="reorder-three-outline" size={34} color="#fff"  />
              </TouchableOpacity>
              <View style={{backgroundColor:'#FFCC00', width:4, height:28,marginLeft:10,zIndex:1}}/>
              <Animated.View style={{backgroundColor:'#3477E0', width:imagePosition, height:24,justifyContent:'center',position:'relative'}}>
                <View style={styles.triangle}/>
                <View style={styles.darkBlueOnWhatsNew}/>
                <Animated.Text style={{fontSize:sizeFont,color:'#fff',marginLeft:10,opacity:opacity}}>
                  What’s New
                </Animated.Text>
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
            <Image source={require('../../assets/dr-icon/d.png')} style={styles.d} />
            <Text style={styles.count}>7822 |</Text>
            <Image source={require('../../assets/dr-icon/discount1.png')} style={{width:16, height:16, marginVertical:5,  marginHorizontal:5}}></Image>
            <Text style={styles.count}>102</Text>
          </Animated.View>
      </Animated.View>
      
    <View style={{padding:10}}>
      <Card style={{marginTop:-35, zIndex:1, borderRadius:50,shadowRadius:10, shadowOffset:10}} onPress={() => navigation.navigate('SharePost')}>
        <View style={{flexDirection:'row', margin:10,justifyContent:'space-between',alignItems:'center'}} >
          <View style={{flexDirection:'row'}}>
          <Image source={userdata.profile?{uri:userdata.profile}:''}  style={{width:32, height:32, borderRadius:50}}></Image>
          <Text style={styles.whtsnewtxt}>What’s on your mind?</Text>
          </View>
            
          
          <AntDesign name="pluscircle" size={26} color="#D5DEED"/>
        </View>
      </Card>

      <View>
         <View style={styles.marginten}>
              <Text style={{fontSize:16, fontWeight:'600'}}>Suggested Post</Text>
              <View style={{width:'100%', height:1, backgroundColor:'#D5DEED', marginTop:10}}></View>
          </View>

          <View style={{paddingBottom:550}}>
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
      
      </View>

  </SafeAreaView>
  );
}
export default HomeScreen
  