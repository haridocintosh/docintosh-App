import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react';
import {FontAwesome,Foundation,Feather} from '@expo/vector-icons';
import Share from '../../assets/dr-icon/Share.png'
import socialComment from '../../assets/dr-icon/socialComment.png'
import gift from '../../assets/dr-icon/gift.png'


const PublicReactions = ({item}) => {
  return (
     <View style={styles.publicReactionsContainer}>
              <View style={{ flexDirection: 'row',marginVertical:5  }}>
                <View style={styles.socialCount}>
                  <TouchableOpacity>
                      {/* <Image source={SmilingFacewithHeart} onPress={()=>{setLiked(!liked)}}/> */}
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

const styles = StyleSheet.create({
    socialImages:{
        width:30,
        height:30
    },
    socialCount:{
        paddingLeft:20,
        flexDirection:'row',
        alignItems:'center'
    },
    publicReactionsContainer:{ 
        flex: 1, 
        flexDirection: 'row',
        marginTop:5
    },
    socialCountText:{
        paddingLeft:5,
        color:'#51668A'
    }
})