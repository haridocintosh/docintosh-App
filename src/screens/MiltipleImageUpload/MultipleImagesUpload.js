import { View, Text , StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native'
import React, {useState} from 'react'
// import * as ImagePicker from 'expo-image-picker';
// import ImagePicker from 'react-native-image-crop-picker';
// import { AssetsSelector } from 'expo-images-picker'
// import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';

const MultipleImagesUpload = () => {
    const [image, setImage] = useState([]);



    const pickImage = async () => {
        try {
            const response = await ImagePicker.openPicker({
                multiple: true
              }).then(images => {
                console.log(images);
              });
            console.log('response: ', response);
            // setImage(response);
          } catch (e) {
            console.log(e.code, e.message);
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
        <TouchableOpacity onPress={() => pickImage()} style={styles.flatlist}>
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