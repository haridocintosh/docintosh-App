import * as React from 'react';
import { View, Text , StyleSheet, Image,SafeAreaView, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome5,FontAwesome,MaterialCommunityIcons,Feather,MaterialIcons,Ionicons,AntDesign ,Entypo,Fontisto} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import d from '../assets/dr-icon/d.png';
// import ts from '../assets/dr-icon/ts.png';
//import rocketpath from '../assets/images/rocketpath.png';
//import { Card, TextInput } from 'react-native-paper';




const ReportPost = () => {
    const navigation = useNavigation();
    const [text, setText] = React.useState("");
  return (
  <SafeAreaView
  style={{
    backgroundColor:'#9CDCD6',
    margin:10
  }}>
  <View>

 

<Image source={rocketpath}
    style={{alignSelf:'center',}}
/>




  </View>
 


       
        </SafeAreaView>
     
  )
}
const styles = StyleSheet.create({
  
 

  

})
export default ReportPost