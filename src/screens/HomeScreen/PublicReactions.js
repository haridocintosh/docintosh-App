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
 const dispatch = useDispatch();
 const navigation = useNavigation();

//  console.log("item",item);

 const handleLikes = async (post_id) => {
  console.log("post_id",post_id);
  setLiked(!liked);

  const jsonValue = await AsyncStorage.getItem('USER_INFO');
  const data=await JSON.parse(jsonValue);
  const result = JSON.parse(data)['data'];
  console.log("result",result.id);

  const postDetails = {user_id:result.id,post_id:post_id}
  const sentResult = await dispatch(postLikeData(postDetails));
  console.log("sentResult",sentResult);
 }


 const GotoComments =(post_id,comments_list ) => {
  navigation.navigate('CommentsScreen', {post_id:post_id,comments_list })
 }
 
  return (
     <View style={styles.publicReactionsContainer}>
              <View style={{ flexDirection: 'row',marginVertical:5  }}>
                <View style={styles.socialCount}>
                  <TouchableOpacity>

                  <Text>{item.likecount > 0 && item?.post_like_status}</Text>

                    <Text>{item?.post_like_status?.map((element, item)=> console.log('likeData',element))}</Text>
                      <AntDesign name={liked?"heart":"hearto"} size={22} color="red" onPress={()=> handleLikes(item.post_id)}/>
                  </TouchableOpacity>
                  <Text style={styles.socialCountText}>{item.likecount}</Text>
                </View>

                <View style={styles.socialCount}>
                    <TouchableOpacity>
                        <Image source={gift} style={styles.socialImages}/>
                    </TouchableOpacity>
                  <Text style={styles.socialCountText}>{item.commentcount}</Text>
                </View>
                
                <View style={styles.socialCount}>
                    <TouchableOpacity onPress={() => GotoComments(item.post_id, item.comments_list)}>
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
