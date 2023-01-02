import { View, Text, Image,StyleSheet } from 'react-native'
import React, { useState, useRef } from 'react'
import Swiper from 'react-native-swiper';
import { Audio, Video } from 'expo-av';

const AutoHeightImage = ({item}) => {
  // const [index, setIndex] = useState(0);
  
  const video = useRef(null);
  
  const renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{ color: 'grey' }}>
          <Text style={styles.paginationText}>{index + 1}</Text>/{total}
        </Text>
      </View>
    )
  }

  // const handleIndex = (i) => {
  //   setIndex(i);
  // }

  return (
      <Swiper style={styles.wrapper} > 
        {item?.attach_array?.map((data,i) => {
          return(
            <View key={i}>
              {data?.filename?.includes("mp4") ? 
              <Video
                  ref={video}
                  resizeMode={"contain"}
                  source={item?.attach_array.length > 0 ? {uri:data?.filename} :item.imgPath} 
                  useNativeControls
                  // shouldPlay={!videoPlayPause ? videoPlayPause : status[item.id]}
                  isLooping={false}
                  style={{width: "100%", height:300, marginHorizontal:10}} 
              />
              :
              <Image source={item?.attach_array.length > 0?{uri:data?.filename}:item.imgPath} 
                style={{width:"100%", height:350,marginHorizontal:10,alignSelf:'center',}} 
                resizeMode={"contain"}/> 
              }
            </View>
          )
      })} 
       </Swiper> 
  )
}

export default AutoHeightImage

export const styles = StyleSheet.create({
  wrapper:{
    height:350,
  },
  paginationStyle:{
    position:'absolute',
    right:15,
    top:15,
    backgroundColor:'#f2f2f2',
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:20
  },


})
