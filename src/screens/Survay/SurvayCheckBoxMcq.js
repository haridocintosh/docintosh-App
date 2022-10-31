import React, {useState} from 'react';
import { View, Text , StyleSheet, Dimensions,SafeAreaView, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CheckBox from 'react-native-check-box'

const SurvayCheckBoxMcq = ({setLiftUpData,currentIndex,allMCQs}) => {
  const [allMcq, setAllMcq]   = useState(allMCQs[currentIndex]);

    const handleChange = (opt_id) => {
      let temp = allMcq?.options.map((mcq) => {
        if (opt_id === mcq.opt_id) {
          return { ...mcq, checked: !mcq.checked };
        }
        return mcq;
      });
      // console.log("temp",temp);
      setAllMcq({ ...allMcq, options: temp });
      const optId = temp.filter(val => val.checked == true).map(temp => temp.opt_id);
      setLiftUpData(optId);
      // console.log("optId",optId);
    };
    

  return (
  <SafeAreaView style={{backgroundColor:'#ecf2f6',flex:1}}>
   
      <View style={{paddingHorizontal:15}}>
        <View >
            {
              allMcq?.options.map((data, i) => {
                // console.log("isChecked",data?.checked);
                return(
                  <View style={styles.SurvayOptions} key={i}>
                      <CheckBox
                        style={{ padding: 5}}
                        onClick={() => handleChange(data.opt_id)}
                        isChecked={data.checked}
                      />
                      <Text style={styles.optionS}>{data.options}</Text>
                  </View>
                )
              })
            }
        </View>
      </View>
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
    marginBottom:10,
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
  }
})
export default SurvayCheckBoxMcq