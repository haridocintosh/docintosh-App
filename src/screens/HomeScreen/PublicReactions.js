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
import oval from '../../assets/dr-icon/Oval.png';


const PublicReactions = ({item}) => {
 const [liked,setLiked] = useState(false);
 const [likeCount,setLikeCount] = useState(item.likecount);
 const [heart,setHeart] = useState(item?.post_like_status?.[0].flag == 1);
//  const [postId,setPostId] = useState();

 const dispatch = useDispatch();
 const navigation = useNavigation();


 const handleLikes = async (post_id,likecount) => {
  // setPostId(post_id)
  // console.log("post_id",post_id);
  // console.log("likecount",likecount);
  setLiked(!liked);
  const jsonValue = await AsyncStorage.getItem('USER_INFO');
  const data = await JSON.parse(jsonValue);
  const result = JSON.parse(data)['data'];

  const postDetails = {user_id:result.id, post_id:post_id}
  const sentResult = await dispatch(postLikeData(postDetails));
  const resultData = sentResult.payload;
  // console.log("resultData",resultData);
  // setLikeCount(likecount);
  // console.log("likeCountpppppp----",typeof(likeCount));
  
  // if(resultData.count){
  //   setLiked(true);
  //   setHeart(true);
  //   setLikeCount(prev => parseInt(prev)+1)
  // }else{
  //   setLiked(false);
  //   setHeart(false);
  //   setLikeCount(prev => prev == 0 ? 0 : parseInt(prev)-1)
  // }
 }

 const GotoComments =(post_id,comments_list ) => {
  navigation.navigate('CommentsScreen', {post_id:post_id,comments_list });
 }
 
  return (
    <View>
     <View style={styles.publicReactionsContainer}>
              <View style={{ flexDirection: 'row',marginVertical:5}}>
                <View style={styles.socialCount}>
                  <TouchableOpacity onPress={()=> handleLikes(item.post_id,item.likecount)}>
                      {/* <AntDesign 
                        name={ liked || heart ? "heart":"hearto"} 
                        size={22} color="red" /> */}
                      <AntDesign 
                        name={ liked || heart ? "heart":"hearto"} 
                        size={22} color="red" />
                  </TouchableOpacity>
                  <Text style={styles.socialCountText}>
                    {parseInt(item.likecount)}
                    {/* {liked || heart? parseInt(item.likecount)+likeCount:parseInt(item.likecount)-likeCount} */}
                  </Text>
                </View>

                  <View style={styles.socialCount}>
                    <TouchableOpacity>
                        <Image source={gift} style={styles.socialImages}/>
                    </TouchableOpacity>
                  <Text style={styles.socialCountText}>2k</Text>
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
           <View style={{flexDirection:'row',marginTop:5,marginLeft:10, marginBottom:10}}>
              <Image source={oval}style={{marginLeft:-10, borderColor:'#000'}}/>
              <Image source={oval}style={{marginLeft:-10, borderColor:'#000'}}/>
              <Image source={oval}style={{marginLeft:-10, borderColor:'#000'}}/>
              <Text style={{fontSize:12, fontWeight:'400',color:'#51668A',padding:5}}>

                {item.likecount == 0 ? "No Likes": item.likecount == 1 ? "Liked by Kunal Patel" :
                `Liked by Kunal Patel and ${item.likecount == 0 ? item.likecount :item.likecount -1} others`}
                  {/* Kunal Patel and {item.likecount-1} others */}
              </Text>
          </View>
          </View>
  )
}

export default PublicReactions;
