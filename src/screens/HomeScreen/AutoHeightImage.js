import { View, Text, Image,StyleSheet } from 'react-native'
import React, { useState } from 'react'

const AutoHeightImage = ({autoHeightImg}) => {

  return (
    <View>
        <Image source={autoHeightImg?{uri:autoHeightImg}:''} 
            style={{width:"100%", height:350,marginHorizontal:10,alignSelf:'center',}} 
            resizeMode={"contain"}/>
    </View>
  )
}

export default AutoHeightImage