import React,{useState} from 'react';
import { View, Text , StyleSheet, Dimensions,SafeAreaView, ScrollView,TouchableOpacity} from 'react-native'


const RadioMcq = ({setLiftUpData,currentIndex,allMCQs,nextMcq}) => {

  const validateAnswer = async (ans,basic_id,qid) =>{
    setLiftUpData(ans.opt_id);
    nextMcq(basic_id,qid)
  }
  
  return (
    <SafeAreaView style={{backgroundColor:'#ecf2f6',flex:1}}>
    <ScrollView
    showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}>
      <View style={{padding:15}}>
        <View >
        <Text style={styles.SurvayQuestion}>{allMCQs[currentIndex]?.question_title}</Text>
           {allMCQs[currentIndex]?.options.map((data, i) => {
              return(
                <TouchableOpacity style={styles.SurvayOptions} 
                 onPress={()=> validateAnswer(data ,allMCQs[currentIndex]?.basic_id, allMCQs[currentIndex]?.qid)} key={i}>
                  <View style={styles.count}>
                    <Text style={styles.optionSeriel}>
                      {i == 0 ?"A":i == 1? "B":i == 2? "C":i == 3? "D": i == 4 ?"E": "F"}
                    </Text>
                  </View>
                  <Text style={styles.optionS}> {data.options}</Text>
                </TouchableOpacity>
              )
            })}
        </View>
      </View>
      </ScrollView>
  </SafeAreaView>
  )
}

export default RadioMcq;

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