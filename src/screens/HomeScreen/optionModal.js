import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const optionModal = ({modalVisible,id}) => {
  const [userId, setUserId] = useState()
  // console.log("id",id);
  const navigation  = useNavigation();

  const getId = async () => {
    const jsonValue = await AsyncStorage.getItem('USER_INFO');
    const data = await JSON.parse(jsonValue);
    const result = JSON.parse(data)['data'];
    setUserId(result);
  }

  useEffect(() => {
    getId();
  },[])

  // console.log("userId",userId?.id);
  const handleReport = () => {
    navigation.navigate('ReportPost')
  }
  return (
    <>
    {modalVisible &&
    <View style={styles.optionModal}>
      {userId?.id === id ?
      <TouchableOpacity style={styles.optionList}>
        {/* <Image source={require('../../assets/dr-icon/savePost.png')} style={styles.optionListImage}/> */}
        <MaterialCommunityIcons name='delete-outline' size={23} color={'#A30000'}/>
        <Text style={styles.optionListText}>delete</Text>
      </TouchableOpacity>
      :
      <>
      <TouchableOpacity style={styles.optionList}>
            <Image source={require('../../assets/dr-icon/savePost.png')} style={styles.optionListImage}/>
            <Text style={styles.optionListText}>Save Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionList} onPress={()=> handleReport()}>
            <Image source={require('../../assets/dr-icon/reportPost.png')} style={styles.optionList2}/>
            <Text style={styles.optionListText}>Report Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionList}>
        <Image source={require('../../assets/dr-icon/unfollow.png')} style={styles.optionList3}/>
            <Text style={styles.optionListText}>Unfollow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionList}>
        <Image source={require('../../assets/dr-icon/blockUser.png')} style={styles.optionList4}/>
            <Text style={styles.optionListText}>Block User</Text>
        </TouchableOpacity>
        </>
    }
        
    </View>
  }
    
  </>
  )
}

export default optionModal

export const styles = StyleSheet.create({
optionModal:{
    width:150,
    backgroundColor:'#fff',
    position:'absolute',
    right:0,
    top:30,
    borderRadius:5,
    justifyContent:"center",
    // alignItems:'center',
    paddingHorizontal:15,
    paddingVertical:10,
    zIndex:1,
  
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white'
  },
  optionList:{
    paddingVertical:7,
    flexDirection:'row'
  },
  optionListText:{
    color:'#071B36',
    fontFamily:"Inter-Regular",
  },
  optionListImage:{
    width:15.5,
    height:20.7,
    marginRight:7
  },
  optionList2:{
    width:21,
    height:16,
    marginRight:7
  },
  optionList3:{
    width:18,
    height:13,
    marginRight:7
  },
  optionList4:{
    width:18,
    height:18,
    marginRight:7
  },
  });