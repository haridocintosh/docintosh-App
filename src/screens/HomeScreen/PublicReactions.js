import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React, { useState } from 'react';
import Share from '../../assets/dr-icon/Share.png'
import socialComment from '../../assets/dr-icon/socialComment.png'
import gift from '../../assets/dr-icon/gift.png';
import {AntDesign,} from '@expo/vector-icons';
import { styles } from './Homestyle';


const PublicReactions = ({item}) => {
 const [liked,setLiked] = useState(false)
  return (
     <View style={styles.publicReactionsContainer}>
              <View style={{ flexDirection: 'row',marginVertical:5  }}>
                <View style={styles.socialCount}>
                  <TouchableOpacity>
                      <AntDesign name={liked?"heart":"hearto"} size={22} color="red" onPress={()=>{setLiked(!liked)}}/>
                  </TouchableOpacity>
                  <Text style={styles.socialCountText}>{item.likecount}k</Text>
                </View>

                <View style={styles.socialCount}>
                    <TouchableOpacity>
                        <Image source={gift} style={styles.socialImages}/>
                    </TouchableOpacity>
                  <Text style={styles.socialCountText}>{item.commentcount}K</Text>
                </View>
                
                <View style={styles.socialCount}>
                    <TouchableOpacity>
                        <Image source={socialComment} style={styles.socialImages}/>
                    </TouchableOpacity>
                  <Text style={styles.socialCountText}>240</Text>
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
