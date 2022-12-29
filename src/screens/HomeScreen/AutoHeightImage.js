import { View, Text, Image,StyleSheet } from 'react-native'
import React, { useState, useCallback } from 'react'
import Swiper from 'react-native-swiper';

const AutoHeightImage = ({attachArray}) => {
  
  const renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{ color: 'grey' }}>
          <Text style={styles.paginationText}>{index + 1}</Text>/{total}
        </Text>
      </View>
    )
  }

  return (
      <Swiper style={styles.wrapper}>
        {attachArray?.map((data) => {
          return(
            <Image source={data?.filename?{uri:data?.filename}:''} 
            style={{width:"100%", height:350,marginHorizontal:10,alignSelf:'center',}} 
            resizeMode={"contain"}/> 
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
