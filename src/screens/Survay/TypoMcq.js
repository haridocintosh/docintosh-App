import React, {useState,useEffect} from 'react';
import { View, Text , StyleSheet, Dimensions,SafeAreaView, ScrollView, TextInput} from 'react-native'

const TypoMcq = ({ setLiftUpData,currentIndex,allMCQs,length}) => {

  return (
  <SafeAreaView style={{backgroundColor:'#ecf2f6',flex:1}}>
    <ScrollView keyboardShouldPersistTaps={'handled'}
    showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}>
      <View style={{paddingHorizontal:15}}>
        <View >
          <TextInput style={styles.inputText}
            autoCapitalize="none"
            placeholder='Type Here'
            onChangeText={(text)=>setLiftUpData(text)}
            maxLength={200}
            value={length}
          />
          <View style={styles.limitationTextContainer}>
            <Text style={styles.limitationText}>{length ? length.length: 0}/200</Text>
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