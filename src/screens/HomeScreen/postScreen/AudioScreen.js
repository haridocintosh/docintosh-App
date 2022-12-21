import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';

const AudioScreen = ({navigation}) => {



  const getAudioFiles = async () => {
    let media = await MediaLibrary.getAssetsAsync({
      mediaType: 'audio',
    });
    
    media = await MediaLibrary.getAssetsAsync({
      mediaType: 'audio',
      first: media.totalCount,
    });
    console.log("media",media);
  };

    const permissionAllert = () => {
        Alert.alert('Permission Required', 'This app needs to read audio files!',[
          {
            text: 'I am ready',
            onPress: () => getPermission(),
          },
          {
            text: 'cancle',
            onPress: () => permissionAllert(),
          },
        ]);
      };

    const getPermission = async () => {
      
        const permission = await MediaLibrary.getPermissionsAsync();
        console.log(permission);
        if (permission.granted){
           console.log("done");
            getAudioFiles();
        }
        if(!permission.granted && permission.canAskAgain){
            let { status, canAskAgain } = await MediaLibrary.requestPermissionsAsync()
            if(status === 'denied' && canAskAgain){
              permissionAllert();
            }
            if(status === 'granted'){
              getAudioFiles();
            }
            if(status === 'denied' && !canAskAgain){

            }
        }
    }
    

    useEffect(() => {
        navigation.setOptions({ title: `Audio's` });
        getPermission()
    },[])
  return (
    <View>
      <Text>AudioScreen</Text>
    </View>
  )
}

export default AudioScreen