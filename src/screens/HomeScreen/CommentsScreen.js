import { View, Text, ActivityIndicator,Image,TextInput, ScrollView ,TouchableOpacity,Modal} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import { commentData ,deleteComment,getallcomment} from '../../../redux/reducers/publicReactionSlice';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './Homestyle';

const CommentsScreen = ({route}) => {
  const  {post_id, comments_list} = route.params;
    const [profile, setProfile] = useState();
    const [text, onChangeText] = useState();
    const [userId, setUserId] = useState();
    const [instData, setInstData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [postId, setPostId] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();

    const getData = async() => {
        const jsonValue = await AsyncStorage.getItem('USER_INFO');
        const data=await JSON.parse(jsonValue);
        const result = JSON.parse(data)['data'];
        setProfile(result.profileimage);
        setUserId(result);

        const postDetails = {post_id:post_id}
        const sentResult = await dispatch(getallcomment(postDetails));
        console.log("sentResult.payload.getallcomment",sentResult.payload.getallcomment);
        setInstData(sentResult.payload.getallcomment);
        setLoader(false)
    }

    const handleComment = async () => {
      const postDetails = {user_id:userId.id,post_id:post_id,postcomment:text}
      const sentResult = await dispatch(commentData(postDetails));
      console.log("sentResult", sentResult.payload);
      getData();
      onChangeText()
    }


    useEffect(()=>{
        getData();
    },[])

    if(loader){
      return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
          <ActivityIndicator size={'large'} color={"#2C8892"}/>
      </View>)
    }

    const deleteCommentHandle =  (val) => {
      console.log("dot",val);
      setModalVisible(true)
      setPostId(val);
    }
    const handleDelete = async () => {
      const DelDetails = {comment_id:postId}
      const deleteResult = await dispatch(deleteComment(DelDetails));
      console.log("deleteResult",deleteResult.payload);
      setModalVisible(false);
      getData();
    }
  return (
    <View style={styles.commentContainer}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true} >
               { instData.length > 0 ? instData?.map((element, index)=>{
                  return(
                    <View style={styles.usersCommentContainer} key={index}>
                      <View style={styles.usersCommentPictureContainer}>
                        <Image source={{uri:profile}} style={{width:40,height:40, borderRadius:50,marginRight:10}}/>
                        <View>
                            <Text style={styles.userUsername}>{"Dr. " + userId.first_name +" "+ userId.last_name}</Text>
                            <Text style={styles.userCommentTexts}>{element.comment} </Text>
                        </View>
                      </View>
                      <TouchableOpacity onPress={() => deleteCommentHandle(element?.comment_id)} style={{}}>
                        <MaterialCommunityIcons name='delete-outline' size={30} color={'#A30000'}/>
                      </TouchableOpacity>
                    </View>
                  )
                }): 
                <Text style={styles.NoCommentTexts}>There are no comments</Text>
                }
      </ScrollView>
        <View style={styles.UserComments}>
            <View style={styles.inputCont} >
            <Image source={{uri:profile}} style={{width:50,height:50, borderRadius:50}}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Add a comment..."
            />
            </View>
            <TouchableOpacity onPress={() => handleComment()}>
              <Ionicons name='send' size={26}/>
            </TouchableOpacity>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.textBold}>Are You Sure?</Text>
              <Text style={styles.textNormal}>Dou you what delete the comment?</Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                  style={[styles.buttonsDesign,styles.leftButtonsDesign]} 
                  onPress={() =>{setModalVisible(false)}}>
                <Text style={[styles.textBold,styles.leftText]}>Cancel</Text>
                </TouchableOpacity>
                <Text>{"        "}</Text>
                <TouchableOpacity 
                  style={[styles.buttonsDesign,styles.RightButtonsDesign]}
                  onPress={() => handleDelete()}>
                <Text style={[styles.textBold,styles.RightText]}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </Modal>
    </View>
  )
}

export default CommentsScreen;


