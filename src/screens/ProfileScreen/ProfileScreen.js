import React, { useEffect, useState } from 'react';
import { View, Text ,Image,SafeAreaView, ScrollView, TouchableOpacity, Animated ,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import profileimg from '../../assets/images/p2.png';
import icon from '../../assets/images/Vector.png';
import { Card } from 'react-native-paper';
import d from '../../assets/dr-icon/d.png'
import coupon1 from '../../assets/dr-icon/coupon1.png';
import ProfileScreenPost from './ProfileScreenPost';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    <ScrollView
      showsVerticalScrollIndicator={false}
      nestedScrollEnable={true}
      style={{}}>

    <Card style={{backgroundColor:'#fff',paddingHorizontal:10,paddingVertical:15, borderRadius:10}}>
    <View style={styles.profilePicContainer}>
      <View>
        <Image source={{uri:userdata.profile}} style={styles.profileimg}/>
      </View>
      <View style={styles.profileDetails}>
        <Text style={styles.profileName}>Dr.{userdata.fullname} <Image source={icon}/></Text>    
        <Text style={styles.profileDesignation}>{userdata.speciality} | Bangalore</Text>
       <TouchableOpacity style={{flexDirection:'row'}}>
        <Text style={{color:'#2376e5'}}> View / </Text>
        <Text style={{color:'#2376e5'}} onPress={() => navigation.navigate('EditProfileScreen')}>Edit Profile</Text>
      </TouchableOpacity>
      </View>
    </View>

      <View style={{flexDirection:'row', marginTop:20}}>
          <View style={styles.ScoreContainer}>
            <Image source={d} style={styles.scoreImg}/>
            <Text style={styles.coins}>3600</Text>
          </View>
          <View style={styles.ScoreContainer}>
            <Image source={coupon1} style={styles.scoreImg}/>
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

     <ProfileScreenPost />
     <ProfileScreenPost/>
     <ProfileScreenPost/>
     <ProfileScreenPost/>

  </ScrollView>
 </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    coins:{
      fontWeight:'700',
      textAlign:'center',
      fontSize:17,
      color:'#fff',
    },
    ScoreContainer:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#20324A',
      borderRadius:50,
      paddingHorizontal:25,
      paddingVertical:7,
      marginRight:25
    },
    scoreImg:{
      width:25,
      height:25,
      marginRight:10
    },
    profilePicContainer:{
      flexDirection:'row',
      alignItems:'center',
    },
    profileimg:{
      borderColor:"#DCE0E8",
      borderWidth:5,
      borderRadius:50,
      width:72,
      height:72
    },
    profileDetails:{
      marginLeft:15
    },
    profileName:{
      fontSize:20,
      fontWeight:"600"
    },
    profileDesignation:{
      fontSize:14,
      fontWeight:"400",
      color:'#51668a',
      width:250
    },
    UserDataConatiner:{
      flexDirection:'row',
      backgroundColor:'#F2FAFA',
      height:42,
      justifyContent:'space-between',
      alignItems:'center',
      padding:10
    },
    UserDataName:{
      fontSize:14,
      fontWeight:'600',
      
      color:'#000',
    },
    UserDataNameCont:{
      height:40,
      borderBottomWidth:2,
      borderBottomColor:'#45B5C0',
      justifyContent:'center'
    }
})
export default ProfileScreen