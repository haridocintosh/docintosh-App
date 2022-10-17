import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome5,FontAwesome,Feather,Ionicons ,Fontisto} from '@expo/vector-icons';


const ReportPost = () => {
  return (
    <View style={{flex:1,padding:25, marginTop:50, backgroundColor:'#fff',}}>
        
     <View>
        <Text style={{fontSize:18, fontWeight:'600',}}>What’s going wrong?</Text>
     </View>
        <View style={styles.margintop}>
            <Text style={styles.listitemtxt}> Harassment or Bullying </Text>
            
        </View>
        <View style={styles.listview}>
        <FontAwesome name="chevron-right" size={16} color="black"  />
        </View>
  <View style={styles.line}></View>
      
  <View style={styles.margintop}>
            <Text style={styles.listitemtxt}> Hate Speech </Text>
            
        </View>
        <View style={styles.listview}>
        <FontAwesome name="chevron-right" size={16} color="black"  />
        </View>
  <View style={styles.line}></View>
  <View style={styles.margintop}>
            <Text style={styles.listitemtxt}> Spams </Text>
            
        </View>
        <View style={styles.listview}>
        <FontAwesome name="chevron-right" size={16} color="black"  />
        </View>
  <View style={styles.line}></View>
  <View style={styles.margintop}>
            <Text style={styles.listitemtxt}> Voilation </Text>
            
        </View>
        <View style={styles.listview}>
        <FontAwesome name="chevron-right" size={16} color="black"  />
        </View>
  <View style={styles.line}></View>
  <View style={styles.margintop}>
            <Text style={styles.listitemtxt}> Nudity or Sexual Activity</Text>
            
        </View>
        <View style={styles.listview}>
        <FontAwesome name="chevron-right" size={16} color="black"  />
        </View>
  <View style={styles.line}></View>
  <View style={styles.margintop}>
            <Text style={styles.listitemtxt}> False Information </Text>
            
        </View>
        <View style={styles.listview}>
        <FontAwesome name="chevron-right" size={16} color="black"  />
        </View>
  <View style={styles.line}></View>
  <View style={styles.margintop}>
            <Text style={styles.listitemtxt}> Unauthorized Sales </Text>
            
        </View>
        <View style={styles.listview}>
        <FontAwesome name="chevron-right" size={16} color="black"  />
        </View>
  <View style={styles.line}></View>
      
        </View>

          
     
     
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
export default ReportPost