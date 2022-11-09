import React,{useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import docintoshlogo from '../assets/dr-icon/docintoshlogo.png';
import profilePicture from '../assets/images/profilePicture.png';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeData } from '../apis/Apicall';
import { useDispatch } from 'react-redux';
import { useDrawerStatus } from '@react-navigation/drawer';



const CustomDrawer = props => { 
  const navigation = useNavigation();
  const [logoutdata,setlogoutdata]=useState();
  const dispatch = useDispatch();
  const profile_url="https://docintosh-assets.s3.us-west-2.amazonaws.com/IMAUP/profile/2021_03_17_04_46_55maledefault.png?response-content-disposition=attachment%3B%20filename%3D%222021_03_17_04_46_55maledefault.png%22&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATI7R7JS76FDN7AZB%2F20220908%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220908T080043Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518400&X-Amz-Signature=8d3da3b8bec2f627811e1c90332193b36525941c260202c7fbbde63af8adf7ab";
  const [userdata,setuserdata]=useState({
    fullname : "",
    profile:"",
    speciality:"",
    
  })
  useEffect(() => {
    const asyncFetchDailyData = async () => {
    const jsonValue = await AsyncStorage.getItem('USER_INFO');
      const data=await JSON.parse(jsonValue);
      console.log(JSON.parse(data)['data'])
      setlogoutdata(JSON.parse(data)['data'])
      const result=JSON.parse(data)['data'];
      // setuserdata(JSON.parse(data)['data']['first_name']+" "+JSON.parse(data)['data']['last_name'])
      setuserdata({ ...userdata, 
        fullname: `${result['first_name']} ${result['last_name']}`,
        speciality: `${result['speciality']}`,
        profile: `${result['profileimage']}`,
        role:`${result['role']}`
      });

    }
    asyncFetchDailyData();
  }, [])
  
  const removeData = async () => {
    try {
      storeData('USER_INFO',JSON.stringify({
        login:false,
        data:logoutdata
      }))
      setTimeout(()=>{
        navigation.navigate('LoginScreen')
      },1000)
    }catch(e) {
    }
  }

  const isDrawerOpen = useDrawerStatus() === 'open';

  const handledrowerNotch = () => {
    if(!isDrawerOpen){
      props.navigation.openDrawer()
    }else{
      props.navigation.closeDrawer()
    }
  }

  
  
  return (
    <View style={styles.DrowerContainer}>
        <View style={styles.DocLogo}>
          <Image source={docintoshlogo} style={styles.logoImg}></Image>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <AntDesign name="close" color={'#fff'} size={25} />
          </TouchableOpacity>
        </View>

        <View style={styles.profoleDetailsContainer}>
          <View style={styles.profoleDetails}>
            <TouchableOpacity  onPress={() => navigation.navigate('Invite')}>
              <MaterialIcons name="arrow-forward-ios" size={16} color="white" style={styles.forwardIcon}/>
            </TouchableOpacity>
            <Image source={userdata.profile ? {uri:userdata.profile}:profilePicture} style={styles.profilePic}/>
            <Text style={styles.userName}>{userdata?((userdata.role<='4')?'Dr.':''):''} {userdata['fullname']}</Text>
            <Text style={styles.userProfession}> {userdata['speciality']} |</Text>
          </View>
        </View>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#071B36',}}>
          <View style={styles.drowerChilds}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>

        <View style={styles.deviderLine}/>
        
        <View style={{paddingHorizontal: 20,}}>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15 }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather name="phone" size={20} style={{color:'#fff',paddingRight:10}} />
              <Text style={styles.drawerText}> Contact us </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15,}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Feather name="info" size={20} style={{color:'#fff',paddingRight:10}} />
              <Text
                style={styles.drawerText}>
                Support
              </Text>
            </View>
          </TouchableOpacity>
            <View style={{marginVertical:15}}>
            <Button
              onPress={() =>{ removeData('USER_INFO'); }}
                title="Logout"
                type="outline"
                buttonStyle={{
                  borderColor: '#2C8892',
                  borderRadius:15/2
                }}
                titleStyle={{
                  color:'#2C8892'
                }}/>
            </View>
        </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  DrowerContainer:{
    flex: 1,  
    width:325,
    position:'relative'
  },
  DocLogo:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    marginTop:15
  },
  logoImg:{
    width:40,
    height:35
  },
  profoleDetails:{
    backgroundColor:'#001127', 
    borderRadius:20 /2,
    width:"100%",
    padding:20
  },
  profilePic:{
    height: 64, 
    width: 64, 
    borderRadius: 40,
    marginTop: -10,
    alignSelf:'center'
  },
  userName:{
    alignSelf:'center',
    color:'#fff',
    fontSize:16,
    fontWeight:'600',
    marginTop:5
  },
  userProfession:{
    alignSelf:'center', 
    fontSize:12,
    fontWeight:'400',
    color:"#CCCCCC"
  },
  drowerChilds:{
    flex: 1, 
    backgroundColor: '#071B36', 
    paddingTop: 10
  },
  profoleDetailsContainer:{
    margin:10
  },
  forwardIcon:{
    position:'absolute',
    right:0
  },
  drawerText:{
    fontSize: 15,
    //fontFamily: 'Inter_900Black',
    marginLeft: 5,
    fontWeight:'400', 
    fontSize:14,
    color:'#FFFFFF'
  },
  deviderLine:{
    height:1, 
    marginHorizontal:20,
    backgroundColor:'rgba(224, 224, 224, 0.2)',
    borderRadius:10
  },
  DrowerNotch:{
    width:25,
    height:50,
    backgroundColor:"#071B36",
    position:'absolute',
    top:60,
    right:-22,
    borderTopRightRadius:50,
    borderBottomRightRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  notchIcons:{
    width:"100%",
    height:'100%',
    alignItems:'center',
    justifyContent:'center'}
})