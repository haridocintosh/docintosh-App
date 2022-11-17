import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React, { useState,useEffect } from 'react';
import Share from '../../assets/dr-icon/Share.png'
import socialComment from '../../assets/dr-icon/socialComment.png'
import gift from '../../assets/dr-icon/gift.png';
import {AntDesign,} from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getallLikes, postLikeData } from '../../../redux/reducers/publicReactionSlice';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Homestyle';
import oval from '../../assets/dr-icon/Oval.png';



const PublicReactions = ({item}) => {
 const [liked,setLiked] = useState(false);
 const [likeCount,setLikeCount] = useState(item.likecount);
 const [heart,setHeart] = useState(item?.post_like_status?.[0].flag == 1);
 const [result,setResult] = useState();

 const dispatch = useDispatch();
 const navigation = useNavigation();

 const localStorageData = async() => {
    const jsonValue = await AsyncStorage.getItem('USER_INFO');
    const data = await JSON.parse(jsonValue);
    const result = JSON.parse(data)['data'];
    setResult(result);
 }
//  console.log("item?.post_like_status---------------------------------------------------------------",item);

 const handleLikes = async (post_id) => {
  setLiked(!liked);
  const postDetails = {user_id:result.id, post_id:post_id}
  const sentResult = await dispatch(postLikeData(postDetails));
  const getallLikesData = await dispatch(getallLikes(postDetails));
  setLikeCount(getallLikesData?.payload?.getallLike?.[0]?.totalLike);
  // console.log("getallLikesData?.payload?.getallLike",getallLikesData?.payload?.getallLike);

  
  if(sentResult?.payload?.count){
    setLiked(true);
    setHeart(true);
  }else{
    setLiked(false);
    setHeart(false);
  }
 }



 useEffect(() => {
  localStorageData();
 },[])

 const GotoComments =(post_id,comments_list ) => {
  navigation.navigate('CommentsScreen', {post_id:post_id,comments_list });
 }
 
  return (
    <View>
     <View style={styles.publicReactionsContainer}>
              <View style={{ flexDirection: 'row',marginVertical:5,}}>
                <View style={styles.socialCount}>
                  <TouchableOpacity onPress={()=> handleLikes(item.post_id,item.likecount)} >
                      <AntDesign 
                        name={ liked || heart ? "heart":"hearto"} 
                        size={22} color="red" />
                  </TouchableOpacity>
                  <Text style={styles.socialCountText}>
                    {likeCount ? likeCount : parseInt(item.likecount)}
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
          {likeCount > 0 && 
           <View style={{flexDirection:'row',marginTop:5,marginLeft:10, marginBottom:10}}>
              <Image source={oval} style={styles.likedImage}/>
              <Image source={oval} style={styles.likedImage}/>
              <Image source={oval} style={styles.likedImage}/>
              <Text style={{fontSize:12, fontWeight:'400',color:'#51668A',padding:5}}>
                { likeCount == 1 ? `Liked by ${item?.post_like_status?.[0].username}` :
                `Liked by ${item?.post_like_status?.[0].username} and ${likeCount ? likeCount-1 : parseInt(item.likecount-1)} others`}
              </Text>
          </View>
          }
          </View>
  )
}

export default PublicReactions;
