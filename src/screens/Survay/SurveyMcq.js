import * as React from 'react';
import { View, Text , StyleSheet, Dimensions,SafeAreaView, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome5,FontAwesome,MaterialCommunityIcons,Feather,MaterialIcons,Ionicons,AntDesign ,Entypo,Fontisto} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import d from '../../assets/dr-icon/d.png';
import coupon from '../../assets/dr-icon/coupon1.png';
import { Card, TextInput } from 'react-native-paper';
import { ProgressBar} from 'react-native-paper';

const SurveyMcq = () => {
  const styling = {
   
  }

    const navigation = useNavigation();
    const [text, setText] = React.useState("");
  return (
  <SafeAreaView style={{backgroundColor:'#ecf2f6',flex:1}}>
    <ScrollView
    showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}
    >
      <View style={{padding:15}}>
        
        <View >
        <View style={styles.TopScoreContainer}>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.OutOff}>01</Text> 
            <Text style={styles.OutOffTotal}>/05</Text> 
          </View>

          <View style={styles.NexrPrevIcons}>
            <View style={{marginRight:15}}>
              <AntDesign name="leftcircle" size={25} color="#2C8892" onPress={() => navigation.navigate('SurvayCheckBoxMcq')} />
            </View>
            <View style={styles.iconStyle} >
              <AntDesign name="rightcircle" size={25} color="#2C8892"  onPress={() => navigation.navigate('SurvayCheckBoxMcq')} />
            </View>
          </View>

        </View>

        {/* score bar */}
        <ProgressBar 
            style={styles.Progressbar}
            color={"#45B5C0"} 
            progress={0.6}
        />
          
        {/* Question & Options */}
        <Text style={styles.SurvayQuestion}>For treating allergic rhinitis, would you recommend an intake of probiotics for your patients?</Text>
  
        <TouchableOpacity style={styles.SurvayOptions}>
            <View style={styles.count}>
              <Text style={styles.optionSeriel}>A</Text>
            </View>
            <Text style={styles.optionS}>he flow of blood to tissues beyond the clot may be cut off</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SurvayOptions}>
            <View style={styles.count}>
              <Text style={styles.optionSeriel}>B</Text>
            </View>
            <Text style={styles.optionS}>Platelets stick to the edges of the cut and to one another, forming a plug</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SurvayOptions}>
            <View style={styles.count}>
              <Text style={styles.optionSeriel}>C</Text>
            </View>
            <Text style={styles.optionS}>You would bleed to death</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SurvayOptions}>
            <View style={styles.count}>
              <Text style={styles.optionSeriel}>D</Text>
            </View>
            <Text style={styles.optionS}>A scab will form on the skin surface</Text>
        </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
     
  )
}
const styles = StyleSheet.create({
  margintop:{
    marginTop:20
  },
  count:{
     borderRadius:4,
     backgroundColor:'#F6F6F6',
     marginRight:10,
     height:35,
     width:35,
     justifyContent:'center',
     alignItems:'center'
  },
  card:{
    borderRadius:10/2,
    shadowOffset:0.4,
    shadowOpacity:0.4,
    shadowColor:'#D5DEED',
    elevation:3
  },
  OutOff:{
    fontSize:20,
    fontWeight:'700'
  },
  OutOffTotal:{
    fontSize:20,
  },
  NexrPrevIcons:{
    flexDirection:'row',
  },
  TopScoreContainer:{
    justifyContent:'space-between',
    flexDirection:'row',
    marginVertical:15
  },
  Progressbar:{
    width:"100%",
    borderRadius:7,
    height:6
  },
  SurvayQuestion:{marginVertical:18, fontSize:16, fontWeight:'600', color:'#071B36',lineHeight:24},

  SurvayOptions:{
    backgroundColor: "#fff",
    width:"100%",  
    marginTop:10,
    borderRadius:4,
    flexDirection:'row',
    paddingVertical:10,
    marginVertical:10,
    alignItems:'center',
    paddingHorizontal:15,
    borderColor:'#D5DEED',
    borderWidth:1
    
  },
  optionSeriel:{
    alignSelf:'center', 
    fontSize:20, 
    fontWeight:'400', 
    color:'#51668A'
  },
  optionS:{
    // borderWidth:1,
    width:Dimensions.get("window").width/1.34,
    color:'#51668A'
  }
})
export default SurveyMcq