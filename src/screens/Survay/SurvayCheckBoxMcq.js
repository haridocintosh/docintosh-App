import React, {useState} from 'react';
import { View, Text , StyleSheet, Dimensions,SafeAreaView, ScrollView } from 'react-native'
// import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';

const SurvayCheckBoxMcq = ({setLiftUpData,currentIndex,allMCQs}) => {
  const [allMcq, setAllMcq]   = useState(allMCQs[currentIndex]?.options);
  const [checked, setChecked]   = useState(false);
  const [isGivens, setIsGiven]   = useState(false);
  const [index, setIndex]   = useState([]);
  
    const navigation = useNavigation();
    // console.log("allMcq",allMCQs[0]);
    

    const handleCheckBox  = (opt_id, isGiven,basic_id, qid) => {
      setIndex(opt_id)
      // setChecked(index)
      // setIsGiven(!isGiven);
      const newState = allMcq?.map(obj =>
          obj.opt_id === opt_id ? { ...obj, isGiven : !obj.isGiven } : obj
      );

      const filterObj = newState.filter(d => d.isGiven == true)
      console.log("filterObj",filterObj?.map(d => d?.isGiven))
      // console.log("newState",newState);
      setIndex(newState);
    }
    // console.log("isGivens",isGivens);

    // console.log("allMCQs[currentIndex]?.options",allMCQs[currentIndex]?.options);
    

  return (
  <SafeAreaView style={{backgroundColor:'#ecf2f6',flex:1}}>
    <ScrollView
    showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}>
      <View style={{padding:15}}>
        <View >
        <Text style={styles.SurvayQuestion}>{allMCQs[currentIndex]?.question_title}</Text>
            {
              allMCQs[currentIndex]?.options.map((data, i) => {
                // console.log(data?.isGiven);
                return(
                  <View style={styles.SurvayOptions} key={i}>
                      <Checkbox style={{ width: 20, height: 20 }} 
                        key={i}
                        status={ i == index? 'checked' : 'unchecked'}
                        color={'#2C8892'}
                        checked={data.isGiven}
                        onPress={() => handleCheckBox(data.opt_id,data.isGiven, allMCQs[currentIndex]?.basic_id, allMCQs[currentIndex]?.qid)}
                      />
                      <Text style={styles.optionS}>{data.options}</Text>
                  </View>
                )
              })
            }
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
  }
})
export default SurvayCheckBoxMcq