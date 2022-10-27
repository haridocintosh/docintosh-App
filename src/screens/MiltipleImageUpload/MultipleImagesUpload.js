import { View, Text , StyleSheet, TouchableOpacity, FlatList, Image, Platform, PermissionsAndroid} from 'react-native'
import React, {useEffect, useState} from 'react'
// import ImagePicker from 'react-native-image-crop-picker';

const MultipleImagesUpload = () => {
    const [images, setImages] = useState([]);

    const requestExternalWritePermission = async () => {
      if (Platform.OS === 'android'){
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Access to photos',
              message: 'Our App would like to access your photos on your device',
              buttonNegative: 'Deny',
              buttonPositive: 'Allow',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return granted;
          } else {
            console.log('Camera permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
      } else {
        return true;
      }
    };


    const openImageLibrary = async () => {
      let isStoragePermitted = await requestExternalWritePermission();
      if (isStoragePermitted) {
        await openPicker({
          multiple: true,
          mediaType: 'photo',
          maxFiles: `4`,
          showsSelectedCount: true,
        }).then(imgs => {
          if (imgs.length <= 4) {
            setImages([...images, ...imgs]);
          } else {
            setImages([...images]);
            // ToastAndroid.show("Maximum of 4 images allowed", ToastAndroid.SHORT);
          }
        });
      }
    };

  return (
    <View>
      <Text>MultipleImagesUplad</Text>
      {/* <FlatList
        data={image}
        horizontal
        renderItem={({item}) =>(
            <Image 
              source={{ uri: item.uri }} 
              style={{ width: 70, height: 70, margin:10 }} 
            />
        )}
        keyExtractor={(item) => item.url}
    /> */}
        <TouchableOpacity onPress={() => openImageLibrary()} style={styles.flatlist}>
          <Text style={styles.selectPhoto}>Select Photos</Text>
        </TouchableOpacity>
    </View>
  )
}

export default MultipleImagesUpload;

const styles = StyleSheet.create({
    flatlist:{
        backgroundColor:"blue",
        borderRadius:4,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:15
    },
    selectPhoto:{
        color: '#fff',
        fontSize:18,
     },
});