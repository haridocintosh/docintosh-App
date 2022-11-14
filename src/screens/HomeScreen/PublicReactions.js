import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React, { useState,useEffect } from 'react';
import Share from '../../assets/dr-icon/Share.png'
import socialComment from '../../assets/dr-icon/socialComment.png'
import gift from '../../assets/dr-icon/gift.png';
import {AntDesign,} from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postLikeData } from '../../../redux/reducers/publicReactionSlice';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Homestyle';


const PublicReactions = ({item}) => {
 const [liked,setLiked] = useState(false);
 const [likeCount,setLikeCount] = useState(0);
 const [heart,setHeart] = useState(item?.post_like_status?.[0].flag == 1);

 const dispatch = useDispatch();
 const navigation = useNavigation();


 const handleLikes = async (post_id) => {
  const jsonValue = await AsyncStorage.getItem('USER_INFO');
  const data = await JSON.parse(jsonValue);
  const result = JSON.parse(data)['data'];

  const postDetails = {user_id:result.id, post_id:post_id}
  const sentResult = await dispatch(postLikeData(postDetails));

  const resultData = sentResult.payload;
  console.log("resultData",resultData);
  setLikeCount(post_id);
  
  if(resultData.count){
    setLiked(true);
    setHeart(true);
  }else{
    setLiked(false);
    setHeart(false);
  }
 }

 const GotoComments =(post_id,comments_list ) => {
  navigation.navigate('CommentsScreen', {post_id:post_id,comments_list });
 }
 console.log("heart",heart);
 
  return (
     <View style={styles.publicReactionsContainer}>
              <View style={{ flexDirection: 'row',marginVertical:5}}>
                <View style={styles.socialCount}>
                  <TouchableOpacity onPress={()=> handleLikes(item.post_id)}>
                      <AntDesign 
                        name={ liked || heart ? "heart":"hearto"} 
                        size={22} color="red" />
                  </TouchableOpacity>
                  <Text style={styles.socialCountText}>
                    {parseInt(item.likecount)}
                  </Text>
                </View>

                <View style={styles.socialCount}>
                    <TouchableOpacity>
                        <Image source={gift} style={styles.socialImages}/>
                    </TouchableOpacity>
                  <Text style={styles.socialCountText}>{item.commentcount}</Text>
                </View>
                
                <View style={styles.socialCount}>
                    <TouchableOpacity   onPress={() => GotoComments(item.post_id, item.comments_list)}>
                        <Image source={socialComment} style={styles.socialImages}/>
                    </TouchableOpacity>
                  <Text style={styles.socialCountText}>{item.commentcount}</Text>
                </View>

                <View style={styles.socialCount}>
                    <TouchableOpacity>
                        <Image source={Share} style={styles.socialImages}/>
                    </TouchableOpacity>
                  <Text style={styles.socialCountText}>4k</Text>
                </View>

              </View>
          </View> 
  )
}

export default PublicReactions;
