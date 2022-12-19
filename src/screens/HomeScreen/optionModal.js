import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { getLocalData } from '../../apis/GetLocalData';
import { deletePost } from '../../../redux/reducers/postAction';
import { useDispatch } from 'react-redux';
import { coinTransfer } from '../../../redux/reducers/coinSlice';
import { BlockUserApi, SavePostApi } from '../../../redux/reducers/ALL_APIs';
import {Ionicons} from '@expo/vector-icons';
import { getSavedPostsApi } from '../../../redux/reducers/SettingsSlice';


const OptionModal = ({modalVisible,id,postId,deletePostID,BlockId,setModalVisible,saveStatus}) => {
  const [userData, setUserData] = useState();
  const [savedPost, setSavedPost] = useState(saveStatus);
  console.log("saveStatus",savedPost);
  const dispatch    = useDispatch();
  const navigation  = useNavigation();
  const getId = async () => {
    getLocalData('USER_INFO').then( async (res) => {
      const reData = res?.data;
      const savedResult = await dispatch(getSavedPostsApi({user_id:res?.data?.id}))
      // const saved = savedResult.payload.map(d => d.post_id == postId);
      setUserData(reData);
    });
  }
  
  useEffect(() => {
    getId();
  },[])

  const handleDeletePost = async ()=>{
    const postDetails = {post_id:postId}
    const result      = await dispatch(deletePost(postDetails));
      if(result.payload.status  == 'Success'){
        const coinDetails = {task:15, receiverId:0, senderId:id} 
        const coinResult  = await dispatch(coinTransfer(coinDetails));
        if(coinResult.payload.status  == 'Success'){
          deletePostID(postId);
        }
      }
    }

  const SavedPostHandle = async () => {
    const postDetails = {user_id:userData?.id, post_id:postId};
    console.log(postDetails);
    const savedPostResult = await dispatch(SavePostApi(postDetails));
    // console.log("savedPostResult",savedPostResult.payload);
    if(savedPostResult.payload.status == "Saved"){
      setSavedPost(true);
    }else{
      setSavedPost(false);
    }
  }

  const handleReport = () => {
    setModalVisible(false);
    navigation.navigate('ReportPost', {
      postId, id})
  }


  const handleUnfollow = () => {

  }

  const BlockPostHandle = async () => {
    const postDetails = {fromuserid:userData?.id,touserid:id};
    const blockPostResult  = await dispatch(BlockUserApi(postDetails));
    console.log("blockPostResult",blockPostResult.payload);
    if(blockPostResult?.payload?.status == "Success"){
      setModalVisible(false);
      BlockId(id);
    }
  }


  return (
    <>
    {modalVisible &&
    <View style={styles.optionModal}>
      {userData?.id === id ?
      <TouchableOpacity style={styles.optionList} onPress={() =>{handleDeletePost()}}>
        <MaterialCommunityIcons name='delete-outline' size={23} color={'#45B5C0'}/>
        <Text style={styles.optionListText}>delete</Text>
      </TouchableOpacity>
      :
      <>
        <TouchableOpacity style={styles.optionList} onPress={() => SavedPostHandle()}>
        <Ionicons name={ savedPost ? 'bookmark':'bookmark-outline'} size={25} color={"#45B5C0"}/>
            <Text style={styles.optionListText}>
              {savedPost ? "Saved": "Save Post"}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionList} onPress={()=> handleReport()}>
            <Image source={require('../../assets/dr-icon/reportPost.png')} style={styles.optionList2}/>
            <Text style={styles.optionListText}>Report Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionList} onPress={()=> handleUnfollow()}>
        <Image source={require('../../assets/dr-icon/unfollow.png')} style={styles.optionList3}/>
            <Text style={styles.optionListText}>Unfollow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionList} onPress={() => BlockPostHandle()}>
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

export default OptionModal

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