import React,{useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import docintoshlogo from '../assets/images/docintosh.png';
import Entypo from 'react-native-vector-icons/Entypo';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';
import { logout } from '../../redux/reducers/loginAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeData } from '../apis/Apicall';
import { useDispatch } from 'react-redux';



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
  
  return (
    <View style={{flex: 1,  width:304}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#071B36',}}>
        <ImageBackground>
        <View style={{flexDirection:'row'}}>
          <Image source={docintoshlogo} style={{marginTop:21 , width:157, height:36, marginLeft:20}}></Image>
          <TouchableOpacity onPress={() =>props.navigation.closeDrawer()}>
            <Entypo name="cross" style={{color:'#fff', width:12, height:12, marginLeft:100, marginTop:20}} />
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor:'#001127', borderRadius:20 /2,width:264,marginLeft:20,top:20}}>
          <TouchableOpacity  onPress={() => navigation.navigate('ProfileScreen')}>
            <MaterialIcons name="arrow-forward-ios" size={16} color="white" style={{alignSelf:'flex-end',padding:10}}/>
          </TouchableOpacity>
          
          <Image
            source={{uri:userdata.profile}}
            style={{height: 64, width: 64, borderRadius: 40, marginTop: -10,alignSelf:'center'}}
          />
          <Text style={{alignSelf:'center',color:'#fff',fontSize:16,fontWeight:'600',marginTop:5}}>{userdata?((userdata.role<='4')?'Dr.':''):''}{userdata['fullname']}</Text>

          <Text style={{alignSelf:'center', fontSize:12,fontWeight:'400',color:"#CCCCCC"}}> {userdata['speciality']} |</Text>
          
          <View style={{flexDirection:"row",marginTop:21,paddingBottom:20, marginBottom:21}}>    
          </View>
      </View>
          
         
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#071B36', paddingTop: 10}}>
          <DrawerItemList {...props} />
          
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15 }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Feather name="phone" size={20} style={{color:'#fff',paddingRight:10}} />
         
            <Text
              style={{
                fontSize: 15,
                //fontFamily: 'Inter_900Black',
                marginLeft: 5,fontWeight:'400', fontSize:14,color:'#FFFFFF'
              }}>
              Contact us
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15,}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather name="info" size={20} style={{color:'#fff',paddingRight:10}} />
            <Text
              style={{
                fontSize: 15,
               // fontFamily: 'Inter_900Black',
                marginLeft: 5,fontWeight:'400', fontSize:14,color:'#FFFFFF'
              }}>
              Support
            </Text>
          </View>
          <View style={{marginTop:52}}>
          {/* <Button
             onPress={() =>{  ()=> dispatch(logout()) }}
              title="Logout"
              type="outline"
              buttonStyle={{
                borderColor: '#2C8892',
                borderRadius:15/2
              }}
              titleStyle={{
                color:'#2C8892'
              }}/> */}

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
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
