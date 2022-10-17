import * as React from 'react';
import { View, Text , StyleSheet, Image,SafeAreaView, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome5,FontAwesome,MaterialCommunityIcons,Feather,MaterialIcons,Ionicons ,Entypo,Fontisto} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import p2 from '../assets/images/p2.png';
import { Card, TextInput } from 'react-native-paper';


const SharePost = () => {
    const navigation = useNavigation();
    const [text, setText] = React.useState("");
  return (
  
    <ScrollView
    showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}
    style={{backgroundColor:'#fff'}}
    
    >
    <View style={{flex:1,paddingHorizontal:20,marginTop:10,  backgroundColor:'#fff',}}>
        <Card style={{height:50}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{marginRight:"60%",marginTop:10,marginLeft:10}}>
                <Entypo name="cross" size={22} color="black" onPress={() => navigation.navigate('HomeScreen')}/> Share Post</Text>
                <Text style={{position:'relative', alignSelf:'flex-end',color:'#cecece'}}>Post</Text>
            </View>
        </Card>
     <View style={{flexDirection:'row', marginTop:10}}>
     <View>
     <Image source={p2} style={{width:40, height:40, marginRight:30}}></Image>

     </View>
    <View style={{width:130, height:25, borderWidth:1, borderColor:"#000", borderRadius:50/2,marginTop:10 }}>
     <Text style={{alignSelf:'center', margin:2, fontSize:12}}><FontAwesome5 name="female" size={12} color="black" /> Bhavika Shankar</Text>
    </View>
    <View style={{width:130, height:25, borderWidth:1, borderColor:"#000", borderRadius:50/2,marginTop:10, marginLeft:10 }}>
     <Text style={{alignSelf:'center', margin:2, fontSize:12}}><Ionicons name="earth" size={12} color="black" />Anyone</Text>
    </View>
     </View>
  <View style={{height:200}}>
  <TextInput
      label="What’s on your mind?"
      value={text}
      onChangeText={text => setText(text)}
      style={{backgroundColor:'#fff', height:200, textAlign:'left',}}
      
    />

  </View>
  <Card style={{marginTop:130, marginBottom:20}}>
  <View style={{marginTop:'10%', padding:10}}>
  <TouchableOpacity>
      <View style={{flexDirection:'row'}}>
      <Entypo name="image" size={24} color="black"  style={{marginRight:10}}/>
        <Text style={{fontSize:16, fontWeight:'600'}}> Add a Photo</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{flexDirection:'row', marginTop:20}}>
      <Feather name="video" size={24} color="black" style={{marginRight:10}} />
        <Text style={{fontSize:16, fontWeight:'600'}}> Take A Video</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{flexDirection:'row', marginTop:20}}>
      <Ionicons name="document-attach-outline" size={24} color="black" style={{marginRight:10}} />
        <Text style={{fontSize:16, fontWeight:'600'}}> Add a document</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{flexDirection:'row', marginTop:20}}>
      <MaterialCommunityIcons name="doctor" size={24} color="black" style={{marginRight:10}} />
        <Text style={{fontSize:16, fontWeight:'600'}}> Find An Experts</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={{flexDirection:'row', marginTop:20}}>
      <MaterialIcons name="post-add" size={24} color="black"  style={{marginRight:10}}/>
        <Text style={{fontSize:16, fontWeight:'600'}}> Create Post</Text>
      </View>
      </TouchableOpacity>
        </View>
       
        </Card>

        </View>

          
        </ScrollView>
   
     
  )
}
const styles = StyleSheet.create({
  line:{
    borderWidth:1,
    borderColor:'#D5DEED',
    marginTop:17

  },
  listitemtxt:{
    fontSize:14, 
    fontWeight:'400',
    lineHeight:16
  },
  listview:{
    alignSelf:'flex-end',
    zIndex:1,
    marginTop:-15
  },
  margintop:{
    marginTop:20
  }

})
export default SharePost