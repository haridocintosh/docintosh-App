import { View, Text, ActivityIndicator,Image,TextInput, ScrollView ,TouchableOpacity} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import { commentData ,getallcomment} from '../../../redux/reducers/publicReactionSlice';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './Homestyle';
import Svg, {Path} from 'react-native-svg';

const CommentsScreen = ({route}) => {
  const  {post_id, comments_list} = route.params;
    const [profile, setProfile] = useState();
    const [text, onChangeText] = useState();
    const [userId, setUserId] = useState();
    const [instData, setInstData] = useState([]);
    const [Comments, SetComments] = useState([]);
    const [loader, setLoader] = useState(true);
    const [postId, setPostId] = useState();
    

    const dispatch = useDispatch();
    

    const getData = async() => {
        const jsonValue = await AsyncStorage.getItem('USER_INFO');
        const data=await JSON.parse(jsonValue);
        const result = JSON.parse(data)['data'];
        setProfile(result.profileimage);
        setUserId(result);

        const postDetails = {post_id:post_id}
        const sentResult = await dispatch(getallcomment(postDetails));
        // console.log("sentResult-------------", sentResult.payload.getallcomment);
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

    const handleOption = (val) => {
      console.log("dot",val);
      setPostId(val)
    }
//console.log("postId",post_id);
  return (
    <View style={styles.commentContainer}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true} >
               {instData && instData.map((element, index)=>{
                  return(
                    <View style={styles.usersCommentContainer} key={index}>
                      <View style={styles.usersCommentPictureContainer}>
                        <Image source={{uri:profile}} style={{width:40,height:40, borderRadius:50,marginRight:10}}/>
                        <View>
                            <Text style={styles.userUsername}>{"Dr. " + userId.first_name +" "+ userId.last_name}</Text>
                            <Text style={styles.userCommentTexts}>{element.comment} </Text>
                        </View>
                      </View>
                      <TouchableOpacity onPress={() => handleOption(element?.comment_id)} style={{}}>
                        <MaterialCommunityIcons name='delete-outline' size={30} color={'#A30000'}/>
                        {/* <Svg width="7" height="20" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <Path d="M3.5 1.55552C3.5 0.696472 2.82839 0 2 0C1.17161 0 0.5 0.696472 0.5 1.55552C0.5 2.41458 1.17161 3.11105 2 3.11105C2.82839 3.11105 3.5 2.41458 3.5 1.55552ZM3.5 8C3.5 7.14095 2.82839 6.44448 2 6.44448C1.17161 6.44448 0.5 7.14095 0.5 8C0.5 8.85905 1.17161 9.55552 2 9.55552C2.82839 9.55552 3.5 8.85905 3.5 8ZM3.5 14.4445C3.5 13.5854 2.82839 12.889 2 12.889C1.17161 12.889 0.5 13.5854 0.5 14.4445C0.5 15.3035 1.17161 16 2 16C2.82839 16 3.5 15.3035 3.5 14.4445Z" fill="#51668A"/>
                        </Svg> */}
                      </TouchableOpacity>
                    </View>
                  )
                }) }
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
    </View>
  )
}

export default CommentsScreen;


