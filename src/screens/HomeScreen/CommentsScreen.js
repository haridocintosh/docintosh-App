import { View, Text, StyleSheet,Image,TextInput, Dimensions ,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Ionicons} from '@expo/vector-icons';
import { commentData } from '../../../redux/reducers/publicReactionSlice';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './Homestyle';


const CommentsScreen = ({route}) => {
    const [profile, setProfile] = useState();
    const [text, onChangeText] = useState();
    const [userId, setUserId] = useState();
    const [reload, setReload] = useState();

    const dispatch = useDispatch();
    const  {post_id, comments_list} = route.params;

    const getData = async() => {
        const jsonValue = await AsyncStorage.getItem('USER_INFO');
        const data=await JSON.parse(jsonValue);
        const result = JSON.parse(data)['data'];
        setProfile(result.profileimage);
        setUserId(result.id);
    }

    const handleComment = async () => {
        const postDetails = {user_id:userId,post_id:post_id,postcomment:text}
       // console.log("postDetails",postDetails);
        const sentResult = await dispatch(commentData(postDetails));
       console.log("sentResult",sentResult.payload.cmnt_ret.comment);
      //  setReload(sentResult.payload.cmnt_ret.comment);
    }
    console.log("text",text);

    useEffect(()=>{
        getData();
    },[])

    // const handlePost = () => {
      console.log("comments_list",comments_list);
    // }
//console.log("postId",post_id);
  return (
    <View style={styles.commentContainer}>
               {comments_list && comments_list.map((element, index)=>{
                  return(
                    <View style={styles.usersCommentContainer} key={index}>
                        <Image source={{uri:element.profileimage}} style={{width:40,height:40, borderRadius:50,marginRight:10}}/>
                        <View>
                            <Text style={styles.userUsername}>{element.username}</Text>
                            <Text style={styles.userCommentTexts}>{element.comment} </Text>
                        </View>
                    
                    </View>
                  )
                }) }
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
    </View>
  )
}

export default CommentsScreen;


