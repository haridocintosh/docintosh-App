import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import {MaterialCommunityIcons,Feather,Entypo,MaterialIcons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { getLocalData } from '../../apis/GetLocalData';
import { deletePost } from '../../../redux/reducers/postAction';
import { useDispatch } from 'react-redux';
import { coinTransfer } from '../../../redux/reducers/coinSlice';
import { BlockUserApi, followApi, SavePostApi } from '../../../redux/reducers/ALL_APIs';
import {Ionicons} from '@expo/vector-icons';
import { getSavedPostsApi } from '../../../redux/reducers/SettingsSlice';



const OptionModal = ({modalVisible,item,deletePostID,BlockId,setModalVisible}) => {
  const [userData, setUserData] = useState();
  const [savedPost, setSavedPost] = useState(item.saved_status);
  const [follow, setFollow] = useState(item?.follow_status);
  const dispatch    = useDispatch();
  const navigation  = useNavigation();

  const getId = async () => {
    getLocalData('USER_INFO').then( async (res) => {
      const reData = res?.data;
      const savedResult = await dispatch(getSavedPostsApi({user_id:res?.data?.id}))
      setUserData(reData);
    });
  }
  
  useEffect(() => {
    getId();
  },[])

  const handleDeletePost = async ()=>{
    const postDetails = {post_id:item.post_id}
    const result      = await dispatch(deletePost(postDetails));
      if(result.payload.status  == 'Success'){
        const coinDetails = {task:15, receiverId:0, senderId:item.id} 
        const coinResult  = await dispatch(coinTransfer(coinDetails));
        if(coinResult.payload.status  == 'Success'){
          deletePostID(item.post_id);
        }
      }
    }

  const SavedPostHandle = async () => {
    const postDetails = {user_id:userData?.id, post_id:item.post_id};
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
      postId: item.post_id, id: item.id})
  }


  const handleUnfollow = async () => {
    const postDetails = {follow_from:userData?.id, follow_to:item.id};
    const followResult  = await dispatch(followApi(postDetails));
    console.log("followApi",followResult.payload);
    if(followResult.payload.status){
      setFollow(true);
    }else{
      setFollow(false);
    }
  }

  const BlockPostHandle = async () => {
    const postDetails = {fromuserid:userData?.id,touserid:item.id};
    const blockPostResult  = await dispatch(BlockUserApi(postDetails));
    if(blockPostResult?.payload?.status == "Success"){
      setModalVisible(false);
      BlockId(item.id);
    }
  }

  return (
    <>
    {modalVisible &&
    <View style={styles.optionModal}>
      {userData?.id === item.id ?
      <TouchableOpacity style={styles.optionList} onPress={() =>{handleDeletePost()}}>
        <MaterialCommunityIcons name='delete-outline' size={23} color={'#45B5C0'}/>
        <Text style={styles.optionListText}>delete</Text>
      </TouchableOpacity>
      :
      <>
        <TouchableOpacity style={styles.optionList} onPress={() => SavedPostHandle()}>
        <Ionicons name={ savedPost ? 'bookmark':'bookmark-outline'} size={24} color={"#45B5C0"} style={styles.optionListIcon}/>
            <Text style={styles.optionListText}>
              {savedPost ? "Saved": "Save Post"}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionList} onPress={()=> handleReport()}>
            <MaterialIcons name="report-problem" size={24} color="#45B5C0" style={styles.optionListIcon}/>
            <Text style={styles.optionListText}>Report Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionList} onPress={()=> handleUnfollow()}>
        <Feather name={follow ? "user-minus": "user-plus"} size={24} color="#45B5C0" style={styles.optionListIcon} />
            <Text style={styles.optionListText}>
              {follow ? "Unfollow": "Follow"}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionList} onPress={() => BlockPostHandle()}>
        <Entypo name="block" size={24} color="#45B5C0" style={styles.optionListIcon}/>
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
  optionListIcon:{
    marginRight:7
  },
  });