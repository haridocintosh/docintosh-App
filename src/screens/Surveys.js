import * as React from 'react';
import { View, Text , StyleSheet, Image,SafeAreaView, ScrollView} from 'react-native'
import { FontAwesome5,FontAwesome,MaterialCommunityIcons,Feather,MaterialIcons,Ionicons,AntDesign ,Entypo,Fontisto} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import d from '../assets/dr-icon/d.png';
import coupon from '../assets/dr-icon/coupon1.png';
import { Card, TextInput } from 'react-native-paper';




const Surveys = () => {
    const navigation = useNavigation();
    const [text, setText] = React.useState("");
  return (
  <SafeAreaView>
    <ScrollView
    showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}
    style={{backgroundColor:'#E6E6E6'}}>
   
<View style={{padding:10}}>
  <View style={{marginTop:10}}>
    <Card style={{borderRadius:10/2}} onPress={()=>{ navigation.navigate('Survey1') }} >
      <View style={styles.incompletebg}>
      <Text style={{alignSelf:'center', fontSize:14, fontWeight:'400'}}>Incomplete</Text>
      </View>
      <Text style={{fontSize:16, fontWeight:'600',margin:15}}>Bombay Survey - Allergies Survey for Doctor</Text>
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'#45B5C0', width:17,borderRadius:10/2, height:17, marginLeft:10}}>
        <AntDesign name="question" size={16} color="white" />
        </View>
        <View style={{marginLeft:5}}><Text>05 Questions</Text></View>
        <View style={{marginLeft:15}}><Text>|</Text></View>
        <FontAwesome name="users" size={14} color="#45B5C0" style={{marginTop:1, marginLeft:10}}/>
          <Text style={{marginLeft:5}}>18260 Participants</Text>
      </View>
      <View style={{margin:15, flexDirection:'row'}}>
        <View style={styles.doccoin}>
          <View style={styles.d}>
            <Image source={d} style={{width:20, height:20, marginRight:5}}/>
            <Text>25</Text>
          </View>
        </View>
        <View style={styles.doccoin}>
          <View style={styles.d}>
            <Image source={coupon} style={{width:20, height:20, marginRight:5}}/>
            <Text>1</Text>
          </View>
        </View>
      </View>
    </Card>

    <View style={styles.margintop}></View>
    <Card style={{borderRadius:10/2}}>
    <View style={{flexDirection:'row'}}>
    <View style={styles.incompletebg}>
      <Text style={{alignSelf:'center', fontSize:14, fontWeight:'400'}}>Incomplete</Text>
      </View>
      <View style={{alignSelf:'center', position:'relative', marginHorizontal:80 }}>
      <Text style={{color:'red',}}><MaterialCommunityIcons name="clock-time-five-outline" size={16} color="red" /> Expairing on 27 August</Text>
      </View>
     
    </View>
      
      <Text style={{fontSize:16, fontWeight:'600',margin:15}}>Bombay Survey - Allergies Survey for Doctor</Text>
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'#45B5C0', width:17,borderRadius:10/2, height:17, marginLeft:10}}>
        <AntDesign name="question" size={16} color="white" />
        </View>
        <View style={{marginLeft:5}}><Text>05 Questions</Text></View>
       
        <View style={{marginLeft:15}}><Text>|</Text></View>
        <FontAwesome name="users" size={14} color="#45B5C0" style={{marginTop:1, marginLeft:10}}/>
        <Text style={{marginLeft:5}}>
        
       18260 Participants</Text>
        
      </View>
      <View style={{margin:15, flexDirection:'row'}}>
        <View style={styles.doccoin}>
          <View style={styles.d}>
            <Image source={d} style={{width:20, height:20, marginRight:5}}/>
            <Text>25</Text>
          </View>
        </View>
        <View style={styles.doccoin}>
          <View style={styles.d}>
            <Image source={coupon} style={{width:20, height:20, marginRight:5}}/>
            <Text>1</Text>
          </View>
        </View>
      </View>
    </Card>

    <View style={styles.margintop}></View>

    <Card style={{borderRadius:10/2}}>
    <View style={{flexDirection:'row'}}>
    <View style={styles.completebg}>
      <Text style={{alignSelf:'center', fontSize:14, fontWeight:'400'}}>Complete</Text>
      </View>
     
    </View>
      
      <Text style={{fontSize:16, fontWeight:'600',margin:15}}>Bombay Survey - Allergies Survey for Doctor</Text>
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'#45B5C0', width:17,borderRadius:10/2, height:17, marginLeft:10}}>
        <AntDesign name="question" size={16} color="white" />
        </View>
        <View style={{marginLeft:5}}><Text>05 Questions</Text></View>
       
        <View style={{marginLeft:15}}><Text>|</Text></View>
        <FontAwesome name="users" size={14} color="#45B5C0" style={{marginTop:1, marginLeft:10}}/>
        <Text style={{marginLeft:5}}>
        
       18260 Participants</Text>
        
      </View>
      <View style={{margin:15, flexDirection:'row'}}>
        <View style={styles.doccoin}>
          <View style={styles.d}>
            <Image source={d} style={{width:20, height:20, marginRight:5}}/>
            <Text>25</Text>
          </View>
        </View>
        <View style={styles.doccoin}>
          <View style={styles.d}>
            <Image source={coupon} style={{width:20, height:20, marginRight:5}}/>
            <Text>1</Text>
          </View>
        </View>
      </View>
    </Card>
    <View style={styles.margintop}></View>
    <Card style={{borderRadius:10/2}}>
    <View style={{flexDirection:'row'}}>
    <View style={styles.incompletebg}>
      <Text style={{alignSelf:'center', fontSize:14, fontWeight:'400'}}>Incomplete</Text>
      </View>
      <View style={{alignSelf:'center', position:'relative', marginHorizontal:80 }}>
      <Text style={{color:'red',}}><MaterialCommunityIcons name="clock-time-five-outline" size={16} color="red" /> Expairing on 27 August</Text>
      </View>
     
    </View>
      
      <Text style={{fontSize:16, fontWeight:'600',margin:15}}>Bombay Survey - Allergies Survey for Doctor</Text>
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'#45B5C0', width:17,borderRadius:10/2, height:17, marginLeft:10}}>
        <AntDesign name="question" size={16} color="white" />
        </View>
        <View style={{marginLeft:5}}><Text>05 Questions</Text></View>
       
        <View style={{marginLeft:15}}><Text>|</Text></View>
        <FontAwesome name="users" size={14} color="#45B5C0" style={{marginTop:1, marginLeft:10}}/>
        <Text style={{marginLeft:5}}>
        
       18260 Participants</Text>
        
      </View>
      <View style={{margin:15, flexDirection:'row'}}>
        <View style={styles.doccoin}>
          <View style={styles.d}>
            <Image source={d} style={{width:20, height:20, marginRight:5}}/>
            <Text>25</Text>
          </View>
        </View>
        <View style={styles.doccoin}>
          <View style={styles.d}>
            <Image source={coupon} style={{width:20, height:20, marginRight:5}}/>
            <Text>1</Text>
          </View>
        </View>
      </View>
    </Card>
  </View>
</View>
          
        </ScrollView>
        </SafeAreaView>
     
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
  },
  doccoin:{
    backgroundColor:'#45B5C00D',
    width:77, height:34,
     borderRadius:40/2,
     borderColor:'#45B5C0',
     borderWidth:1 ,
     marginRight:16,
  },
  incompletebg:{
    borderRadius:20,
     backgroundColor:'#FFD6D6',
     width:84,
     height:25,
     alignSelf:'flex-start',
     margin:15
  },
  completebg:{
    borderRadius:20,
     backgroundColor:'#B0DBCC',
     width:84,
     height:25,
     alignSelf:'flex-start',
     margin:15
  },

  d:{
    alignSelf:'center',
     flexDirection:'row',
     marginVertical:5,
  }

})
export default Surveys