import { View, Text, StyleSheet,Image,TextInput, Dimensions ,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Ionicons} from '@expo/vector-icons';
import { commentData } from '../../../redux/reducers/publicReactionSlice';
import { useDispatch, useSelector } from 'react-redux';


const CommentsScreen = ({route}) => {
    const [profile, setProfile] = useState();
    const [text, onChangeText] = useState();
    const [userId, setUserId] = useState();

    const dispatch = useDispatch();
    const  {post_id} =route.params;
    const commReduxData =useSelector((state) => state.commentsData);

    console.log("commReduxData",commReduxData);

    const getData = async() => {
        const jsonValue = await AsyncStorage.getItem('USER_INFO');
        const data=await JSON.parse(jsonValue);
        const result = JSON.parse(data)['data'];
        setProfile(result.profileimage);
        setUserId(result.id);
    }

    const handleComment = async () => {
        const postDetails = {user_id:userId,post_id:post_id,postcomment:text}
        console.log("postDetails",postDetails);
        const sentResult = await dispatch(commentData(postDetails));
        console.log("sentResult",sentResult);
    }

    useEffect(()=>{
        getData();
    },[])

    // const handlePost = () => {
    //   console.log("text",text);
    // }

  return (
    <View style={styles.commentContainer}>
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

const styles = StyleSheet.create({
    commentContainer:{
        flex:1,
        backgroundColor:'#ecf2f6',
        padding:15
    },
    UserComments:{
        alignItems:'center',
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        borderTopWidth:1,
        paddingHorizontal:10,
        paddingTop:5,
        width:Dimensions.get('screen').width,
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'#ccc'
    },
    input:{
        // borderWidth:1,
        width:Dimensions.get('screen').width/1.4,
        height:50,
        paddingLeft:10
    },
    inputCont:{
        flexDirection:'row'
    }
})
