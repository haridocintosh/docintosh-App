import { View, Text, Image,StyleSheet } from 'react-native'
import React, { useState } from 'react'

const AutoHeightImage = ({autoHeightImg,width}) => {
    const [autoHeight, setAutoHeight] = useState();

    const ImageAutoHeight = (imag) => {
        Image.getSize(imag, (widt, height) => { setAutoHeight(height)});
      }
      console.log(autoHeight);

  return (
    <>
        {ImageAutoHeight(autoHeightImg)}<Text>{autoHeight}</Text>
        <Image source={autoHeightImg?{uri:autoHeightImg}:''} 
            style={{width:"100%", height:autoHeight,marginHorizontal:10,alignSelf:'center'}} 
            resizeMode={"contain"}/>
    </>
  )
}

export default AutoHeightImage