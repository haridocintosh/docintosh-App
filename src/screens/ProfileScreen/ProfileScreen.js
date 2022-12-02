import React, { useEffect, useState } from 'react';
import { View, Text ,Image,SafeAreaView, ScrollView, TouchableOpacity, Animated ,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import icon from '../../assets/images/Vector.png';
import { Card } from 'react-native-paper';
import ProfileScreenPost from './ProfileScreenPost';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './profilestyle';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [userdata,setuserdata]=useState({
    fullname : "",
    profile:"",
    speciality:"",
  })

  const asyncFetchDailyData = async () => {
    const jsonValue = await AsyncStorage.getItem('USER_INFO');
      const data = await JSON.parse(jsonValue);
      console.log(JSON.parse(data)['data'])
      const result=JSON.parse(data)['data'];
      // setuserdata(JSON.parse(data)['data']['first_name']+" "+JSON.parse(data)['data']['last_name'])
      setuserdata({ ...userdata, 
        fullname: `${result['first_name']} ${result['last_name']}`,
        speciality: `${result['speciality']}`,
        profile: `${result['profileimage']}`,
        role:`${result['role']}`
      });
    }

    useEffect(()=>{
      asyncFetchDailyData();
    },[]);
    
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E6E6E6'}}>
  

    <Card style={{backgroundColor:'#fff',paddingHorizontal:10,paddingVertical:15, borderRadius:10}}>
    <View style={styles.profilePicContainer}>
      <View>
        <Image source={{uri:userdata.profile}} style={styles.profileScreenimg}/>
      </View>
      <View style={styles.profileDetails}>
        <Text style={styles.profilescreenName}>Dr.{userdata.fullname} <Image source={icon}/></Text>    
        <Text style={styles.profileDesignationpro}>{userdata.speciality} | Bangalore</Text>
       <TouchableOpacity style={{flexDirection:'row'}}>
        <Text style={{color:'#2376e5', fontFamily:"Inter-Regular"}}> View / </Text>
        <Text style={{color:'#2376e5',fontFamily:"Inter-Regular"}} onPress={() => navigation.navigate('EditProfileScreen')}>Edit Profile</Text>
      </TouchableOpacity>
      </View>
    </View>

      <View style={{flexDirection:'row', marginTop:20}}>
          <View style={styles.ScoreContainer}>
            <Image source={require('../../assets/dr-icon/d.png')} style={styles.scoreImg}/>
            <Text style={styles.coins}>3600</Text>
          </View>
          <View style={styles.ScoreContainer}>
            <Image source={require('../../assets/dr-icon/coupon1.png')} style={styles.scoreImg}/>
            <Text style={styles.coins}>102</Text>
          </View>
      </View>
    </Card>

    <View style={styles.UserDataConatiner}>
          <View style={styles.UserDataNameCont}>
            <Text style={styles.UserDataName}>Post (182)</Text>
          </View>
         <TouchableOpacity style={styles.UserDataName} onPress={() => navigation.navigate('ProfileScreenFollowers')}>
            <Text style={styles.UserDataName} >Followers (829)</Text>
          </TouchableOpacity>
         <TouchableOpacity style={styles.UserDataName} onPress={() => navigation.navigate('ProfileScreenFollowing')}>
            <Text style={styles.UserDataName}>Following (637)</Text>
          </TouchableOpacity>
    </View>

     <ProfileScreenPost/>


 </SafeAreaView>
  )
  }
export default ProfileScreen