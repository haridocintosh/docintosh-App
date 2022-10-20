import React, {useState} from 'react';
import { View, Text , StyleSheet, Dimensions,SafeAreaView, ScrollView, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar, Checkbox} from 'react-native-paper';

const TypoMcq = () => {
  const [updateAnswer, setUpdateAnswer]   = useState(0);
    const navigation = useNavigation();
    
    console.log("updateAnswer",updateAnswer.length);
    // const updateAnswer = (text) =>{

    // }
  return (
  <SafeAreaView style={{backgroundColor:'#ecf2f6',flex:1}}>
    <ScrollView
    showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}>
      <View style={{padding:15}}>
        
        <View >
        <View style={styles.TopScoreContainer}>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.OutOff}>02</Text> 
            <Text style={styles.OutOffTotal}>/05</Text> 
          </View>

          <View style={styles.NexrPrevIcons}>
            <View style={{marginRight:15}}>
              <AntDesign name="leftcircle" size={25} color="#2C8892" onPress={() => navigation.navigate('Survey1')} />
            </View>
            <View style={styles.iconStyle} >
              <AntDesign name="rightcircle" size={25} color="#2C8892"  onPress={() => navigation.navigate('Survey1')} />
            </View>
          </View>

        </View>

        {/* score bar */}
        <ProgressBar 
            style={styles.Progressbar}
            color={"#45B5C0"} 
            progress={1/10}
        />
          
        {/* Question & Options */}
        <Text style={styles.SurvayQuestion}>For treating allergic rhinitis, would you recommend an intake of probiotics for your patients?</Text>
        <TextInput style={styles.inputText}
          autoCapitalize="none"
          placeholder='Type Here'
          onChangeText={(text)=>setUpdateAnswer(text)}
          maxLength={200}
         />
         <View style={styles.limitationTextContainer}>
           <Text style={styles.limitationText}>{updateAnswer ? updateAnswer.length: 0}/200</Text>
         </View>
      
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
  SurvayQuestion:{
    marginVertical:18, 
    fontSize:16, 
    fontWeight:'600', 
    color:'#071B36',
    lineHeight:24,
},

  SurvayOptions:{
    backgroundColor: "#fff",
    width:"100%",  
    borderRadius:4,
    flexDirection:'row',
    paddingVertical:10,
    marginVertical:10,
    alignItems:'center',
    paddingHorizontal:10,
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
  },
  CheckBox:{
    marginRight:10
  },
  inputText: {
    fontSize: 14,
    color: "#071B36",
    height: 48,
    width: "100%",
    borderBottomWidth: 1,
    paddingRight: 19,
    borderColor: "#51668A",
    marginVertical: 12,
    paddingLeft: 8,

  },
  limitationTextContainer:{
    // borderWidth:1,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    flexDirection:'row'
  },
  limitationText:{
    color:'#51668A'
  }
})
export default TypoMcq