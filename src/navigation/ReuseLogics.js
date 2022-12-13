import { Text } from "react-native"; 
import * as ImagePicker from 'expo-image-picker'; 

export const showHeaderItem = {
      headerShown: true,  
      headerStyle: { backgroundColor: '#071B36'},
      headerTintColor: '#fff',
};
export const showHeaderItemBackless = {
      headerShown: true,  
      headerStyle: { backgroundColor: '#071B36'},
      headerTintColor: '#fff',
      headerLeft: () => <Text/>
};

export const PickImage = async (arg) => {
   const { granted } = await ImagePicker.requestCameraPermissionsAsync();
      if (granted === true) {
            if(arg==1){
                  var camera = await ImagePicker.launchCameraAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  allowsEditing: false,
                  aspect: [1, 1],
                  quality: 0.5,
                  });
                  if (!camera.cancelled) {
                        return camera;
                  }
                  
            }else{
                  var library = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  allowsEditing: false,
                  aspect: [1, 1],
                  quality: 0.5,
                  });
                  if (!library.cancelled) {
                        return library;
                  }
            }
      } else {
            const denied = 'Camera permission denied';
            // alert("You've refused to allow this app to access your camera!");
            return denied;
      }

}