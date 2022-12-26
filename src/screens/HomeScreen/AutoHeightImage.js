import { View, Text, Image,StyleSheet } from 'react-native'
import React, { useState } from 'react'

const AutoHeightImage = ({autoHeightImg}) => {
    const [autoHeight, setAutoHeight] = useState();

    const ImageAutoHeight = (imag) => {
      Image.getSize(imag, (width, height) => { setAutoHeight({width,height})});
    }

      // console.log("autoHeight",autoHeight?.width);
      // Image.resolveAssetSource()

  return (
    <View>
        {ImageAutoHeight(autoHeightImg)}
        {/* <Text>{autoHeight?.width} {" "} {autoHeight?.height}</Text> */}
        <Image source={autoHeightImg?{uri:autoHeightImg}:''} 
            style={{width:"100%", height:350,marginHorizontal:10,alignSelf:'center',}} 
            resizeMode={"contain"}/>
    </View>
  )
}

export default AutoHeightImage